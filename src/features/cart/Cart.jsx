import { Link } from "react-router-dom";
import Button from "../../UI/Button";
import CartItem from "./CartItem";

const fakeCart = [
  {
    pizzaId: 12,
    name: "Mediterranean",
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: "Vegetale",
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: "Spinach and Mushroom",
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

function Cart() {
  const cart = fakeCart;
  console.log(cart);
  return (
    <div className="p-6">
      <Link
        to="/menu"
        className="text-blue-500 hover:text-blue-700 hover:underline"
      >
        &larr; Back to menu
      </Link>
      <h2 className="my-8  font-semibold text-xl">Your cart, Enes</h2>
      <ul className="divide-y divide-stone-900">
        {cart.map((pizza) => (
          <CartItem item={pizza} key={pizza.pizzaId} />
        ))}
      </ul>

      <div className="space-x-2 ">
        <Button>
          <Link to="/order/new">Order pizzas</Link>
        </Button>
        <Button type="bg-transparent border border-stone-400 hover:bg-stone-300">
          Clear cart
        </Button>
      </div>
    </div>
  );
}

export default Cart;
