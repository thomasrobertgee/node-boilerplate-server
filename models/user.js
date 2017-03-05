const mongoose = require('mongoose')
// Schema is what we use to tell mongoose what particular fields our model is going to have
const Schema = mongoose.Schema

// Define our model
const userSchema = new Schema({
  email: { type: String, unique: true, lowercase: true }, // ensures unique emails are all lowercase to avoid duplication
  password: String
})


// Create the model class
const ModelClass = mongoose.model('user', userSchema) // loads the schema into mongoose, tells mongoose there is a new model called userSchema and taht it corresponds to a collection called user


// Export the model
module.exports = ModelClass
