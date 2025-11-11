import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
    },
    contact:{
        type:Number,
        required:true,

    }
})

const user = mongoose.model('User' , userSchema)
export default user