import React, { useState } from 'react';
import InputBox from './InputBox';
import RemoveIcon from './RemoveIcon';

const TodoHeading = (props) => {
  const [editingStatus, setEditingStatus] = useState(false);

  const handleKeyEnter = (heading) => {
    props.handleKeyEnter(heading);
    setEditingStatus(!editingStatus);
  };

  if (editingStatus) {
    return <InputBox handleKeyEnter={handleKeyEnter} value={props.heading} />;
  }
  return (
    <div className="heading-container">
      <div onClick={() => setEditingStatus(!editingStatus)} className="heading">
        {props.heading}
      </div>
      <RemoveIcon onClick={props.removeTodo} />
    </div>
  );
};
export default TodoHeading;
