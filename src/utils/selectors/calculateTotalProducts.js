export const calculateTotalProducts = (cart) => {
  let numberProducts = 0;
  cart.forEach(({ quantity }) => {
    numberProducts += Number(quantity);
  });
  return numberProducts;
};
