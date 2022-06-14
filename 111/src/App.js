import React, { useState, useEffect } from "react"

import Login from "./components/Login/Login"
import Home from "./components/Home/Home"
import MainHeader from "./components/MainHeader/MainHeader"
import AuthContext from "./components/store/auth-context"

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  //the useEffect[0] function is executed after every component re-evaluation
  useEffect(() => {
    const storedUserLoggedInInformation = localStorage.getItem("isLoggedIn")

    //this will cause an infinite loop of re-rendering
    if (storedUserLoggedInInformation) {
      setIsLoggedIn(true)
    }
  }, [])

  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    localStorage.setItem("isLoggedIn", "1")
    setIsLoggedIn(true)
  }

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn")
    setIsLoggedIn(false)
  }

  return (
    //here I recieve a default object, and now I can change its state
    <AuthContext.Provider value={{ isLoggedIn: isLoggedIn }}>
      <MainHeader onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </AuthContext.Provider>
  )
}

export default App
