import React from 'react';
import TodoList from './components/TodoList';
import InputBox from './components/InputBox';

const getStatus = (isDone, isProcessing) => {
  let processing = true;
  let done = false;
  if (isProcessing) {
    done = true;
    processing = false;
  }
  if (isDone) {
    processing = false;
  }
  return { isDone: done, isProcessing: processing };
};

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [], lastItemId: 0 };
    this.addItem = this.addItem.bind(this);
    this.toggleItemStatus = this.toggleItemStatus.bind(this);
  }

  addItem(item) {
    this.setState((state) => {
      const items = state.items.slice();
      const id = state.lastItemId + 1;
      items.push({ item, id, isDone: false, isProcessing: false });
      return { items, lastItemId: id };
    });
  }

  toggleItemStatus(itemId) {
    this.setState((state) => {
      const { items } = state;
      const newItems = items.map((item) => {
        if (item.id === itemId) {
          const status = getStatus(item.isDone, item.isProcessing);
          item.isProcessing = status.isProcessing;
          item.isDone = status.isDone;
        }
        return item;
      });
      return { items: newItems };
    });
  }

  render() {
    return (
      <div>
        <TodoList items={this.state.items} onClick={this.toggleItemStatus} />
        <InputBox handleKeyEnter={this.addItem} />
      </div>
    );
  }
}

export default Todo;
