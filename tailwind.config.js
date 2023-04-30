/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    colors: {
      brand_primary: '#37AEAA',
      brand_primaryFade: '#E6F6F6',
      brand_success: '#27AE60',
      brand_warning: '#E2B93B',
      brand_error: '#EB5757',
      white: '#FFFFFF',
    },
    container: {
      center: true,
      width: {
        lg: '900px',
      },
    },
  },
  plugins: [],
}
