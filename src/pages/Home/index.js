import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  font-size: 10rem;
`;

const Home = () => {
  return (
    <HomeContainer>
      Home
      <Link to='/admin' className='pt-button pt-large pt-intent-primary'>Go to admin page</Link>
    </HomeContainer>
  );
}

export default Home;
