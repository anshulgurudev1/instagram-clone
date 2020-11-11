import React,{useState,useEffect} from 'react'

const Home =()=>{
    const [data,setData]=useState([])
    useEffect(()=>{
        fetch('/allpost',{
            headers:{
                "Authorization":"bearer "+localStorage.getItem("jwt")
            }
        }).then(res=>res.json())
        .then(result=>{
            setData(result.posts)
        })
    },[])
    return(
        <div className="home">
            {
                data.map(item=>{
                    return(
                        <div className="card home-card">
                            <h5>{item.postedby.name}</h5>
                            <div className="card-image"> 
                            <img src={item.photo}/>
                            </div>
                            <div className="card-content">
                            <i class="material-icons "style={{color:"red"}}>favorite</i>
                                <h6>{item.title}</h6>
                                 <h6>{item.body}</h6>
                                <input type="text" placeholder="add a comment"/>
                            </div>
                        </div>      
                    )
                })
            }
          
        </div>
        
    )
}
export default Home