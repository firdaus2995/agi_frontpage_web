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
      opensanspro: 'var(--font-source-sans-pro)',
      karla: 'var(--font-karla)'
    },
    screens: {
      xs: '240px',
      xm: '360px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
      '3xl': '2000px'
    },
    fontSize: {
      'heading-1-desktop': [
        '64px',
        {
          lineHeight: '76.8px',
          letterSpacing: '-4%',
        },
      ],
      'heading-1-mobile': [
        '30px',
        {
          lineHeight: '36px',
          letterSpacing: '-1.44px',
        },
      ],
      'heading-2-desktop': [
        '48px',
        {
          lineHeight: '120%',
          letterSpacing: '-1.44px',
        },
      ],
      'heading-2-mobile': [
        '24px',
        {
          lineHeight: '120%',
          letterSpacing: '1.44px'
        },
      ],
      'banner-title-desktop': [
        '36px',
        {
          lineHeight: '48.2px',
          letterSpacing: '-1.08px',
        },
      ],
      'banner-title-mobile': [
        '24px',
        {
          lineHeight: '28.8px',
          letterSpacing: '-0.72px',
        },
      ],
      'banner-subtitle-desktop': [
        '56px',
        {
          lineHeight: '61.6px',
          letterSpacing: '-2.24px',
        },
      ],
      'banner-subtitle-mobile': [
        '24px',
        {
          lineHeight: '28.8px',
          letterSpacing: '-0.025em',
        },
      ],
      'banner-btn-label': [
        '20px',
        {
          lineHeight: '28px',
        },
      ],
      'banner-footer-1-desktop': [
        '36px',
        {
          lineHeight: '120%',
          letterSpacing: '-1.44px',
        },
      ],
      'banner-footer-1-mobile': [
        '20px',
        {
          lineHeight: '24px',
          letterSpacing: '-0.8px',
        },
      ],
      'banner-footer-2-desktop': [
        '48px',
        {
          lineHeight: '120%',
          letterSpacing: '-1.44px',
        },
      ],
      'banner-footer-2-mobile': [
        '36px',
        {
          lineHeight: '120%',
          letterSpacing: '-1.44px',
        },
      ],
      'card-title-desktop': [
        '32px',
        {
          lineHeight: '38.4px',
          letterSpacing: '-1.28px',
        },
      ],
      'card-title-mobile': [
        '32px',
        {
          lineHeight: '38.4px',
          letterSpacing: '-1.92px',
        },
      ],
      'card-subtitle-desktop': [
        '16px',
        {
          lineHeight: '22.4px'
        },
      ],
      'card-subtitle-mobile': [
        '16px',
        {
          lineHeight: '22.4px'
        },
      ],
      'card-btn-label': [
        '16px',
        {
          lineHeight: '28px',
        },
      ],
      'information-slider-title-desktop': [
        '28px',
        {
          lineHeight: '33.6px',
          letterSpacing: '-0.84px',
        },
      ],
      'information-slider-title-mobile': [
        '24px',
        {
          lineHeight: '48px',
          letterSpacing: '-1.2px',
        },
      ],
      'information-slider-subtitle-desktop': [
        '50px',
        {
          lineHeight: '55px',
          letterSpacing: '-1.5px',
        },
      ],
      'information-slider-subtitle-mobile': [
        '40px',
        {
          lineHeight: '120%',
          letterSpacing: '-0.72px',
        },
      ],
      'footer-card-title': [
        '32px',
        {
          lineHeight: '38.4px',
          letterSpacing: '-1.6px',
        },
      ],
      'footer-card-subtitle': [
        '20px',
        {
          lineHeight: '28px',
        },
      ],
      'top-heading-group': [
        '14px',
        {
          lineHeight: '19.6px',
        },
      ],
      'list-menu-header-desktop': [
        '16px',
        {
          lineHeight: '23.68px',
        },
      ],
      'list-menu-header-mobile': [
        '20px',
        {
          lineHeight: '28px',
        },
      ],
      'menu-header-title': [
        '32px',
        {
          lineHeight: '38.4px',
          letterSpacing: '-0.96px',
        },
      ],
      'menu-header-subtitle': [
        '20px',
        {
          lineHeight: '28px',
        },
      ],
      'footer-title': [
        '20px',
        {
          lineHeight: '24px',
        },
      ],
      'footer-subtitle': [
        '18px',
        {
          lineHeight: '25.2px',
        },
      ],
      'footer-phone': [
        '24px',
        {
          lineHeight: '28.8px',
          letterSpacing: '-0.72px'
        },
      ],
      'footer-list': [
        '14px',
        {
          lineHeight: '19.6px'
        },
      ],
      'footer-link': [
        '18px',
        {
          lineHeight: '25.2px'
        },
      ],
      'hero-title': [
        '48px',
        {
          lineHeight: '48px',
          letterSpacing: '-1.44px'
        },
      ],
      'information-title-desktop': [
        '56px',
        {
          lineHeight: '120%',
          letterSpacing: '-4%'
        },
      ],
      'information-title-mobile': [
        '40px',
        {
          lineHeight: '48px',
          letterSpacing: '-1.6px'
        },
      ],
      'tanya-avgen-title-desktop': [
        '56px',
        {
          lineHeight: '120%',
          letterSpacing: '-2.24px'
        },
      ],
      'tanya-avgen-title-mobile': [
        '36px',
        {
          lineHeight: '48px',
          letterSpacing: '-1.44px'
        },
      ],
      'tanya-avgen-detail-title-desktop': [
        '56px',
        {
          lineHeight: '67.2px',
          letterSpacing: '-2.24px'
        },
      ],
      'tanya-avgen-detail-title-mobile': [
        '36px',
        {
          lineHeight: '43.2px',
          letterSpacing: '-1.44px'
        },
      ],
      'tanya-avgen-detail-subtitle': [
        '20px',
        {
          lineHeight: '32px'
        },
      ],
      '404-title-desktop': [
        '200px',
        {
          lineHeight: '240px',
          letterSpacing: '-8px'
        },
      ],
      '404-title-mobile': [
        '120px',
        {
          lineHeight: '144px',
          letterSpacing: '-4.8px'
        },
      ],
      'under-construction-title-desktop': [
        '80px',
        {
          lineHeight: '80px',
          letterSpacing: '-3.2px'
        },
      ],
      'under-construction-title-mobile': [
        '60px',
        {
          lineHeight: '60px',
          letterSpacing: '-2.4px'
        },
      ],
      'sekilas-perusahaan-title': [
        '48px',
        {
          lineHeight: '57.6px',
          letterSpacing: '-3%'
        },
      ],
      'sekilas-perusahaan-text': [
        '24px',
        {
          lineHeight: '33.6px',
          letterSpacing: '-3%'
        },
      ],
      'history-title': [
        '24px',
        {
          lineHeight: '30.17px'
        },
      ],
      'history-text': [
        '16px',
        {
          lineHeight: '21.79px'
        },
      ],
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
        yellow_light: '#FFFCF8',
        red_error: '#DB3838',
        gray_border: '#ABA7AF',
        space_purpink: '#D96DFF',
        agi_grey: '#9099BE',
        avram_green: '#5BB1A5',
        foamy_milk: '#F7F3F9',
        soft_grey: '#F6F6F6',
        avram_bg: '#EBFCFA',
        green_border: '#A5C903',
        green_superlight: '#F5F7F3',
        orange_border: '#F2A625',
        avrast_product_text: '#de64fc',
        avram_product_text: '#1effe1',
        agi_product_text: '#dfdfdf',
        avrast_product_bg: '#480469',
        olive_green: '#A5C903',
        grey_video_footer: '#8C8B89',
        syariah_green: '#3D5910',
        syariah_green_informing: '#417C40',
        dplk_yellow: '#F2A625',
        cta4_bg: '#f2f3f5'
      }
    }
  },
  plugins: []
};

export default config;
