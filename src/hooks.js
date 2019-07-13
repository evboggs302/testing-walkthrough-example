import React, { useState } from "react";
// import UseFetch from "./useFetch";

function App() {
  let [count, setCount] = useState(0);
  const decrement = () => setCount((count -= 1));
  const increment = () => setCount((count += 1));

  // let { data: pokeData } = UseFetch("https://api.pokemontcg.io/v1/cards");

  // console.log(pokeData);

  return (
    <div className="App">
      <h1>Testing React Hooks</h1>
      <p data-testid="countvalue">{count}</p>
      <button data-testid="decrementButton" onClick={decrement}>
        -
      </button>

      <button data-testid="incrementButton" onClick={increment}>
        +
      </button>
      <br />
    </div>
  );
}

export default App;
