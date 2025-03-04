import { createTweet as createTweetService, getTweets as getTweetsService, getTweetsById as getTweetsByIdService, deleteTweet as deleteTweetService, updateTweet as updateTweetService } from "../services/tweetServices.js";

export const getTweetsById = (req, res) => {
    const { id } = req.params;
    return res.json({
        id,
        message: `This is the tweet of ${id}`,
    });
};

export const createTweet = async (req, res) => {
    console.log("Uploaded file:", req.file);
    try {
        const response = await createTweetService({
            body: req.body.body,
            image: req.file?.location || null, // Explicitly set null if no file
        });

        return res.status(201).json({ // Use 201 for successful creation
            success: true,
            data: response,
            message: "Tweet created successfully",
        });
    } catch (error) {
        console.error("Error creating tweet:", error.stack);
        return res.status(error.status || 500).json({
            success: false,
            message: error.message || "Internal Server Error",
        });
    }
};

export const getTweets = async (req, res) => {
    try {
        const response = await getTweetsService();
        return res.status(200).json({
            success: true,
            data: response,
            message: "Tweets fetched successfully",
        });
    } catch (error) {
        console.error("Error fetching tweets:", error.stack);
        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
        });
    }
};
export const gettweetById = async (req, res) => {
    try {
        const response = await getTweetsService(id);
        return res.status(200).json({
            success: true,
            data: response,
            message: "Tweets fetched successfully",
        });
    } catch (error) {
        console.log(error);
        if (error.status) {
            return res.status(error.status).json({
                message: error.message,
                success: false,
            });

        }
        return res.status(404).json({
            message: "Internal Server Error",
            success: false
        })
    }
}

export const deleteTweet = async (req, res) => {
    try {
        const response = await deleteTweetService(req.params.id)
        return res.status(200).json({
            success: true,
            message: "Succesfully deleted the tweet",
            data: response
        })
    } catch (error) {
        console.log(error);
        if (error.status) {
            return res.status(error.status).json({
                message: error.message,
                status: false
            })
        }
        return res.status(404).json({
            message: "Something Went Wrong",
            success: false
        })
    }
}
export const updateTweet = async (res, req) => {
    try {
        const response = await updateTweetService(req.params.id, req.body);
        return res.status(200).json({
            success: true,
            data: response,
            message: "Tweet updated successfully",
        })
    } catch (error) {
        console.log(error);
        if (error.status) {
            return res.status(404).json({
                message: error.message,
                success: false
            })
        }
        return res.status(500).json({
            success: false,
            message: "Something went wrong"
        })
    }
}
