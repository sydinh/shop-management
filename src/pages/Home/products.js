import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Link } from 'react-router-dom';
import { showProducts, searchProduct } from 'dispatchers/productDispatcher';
import Loading from './loading';
import Product from './product';
import LoadMore from 'helpers/LoadMore';

const ProductList = styled.div`
  position: relative;
  margin-bottom: 100px;
`;

const SearchBar = styled.div`
  display: flex;
  justify-content: space-between;
`;

class Products extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      products: [],
      pageID: 1,
      limitID: 20,
      loadingItems: true
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.loadItems = this.loadItems.bind(this);
  }

  loadItems() {
    const windowHeight = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight;
    const body = document.body;
    const html = document.documentElement;
    const docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight,  html.scrollHeight, html.offsetHeight);
    const windowBottom = windowHeight + window.pageYOffset;
    const { productList } = this.props.product;

    if (productList.length < 20) {
      return this.setState({loadingItems: false});
    }

    if (windowBottom >= docHeight) {
      const { limitID } = this.state;
      this.setState({
        pageID: this.state.pageID + 1,
        products: [...this.state.products, ...productList]
      });
      this.props.showProducts(this.state.pageID, limitID);
    }
  }

  componentDidMount() {
    const { limitID, pageID } = this.state;
    this.props.showProducts(pageID, limitID);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    const { value } = this.state;
    this.props.searchProduct(value);
    event.preventDefault();
  }

  render() {
    const { productList } = this.props.product;
    const { loadingItems } = this.state;
    const products = [...this.state.products, ...productList];

    return (
      <Grid>
        <SearchBar>
          <form onSubmit={this.handleSubmit}>
            <label>
              <input
                type="text"
                placeholder='Search product'
                className="pt-input pt-intent-success"
                value={this.state.value}
                onChange={this.handleChange}
              />
            </label>
            <input
              type="submit"
              value="Search"
              className="pt-button pt-intent-success">
            </input>
          </form>
          <Link to='/admin' className='pt-button pt-large pt-intent-primary'>Go to admin page</Link>
        </SearchBar>
        <ProductList>
          <LoadMore loadItems={this.loadItems}>
            <Row>
              {products.map((item, i) =>
                <Col xs={6} md={3} key={i}>
                  <Product {...item}/>
                </Col>
              )}
            </Row>
          </LoadMore>
          {loadingItems && <Loading />}
        </ProductList>
      </Grid>
    )
  }
}

const mapStateToProps = state => {
  return {
    product: state.product
  };
};

const mapDispatchToProps = {
  showProducts,
  searchProduct
};

export default connect(mapStateToProps, mapDispatchToProps) (Products);
