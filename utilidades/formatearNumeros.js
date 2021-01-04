const formatearDecimalYMiles = numero => {
  return numero
    .toString()
    .replace(".", ",")
    .replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};

export default formatearDecimalYMiles;
