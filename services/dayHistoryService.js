import dayHistoryModel from '../models/dayHistory.js'

export async function insertDayHistory(symbolId, userId, toDay, numberTransaction, valueTransaction, volumeTransaction, priceMin, priceMax, PriceYesterday) {

  try {
    const dayHistory = await dayHistoryModel.create(symbolId, userId, toDay, numberTransaction, valueTransaction, volumeTransaction, priceMin, priceMax, PriceYesterday);

    return dayHistory;

  } catch (error) {
    console.log(error);
  }
}

export default async function getHistory() {
  try {
    const allHistory = await dayHistoryModel.find();
    return allHistory;

  } catch (error) {
    console.log(error);
  }

}

export async function findDayHistory(date) {
  try {
    const dateHistory = await dayHistoryModel.find({ toDay : date});
    return dateHistory;

  } catch (error) {
    console.log(error);
  }

}

export async function findUserHistory(id) {
  try {
    const userHistory = await dayHistoryModel.find({ userId : id});
    return userHistory;
  } catch (error) {
    console.log(error);
  }


}

