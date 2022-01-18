import momentHistoryModel from "../models/momentHistory.js";



export async function insertMomentHistory(symbolId, userId, momentDate, numberTransaction, valueTransaction, volumeTransaction, priceMin, priceMax){

  try {
    const momentHistory = await momentHistoryModel.create(symbolId, userId, momentDate, numberTransaction, valueTransaction, volumeTransaction, priceMin, priceMax);

    return momentHistory;

  } catch (error) {
    console.log(error);
  }

}


export default async function getAllHistoryMoment() {
  try {
    const momentHistory = await momentHistoryModel.find();
    return momentHistory;

  } catch (error) {
    console.log(error);
  }

}

