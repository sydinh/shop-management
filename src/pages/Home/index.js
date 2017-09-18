import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
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
        <Link to='/admin' className='pt-button pt-large pt-intent-primary'>Go to admin page</Link>
        <Products />
      </HomeContainer>
    )

  }
}

export default Home;
