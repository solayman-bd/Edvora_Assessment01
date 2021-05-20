import React from "react";
import { useEffect, useState } from "react";
const DataSet = () => {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch("https://assessment.api.vweb.app/login", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        company_id: "hello",
        access_key: "world",
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  // useEffect(() => {
  //   fetch("https://assessment.api.vweb.app/store?shop_name=Megastore")
  //     .then((res) => res.json())
  //     .then((result) => console.log(result));
  // }, []);
  return <div></div>;
};

export default DataSet;
