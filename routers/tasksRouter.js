express = require("express")
const db = require("../data/config")
const router = express.Router()

router.get ("/", async (req, res, next)=> {
    try{
        const tasks = await db   
            .select("*")
            .from("tasks")
            res.json(tasks)
            


    }
    catch(err){
        next(err)
    }
})


router.post("/", async (req, res, next)=> {
    try{
        const newTask = {
            task_description: req.body.task_description,
            task_complete: req.body.task_complete,
            project_id: req.body.project_id
        }

        if(!newTask.task_description || !newTask.project_id){
            return res.status(404).json({
                message: "description and project id are required"
            })
        }

        const [id] = await db
            .insert(newTask)
            .into("tasks")

        const task = await db   
            .select("*")
            .from("tasks")
            .where("id", id)

        res.status(201).json(task)
    }
    catch(err){
        next(err)
    }
})





module.exports =router