import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import "./styles/index.css";
import {
  ThemeProvider,
  CommandPalleteProvider,
  ReactQueryProvider,
} from "./providers";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <ReactQueryProvider>
        <ThemeProvider>
          <CommandPalleteProvider>
            <App />
          </CommandPalleteProvider>
        </ThemeProvider>
      </ReactQueryProvider>
    </Router>
  </React.StrictMode>,
);
