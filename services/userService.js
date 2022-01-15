import UserModel from '../models/User.js';
import bcryptjs from 'bcryptjs'

export async function insertUser(firstName, lastName, phone, email, userName, password) {
  const newUser = await UserModel.create(firstName, lastName, phone, email, userName, password);
  return newUser;
}

export default async function getListUser() {
  const userList = await UserModel.find();
  return userList;
}

export async function FindUser(id) {
  const user = await UserModel.findById(id);
  return user;
}

export async function UpdateUser(id, firstName, lastName, phone, email, userName, password) {
  try{
    const userEdit = await UserModel.findByIdAndUpdate({id}, {
      $set: {
        firstName : firstName,
        lastName : lastName,
        phone : phone,
        email : email,
        userName : userName,
        password : password,
      }
    });
    return userEdit;
  }catch(err){
    console.log(err);
  }
  
}


export async function DeleteUser(id){
  try {
    
    const deleteUser = await UserModel.findByIdAndDelete(id);
    return deleteUser;

  } catch (error) {
    console.log(error);
  }
}

export async function LoginUser(userName , password){
  try {
    const user = await UserModel.findOne(userName);
    if(!user){
      return 400;
    }
    const checkPassword = await bcryptjs.compare(password, User.password);
    if (!checkPassword){
      return 400;
    }
    return 200;

  } catch (error) {
    console.log(error);
  }
}
