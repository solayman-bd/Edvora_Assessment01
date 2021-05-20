import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchProducts } from "../../../redux";
import Category from "../Category/Category";

const Products = ({ products, fetchProducts }) => {
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      {products.loading ? (
        <h2>Loading</h2>
      ) : products.error ? (
        <h2>{products.error}</h2>
      ) : (
        products.products.data && (
          <div>{<Category categories={products.products.data} />}</div>
        )
      )}
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchProducts: () => dispatch(fetchProducts()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Products);
