import React from 'react';
import InputBox from './InputBox';

class TodoHeading extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isEditing: false };
    this.setHeadingEditable = this.setHeadingEditable.bind(this);
    this.handleKeyEnter = this.handleKeyEnter.bind(this);
  }

  handleKeyEnter(heading) {
    this.setState({ isEditing: false });
    this.props.handleKeyEnter(heading);
  }

  setHeadingEditable() {
    this.setState({ isEditing: true });
  }

  render() {
    if (this.state.isEditing) {
      return (
        <InputBox
          handleKeyEnter={this.handleKeyEnter}
          value={this.props.heading}
        />
      );
    }
    return (
      <div className="heading-container">
        <div onClick={this.setHeadingEditable} className="heading">
          {this.props.heading}
        </div>
        <div className="remove-icon" onClick={this.props.removeTodo}>
          X
        </div>
      </div>
    );
  }
}

export default TodoHeading;
