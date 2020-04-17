import { items } from "../productData";

const INITIAL_STATE = {
  sidebarToggle: false,
  cartToggle: false,
  itemCount: 0,
  cart: [],
  cartSubTotal: 0,
  cartTax: 0,
  cartTotal: 0,
  storeProducts: [],
  filteredProducts: [],
  featuredProducts: [],
  singleProduct: {},
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_PRODUCTS":
      const newData = items.map((item) => {
        const image = item.fields.image.fields.file.url;
        const id = item.sys.id;
        const data = item.fields;
        return { ...data, id, image };
      });
      const featuredProducts = newData.filter((item) => item.featured);
      return {
        ...state,
        storeProducts: newData,
        filteredProducts: newData,
        featuredProducts,
      };
    case "HANDLE_SIDE_BAR_TOGGLE_ACTION":
      return { ...state, sidebarToggle: !state.sidebarToggle };
    case "SIDE_BAR_TOGGLE_ACTION":
      return { ...state, sidebarToggle: false, cartToggle: false };
    case "HANDLE_CART_TOGGLE_ACTION":
      return { ...state, cartToggle: !state.cartToggle };
    default:
      return state;
  }
};
