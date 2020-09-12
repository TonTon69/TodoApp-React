import React, { Component } from "react";
import "./App.css";
import TontonItem from "./components/TontonItem";
class App extends Component {
  constructor() {
    super();
    this.tontonItems = [
      "Chào TonTon",
      "Chào các bạn",
      "Chào các em gái xinh đẹp",
    ];
  }

  render() {
    return (
      <div className="App">
        {this.tontonItems.map((item, index) => (
          <TontonItem key={index} title={item} />
        ))}
      </div>
    );
  }
}

export default App;
