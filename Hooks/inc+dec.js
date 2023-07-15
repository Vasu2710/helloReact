import React, {useState} from "react";

const App = () => {
  
  const [num, setNum]= useState(0);
  const inc = () => {
      setNum(num+1); 
  }
  const dec = () => {
      setNum(num - 1);
  }
   return(
    <>
    <button onClick={dec}> - </button>
    {num}
    <button onClick={inc}> + </button>
   </>
  );
}

export default App;
