export const theme = {
  colors: {
    secondary: "#00a9c0",
    accent: "#63e8f7",
    background: "#f4f1eb",
    surface: "#ffffff",
    aquaSoft: "#e9f7f8",
    aquaPale: "#dff5f8",
    foreground: "#0f172a",
    muted: "#475569",
    line: "#d8dde3",
    placeholder: "#98a2b3",
    midnight: "#142a30",
  },
  fonts: {
    heading: "Georgia, Cambria, 'Times New Roman', serif",
    body: "Inter, ui-sans-serif, system-ui, sans-serif",
  },
  radius: {
    sm: "0.25rem",
    md: "0.75rem",
    lg: "1rem",
  },
} as const;

export type Theme = typeof theme;
