import orderModel from "../models/orders.js"

export async function insertOrder(deliveryTime, userId, symbolId){
  
  try {
    const order = await orderModel.create(deliveryTime, userId, symbolId);
    return order;

  } catch (error) {
    console.log(error);

  }

}

export async function getOrder(){
  try {
    
    const allOrder = await orderModel.find();
    return allOrder;

  } catch (error) {
    console.log(error);
  }
}

export async function findOrder(id){
  try {
    
    const order = await orderModel.findById({_id : id});
    return order;
  } catch (error) {
    console.log(error);
  }
}

export async function getOrderUser(userid){
  try {
    
    const userOrder = await orderModel.find({userId : userid});
    return userOrder;

  } catch (error) {
    console.log(error);
  }
}