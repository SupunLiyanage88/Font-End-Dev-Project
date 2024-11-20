module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#6B3CC9", // Bluish Purple
        },
        secondary: {
          DEFAULT: "#F28D35", // Yuzu Jam
        },
        analogous: {
          light: "#6A44F2", // Ice Ice Baby
          dark: "#1CBDDD", // Rich Blue
        },
        triadic: {
          DEFAULT: "#52378C", // Electric Indigo
        },
        dark: {
          DEFAULT: "#78BF91", // Interstellar Blue
        },
        text: {
          DEFAULT: "#2F2F2F", // Tricorn Black
          light: "#9C9891", // Acier
          subtle: "#9C9891", // Acier (subtle variant)
        },
        accent: {
          white: "#E2F2FE", // Wizard White
          beige: "#FFF8E0", // Cuddly Yarn
          error: "#FF6860", // Hornet Sting
          success: "#78BF91", // Frog
        },
      },
    },
  },
  plugins: [],
};
