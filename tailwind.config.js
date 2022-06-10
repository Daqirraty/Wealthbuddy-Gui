module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", './node_modules/tw-elements/dist/js/**/*.js'],
  theme: {
    extend: {
    },
  },
  plugins: [{
    tailwindcss: {},
    autoprefixer: {},
    
  },
  require('tw-elements/dist/plugin')
  ],
}
