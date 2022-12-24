import React, {  useState } from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';
// import Useffect from "./Useffect"
import Form  from "./Form"
import Digital from './Digital'
import Reduce from "./Reduce"
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // useEffect=(()=>{
  //   const userinfo = localStorage.getItem("1")

  //   if(userinfo==="1"){
  //     setIsLoggedIn(true)
  //   }
  // } , [])
  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways

  localStorage.setItem("isLoggedIn","1")
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    setIsLoggedIn(false);
  };


  return (
    <React.Fragment>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
      {/* <Useffect/> */}
      <Digital/> 
      <Form/>
      <Reduce/>
    </React.Fragment>

    
  );
}

export default App;
