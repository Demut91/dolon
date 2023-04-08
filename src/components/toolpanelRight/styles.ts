import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 28px;
  padding: 2px;
  &:hover{
    cursor: grabbing;
  }
`;

export const IconButtonWrapper = styled.button`
background-color: #FFF;
margin: 2px;
border-radius: 4px;
border: none;
padding: 0;
width: 20px;
height: 20px;
display: flex;
align-items: center;
justify-content: center;
&:hover {
  cursor: pointer;
  background-color: #E9E9EB;  
}
&:active {
  transform: scale(0.9);
} 
&:first-child {
  background: #7AA7FF;
  border-radius: 8px;
  margin-bottom: 4px;
  &:hover {
    transform: scale(1.1)
  }
}
&:nth-child(3),
&:nth-child(6)   {
  margin-top: 0;
}
&:nth-child(4):hover   {
  svg {        
      rect {
        fill: #E9E9EB;
      }    
  }
}
`;