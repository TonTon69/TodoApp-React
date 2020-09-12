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
        {this.todoItems.length > 0 &&
          this.todoItems.map((item, index) => (
            <TodoItem key={index} item={item} />
          ))}

        {this.todoItems.length === 0 && <div>Nothing here</div>}
      </div>
    );
  }
}

export default App;
