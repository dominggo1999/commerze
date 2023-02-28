import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import "./styles/index.css";
import { ThemeProvider, CommandPalleteProvider } from "./providers";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <ThemeProvider>
        <CommandPalleteProvider>
          <App />
        </CommandPalleteProvider>
      </ThemeProvider>
    </Router>
  </React.StrictMode>,
);
