import { MongoClient } from "mongodb";

// const URI = process.env.MONGODB_URI;
const MONGODB_URI = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASS}@mycluster.dosvils.mongodb.net/${process.env.MONGODB_NAME}?retryWrites=true&w=majority&appName=MyCluster`;

const options = {
    maxPoolSize: 50,
    wtimeoutMS: 2500,
    useNewUrlParser: true
}

console.log("MongoDB URI:", MONGODB_URI);
if(!MONGODB_URI) throw new Error("Please define the MONGODB_URI environment variable inside .env.local");

let client = new MongoClient(MONGODB_URI, options)
let clientPromise

if(process.env.NODE_ENV !== "production") {
    
    if(!global._mongoClientPromise) {
        global._mongoClientPromise = clientPromise
    }

    clientPromise = global._mongoClientPromise
}else{
    clientPromise = client.connect()
}

console.log("MongoDB Client Promise: ", clientPromise);

export default clientPromise;