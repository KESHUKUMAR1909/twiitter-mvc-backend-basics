import { Filter } from "bad-words";
import { createTweet as createTweetRepository } from "../Controllers/tweetController.js";

export const createTweet = async ({ body }) => {
    const filter = new Filter();

    if (filter.isProfane(body)) {
        throw {
            message: "Tweet contains blocked words",
            status: 400,
        };
    }

    return await createTweetRepository({ body });
};
