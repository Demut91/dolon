import React from 'react';
import { Wrapper } from './styles';
import InputBlock from './inputBlock';
import { InputProps, inputFields } from 'constants/mockData';

function EditorMainPanel(): JSX.Element {
  return (
    <Wrapper>
      {inputFields.map((input: InputProps) => (
        <InputBlock
          name={input.name}
          defaultValue={input.defaultValue}
        />
      ))}
    </Wrapper>
  );
}

export default EditorMainPanel;