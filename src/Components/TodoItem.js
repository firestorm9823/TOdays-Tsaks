// import React from 'react'

// export default function TodoItem({todo , onDelete}) {
//   return (
    
//     <div>
//       <h4>{todo.title}</h4>
//       <p >{todo.desc}</p>
//        <button className='btn btn-sm btn-danger ' onClick={()=>{onDelete(todo)}}>Delete</button>
//     </div>
  
//   )
// }


import React, { useState } from 'react';
import EditTodo from './EditTodo';

export default function TodoItem({ todo, onDelete, onUpdate, onToggleComplete }) {
  const [isEditing, setIsEditing] = useState(false);

  const handleSave = (updatedTodo) => {
    onUpdate(updatedTodo); // send updated todo back up to App
    setIsEditing(false);   // exit edit mode
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  return (
    <div className="my-3">
      {isEditing ? (
        <EditTodo todo={todo} onSave={handleSave} onCancel={handleCancel} />
      ) : (
        <>
          <h5>{todo.title}</h5>
          <p>{todo.desc}</p>

          <h5 style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
            {todo.title}
          </h5>
          <p style={{ color: todo.completed ? 'gray' : 'black' }}>
            {todo.desc}
          </p>



          <input
              type="checkbox"
              className="form-check-input me-2"
              checked={todo.completed}
              onChange={() => onToggleComplete(todo.sno)}
            />

          <button className="btn btn-sm btn-primary mx-1" onClick={() => setIsEditing(true)}>Edit</button>
          <button className="btn btn-sm btn-danger" onClick={() => onDelete(todo)}>Delete</button>
        </>
      )}
      <hr />
    </div>
  );
}

