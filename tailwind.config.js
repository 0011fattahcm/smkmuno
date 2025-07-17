const aspectRatio = require('@tailwindcss/aspect-ratio');

export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'], // 🔥 set Montserrat sebagai default font-sans
      },
    },
  },
  plugins: [aspectRatio], // ✅ Tambahkan ini di dalam plugins array
}
