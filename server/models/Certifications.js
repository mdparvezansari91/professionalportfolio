const mongoose = require("mongoose");

const certificationSchema = new mongoose.Schema({
    Course_Name: String,
    Institute: String,
    Url:String,
    certificateURL:String,
});

const certifications = mongoose.model('certifications', certificationSchema);



module.exports = certifications