import express from 'express'
import { imgUpload } from '../middleware/uploads.js'

const router= express.Router()

router.post('/uploads',imgUpload.single('image'),(req,res)=>{
    res.send(req.file)
    res.status(200).send("Image uploaded successfully")
})
router.post('/multipleupload',imgUpload.array('images',3),(req,res)=>{
       res.send(req.files)
    // res.status(200).send("images uploaded succcessfully")
})

export default router