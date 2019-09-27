import React, { Component } from "react";
import swal from "sweetalert";
import Todo from "./components/Todo";
import AddTodo from "./components/AddTodo";

class App extends Component {
  constructor(props) {
    // console.log(todos)
    super(props);
    this.deleteTodo = this.deleteTodo.bind(this);
    this.addTodo = this.addTodo.bind(this);
    this.hydrateStateWithLocalStorage = this.hydrateStateWithLocalStorage.bind(
      this
    );

    this.state = {
      todos: []
    };
  }

  componentDidMount() {
    this.hydrateStateWithLocalStorage();
  }

  hydrateStateWithLocalStorage() {
    if (localStorage.hasOwnProperty("todos")) {
      let todos = localStorage.getItem("todos");
      try {
        todos = JSON.parse(todos);
        this.setState({ todos });
      } catch (e) {
        this.setState({ todos });
      }
    }
  }

  addTodo(todo) {
    if (todo.content === "") {
      swal({
        title: "Please add a task",
        buttons: false,
        icon: "wanrning",
        timer: 1250
      });
      return null;
    }

    todo.id = Math.random();
    const todos = [...this.state.todos, todo];
    this.setState({
      todos
    });
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  deleteTodo(id) {
    // console.log(id)
    const { todos } = this.state;
    const todo = todos.filter(todoItem => {
      return todoItem.id !== id;
    });
    localStorage.setItem("todos", JSON.stringify(todo));
    this.setState({
      todos: todo
    });
  }

  render() {
    const { todos } = this.state;
    // console.log(todos)
    return (
      <div className="container">
        <h1 className="center blue-text">Todos</h1>
        <Todo todos={todos} deleteTodo={this.deleteTodo} />
        <AddTodo addTodo={this.addTodo} />
      </div>
    );
  }
}

export default App;
