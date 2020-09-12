import React, { Component } from "react";
import "./App.css";
import TodoItem from "./components/TodoItem";
class App extends Component {
  constructor() {
    super();
    this.todoItems = [
      { title: "Sửa xe", isComplete: true },
      { title: "Đi chợ" },
      { title: "Học bài" },
    ];
  }

  render() {
    return (
      <div className="App">
        {this.todoItems.map((item, index) => (
          <TodoItem key={index} item={item} />
        ))}
      </div>
    );
  }
}

export default App;
