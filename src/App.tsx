import { ThemeProvider, CssBaseline } from '@mui/material';
import { theme } from './theme';
import { MainLayout } from './components/MainLayout';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <MainLayout />
    </ThemeProvider>
  );
}

