import React from 'react';
import styled, { css } from 'styled-components';
import './todo.css';
import RemoveIcon from './RemoveIcon';

const ItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  &:hover > .remove__icon {
    display: block;
  }
`;

const Item = styled.div`
  width: inherit;
  min-height: 27px;
  display: flex;
  cursor: pointer;
  margin: 3px;
  ${(props) =>
    props.status === 'done' &&
    css`
      text-decoration: line-through;
    `}
`;

const statusColors = {
  done: 'mediumseagreen',
  undone: 'lightblue',
  processing: 'orange',
};

const Status = styled.div`
  height: inherit;
  margin-left: 1rem;
  width: 15px;
  margin-right: 1rem;
  ${(props) =>
    `background-color: ${statusColors[props.status]};
    `};
`;

const TodoItem = ({ item, id, status, onClick, removeItem }) => {
  return (
    <ItemContainer>
      <Item status={status} onClick={() => onClick(id)} id={id}>
        <Status status={status} />
        <div>{item}</div>
      </Item>
      <RemoveIcon onClick={() => removeItem(id)} />
    </ItemContainer>
  );
};

export default TodoItem;
