import { createSignal } from 'solid-js';
import { Routes, Route, A } from '@solidjs/router';
import banner from './assets/banner.png';
import Home from './components/Home';
import Cart from './components/Cart';
import Product from './components/Product';
import { useCartContext } from './contexts/CartContext';

function App() {
  const [darkTheme, setDarkTheme] = createSignal(false);
  function toggleTheme() {
    setDarkTheme(!darkTheme());
  }

  const { items }: any = useCartContext();

  const quantity = () => {
    return items.reduce((acc: any, current: any) => {
      return acc + current.quantity;
    }, 0)
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
        <A href="/cart">Cart {quantity()}</A>
      </header>
      <img class="rounded-md" src={banner} alt="store's unique fantastic banner" />
      <Routes>
        <Route path="/" component={Home} />
        <Route path="/cart" component={Cart} />
        <Route path="/product/:id" component={Product} />
      </Routes>
    </div>
  )
}

export default App
