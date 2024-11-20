const mongoose = require('mongoose')

const app = require('./app')

const DB = 'mongodb+srv://sedhu:sedhumadhavan@cluster0.rokjl.mongodb.net/quiz?retryWrites=true&w=majority&appName=Cluster0'

mongoose.connect(DB).then(()=> console.log("DB connected successfully!")).catch((err) => console.log(err))

const port =8000
app.listen(port, () => {
    console.log(`Server is running on ${port}`);
  });
