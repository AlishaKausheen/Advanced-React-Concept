import React, {useState} from "react";

function App() {
  const [count, setCount] = useState(4);
  const [theme, setTheme] = useState('blue');
  function decrementCount() {
    setCount(prevCount => prevCount - 1);
    setTheme('red');
  }
  function incrementCount() {
    setCount(prevCount => prevCount + 1);
    setTheme('green');
  }
return(
    <div className="container">
    
      <button onClick={decrementCount}>-</button>
    <span>{count}</span>
    <span>{theme}</span>
      <button onClick={incrementCount}>+</button>
    </div>
    )
}

export default App;
