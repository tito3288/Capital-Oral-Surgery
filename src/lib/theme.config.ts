export const theme = {
  colors: {
    primary: "#06333b",
    secondary: "#00a9c0",
    accent: "#63e8f7",
    accentAlt: "#00e0ff",
    background: "#f4f1eb",
    foreground: "#0f172a",
    muted: "#475569",
    neutralDark: "#020617",
  },
  fonts: {
    heading: "Georgia, Cambria, 'Times New Roman', serif",
    body: "Inter, ui-sans-serif, system-ui, sans-serif",
  },
  radius: {
    sm: "0rem",
    md: "0rem",
    lg: "0rem",
  },
} as const;

export type Theme = typeof theme;