import { createTheme, responsiveFontSizes } from '@mui/material/styles';

export let theme = createTheme({
  palette: {
        primary: {
            main: '#232323',
        },
        secondary: {
            main: '#4f8e3e',
        },
    },
  typography:{
    fontFamily:"-apple-system"
  }
});

theme = responsiveFontSizes(theme)