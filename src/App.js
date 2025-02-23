import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Todos from './Components/Todos';
import AddTodo from './Components/AddTodo';
import About from './Components/About'
import { useEffect, useState } from 'react';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";




function App() {
let initTodo;
 if (localStorage.getItem("todos")===null){
  initTodo = [];

 } 
 else{
  initTodo =JSON.parse(localStorage.getItem("todos"));
 }

  const onDelete=(todo)=>{
    console.log("I am ondelete of todo",todo);
    // let index=todo.indexOf(todo);
    // todos.splice(index,1);

    setTodos(todos.filter((e)=>{
      return e!==todo;
    }));

    localStorage.setItem("todos", JSON.stringify(todos));


  }

  const addTodo=(title,desc)=>{
    console.log("Adding a Todo", title,desc)
    let sno;
    if(todos.length===0){
      sno = 0;
    }
    else{
      sno= todos[todos.length-1].sno+1;
    }
    
    const mytodo ={
      sno:sno,
      title:title,
      desc:desc
    }
    setTodos([...todos,mytodo]);
    console.log(mytodo);

    
    

    
  }

const[todos,setTodos]=useState([initTodo]);
useEffect(()=>{
  localStorage.setItem("todos", JSON.stringify(todos));
  
  },[todos])

  return (
    <>
    <Router>
  <Header title="ToDo-list" searchBar={true} />
  <Routes>
    <Route
     
      element={
        <>
          <AddTodo addTodo={addTodo} />
          <Todos todos={todos} onDelete={onDelete} />
        </>
      }
    />
    <Route exact path="/About" element={<About />} />
  </Routes>
  <Footer />
</Router>;
    </>
  );
}

export default App;
