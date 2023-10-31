export const calculateTotal = (cart) => {
  let total = 0;
  cart.forEach(({ product, quantity }) => {
    total += product.price * Number(quantity);
  });
  return total;
};
