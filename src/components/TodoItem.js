import React from 'react';
import './todo.css';

const TodoItem = ({ item, id, isDone, isProcessing, onClick }) => {
  let className = 'not-done';
  if (isProcessing) className = 'processing';
  if (isDone) className = 'done';
  return (
    <div className={`item ${className}`} onClick={() => onClick(id)} id={id}>
      <div className="status-color" />
      <div>{item}</div>
    </div>
  );
};

export default TodoItem;
