import * as THREE from 'three';

/**
 * Generates the cloth's nap.
 *
 * Billiard cloth is woven wool, so a flat colour reads as plastic no matter how
 * good the lighting is. A tiling noise field used as a bump and roughness map
 * gives it a weave that catches the lamps, for the cost of one 256px canvas.
 */
function noiseCanvas(size = 256): HTMLCanvasElement {
  const canvas = document.createElement('canvas');
  canvas.width = canvas.height = size;
  const ctx = canvas.getContext('2d')!;
  const img = ctx.createImageData(size, size);

  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      // Fine grain, plus a faint directional streak along the nap.
      const grain = Math.random() * 46;
      const weave = Math.sin(y * 1.9) * 5 + Math.sin(x * 2.3) * 3;
      const v = 150 + grain + weave;
      const i = (y * size + x) * 4;
      img.data[i] = img.data[i + 1] = img.data[i + 2] = v;
      img.data[i + 3] = 255;
    }
  }

  ctx.putImageData(img, 0, 0);
  return canvas;
}

export function makeFeltMaps(repeat = 26) {
  const tex = new THREE.CanvasTexture(noiseCanvas());
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
  tex.repeat.set(repeat, repeat / 2);
  tex.anisotropy = 4;
  return tex;
}
