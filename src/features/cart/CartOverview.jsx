import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

function CartOverview() {
  const cart = useSelector((state) => state.menu.cart);

  const pizzaNumber = cart.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = cart.reduce((acc, item) => acc + item.totalPrice, 0);

  return cart.length === 0 ? (
    ""
  ) : (
    <div className="flex items-center justify-between p-4 font-semibold uppercase bg-stone-800 text-stone-200">
      <p className="space-x-3 text-stone-300">
        <span>{pizzaNumber} pizzas</span>
        <span>${totalPrice + ".00"} </span>
      </p>
      <NavLink to="cart">Open cart &rarr;</NavLink>
    </div>
  );
}

export default CartOverview;
