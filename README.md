voor de database te vullen:
createProjects.js: db.createCollection("projects");
createskill.js db.createCollection("skills");
insertProjects.js: db.projects.insertMany([
{
    title: "Portfolio Website",
    description: "Website gemaakt met HTML CSS"
},
{
    title: "Leerlingensysteem",
    description: "WPF project in C#"
}
]);
insertSkills.js: db.skills.insertMany([
{
    name: "HTML",
    skillLevel: 8,
    category: "Frontend"
},
{
    name: "CSS",
    skillLevel: 8,
    category: "Frontend"
},
{
    name: "JavaScript",
    skillLevel: 7,
    category: "Programming"
},
{
    name: "C#",
    skillLevel: 7,
    category: "Programming"
}
]);
