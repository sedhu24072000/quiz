const Question = require('./model')

exports.getQuestion = async(req,res) =>{
    try{
        const question = await Question.find({}).select('question options correctOption points')
        res.status(200).json({
            status:'success',
            result: question.length,
            question
        })
    }catch(err){
       res.status(400).json({
        status:'failed'
       })
    }
}

exports.createQuestion = async(req,res) =>{
    try{
        const {question,options,correctOption,points} = req.body
        const createQuestion = await Question.create({question,options,correctOption,points})
        res.status(201).json({
            status : 'success',
            data : createQuestion
        })
    }catch(err){
        res.status(400).json({
            status:'failed'
        })
    }
}