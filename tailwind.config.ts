import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        modak: "var(--font-modak)",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        blue: "#ABCAFF",
        pink: "#F3D7D3",
        cream: "#F2EFEA",
        cloudDarkViolet: "#A18CFF",
        cloudViolet: "#C3B6FF",
        CloudDarkBlue: "#0050DB",
        CloudBlue: "#5C8ADB",
        NightSky: "#01408D",
      },
    },
  },
  plugins: [],
} satisfies Config;
