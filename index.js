const express =require("express")
const app=express();
const cors=require("cors")
const bodyparser=require("body-parser");
const bodyParser = require("body-parser");
const port= process.env.port||4000;
const mongoose=require("mongoose")
const content=require("./schema");
const Content = require("./schema");

app.use(bodyparser.urlencoded({
    extended:true
}))
app.use(bodyParser.json())

app.use(cors())
mongoose.connect("mongodb+srv://perikalaspandana271:react@cluster0.chrglgr.mongodb.net/firstdb?retryWrites=true&w=majority")
.then(()=>{
    console.log("MongoDB connected successfully")
})
.catch((err)=>{
    console.log(err)
})

app.get("/",(req,res)=>{
    res.send("API is working")
})
app.get("/users",async(req,res)=>{
    await Content.find()
      .then(found=>res.json(found))
})

app.post("/store",(req,res)=>{
    const {username,password}=req.body
    const newData=new Content({
        username,password
    })
    newData.save()
})
app.listen(port,()=>console.log("server running port"))