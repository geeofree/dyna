export const colors = {
  primary: {
    background: "#1f1f28",
    foreground: "#dcd7ba",
  },

  normal: {
    black: "#090618",
    red: "#c34043",
    green: "#76946a",
    yellow: "#c0a36e",
    blue: "#7e9cd8",
    magenta: "#957fb8",
    cyan: "#6a9589",
    white: "#c8c093",
    light: "#d7d7d7",
  },

  bright: {
    black: "#727169",
    red: "#e82424",
    green: "#98bb6c",
    yellow: "#e6c384",
    blue: "#7fb4ca",
    magenta: "#938aa9",
    cyan: "#7aa89f",
    white: "#dcd7ba",
    light: "#f6f6f6",
  },

  selection: {
    background: "#2d4f67",
    foreground: "#c8c093",
  },
};

const spacings = Array(9)
  .fill(null)
  .map((_, i: number) => Math.pow(2, i));
export const getSpacing = (ith: number) => spacings[ith];

const baseFontSize = 8;
const fontSizeMultiple = 4;
const fontSizes = Array(11)
  .fill(null)
  .map((_, i: number) => baseFontSize + fontSizeMultiple * i);
export const getFontSize = (ith: number) => fontSizes[ith];
