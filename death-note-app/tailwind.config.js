/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        heartbeat: 'heartbeat 1s infinite',
        marquee: 'marquee 30s linear infinite',
      },
      keyframes: {
        heartbeat: {
          '0%, 100%': { transform: 'scale(1)' },
          '20%': { transform: 'scale(1.1)' },
          '40%': { transform: 'scale(1)' },
          '60%': { transform: 'scale(1.1)' },
          '80%': { transform: 'scale(1)' },
        },
        marquee: {
          '100%': { transform: 'translateX(-120.2%)' },
        },
      },
    },
  },
  plugins: [function({ addUtilities }) {
    const newUtilities = {
      '.animation-pause': {
        'animation-play-state': 'paused',
      },
    }
    addUtilities(newUtilities, ['responsive', 'hover'])
  }],
};
