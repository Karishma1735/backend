import User from "../model/userForm.js"


export const submitForm =  async(req,res) => {
    const {name,email,contact} = req.body || {}
try {
    

      if(!name||!email||!contact){
        return res.status(400).send("all fields are required")
    }

    const newUser =new User({name,email,contact})
    await newUser.save()
     res.status(200).send('Your message has been sent successfully!');

} catch (error) {
    res.status(500).send("Error saving user")
    
}
  
}