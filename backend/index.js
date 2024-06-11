import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"

const app = express()
dotenv.config()
const PORT= process.env.PORT || 4000;
const URI = process.env.MongoDBURI;
// connect to mongo
try {
    mongoose.connect(URI,{
        useNewUrlParser:true,
        useUnifiedTopology: true // Corrected typo here
    })
    console.log("connected")
} catch (error) {
    console.log(error,"error")
}

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})