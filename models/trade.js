import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const trades = new Schema({
  userId : {
    type : mongoose.Types.ObjectId,
    ref : 'User',
    required : true
  },
  shareCode : {
    type : mongoose.Types.ObjectId,
    ref : 'Symbol',
    required : true
  },
  dateTrade : {
    type : Date,
    default : Date.now(),
    required : true
  },
  typeTransaction : {
    type : String,
    required : true
  },
})

export default mongoose.model('Trades', trades);

// module.exports = tradeModel;
