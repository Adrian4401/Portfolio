import { LanguageProvider } from "./context/LanguageContext";
import { ThemeProvider } from "./context/ThemeContext";
import Home from "./pages/Home";


function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <Home/>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;