import mongoose from 'mongoose';

const Schema = mongoose.Schema;


const symbol = new Schema({
  SymbolName : {
    type : String,
    required : true,
    maxlength : 120 
  },
  Date : {
    type : Date,
    required : true,
    maxlength : 120 
  },
  Price : {
    type : Number,
    required : true,
  },
  Pmax :{
    type : Number,
  },
  Pmin :{
    type : Number,
  },
});

export default mongoose.model('Symbol',symbol);