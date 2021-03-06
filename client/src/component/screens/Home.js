import React,{useState,useEffect,useContext} from 'react'
import {Usercontext} from '../../App'
import { Link }  from  'react-router-dom'

const Home =()=>{
    const [data,setData]=useState([])
    const [state,dispatch]=useContext(Usercontext)
    useEffect(()=>{
        fetch('/allpost',{
            headers:{
                "Authorization":"bearer "+localStorage.getItem("jwt")
            }
        }).then(res=>res.json())
        .then(result=>{
            console.log(result)
            setData(result.posts)
        })
    },[])
    const likesPost=(id)=>{
        fetch('/likes',{
            method:"PUT",
            headers:{
                "Authorization":"bearer "+localStorage.getItem("jwt"),
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                postId:id
            })
            }).then(res=>res.json())
            .then(result=>{
                const newdata =data.map(item=>{
                    if(item._id==result._id){
                        return result
                    }
                    else{
                        return item
                    }
                })
                setData(newdata)
        })
    }
    const unlikesPost=(id)=>{
        fetch('/unlikes',{
            method:"PUT",
            headers:{
                "Authorization":"bearer "+localStorage.getItem("jwt"),
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                postId:id
            })
            }).then(res=>res.json())
            .then(result=>{
             const newdata =data.map(item=>{
                 if(item._id==result._id){
                     return result
                 }
                 else{
                     return item
                 }
             })
             setData(newdata)
        })
    }
    const makecomment=(text,postId)=>{
        fetch('/comment',{
            method:"PUT",
            headers:{
                "Authorization":"bearer "+localStorage.getItem("jwt"),
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                postId,
                text
            })
        }).then(res=>res.json())
        .then(result=>{
         const newdata =data.map(item=>{
             if(item._id==result._id){
                 return result
             }
             else{
                 return item
             }
         })
         setData(newdata)
    }).catch(err=>{
        console.log(err)
    })

    }
    const deletePost=(postId)=>{
           fetch(`/deletepost/${postId}`,{
               method:"DELETE",
               headers:{
                "Authorization":"bearer "+localStorage.getItem("jwt")
            }
           }).then(res=>res.json())
           .then(result=>{
               console.log(result)
               const newdata =data.filter(item=>{
                   return item._id !== result._id
               })
               setData(newdata)
           })
           
    }
    return(
        <div className="home">
            {
                data.map(item=>{
                    return(
                        <div className="card home-card">
                            <h5><Link to ={item.postedby._id !== state._id ? `/Profile/${item.postedby._id}` :"/Profile"}>{item.postedby.name}</Link>{item.postedby._id == state._id
                            &&  <i className="material-icons" style={{float:"right"}}
                            onClick={()=>{deletePost(item._id)}}
                            >delete</i>
                            }
                            </h5>
                            <div className="card-image"> 
                            <img src={item.photo}/>
                            </div>
                            <div className="card-content">
                            <i class="material-icons "style={{color:"red"}}>favorite</i>
                            {item.likes.includes(state._id)
                            ? <i className="material-icons"
                            onClick ={()=>{unlikesPost(item._id)}}>thumb_down</i>
                            :<i className="material-icons" 
                            onClick ={()=>{likesPost(item._id)}} >thumb_up</i>
                            }
                                <h6>{item.likes.length} likes</h6>
                                <h6>{item.title}</h6>
                                 <h6>{item.body}</h6>
                               
                             
                                 <form 
                                 onSubmit={(e)=>{
                                       e.preventDefault()
                                       makecomment(e.target[0].value,item._id)

                                 }}>
                                 <input type="text" placeholder="add a comment"/>
                                 </form>
                               
                            </div>
                        </div>      
                    )
                })
            }
          
        </div>
        
    )
}
export default Home