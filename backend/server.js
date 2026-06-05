const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const Skill = require("./models/skill");
const Project = require("./models/project");

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://mongo:27017/portfolioDB");

const db = mongoose.connection;

db.once("open", () => {
    console.log("MongoDB verbonden!");
});

app.get("/api", (req, res) => {

    console.log("testing");

    res.json({
        message: "Hallo vanuit de backend!"
    });

});

app.get("/skills", async (req, res) => {

    try {

        const skills = await Skill.find();

        res.json(skills);

    }
    catch(error) {

    console.log(error);

    res.status(500).json({
        message: "Fout bij ophalen van skills",
        error: error.message
    });

}

});

app.get("/projects", async (req, res) => {

    try {

        const projects = await Project.find();

        res.json(projects);

    }
    catch(error) {

        res.status(500).json({
            message: "Fout bij ophalen van projecten",
            error
        });

    }

});

app.listen(5000, () => {
    console.log("Server draait op poort 5000");
});