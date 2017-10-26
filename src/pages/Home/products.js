import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Link } from 'react-router-dom';
import FormatCurrency from 'helpers/FormatCurrency';
import { showProducts, searchProduct } from 'dispatchers/productDispatcher';
import Loading from './loading';

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

const SearchBar = styled.div`
  display: flex;
  justify-content: space-between;
`;

class Products extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.showProducts();
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
    const { isFetchingProducts, productList } = this.props.product;

    if(productList.length === 0 && isFetchingProducts) {
      return <Loading />
    }

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
        <Row>
          {productList.length > 0 && productList.map((item, i) =>
            <Col xs={6} md={3} key={i}>
              <Link to={`/home/product/${item.id}`}>
                <Product>
                  <Img src={item.image} alt='' />
                  <ProductName>{item.name}</ProductName>
                  <p>
                    <ProductPriceTitle> Price:</ProductPriceTitle>
                    <ProductPrice>{FormatCurrency(item.price * 1000)}</ProductPrice>
                  </p>
                  <button type='button' className='pt-button pt-icon-add pt-intent-success'>Add to card</button>
                </Product>
              </Link>
            </Col>
          )}
        </Row>
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
