import { formatCurrency } from "../../utils/helpers";
import ChangeQuantity from "./ChangeQuantity";

function CartItem({ item }) {
  const { name, quantity, totalPrice, pizzaId } = item;

  return (
    <li className="flex items-center justify-between py-4 font-semibold ">
      <p>
        {quantity}&times; {name}
      </p>
      <div className="flex items-center space-x-4 ">
        <p>{formatCurrency(totalPrice)}</p>
        <ChangeQuantity id={pizzaId} />
      </div>
    </li>
  );
}

export default CartItem;
