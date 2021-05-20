import React, { useState } from "react";
import ProductCard from "../ProductCard/ProductCard";

const Category = ({ categories }) => {
  console.log("category", categories);
  const [checked, setChecked] = useState({
    category: "default",
    state: "default",
    city: "default",
  });

  const filterHandler = (name, value) => {
    const newChecked = { ...checked, [name]: value };

    setChecked(newChecked);
  };
  // const filteredData = categories.map((data1) =>
  //   data1.filter((data2) => checked.category === data2.category)
  // );
  const filteredData = () => {
    if (
      checked.category !== "default" &&
      checked.state !== "default" &&
      checked.city !== "default"
    ) {
      const filteredCategory = categories.map((data1) =>
        data1.filter((data2) => checked.category === data2.category)
      );
      return filteredCategory.map(
        (data) =>
          data.length > 0 &&
          data.filter(
            (data2) =>
              checked.state === data2.location.state &&
              checked.city === data2.location.city
          )
      );
    } else return categories;
  };
  console.log("filtered data", filteredData());
  console.log(checked);

  return (
    <div>
      <div>
        <h2>Filter Products: </h2>
        <label for="category">Category:</label>
        <select
          id="category"
          name="category"
          onChange={(e) => filterHandler(e.target.name, e.target.value)}
        >
          <option value="default">Default</option>
          {categories.map(
            (data) =>
              data.length > 0 && (
                <option value={data[0].category}>{data[0].category}</option>
              )
          )}
        </select>
        <label for="state">State:</label>
        <select
          id="state"
          name="state"
          onChange={(e) => filterHandler(e.target.name, e.target.value)}
        >
          <option value="default">Default</option>
          {categories.map(
            (data) =>
              data.length > 0 && (
                <option value={data[0].location.state}>
                  {data[0].location.state}
                </option>
              )
          )}
        </select>
        <label for="city">City:</label>
        <select
          id="city"
          name="city"
          onChange={(e) => filterHandler(e.target.name, e.target.value)}
        >
          {" "}
          <option value="default">Default</option>
          {categories.map(
            (data) =>
              data.length > 0 && (
                <option value={data ? data[0].location.city : null}>
                  {data[0].location.city}
                </option>
              )
          )}
        </select>
      </div>
      {categories.map(
        (data) =>
          data.length > 0 && (
            <div style={{ border: "1px solid red", margin: "5px" }}>
              <h2>Category: {data[0].category}</h2>
              {data.map((data2) => (
                <ProductCard productDetail={data2} />
              ))}
            </div>
          )
      )}
    </div>
  );
};

export default Category;
