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
  companyName: [],
  text: "",
  select: "all",
  currentPrice: 0,
  maxItemPrice: 0,
  minItemPrice: 0,
  freeShipping: false,
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
      const res = newData.map((product) => product.company);

      const test = new Set(res);
      const companyName = ["all", ...test];
      const priceArr = newData.map((item) => item.price);
      const maxItemPrice = Math.max(...priceArr);
      const minItemPrice = Math.min(...priceArr);

      return {
        ...state,
        storeProducts: newData,
        filteredProducts: newData,
        featuredProducts,
        companyName,
        maxItemPrice,
        minItemPrice,
        currentPrice: minItemPrice,
      };
    case "HANDLE_SIDE_BAR_TOGGLE_ACTION":
      return { ...state, sidebarToggle: !state.sidebarToggle };
    case "SIDE_BAR_TOGGLE_ACTION":
      return { ...state, sidebarToggle: false, cartToggle: false };
    case "HANDLE_CART_TOGGLE_ACTION":
      return { ...state, cartToggle: !state.cartToggle };
    case "HANDLE_CHANGE_ACTION":
      const { name, value, checked, type } = action.payload;
      const checkValue = type === "checkbox" ? checked : value;
      return {
        ...state,
        [name]: checkValue,
      };
    case "PRODUCT_CHANGE":
      let searchedProducts = [...state.storeProducts];

      if (state.text !== "") {
        searchedProducts = searchedProducts.filter((product) =>
          product.title.toLowerCase().includes(state.text.toLowerCase())
        );
      }

      if (state.select !== "all") {
        searchedProducts = searchedProducts.filter((product) =>
          product.title.toLowerCase().includes(state.select.toLowerCase())
        );
      }
      if (state.currentPrice) {
        searchedProducts = searchedProducts.filter(
          (product) => product.price >= state.currentPrice
        );
      }
      if (state.freeShipping) {
        searchedProducts = searchedProducts.filter(
          (product) => product.freeShipping === state.freeShipping
        );
      }
      return { ...state, filteredProducts: searchedProducts };
    default:
      return state;
  }
};
