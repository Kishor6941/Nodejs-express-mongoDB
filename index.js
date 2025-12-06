import express from "express"
import router from "./routes/userRoute.js"
import workerRouter from "./routes/workerThreadRoute.js"
import errorHandler from "./middleware/errorHandler.js";
import multer from "multer";

const app = express()
const upload = multer()
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(upload.array());
app.use('/api',router)
app.use('/api',workerRouter)   

app.use('/public',express.static('public'));
app.use('/images', express.static('images'));

// Set EJS as templating engine
app.set('view engine', 'ejs');

// Error handler (must be last)
app.use(errorHandler)


const PORT = 3000
app.listen(PORT,() => {
    console.log(`server is running in ${PORT}`)
})