const express = require("express")
const pR = require("./routers/projectsRouter")
const rR = require("./routers/resourcesRouter")
const tR = require("./routers/tasksRouter")

const server = express();

server.use(express.json());
server.use("/projects", pR)
server.use("/resources", rR)
server.use("/tasks", tR)

const port = 2000;

server.listen(port, ()=> {
    console.log(`Server is running at http://localhost:${port}`)
});

module.exports = server