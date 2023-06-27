import { Link } from "react-router-dom";
import Button from "../../UI/Button";

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
    <div>
      <Link
        to="/menu"
        className="text-blue-500 hover:text-blue-700 hover:underline"
      >
        &larr; Back to menu
      </Link>
      <h2>Your cart, %NAME%</h2>

      <div>
        <Button>
          <Link to="/order/new">Order pizzas</Link>
        </Button>
        <Button className="bg-stone-950 ">Clear cart</Button>
      </div>
    </div>
  );
}

export default Cart;
