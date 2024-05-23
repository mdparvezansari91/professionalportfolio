//MongoDB
const mongoose = require('mongoose');
function mongoosecon(){

    mongoose.connect("mongodb://localhost:27017/portfolio")
    .then(()=>{console.log("connected to Database")})
    .catch((e)=>{console.log(e)})}


mongoosecon()

module.exports = mongoosecon;