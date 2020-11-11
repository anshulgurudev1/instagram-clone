import React,{useContext} from 'react'
import {Link} from 'react-router-dom'
import {Usercontext} from '../App'
const Navbar =()=>{
  const [state,dispatch] =useContext(Usercontext)
     const renderList=()=>{   
       if(state){
        return [
          <li><Link to ="Profile">Profile</Link></li>,
          <li><Link to ="Createpost">Createpost</Link></li>
        ]
       }else{
          return [
            <li><Link to ="Signin">Login</Link></li>,
            <li><Link to ="Signup">Signup</Link></li>
          ]
       }
     }
    return(
        <nav>
        <div className="nav-wrapper  white">
          <Link to ={state?'/':'/Signin'} className="brand-logo">Instagram</Link>
          <ul id="nav-mobile" className="right">
             {renderList()}
          </ul>
        </div>
      </nav>
    )
}
export default Navbar