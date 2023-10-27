import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import path from 'path';
import { MongoClient} from "mongodb";
import "./config/index.mjs";


const app = express();
const port = process.env.PORT ||  3000;
const uri = process.env.MONGO_DB_URI;

//  Middlewares...

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(process.cwd() + "/public" )));

// mongodb initialization...

const client = new MongoClient(uri);
  
 await client.connect().then(()=>{
    client.db('socialapp').command({ ping: 1 });
    console.log('connect database sucessfully !');
 }).catch(()=>{
    console.log('database do not connected try again !');
});

// const DB_Collection = client.db('').collection('');

app.post("/",(req,rep)=>{
    rep.send("hello_world")
})

app.listen(port, () => {
    console.log("Server started");
});