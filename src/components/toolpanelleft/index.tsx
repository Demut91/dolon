import React from 'react';
import { Annotation } from 'components/iconsButtons/toolPanelLeft/annotation';
import { Arrow } from 'components/iconsButtons/toolPanelLeft/arrow';
import { Ruler } from 'components/iconsButtons/toolPanelLeft/ruler';
import { Ruler2 } from 'components/iconsButtons/toolPanelLeft/ruler2';
import { Wrapper } from '../toolPanelRight/styles';
import Draggable from 'react-draggable';

export default function ToolPanelLeft(): JSX.Element {
  return (
    <Draggable>
      <Wrapper>
        <Ruler />
        <Annotation />
        <Arrow />
        <Arrow />
        <Annotation />
        <Ruler2 />
        <Arrow />
        <Arrow />
      </Wrapper>
    </Draggable>
  );
}
