const normalizePrice = (value, previousValue) => {
  if (!value) {
    return value;
  }

  const onlyNumbers = value.replace(/[^\d]/g, '');
  if (!previousValue || (value.length > previousValue.length)) {
    if (onlyNumbers.length === 3) {
      return onlyNumbers + ',';
    }
    if (onlyNumbers.length === 6 ) {
      return onlyNumbers.slice(0, 3) + ',' + onlyNumbers.slice(3) + ',';
    }
  }
  if (onlyNumbers.length <= 3) {
    return onlyNumbers;
  }
  if (onlyNumbers.length <= 6) {
    return onlyNumbers.slice(0, 3) + ',' + onlyNumbers.slice(3);
  }

  const result = onlyNumbers.slice(0, 3) + ',' + onlyNumbers.slice(3, 6) + ',' + onlyNumbers.slice(6, 9);
  return result;
};

export default normalizePrice;
