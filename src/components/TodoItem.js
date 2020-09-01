import React from 'react';
import './todo.css';

const TodoItem = ({ item, id, status, onClick }) => {
  return (
    <div
      className={`item ${status}`}
      onClick={() => onClick(id, status)}
      id={id}
    >
      <div className="status-color" />
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>{item}</div>
    </div>
  );
};

export default TodoItem;
