import React from 'react';

const TodoHeading = ({ onClick, value }) => {
  return <p onClick={onClick}>{value}</p>;
};

export default TodoHeading;
