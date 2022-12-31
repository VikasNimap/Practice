const db = require("../../models/index");
const user = db.user;

exports.registerUser = async(req,res)=>{
    try{
       let body = req.body;
       const response=await user.create(body)
       res.send(response) 
    }
    catch(error){
        res.send(error.message)
    }
}

exports.getData=async (req,res)=>{
    const response=await user.findAll()
    res.send(response)
}

exports.update=async (req,res)=>{
    const data=req.body
    const userId=req.params.id
    const response=await user.update(data,{where:{id:userId}})
    res.send(response)
}

exports.delete=async (req,res)=>{
    const userId=req.params.id
    const response=await user.destroy({where:{id:userId}})
    res.send({message:"data deleted successfully",data:response})
}