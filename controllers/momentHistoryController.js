import momentHistory from "../models/momentHistory.js";
import momentServices from "../services/momentHistoryService.js"

class momentHistoryController {

  async createMoment(req,res){
    const {symbolId, userId, momentDate, numberTransaction, valueTransaction, volumeTransaction, priceMin, priceMax} = req.body;

    try {
      const newMomentHistory = await momentServices.insertMomentHistory(symbolId, userId, momentDate, numberTransaction, valueTransaction, volumeTransaction, priceMin, priceMax);
      
      res.status(201).json(newMomentHistory);

    } catch (error) {
      res.status(401).json({ message: error.message });
    }

  }

  async getAllMomentHistory(req,res){

    try {
      const allMomentHistory = await momentServices.getAllHistoryMoment();
      if (allMomentHistory.length == 0) {
        res.status(200).json({ message: 'هیچ تاریخچه ای وجود ندارد' })
      }
      res.status(200).json(allMomentHistory);

    } catch (error) {
      res.status(404).json({ message: error.message })
    }
  }

  
}


export default momentHistoryController;