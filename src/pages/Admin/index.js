import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const AdminContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  font-size: 10rem;
`;

const Admin = () => {
  return (
    <AdminContainer>
      Admin
      <Link to='/' className='pt-button pt-large pt-intent-success'>Go to home page</Link>
    </AdminContainer>
  );
}

export default Admin;
