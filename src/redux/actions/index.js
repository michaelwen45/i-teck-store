export const handleSideBarToggleAction = () => {
  return {
    type: "HANDLE_SIDE_BAR_TOGGLE_ACTION",
  };
};

export const handleCartToggleAction = () => {
  return {
    type: "HANDLE_CART_TOGGLE_ACTION",
  };
};

export const sideBarToggleAction = () => {
  return {
    type: "SIDE_BAR_TOGGLE_ACTION",
  };
};

export const setProducts = () => {
  return {
    type: "SET_PRODUCTS",
  };
};

export const handleChangeAction = (textValue) => {
  return {
    type: "HANDLE_CHANGE_ACTION",
    payload: textValue,
  };
};

export const productChange = () => {
  return {
    type: "PRODUCT_CHANGE",
  };
};
