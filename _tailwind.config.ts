import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    screens: {
      'xs': '475px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px'
    },
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        gray: {
          100: '#EBF1F5',
          200: '#D9E3EA',
          300: '#C5D2DC',
          400: '#9BA9B4',
          500: '#707D86',
          600: '#55595F',
          700: '#33363A',
          800: '#25282C',
          900: '#151719',
        },
        purple: {
          100: '#F4F4FF',
          200: '#E2E1FF',
          300: '#CBCCFF',
          400: '#ABABFF',
          500: '#8D8DFF',
          600: '#5D5DFF',
          700: '#4B4ACF',
          800: '#38379C',
          900: '#262668',
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      spacing: {
        '9/16': '56.25%',
        '3/4': '75%',
        '1/1': '100%',
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      fontSize: {
        xs: '0.75rem',
        sm: '0.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
        '4xl': '2.5rem',
        '5xl': '3.25rem',
        '6xl': '4rem',
      },
      inset: {
        'full': '100%',
      },
      letterSpacing: {
        tighter: '-0.02em',
        tight: '-0.01em',
        normal: '0',
        wide: '0.01em',
        wider: '0.02em',
        widest: '0.4em',
      },
      minWidth: {
        '10': '2.5rem',
      },
      scale: {
        '98': '.98'
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
} satisfies Config

export default config

@import url("https://fonts.googleapis.com/css2?family=M+PLUS+Code+Latin:wght@100..700&family=Madimi+One&family=Protest+Riot&display=swap");

@tailwind base;
@tailwind components;
@tailwind utilities;

/* @layer base {
  :root {
    --background: 20 14.3% 4.1%;
    --foreground: 0 0% 95%;
    --card: 24 9.8% 10%;
    --card-foreground: 0 0% 95%;
    --popover: 0 0% 9%;
    --popover-foreground: 0 0% 95%;
    --primary: 240 100% 68.2%;
    --primary-foreground: 0 0% 100%;
    --secondary: 240 3.7% 15.9%;
    --secondary-foreground: 0 0% 98%;
    --muted: 0 0% 15%;
    --muted-foreground: 240 5% 64.9%;
    --accent: 12 6.5% 15.1%;
    --accent-foreground: 0 0% 98%;
    --destructive: 0 62.8% 30.6%;
    --destructive-foreground: 0 85.7% 97.3%;
    --border: 240 3.7% 15.9%;
    --input: 240 3.7% 15.9%;
    --ring: 240 100% 68.2%;
  }

  .dark {
    --background: 20 14.3% 4.1%;
    --foreground: 0 0% 95%;
    --card: 24 9.8% 10%;
    --card-foreground: 0 0% 95%;
    --popover: 0 0% 9%;
    --popover-foreground: 0 0% 95%;
    --primary: 240 100% 68.2%;
    --primary-foreground: 0 0% 100%;
    --secondary: 240 3.7% 15.9%;
    --secondary-foreground: 0 0% 98%;
    --muted: 0 0% 15%;
    --muted-foreground: 240 5% 64.9%;
    --accent: 12 6.5% 15.1%;
    --accent-foreground: 0 0% 98%;
    --destructive: 0 62.8% 30.6%;
    --destructive-foreground: 0 85.7% 97.3%;
    --border: 240 3.7% 15.9%;
    --input: 240 3.7% 15.9%;
    --ring: 240 100% 68.2%;
  }
} */

// @layer base {
//   :root {
//     --background: 0 0% 100%;
//     --foreground: 240 10% 3.9%;
//     --card: 0 0% 100%;
//     --card-foreground: 240 10% 3.9%;
//     --popover: 0 0% 100%;
//     --popover-foreground: 240 10% 3.9%;
//     --primary: 240 5.9% 10%;
//     --primary-foreground: 0 0% 98%;
//     --secondary: 240 4.8% 95.9%;
//     --secondary-foreground: 240 5.9% 10%;
//     --muted: 240 4.8% 95.9%;
//     --muted-foreground: 240 3.8% 46.1%;
//     --accent: 240 4.8% 95.9%;
//     --accent-foreground: 240 5.9% 10%;
//     --destructive: 0 84.2% 60.2%;
//     --destructive-foreground: 0 0% 98%;
//     --border: 240 5.9% 90%;
//     --input: 240 5.9% 90%;
//     --ring: 240 5.9% 10%;
//     --radius: 0.5rem;
//   }

//   .dark {
//     --background: 240 10% 3.9%;
//     --foreground: 0 0% 98%;
//     --card: 240 10% 3.9%;
//     --card-foreground: 0 0% 98%;
//     --popover: 240 10% 3.9%;
//     --popover-foreground: 0 0% 98%;
//     --primary: 0 0% 98%;
//     --primary-foreground: 240 5.9% 10%;
//     --secondary: 240 3.7% 15.9%;
//     --secondary-foreground: 0 0% 98%;
//     --muted: 240 3.7% 15.9%;
//     --muted-foreground: 240 5% 64.9%;
//     --accent: 240 3.7% 15.9%;
//     --accent-foreground: 0 0% 98%;
//     --destructive: 0 62.8% 30.6%;
//     --destructive-foreground: 0 0% 98%;
//     --border: 240 3.7% 15.9%;
//     --input: 240 3.7% 15.9%;
//     --ring: 240 4.9% 83.9%;
//   }
// }

// @layer base {
//   * {
//     @apply border-border;
//   }
//   body {
//     @apply bg-background text-foreground;
//   }
// }

// .all-center {
//   @apply flex items-center justify-center;
// }

// .primary-gradient {
//   @apply bg-gradient-to-br from-violet-500 to-violet-400;
// }

// * {
//   font-family: "Protest Riot", sans-serif !important;
// }
