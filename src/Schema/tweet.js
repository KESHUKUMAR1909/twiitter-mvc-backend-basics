import mongoose from "mongoose";
const tweetSchema = new mongoose.Schema({
    body:{
        type:String,
        required:true,
        trim:true,
        maxLength:280

    },
    image:{
        type:String,
        default:null,
    }
},{timestamps:true});
const Tweet = mongoose.model("Tweet",tweetSchema);//Tweet Collection
export default Tweet