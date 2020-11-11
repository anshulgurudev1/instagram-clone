const mongoose =require('mongoose')
const {ObjectId} =mongoose.Schema.Types
const postschema =new mongoose.Schema({
    title:{
        type:String,
        require:true
    },
    body:{
        type:String,
        require : true
    },
    photo:{
        type:String,
        require : true
        
    },
    likes:[{ type : ObjectId, ref : "User"}],
    postedby:{
        type : ObjectId,
        ref : "User"
    }
})
mongoose.model('Post',postschema)