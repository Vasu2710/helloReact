

            //HOOKS
import React, {useState}from 'react'

function App() {
  const [counter, setIncrement] = useState(10); //any number 
  const handleIncrement = () => {
    setIncrement(counter+2);
  }
 
  return (
    <>
       
        <h2>{counter}</h2>
        <button onClick={handleIncrement}>Increment</button>
        <hr></hr>
    </>
  )
}

export default App
