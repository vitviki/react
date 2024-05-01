import { Link } from "react-router-dom";
import { RECENT_ORDER_DATA } from "../constants/index";
import { getOrderStatus } from "../constants/utils/index";

const RecentOrders = () => {
  return (
    <div className="bg-white px-4 pt-3 rounded-sm border border-gray-200 shadow-lg flex-1 h-[22rem] overflow-auto">
      <strong className="text-gray-700 font-montserrat">Recent Orders</strong>
      <div className="mt-3">
        <table className="w-full h-full border border-gray-100">
          <thead className="">
            <tr>
              <td>ID</td>
              <td>Product ID</td>
              <td>Customer Name</td>
              <td>Order Date</td>
              <td>Order Total</td>
              <td>Shipping Adress</td>
              <td>Order Status</td>
            </tr>
          </thead>
          <tbody className="">
            {RECENT_ORDER_DATA.map((order) => (
              <tr key={order.id}>
                <td>#{order.id}</td>
                <td>
                  <Link
                    className="text-sky-700"
                    to={`/products/${order.product_id}`}
                  >
                    {order.product_id}
                  </Link>
                </td>
                <td>
                  <Link
                    className="text-sky-700"
                    to={`/users/${order.customer_name}`}
                  >
                    {order.customer_name}
                  </Link>
                </td>
                <td>{new Date(order.order_date).toLocaleDateString()}</td>
                <td>{order.order_total}</td>
                <td>{order.shipment_address}</td>
                <td>{getOrderStatus(order.current_order_status)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentOrders;
