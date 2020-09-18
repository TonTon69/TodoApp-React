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
    todoEditingId: "",
  };

  addTodo = (todo = {}) => {
    this.setState((preState) => ({
      todosList: [...preState.todosList, todo],
    }));
  };

  getTodoEditingId = (id = "") => {
    this.setState({ todoEditingId: id });
  };

  onEditTodo = (todo = {}, index = -1) => {
    if (index >= 0) {
      const { todosList: list } = this.state;
      list.splice(index, 1, todo);
      this.setState({ todosList: list, todoEditingId: "" });
    }
  };

  markCompleted = (id = "") => {
    this.setState((preState) => ({
      todosList: preState.todosList.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      ),
    }));
  };

  render() {
    const { todosList, todoEditingId } = this.state;
    return (
      <div className="todoapp">
        <Header addTodo={this.addTodo} />
        <TodoList
          todosList={todosList}
          getTodoEditingId={this.getTodoEditingId}
          todoEditingId={todoEditingId}
          onEditTodo={this.onEditTodo}
          markCompleted={this.markCompleted}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
