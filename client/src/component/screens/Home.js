import React from 'react'

const Home =()=>{
    return(
        <div className="home">
            <div className="card home-card">
                <h5>ramesh</h5>
                <div className="card-image"> 
                 <img src="https://images.unsplash.com/photo-1494959764136-6be9eb3c261e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"/>
                </div>
                <div className="card-content">
                <i class="material-icons "style={{color:"red"}}>favorite</i>
                     <h6>title</h6>
                     <h6>discription</h6>
                     <input type="text" placeholder="add a comment"/>
                </div>
            </div>
        </div>
        
    )
}
export default Home