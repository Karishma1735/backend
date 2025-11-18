
export const globalErrorHandle = (err,req,res,next) =>{

    console.log("Error handler");
    const statuscode = 500||err.statuscode;
    res.status(statuscode).send({
        error:"something went wrong",
        message:err.message
    })
}