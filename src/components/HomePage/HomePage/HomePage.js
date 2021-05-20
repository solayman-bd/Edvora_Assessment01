import React from "react";
import Products from "../Products/Products";
import UserDetails from "../UserDetails/UserDetails";

const HomePage = () => {
  return (
    <>
      <UserDetails />
      <h1>Products</h1>
      <Products />
    </>
  );
};

export default HomePage;
