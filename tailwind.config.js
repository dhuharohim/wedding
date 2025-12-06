/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#fff",
        foreground: "#222",
        "muted-foreground": "#888",
        primary: "#222",
        "primary-foreground": "#fff",
        accent: "#f5f5f5",
        "accent-foreground": "#222",
        destructive: "#e53e3e",
      },
      animation: {
        'in': 'fadeIn 0.2s ease, zoomIn 0.2s ease',
        'out': 'fadeOut 0.2s ease, zoomOut 0.2s ease',
        'fade-in-0': 'fadeIn 0.2s ease',
        'fade-out-0': 'fadeOut 0.2s ease',
        'zoom-in-95': 'zoomIn 0.2s ease',
        'zoom-out-95': 'zoomOut 0.2s ease',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        zoomIn: {
          '0%': { transform: 'scale(0.95)' },
          '100%': { transform: 'scale(1)' },
        },
        zoomOut: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(0.95)' },
        },
      },
    },
  },
  plugins: [],
};
