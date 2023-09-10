import { createSignal } from 'solid-js';
import banner from './assets/banner.png';
import Card from './components/Card';

function App() {
  const [darkTheme, setDarkTheme] = createSignal(false);
  function toggleTheme() {
    setDarkTheme(!darkTheme());
  }
  return (
    <div
      class="container m-auto"
      classList={{"bg-neutral-900": darkTheme(), "text-white": darkTheme()}}
    >
      <header
        class="my-4 p-2 text-xl flex items-center gap-4"
      >
        <span
          class="material-symbols-outlined cursor-pointer"
          onclick={toggleTheme}
        >
          light_mode
        </span>
        <h1>Store's Fantastic Unique Name</h1>
      </header>
      <img class="rounded-md" src={banner} alt="store's unique fantastic banner" />
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
        </Card>
      </div>
    </div>
  )
}

export default App
