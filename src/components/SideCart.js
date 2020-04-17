import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";

export class SideCart extends Component {
  renderSideCartItems = () => {
    const { cart } = this.props;
    return cart.map((item) => {
      return (
        <div key={item.id}>
          <img src={item.image} alt="item" />
          <h3>{item.title}</h3>
          <h2>
            <span style={{ fontWeight: "bolder" }}>Quantity : </span>
            {item.quantity}
          </h2>
        </div>
      );
    });
  };
  render() {
    const { cartToggle, cartSubTotal } = this.props;

    return (
      <CartWrapper cartToggle={cartToggle}>
        {this.renderSideCartItems()}
        <h2>Cart Subtotal : ${cartSubTotal}</h2>
      </CartWrapper>
    );
  }
}

const CartWrapper = styled.div`
  position: fixed;
  top: 61px;
  right: 0;
  width: 100%;
  height: 100%;
  background: var(--mainGrey);
  z-index: 1;
  transition: var(--mainTransition);
  transform: ${(props) =>
    props.cartToggle ? "translatex(0);" : "translatex(100%);"};
  border-left: 4px solid var(--primaryColor);
  transition: var(--mainTransition);
  @media (min-width: 576px) {
    width: 20rem;
  }
`;
const mapStateToProps = (state) => {
  return {
    cartToggle: state.products.cartToggle,
    cart: state.products.cart,
    cartSubTotal: state.products.cartSubTotal,
  };
};
export default connect(mapStateToProps)(SideCart);
