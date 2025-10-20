/** @type {import('tailwindcss').Config} */
module.exports = {
  ...require('../../packages/ui/tailwind.config.js'),
  content: [
    './src/**/*.{ts,tsx}',
    '../../packages/ui/src/**/*.{ts,tsx}',
  ],
}
