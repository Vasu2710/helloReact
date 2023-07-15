import React from 'react'
//using props
const Welcome = (props) =>{
  const {name, age} = props;
  return(
    <h1>Welcome {name}. Your age is {age}</h1>
  );
}
const App = () => {
  return (
   <>
      <Welcome name="Vasu" age="20"/>
      <Welcome name="Anirudh" age="24"/>
      <Welcome name="Varun" age="18"/>
   </>
  );
}

export default App
