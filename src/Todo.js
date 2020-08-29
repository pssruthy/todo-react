import React from 'react';
import TodoList from './components/TodoList';
import InputBox from './components/InputBox';

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [{ item: 'buy milk' }] };
  }

  render() {
    return (
      <div>
        <TodoList items={this.state.items} />
        <InputBox />
      </div>
    );
  }
}

export default Todo;
