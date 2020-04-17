import React from "react";
import { connect } from "react-redux";

const Featured = ({ featuredProducts }) => {
  if (featuredProducts) {
    return featuredProducts.map((product) => {
      return (
        <div key={product.id}>
          <img src={product.image} alt="product" />
          <p>{product.title}</p>
          <p>${product.price}</p>
        </div>
      );
    });
  } else {
    return null;
  }
};
const mapStateToProps = (state) => {
  return {
    featuredProducts: state.products.featuredProducts,
  };
};
export default connect(mapStateToProps)(Featured);
