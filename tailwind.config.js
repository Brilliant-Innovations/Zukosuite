const plugin = require('tailwindcss/plugin');

module.exports = {
    content: ['./src/**/*.{js,ts,jsx,tsx}', './content/**/*', './.sourcebit-nextjs-cache.json'],
    safelist: [
        'text-neutral',
        'text-light',
        'bg-primary-fg-light',
        {
            pattern: /(m|p)(t|b|l|r)-(0|px|1|1.5|2|2.5|3|3.5|4|5|6|7|8|9|10|11|12|14|16|20|24|28|32|36|40|44|48|52|56|60|64|72|80|96)/
        },
    ],
    theme: {
        extend: {
            fontFamily: {
                display: ['Bebas Neue', 'sans-serif'],
                body: ['Archivo', 'system-ui', 'sans-serif'],
                sans: ['Archivo', 'system-ui', 'sans-serif'],
                mono: ['JetBrains Mono', 'monospace']
            },
            colors: {
                void: '#050505',
                'void-light': '#0a0a0a',
                'void-border': '#1a1a1a',
                acid: '#39ff14',
                'hot-pink': '#ff006e',
                electric: '#00d9ff',
                warning: '#ffbe0b',
                light: '#ffffff',
                dark: '#050505',
                neutral: '#0a0a0a',
                neutralAlt: '#111111',
                primary: '#39ff14',
                secondary: '#ff006e',
                accent: '#00d9ff'
            },
            boxShadow: {
                header: '0px 2px 8px rgba(0, 0, 0, .5)',
                brutal: '6px 6px 0 #050505',
                'brutal-sm': '4px 4px 0 #050505',
                glow: '0 0 40px rgba(57, 255, 20, 0.4)',
                'glow-pink': '0 0 40px rgba(255, 0, 110, 0.4)'
            },
            gridTemplateColumns: {
                16: 'repeat(16, minmax(0, 1fr))'
            },
            gridColumnStart: {
                span4: 'span 4'
            },
            gridColumnEnd: {
                neg3: '-3',
                span4: 'span 4'
            },
            maxWidth: {
                sectionBody: '846px'
            },
            padding: {
                '2/3': '66.666%',
                '3/4': '75%',
                '9/16': '56.25%'
            },
            screens: {
                xs: '480px'
            },
            width: {
                formField: 'calc(50% - 1rem)'
            },
            animation: {
                'marquee': 'marquee 20s linear infinite',
                'blink': 'blink 1s step-end infinite',
                'glitch': 'glitch 0.2s ease infinite',
                'pulse-glow': 'pulse-glow 3s ease-in-out infinite'
            },
            keyframes: {
                marquee: {
                    '0%': { transform: 'translateX(0)' },
                    '100%': { transform: 'translateX(-50%)' }
                },
                blink: {
                    '0%, 100%': { opacity: '1' },
                    '50%': { opacity: '0' }
                },
                glitch: {
                    '0%, 100%': { transform: 'translate(0)' },
                    '20%': { transform: 'translate(-2px, 2px)' },
                    '40%': { transform: 'translate(-2px, -2px)' },
                    '60%': { transform: 'translate(2px, 2px)' },
                    '80%': { transform: 'translate(2px, -2px)' }
                },
                'pulse-glow': {
                    '0%, 100%': { boxShadow: '0 0 20px rgba(57, 255, 20, 0.3)' },
                    '50%': { boxShadow: '0 0 60px rgba(57, 255, 20, 0.6)' }
                }
            }
        }
    },
    plugins: [
        plugin(function ({ addBase, addComponents, theme }) {
            addBase({
                body: {
                    fontFamily: theme('fontFamily.body'),
                    backgroundColor: theme('colors.void'),
                    color: theme('colors.white')
                },
                'h1,h2,h3,h4,h5,h6': {
                    fontFamily: theme('fontFamily.display'),
                    letterSpacing: '0.02em',
                    textTransform: 'uppercase'
                }
            });
            addComponents({
                '.sb-component-button-primary': {
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    padding: '1.25rem 2.5rem',
                    fontFamily: theme('fontFamily.body'),
                    fontWeight: '700',
                    fontSize: '0.875rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    backgroundColor: theme('colors.acid'),
                    color: theme('colors.void'),
                    border: '3px solid ' + theme('colors.void'),
                    boxShadow: '6px 6px 0 ' + theme('colors.void'),
                    transition: 'all 0.15s ease',
                    cursor: 'pointer',
                    '&:hover': {
                        transform: 'translate(2px, 2px)',
                        boxShadow: '4px 4px 0 ' + theme('colors.void')
                    },
                    '&:active': {
                        transform: 'translate(6px, 6px)',
                        boxShadow: '0 0 0 ' + theme('colors.void')
                    }
                },
                '.sb-component-button-secondary': {
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    padding: '1.25rem 2.5rem',
                    fontFamily: theme('fontFamily.body'),
                    fontWeight: '700',
                    fontSize: '0.875rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    backgroundColor: 'transparent',
                    color: theme('colors.acid'),
                    border: '3px solid ' + theme('colors.acid'),
                    boxShadow: '6px 6px 0 ' + theme('colors.acid'),
                    transition: 'all 0.15s ease',
                    cursor: 'pointer',
                    '&:hover': {
                        transform: 'translate(2px, 2px)',
                        boxShadow: '4px 4px 0 ' + theme('colors.acid')
                    }
                },
                '.sb-component-link-primary': {
                    fontWeight: '600',
                    color: theme('colors.acid'),
                    transition: 'color 0.2s ease',
                    '&:hover': {
                        color: theme('colors.hot-pink')
                    }
                },
                '.sb-component-link-secondary': {
                    fontWeight: '500',
                    color: theme('colors.white'),
                    transition: 'color 0.2s ease',
                    '&:hover': {
                        color: theme('colors.acid')
                    }
                }
            });
        })
    ]
};
