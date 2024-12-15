import React, { useState, useEffect } from "react"
import ProductCard from "../Components/ProductCard"
import axios from "axios"

const ViennoiseriePage = () => {
  const [products, setProducts] = React.useState([]);
  useEffect(() => {
    axios
      .get(import.meta.env.VITE_API_URL + "/viennoiserie")
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="flex justify-center mt-8">
      <div className="grid grid-cols-3 gap-3">
        {products.map((product) => (
          <ProductCard key={product.id} src={product.image} name={product.name} price={product.price} />
        ))}
      </div>
    </div>
  );
}

export default ViennoiseriePage