module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        sideBarPrimary: '#0F2F43',
        sideBarSecondary: '#6941C7',
        sideBarHover: '#F1F1F9',
        mainPrimary: '#FBFFF1',
        mainSecondary: '#52B78F',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
