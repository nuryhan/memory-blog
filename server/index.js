import  express  from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import postRoutes from "./routes/posts.js";
import dotenv from 'dotenv'

const app = express();

dotenv.config();

app.use(bodyParser.json({limit: "30mb", extended: true}))
app.use(bodyParser.urlencoded({limit:"30mb", extended: true}))
app.use(cors());

app.use('/posts', postRoutes )


const MONGO_URL = process.env.MONGO_URL
const PORT = process.env.PORT || 5000;


mongoose
  .connect(MONGO_URL)
  .then(() => console.log("DB Connection Successfull!"))
  .catch((err) => {
    console.log(err);
  });

// mongoose.connect(MONGO_URL,{ useNewUrlParser: true, useUnifiedTopology: true})
// .then(()=> app.listen(PORT, ()=> console.log(`server running on port ${PORT}`)) )
// .catch((err)=> console.log(err.message))

// mongoose.set('useFindAndModify', false )


app.listen(PORT, () => {
    console.log(`Backend server is running on port ${PORT} `);
  });