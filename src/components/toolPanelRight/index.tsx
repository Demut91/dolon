import React from 'react';
import Draggable from 'react-draggable';
import { Wrapper } from './styles';
import { Eye } from 'components/iconsButtons/toolPanelRight/eye';
import { ViewUpDown } from 'components/iconsButtons/toolPanelRight/vewUpDown';
import { ViewChange } from 'components/iconsButtons/toolPanelRight/viewChange';
import { ViewCommon } from 'components/iconsButtons/toolPanelRight/viewCommon';
import { ViewEmpty } from 'components/iconsButtons/toolPanelRight/viewEmpty';
import { ViewN } from 'components/iconsButtons/toolPanelRight/viewN';
import { ViewPlane } from 'components/iconsButtons/toolPanelRight/viewPlane';
import { ViewW } from 'components/iconsButtons/toolPanelRight/viewW';

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
