import React from 'react';
import styled from 'styled-components';

const Icon = styled.div`
  cursor: pointer;
  display: none;
  padding: 1%;
  margin-right: 15px;
  color: gray;
`;

const RemoveIcon = ({ onClick }) => {
  return (
    <Icon className="remove__icon" onClick={onClick}>
      X
    </Icon>
  );
};

export default RemoveIcon;
