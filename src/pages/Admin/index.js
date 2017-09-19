import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import ProductForm from 'pages/Admin/Product/productForm';
import ProductList from 'pages/Admin/Product/productList';

const AdminContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 1.25rem;
`;

const Admin = () => {
  return (
    <AdminContainer>
      <ProductForm />
      <br />
      <ProductList />
      <br />
      <Link to='/' className='pt-button pt-large pt-intent-success'>Go to home page</Link>
    </AdminContainer>
  );
}

export default Admin;
