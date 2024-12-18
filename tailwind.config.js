/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      container: {
        center: true, // Centers the container
      },
      fontFamily: {
        sans: ["var(--font-manrope)", "sans-serif"], // Set as default font
      },
      screens: {
        // Custom breakpoints
        'xs': '480px', // Extra small screens
        'sm': '640px', // Small screens (default sm in Tailwind)
        'md': '768px', // Medium screens
        'lg': '1024px', // Large screens
        'xl': '1280px', // Extra large screens
        '2xl': '1536px', // 2x extra large screens
      },
    },
  },
  plugins: [],
};
