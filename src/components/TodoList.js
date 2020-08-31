import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ items, onClick }) => {
  const list = items.map(({ item, id, status }) => (
    <TodoItem item={item} id={id} status={status} onClick={onClick} key={id} />
  ));
  return <div> {list}</div>;
};

export default TodoList;
