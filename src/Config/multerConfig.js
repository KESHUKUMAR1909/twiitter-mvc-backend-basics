import multer from 'multer';
import multerS3 from 'multer-s3';
import { s3 } from "./awsConfig.js";
import { PORT, MONGO_URL, AWS_REGION, AWS_SECRET_ACCESS_KEY, AWS_BUCKET_NAME, AWS_ACCESS_KEY_ID } from './serverConfig.js';


export const s3Uploader = multer({
    storage: multerS3({
        s3: s3,
        bucket: AWS_BUCKET_NAME,
        contentType: multerS3.AUTO_CONTENT_TYPE, // Automatically set the Content-Type
        key: function (req, file, cb) { // Change 'key' to 'Key'
            if (!file) {
                return cb(new Error('No File Found'));
            }
            console.log(file);
            if (file.mimetype !== "image/jpeg" && file.mimetype !== 'image/png') {
                return cb(new Error("Invalid file type"));
            }
            
            // Extract the file extension safely
            const fileExtension = file.originalname.split('.').pop();
            
            // If everything is fine, proceed with the upload
            cb(null, `${Date.now().toString()}.${fileExtension}`);
        }
    })
});
