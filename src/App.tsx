import React from 'react';
import Editor from './pages/editor';
import Header from 'components/header';
import styled from 'styled-components';
import model from 'assets/model.svg';


const Container = styled.section`
  margin: 0 auto;
  max-width: 1440px; 
`;

function App(): JSX.Element {
  return (
    <Container>
      <Header />
      <Editor />
      <img style={{ position: 'absolute', zIndex: '-1', top: '-10%' }} src={model} alt="model" />
    </Container>
  );
}

export default App;
