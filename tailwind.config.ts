import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      /** Elements */
      'background': '#eff0f3',
      'paragraph':'#2a2a2a',
      'button-text': '#0d0d0d',
      'headline': '#0d0d0d',
      'button': '#ff8e3c',
      /** Illustration */
      'stroke': '#0d0d0d',
      'highlight': '#ff8e3c',
      'tertiary': '#d9376e',
      'main': '#eff0f3',
      'secondary': '#fffffe',
    },
    extend: {},
  },
  plugins: [
    require("@tailwindcss/forms")({
      strategy: 'class'
    })
  ],
}
export default config
