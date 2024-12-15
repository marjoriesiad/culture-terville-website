import React, { useEffect } from "react";
import axios from "axios";
import ProductCard from "../Components/ProductCard";

const TraiteurPage = () => {
  const [products, setProducts] = React.useState([]);
  useEffect(() => {
    axios
      .get(import.meta.env.VITE_API_URL + "/traiteur")
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
};

export default TraiteurPage;
