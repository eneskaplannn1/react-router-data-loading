import Button from "../../UI/Button";
import { formatCurrency } from "../../utils/helpers";

function CartItem({ item }) {
  const { name, quantity, totalPrice } = item;

  return (
    <li className="font-semibold flex justify-between items-center py-4 ">
      <p>
        {quantity}&times; {name}
      </p>
      <div className="flex items-center space-x-4 ">
        <p>{formatCurrency(totalPrice)}</p>
        <span className="bg-yellow-400 w-8 h-8 flex items-center justify-center rounded-full hover:bg-yellow-300 transition-colors duration-300">
          -
        </span>
        <span className="bg-yellow-400 w-8 h-8 flex items-center justify-center rounded-full hover:bg-yellow-300 transition-colors duration-300">
          +
        </span>
        <Button>Delete</Button>
      </div>
    </li>
  );
}

export default CartItem;
