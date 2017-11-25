import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  removeProduct,
  showProducts,
  sortProductByName,
  sortProductByPrice,
} from 'dispatchers/productDispatcher';
import {
  showModalDelete,
  closeModalDelete
} from 'actions/productActions';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Spinner, Icon } from '@blueprintjs/core';
import styled from 'styled-components';
import ProductItems from './Product/productItems';
import RemoveModal from './ProductModal/RemoveModal';
import { OurToaster } from 'helpers/Toaster';

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

const TableHeaderCellWithSort = styled.th`
  cursor: pointer;

  &:hover {
    color: #009900;
  }
`;

const Pagination = styled.ul`
  margin-top: 30px;
`;

class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageID: 1,
      limitID: 100,
      activeIndex: 0,
      sortKeyword: '',
      sortOrderCategories: [
        { name: 'default' },
        { name: 'desc' },
        { name: 'asc' },
      ],
      isNameFieldActive: false,
      isPriceFieldActive: false,

      // For pagination
      currentPage: 1,
      itemsPerPage: 5
    };
  }

  componentDidMount() {
    const { limitID, pageID } = this.state;
    this.props.showProducts(pageID, limitID);
  }

  deleteItem = (index, id, name) => {
    this.props.removeProduct(index, id, name);
    OurToaster.update(OurToaster.clear(), {});
  }

  showModal = () => {
    this.props.showModalDelete();
  }

  closeModal = () => {
    this.props.closeModalDelete();
  }

  generateSortKeyword = () => {
    let { activeIndex, sortKeyword, sortOrderCategories } = this.state;

    activeIndex === (sortOrderCategories.length - 1)
      ? activeIndex = 0
      : activeIndex++

    this.setState({ activeIndex });

    activeIndex === 1
      ? sortKeyword = sortOrderCategories[1].name
      : activeIndex === 2
        ? sortKeyword = sortOrderCategories[2].name
        : sortKeyword = sortOrderCategories[0].name

    return sortKeyword;
  }

  sortProductByName = () => {
    const sortKeyword = this.generateSortKeyword();
    this.props.sortProductByName(sortKeyword);
    this.setState({
      isNameFieldActive: true,
      isPriceFieldActive: false,
    });
  }

  sortProductByPrice = () => {
    const sortKeyword = this.generateSortKeyword();
    this.props.sortProductByPrice(sortKeyword);
    this.setState({
      isPriceFieldActive: true,
      isNameFieldActive: false,
    });
  }

  handleSetPage = event => {
    this.setState({
      currentPage: Number(event.target.id)
    });
  }

  render() {
    const {
      activeIndex,
      isNameFieldActive,
      isPriceFieldActive,
      currentPage,
      itemsPerPage
    } = this.state;
    const { match } = this.props;
    const { isFetchingProducts, productList } = this.props.product;

    // Pagination Logic
    const indexOfLastProduct = currentPage * itemsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
    const currentItems = productList.slice(indexOfFirstProduct, indexOfLastProduct);
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(productList.length / itemsPerPage); i++) {
      pageNumbers.push(i);
    }

    return (
      <AdminContainer>
        <Grid>
          <Row>
            <Col md={12}>
              <ButtonContainer>
                <Link
                  to={`${match.path}/products/add`}
                  className='pt-button pt-intent-primary'
                  role='button'
                  tabIndex='0'
                >
                  <Icon iconName='add' iconSize='inherit' />
                  Add product
                </Link>
              </ButtonContainer>
              <Table>
                <thead>
                  <tr>
                    <TableHeaderCellWithSort>No</TableHeaderCellWithSort>
                    <TableHeaderCellWithSort onClick={this.sortProductByName}>
                      <Icon
                        iconName={
                          isNameFieldActive && !isPriceFieldActive && activeIndex === 1
                            ? 'sort-desc'
                            : isNameFieldActive && !isPriceFieldActive && activeIndex === 2
                              ? 'sort-asc'
                              : 'sort'
                        }
                      />
                        &nbsp; Product Name
                    </TableHeaderCellWithSort>
                    <TableHeaderCellWithSort onClick={this.sortProductByPrice}>
                      <Icon
                        iconName={
                          isPriceFieldActive && !isNameFieldActive && activeIndex === 1
                            ? 'sort-desc'
                            : isPriceFieldActive && !isNameFieldActive && activeIndex === 2
                              ? 'sort-asc'
                              : 'sort'
                        }
                      />
                        &nbsp; Product Price
                    </TableHeaderCellWithSort>
                    <TableHeaderCell>Product Description</TableHeaderCell>
                    <th>Product Image</th>
                    <th>Created at</th>
                    <th style={{ textAlign: 'center' }}>Options</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    (productList.length === 0 && isFetchingProducts) &&
                      <tr>
                        <TableData>
                          <TableDataInner>
                            <Spinner className='pt-small pt-intent-success' />
                          </TableDataInner>
                        </TableData>
                      </tr>
                  }
                  {
                    productList.length > 0 && currentItems.map((product, productNo) =>
                      <ProductItems
                        key={product.id}
                        productNo={productNo}
                        {...product}
                        handleDelete={this.deleteItem}
                      />)
                  }
                </tbody>
              </Table>
            </Col>
          </Row>
        </Grid>
        <Pagination className='pt-button-group pt-large'>
          <li
            className={`pt-button ${this.state.currentPage === 1 && 'pt-disabled'}`}
            id={1}
            onClick={this.handleSetPage}
          >
            First
          </li>
          <li
            className={`pt-button ${this.state.currentPage === 1 && 'pt-disabled'}`}
            id={this.state.currentPage - 1}
            onClick={this.handleSetPage}
          >
            Previous
          </li>
          {pageNumbers.map(number => (
            <li
              key={number}
              id={number}
              onClick={this.handleSetPage}
              className={`pt-button ${this.state.currentPage === number && 'pt-intent-primary'}`}
            >
              {number}
            </li>
          ))}
          <li
            className={`pt-button ${this.state.currentPage === pageNumbers.length && 'pt-disabled'}`}
            id={this.state.currentPage + 1}
            onClick={this.handleSetPage}
          >
            Next
          </li>
          <li
            className={`pt-button ${this.state.currentPage === pageNumbers.length && 'pt-disabled'}`}
            id={pageNumbers.length}
            onClick={this.handleSetPage}
          >
            Last
          </li>
        </Pagination>
        <RemoveModal
          handleDelete={this.deleteItem}
          handleCloseModal={this.closeModal}
        />
      </AdminContainer>
    );
  }

};

const mapStateToProps = state => {
  return {
    product: state.product
  };
};

const mapDispatchToProps = {
  showProducts,
  removeProduct,
  showModalDelete,
  closeModalDelete,
  sortProductByName,
  sortProductByPrice
};

export default connect(mapStateToProps, mapDispatchToProps)(Admin);
