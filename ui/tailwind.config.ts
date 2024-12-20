import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter, sans-serif', { fontFeatureSettings: '"cv11"' }],
      },
      colors: {
        "default-body": "var(--text-default-color)",
        "default-color": "var(--bg-color-button)",
        "default-font": "var(--text-color-button)",
      },
    },
  },
  plugins: [],
}
export default config
