import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        blue: "#96ADD6",
        pink: "#F3D7D3",
        cream: "#F2EFEA",
        cloudDarkBlue: "#D8D0F8",
        cloudBlue: "#E2DDF8",
      },
    },
  },
  plugins: [],
} satisfies Config;
