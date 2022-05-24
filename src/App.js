import Routes from "./Routes";
import {ThemeProvider} from 'styled-components';
import TunesProvider from './context/TunesProvider';
import theme from "./global/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <TunesProvider>
        <Routes />
      </TunesProvider>
    </ThemeProvider>
  )
}

export default App;
