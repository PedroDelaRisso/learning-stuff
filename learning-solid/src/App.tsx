import banner from './assets/banner.png';
import Card from './components/Card';

function App() {
  console.log('hello');
  return (
    <div class="container m-auto">
      <header>
        <h1>Store's fantastic unique name</h1>
      </header>
      <img class="rounded-md" src={banner} alt="store's unique fantastic banner" />
      <div class="grid grid-cols-4 gap-10 my-4">
        <Card title="INSANE unique product name"/>
        <Card title="YET ANOTHER unique product name"/>
        <Card title="YOU GUESSED IT! another unique product name"/>
      </div>
    </div>
  )
}

export default App
