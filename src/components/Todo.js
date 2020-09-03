import React from 'react';
import TodoList from './TodoList';
import InputBox from './InputBox';
import TodoHeading from './TodoHeading';

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
    this.state = {
      heading: 'Todo',
      items: [],
      lastItemId: 0,
    };
    this.addItem = this.addItem.bind(this);
    this.toggleItemStatus = this.toggleItemStatus.bind(this);
    this.updateHeading = this.updateHeading.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
  }

  removeItem(itemId) {
    this.setState((state) => {
      const items = state.items.slice();
      const itemIndexToRemove = items.findIndex(({ id }) => id === itemId);
      items.splice(itemIndexToRemove, 1);
      return { items };
    });
  }

  updateHeading(heading) {
    this.setState({ heading });
  }

  addItem(item) {
    this.setState((state) => {
      const items = state.items.slice();
      const id = state.lastItemId + 1;
      items.push({ item, id, status: UNDONE });
      return { items, lastItemId: id };
    });
  }

  toggleItemStatus(itemId, status) {
    this.setState((state) => {
      const { items } = state;
      const itemToToggle = items.find(({ id }) => id === itemId);
      itemToToggle.status = toggleStatus[status];
      return { items };
    });
  }

  removeTodo() {
    this.setState({ heading: 'Todo', items: [], lastItemId: 0 });
  }

  render() {
    return (
      <div className="todo">
        <TodoHeading
          handleKeyEnter={this.updateHeading}
          removeTodo={this.removeTodo}
          heading={this.state.heading}
        />
        <TodoList
          items={this.state.items}
          onClick={this.toggleItemStatus}
          removeItem={this.removeItem}
        />
        <InputBox handleKeyEnter={this.addItem} className="item-input" />
      </div>
    );
  }
}

export default Todo;
