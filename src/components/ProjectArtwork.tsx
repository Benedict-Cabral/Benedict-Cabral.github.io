import type { Project } from "../data";

export function ProjectArtwork({ variant }: { variant: Project["artwork"] }) {
  return (
    <div className={`project-artwork artwork-${variant}`} aria-hidden="true">
      <svg viewBox="0 0 360 200" fill="none">
        <defs>
          <pattern
            id={`grid-${variant}`}
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="1" cy="1" r=".65" fill="currentColor" opacity=".18" />
          </pattern>
        </defs>
        <rect width="360" height="200" fill={`url(#grid-${variant})`} />
        {variant === "network" && (
          <>
            {[0, 1, 2].flatMap((layer) =>
              Array.from({ length: layer === 0 ? 3 : 4 }, (_, n) =>
                Array.from({ length: layer === 2 ? 2 : 4 }, (_, next) => (
                  <path
                    key={`${layer}-${n}-${next}`}
                    d={`M${65 + layer * 78} ${layer === 0 ? 60 + n * 40 : 40 + n * 40}L${143 + layer * 78} ${layer === 2 ? 80 + next * 40 : 40 + next * 40}`}
                    stroke="currentColor"
                    strokeWidth=".7"
                    opacity=".19"
                  />
                )),
              ),
            )}
            {[3, 4, 4, 2].flatMap((count, layer) =>
              Array.from({ length: count }, (_, n) => (
                <circle
                  key={`${layer}-${n}`}
                  cx={65 + layer * 78}
                  cy={100 - (count - 1) * 20 + n * 40}
                  r={6}
                  fill={layer === 3 ? "#b59a56" : "#f0f0e9"}
                  stroke={layer === 3 ? "#b59a56" : "#707568"}
                  strokeWidth="1.2"
                />
              )),
            )}
            <path d="m143 80 78 40 78-40" stroke="#ab904a" strokeWidth="1.7" />
            <circle cx="143" cy="80" r="6" fill="#b59a56" />
            <circle cx="221" cy="120" r="6" fill="#b59a56" />
          </>
        )}
        {variant === "language" && (
          <>
            <rect
              x="61"
              y="39"
              width="116"
              height="112"
              rx="5"
              fill="#f4f3ee"
              stroke="#a9aba0"
            />
            <path
              d="M79 60h44m-44 13h76m-76 13h63m-63 13h72m-72 13h47m-47 13h62"
              stroke="#a9aba0"
              strokeWidth="3"
            />
            <rect
              x="116"
              y="104"
              width="116"
              height="54"
              rx="5"
              fill="#242923"
            />
            <text
              x="131"
              y="125"
              fontSize="9"
              fill="#dadcd2"
              fontFamily="monospace"
            >
              [ 0.24, 0.86,
            </text>
            <text
              x="138"
              y="143"
              fontSize="9"
              fill="#c8b57f"
              fontFamily="monospace"
            >
              0.51, ... ]
            </text>
            <path d="M202 72h38l13 14" stroke="#9c9f91" strokeDasharray="3 3" />
            {Array.from({ length: 17 }, (_, i) => (
              <circle
                key={i}
                cx={265 + Math.sin(i * 2.4) * (12 + i * 1.1)}
                cy={91 + Math.cos(i * 2.4) * (12 + i * 1.4)}
                r={i % 4 === 0 ? 4 : 2.4}
                fill={i % 4 === 0 ? "#ad9250" : "#7f8776"}
                opacity={i % 4 === 0 ? 1 : 0.65}
              />
            ))}
          </>
        )}
        {variant === "vision" && (
          <>
            {Array.from({ length: 9 }, (_, row) =>
              Array.from({ length: 12 }, (_, col) => (
                <rect
                  key={`${row}-${col}`}
                  x={88 + col * 15}
                  y={33 + row * 15}
                  width="13"
                  height="13"
                  rx="1"
                  fill={
                    Math.hypot(col - 5.5, row - 4) < 3.7 ? "#777e6e" : "#cdd0c3"
                  }
                  opacity={0.22 + ((row * 7 + col * 3) % 9) * 0.075}
                />
              )),
            )}
            <rect
              x="123"
              y="48"
              width="111"
              height="105"
              stroke="#a28740"
              strokeWidth="1.5"
            />
            <path
              d="M118 63V43h20m81 0h20v20M118 138v20h20m81 0h20v-20"
              stroke="#a28740"
              strokeWidth="2.5"
            />
            <rect x="123" y="35" width="80" height="15" fill="#aa904b" />
            <text
              x="131"
              y="45.5"
              fill="#fff"
              fontSize="8"
              fontFamily="monospace"
            >
              PATTERN FOUND
            </text>
            <path
              d="M76 101h208"
              stroke="#a28740"
              opacity=".5"
              strokeDasharray="4 4"
            />
          </>
        )}
      </svg>
    </div>
  );
}
