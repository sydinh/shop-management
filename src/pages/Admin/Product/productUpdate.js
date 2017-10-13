import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, initialize as setInitialValues } from 'redux-form';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Icon } from '@blueprintjs/core';
import { getProductDetail } from 'actions/productActions';
import { updateProduct } from 'dispatchers/productDispatcher';
import { OurToaster } from 'helpers/Toaster';
import SectionHeading from './Components/SectionHeading';
import Label from './Components/Label';
import ErrorNotification from './Components/ErrorNotification';
import BackLink from './Components/BackLink';
import validate from './helpers/productFormValidation';
import normalizePrice from 'helpers/NormalizePrice';
import {
  Section,
  SectionInner,
  ProductInput,
  ProductTextarea,
  SubmitButton,
  ResetButton,
  ButtonContainer
} from './Styles/Styled';

class ProductUpdate extends Component {

  componentWillMount() {
    const { productList, getProductDetail, history } = this.props;
    const { productId } = this.props.match.params;
    const index = productList.map(product => product.id).indexOf(productId);
    const product = this.props.productList[index];

    getProductDetail(product);

    if (productList.length === 0) {
      history.push('/admin');
      return;
    }

    if (product) {
      this.props.dispatch(setInitialValues('updateProductForm', {
        productName: product.name,
        productPrice: product.price,
        productDescription: product.description,
      }));
    }
  }

  componentWillUnmount() {
    OurToaster.clear();
  }

  renderInputField = fields => {
    const { touched, error } = fields.meta;
    const className = `${fields.className} ${touched && error ? 'pt-intent-danger' : ''}`;
    return(
      <div>
        <ProductInput
          {...fields.input}
          type={fields.type || 'text'}
          className={className}
          placeholder={fields.placeholder}
          dir={fields.dir}
        />
        {
          touched && error
            ? <ErrorNotification text={error} />
            : ''
        }
      </div>
    );
  }

  renderTextareaField = fields => {
    const { touched, error } = fields.meta;
    const className = `${fields.className} ${touched && error ? 'pt-intent-danger' : ''}`;
    return(
      <div>
        <ProductTextarea
          {...fields.input}
          className={className}
          placeholder={fields.placeholder}
          dir={fields.dir}
        />
        {
          touched && error
            ? <ErrorNotification text={error} />
            : ''
        }
      </div>
    );
  }

  onSubmit = data => {
    const { updateProduct, dispatch } = this.props;
    const { productId } = this.props.match.params;

    updateProduct(data, productId);
    dispatch(setInitialValues('updateProductForm', {
      productName: data.productName,
      productPrice: data.productPrice,
      productDescription: data.productDescription,
    }));
    OurToaster.update(OurToaster.clear(), {});
  }

  resetForm = () => {
    const { dispatch } = this.props;
    dispatch(setInitialValues('updateProductForm', {}));
  }

  render() {
    const { pristine, invalid, submitting } = this.props;
    return(
      <Grid>
        <Section product>
          <SectionHeading icon='automatic-updates' text='Edit product' />
          <SectionInner>
            <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
              <Row>
                <Col xs={6} md={2}>
                  <Label text='Name' />
                </Col>
                <Col xs={6} md={10} className='pt-form-content'>
                  <Field
                    name='productName'
                    component={this.renderInputField}
                    type='text'
                    className='pt-input'
                    placeholder='Product Name'
                    dir='auto'
                  />
                </Col>
              </Row>
              <br />

              <Row>
                <Col xs={6} md={2}>
                  <Label text='Price' />
                </Col>
                <Col xs={6} md={10} className='pt-form-content'>
                  <Field
                    name='productPrice'
                    component={this.renderInputField}
                    type='text'
                    className='pt-input'
                    placeholder='Product Price'
                    dir='auto'
                    normalize={normalizePrice}
                  />
                </Col>
              </Row>
              <br />

              <Row>
                <Col xs={6} md={2}>
                  <Label text='Description' />
                </Col>
                <Col xs={6} md={10} className='pt-form-content'>
                  <Field
                    name='productDescription'
                    component={this.renderTextareaField}
                    className='pt-input'
                    placeholder='Product Description'
                    dir='auto'
                  />
                </Col>
              </Row>
              <br />

              <Row end='xs'>
                <Col mdOffset={2} md={10} xsOffset={6} xs={6}>
                  <ResetButton onClick={this.resetForm} disabled={pristine || submitting}>
                    <Icon iconName='remove' iconSize='inherit' />
                    Clear
                  </ResetButton>
                  &nbsp;
                  <SubmitButton disabled={pristine || invalid || submitting}>
                    <Icon iconName='saved' iconSize='inherit' />
                    Save
                  </SubmitButton>
                </Col>
              </Row>
            </form>
          </SectionInner>
          <ButtonContainer>
            <BackLink />
          </ButtonContainer>
        </Section>
      </Grid>
    );
  };

};

const mapStateToProps = state => {
  return {
    productList: state.product.productList,
    initialValues: state.product.productDetail,
  };
};

const mapDispatchToProps = {
  getProductDetail,
  updateProduct
};

const createConnection = connect(mapStateToProps, mapDispatchToProps)(ProductUpdate);

const createReduxForm = reduxForm({
  form: 'updateProductForm',
  validate
});

const productUpdateContainer = createReduxForm(createConnection);

export default productUpdateContainer;
