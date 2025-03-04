import { Filter } from "bad-words";
import { createTweet as createTweetRepository, getTweets as getTweetsRepository  , gettweetById as getTweetsByIdRepository , deleteTweet as deleteTweetRepository , updateTweet as updateTweetRepository} from "../repostories/tweetRepositories.js";


const filter = new Filter(); // Initialize once to avoid redundant instances

export const createTweet = async ({ body }) => {
    if (!body || body.trim() === "") {
        throw {
            message: "Tweet cannot be empty",
            status: 400,
        };
    }

    if (filter.isProfane(body)) {
        throw {
            message: "Tweet contains blocked words",
            status: 400,
        };
    }

    try {
        return await createTweetRepository({ body });
    } catch (error) {
        console.error("Error creating tweet:", error.stack);
        throw {
            message: "Database error while creating tweet",
            status: 500,
        };
    }
};

export const getTweets = async () => {
    try {
        return await getTweetsRepository();
    } catch (error) {
        console.error("Error fetching tweets:", error.stack);
        throw {
            message: "Database error while fetching tweets",
            status: 500,
        };
    }
};
export const getTweetsById = async (id)=>{
    const tweet = await getTweetsByIdRepository(id);
    if(!tweet){
        throw{
            message:"tweet Not Found",
            status:404
        }
    }
    return tweet;
}
export const deleteTweet = async (id)=>{
    const response = await deleteTweetRepository(id);
   if(!response){
    throw {
        message:"tweet Not Found",
        status:404
    }
   }
   return response
}
export const updateTweet = async (id , body)=>{
    const response = await updateTweetRepository({id ,body});
    if(!response){
        throw {
            message:"tweet Not Found",
            status:404
        }
    }
    return response;
}