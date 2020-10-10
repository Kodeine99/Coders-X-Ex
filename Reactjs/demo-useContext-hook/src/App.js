import React from "react";
import "./styles.css";

import { AppProvider } from "./contexts/AppContext";
import RandomNumber from "./components/RandomNum";

export default function App() {
  return (
    <AppProvider>
      <div className="App">
        <RandomNumber />
      </div>
    </AppProvider>
  );
}
