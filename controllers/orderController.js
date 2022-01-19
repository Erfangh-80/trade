import orderService from "../services/orderService.js";


class orderController {

  async createOrder(req, res) {
    const { deliveryTime, userId, symbolId } = req.body;

    try {
      const newOrder = await orderService.insertOrder(deliveryTime, userId, symbolId);
      res.status(201).json(newOrder);
    } catch (error) {
      res.status(401).json({message : error.message});
    }
  }

  async getAllOrder(req,res){
    try {
      const listOrder = await orderService.getOrder();

      if(listOrder.length == 0){
        res.status(200).json({message : "سفارشی وجود ندارد"});  
      }
      res.status(200).json(listOrder);
    } catch (error) {
      res.status().json({error: error.message})
    }
  }

  async getFindOrder(req,res){
    const oerderId = req.body.id
    try {
      const order = await orderService.findOrder(oerderId);

      if(order.length == 0){
        res.status(200).json({message : "سفارشی یافت نشد"});  
      }
      res.status(200).json(order);
    } catch (error) {
      res.status().json({error: error.message})
    }
  }

  async findUserOrder(req,res){
    const userId = req.body.userId
    try {
      const userOrder = await orderService.getOrderUser(userId);

      if(userOrder.length == 0){
        res.status(200).json({message : "سفارشی برای این شخص وجود ندارد"});  
      }
      res.status(200).json(userOrder);
    } catch (error) {
      res.status().json({error: error.message})
    }
  }
}


export default orderController;