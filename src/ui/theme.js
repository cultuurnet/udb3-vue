import get from 'lodash/get';
import { lighten } from 'polished';

const colors = {
  udbRed: '#c0120c',
  udbBlue: '#004f94',
  white: '#ffffff',
  grey1: '#f0f0f0',
  grey2: '#ccc',
  grey3: '#ddd',
  grey4: '#f5f5f5',
  grey5: '#777777',
  green1: '#5cb85c',
  green2: '#449d44',
  green3: '#48874a',
  green4: '#dcf2d7',
  pink1: '#fcd1cf',
  pink2: '#f9a29f',
  red1: '#d9534f',
  red2: '#f3453f',
  red3: '#d23430',
  red4: '#900d09',
  red5: '#ef1810',
  blue1: '#3e88ab',
  textColor: '#222',
};

const Breakpoints = {
  XS: 'xs',
  S: 's',
  M: 'm',
  L: 'l',
};

const theme = {
  colors,
  breakpoints: {
    [Breakpoints.XS]: 575,
    [Breakpoints.S]: 768,
    [Breakpoints.M]: 992,
    [Breakpoints.L]: 1200,
  },
  components: {
    alert: {
      borderRadius: 0,
    },
    link: {
      color: colors.udbBlue,
    },
    badge: {
      color: colors.white,
      backgroundColor: colors.red1,
    },
    button: {
      borderRadius: 0,
      paddingX: '0.8rem',
      paddingY: '0.267rem',
      primary: {
        backgroundColor: colors.udbBlue,
        borderColor: '#00417b',
        focusBoxShadow: 'none',
        hoverBackgroundColor: '#003461',
        hoverBorderColor: '#00213d',
        activeBackgroundColor: '#003461',
        activeBorderColor: '#00213d',
        activeBoxShadow: 'none',
      },
      secondary: {
        color: '#333',
        backgroundColor: colors.white,
        borderColor: '#ccc',
        focusBoxShadow: 'none',
        hoverBackgroundColor: '#e6e6e6',
        hoverBorderColor: '#adadad',
        activeColor: '#333',
        activeBackgroundColor: '#e6e6e6',
        activeBorderColor: '#adadad',
        activeBoxShadow: 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
      },
      success: {
        color: colors.white,
        borderColor: colors.green1,
        hoverBackgroundColor: colors.green2,
        hoverBorderColor: colors.green2,
        backgroundColor: colors.green1,
        activeBoxShadow: 'none',
        focusBoxShadow: 'none',
      },
      danger: {
        color: colors.white,
        borderColor: colors.red1,
        hoverBackgroundColor: colors.red3,
        hoverBorderColor: colors.red3,
        backgroundColor: colors.red1,
        activeBoxShadow: 'none',
        focusBoxShadow: 'none',
      },
    },
    pagination: {
      color: colors.textColor,
      activeBackgroundColor: colors.red2,
      activeBorderColor: colors.grey2,
      activeColor: colors.white,
      hoverBackgroundColor: colors.red2,
      hoverColor: colors.white,
      borderColor: colors.grey2,
      focusBoxShadow: 'none',
      paddingX: '0.84rem',
      paddingY: '0.44rem',
    },
    typeahead: {
      activeBackgroundColor: colors.udbBlue,
    },
    radioButtonWithLabel: {
      infoTextColor: colors.grey5,
    },
    textArea: {
      borderColor: colors.grey3,
    },
    page: {
      backgroundColor: colors.grey1,
    },
    pageTitle: {
      color: colors.textColor,
      borderColor: colors.grey2,
    },
    panel: {
      borderColor: colors.grey3,
    },
    panelFooter: {
      borderColor: colors.grey3,
      backgroundColor: colors.grey4,
    },
    listItem: {
      backgroundColor: colors.white,
    },
    spinner: {
      primary: {
        color: colors.udbBlue,
      },
      light: {
        color: colors.white,
      },
    },
    sidebar: {
      color: colors.white,
      backgroundColor: colors.udbRed,
    },
    menu: {
      borderColor: colors.red4,
    },
    menuItem: {
      hover: {
        backgroundColor: colors.red4,
      },
    },
    announcement: {
      borderColor: colors.grey2,
      hoverBackgroundColor: colors.grey1,
      selected: {
        backgroundColor: colors.pink1,
        hoverBackgroundColor: colors.pink2,
      },
    },
    announcementList: {
      borderColor: colors.grey2,
    },
    announcementContent: {
      linkColor: colors.udbBlue,
    },
    jobStatusIcon: {
      backgroundColor: colors.white,
      warning: {
        circleFillColor: colors.udbRed,
        remarkFillColor: colors.white,
      },
      busy: {
        spinnerStrokeColor: colors.blue1,
        backgroundColor: colors.white,
      },
      complete: {
        circleFillColor: colors.green3,
        checkFillColor: colors.green4,
      },
    },
    productionItem: {
      borderColor: colors.grey3,
      activeColor: colors.white,
      backgroundColor: colors.white,
      activeBackgroundColor: colors.red2,
    },
    eventItem: {
      borderColor: colors.grey3,
    },
    detailTable: {
      backgroundColor: colors.grey1,
      borderColor: colors.grey3,
    },
    loginPage: {
      backgroundColor: colors.grey1,
    },
    loginLogo: {
      backgroundColor: colors.red5,
      colorSoft: lighten('0.23', colors.udbRed),
      colorMedium: lighten('0.31', colors.udbRed),
      colorHard: lighten('0.40', colors.udbRed),
    },
    pageNotFound: {
      iconColor: colors.grey2,
    },
    pageError: {
      iconColor: colors.red5,
    },
    selectionTable: {
      color: colors.grey5,
      borderColor: colors.grey3,
    },
    statusPage: {
      infoTextColor: colors.grey5,
    },
    statusModal: {
      infoTextColor: colors.grey5,
    },
  },
};

const getValueFromTheme = (component) => (path) => (props) =>
  get(props.theme, `components.${component}.${path}`);

export { theme, getValueFromTheme, Breakpoints };
