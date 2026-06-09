/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        base: "#070B14",
        surface: "#0F172A",
        accent: "#7C3AED",
        secondary: "#22D3EE",
        muted: "#94A3B8"
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(148,163,184,0.16), 0 18px 60px rgba(124,58,237,0.22)"
      },
      backgroundImage: {
        mesh: "radial-gradient(circle at top left, rgba(124,58,237,0.25), transparent 30%), radial-gradient(circle at 80% 20%, rgba(34,211,238,0.20), transparent 25%), linear-gradient(135deg, #070B14 0%, #0F172A 50%, #111827 100%)"
      }
    }
  },
  plugins: []
};