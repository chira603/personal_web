import { createTheme } from '@mui/material/styles';

// Trading-themed color palette
const tradingTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#00C853', // Bright green for positive trends
      light: '#69F0AE',
      dark: '#00B248',
      contrastText: '#000000',
    },
    secondary: {
      main: '#FF3D00', // Bright red for negative trends
      light: '#FF7539',
      dark: '#C30000',
      contrastText: '#FFFFFF',
    },
    background: {
      default: '#121212', // Dark background like trading terminals
      paper: '#1E1E1E',
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#B0B0B0',
    },
    error: {
      main: '#FF3D00',
    },
    warning: {
      main: '#FFC107',
    },
    info: {
      main: '#2196F3',
    },
    success: {
      main: '#00C853',
    },
  },
  typography: {
    fontFamily: '"Roboto Mono", "Roboto", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
      fontSize: '2.5rem',
    },
    h2: {
      fontWeight: 600,
      fontSize: '2rem',
    },
    h3: {
      fontWeight: 600,
      fontSize: '1.75rem',
    },
    h4: {
      fontWeight: 600,
      fontSize: '1.5rem',
    },
    h5: {
      fontWeight: 500,
      fontSize: '1.25rem',
    },
    h6: {
      fontWeight: 500,
      fontSize: '1rem',
    },
    body1: {
      fontSize: '1rem',
    },
    body2: {
      fontSize: '0.875rem',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 4,
          textTransform: 'none',
          fontWeight: 500,
        },
        containedPrimary: {
          '&:hover': {
            backgroundColor: '#00E676',
          },
        },
        containedSecondary: {
          '&:hover': {
            backgroundColor: '#FF6E40',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
          backgroundColor: '#1E1E1E',
          border: '1px solid #333333',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#121212',
          boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)',
        },
      },
    },
  },
});

export default tradingTheme;
