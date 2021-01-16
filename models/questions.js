const mongoose = require("mongoose")

const questionSchema = mongoose.Schema({
    question: String,
    answer: String,
    coursecode: Number
})

const Question = mongoose.model("question-pack", questionSchema)

module.exports = Question