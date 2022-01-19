import  mongoose  from 'mongoose';

const Schema = mongoose.Schema;

const dayHistory = new Schema({
  symbolId : {
    type : mongoose.Schema.Types.ObjectId,
    ref : 'Symbol',
    required : true
  },
  userId : {
    type : mongoose.Schema.Types.ObjectId,
    ref : 'User',
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

