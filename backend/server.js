import express from "express";
import dotenv from "dotenv";
import cors from "cors"
import { connectDB } from "./config/db.js";
import userRoute from "./routes/servicesRoute.js";


const app = express()
dotenv.config()

const port = process.env.PORT || 7789

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use('/api', userRoute)


app.get('/', (req, res) => {
   // console.log('Welcome')
   res.redirect('http://localhost:4200/')
  // res.json('Welcome, lets do CRUD')
})


app.listen(port , ()=>{
   connectDB();
   console.log(`Server is up and running on port http://localhost:${port}`)
})