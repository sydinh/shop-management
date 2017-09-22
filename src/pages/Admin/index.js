import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { showProducts } from 'actions/productActions';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Spinner, Icon } from '@blueprintjs/core';
import styled from 'styled-components';
import ProductItems from './Product/productItems';

const AdminContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 1.25rem;
`;

const Table = styled.table.attrs({
  className: 'pt-table pt-striped pt-interactive',
})`
  width: 100%;
`;

const TableData = styled.td.attrs({
  colSpan: '7'
})``;

const TableDataInner = styled.div`
  display: flex;
  justify-content: center;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

class Admin extends Component {

  componentDidMount() {
    this.props.showProducts();
  }

  componentWillReceiveProps(nextProps) {
    if (!nextProps.products) {
      this.props.showProducts();
    }
  }

  renderProducts = products => {
    if (!products) {
      return null;
    } else if (!products.length) {
      return(
        <tr>
          <TableData>
            <TableDataInner>
              <Spinner className="pt-small pt-intent-success" />
            </TableDataInner>
          </TableData>
        </tr>
        );
    } else {
      const product = products.map((product, productNo) => <ProductItems key={product.id} productNo={productNo} {...product} />);
      return product;
    }
  }

  render() {
    const { match } = this.props;
    const productArr = this.props.products.products;
    return (
      <AdminContainer>
        <Grid>
          <Row>
            <Col md={12}>
              <ButtonContainer>
                <Link
                  to={`${match.path}/products/add`}
                  className="pt-button pt-intent-primary"
                  role="button"
                  tabIndex="0"
                >
                  <Icon iconName="add" iconSize="inherit" />
                  Add product
                </Link>
              </ButtonContainer>
              <Table>
                <thead>
                  <tr>
                    <th><Icon iconName="double-caret-vertical" />No</th>
                    <th><Icon iconName="double-caret-vertical" />Product Name</th>
                    <th><Icon iconName="double-caret-vertical" />Product Price</th>
                    <th><Icon iconName="double-caret-vertical" />Product Description</th>
                    <th><Icon iconName="double-caret-vertical" />Product Image</th>
                    <th><Icon iconName="double-caret-vertical" />Created at</th>
                    <th style={{ textAlign: 'center' }}>Options</th>
                  </tr>
                </thead>
                <tbody>
                  { this.renderProducts(productArr) }
                </tbody>
              </Table>
            </Col>
          </Row>
        </Grid>
      </AdminContainer>
    );
  }

};

const mapStateToProps = state => {
  const { products } = state;
  return {
    products,
  };
};

const mapDispatchToProps = dispatch => {
  const action = bindActionCreators({
    showProducts,
  }, dispatch);
  return action;
};

export default connect(mapStateToProps, mapDispatchToProps)(Admin);
