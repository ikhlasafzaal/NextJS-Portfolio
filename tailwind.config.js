// tailwind.config.js
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#654994',  /* Deep purple for major accents */
        'secondary': '#d8eff8', /* Soft, professional light blue for backgrounds */
        'accent': '#2889a5',    /* Bold tech-blue for call-to-action buttons */
        'dark-gray': '#333333', /* Dark gray for text */
        'light-gray': '#f4f4f4' /* Light gray for subtle backgrounds */
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
