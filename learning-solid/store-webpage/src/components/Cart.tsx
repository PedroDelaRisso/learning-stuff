import { For } from "solid-js";
import Card from "./Card";
import { useCartContext } from "../contexts/CartContext";

export default function Cart() {
  const { items }: any = useCartContext();

  const total = () =>  {
    return items.reduce((acc: any, p: any) => {
      return acc + p.quantity * p.price * 7
    }, 0);
  }

  return (
    <div class="max-w-md my-8 mx-auto">
      <Card rounded>
        <h2>Your fantastic and unique shopping cart</h2>
        <For each={items}>
          {(item) => (
            <p class="my-3">{item.title} - R${item.price * 7} x {item.quantity}</p>
          )}
        </For>
        <p class="mt-8 pt-4 border-t-2 font-bold">Total price: R${total()}</p>
      </Card>
    </div>
  )
}