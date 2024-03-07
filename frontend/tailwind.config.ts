import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        customColor: {
          rgb_195_25_82: "rgb(195, 25, 82)",
          rgb_255_253_146: "rgb(255, 253, 146)",
          rgb_110_15_60: "rgb(110, 15, 60)",
          rgb_218_255_246: "rgb(218, 255, 246)",
          rgb_0_107_108: "rgb(0, 107, 108)",
          rgb_255_226_235: "rgb(255, 226, 235)",
          color_background_button_secondary_default: "#e9e9e9",
          400: "#9ca3af",
          500: "#6b7280",
          600: "#4b5563",
          700: "#374151",
          800: "#1f2937",
          900: "#111827",
        },
      },
    },
  },
  plugins: [],
};
export default config;
