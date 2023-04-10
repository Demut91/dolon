import React from 'react';
import ToolPanelLeft from 'components/toolPanelLeft';
import ToolPanelRight from 'components/toolPanelRight';
import Navigation from 'components/navigation';
import EditorMainPanel from 'components/editorMainPanel';
import styled from 'styled-components';

const Leaf = styled.div`
  position: relative; 
`;

function Editor(): JSX.Element {
  return (
    <Leaf>
      <Navigation />
      <EditorMainPanel />
      <ToolPanelLeft />
      <ToolPanelRight />
    </Leaf>
  );
}

export default Editor;
