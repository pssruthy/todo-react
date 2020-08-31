import React from 'react';
import './todo.css';

const TodoItem = ({ item, id, status, onClick }) => {
  return (
    <div className={`item ${status}`} onClick={() => onClick(id)} id={id}>
      <div className="status-color" />
      <div>{item}</div>
    </div>
  );
};

export default TodoItem;
