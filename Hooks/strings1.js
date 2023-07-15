import React, {useState} from "react";

const App = () => {
  const [username, setUsername] = useState("Vasu");

  const handleChange = (event) => {
      setUsername(event.target.value);
  }
  return(
    <div>
      <input type="text" placeholder="Username..." onChange={handleChange}>
      </input>
      {username}
    </div>
  );
}

export default App;
