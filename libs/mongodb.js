    import mongoose from "mongoose";

const connectMongoDB = () => {
    try {
        mongoose.connect(process.env.MONGODB_URI);
        console.log("connectMongoDB")
    } catch (error) {
        console.log("error")
    }
};

export default connectMongoDB;