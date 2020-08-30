import React from 'react';
import './todo.css';

const TodoItem = ({ item, id, isDone, onClick }) => {
  return (
    <div
      className={`item ${isDone ? 'done' : 'not-done'}`}
      onClick={() => onClick(id)}
      id={id}
    >
      <div className="status-color" />
      <div>{item}</div>
    </div>
  );
};

export default TodoItem;
