const express = require("express")
const db = require ("../data/config")

const router = express.Router()

router.get("/", async (req,res,next) => {
    try {

        const cars = await db("cars")
        res.json(cars)
        
    }catch (err) {
        next(err)
    }
})

router.post("/", async (req, res, next) => {
    try{

        const carsData = req.body
		const [id] = await db("cars").insert(carsData)
        const carList = await db("cars") 
        
		res.status(201).json(carList)

    }
    catch(err) {
        next(err)
    }
})

module.exports = router