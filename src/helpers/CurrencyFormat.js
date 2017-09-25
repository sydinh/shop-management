const CurrencyFormat = value => {
  return value.toFixed(0).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,") + 'đ';
}

export default CurrencyFormat;
