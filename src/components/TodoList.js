import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ items }) => {
  const list = items.map(({ item, id }) => (
    <TodoItem item={item} id={id} key={id} />
  ));
  return <div> {list}</div>;
};

export default TodoList;
