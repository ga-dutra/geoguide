import { useState } from "react";
import GlobalStyle from "./styles/globalStyles.js";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./styles/themes.js";

export default function App() {
  const [theme, setTheme] = useState("light");

  return (
    <>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <GlobalStyle />
        <Container>
          <>Geo Guide</>
        </Container>
      </ThemeProvider>
    </>
  );
}

const Container = styled.div`
  color: ${(props) => props.theme.fontColor};
`;
