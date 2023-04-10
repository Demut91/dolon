import React, { useState } from 'react';
import { Wrapper, ButtonWrapper } from './styles';
import { Circle, Colour } from 'components/iconsButtons/navigation/navSettings/circle';
import { Eye } from 'components/iconsButtons/navigation/navSettings/eye';
import { Chain } from 'components/iconsButtons/navigation/navSettings/chain';
import { Lock } from 'components/iconsButtons/navigation/navSettings/lock';

export type PropType = {
  marked?: boolean;
  colour: Colour;
};

function NavSettings(props: PropType) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Wrapper onClick={(e) => { e.stopPropagation(); }} marked={props.marked}>
      <Circle colour={props.colour} />
      <Eye />
      <Chain />
      <ButtonWrapper onClick={(e) => { setIsOpen(!isOpen); }} >
        <Lock isOpen={isOpen} />
      </ButtonWrapper>
    </Wrapper>
  );
}

export default NavSettings;