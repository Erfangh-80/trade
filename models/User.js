import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const users = new Schema({
  firstName : {
    type : String,
    required : true,
    maxlength : 40
  },
  lastName : {
    type : String,
    required : true,
    maxlength : 100
  },
  phone : {
    type : String,
    required : true,
    maxlength : 11
  },
  email : {
    type : String,
    required : true,
    maxlength : 50
  },
  userName : {
    type : String,
    required : true,
    maxlength : 20
  },
  password : {
    type : String,
    required : true,
    maxlength : 20
  }
});

export default mongoose.model('User', users);

// module.exports = userModel;