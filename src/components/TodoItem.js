import React from 'react';

const TodoItem = ({ item, id }) => {
  return <div id={id}>{item}</div>;
};

export default TodoItem;
