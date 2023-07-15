  
                                        //PROPS IN ANOTHER COMPONENT
App.js
import React from 'react'
import Login from './Login'
//using props

const App = () => {
  return (
   <>
      <Login name="Vasu" age="20"/>
      <Login name="Anirudh" age="24"/>
      <Login name="Varun" age="18"/>
   </>
  );
}

export default App



Login.js
import React from 'react'

const Login = (props) =>{
    const {name, age} = props;
    return(
      <h1>Welcome {name}. Your age is {age}</h1>
    );
  }

export default Login
