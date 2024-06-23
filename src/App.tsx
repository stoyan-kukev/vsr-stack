import { NavBar } from './components/NavBar';
import { ThemeProvider } from './components/theme-provider';

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <NavBar />
    </ThemeProvider>
  );
}

export default App;
