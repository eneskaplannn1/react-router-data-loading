import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decreaseItemQuantity,
  deleteItem,
  increaseItemQuantity,
} from "./CartSlice";
import Button from "../../UI/Button";

function ChangeQuantity({ id }) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.menu.cart);

  const pizzaNumber = cart.find((item) => item.pizzaId === id).quantity;

  function handleIncreaseAmount() {
    dispatch(increaseItemQuantity(id));
  }
  function handleDecreaseAmount() {
    dispatch(decreaseItemQuantity(id));
  }
  return (
    <div className="flex items-center space-x-4">
      <span
        onClick={handleDecreaseAmount}
        className="flex items-center justify-center w-8 h-8 transition-colors duration-300 bg-yellow-400 rounded-full cursor-pointer hover:bg-yellow-300"
      >
        -
      </span>
      <span>{pizzaNumber}</span>
      <span
        onClick={handleIncreaseAmount}
        className="flex items-center justify-center w-8 h-8 transition-colors duration-300 bg-yellow-400 rounded-full cursor-pointer hover:bg-yellow-300"
      >
        +
      </span>
      <Button
        onClick={() => {
          dispatch(deleteItem(id));
        }}
      >
        Delete
      </Button>
    </div>
  );
}

export default ChangeQuantity;
