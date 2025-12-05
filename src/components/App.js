
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  let [count, setCount] = useState(0);


  function handleCount(){
    setCount(prev => prev+1);
  }

  return (
    <div>
      <p>Button clicked {count} times</p>  

      <button onClick={handleCount}>Click Me!</button>
        
    </div>
  )
}

export default App
