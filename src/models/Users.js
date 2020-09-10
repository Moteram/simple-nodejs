const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({

  nome:{
    type: String,
    required: true,
  },  
  senha:{
    type: String,
    required: true,
  },
  email:{
    type: String,
    required: true,
  },
  createdAt:{
    type: Date,
    default: Date.now,
  }

});
mongoose.model('Users', UserSchema);