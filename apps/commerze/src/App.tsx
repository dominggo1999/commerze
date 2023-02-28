import React, { useContext } from "react";
import Routes from "./Routes";
import { ThemeContext } from "./providers";
import { Header } from "components/index";

const App = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <main className={theme}>
      <Header />
      <Routes />
    </main>
  );
};

export default App;
