import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 42px;
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
padding: 1px 0 0 0;
width: 28px;
&:hover {
  cursor: pointer;
  background-color: #E9E9EB;
  /* svg {   
      path {
        fill: green;
      }
      rect {
        fill: green;
      }    
  } */
}
&:active {
  transform: scale(0.9);
}
`;