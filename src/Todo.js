import React from 'react';
import TodoList from './components/TodoList';
import InputBox from './components/InputBox';

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [{ item: 'buy milk', id: 0 }], lastItemId: 0 };
    this.addItem = this.addItem.bind(this);
  }

  addItem(item) {
    this.setState((state) => {
      const items = state.items.slice();
      const id = state.lastItemId + 1;
      items.push({ item, id });
      return { items, lastItemId: id };
    });
  }

  render() {
    return (
      <div>
        <TodoList items={this.state.items} />
        <InputBox handleKeyEnter={this.addItem} />
      </div>
    );
  }
}

export default Todo;
