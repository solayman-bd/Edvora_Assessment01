import React from "react";

const ProductCard = ({ productDetail }) => {
  const { brand, category, name, location, date, price } = productDetail;

  return (
    <div>
      <h4>{brand}</h4>
      <h3>${price}</h3>
      <h5>City: {location.city}</h5>
      <h5>State: {location.state}</h5>
      <h5>Date: {date}</h5>
    </div>
  );
};

export default ProductCard;
