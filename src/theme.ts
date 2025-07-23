import { createTheme, responsiveFontSizes } from '@mui/material/styles';

export let theme = createTheme({
  palette: {
    primary: {
      main: "#666666ff",
    },
    secondary: {
      main: "#0f5e15ff",
    },
  },
  typography:{
    fontFamily:"-apple-system"
  }
});

theme = responsiveFontSizes(theme)