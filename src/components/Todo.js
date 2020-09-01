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
      isHeadingEditing: false,
      items: [],
      lastItemId: 0,
    };
    this.addItem = this.addItem.bind(this);
    this.toggleItemStatus = this.toggleItemStatus.bind(this);
    this.setHeadingEditable = this.setHeadingEditable.bind(this);
    this.updateHeading = this.updateHeading.bind(this);
  }

  updateHeading(heading) {
    this.setState({ heading, isHeadingEditing: false });
  }

  setHeadingEditable() {
    this.setState({ isHeadingEditing: true });
  }

  addItem(item) {
    this.setState(({ items, lastItemId }) => {
      const newItems = items.slice();
      const id = lastItemId + 1;
      newItems.push({ item, id, status: UNDONE });
      return { items: newItems, lastItemId: id };
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

  render() {
    return (
      <div>
        {this.state.isHeadingEditing ? (
          <InputBox
            handleKeyEnter={this.updateHeading}
            value={this.state.heading}
          />
        ) : (
          <TodoHeading
            onClick={this.setHeadingEditable}
            value={this.state.heading}
          />
        )}
        <TodoList items={this.state.items} onClick={this.toggleItemStatus} />
        <InputBox handleKeyEnter={this.addItem} />
      </div>
    );
  }
}

export default Todo;
