import { useContext } from "react";
import Layout from "../../components/Layout";
import { ShoopingCartContext } from "../../context/Context";
import { Link } from "react-router-dom";
import OrderCard from "../../components/OrderCard";
function Orders() {
  const context = useContext(ShoopingCartContext);
  const currentPath = window.location.pathname;
  let index = currentPath.substring(currentPath.lastIndexOf('/')+1)

  if (index==='last') index = context.order?.length-1


  return (
    <Layout>
      <div className="flex items-center relative w-90 mb-4">
        <Link to={"/order"}>
          <button className="bg-black py-3 text-white w-full rounded-lg">
            See Order
          </button>
        </Link>
      </div>
      <div className="flex flex-col w-80">
        {context.order?.[index]?.products.map((product) => (
          <OrderCard key={product.title} data={product}></OrderCard>
        ))}
      </div>
    </Layout>
  );
}

export default Orders;
