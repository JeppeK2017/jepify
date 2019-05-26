import React from "react";
import logo from "./jepLogo.svg";
import "./css/App.css";
import Jepifier from "./components/jepifier";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Jepifier />
      </header>
    </div>
  );
}

export default App;
