export const theme = {
  colors: {
    primary: "#115db7",
    secondary: "#115db7",
    brandBlue: "#2485c8",
    brandCyan: "#33a0cc",
    accent: "#47c4d4",
    background: "#f4f1eb",
    surface: "#ffffff",
    aquaSoft: "#ebf6fa",
    aquaPale: "#def4f7",
    foreground: "#0f172a",
    muted: "#475569",
    line: "#d8dde3",
    placeholder: "#98a2b3",
    midnight: "#115db7",
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
