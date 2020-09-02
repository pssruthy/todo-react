import React from 'react';
import './todo.css';

const TodoItem = ({ item, id, status, onClick, removeItem }) => {
  return (
    <div className="item-container">
      <div
        className={`item ${status}`}
        onClick={() => onClick(id, status)}
        id={id}
      >
        <div className="status-color" />
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>{item}</div>
      </div>
      <div className="remove-icon" onClick={() => removeItem(id)}>
        X
      </div>
    </div>
  );
};

export default TodoItem;
