import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js",
  ],
  theme: {
    extend: {
      backgroundColor: {
        "sand-500": "#F9EBB2",
        "ocean-700": "#0077CC",
      },
      fontFamily: {
        Italiana: ["Libre Baskerville"],
        Raleway: ["Raleway"],
        Kalnia: ["Kalnia"],
      },
      colors: {
        slate: {
          900: "#0c0c04",
        },
        yellow: {
          400: "#bfbf3f",
        },
      },
    },
  },
  plugins: [],
};
export default config;
