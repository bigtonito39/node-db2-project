const express = require ("express")
const helmet = require ("helmet")
const carsRouter = require("./cars/cars-router")
const welcomeRouter = require("./welcome/welcome-router")

const server = express()

const port = 5000

server.use(helmet())
server.use(express.json())

server.use("/", welcomeRouter)
server.use("/cars",carsRouter )


server.listen(port, () => {
    console.log(`running at http://localhost:${port}`)
})