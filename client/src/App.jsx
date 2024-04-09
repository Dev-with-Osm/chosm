import React, { useEffect, useState } from "react";

export default function App() {
  const [products, setProducts] = useState(null);
  // Fetch data
  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch("http://localhost:4000/get-products");
      const data = await res.json();
      setProducts(data);
    };
    fetchProducts();
  }, []);
  return (
    <>
      <h1>Product List</h1>
      <div className="grid grid-cols-3 gap-2">
        {products.map((value, index) => (
          <div className="bg-red-200" key={index}>
            <p>{value.name}</p>
            <p>{value.description}</p>
            <p>{value.regularPrice}</p>
            <p>{value.quantity}</p>
          </div>
        ))}
      </div>
    </>
  );
}
