        //APP.JS
import React from 'react'
import Login from './Login'
//using props

const App = () => {
  return (
   <>
      <Login name="Vasu" age="20" sal={40} bonus={5}/>
      <Login name="Anirudh" age="24" sal={30} bonus={5}/>
      <Login name="Varun" age="18" sal= {25} bonus={6}/>
   </>
  );
}

export default App



      //LOGIN.JS

import React from 'react'

const Login = (props) =>{
    const {name, age, sal, bonus} = props;
    return(
      <h1>Welcome {name}. Your age is {age}. Total Salary= {sal+bonus}</h1>
    );
  }

export default Login
