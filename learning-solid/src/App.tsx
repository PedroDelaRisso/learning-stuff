import { createSignal } from 'solid-js';
import { Routes, Route, A } from '@solidjs/router';
import banner from './assets/banner.png';
import Home from './components/Home';
import Cart from './components/Cart';

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
        <A href="/">Home</A>
        <A href="/cart">Cart</A>
      </header>
      <img class="rounded-md" src={banner} alt="store's unique fantastic banner" />
      <Routes>
        <Route path="/" component={Home} />
        <Route path="/cart" component={Cart} />
      </Routes>
    </div>
  )
}

export default App
