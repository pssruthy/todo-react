import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ items, onClick }) => {
  const list = items.map(({ item, id, isDone }) => (
    <TodoItem item={item} id={id} isDone={isDone} onClick={onClick} key={id} />
  ));
  return <div> {list}</div>;
};

export default TodoList;
