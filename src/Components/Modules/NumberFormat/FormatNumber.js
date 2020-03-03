const numberFormat = (value) =>
  new Intl.NumberFormat('en-us', {
    style: 'currency',
    currency: 'INR'
  }).format(value);

export default numberFormat;