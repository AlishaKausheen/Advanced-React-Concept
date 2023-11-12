import React, { useState, useEffect } from "react";
import { ControlledInputs } from "../src/assets/Form";
import {Memo} from "../src/assets/Memo";

function App() {
  //  State hook
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
  //Effect hook to resize Window
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const handleResize = () => {
    setWindowWidth(window.innerWidth)
  }
  useEffect(()=>{window.addEventListener('resize',handleResize)},[])
  return (
  <>
  <div className="container">
    <h1>Window width : {window.innerWidth } pixel</h1>
    
      <button onClick={decrementCount}>-</button>
    <span>{count}</span>
    <span>{theme}</span>
      <button onClick={incrementCount}>+</button>
      </div>
      <ControlledInputs />
      <Memo/>
      </>
    )
}

export default App;
