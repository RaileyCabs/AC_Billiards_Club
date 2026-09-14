import * as THREE from 'three';

/** Standard pool ball colours, indexed 1-7 (solids) and reused for 9-15 (stripes). */
const BALL_COLORS: Record<number, string> = {
  1: '#f2c014',
  2: '#1250a8',
  3: '#c62128',
  4: '#5b2a86',
  5: '#e8701a',
  6: '#127a45',
  7: '#7d1f23',
  8: '#141414',
};

const SIZE = 512;

/**
 * Paints an equirectangular texture for a numbered ball.
 *
 * The sphere's default UV maps u to longitude and v to latitude, so a
 * horizontal band in the canvas becomes a band around the ball's equator —
 * which is exactly how a stripe ball is painted.
 */
export function makeBallTexture(num: number): THREE.CanvasTexture {
  const canvas = document.createElement('canvas');
  canvas.width = SIZE;
  canvas.height = SIZE / 2;
  const ctx = canvas.getContext('2d')!;
  const w = canvas.width;
  const h = canvas.height;

  const isStripe = num > 8;
  const color = BALL_COLORS[isStripe ? num - 8 : num] ?? '#141414';

  if (num === 0) {
    ctx.fillStyle = '#f7f5ef';
    ctx.fillRect(0, 0, w, h);
    return finish(canvas);
  }

  if (isStripe) {
    ctx.fillStyle = '#f7f5ef';
    ctx.fillRect(0, 0, w, h);
    ctx.fillStyle = color;
    ctx.fillRect(0, h * 0.26, w, h * 0.48);
  } else {
    ctx.fillStyle = color;
    ctx.fillRect(0, 0, w, h);
  }

  // Number discs on opposite sides of the equator.
  for (const u of [0.25, 0.75]) {
    const cx = u * w;
    const cy = h * 0.5;
    const r = h * 0.19;

    ctx.beginPath();
    ctx.arc(cx, cy, r, 0, Math.PI * 2);
    ctx.fillStyle = '#f7f5ef';
    ctx.fill();

    ctx.fillStyle = '#141414';
    ctx.font = `600 ${Math.round(r * 1.25)}px "Helvetica Neue", Arial, sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(String(num), cx, cy + r * 0.06);
  }

  return finish(canvas);
}

function finish(canvas: HTMLCanvasElement): THREE.CanvasTexture {
  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = 4;
  return tex;
}
