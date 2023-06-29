import { useState } from "react";
import { Form, redirect, useNavigation } from "react-router-dom";
import { createOrder } from "../../services/apiRestaurant";
import Button from "../../UI/Button";
import { useSelector } from "react-redux";

function CreateOrder() {
  const navigator = useNavigation();
  console.log(navigator.state);
  const isSubmitting = navigator.state === "submitting";

  const cart = useSelector((state) => state.menu.cart);
  const [withPriority, setWithPriority] = useState(false);

  return (
    <div>
      <h2 className="my-8 text-xl font-semibold">
        Ready to order? Let&apos;s go!
      </h2>

      <Form method="POST" className="font-medium">
        <div className="flex flex-col gap-2 mb-5 sm:flex-row sm:items-center ">
          <label className="basis-60">First Name</label>
          <input
            type="text"
            name="customer"
            required
            className="px-4 py-2 border rounded-full grow border-stone-300 focus:ring-offset-yellow-400 "
          />
        </div>

        <div className="flex flex-col gap-2 mb-5 sm:flex-row sm:items-center">
          <label className="basis-60">Phone number</label>
          <div className="grow">
            <input
              type="tel"
              name="phone"
              required
              className="w-full px-4 py-2 border rounded-full grow border-stone-300 focus:ring-offset-yellow-400 "
            />
          </div>
        </div>

        <div className="flex flex-col gap-2 mb-5 sm:flex-row sm:items-center">
          <label className="basis-60">Address</label>
          <div className="grow ">
            <input
              type="text"
              name="address"
              required
              className="w-full px-4 py-2 border rounded-full border-stone-300 focus:ring-offset-yellow-400"
            />
          </div>
        </div>

        <div className="flex items-center space-x-5">
          <input
            className="w-6 h-6 accent-yellow-400 "
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

  return redirect(`/order/${newOrder.id}`);
}

export default CreateOrder;
