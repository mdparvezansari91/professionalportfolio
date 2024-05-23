const mongoose = require("mongoose");

const projectsSchema = new mongoose.Schema({
    projects: String,
    description:String,
});

const projects = mongoose.model('projects', projectsSchema);



module.exports = projects

