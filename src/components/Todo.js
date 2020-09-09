import React, { useState, useEffect } from 'react';
import TodoList from './TodoList';
import InputBox from './InputBox';
import TodoHeading from './TodoHeading';
import TodoApi from './TodoApi';

const DONE = 'done';
const PROCESSING = 'processing';
const UNDONE = 'undone';

const toggleStatus = {
  [UNDONE]: PROCESSING,
  [PROCESSING]: DONE,
  [DONE]: UNDONE,
};

const Todo = () => {
  const [heading, setHeading] = useState('');
  const [items, setItems] = useState([]);
  const [lastId, setLastId] = useState(0);

  useEffect(() => {
    TodoApi.getHeading().then(setHeading);
  }, []);

  const updateHeading = (heading) => setHeading(heading);

  const removeItem = (itemId) =>
    setItems((previousItems) =>
      previousItems.filter(({ id }) => id !== itemId)
    );

  const toggleItemStatus = (itemId, status) => {
    setItems((currentItems) => {
      const itemsCopy = currentItems.slice();
      const itemToToggle = itemsCopy.find(({ id }) => id === itemId);
      itemToToggle.status = toggleStatus[status];
      return itemsCopy;
    });
  };

  const addItem = (item) => {
    setItems((previousItems) => [
      ...previousItems,
      { item, id: lastId + 1, status: UNDONE },
    ]);
    setLastId(lastId + 1);
  };

  const removeTodo = () => {
    setHeading('Todo');
    setItems([]);
    setLastId(0);
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
