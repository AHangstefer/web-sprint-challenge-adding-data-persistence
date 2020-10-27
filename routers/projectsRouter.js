express = require("express")
const db = require("../data/config")
const router = express.Router()

//  adding resources.
//  retrieving a list of resources.
//  adding projects.
//  retrieving a list of projects.
//  adding tasks.
//  retrieving a list of tasks. 
//  The list of tasks should include the project name and project description.

router.get("/", async (req, res, next)=> {
    try{
        const projects = await db.select("*")
            .from("projects")
            res.json(projects)

    }
    catch(err){
        next(err)
    }
})

router.post("/", async (req, res, next)=> {
    try{
        const newProject = {
            name: req.body.name,
            description: req.body.description,
            completed: req.body.completed
        }

        if(!newProject.name){
            return res.status(404).json({
                message: "name is required"
            })
        }

        const [id] = await db
            .insert(newProject)
            .into("projects")

        const project = await db   
            .select("*")
            .from("projects")
            .where("id", id)

        res.status(201).json(project)
    }
    catch(err){
        next(err)
    }
})





module.exports = router