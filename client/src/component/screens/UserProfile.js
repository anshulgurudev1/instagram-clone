import React,{useEffect,useState,useContext} from 'react'
import {Usercontext} from '../../App'
import {useParams} from 'react-router-dom'
const Profile =()=>{
    const [userProfile,setProfile]=useState('')
    const [state,dispatch]=useContext(Usercontext)
    const {userid}=useParams()
    
    useEffect(()=>{
        fetch(`/user/${userid}`,{
            headers:{
                "Authorization":"bearer "+localStorage.getItem("jwt")
            }
        }).then(res=>res.json())
        .then(result=>{
            console.log(result)
            setProfile(result)
        })
    },[])
    const userfollow=()=>{
        fetch('/follow',{
            method:'put',
            headers:{
                "Content-Type":"application/json",
                "Authorization":"bearer "+ localStorage.getItem("jwt")
              },
              body:JSON.stringify({
                  followId:userid
              })
        }).then(res=>res.json())
        .then(result=>{
            console.log(result)
        })
    }
    return(
        <>
        {
        userProfile ?
           <div style={{maxWidth:"800px",margin:"0px 250px"}}>
           <div style={{display:"flex",justifyContent:"space-around",margin:"18px,0px",borderBottom:"1px solid grey"}}>
               <div>
                   <img style={{width:"160px",height:"160px",borderRadius:"80px"}}
                   src="https://images.unsplash.com/photo-1519058082700-08a0b56da9b4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"/>
               </div>
               <div>
                    <h5>{userProfile.user.name}</h5>
                   <div style={{display:"flex",justifyContent:"space-between",width:"108%"}}>
                       <h6>{userProfile.posts.length} posts</h6>
                       <h6>14 follower</h6>
                       <h6>14 following</h6>
                   </div>
                   <button class="btn waves-effect waves-light #90caf9 blue darken-1"
                  onClick={()=>userfollow()} >follow
                  </button>
               </div>
               
           </div>
           <div style={{display:"flex",flexWrap:"wrap",justifyContent:"space-around",marginTop:"20px"}}> 
           {
               userProfile.posts.map(item=>{
                   return(
                   <img className="item" src={item.photo}/>
                   )
               })
           }
            
           </div>
       </div>
        :
        <h2 style={{color:"#ec407a"}}> loading... </h2> }
      
        </>
    )
   
}
export default Profile