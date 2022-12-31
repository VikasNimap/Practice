const express=require('express')
const router=express.Router()
const userController=require('../controllers/userControllers')

router.post('/user',userController.registerUser)
router.get('/user',userController.getData)
router.put('/user/:id',userController.update)
router.delete('/user/:id',userController.delete)


module.exports=router