import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import FormatCurrency from 'helpers/FormatCurrency';

const Img = styled.img`
  height: 200px;
  width: 100%;
`;

const ProductName = styled.p`
  text-align: left;
`;

const ProductItem = styled.div`
  border: 1px solid #ccc;
  border-radius: 3px;
  margin: 10px 0;
  padding: 10px;
  font-size: 16px;
`;

const ProductPriceTitle = styled.span`
  font-weight: 600;
  text-decoration: underline;
`;

const ProductPrice = styled.span`
  font-weight: 300;
  padding-left: 10px;
  color: #eb4947;
`;

const Product = props => {
  return (
    <Link to={`/home/product/${props.id}`}>
      <ProductItem>
        <Img src={props.image} alt='' />
        <ProductName>{props.name}</ProductName>
        <p>
          <ProductPriceTitle> Price:</ProductPriceTitle>
          <ProductPrice>{FormatCurrency(props.price * 1000)}</ProductPrice>
        </p>
        <button type='button' className='pt-button pt-icon-add pt-intent-success'>Add to card</button>
      </ProductItem>
    </Link>
  )
};

export default Product;
