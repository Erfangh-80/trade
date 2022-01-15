import Services from '../services/userService.js';
import bcryptjs from 'bcryptjs';

class UserController {
  async CreateUser(req, res) {
    const { firstName, lastName, phone, email, userName, password } = req.body;
    const salt = await bcryptjs.getSalt();
    const passwordHash = await bcryptjs.hash(password, salt);
    password = passwordHash;
    
    try {
      const newUser = await Services.insertUser(firstName, lastName, phone, email, userName, password);
      res.status(201).json(newUser);
    } catch (error) {
      console.log(error);
    }
  }

  async getUserList(req,res){
    const userList = await Services.getListUser();
    if(userList.length == 0){
      return res.status(200).json({message : 'کاربری پیدا شند'});
    }
    return res.status(200).json(userList);
  }

  async getFindUser(req,res){
    const user = await Services.FindUser(req.params.id);
    if(user.length == 0){
      return res.status(200).json({message : 'چنین کاربری یافت نشد'});
    }
    return res.status(200).json(user);
  }

  
}



export default UserController;
