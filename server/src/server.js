import dotenv from "dotenv";
import dbConnect from "./db/db.js";

dotenv.config();

const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.DATABASE_URL;

const startServer = async(app) => {
    try{
        await dbConnect(MONGO_URI);
        app.listen(PORT, ()=>{
            console.log(`Server is running on port ${PORT}`)
        })
    }catch(error){
        console.log(`Error while starting the server ${error}`)
    }
}

export default startServer;