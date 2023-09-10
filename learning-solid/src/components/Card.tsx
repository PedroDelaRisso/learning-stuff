export default function Card(props: { title: string }) {
  return (
    <div class="bg-white p-4 text-center rounded-md shadow-ms">
      <h2>
        {props.title || "Card title goes here"}
      </h2>
      <br />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem libero est pariatur earum, rerum sunt!</p>
      <button class="btn">Click me!</button>
    </div>
  )
}