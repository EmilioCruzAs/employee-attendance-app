import type { Config } from "tailwindcss";

///Solo configuracion tailwind  v4

export default {
  content: ['./src/**/*.{html,ts}'],
  theme: {

    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
        heading: ["Poppins", "Inter", "sans-serif"],
      },
      borderRadius: {
        primary: '13px',
        smr: '15px'
      }, keyframes: {
        fadein: {
          '0%': { opacity: 0, transform: 'scale(0.95)' },
          '100%': { opacity: 1, transform: 'scale(1)' },
        },
        fadeout: {
          '0%': { opacity: 1, transform: 'scale(1)' },
          '100%': { opacity: 0, transform: 'scale(0.95)' },
        }

      },
      animation: {
        fadein: 'fadein 150ms ease-out',
        fadeout: 'fadeout 150ms ease-out'
      }
    }
  }

} satisfies Config;