import { createResource } from "solid-js";
import Card from "./Card";

const fetchProducts = async () => {
  const res = await fetch('http://localhost:4000/products');

  return res.json();
}

export default function Home() {
  const [products] = createResource(fetchProducts);

  console.log(products());

  return (
    <div class="grid grid-cols-4 gap-10 my-4">
      <Card rounded flat={false}>
        <h2>
          Unique product name number one
        </h2>
        <br />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem libero est pariatur earum, rerum sunt!
        </p>
        <button class="btn">Click me!</button>
      </Card>
      <Card rounded flat={false}>
        <h2>
          Unique product name number two
        </h2>
        <br />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, distinctio?
        </p>
        <button class="btn">Click me!</button>
      </Card>
      <Card rounded flat={false}>
        <h2>
          Unique product name number three
        </h2>
        <br />
        <p>
          Lorem ipsum dolor sit amet.
        </p>
        <button class="btn">Click me!</button>
        <p>{console.log(products(), products.loading)}</p>
      </Card>
    </div>
  )
}