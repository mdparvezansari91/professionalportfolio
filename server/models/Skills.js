const mongoose = require("mongoose");

const skillsSchema = new mongoose.Schema({
    Name: String
});

const skills = mongoose.model('skills', skillsSchema);



module.exports = skills