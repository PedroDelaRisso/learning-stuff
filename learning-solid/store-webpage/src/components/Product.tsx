import { useParams } from "@solidjs/router"
import { Show, createResource } from "solid-js";

async function fetchProduct(id: number | string) {
  const res = await fetch(`http://localhost:4000/products/${id}`);
  return res.json();
}

export default function Product() {
  const params = useParams();
  const [product]: any = createResource(params.id, fetchProduct);
  console.log(product());
  return (
    <div class="my-7">
      <Show when={product()} fallback={<p>Loading...</p>}>
        <div class="grid grid-cols-5 gap-7">
          <div class="col-span-2">
            <img src={product().img} alt="product image" />
          </div>

          <div class="col-span-3">
            <h2 class="text-3xl font-bold mb-7">{product().title}</h2>
            <p>{product().description}</p>
            <p class="my-7 text-2xl">Only R${product().price * 7}</p>
          </div>
        </div>
      </Show>
    </div>
  )
}