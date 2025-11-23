import mongoose from "mongoose";

const dbConnect = async(MONGO_URI) => {
    try{
        await mongoose.connect(MONGO_URI);
        console.log("Successfully connected to DB")
    }catch(error){
        console.log(`Error while connecting to DB ${error}`)
    }
}

export default dbConnect;