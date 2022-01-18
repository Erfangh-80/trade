import Services from '../services/dayHistoryService.js'


class dayHistoryController {

  async createDayHistory(req, res) {
    const { symbolId, userId, toDay, numberTransaction, valueTransaction, volumeTransaction, priceMin, priceMax, PriceYesterday } = req.body;

    try {
      const newDHistory = await Services.insertDayHistory(symbolId, userId, toDay, numberTransaction, valueTransaction, volumeTransaction, priceMin, priceMax, PriceYesterday);

      res.status(201).json(newDHistory);

    } catch (error) {
      res.status(401).json({ message: error.message });
    }
  }

  async getAllHistory(req, res) {
    try {
      const dayHistory = await Services.getHistory();

      if (dayHistory.length == 0) {
        res.status(200).json({ message: 'هیچ تاریخچه ای وجود ندارد' })
      }
      res.status(200).json(dayHistory);

    } catch (error) {
      res.status(404).json({ message: error.message })
    }
  }

  async getHistoryDate(req, res) {
    const date = req.body.date;

    try {
      const historyDate = await Services.findDayHistory(date);

      if (dayHistory.length == 0) {
        res.status(200).json({ message: 'هیچ تاریخچه ای وجود ندارد' })
      }
      res.status(200).json(dayHistory);

    } catch (error) {
      res.status(404).json({ message: error.message })
    }

  }


  async getHistoryUser(req, res) {
    const userid = req.body.userId;

    try {
      const userHistory = await Services.findUserHistory(userid);
      if (dayHistory.length == 0) {
        res.status(200).json({ message: 'هیچ تاریخچه ای وجود ندارد' })
      }
      res.status(200).json(dayHistory);

    } catch (error) {
      res.status(404).json({ message: error.message })
    }


  }
}

export default dayHistoryController;
