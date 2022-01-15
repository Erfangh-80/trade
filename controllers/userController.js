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

  async UserList(req, res) {
    const userList = await Services.getListUser();
    if (userList.length == 0) {
      return res.status(200).json({ message: 'کاربری پیدا شند' });
    }
    return res.status(200).json(userList);
  }

  async FindUser(req, res) {
    const user = await Services.FindUser(req.params.id);
    if (user.length == 0) {
      return res.status(200).json({ message: 'چنین کاربری یافت نشد' });
    }
    return res.status(200).json(user);
  }

  async EditUser(req, res) {
    const { firstName, lastName, phone, email, userName, password } = req.body;

    try {
      const editUser = await Services.UpdateUser(req.params.id, firstName, lastName, phone, email, userName, password);
      res.status(201).json(editUser);
    } catch (error) {
      console.log(error);
    }

  }


  async DeleteUser(req, res){
    try {
      const deleteUser = await Services.DeleteUser(req.params.id);
      if (deleteUser == null){
        res.status(404).json({message : 'چنین شخصی پیدا نشد'});
      }
      res.status(200).json({message : 'با موفقیت حذف شد'})
    } catch (error) {
      console.log(error);
      res.status(404).json({message : 'چنین شخصی پیدا نشد'});
    }
  }
}



export default UserController;
