import mongoose, { Types } from 'mongoose';

const Schema = mongoose.Schema;

const dayHistory = new Schema({
  symbolId : {
    type : Types.ObjectId,
    ref : 'Symbol',
    required : true
  },
  toDay : {
    type : Date,
    required : true,
    default : Date.now(),
  },
  numberTransaction : {
    type : Number,
    required : true
  },
  valueTransaction : {
    type : Number,
    required : true
  },
  volumeTransaction : {
    type : Number,
    required : true
  },
  priceMin : {
    type : Number,
    required : true
  },
  priceMax : {
    type : Number,
    required : true
  },
  PriceYesterday : {
    type : Number,
    required : true
  }
});

export default mongoose.model('DayHistory', dayHistory);

