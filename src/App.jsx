import { useState } from 'react'
import './App.css'

function App() {
  
  const [count, setCount] = useState(0);

  const [savedNumber, setSavedNumber] = useState("");

  
  function saveCount() {
    localStorage.setItem("savedCount", count)
    console.log(localStorage.getItem("savedCount"))
  };

  function loadCount(){
    const saved = localStorage.getItem("savedCount")
    setSavedNumber(saved);
  };

  return (
   <>
    <div className='container'>
      <h1>Count: {count}</h1>


      
      <div className='buttons'>
        <button onClick={() => setCount(count - 1)}>Decrease</button>
        <button onClick={() => setCount(0)}>Reset</button>
        <button onClick={() => setCount(count + 1)}>Increase</button>
      </div>

      <div className='buttons'>
        <button onClick={() => setCount(count - 5)}>Decrease - 5</button>
        <button onClick={saveCount}>Save</button>
        <button onClick={() => setCount(count + 5)}>Increase + 5</button>
      </div>
    </div>

    <button onClick={loadCount}>Number saved: </button>
    <h1>Saved Number: {savedNumber}</h1>

    
   </> 
  )
}

export default App
