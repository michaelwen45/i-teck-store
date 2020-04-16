import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";

export class SideCart extends Component {
  render() {
    const { cartToggle } = this.props;

    return <CartWrapper cartToggle={cartToggle}>Cart items</CartWrapper>;
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
  };
};
export default connect(mapStateToProps)(SideCart);
