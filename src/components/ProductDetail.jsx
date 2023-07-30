import React, { useContext } from "react";
import "../css/product-deatil.css";
import { ShoopingCartContext } from "../context/Context";

function ProductDetail() {
  const context = useContext(ShoopingCartContext);
  console.log(context.productToShow);
  return (
    <aside className="  product-deatil flex flex-col fixed right-0 border border-black rounded-lg bg-white">
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">Detail</h2>
        <button onClick={context.CloseAside}>
          <svg
            xmlns="https://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
      <img
        className="w-full rounded-lg p-3 mb-10"
        src={context.productToShow.picture.url}
        alt=""
      />
      <h3 className="font-medium ml-4">Last Update: {context.productToShow.last_update}</h3>
      <h3 className="font-medium ml-4 mb-10">Type: {context.productToShow.type}</h3>
    </aside>
  );
}

export default ProductDetail;
