import jwt from 'jsonwebtoken'
import User from "../model/userForm.js"
import bcrypt from "bcrypt"

export const submitForm =  async(req,res,next) => {
    const {name,email,password} = req.body || {}
try {
    const saltRound = 10;
    const hashedPassword =await bcrypt.hash(password,saltRound)

      if(!name||!email||!password){
        return res.status(400).send("all fields are required")
    }

    const newUser = new User({name,email,password:hashedPassword})
    await newUser.save();

    const token = jwt.sign({id:newUser._id , email:newUser._email},process.env.JWT_SECRET_KEY , { expiresIn: '1h' })
     res.status(200).send({
        message:'Your message has been sent successfully!',
        token:token
    });


} catch (err) {
    // res.status(500).send("Error saving user")
    next(err);
    
}
  
}


export const getAllUsers = async(req,res,next) =>{
    try {
        const users = await User.find({})
        res.status(200).json(users)
        
    } catch (error) {
        res.status(500).send("error fetching users")
        
    }
}

export const getUserById = async(req,res,next) =>{
    try {
        const user = await User.findById(req.params.id);
        if(!user) return res.status(404).send("User not found")
            res.status(200).send(user)
    } catch (error) {
        //   res.status(500).send("Error fetching user");
        next(err);
        
    }
}



export const updateUser =async(req,res,next) =>{
    
    try {
          const { name, email, password } = req.body;
    const updateData = {};  

     if (name) updateData.name = name;
    if (email) updateData.email = email;
    if(password){
        const saltRound =10
        updateData.password= await bcrypt.hash(password,saltRound)
    }

    const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        updateData,
        {new:true}
    )
    if(!updateUser) return res.status(404).send("User not found")
       res.status(200).send( updatedUser)
    } catch (error) {
        // res.status(500).send("Error updating user")
        next(err);
        
    }
}   
export const deleteUser = async (req, res,next) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    if (!deletedUser) return res.status(404).send("User not found");
    res.status(200).send("User deleted successfully");
  } catch (error) {
    // res.status(500).send("Error deleting user");
    next(err);
  }
};