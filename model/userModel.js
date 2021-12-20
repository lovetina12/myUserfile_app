const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    firstName: {
        type: String,
       // require:true
    },
    lastName: {
        type: String,
        require: true
    },
    school: {
        type: String,
        require:true
    },
    dateOfBirth:{
        type: Date,
        default: Date.now()
    }
  
});

module.exports = mongoose.model('userModel', userSchema);