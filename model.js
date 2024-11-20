const mongoose = require('mongoose')

const QuestionSchema = new mongoose.Schema({
  question: String,
  options :{
    type: [String]
  },
  correctOption : Number,
  points : Number
})

const Question = mongoose.model('Question', QuestionSchema)

module.exports= Question

// QuestionSchema.set('toJSON', {
//     transform: (doc, ret) => {
//       delete ret._id; // Remove _id field from the response
//       return ret;
//     }
//   });