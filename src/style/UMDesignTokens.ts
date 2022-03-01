import { ThemeOptions } from '@mui/material/styles'
import { UMSwatch } from '.'

const UMDesignTokens = () =>
  ({
    breakpoints: {},
    palette: {
      background: {
        default: UMSwatch.Grey[900]
      },
      common: {
        black: UMSwatch.Black[50],
        white: UMSwatch.White[50]
      },
      text: {
        primary: UMSwatch.Grey[900],
        secondary: UMSwatch.Grey[700],
        disabled: UMSwatch.Grey[500]
      },
      primary: {
        main: UMSwatch.White[50],
        light: UMSwatch.Grey[200]
        // dark: UMSwatch.White[50],
        // contrastText: UMSwatch.White[50]
      },
      // secondary: {},
      error: {
        main: UMSwatch.Coral[500]
      },
      // warning: {},
      // info: {},
      success: {
        main: UMSwatch.Green[200]
      }
    },
    mixins: {},
    spacing: 1,
    spacingIcons: 1,
    typography: {
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"'
      ].join(',')
    },
    h5: {
      // fontSize: 'clamp(1.37rem, 1.21rem + 0.8vw, 1.78rem)'
      fontSize: 'clamp(2.625rem, 1.2857rem + 3.5714vw, 4.5rem)'
    },
    transitions: {
      duration: {
        shortest: 150,
        standard: 300,
        complex: 500,
        // recommended when something is entering screen
        enteringScreen: 225,
        // recommended when something is leaving screen
        leavingScreen: 195
      },
      easing: {
        // most common easing curve
        easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
        // enter at full velocity and slowly decelerate to a resting point
        easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
        // leave at full velocity without decelerating
        easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
        // sharp curve is used by objects that may return at any time
        sharp: 'cubic-bezier(0.4, 0, 0.6, 1)'
      }
    }
  } as ThemeOptions)

export default UMDesignTokens
