import React, { Component } from "react";
import { handleChangeAction, productChange } from "../redux/actions";
import { connect } from "react-redux";

export class FilterProducts extends Component {
  handleChange = (event) => {
    this.props.handleChangeAction(event.target);
    this.props.productChange();
  };
  renderOption = () => {
    return this.props.companyName.map((name) => {
      return (
        <option key={name} value={name}>
          {name}
        </option>
      );
    });
  };
  render() {
    const {
      currentPrice,
      minItemPrice,
      maxItemPrice,
      freeShipping,
      filteredProducts,
    } = this.props;
    return (
      <React.Fragment>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <input
            type="text"
            onChange={this.handleChange}
            value={this.props.text}
            name="text"
          />
          <select name="select" onChange={this.handleChange}>
            {this.renderOption()}
          </select>
          <div>
            <input
              type="range"
              name="currentPrice"
              id="currentPrice"
              max={maxItemPrice}
              min={minItemPrice}
              value={currentPrice}
              onChange={this.handleChange}
            />
            {"  "}
            {currentPrice}
          </div>

          <div>
            <input
              type="checkbox"
              name="freeShipping"
              id="freeShipping"
              onChange={this.handleChange}
              checked={freeShipping}
            />
            {"  "}
            Free Shipping
          </div>
        </div>
        <h2>Total Products: {filteredProducts.length}</h2>
      </React.Fragment>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    text: state.products.text,
    companyName: state.products.companyName,
    currentPrice: state.products.currentPrice,
    minItemPrice: state.products.minItemPrice,
    maxItemPrice: state.products.maxItemPrice,
    freeShipping: state.products.freeShipping,
    filteredProducts: state.products.filteredProducts,
  };
};
export default connect(mapStateToProps, { handleChangeAction, productChange })(
  FilterProducts
);
