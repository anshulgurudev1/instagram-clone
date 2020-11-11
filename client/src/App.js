import React from 'react'
import Navbar from './component/navbar'
import "./App.css"
import {BrowserRouter,Route} from 'react-router-dom'
import Home from './component/screens/Home'
import Signin from './component/screens/Signin'
import Signup from './component/screens/Signup'
import Profile from './component/screens/Profile'
import Createpost from './component/screens/Createpost'

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Route exact path ="/">
      <Home/>
    </Route>
   
    <Route path ="/Signup">
      <Signup/>
    </Route>
    <Route path ="/Profile">
      <Profile/>
    </Route>
    <Route path ="/Signin">
      <Signin/>
    </Route>
    <Route path ="/Createpost">
      <Createpost/>
    </Route>
    </BrowserRouter>
  )
}

export default App;
