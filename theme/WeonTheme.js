import { createTheme } from '@rneui/themed';

const themePalette = {
    // beige
    primary: '#FFFBEF',
    // dark beige
    primaryDarker: '#9B9132',
    // light cool gray
    secondary: '#4B5563',
    // dark cool gray
    secondaryDarker: '#39404F',
    // purple
    accent: '#A4758E',
    // gray
    gray: '#767D87',
    // white
    white: '#FFFFFF',
}

export const WeonTheme = createTheme({
    components: {
        Text: {
            h1Style: {
                color: themePalette.secondaryDarker,
                fontFamily: 'manrope-xb',
                fontSize: 96,
            }, 
            h2Style: {
                color: themePalette.accent,
                fontFamily: 'manrope-xb',
                fontSize: 24,
            },
            h3Style: {
                color: themePalette.accent,
                fontFamily: 'manrope-xb',
                fontSize: 16,
                margin: 5
            },
            h4Style: {
                color: themePalette.secondaryDarker,
                fontFamily: 'manrope-xb',
                fontSize: 16,
                margin: 5
            },
            style: {
                color: themePalette.secondaryDarker,
                fontFamily: 'poppins-m',
                fontSize: 16,
                margin: 5
            }
        },
    },
});