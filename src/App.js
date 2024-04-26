import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header.js";
import Todos from "./components/todos.js";
import AddTodo from "./components/AddTodo.js";
import Footer from "./components/footer.js";
import About from "./components/about.js";

function App() {
  // Initialize todos state
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  // Define todos state and setter function
  const [todos, setTodos] = useState(initTodo);

  // useEffect hook to update local storage when todos state changes
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // Function to delete todo
  const onDelete = (todo) => {
    console.log("You Deleted", todo);
    // Update todos state by filtering out the todo to be deleted
    setTodos(todos.filter((e) => e !== todo));
  };

  // Function to add todo
  const addTodo = (title, desc) => {
    console.log("I am adding this Todo", title, desc);
    let sNO = todos.length + 1;
    console.log(sNO);
    const myTodo = {
      sNO: sNO,
      title: title,
      desc: desc,
    };
    // Update todos state by adding the new todo
    setTodos([...todos, myTodo]);
  };

  return (
    <Router>
      <div className="custom-scrollbar">
        <Header />
        <Routes>
          <Route
            exact
            path="/Todo-React-App"
            element={
              <>
                <AddTodo AddTodo={addTodo} />
                <Todos todos={todos} onDelete={onDelete} />
              </>
            }
          />
          <Route exact path="/Todo-React-App/about" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
