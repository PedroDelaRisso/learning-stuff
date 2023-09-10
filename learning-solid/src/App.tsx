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
        <Card rounded flat={false}>
          <h2>
            Card title goes here
          </h2>
          <br />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem libero est pariatur earum, rerum sunt!</p>
        </Card>
        <Card rounded flat={false}>
          <h1>
            jwjw
          </h1>
          <h2>
            jaj
          </h2>
        </Card>
        <Card rounded flat={false}>
          <h1>
            wowo
          </h1>
          <h2>
            jej
          </h2>
        </Card>
      </div>
    </div>
  )
}

export default App
