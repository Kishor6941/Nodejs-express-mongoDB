import express from "express"
import router from "./routes/userRoute.js"
import errorHandler from "./middleware/errorHandler.js";

const app = express()
app.use(express.json());
app.use('/api',router)

// Error handler (must be last)
app.use(errorHandler)


const PORT = 3000
app.listen(PORT,() => {
    console.log(`server is running in ${PORT}`)
})