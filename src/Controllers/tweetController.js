import { createTweet as createTweetService } from "../repostories/tweetRepositories.js";
export const getTweets = (req, res) => {
    return res.json({
        message: "Welcome to the tweet Route"
    });
};

export const getTweetsById = (req, res) => {
    const { id } = req.params;  // Extract id from req.params
    return res.json({
        id: id,
        message: `This is the tweet of ${id}`
    });
};
export const createTweet = async (req, res) => {
   try{
    const response = await createTweetService({
        body:req.body.body
    });
    return res.status(200).json({
        success:true,
        data:response,
        message:"tweet Created Succesfully"

    })
   }catch(error){
    console.log(error);
    if(error.status){
        return res.status(error.status).json({
            message :error.message,
            success:false
        })
    }
    return res.status(500).json({
        message:"internal server error"
    })
   }
};
