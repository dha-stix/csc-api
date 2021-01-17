const express = require("express")
const mongoose = require("mongoose")
const app = express()
const PORT =  process.env.PORT || 4000
const otherRoutes = require("./routers/router")
const cors = require("cors")
const bodyParser =  require("body-parser")
const dotenv = require("dotenv")
//MIDDLEWARES
dotenv.config()
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
mongoose.connect(process.env.DB_PW, { useNewUrlParser: true, useUnifiedTopology: true }, console.log("Database Connected"))


app.use(otherRoutes)

app.listen(PORT, console.log(`Connected to PORT ${PORT}`))
