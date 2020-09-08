import React, { useState } from 'react';

const InputBox = (props) => {
  const [value, setValue] = useState(props.value);

  const handleOnchange = (event) => {
    const newValue = event.target.value;
    setValue(newValue);
  };

  const handleKeyDown = (event) => {
    const { key, target } = event;
    if (key === 'Enter' && target.value.trim()) {
      props.handleKeyEnter(target.value);
      setValue('');
    }
  };

  return (
    <input
      value={value ? value : ''}
      onChange={handleOnchange}
      onKeyDown={handleKeyDown}
      className={props.className}
    ></input>
  );
};

export default InputBox;
