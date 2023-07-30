import React from "react";
import {Link} from 'react-router-dom'
import { useContext } from "react";
import { ShoopingCartContext } from "../context/Context";
import OrderCard from "../components/OrderCard";

function CheckoutMenu() {
  const context = useContext(ShoopingCartContext);
  const handleCheckout = () => {
    const orderToAdd = {
      date: "01.02.2023",
      products: context.cartProducts,
      totalProducts: context.cartProducts.lenght,
    };

    context.setOrder([...context.order, orderToAdd]);
    context.setCartProducts([]);
    context.setCount(0);
    context.CloseMenu();
  };
  return (
    <aside
      className={`${
        context.isOpenMenu ? "flex" : "hidden"
      } checkout-side-menu flex-col fixed top-20 right-0 border border-black rounded-lg bg-white`}
    >
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">My Order</h2>
        <button onClick={context.CloseMenu}>
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
      <div className="px-6">
        {context.cartProducts.map((product) => (
          <OrderCard key={product.title} data={product}></OrderCard>
        ))}
      </div>
      <div className="px-6 mb-6">
        <Link to="/orders/last">
          <button
            className="bg-black py-3 text-white w-full rounded-lg"
            onClick={() => handleCheckout()}
          >
            Obtener
          </button>
        </Link>
      </div>
    </aside>
  );
}

export default CheckoutMenu;
