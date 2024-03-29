const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Creating the model

const UserSchema = new Schema({
  name:{
    type:String,
     required : true
  },
  email:{
    type : String,
    required : true
  },
  password:{
    type : String,
    required : true
  },
  access:{
    type : String,
    required : true
  },
  access_level:{
    type : String,
    default:'uni'
  },
  date:{
    type :Date,
    default :Date.now
  }
});

mongoose.model('users',UserSchema);