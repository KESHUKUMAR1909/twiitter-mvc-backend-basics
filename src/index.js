import express from 'express';
import morgan from 'morgan';
import { render } from 'ejs';
import { PORT } from './Config/serverConfig.js';
import apiRouter from './Routes/apiRoutes.js';
import tweetRouter from './Routes/tweet.js';
import { connectDB } from './Config/dBConnection.js';
const app = express();
app.set('view engine','ejs');
app.set('views' ,import.meta.dirname +'/views');
//set the path fort the index.html

function mid1(req, res, next) {
    console.log('mid1');
    next();
}


function commonMiddleWare(req, res, next) {
    console.log("mid2");
    next();
}

// Use morgan with a valid format
app.use(morgan('dev'));


// Use custom middleware separately
app.use(commonMiddleWare);
app.use(express.json()); // Parses JSON bodies
app.use(express.urlencoded()); // Parses URL-encoded data


// define routes
app.use('/' , tweetRouter);
app.use('/api' , apiRouter) ;
app.get('/',(req , res)=>{
    res.render("home")
})

// GET request for /ping
app.get('/ping', [mid1], (req, res) => {
    return res.status(200).json({
        message: "Server successfully formed"
    });
});

// ✅ NEW: POST request for /ping
app.post('/ping', (req, res) => {
    console.log("Request Body:", req.body); 
    return res.status(200).json({
        message: "Server successfully formed",
        data: req.body
    });
});

// POST request for /hello
app.post('/hello', (req, res) => {
    console.log(req.query);  // Logs query parameters
    console.log(req.body);   // Logs request body
    return res.json({
        message: "World"
    });
});

// GET request for /tweets/:tweet_id
app.get('/tweets/:tweet_id', (req, res) => {
    console.log(req.params); // Logs route parameters
    return res.json({
        message: "Tweet Details"
    });
});

app.listen(PORT, () => {
    console.log(`Server is started on Port :${PORT}`);
    connectDB();
});
12