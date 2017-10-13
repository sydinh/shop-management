import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, reset as resetForm } from 'redux-form';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Icon } from '@blueprintjs/core';
import { addProduct } from 'dispatchers/productDispatcher';
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
  ProductImageUploadInput,
  SubmitButton,
  ButtonContainer
} from './Styles/Styled';

class ProductForm extends Component {

  renderInputField = field => {
    const { touched, error } = field.meta;
    const className = `${field.className} ${touched && error ? 'pt-intent-danger' : ''}`;
    return(
      <div>
        <ProductInput
          {...field.input}
          name={field.name}
          type={field.type || 'text'}
          className={className}
          placeholder={field.placeholder}
          dir={field.dir}
        />
        {
          touched && error
            ? <ErrorNotification text={error} />
            : ''
        }
      </div>
    );
  }

  renderTextareaField = field => {
    const { touched, error } = field.meta;
    const className = `${field.className} ${touched && error ? 'pt-intent-danger' : ''}`;
    return(
      <div>
        <ProductTextarea
          {...field.input}
          name={field.name}
          className={className}
          placeholder={field.placeholder}
          dir={field.dir}
        />
        {
          touched && error
          ? <ErrorNotification text={error} />
          : ''
        }
      </div>
    );
  }

  onSubmit = ({ productName, productPrice, productDescription }) => {
    const { addProduct, dispatch } = this.props;
    const trimProductPrice = productPrice.replace(/[^\w\s]/gi, ''); // Remove all special characters
    const data = {
      productName,
      productDescription,
      productPrice: trimProductPrice
    };

    addProduct(data);
    dispatch(resetForm('addProductForm'));
  }

  componentWillUnmount() {
    OurToaster.clear();
  }

  render() {
    const { handleSubmit, pristine, submitting, invalid } = this.props;
    return(
      <Grid>
        <Section product>
          <SectionHeading icon='add-to-artifact' text='Add product' />
          <SectionInner>
            <form onSubmit={handleSubmit(this.onSubmit)}>
              <Row>
                <Col xs={6} md={2}>
                  <Label text='Name' />
                </Col>
                <Col xs={6} md={10} className='pt-form-content'>
                  <Field
                    name='productName'
                    component={this.renderInputField}
                    className='pt-input'
                    placeholder='Product name'
                    type='text'
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
                    className='pt-input'
                    placeholder='Product price'
                    type='text'
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
                    placeholder='Product description'
                    dir='auto'
                  />
                </Col>
              </Row>
              <br />

              <Row>
                <Col xs={6} md={2}>
                  <Label text='Upload image' />
                </Col>
                <Col xs={6} md={10} className='pt-form-content'>
                  <ProductImageUploadInput>
                    <input type='file' />
                    <span className='pt-file-upload-input'>Choose file...</span>
                  </ProductImageUploadInput>
                </Col>
              </Row>
              <br />

              <Row end='xs'>
                <Col mdOffset={2} md={10} xsOffset={6} xs={6}>
                  <SubmitButton disabled={invalid || pristine || submitting}>
                    <Icon iconName='plus' />
                    Add
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
  return {};
};

const mapDispatchToProps = {
  addProduct
};

const createConnection = connect(mapStateToProps, mapDispatchToProps)(ProductForm);

const createReduxForm = reduxForm({
  form: 'addProductForm',
  validate
});

const ProductFormContainer = createReduxForm(createConnection);

export default ProductFormContainer;
