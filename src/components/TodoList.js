import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ items }) => {
  const list = items.map(({ item }, index) => (
    <TodoItem item={item} id={index} key={index} />
  ));
  return <div> {list}</div>;
};

export default TodoList;
