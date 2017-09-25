import './productForm.css';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Icon } from '@blueprintjs/core';
import styled from 'styled-components';
import { getProductDetail } from 'actions/productActions';


const Section = styled.section.attrs({
  className: props => props.product ? 'section-product' : '' ,
})`
  width: 50%;
  margin: 1.25rem auto 0 auto;
  padding: 1.25rem;
  text-align: left;
  border: 1px solid #c2c2c2;
`;

const SectionInner = styled.div`
  margin: 1.25rem 0;
`;

const SectionHeading = styled.h2`
  padding-bottom: 0.625rem;
  border-bottom: 1px solid #c2c2c2;
`;

const ProductNameLabel = styled.label.attrs({
  className: 'pt-label',
  htmlFor: '',
})``;

const ProductPriceLabel = styled.label.attrs({
  className: 'pt-label',
  htmlFor: '',
})``;

const ProductDescriptionLabel = styled.label.attrs({
  className: 'pt-label',
  htmlFor: '',
})``;

const ProductInput = styled.input`
  width: 100%;
`;

const ProductTextarea = styled.textarea`
  width: 100%;
`;

const SubmitButton = styled.button.attrs({
  className: 'pt-button pt-intent-primary',
  type: 'submit',
})``;

const ButtonContainer = styled.div`
  margin-top: 0.625rem;
`;

class ProductUpdate extends Component {

  componentWillMount() {
    const { productId } = this.props.match.params;
    this.props.getProductDetail(productId)
  }

  render() {
    return(
      <Grid>
        <Section product>
          <SectionHeading>
            <Icon iconName="automatic-updates" iconSize="inherit" />
            &nbsp;
            Edit product
          </SectionHeading>
          <SectionInner>
            <form>
              <Row>
                <Col xs={6} md={2}>
                  <ProductNameLabel>
                    Name
                  </ProductNameLabel>
                </Col>
                <Col xs={6} md={10} className="pt-form-content">
                  <ProductInput
                    name="productName"
                    className="pt-input"
                    placeholder="Product name"
                    type="text"
                    dir="auto"
                  />
                </Col>
              </Row>
              <br />

              <Row>
                <Col xs={6} md={2}>
                  <ProductPriceLabel>
                    Price
                  </ProductPriceLabel>
                </Col>
                <Col xs={6} md={10} className="pt-form-content">
                  <ProductInput
                    name="productPrice"
                    className="pt-input"
                    placeholder="Product price"
                    type="text"
                    dir="auto"
                  />
                </Col>
              </Row>
              <br />

              <Row>
                <Col xs={6} md={2}>
                  <ProductDescriptionLabel>
                    Description
                  </ProductDescriptionLabel>
                </Col>
                <Col xs={6} md={10} className="pt-form-content">
                  <ProductTextarea
                    name="productDescription"
                    className="pt-input"
                    placeholder="Product description"
                    dir="auto"
                  />
                </Col>
              </Row>
              <br />

              <Row end="xs">
                <Col mdOffset={2} md={10} xsOffset={6} xs={6}>
                  <SubmitButton>
                    <Icon iconName="saved" iconSize="inherit" />
                    Save
                  </SubmitButton>
                </Col>
              </Row>
            </form>
          </SectionInner>
          <ButtonContainer>
            <Link
              to="/admin"
              className="pt-button"
              role="button"
              tabIndex="0"
            >
              <Icon iconName="fast-backward" iconSize="inherit" />
              Back
            </Link>
          </ButtonContainer>
        </Section>
      </Grid>
    );
  };

};

const mapStateToProps = state => {
  console.log(state);
  return {

  }
};

export default connect(mapStateToProps, { getProductDetail })(ProductUpdate);
