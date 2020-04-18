import React from "react";
import Hero from "../components/Hero";
import storeBcg from "../images/storeBcg.jpeg";
import Title from "../components/Title";
const CartPage = () => {
  return (
    <React.Fragment>
      <Hero img={storeBcg} />
      <section className="py-5">
        <div className="container">
          <Title title="your cart items" center />
        </div>
        <div className="container-fluid text-center d-none d-lg-block my-5">
          <div className="row">
            <div className="col-lg-2">
              <p className="text-uppercase">Products</p>
            </div>
            <div className="col-lg-2">
              <p className="text-uppercase">Name of product</p>
            </div>
            <div className="col-lg-2">
              <p className="text-uppercase">price</p>
            </div>
            <div className="col-lg-2">
              <p className="text-uppercase">quantity</p>
            </div>
            <div className="col-lg-2">
              <p className="text-uppercase">remove</p>
            </div>
            <div className="col-lg-2">
              <p className="text-uppercase">total</p>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default CartPage;
