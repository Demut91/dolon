import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: #F5F5F7;
  position: absolute;
  right: 2px;
  display: grid;
  grid-template-columns: 225px auto;
  grid-gap: 20px;
  padding: 28px 31px 28px 16px;
  min-height: 100px;
  input[type=number]::-webkit-inner-spin-button, 
  input[type=number]::-webkit-outer-spin-button { 
  -webkit-appearance: none; 
  margin: 0; 
}
`;

export const IconButtonWrapper = styled.button`

`;