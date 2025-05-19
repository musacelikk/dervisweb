/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      xxs: '0.5rem',
      xs: '0.75rem',
      sm: '0.85rem',
      md: '0.92rem',
      lg: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
    },
    container: {
      center: true,
      screens: {
        lg: '1140px',
        xl: '1140px',
        '2xl': '1140px',
      }
    },
    extend: {
      backgroundImage: {
        'my-footer': "linear-gradient(rgba(45, 45, 45, 0.7), rgba(45, 45, 45, 0.5)),url('/images/footer.webp')",
        'gradient-primary': 'linear-gradient(135deg, #E7222E 0%, #FF4D4D 100%)',
        'gradient-dark': 'linear-gradient(135deg, #1a1a1a 0%, #2D2D2D 100%)',
        'gradient-gold': 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)',
        'gradient-light': 'linear-gradient(135deg, #FFFFFF 0%, #F8F9FA 100%)',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        "my-siyah": "#1a1a1a",
        "my-mavi": "#0099E5",
        "my-beyaz": "#FFFFFF",
        "my-ebbeyaz": "#F8F9FA",
        "my-kırmızı": "#E7222E",
        "my-edbeyaz": "#EDEFF1",
        "my-açıkgri": "#6B7280",
        "my-4b4b4bgri": "#4B4B4B",
        "my-sidebeyaz": "#EDEFF1",
        "my-navgri": "#9CA3AF",
        "my-141414": "#141414",
        "my-ortamavi": "#354C58",
        "my-gold": {
          light: "#FFD700",
          DEFAULT: "#FFA500",
          dark: "#FF8C00"
        },
        "my-red": {
          light: "#FF4D4D",
          DEFAULT: "#E7222E",
          dark: "#CC1A1A"
        },
        "my-gray": {
          light: "#F3F4F6",
          DEFAULT: "#6B7280",
          dark: "#374151"
        }
      },
      spacing: {
        100: '26rem',
        128: '32rem',
        140: '40rem',
        180: '44rem',
        192: '48rem',
        200: '56rem',
        216: '64rem',
        256: '70rem',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
        pulse: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.5 },
        }
      },
      animation: {
        float: 'float 3s ease-in-out infinite',
        shimmer: 'shimmer 2s infinite linear',
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        'hover': '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
        'glow': '0 0 15px rgba(255, 215, 0, 0.5)',
        'glow-red': '0 0 15px rgba(231, 34, 46, 0.5)',
      }
    },
  },
  plugins: [],
}
