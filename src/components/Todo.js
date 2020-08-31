import React from 'react';
import TodoList from './TodoList';
import InputBox from './InputBox';

const DONE = 'done';
const PROCESSING = 'processing';
const UNDONE = 'undone';

const toggleStatus = {
  [UNDONE]: PROCESSING,
  [PROCESSING]: DONE,
  [DONE]: UNDONE,
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
      items.push({ item, id, status: UNDONE });
      return { items, lastItemId: id };
    });
  }

  toggleItemStatus(itemId) {
    this.setState((state) => {
      const { items } = state;
      const newItems = items.map((item) => {
        if (item.id === itemId) {
          item.status = toggleStatus[item.status];
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
