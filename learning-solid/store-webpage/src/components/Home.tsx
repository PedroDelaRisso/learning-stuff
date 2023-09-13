import { For, Show, createResource } from "solid-js";
import Card from "./Card";
import { A } from "@solidjs/router";

const fetchProducts = async () => {
  const res = await fetch('http://localhost:4000/products');

  return res.json();
}

export default function Home() {
  const [products] = createResource(fetchProducts);

  return (
    <Show when={products()} fallback={<p>Loading...</p>}>
      <div class="grid grid-cols-4 gap-10 my-4">
        <For each={products()}>
          {(product) => (
            <Card rounded flat>
              <img src={product.img} alt="" />
              <h2 class="my-3 font-bold">{product.title}</h2>
              <A href={`product/${product.id}`} class="btn"> View product</A>
            </Card>
          )}
        </For>
      </div>
    </Show>
  )
}
