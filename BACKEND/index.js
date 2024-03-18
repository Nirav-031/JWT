require('dotenv').config();
const express=require("express");
const app=express();
const connection=require("../JWT/db/connection");
const router=require("./routes/route");
const errorMiddelware = require('./errorMiddelware');

app.use(express.json());
app.use("/api/v1",router);
app.use(errorMiddelware);






connection()
.then(()=>console.log("connected")
)
.then(()=>app.listen(3000,()=>console.log("listening")
))
.catch((e)=>console.log(e)
);