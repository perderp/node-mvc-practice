const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    first_name : String,
    last_name : String,
    age:{type:Number , default: 1 }
})
let User = mongoose.model('User', userSchema)


module.exports = { User }