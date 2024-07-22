import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
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
        'custom-gradient-md': 'linear-gradient(90deg, rgba(1, 55, 127, 1) 75%, rgba(0, 55, 127, 0) 100%)',
        'custom-gradient-sm': 'linear-gradient(to top, rgba(1, 55, 127, 1) 0%, rgba(0, 55, 127, 0) 100%)',
      },
      boxShadow: {
        'right': '4px 0 8px rgba(0, 0, 0, 0.3)', // Adjust values as needed
      },
    },
  },
  plugins: [],
};
export default config;
