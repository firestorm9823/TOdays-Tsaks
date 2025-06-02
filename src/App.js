

import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Todos from "./Components/Todos";
import AddTodo from "./Components/AddTodo";
import About from "./Components/About";
import DeletedTodos from "./Components/DeletedTodos";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const [todos, setTodos] = useState(initTodo);
  const [searchText, setSearchText] = useState("");
  const [deletedTodos, setDeletedTodos] = useState([]); // ✅ Moved inside the function

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const onDelete = (todo) => {
    const updatedTodos = todos.filter((e) => e !== todo);
    setDeletedTodos([...deletedTodos, todo]); // ✅ Track deleted tasks
    setTodos(updatedTodos);
  };


  const addTodo = (title, desc, dueDate) => {
    const isDuplicate = todos.some(todo => todo.title.toLowerCase() === title.toLowerCase());
    if (isDuplicate) {
      alert("Task with this title already exists.");
      return;
    }
  
    const sno = todos.length === 0 ? 0 : todos[todos.length - 1].sno + 1;
  
    const mytodo = {
      sno: sno,
      title: title,
      desc: desc,
      completed: false,
      createdAt: new Date().toISOString(),
      dueDate: dueDate,
    };
  
    setTodos([...todos, mytodo]);
  };
  



  const updateTodo = (updatedTodo) => {
    const newTodos = todos.map(todo =>
      todo.sno === updatedTodo.sno ? updatedTodo : todo
    );
    setTodos(newTodos);
  };

  const toggleComplete = (sno) => {
    const newTodos = todos.map(todo => {
      if (todo.sno === sno) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const filteredTodos = todos.filter(todo =>
    todo.title.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <Router>
      <Header title="ToDo-list" searchBar={true} searchText={searchText} setSearchText={setSearchText} />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <AddTodo addTodo={addTodo} />
              <Todos
                todos={filteredTodos}
                onDelete={onDelete}
                onUpdate={updateTodo}
                onToggleComplete={toggleComplete}
              />
            </>
          }
        />
        <Route exact path="/deleted" element={<DeletedTodos deletedTodos={deletedTodos} />} />
        <Route exact path="/About" element={<About />} />


      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
