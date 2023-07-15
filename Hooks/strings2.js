import React, {useState} from "react";

const App = () => {
  const [username, setUsername] = useState("Vasu");


  const handleClick = () =>{
    setUsername("Vivaan")
  }
  return(
    <div>
      
      <button onClick={handleClick}>Click!!</button>
      {username}
    </div>
  );
}

export default App;
