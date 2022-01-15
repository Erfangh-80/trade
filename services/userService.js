import userModel from '../models/User.js';

export async function insertUser(firstName, lastName, phone, email, userName, password){
  const newUser = await userModel.create(firstName, lastName, phone, email, userName, password);
  return newUser;
}

export default async function getListUser() {
  const userList = await userModel.find();
  return userList;
}

export async function FindUser(id) {
  const user = await userModel.findById(id);
  return user;
}