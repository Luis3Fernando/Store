import React from "react";
import { useContext } from "react";
import { ShoopingCartContext } from "../context/Context";

function OrderCard(data) {
  const context = useContext(ShoopingCartContext);

  const handleDelete = (title) => {
    const filteredP = context.cartProducts.filter(
      (product) => product.title != title
    );
    context.setCartProducts(filteredP);
  };
  return (
    <div className="flex justify-between items-center mb-3">
      <div className="flex items-center gap-2">
        <figure className="w-20 h-20">
          <img
            className="w-full h-full rounded-lg object-cover"
            src={data.data.picture.url}
            alt="n"
          />
        </figure>
        <p className="text-sm font-light">{data.data.title}</p>
        <button onClick={() => handleDelete(data.data.title)}>
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
    </div>
  );
}

export default OrderCard;
