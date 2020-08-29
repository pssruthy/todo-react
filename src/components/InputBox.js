import React from 'react';

class InputBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
    this.handleOnchange = this.handleOnchange.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  handleOnchange(event) {
    const value = event.target.value;
    return this.setState({ value });
  }

  handleKeyDown(event) {
    const { key, target } = event;
    if (key === 'Enter') {
      this.props.handleKeyEnter(target.value);
      this.setState({ value: '' });
    }
  }

  render() {
    return (
      <input
        value={this.state.value}
        onChange={this.handleOnchange}
        onKeyDown={this.handleKeyDown}
      ></input>
    );
  }
}

export default InputBox;
