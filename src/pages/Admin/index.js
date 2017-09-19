import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { showProducts } from 'actions';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Spinner, Icon } from '@blueprintjs/core';
import styled from 'styled-components';
import ProductList from 'pages/Admin/Product/productList';

const AdminContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 1.25rem;
`;

const Table = styled.table.attrs({
  className: 'pt-table pt-interactive',
})`
  width: 100%;
`;

const TableData = styled.td.attrs({
  colSpan: '6'
})``;

const TableDataInner = styled.div`
  display: flex;
  justify-content: center;
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
    if (products) {
      const product = products.map((product, productNo) => <ProductList key={product.id} productNo={productNo} {...product} />);
      return product;
    }
    return(
      <tr>
        <TableData>
          <TableDataInner>
            <Spinner className="pt-small pt-intent-success" />
          </TableDataInner>
        </TableData>
      </tr>
    );
  }

  render() {
    const products = this.props.products.products;
    return (
      <AdminContainer>
        <Grid>
          <Row>
            <Col md={12}>
              <Table>
                <thead>
                  <tr>
                    <th><Icon iconName="double-caret-vertical" />No</th>
                    <th><Icon iconName="double-caret-vertical" />Product Name</th>
                    <th><Icon iconName="double-caret-vertical" />Product Price</th>
                    <th><Icon iconName="double-caret-vertical" />Product Description</th>
                    <th><Icon iconName="double-caret-vertical" />Product Image</th>
                    <th><Icon iconName="double-caret-vertical" />Created at</th>
                    <th>Options</th>
                  </tr>
                </thead>
                <tbody>
                  { this.renderProducts(products) }
                </tbody>
              </Table>
            </Col>
          </Row>
        </Grid>
        <br />
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
