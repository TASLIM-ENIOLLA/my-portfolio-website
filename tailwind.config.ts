import type { Config } from "tailwindcss";

import resolveConfig from "tailwindcss/resolveConfig";
import defaultConfig from "tailwindcss/defaultConfig";

const defaultConfigs = resolveConfig(defaultConfig);

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          "0%": {
            opacity: "0"
          },
          "100%": {
            opacity: "1"
          }
        }
      }
    },
    colors: {
      "background": "#0a192f",
      ...defaultConfigs.theme.colors,
    },
    screens: {
      "sm": "640px",
      "md": "768px",
      "lg": "1024px",
      "xl": "1280px",
      "2xl": "1536px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '13rem',
      },
    },
  },
  plugins: [],
};
export default config;
