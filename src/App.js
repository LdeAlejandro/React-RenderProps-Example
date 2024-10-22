
import './App.css';
import Counter from './Counter';

const Buttons = ( {increment, decrement, count})=>(
  <div>
    <h1>
      Valor atual {count}
    </h1>
    <div>
      <button onClick={increment}>Incrementar</button>
      </div>
      <div>
      <button onClick={decrement}>Decrementar</button>
    </div>
  </div>
)

function App() {

  return (
   <div>
    <Counter render={
      ({increment, decrement, count}) => (
        <Buttons 
          increment={increment} 
          decrement={decrement} 
          count={count}/>
      )}>

      </Counter> 
   </div>
  );
}

export default App;
