// Test ID: IIDSAT

import { useLoaderData } from "react-router";
import { getOrder } from "../../services/apiRestaurant";
import {
  calcMinutesLeft,
  formatCurrency,
  formatDate,
} from "../../utils/helpers";
import OrderItem from "./OrderItem";
import { useDispatch } from "react-redux";
import { clearCart } from "../cart/CartSlice";
import Button from "../../UI/Button";
import { useState } from "react";

function Order() {
  const data = useLoaderData();
  const { id, status, orderPrice, estimatedDelivery, cart } = data;

  const [priority, setPriority] = useState(data.priority);
  const priorityPrice = (orderPrice * 2) / 10;

  const deliveryIn = calcMinutesLeft(estimatedDelivery);

  const dispatch = useDispatch();
  dispatch(clearCart());

  return (
    <div className="my-4">
      <div className="flex items-center justify-between p-4 ">
        <h2 className="text-2xl font-semibold">Order #{id} status</h2>
        <div className="space-x-4 font-medium text-white">
          {priority && (
            <span className="p-2 bg-red-500 rounded-full">Priority</span>
          )}
          <span className="p-2 bg-green-500 rounded-full">{status} order</span>
        </div>
      </div>

      <div className="flex items-center justify-between p-4 mt-4 bg-stone-200">
        <p className="text-xl font-medium">
          {deliveryIn >= 0
            ? `Only ${calcMinutesLeft(estimatedDelivery)} minutes left 😃`
            : "Order should have arrived"}
        </p>
        <p className="text-sm font-light">
          (Estimated delivery: {formatDate(estimatedDelivery)})
        </p>
      </div>

      <ul className="my-4 divide-y divide-stone-400 ">
        {cart.map((pizza) => (
          <OrderItem item={pizza} key={pizza.pizzaId} />
        ))}
      </ul>

      <div className="p-8 tracking-widest bg-stone-300">
        <p>Price pizza: {formatCurrency(orderPrice)}</p>
        {priority && <p>Price priority: {formatCurrency(priorityPrice)}</p>}
        <p className="mt-2 text-lg font-semibold">
          To pay on delivery: {formatCurrency(orderPrice + priorityPrice)}
        </p>
      </div>

      {!priority && (
        <div className="flex justify-end my-4">
          <Button onClick={() => setPriority(true)}>Make Priority</Button>
        </div>
      )}
    </div>
  );
}

export async function loader({ params }) {
  const data = await getOrder(params.id);
  return data;
}

export default Order;
