import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
//  Router
import RouterOutlet from "@router/RouterOutlet";
//  Theme
import theme from "@style/theme";
import "@fontsource/noto-sans-kr/korean.css";
import "@fontsource/noto-sans-kr/korean-100.css";
import "@fontsource/noto-sans-kr/korean-300.css";
import "@fontsource/noto-sans-kr/korean-400.css";
import "@fontsource/noto-sans-kr/korean-500.css";
import "@fontsource/noto-sans-kr/korean-700.css";
import "@fontsource/noto-sans-kr/korean-900.css";

function App() {
  return (
    <BrowserRouter>
      <ChakraProvider theme={theme} resetCSS={true}>
        <RouterOutlet />
      </ChakraProvider>
    </BrowserRouter>
  );
}

export default App;
