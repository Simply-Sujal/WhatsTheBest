import express from "express";  
import cors from "cors";
import startServer from "./src/server.js";

const app = express();

const allowedOrigins = [
    "http://localhost",
    "http://localhost:3000"
]

const corsOptions = {
    origin: function (origin, callback) {
        if(!origin || allowedOrigins.includes(origin)) {
            callback(null, true)
        } else {
            callback(new Error("Not allowed by CORS"))
        }
    },
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true
}


// middlewares 
app.use(cors(corsOptions));
app.use(express.json());


// health-check route
app.get("/", (req, res)=>{
    res.json({message: "Health check fine! ✅"})
})

// starting the server
startServer(app);