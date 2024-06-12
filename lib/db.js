
const { MONGODB_USER, MONGODB_PASS, MONGODB_NAME } = process.env;

export const MONGODB_URI = `mongodb+srv://${MONGODB_USER}:${MONGODB_PASS}@mycluster.dosvils.mongodb.net/${MONGODB_NAME}?retryWrites=true&w=majority&appName=MyCluster`;


