import tradeService from "../services/tradeService.js";


class orderController {

  async createTrade(req, res) {
    const { userId, symbolId, dateTrade, typeTransaction } = req.body;

    try {
      const newTrade = await tradeService.insertTrade(userId, symbolId, dateTrade, typeTransaction);
      res.status(201).json(newTrade);
    } catch (error) {
      res.status(401).json({message : error.message});
    }
  }

  async getAllTrade(req,res){
    try {
      const allTrade = await tradeService.getTrade();

      if(allTrade.length == 0){
        res.status(200).json({message : "یافت نشد"});  
      }
      res.status(200).json(allTrade);
    } catch (error) {
      res.status().json({error: error.message})
    }
  }

  async getFindTrade(req,res){
    const tradeId = req.body.id
    try {
      const trade = await tradeService.findTrade(tradeId);

      if(trade.length == 0){
        res.status(200).json({message : " یافت نشد"});  
      }
      res.status(200).json(trade);
    } catch (error) {
      res.status().json({error: error.message})
    }
  }

  async findUserTrade(req,res){
    const userId = req.body.userId
    try {
      const userTrade = await tradeService.getTradeUser(userId);

      if(userTrade.length == 0){
        res.status(200).json({message : "این شخص تریدی انجام نداده"});  
      }
      res.status(200).json(userTrade);
    } catch (error) {
      res.status().json({error: error.message})
    }
  }
}


export default orderController;