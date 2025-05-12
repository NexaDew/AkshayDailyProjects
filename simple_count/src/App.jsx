
import React,{ useState } from 'react';
import './App.css'


function App() {

  const [count,setCout]=useState(0);

  const increment=()=>setCout(count+1);
  const decrement=()=>setCout(count-1);
  const reset=()=>setCout(0);

  return (
    
     <div className='container'>
      <h2>Simple Counter</h2>
      <h4>Count: {count}</h4>
      <div className="button">
       <button onClick={increment}>Increment</button>
       <button onClick={decrement}>Decrement</button>
       <button onClick={reset}>Reset</button>
      </div>
    </div>
  )
}

export default App
