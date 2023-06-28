import { useState } from "react";
import { Form, redirect, useNavigation } from "react-router-dom";
import { createOrder } from "../../services/apiRestaurant";
import Button from "../../UI/Button";

// https://uibakery.io/regex-library/phone-number
// const isValidPhone = (str) =>
//   /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
//     str
//   );

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

function CreateOrder() {
  const navigator = useNavigation();
  const isSubmitting = navigator.state === "submitting";
  const [withPriority, setWithPriority] = useState(false);
  const cart = fakeCart;

  return (
    <div>
      <h2 className="my-8 text-xl font-semibold">
        Ready to order? Let&apos;s go!
      </h2>

      <Form method="POST" className="font-medium">
        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center  ">
          <label className="basis-60">First Name</label>
          <input
            type="text"
            name="customer"
            required
            className="grow rounded-full border border-stone-300 px-4 py-2 focus:ring-offset-yellow-400  "
          />
        </div>

        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="basis-60">Phone number</label>
          <div className="grow">
            <input
              type="tel"
              name="phone"
              required
              className="grow rounded-full border border-stone-300 px-4 py-2 focus:ring-offset-yellow-400 w-full "
            />
          </div>
        </div>

        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="basis-60">Address</label>
          <div className="grow ">
            <input
              type="text"
              name="address"
              required
              className="rounded-full  border border-stone-300 px-4 py-2 focus:ring-offset-yellow-400 w-full"
            />  
          </div>
        </div>

        <div className="flex items-center space-x-5">
          <input
            className="h-6 w-6 accent-yellow-400 "
            type="checkbox"
            name="priority"
            id="priority"
            value={withPriority}
            onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label htmlFor="priority" className="text-lg tracking-widest">
            Want to yo give your order priority?
          </label>
        </div>

        <div className="mt-4">
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />
          <Button disabled={isSubmitting} type="w-60 hover:bg-yellow-300">
            {isSubmitting ? "Submitting..." : "Order now"}
          </Button>
        </div>
      </Form>
    </div>
  );
}

export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  const order = {
    ...data,
    cart: JSON.parse(data.cart),
    priority: data.priority === "true",
  };
  const newOrder = await createOrder(order);
  console.log(newOrder);

  return redirect(`/order/${newOrder.id}`);
}

export default CreateOrder;
