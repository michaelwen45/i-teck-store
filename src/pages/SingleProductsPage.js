import React from "react";
import { connect } from "react-redux";

const SingleProductsPage = ({ singleProduct }) => {
  if (singleProduct) {
    return (
      <div>
        <img
          src={require(`../../public/${singleProduct.image}`)}
          alt={singleProduct.title}
        />
        <p>Model: {singleProduct.title}</p>
        <p>Company: {singleProduct.company}</p>
        <p>Price: ${singleProduct.price}</p>
        <h3>Some Info About The Product</h3>
        <p>{singleProduct.description}</p>
      </div>
    );
  } else {
    return null;
  }
};
const mapStateToProps = (state, ownProps) => {
  const { productId } = ownProps.match.params;
  return {
    singleProduct: state.products.storeProducts[productId],
  };
};
export default connect(mapStateToProps)(SingleProductsPage);
