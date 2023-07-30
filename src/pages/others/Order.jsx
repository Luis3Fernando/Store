import { useContext } from "react";
import Layout from "../../components/Layout";
import OrdersCard from "../../components/OrdersCard";
import { ShoopingCartContext } from "../../context/Context";
import { Link } from "react-router-dom";
function Order() {
  const context = useContext(ShoopingCartContext);
  return (
    <Layout>
      <div>
      {context.order.map((order, index) => (
        <Link key={index} to={`/order/${index}`}>
          <OrdersCard data={order}></OrdersCard>
        </Link>
      ))}
      </div>
      
    </Layout>
  );
}

export default Order;
