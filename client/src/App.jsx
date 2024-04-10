import React, { useEffect, useState } from "react";

export default function App() {
  const [products, setProducts] = useState(null);
  console.log(products);
  // Fetch data
  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch("http://localhost:4100/api/product/get-products");
      const data = await res.json();
      setProducts(data);
    };
    fetchProducts();
  }, []);
  return (
    <>
      {/* <h1>Product List</h1>
      <div className="grid grid-cols-3 gap-2">
        {products?.map((value, index) => (
          <div className="bg-red-200" key={index}>
            <p>{value.name}</p>
            <p>{value.description}</p>
            <p>{value.regularPrice}</p>
            <p>{value.quantity}</p>
          </div>
        ))}
      </div> */}
      <div className=" p-4 flex justify-between gap-3">
        <div className="bg-[#f6f4e8] w-1/4 h-[90vh] rounded-[4px] shadow-md p-2 flex flex-col justify-between">
          <div className="bg-gray-300 rounded-[4px] text-center">
            <h1 className="font-semibold">Chosm</h1>
            <p className="text-xs font-medium">Admin Panel</p>
          </div>
          <div className="flex flex-col items-center gap-2 mx-3">
            <div className="bg-gray-300 w-full text-center py-2 rounded-[4px] ">
              <h1>Add Product</h1>
            </div>
            <div className="bg-gray-300 w-full text-center py-2 rounded-[4px]">
              <h1>Get All Product</h1>
            </div>
            <div className="bg-gray-300 w-full text-center py-2 rounded-[4px]">
              <h1>Edit Product</h1>
            </div>
            <div className="bg-gray-300 w-full text-center py-2 rounded-[4px]">
              <h1>Delete Product</h1>
            </div>
          </div>
          <div className="bg-gray-200 flex gap-1 items-center w-fit p-1 rounded-[4px] text-sm">
            Disconnect{" "}
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15"
                />
              </svg>
            </span>
          </div>
        </div>
        <div className="bg-[#f6f4e8] w-3/4 rounded-[4px] shadow-md">
          content
        </div>
      </div>
    </>
  );
}
