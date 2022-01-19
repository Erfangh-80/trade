import tradeModel from "../models/trade.js"

export async function insertTrade( userId, symbolId, dateTrade, typeTransaction) {

  try {
    const trade = await tradeModel.create(userId, symbolId, dateTrade, typeTransaction);
    return trade;

  } catch (error) {
    console.log(error);

  }

}

export default async function getTrade() {
  try {

    const allTrade = await tradeModel.find();
    return allTrade;

  } catch (error) {
    console.log(error);
  }
}

export async function findTrade(id) {
  try {

    const trade = await tradeModel.findById({ _id: id });
    return trade;
  } catch (error) {
    console.log(error);
  }
}

export async function getTradeUser(userid) {
  try {

    const userTrade = await tradeModel.find({ userId: userid });
    return userTrade;

  } catch (error) {
    console.log(error);
  }
}