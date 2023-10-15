import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/Container/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    // colors: {
    //   primary: "#029D9D",
    //   secondary: "#cd6b2e",
    //   accent: "#54D487",
    //   neutral: "#000000",
    //   "base-100": "#cbe0da",
    //   "base-200": "#fbf5f3",
    //   info: "#3abff8",
    //   success: "#36d399",
    //   warning: "#fbbd23",
    //   error: "#ff0000",
    // },
    extend: {
      colors: {
        white: "#ffffff",
        black: "#000000",
        primary: "#029D9D",
        secondary: "#cd6b2e",
        accent: "#54D487",
        neutral: "#000000",
        "base-100": "#D2E0FB",
        "base-200": "#F2FFFF",
        info: "#3abff8",
        success: "#36d399",
        warning: "#fbbd23",
        error: "#ff0000",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
  important: true,
  plugins: [],
};
export default config;
