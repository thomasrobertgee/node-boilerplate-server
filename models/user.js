const mongoose = require('mongoose')
// Schema is what we use to tell mongoose what particular fields our model is going to have
const Schema = mongoose.Schema
const bcrypt = require('bcrypt-nodejs')

// Define our model
const userSchema = new Schema({
  email: { type: String, unique: true, lowercase: true }, // ensures unique emails are all lowercase to avoid duplication
  password: String
})

// On Save Hook, encrypt password
// before saving a model, run this function
userSchema.pre('save', function(next) {
  // get access to the user model
  const user = this

  // generate a salt then run callback
  bcrypt.genSalt(10, function(err, salt) {
    if (err) { return next(err) }

    // hash our password using the salt
    bcrypt.hash(user.password, salt, null, function(err, hash) {
      if (err) { return next(err) }

      // overwrite plain text password with hashed password
      user.password = hash

      // save and go forth
      next()
    })
  })
})

userSchema.methods.comparePassword = function(candidatePassword, callback) {
  bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
    if (err) { return callback(err) }

    callback(null, isMatch)
  })
}


// Create the model class
const ModelClass = mongoose.model('user', userSchema) // loads the schema into mongoose, tells mongoose there is a new model called userSchema and taht it corresponds to a collection called user


// Export the model
module.exports = ModelClass


// mkdir -p /data/db
//
// sudo chown -R $USER /data/db
