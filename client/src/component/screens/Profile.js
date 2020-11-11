import React from 'react'

const Profile =()=>{
    return(
        <div style={{maxWidth:"800px",margin:"0px 250px"}}>
            <div style={{display:"flex",justifyContent:"space-around",margin:"18px,0px",borderBottom:"1px solid grey"}}>
                <div>
                    <img style={{width:"160px",height:"160px",borderRadius:"80px"}}
                    src="https://images.unsplash.com/photo-1519058082700-08a0b56da9b4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"/>
                </div>
                <div>
                    <h5>Anshul gurudev</h5>
                    <div style={{display:"flex",justifyContent:"space-between",width:"108%"}}>
                        <h6>14 posts</h6>
                        <h6>14 follower</h6>
                        <h6>14 following</h6>
                    </div>
                </div>
                
            </div>
            <div style={{display:"flex",flexWrap:"wrap",justifyContent:"space-around",marginTop:"20px"}}> 
               <img className="item" src="https://images.unsplash.com/photo-1552607676-17f088307dce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60/"/>
               <img className="item" src="https://images.unsplash.com/photo-1552607676-17f088307dce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60/"/>
               <img className="item" src="https://images.unsplash.com/photo-1552607676-17f088307dce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60/"/>
               <img className="item" src="https://images.unsplash.com/photo-1552607676-17f088307dce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60/"/>
               <img className="item" src="https://images.unsplash.com/photo-1552607676-17f088307dce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60/"/>
               <img className="item" src="https://images.unsplash.com/photo-1552607676-17f088307dce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60/"/>
            </div>
        </div>
    )
}
export default Profile