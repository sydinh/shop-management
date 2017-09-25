import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { showProducts, clearProducts } from 'actions/productActions';
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

const TableHeaderCell = styled.th`
  width: 20rem;
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

  componentWillUnmount() {
    this.props.clearProducts();
  }

  render() {
    const { match } = this.props;
    const { isFetchingProducts, productList } = this.props.product;
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
                    <TableHeaderCell><Icon iconName="double-caret-vertical" />Product Description</TableHeaderCell>
                    <th><Icon iconName="double-caret-vertical" />Product Image</th>
                    <th><Icon iconName="double-caret-vertical" />Created at</th>
                    <th style={{ textAlign: 'center' }}>Options</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    isFetchingProducts &&
                      <tr>
                        <TableData>
                          <TableDataInner>
                            <Spinner className="pt-small pt-intent-success" />
                          </TableDataInner>
                        </TableData>
                      </tr>
                  }
                  {
                    productList.length > 0 && productList.map((product, productNo) =>
                      <ProductItems key={product.id} productNo={productNo} {...product} />)
                  }
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
  return {
    product: state.product,
  };
};

const mapDispatchToProps = {
  showProducts,
  clearProducts,
};

export default connect(mapStateToProps, mapDispatchToProps)(Admin);
