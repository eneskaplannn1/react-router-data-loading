import { formatCurrency } from "../../utils/helpers";

function OrderItem({ item, isLoadingIngredients, ingredients }) {
  const { quantity, name, totalPrice } = item;
  console.log(item);

  return (
    <li>
      <div className="font-semibold flex justify-between items-center py-4 ">
        <p>
          <span>{quantity}&times;</span>{" "}
          <span className="text-sm font-[450]">{name}</span>
        </p>
        <p>{formatCurrency(totalPrice)}</p>
      </div>
    </li>
  );
}

export default OrderItem;
