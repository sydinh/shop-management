import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const NotFound404 = styled.h2`
  font-size: 30rem;
`;

const NotFoundText = styled.h5`
  font-size: 3rem;
  margin-top: 30px;
`;

const NotFoundBackHome = styled.p`
  font-size: 1rem;
  margin-top: 30px;
`;

const NotFound = () => {
  return (
    <NotFoundContainer>
      <NotFound404>404</NotFound404>
      <NotFoundText>Page not found</NotFoundText>
      <NotFoundBackHome>Go back to <Link to='/'>Home</Link></NotFoundBackHome>
    </NotFoundContainer>
  );
}

export default NotFound;
