import React from 'react';
import { Ruler } from 'assets/iconsButtons/toolPanelLeft/ruler';
import { Annotation } from 'assets/iconsButtons/toolPanelLeft/annotation';
import { Ruler2 } from 'assets/iconsButtons/toolPanelLeft/ruler2';
import { Arrow } from 'assets/iconsButtons/toolPanelLeft/arrow';
import { Wrapper } from '../toolpanelRight/styles';
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
