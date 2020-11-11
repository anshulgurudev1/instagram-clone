import React,{useState,useEffect} from 'react'
import { useHistory} from 'react-router-dom'
import M from "materialize-css";
const Createpost=()=>{
    const history=useHistory()
    const [title,setTitle]=useState("")
    const [body,setBody]=useState("")
    const [image,setImage]=useState("")
    const [url,setUrl]=useState("")
    useEffect(()=>{
        if(url){
        fetch('/createpost',{
            method:"post",
            headers:{
              "Content-Type":"application/json",
              "Authorization":"bearer "+ localStorage.getItem("jwt")
            },
            body:JSON.stringify({
              title,
              body,
              pic:url
            })
          }).then(res=>res.json())
          .then(data=>{
              console.log(data)
            if(data.err)
            {
              M.toast({html: data.err ,classes:"red"})
            }
            else{
              M.toast({html: "upload successfully" ,classes :"green"})
              history.push('/')
            }
          }).catch(err=>{
            console.log(err)
          })
        } 
    },[url])
   const postdata=()=>{
       const data =new FormData()
       data.append("file",image)
       data.append("upload_preset","insta-clone")
       data.append("cloud_name","anshul123")
       fetch(" https://api.cloudinary.com/v1_1/anshul123/image/upload",{
           method:"post",
           body:data
       }).then(res=>res.json())
       .then(data=>{
           setUrl(data.url)
       }).catch(err=>{
           console.log(err)
       })
      
   }
    return(
        <div className="card input-field" style={{margin:"10px auto",maxWidth:"30%",padding:"20px",textAlign:"center"}}>
            <input type="text" placeholder="title"
            value={title}
            onChange={(e)=>setTitle(e.target.value)}
            />
            <input type="text" placeholder="discripition"
             value={body}
             onChange={(e)=>setBody(e.target.value)}
            />
            <div className="file-field input-field">
                <div className="btn">
                          <span>upload image</span>
                            <input type="file"
                
                             onChange={(e)=>setImage(e.target.files[0])}
                            />
                </div>
                    <div className="file-path-wrapper">
                        <input className="file-path validate" type="text"/>
                    </div>
            </div>
            <button class="btn waves-effect waves-light #90caf9 blue darken-1"
            onClick={()=>postdata()} 
            >Submit Post
                  </button>
        </div>
    )
}
export default Createpost