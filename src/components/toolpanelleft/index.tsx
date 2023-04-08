import React from 'react';
import IconButton from '@mui/material/IconButton';
import { Ruler } from 'assets/icons/toolPanelLeft/ruler';
import { Annotation } from 'assets/icons/toolPanelLeft/annotation';
import { Ruler2 } from 'assets/icons/toolPanelLeft/ruler2';
import { Arrow } from 'assets/icons/toolPanelLeft/arrow';
import { Wrapper } from './styles';
import Draggable from 'react-draggable';

export default function ToolPanelLeft(): JSX.Element {
  return (
    <Draggable>
      <Wrapper>
        <IconButton
          sx={{
            
          }}>
          <Ruler />
        </IconButton>

        <IconButton>
          <Annotation />
        </IconButton>

        <IconButton>
          <Arrow />
        </IconButton>

        <IconButton>
          <Arrow />
        </IconButton>

        <IconButton>
          <Annotation />
        </IconButton>

        <IconButton>
          <Ruler2 />
        </IconButton>

        <IconButton>
          <Arrow />
        </IconButton>

        <IconButton>
          <Arrow />
        </IconButton>
      </Wrapper>
    </Draggable>
  );
}
