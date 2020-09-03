import React from 'react';
import './todo.css';
import RemoveIcon from './RemoveIcon';

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
      <RemoveIcon onClick={() => removeItem(id)} />
    </div>
  );
};

export default TodoItem;
