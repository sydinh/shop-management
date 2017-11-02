import React from 'react';
import styled from 'styled-components';
import Products from './products';

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1.5rem;
  padding: 40px 0;
`;

class Home extends React.Component {
  render() {
    return (
      <HomeContainer>
        <Products />
      </HomeContainer>
    )

  }
}

export default Home;
