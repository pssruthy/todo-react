import React from 'react';

class InputBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
    this.handleOnchange = this.handleOnchange.bind(this);
  }

  handleOnchange(event) {
    const value = event.target.value;
    return this.setState({ value });
  }
  render() {
    return (
      <input value={this.state.value} onChange={this.handleOnchange}></input>
    );
  }
}

export default InputBox;
