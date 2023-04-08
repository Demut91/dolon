import { Eye } from 'assets/iconsButtons/toolPanelRight/eye';
import { ViewUpDown } from 'assets/iconsButtons/toolPanelRight/vewUpDown';
import { ViewChange } from 'assets/iconsButtons/toolPanelRight/viewChange';
import { ViewEmpty } from 'assets/iconsButtons/toolPanelRight/viewEmpty';
import { ViewN } from 'assets/iconsButtons/toolPanelRight/viewN';
import { ViewPlane } from 'assets/iconsButtons/toolPanelRight/viewPlane';
import { ViewW } from 'assets/iconsButtons/toolPanelRight/viewW';
import React from 'react';
import { Wrapper } from './styles';
import Draggable from 'react-draggable';
import { ViewCommon } from 'assets/iconsButtons/toolPanelRight/viewCommon';

export default function ToolPanelRight(): JSX.Element {
    return (
        <Draggable>

            <Wrapper>
                <ViewChange />
                <Eye />
                <ViewEmpty />
                <ViewN />
                <ViewW />
                <ViewUpDown />
                <ViewPlane />
                <ViewCommon />

            </Wrapper>
        </Draggable>
    );
}
