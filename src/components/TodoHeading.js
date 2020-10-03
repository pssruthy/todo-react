import React, { useState } from 'react';
import styled from 'styled-components';
import InputBox from './InputBox';
import RemoveIcon from './RemoveIcon';

const HeadingContainer = styled.div`
  display: flex;
  justify-content: space-between;
  &:hover > .remove__icon {
    display: block;
  }
`;

const Heading = styled.div`
  font-size: xx-large;
  width: 80%;
`;

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
    <HeadingContainer>
      <Heading onClick={() => setEditingStatus(!editingStatus)}>
        {props.heading}
      </Heading>
      <RemoveIcon onClick={props.removeTodo} />
    </HeadingContainer>
  );
};
export default TodoHeading;
