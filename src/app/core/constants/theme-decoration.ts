export const ThemeDecorations: Record<string, { left: string;center?:string; right: string }> = {
  light: {
    left: '/decorations/light-left.png',
    right: '/decorations/light-right.png',
  },
  dark: {
    left: '/decorations/dark-left.png',
    right: '/decorations/dark-right.png',
  },
  halloween: {
    left: '/spiderlef.webp',
    right: '/spiderlef.webp',
    //center:'/Halloween-Decor-PNGc.png'
  },
  winter: {
    left: '/christmas-lights-decoration-illustration-by-Vexels.png',
    right: '/christmas-lights-decoration-illustration-by-Vexels.png',
  },
  // fallback
  default: {
    left: '/decorations/default-left.png',
    right: '/decorations/default-right.png',
  },
};
