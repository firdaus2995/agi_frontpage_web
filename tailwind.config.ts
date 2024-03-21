import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    fontFamily: {
      opensans: 'var(--font-open-sans)',
      karla: 'var(--font-karla)'
    },
    screens: {
      xs: '240px',
      xm: '360px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px'
    },
    extend: {
      borderWidth: {
        '1': '1px'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      },
      colors: {
        'disabled-input': '#EBEEF2',
        'dark-purple': '#4F2C74',
        'bright-purple': '#81219A',
        lavender: '#9B86BA',
        'light-purple': '#E5DFEC',
        'light-purple-2': '#F9F5FD',
        'body-text-1': '#637488',
        'body-text-2': '#464B53',
        'body-text-3': '#818494',
        grey: '#BBBBBB',
        'light-grey': '#D6D6D6',
        'dark-grey': '#798F9F',
        'other-grey': '#ABB5C4',
        error: '#EC2247',
        'secondary-warning': '#FF8E3C',
        'tertiary-warning': '#D96C1E',
        'dark-reddist': '#AE1D1D',
        lumut: '#DFEEEC',
        'toast-error': '#FFF6F6',
        'toast-error-border': '#EBD2CE',
        'form-disabled-bg': '#E9EEF4',
        white: '#FFFFFF',
        transparent: 'transparent',
        black: '#000000',
        gray_bglightgray: '#F5F3F7',
        gray_spacerlight: '#E5E0EB',
        gray_black: '#767279',
        gray_title: '#2C3034',
        gray_light: '#D4D2D5',
        gray_verylight: '#D9D1E0',
        gray_body: '#1A141F',
        reddist: '#DB3838',
        purple_dark: '#5E217C',
        purple_light: '#8A20A6',
        purple_soft: '#6E2082',
        purple_verydark: '#481563',
        purple_separator: '#7A3DA2',
        purple_light_bg: '#FAF8FB',
        purple_mediumlight: '#A986C0',
        purple_verylight: '#C4B7D3',
        purple_superlight: '#F7F4F8',
        green_approval: '#417C40',
        yellow_warning: '#E5E500',
        yellow_alternate: '#F3B03F',
        red_error: '#DB3838',
        gray_border: '#ABA7AF',
        space_purpink: '#D96DFF',
        agi_grey: '#9099BE',
        avram_green: '#5BB1A5',
        foamy_milk: '#F7F3F9',
        soft_grey: '#F6F6F6',
        avram_bg: '#EBFCFA',
        green_border: '#A5C903',
        orange_border: '#F2A625',
        avrast_product_text: '#de64fc',
        avram_product_text: '#1effe1',
        agi_product_text: '#dfdfdf',
        avrast_product_bg: '#480469',
        olive_green: '#A5C903',
        grey_video_footer: '#8C8B89',
        syariah_green: '#3D5910',
        syariah_green_informing: '#417C40',
        dplk_yellow: '#F2A625'
      }
    }
  },
  plugins: []
};

export default config;
