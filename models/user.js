const mongoose = require('moongose')

//used to tell the very particular fields our modules is going to have
const Schema = moongose.Schema

//Define our model
const userSchema = new Schema({
    email: { type: String, unique: true, lowercase: true },
    password: String
})

//Create the model class
const ModelClass = mongoose.model('user', userSchema);

//Export the model
module.exports = ModelClass;
