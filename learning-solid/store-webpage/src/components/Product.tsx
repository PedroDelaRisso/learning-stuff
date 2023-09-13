import { useParams } from "@solidjs/router"
import { Show, createResource, createSignal } from "solid-js";
import { useCartContext } from "../contexts/CartContext";

async function fetchProduct(id: number | string) {
  const res = await fetch(`http://localhost:4000/products/${id}`);
  return res.json();
}

export default function Product() {
  
  const params = useParams();
  const [product]: any = createResource(params.id, fetchProduct);
  const { items, setItems }: any = useCartContext();

  const [adding, setAdding] = createSignal(false);
  
  function addProduct() {
    setAdding(true);
    setTimeout(() => setAdding(false), 2000);
    const exists = items.find((i: any) => i.id === product().id);
    if (exists) {
      setItems((p: any) => p.id === product().id, 'quantity', (q: any) => q + 1);
    } else {
      setItems([...items, { ...product(), quantity: 1 }]);
    }
  }

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

            <button class="btn" onClick={addProduct} disabled={adding()}>Add to Cart</button>
            <Show when={adding()}>
              <div class="m-2 p-2 border-amber-500 border-2 rounded-md inline-block">
                {product().title} was added to the cart
              </div>
            </Show>
          </div>
        </div>
      </Show>
    </div>
  )
}
