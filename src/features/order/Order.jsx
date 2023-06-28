// Test ID: IIDSAT

import { useLoaderData } from "react-router";
import { getOrder } from "../../services/apiRestaurant";
import {
  calcMinutesLeft,
  formatCurrency,
  formatDate,
} from "../../utils/helpers";
import OrderItem from "./OrderItem";

function Order() {
  const data = useLoaderData();
  const {
    id,
    status,
    priority,
    priorityPrice,
    orderPrice,
    estimatedDelivery,
    cart,
  } = data;
  console.log(cart);
  const deliveryIn = calcMinutesLeft(estimatedDelivery);

  return (
    <div className="my-4">
      <div className=" p-4 flex justify-between items-center ">
        <h2 className="text-2xl font-semibold">Order #{id} status</h2>
        <div className="space-x-4 text-white font-medium">
          {priority && (
            <span className="bg-red-500 p-2 rounded-full">Priority</span>
          )}
          <span className="bg-green-500 p-2 rounded-full">{status} order</span>
        </div>
      </div>

      <div className="bg-stone-200 mt-4 flex items-center justify-between p-4">
        <p className="font-medium text-xl">
          {deliveryIn >= 0
            ? `Only ${calcMinutesLeft(estimatedDelivery)} minutes left 😃`
            : "Order should have arrived"}
        </p>
        <p className="font-light text-sm">
          (Estimated delivery: {formatDate(estimatedDelivery)})
        </p>
      </div>

      <ul className="my-4 divide-y divide-stone-400 ">
        {cart.map((pizza) => (
          <OrderItem item={pizza} key={pizza.pizzaId} />
        ))}
      </ul>

      <div className="bg-stone-300 p-8 tracking-widest">
        <p>Price pizza: {formatCurrency(orderPrice)}</p>
        {priority && <p>Price priority: {formatCurrency(priorityPrice)}</p>}
        <p className="font-semibold text-lg mt-2">
          To pay on delivery: {formatCurrency(orderPrice + priorityPrice)}
        </p>
      </div>
    </div>
  );
}

export async function loader({ params }) {
  const data = await getOrder(params.id);
  return data;
}

export default Order;
