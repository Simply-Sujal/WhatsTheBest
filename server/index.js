import express from "express";  
import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());


app.get("/", (req, res)=>{
    res.json({message: "Health check fine! ✅"})
})

app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT} ✅`)
})