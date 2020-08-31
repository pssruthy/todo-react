import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ items, onClick }) => {
  const list = items.map(({ item, id, isProcessing, isDone }) => (
    <TodoItem
      item={item}
      id={id}
      isDone={isDone}
      isProcessing={isProcessing}
      onClick={onClick}
      key={id}
    />
  ));
  return <div> {list}</div>;
};

export default TodoList;
