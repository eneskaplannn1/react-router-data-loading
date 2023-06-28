import { formatCurrency } from "../../utils/helpers";
import Button from "../../UI/Button";

function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  return (
    <li className="flex gap-2 m-4">
      <img
        src={imageUrl}
        alt={name}
        className={`h-32 ${soldOut ? "grayscale" : ""}`}
      />
      <div className="flex flex-col grow">
        <p className="font-medium">{name}</p>
        <p className="italic  capitalize">{ingredients.join(", ")}</p>
        <div className="mt-auto text-xm uppercase flex items-center grow justify-between">
          {!soldOut ? <p>{formatCurrency(unitPrice)}</p> : <p>Sold out</p>}
          {!soldOut && <Button>Add to Cart</Button>}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
