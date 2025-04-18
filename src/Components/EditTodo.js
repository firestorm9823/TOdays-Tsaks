import React, { useState } from 'react';

export default function EditTodo({ todo, onSave, onCancel }) {
  const [title, setTitle] = useState(todo.title);
  const [desc, setDesc] = useState(todo.desc);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !desc.trim()) {
      alert("Both fields are required");
      return;
    }

    // Send updated todo back
    onSave({ ...todo, title, desc });
  };

  return (
    <form onSubmit={handleSubmit} className="my-2">
      <input
        type="text"
        className="form-control my-1"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        className="form-control my-1"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
      />
      <button type="submit" className="btn btn-success btn-sm mx-1">Save</button>
      <button type="button" className="btn btn-secondary btn-sm" onClick={onCancel}>Cancel</button>
    </form>
  );
}
