import React from "react"

//it creates a context object that can be used to share data between components
//per parameter -> the default context state (of the whole app). In general it'll be an object.
const AuthContext = React.createContext({
  isLoggedIn: false,
})

export default AuthContext
