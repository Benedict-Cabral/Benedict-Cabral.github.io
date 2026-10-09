import type { CSSProperties } from "react";

type IconName =
  | "arrow"
  | "arrow-down"
  | "github"
  | "linkedin"
  | "mail"
  | "file"
  | "close"
  | "menu";

export function Icon({
  name,
  size = 18,
  className,
  style,
}: {
  name: IconName;
  size?: number;
  className?: string;
  style?: CSSProperties;
}) {
  const paths: Record<IconName, React.ReactNode> = {
    arrow: (
      <>
        <path d="M5 19 19 5M5 5h14v14" />
      </>
    ),
    "arrow-down": (
      <>
        <path d="M12 4v16m-6-6 6 6 6-6" />
      </>
    ),
    github: (
      <>
        <path d="M9 19c-4.3 1.3-4.3-2.2-6-2.7m12 5v-3.4c0-1 .1-1.6-.5-2.2 3.1-.4 6.4-1.5 6.4-7A5.5 5.5 0 0 0 19.4 5c.2-.5.7-2-.2-3.6 0 0-1.2-.4-3.9 1.4a13.5 13.5 0 0 0-7 0C5.6 1 4.4 1.4 4.4 1.4 3.5 3 4 4.5 4.2 5a5.5 5.5 0 0 0-1.5 3.8c0 5.5 3.3 6.6 6.4 7-.5.4-.7 1.1-.7 2.2v3.3" />
      </>
    ),
    linkedin: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M7 10v7m0-10v.01M11 17v-7m0 3a3 3 0 0 1 6 0v4" />
      </>
    ),
    mail: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </>
    ),
    file: (
      <>
        <path d="M14 3H5v18h14V8zm0 0v5h5M8 13h8m-8 4h6" />
      </>
    ),
    close: <path d="m6 6 12 12M6 18 18 6" />,
    menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  };
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
      style={style}
    >
      {paths[name]}
    </svg>
  );
}
