import { formatCurrency } from "../../utils/helpers";
import { addItem } from "../cart/CartSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import Button from "../../UI/Button";
import ChangeQuantity from "../cart/ChangeQuantity";

function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  const dispatch = useDispatch();

  const cart = useSelector((state) => state.menu.cart);
  const currQuantity = cart?.find((item) => item.pizzaId === id);
  const isInCart = currQuantity?.quantity > 0;

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
          {!soldOut && !isInCart && (
            <Button onClick={handleAddCart}>Add to Cart</Button>
          )}
          {!soldOut && isInCart && <ChangeQuantity id={id} />}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
