/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    extend: {},
    fontFamily: {
      'sans': ['Open Sans', 'ui-sans-serif', 'system-ui'],
      'serif': ['Libre Baskerville', 'ui-serif', 'Georgia'],
      'mono': ['JetBrains Mono','ui-monospace', 'SFMono-Regular'],
      'display': ['Oswald'],
      'body': ['"Open Sans"'],
    }
  },
  plugins: [],
}
