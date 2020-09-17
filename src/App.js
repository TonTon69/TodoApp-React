import React, { PureComponent } from "react";
import "./App.css";
import "./css/Todo.css";

import Header from "./components/Header";
import TodoList from "./components/TodoList";
import Footer from "./components/Footer";

class App extends PureComponent {
  state = {
    todosList: [
      {
        id: 1,
        text: "todo1",
        isCompleted: true,
      },
      {
        id: 2,
        text: "todo2",
        isCompleted: false,
      },
    ],
  };

  addTodo = (todo = {}) => {
    this.setState((preState) => ({
      todosList: [...preState.todosList, todo],
    }));
  };

  render() {
    const { todosList } = this.state;
    return (
      <div className="todoapp">
        <Header addTodo={this.addTodo} />
        <TodoList todosList={todosList} />
        <Footer />
      </div>
    );
  }
}

export default App;
