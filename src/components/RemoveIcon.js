import React from 'react';

const RemoveIcon = ({ onClick }) => {
  return (
    <div className="remove-icon" onClick={onClick}>
      X
    </div>
  );
};

export default RemoveIcon;
