// A lightweight, deterministic SVG. No WebGL, canvas loop, or animation library.
const TAU = Math.PI * 2;
function project(latitude: number, longitude: number) {
  const x = Math.cos(latitude) * Math.cos(longitude);
  const y = Math.sin(latitude);
  const z = Math.cos(latitude) * Math.sin(longitude);
  const tilt = -0.32;
  const tiltedX = x * Math.cos(tilt) - y * Math.sin(tilt);
  const tiltedY = x * Math.sin(tilt) + y * Math.cos(tilt);
  return {
    x: 240 + tiltedX * 164,
    y: 231 + (tiltedY * 0.93 + z * 0.26) * 164,
    z,
  };
}
function line(points: ReturnType<typeof project>[]) {
  return points
    .map((p, i) => `${i ? "L" : "M"}${p.x.toFixed(2)},${p.y.toFixed(2)}`)
    .join(" ");
}

export function ModelArtwork() {
  const meridians = Array.from({ length: 20 }, (_, i) =>
    line(
      Array.from({ length: 81 }, (_, n) =>
        project(-Math.PI / 2 + (n / 80) * Math.PI, (i / 20) * TAU),
      ),
    ),
  );
  const latitudes = Array.from({ length: 17 }, (_, i) =>
    line(
      Array.from({ length: 101 }, (_, n) =>
        project(-Math.PI / 2 + ((i + 1) / 18) * Math.PI, (n / 100) * TAU),
      ),
    ),
  );
  const nodes = Array.from({ length: 13 }, (_, i) =>
    project(-0.95 + (i % 5) * 0.4, 0.4 + i * 2.399),
  );
  return (
    <div className="model-artwork" aria-hidden="true">
      <div className="artwork-topline">
        <span>FIG. 01</span>
        <span>THE SPACE BETWEEN IDEAS</span>
        <span className="tiny-cross">+</span>
      </div>
      <svg className="model-sphere" viewBox="0 0 480 470" fill="none">
        <defs>
          <radialGradient id="sphere-glow">
            <stop stopColor="#d3c495" stopOpacity=".24" />
            <stop offset="1" stopColor="#e9e7de" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="sphere-fill" cx="35%" cy="25%">
            <stop stopColor="#ffffff" stopOpacity=".25" />
            <stop offset="1" stopColor="#c8c6ba" stopOpacity=".16" />
          </radialGradient>
        </defs>
        <circle cx="240" cy="234" r="227" fill="url(#sphere-glow)" />
        <path
          d="M21 231h438M240 25v414"
          stroke="#c6c5bb"
          strokeDasharray="2 6"
          strokeOpacity=".55"
        />
        <ellipse
          cx="240"
          cy="231"
          rx="207"
          ry="66"
          transform="rotate(-27 240 231)"
          stroke="#aa9253"
          strokeOpacity=".52"
        />
        <circle cx="240" cy="231" r="162" fill="url(#sphere-fill)" />
        <g stroke="#64675c" strokeWidth=".7" opacity=".43">
          {meridians.map((d, i) => (
            <path key={`m${i}`} d={d} />
          ))}
          {latitudes.map((d, i) => (
            <path key={`l${i}`} d={d} />
          ))}
        </g>
        <g stroke="#a38a45" strokeWidth=".8" opacity=".54">
          {nodes.map((node, i) => (
            <path
              key={i}
              d={`M${node.x},${node.y} ${nodes[(i + 4) % nodes.length].x},${nodes[(i + 4) % nodes.length].y}`}
            />
          ))}
        </g>
        {nodes.map((node, i) => (
          <g key={i}>
            <circle
              cx={node.x}
              cy={node.y}
              r={i % 3 === 0 ? 8 : 5}
              fill="#b49a55"
              opacity=".12"
            />
            <circle
              cx={node.x}
              cy={node.y}
              r={i % 3 === 0 ? 3.4 : 2.2}
              fill={i % 3 === 0 ? "#9c7f36" : "#6b6e61"}
            />
          </g>
        ))}
        <circle cx="412" cy="131" r="4" fill="#ac8c40" />
        <path d="M331 334h58l14 14" stroke="#a3a399" strokeWidth=".8" />
        <text
          x="353"
          y="365"
          fill="#73766a"
          fontFamily="monospace"
          fontSize="9"
          letterSpacing="1.5"
        >
          POSSIBILITY ∞
        </text>
        <path
          d="M42 70V54h16m364 0h16v16M42 398v16h16m364 0h16v-16"
          stroke="#bbbdb1"
        />
      </svg>
      <div className="artwork-caption">
        <span className="gold-dot" /> A LITTLE STRUCTURE. ENDLESS POSSIBILITY.
      </div>
    </div>
  );
}
