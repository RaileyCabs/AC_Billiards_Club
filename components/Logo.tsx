/**
 * The club's logo, rebuilt as vector art.
 *
 * The real thing is the neon sign on the wall (see the gallery): a rack
 * triangle, "BILLIARDS" over a gold bar, and "Atlantic City" in script. Drawing
 * it rather than shipping a photo keeps it crisp at every size, lets it sit on
 * either theme, and costs a few kB instead of a few hundred.
 */

const RED = '#e03a2f';
const GOLD = '#f0c43c';
const PINK = '#e8465c';
const TUBE = '#7b7fd4';

/** Chrome joint where two neon tubes meet at a corner of the rack. */
function Joint({ x, y, r }: { x: number; y: number; r: number }) {
  return (
    <g transform={`translate(${x} ${y}) rotate(${r})`}>
      <rect x={-15} y={-7.5} width={30} height={15} rx={7.5} fill="url(#acbc-chrome)" />
    </g>
  );
}

export function LogoMark({ size = 34, className }: { size?: number; className?: string }) {
  return (
    <svg
      viewBox="0 0 120 120"
      width={size}
      height={size}
      className={className}
      role="img"
      aria-label="Atlantic City Billiard Club"
      fill="none"
    >
      <defs>
        <linearGradient id="acbc-chrome-sm" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#f2f4f8" />
          <stop offset="0.5" stopColor="#9aa1ad" />
          <stop offset="1" stopColor="#e6e9ef" />
        </linearGradient>
      </defs>

      <path
        d="M60 16 L104 100 L16 100 Z"
        stroke={TUBE}
        strokeWidth={9}
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      <circle cx={93} cy={93} r={24} fill="#101014" />
      <circle cx={93} cy={93} r={10.5} fill="#f7f5ef" />
      <text
        x={93}
        y={93}
        textAnchor="middle"
        dominantBaseline="central"
        fontSize={14}
        fontWeight={700}
        fill="#101014"
        fontFamily="var(--font-archivo), Arial, sans-serif"
      >
        8
      </text>
    </svg>
  );
}

export default function Logo({
  width = 300,
  className,
  glow = false,
}: {
  width?: number;
  className?: string;
  glow?: boolean;
}) {
  return (
    <svg
      viewBox="0 0 600 400"
      width={width}
      className={className}
      role="img"
      aria-label="Atlantic City Billiard Club"
      fill="none"
    >
      <defs>
        <linearGradient id="acbc-chrome" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#f2f4f8" />
          <stop offset="0.45" stopColor="#8d94a1" />
          <stop offset="1" stopColor="#e6e9ef" />
        </linearGradient>

        {/* A soft bloom, the way the real tubes bleed onto the wall. */}
        <filter id="acbc-glow" x="-25%" y="-25%" width="150%" height="150%">
          <feGaussianBlur stdDeviation="7" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <g filter={glow ? 'url(#acbc-glow)' : undefined}>
        {/* Rack triangle, drawn as two open runs so the wordmark can sit across it. */}
        <path
          d="M300 34 L389 196"
          stroke={TUBE}
          strokeWidth={13}
          strokeLinecap="round"
        />
        <path d="M211 196 L300 34" stroke={TUBE} strokeWidth={13} strokeLinecap="round" />
        <path
          d="M186 241 L94 372 L506 372 L414 241"
          stroke={TUBE}
          strokeWidth={13}
          strokeLinejoin="round"
          strokeLinecap="round"
        />

        <Joint x={300} y={34} r={0} />
        <Joint x={96} y={370} r={-55} />
        <Joint x={504} y={370} r={55} />

        <text
          x={300}
          y={196}
          textAnchor="middle"
          textLength={410}
          lengthAdjust="spacingAndGlyphs"
          fontFamily="var(--font-archivo), 'Helvetica Neue', Arial, sans-serif"
          fontWeight={800}
          fontSize={112}
          fill={RED}
        >
          BILLIARDS
        </text>

        <rect x={95} y={214} width={410} height={11} rx={5.5} fill={GOLD} />

        <text
          x={296}
          y={290}
          textAnchor="middle"
          textLength={224}
          lengthAdjust="spacingAndGlyphs"
          fontFamily="var(--font-script), 'Brush Script MT', cursive"
          fontSize={74}
          fill={PINK}
        >
          Atlantic
        </text>
        <text
          x={284}
          y={352}
          textAnchor="middle"
          textLength={132}
          lengthAdjust="spacingAndGlyphs"
          fontFamily="var(--font-script), 'Brush Script MT', cursive"
          fontSize={74}
          fill={PINK}
        >
          City
        </text>

        <circle cx={497} cy={360} r={38} fill="#101014" />
        <circle cx={497} cy={360} r={17} fill="#f7f5ef" />
        <text
          x={497}
          y={360}
          textAnchor="middle"
          dominantBaseline="central"
          fontFamily="var(--font-archivo), Arial, sans-serif"
          fontWeight={700}
          fontSize={24}
          fill="#101014"
        >
          8
        </text>
      </g>
    </svg>
  );
}
