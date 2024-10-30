import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/presentation/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        "gradient-primary":
          "linear-gradient(to right, #ec4899, #8b5cf6, #3b82f6)",
        "gradient-dark": "linear-gradient(to right, #a78bfa, #6366f1, #1e40af)",
      },
      backgroundSize: {
        "custom-size": "100% 120% 200%",
      },
      fontFamily: {
        poppins: ['"Poppins"', "sans-serif"],
      },
    },
  },
  plugins: [
    function ({
      addUtilities,
    }: {
      addUtilities: (utilities: Record<string, any>) => void;
    }) {
      addUtilities({
        ".icon-hover-primary": {
          "@apply dark:text-gray-300 text-gray-700 hover:text-gray-500 dark:hover:text-gray-400":
            {},
        },
        ".custom-ribbon": {
          "@apply absolute top-4 right-0 bg-gradient-primary dark:bg-gradient-dark bg-[length:100%_120%_200%] text-white text-xs font-bold px-2 py-1 transform rotate-45 translate-x-4 -translate-y-3 shadow-lg":
            {},
        },
        ".bg-custom-gradient": {
          "@apply bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-[length:100%_120%_200%] dark:from-purple-400 dark:via-indigo-500 dark:to-blue-700":
            {},
        },
      });
    },
  ],
};
export default config;
