import React, { useState, useEffect } from 'react';
import TodoList from './TodoList';
import InputBox from './InputBox';
import TodoHeading from './TodoHeading';
import TodoApi from './TodoApi';

const Todo = () => {
  const [heading, setHeading] = useState('');
  const [items, setItems] = useState([]);

  useEffect(() => {
    TodoApi.getHeading().then(setHeading);
    TodoApi.getAllItems().then(setItems);
  }, []);

  const updateHeading = (heading) => {
    TodoApi.updateHeading(heading).then(TodoApi.getHeading).then(setHeading);
  };

  const removeItem = (itemId) => {
    TodoApi.removeItem(itemId).then(TodoApi.getAllItems).then(setItems);
  };

  const toggleItemStatus = (itemId) => {
    TodoApi.toggleItemStatus(itemId).then(TodoApi.getAllItems).then(setItems);
  };

  const addItem = (item) => {
    TodoApi.addItem(item).then(TodoApi.getAllItems).then(setItems);
  };

  const removeTodo = () => {
    TodoApi.removeTodo()
      .then(TodoApi.getHeading)
      .then(setHeading)
      .then(TodoApi.getAllItems)
      .then(setItems);
  };

  return (
    <div className="todo">
      <TodoHeading
        handleKeyEnter={updateHeading}
        removeTodo={removeTodo}
        heading={heading}
      />
      <TodoList
        items={items}
        onClick={toggleItemStatus}
        removeItem={removeItem}
      />
      <InputBox handleKeyEnter={addItem} className="item-input" />
    </div>
  );
};

export default Todo;
