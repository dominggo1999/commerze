import React, { useContext } from "react";
import Routes from "./Routes";
import { ThemeContext } from "./providers";

const App = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <main className={theme}>
      <Routes />
    </main>
  );
};

export default App;
