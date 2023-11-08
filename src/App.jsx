import React, {useState} from "react";

function App() {
  const [count, setCount] = useState(4);
  function decrementCount() {
    setCount(prevCount => prevCount - 1);
}
  return (
    <div className="container">
    
      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <button>+</button>
    </div>
    )
}

export default App;
