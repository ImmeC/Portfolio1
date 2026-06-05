db = db.getSiblingDB("portfolioDB");

db.skills.insertMany([
    {
        name: "HTML",
        level: "Goed"
    },
    {
        name: "CSS",
        level: "Goed"
    },
    {
        name: "JavaScript",
        level: "Basis"
    }
]);