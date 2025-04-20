import React from 'react';

export default function DeletedTodos({ deletedTodos }) {
  return (
    <div className="container my-3">
      <h3>Deleted Tasks History</h3>
      {deletedTodos.length === 0 ? (
        <p>No deleted tasks to show.</p>
      ) : (
        deletedTodos.map((todo, index) => (
          <div key={index}>
            <h5>{todo.title}</h5>
            <p>{todo.desc}</p>
            <hr />
          </div>
        ))
      )}
    </div>
  );
}
