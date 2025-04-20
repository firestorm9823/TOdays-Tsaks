import React, { useState } from 'react';

export default function AddTodo({ addTodo }) {  
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [dueDate, setDueDate] = useState(""); // ✅ due date state

  const submit = (e) => {
    e.preventDefault();
    if (!title || !desc) {
      alert("Title or description cannot be blank");
      return;
    }
    
    addTodo(title, desc, dueDate); // ✅ pass dueDate
    setTitle("");
    setDesc("");
    setDueDate(""); // clear field
  };

  return (
    <div className='container my-3'>
      <h3>Add a Todo</h3>
      <form onSubmit={submit}>
        <div className="mb-3">
          <label htmlFor="text">Todo Title</label>
          <input 
            type="text" 
            value={title} 
            onChange={(e) => setTitle(e.target.value)} 
            className="form-control" 
            placeholder="Enter title" 
          />
        </div>
        <div className="mb-3">
          <label htmlFor="desc">Description</label>
          <input 
            type="text" 
            value={desc}    
            onChange={(e) => setDesc(e.target.value)}  
            className="form-control" 
            placeholder="Enter description" 
          />
        </div>
        <div className="mb-3">
          <label>Due Date</label>
          <input 
            type="datetime-local" 
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-success">Add Todo</button>
      </form>
    </div>
  );
}
