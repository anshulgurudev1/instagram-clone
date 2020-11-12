const express =require('express');
const router = express.Router();
const mongoose =require('mongoose')
const Post =mongoose.model('Post')
const User=mongoose.model('User')
const requireLogin =require('../middleware/requireLogin')

router.get('/user/:id',requireLogin,(req,res)=>{
    User.findOne({_id:req.params.id})
    .select("-password")
    .then(user=>{
        Post.find({postedby:req.params.id})
        .populate("postedby","_id name")
        .exec((err,posts)=>{
            if(err){
                return res.status(422).json({error:err})
            }
            else{
                return res.json({user,posts})
            }
        })
    }).catch(err=>{
        return res.status(404).json({message:"user not found"})

    })
})
router.put('/follow',requireLogin,(req,res)=>{
        User.findByIdAndUpdate(req.body.followId,{
            $push:{followers:req.user._id}
        },{
            new:true
        },((err,result)=>{
            if(err){
                return res.status(422).json({err:err})
            }
            User.findByIdAndUpdate(req.user._id,{
                $push:{following:req.body.followId}
            },{
                new:true
            }).then(result=>{
                res.json(result)
            })
        })
        )
})
router.put('/unfollow',requireLogin,(req,res)=>{
        User.findByIdAndUpdate(req.body.unfollowId,{
            $push:{followes:req.user._id}
        },{
            new:true
        },((err,result)=>{
            if(err){
                return res.status(422).json({err:err})
            }
            User.findByIdAndUpdate(req.user._id,{
                $push:{following:req.body.unfollowId}
            },{
                new:true
            }).then(result=>{
                res.json(result)
            })
        })
        )
})

module.exports =router