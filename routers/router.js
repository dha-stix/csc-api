const express = require("express")
const app = express()
const Question = require("../models/questions")

app.get("/questions", async(req,res) => {
try {
    let new_question = await Question.find()
    return res.status(201).json({
        message: "Doc successfully created",
        doc : new_question
     })
} catch (error) {
    return res.status(
        {
            error : error
        }
    )
}
   
})

//GET INDIVIDUAL QUESTION

app.get("/questions/:coursecode", async(req,res) => {
    const coursecode = req.params.coursecode
    try {
        let new_question = await Question.find({coursecode})
        return res.status(201).json({
            message: "Doc successfully created",
            doc : new_question
         })
    } catch (error) {
        return res.status(
            {
                error : error
            }
        )
    }
       
    })
module.exports = app
