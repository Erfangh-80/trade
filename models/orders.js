import mongoose from 'mongoose';

const Schema = mongoose.Schema;


const order = new Schema({
  deliveryTime : {
    type : Date,
    required : true,
    default : Date.now(),
  },
  userId : {
    type : mongoose.Types.ObjectId,
    ref : 'User',
    required : true
  },
  symbolId : {
    type : mongoose.Types.ObjectId,
    ref : 'Symbol',
    required : true
  },
});

export default mongoose.model('Order', order);