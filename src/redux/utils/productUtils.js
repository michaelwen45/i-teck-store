export const checkCartItems = (itemsInCart, itemToCart) => {
  const checkItemInCart = itemsInCart.find((item) => item.id === itemToCart.id);
  if (checkItemInCart) {
    return itemsInCart.map((item) => {
      return item.id === itemToCart.id
        ? { ...itemToCart, quantity: item.quantity + 1 }
        : item;
    });
  }
  return [...itemsInCart, { ...itemToCart, quantity: 1 }];
};
