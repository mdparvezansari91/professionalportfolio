//Express Codes
const express = require("express");
const app = express()
const port = 5000

app.use(express.urlencoded({ extended: true }));
app.use(express.json())
//MongoDB
const mongoose = require("mongoose");
const skillModel  = require("./models/Skills");
const certifications = require("./models/certifications");
const projectModel = require("./models/Projects")

mongoose.connect('mongodb://localhost:27017/portfolio')
.then(()=>{console.log("Database connected")
})
.catch(e=>{
    console.log(e)
})


app.get("/skills",async (req,res)=>{
    skillModel.find()
    .then(skills=>res.json(skills))
    .catch(err=>res.json(err))
})

app.get("/certifications", async (req,res)=>{
    const certification = await certifications.find({})
    res.json(certification)
})

app.get("/projects", async (req,res)=>{
    const projects = await projectModel.find({})
    res.json(projects)
})

app.get("/projects/:id", async (req,res)=>{
    console.log(req.params)
    
})

app.listen(port,()=>{
    console.log(`app is listening on ${port}`)
})