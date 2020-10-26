const express = require("express")
const pR = require("./routers/projectsRouter")

const server = express();

server.use(express.json());
server.use("/projects", pR)

const port = 2000;

server.listen(port, ()=> {
    console.log(`Server is running at http://localhost:${port}`)
});

module.exports = server