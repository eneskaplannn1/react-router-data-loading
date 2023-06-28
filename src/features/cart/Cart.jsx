import { Link } from "react-router-dom";
import Button from "../../UI/Button";
import CartItem from "./CartItem";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "./CartSlice";

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
  // const cart = fakeCart;
  const cart = useSelector((state) => state.menu.cart);
  const dispatch = useDispatch();

  function handleClearCart() {
    dispatch(clearCart());
  }

  return (
    <div className="p-6">
      <Link
        to="/menu"
        className="text-blue-500 hover:text-blue-700 hover:underline"
      >
        &larr; Back to menu
      </Link>
      <h2 className="my-8 text-xl font-semibold">
        {cart.length > 0
          ? "Your cart, Enes"
          : "Your cart is still empty. Start adding some pizzas :)"}
      </h2>
      <ul className="divide-y divide-stone-900">
        {cart.map((pizza) => (
          <CartItem item={pizza} key={pizza.pizzaId} />
        ))}
      </ul>

      {cart.length !== 0 ? (
        <div className="space-x-2 ">
          <Button>
            <Link to="/order/new">Order pizzas</Link>
          </Button>
          <Button
            type="bg-transparent border border-stone-400 hover:bg-stone-300"
            onClick={handleClearCart}
          >
            Clear cart
          </Button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Cart;
