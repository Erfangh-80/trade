import symbolModel from "../models/symbol.js";


export async function insertSymbol(SymbolName, Date, Price, Pmax, Pmin){
  try {
    const newSymbol = await symbolModel.create(SymbolName, Date, Price, Pmax, Pmin);
    return newSymbol;
  } catch (error) {
    console.log(error);
  }
}

export default async function getSymbol(){
  try {
    const listSymbol = await symbolModel.find();
    return listSymbol;
  } catch (error) {
    console.log(error);
  }
}

export async function findSymbol(id){
  try {
    const symbol = await symbolModel.find({_id : id});
    return symbol;
  } catch (error) {
    console.log(error);
  }
}

export async function UpdateSymbol(id, SymbolName, Date, Price, Pmax, Pmin) {
  try{
    const symbolEdit = await UserModel.findByIdAndUpdate({id}, {
      $set: {
        SymbolName : SymbolName,
        Date : Date,
        Price : Price,
        Pmax : Pmax,
        Pmin : Pmin,
      }
    });
    return symbolEdit;
  }catch(err){
    console.log(err);
  }
  
}


export async function DeleteSymbol(id){
  try {
    
    const deleteSymbol = await symbolModel.findByIdAndDelete(id);
    return deleteSymbol;

  } catch (error) {
    console.log(error);
  }
}