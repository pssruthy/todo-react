import React from 'react';
import TodoList from './components/TodoList';
import InputBox from './components/InputBox';

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
      items.push({ item, id, isDone: false });
      return { items, lastItemId: id };
    });
  }

  toggleItemStatus(itemId) {
    this.setState((state) => {
      const { items } = state;
      const newItems = items.map(({ item, isDone, id }) => {
        return { id, item, isDone: itemId === id ? !isDone : isDone };
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
