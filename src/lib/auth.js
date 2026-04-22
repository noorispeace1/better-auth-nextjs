import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

const client = new MongoClient(process.env.AUTH_DB_URI);
const db = client.db('better_auth');

export const auth = betterAuth({
db:mongodbAdapter(db,{
  client
}),
emailAndPassword:{
  enabled:true,
  
},
database:mongodbAdapter(db,{
  client
}),
   
});



/**
 * /1.better auth: install
 * /2.env variables:
 * /BETTER_AUTH_SECRET
 * 
 * /-BETTER_AUTH_URL

 * 
 */