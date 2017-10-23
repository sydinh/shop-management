const validate = values => {
  const errors = {};
  const { productName, productPrice, productDescription } = values;

  if (!productName) {
    errors.productName = 'Required';
  } else if (productName.length > 15) {
    errors.productName = 'Must be 15 characters or less';
  } else if (productName.length < 5) {
    errors.productName = 'Must be 5 characters or more';
  } else if (!/^[a-zA-Z].*/.test(productName)) {
    errors.productName = 'Must be a string';
  };

  if (!productPrice) {
    errors.productPrice = 'Required';
  } else if (!/^[0-9]*$/.test(productPrice)) {
    errors.productPrice = 'Must be number';
  };

  if (!productDescription) {
    errors.productDescription = 'Required';
  } else if (productDescription.length < 8) {
    errors.productDescription = 'Must be 8 characters or more';
  };

  return errors;
};

export default validate;
