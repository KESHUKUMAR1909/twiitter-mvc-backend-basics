import mongoose from "mongoose";

export const createTweetManualValidator=(req, res , next)=>{
    if(!req.body.tweet){
        return res.status(400).json({
            error :"Body is required"
        })
    }
    next();
}
export const getTweetByIdManualValidator=(req , res , next)=>{
    const isValidId = mongoose.Types.ObjectId.isValid(req.params.id)
    if(!isValidId){
        return res.status(400).json({
            error:"Invalid tweet id"
        })
    }
    next();
}