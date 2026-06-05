const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema({
    naam: String,
    beschrijving: String,
    technologie: String
});

module.exports = mongoose.model("Project", ProjectSchema);