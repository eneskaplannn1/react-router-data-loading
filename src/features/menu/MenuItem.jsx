import { formatCurrency } from "../../utils/helpers";
import { addItem } from "../cart/CartSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import Button from "../../UI/Button";
import ChangeQuantity from "../cart/ChangeQuantity";

function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  const dispatch = useDispatch();

  const [item, setItem] = useState({});
  console.log(!item.quantity);
  const cart = useSelector((state) => state.menu.cart);

  function handleAddCart() {
    const newItem = {
      name,
      unitPrice,
      quantity: 1,
      pizzaId: id,
      totalPrice: unitPrice * 1,
    };
    dispatch(addItem(newItem));
  }

  useEffect(() => {
    const newItem = cart.find((item) => item.pizzaId === id);
    if (!newItem) return;
    setItem(newItem);
  }, [cart, id]);

  return (
    <li className="flex gap-2 m-4">
      <img
        src={imageUrl}
        alt={name}
        className={`h-32 ${soldOut ? "grayscale" : ""}`}
      />
      <div className="flex flex-col grow">
        <p className="font-medium">{name}</p>
        <p className="italic capitalize">{ingredients.join(", ")}</p>
        <div className="flex items-center justify-between mt-auto uppercase text-xm grow">
          {!soldOut ? <p>{formatCurrency(unitPrice)}</p> : <p>Sold out</p>}
          {!soldOut && !item.quantity && (
            <Button onClick={handleAddCart}>Add to Cart</Button>
          )}
          {!soldOut && item && item.quantity > 0 && <ChangeQuantity id={id} />}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
