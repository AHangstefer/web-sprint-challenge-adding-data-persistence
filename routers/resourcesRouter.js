express = require("express")
const db = require("../data/config")
const router = express.Router()


router.get("/", async (req, res, next)=> {
    try{
        const resources = await db.select("*")
            .from("resources")
            res.json(resources)
    }
    catch(err){
        next(err)
    }
})

router.post("/", async (req, res, next)=> {
    try{
        const newSource = {
            name: req.body.name,
            resource_description: req.body.resource_description
        }

        if(!newSource.name || !newSource.resource_description){
            return res.status(404).json({
                message: "name and description are required"
            })
        }

        const [id] = await db
            .insert(newSource)
            .into("resources")

        const resource = await db   
            .select("*")
            .from("resources")
            .where("id", id)

        res.status(201).json(resource)
    }
    catch(err){
        next(err)
    }
})

module.exports = router