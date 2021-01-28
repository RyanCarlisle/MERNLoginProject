import React, { useState, useEffect, useRef } from "react";
import BIRDS from 'vanta/dist/vanta.birds.min';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Header from "./components/Header";
import LoginSuccessful from "./components/LoginSuccessful";
import UserContext from "./components/context/userContext";
import Axios from "axios";
import "./App.css";
import ForgotPassword from "./components/ForgotPassword";

const App = () => {

  const [vantaEffect, setVantaEffect] = useState(0)
  const myRef = useRef(null)
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(BIRDS({
        el: myRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: true
      }))
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])


  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined
  });

  useEffect(() => {
    const checkLoggedIn = async () => {
      let token = localStorage.getItem("auth-token");
      if(token === null){
        localStorage.setItem("auth-token", "");
        token = "";
      }

      const tokenRes = await Axios.post(
        "http://localhost:5000/users/tokenIsValid",
        null,
        { headers: {"x-auth-token": token} }
      );
      if(tokenRes.data) {
        const userRes = await Axios.get(
          "http://localhost:5000/users",
          {headers: { "x-auth-token": token}}
        );
        setUserData({
          token,
          user: userRes.data
        });
      }
    };

    checkLoggedIn();
  }, []);

  return (
    <div ref={myRef} id="vanta">
        <BrowserRouter>
          <UserContext.Provider value={{userData, setUserData}}>
            <Header />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register} />
              <Route path="/loginSuccessful" component={LoginSuccessful} />
              <Route path="/forgotpassword" component={ForgotPassword} />
            </Switch>
          </UserContext.Provider>
        </BrowserRouter>
    </div>
  )
}

export default App;