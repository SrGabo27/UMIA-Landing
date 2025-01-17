import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "umia-white": "var(--umia-white)",
        "umia-light-gray": "var(--umia-light-gray)",
        "umia-light-gray2": "var(--umia-light-gray2)",
        "umia-gray": "var(--umia-gray)",
        "umia-gray2": "var(--umia-gray2)",
        "umia-green": "var(--umia-green)",
        "text-gray": "var(--text-gray)",
        "umia-green-dark": "var(--umia-green-dark)",
        green: "var(--green)",
      },
      fontFamily: {
        'sora': ['Sora'],
        'outfit': ['Outfit'],
      },
      placeholderColor: {
        'umia-gray': "var(--umia-gray)"
      }
    },
  },
  plugins: [],
} satisfies Config;
