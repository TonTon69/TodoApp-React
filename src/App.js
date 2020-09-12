import React from "react";
import logo from "./logo.svg";
import "./App.css";
import TontonItem from "./components/TontonItem";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <TontonItem title="Chào TonTon" />
        <TontonItem title="Chào các bạn" />
        <TontonItem title="Chào các em gái xinh đẹp" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
