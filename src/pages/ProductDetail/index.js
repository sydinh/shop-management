import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';
import API_URL_BASE from 'APIClient/HTTPClient';
import FormatCurrency from 'helpers/FormatCurrency';
import FetchingFailed from 'pages/Home/fetching-failed'
import { Link } from 'react-router-dom';

const ProductDetailContainer = styled.div`
  margin-top: 50px;
`;

const Img = styled.img`
  width: 100%;
`;

const LinkToHomePage = styled.p`
  text-align: center;
`;

class ProductDetail extends Component {
  constructor() {
    super();
    this.state = {
      product: {},
      error: false
    }
  }

  componentDidMount() {
    const { productId } = this.props.match.params;
    if(productId) {
      axios.get(`${API_URL_BASE}/products/${productId}`)
      .then(res => {
        this.setState({
          product: res.data,
        });
      })
      .catch(err => {
        this.setState({
          error: true
        })
      })
    }
  }

  render() {
    const { product } = this.state;

    if(this.state.error) {
      return <FetchingFailed />
    }

    return (
      <ProductDetailContainer>
        <Grid>
          <h2>Product detail: {product.name}</h2>
          <Row>
            <Col xs={3} md={3}>
              <Img src={product.image} />
            </Col>
            <Col xs={9} md={9}>
              <p><strong>Product name:</strong> {product.name}</p>
              <p><strong>Description:</strong> {product.description}</p>
              <p><strong>Price:</strong> {FormatCurrency(product.price * 1000)}</p>
            </Col>
          </Row>
          <LinkToHomePage>
            <Link to='/' className='pt-button pt-large pt-intent-primary'>Go to home page</Link>
          </LinkToHomePage>
        </Grid>
      </ProductDetailContainer>
    );
  };
};

ProductDetail.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      productId: PropTypes.string.isRequired,
    })
  })
}

export default ProductDetail;
