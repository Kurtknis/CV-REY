import { memo, useMemo } from "react";

function CustomIcon({ name, className = "" }) {
  const common = useMemo(() => ({
    className,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
  }), [className]);

  const icons = useMemo(() => ({
    arrow: (
      <svg {...common}>
        <path d="M5 12h13m0 0-5-5m5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    download: (
      <svg {...common}>
        <path d="M12 4v10m0 0 4-4m-4 4-4-4M5 19h14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    send: (
      <svg {...common}>
        <path d="m4 12 16-8-5 16-3-7-8-1Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    stack: (
      <svg {...common}>
        <path d="m12 3 8 4.2-8 4.2-8-4.2L12 3Z" stroke="currentColor" strokeWidth="1.6" />
        <path d="m4 12.2 8 4.2 8-4.2M4 16.8 12 21l8-4.2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
    pulse: (
      <svg {...common}>
        <path d="M3 13h4l2-7 4 13 3-9 2 3h3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    signal: (
      <svg {...common}>
        <circle cx="12" cy="12" r="2" stroke="currentColor" strokeWidth="1.6" />
        <path d="M7.8 16.2a6 6 0 0 1 0-8.4M16.2 7.8a6 6 0 0 1 0 8.4M5 19a10 10 0 0 1 0-14M19 5a10 10 0 0 1 0 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    shield: (
      <svg {...common}>
        <path d="M12 3 5 6v5.2c0 4.1 2.8 7.8 7 9.8 4.2-2 7-5.7 7-9.8V6l-7-3Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
        <path d="m9 12 2 2 4-5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    grid: (
      <svg {...common}>
        <path d="M4 4h6v6H4V4Zm10 0h6v6h-6V4ZM4 14h6v6H4v-6Zm10 0h6v6h-6v-6Z" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
    diamond: (
      <svg {...common}>
        <path d="m12 3 8 8-8 10-8-10 8-8Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
        <path d="M8 11h8M12 3l-4 8 4 10 4-10-4-8Z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
      </svg>
    ),
    menu: (
      <svg {...common}>
        <path d="M5 7h14M5 12h14M5 17h14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
    close: (
      <svg {...common}>
        <path d="m6 6 12 12M18 6 6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  }), [common]);

  return icons[name] ?? icons.diamond;
}

export default memo(CustomIcon);
