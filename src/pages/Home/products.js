import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Grid, Row, Col } from 'react-flexbox-grid';
import API_URL_BASE from 'APIClient/HTTPClient';
import CurrencyFormat from 'helper/CurrencyFormat';
import Loading from './loading';
import FetchingFailed from './fetching-failed'

const Product = styled.div`
  border: 1px solid #ccc;
  border-radius: 3px;
  margin: 10px 0;
  padding: 10px;
  font-size: 16px;
`;

const Img = styled.img`
  height: 200px;
  width: 100%;
`;

const ProductName = styled.p`
  text-align: left;
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

class Products extends React.Component {
  constructor() {
    super();
    this.state = {
      product: [],
      isLoading: true,
      error: false
    }
  }
  componentDidMount() {
    axios.get(`${API_URL_BASE}/products`)
    .then(res => {
      this.setState({
        product: res.data,
        isLoading: false
      });
    })
    .catch(err => {
      this.setState({
        error: true,
        isLoading: false
      })
    })
  }



  render() {
    if(this.state.isLoading) {
      return <Loading />
    }

    if(this.state.error) {
      return <FetchingFailed />
    }

    return (
      <Grid>
        <Row>
          {this.state.product.map((item, i) =>
            <Col xs={6} md={3} key={i}>
              <Product>
                <Img src={item.image} alt="" />
                <ProductName>{item.name}</ProductName>
                <p>
                  <ProductPriceTitle> Price:</ProductPriceTitle>
                  <ProductPrice>{CurrencyFormat(item.price * 1000)}</ProductPrice>
                </p>
                <button type="button" className="pt-button pt-icon-add pt-intent-success">Add to card</button>
              </Product>
            </Col>
          )}
        </Row>
      </Grid>
    )
  }
}

export default Products;
