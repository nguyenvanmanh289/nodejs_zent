const userLogin = require('../model/loginModel.js');
let userLoginer = new userLogin();
class loginService{
    async read({username,password}){
        let check = await userLogin.find({username : username , password: password})
        if(check.length>0){
            return true;
        }
        else{
            return false;
        }
    }   
    async create({username,password}){
        let isfound = await userLogin.find({username : username})
        
        if(isfound.length>0){
            return(false)
        }
        else{
            userLoginer.username = username;
            userLoginer.password = password;
            let check = await userLoginer.save();
            if (check) {
                return true;
            }
            else {
                return false;
            }
        }
        
    }
    async update({username,password}){
        let check = await userLogin.updateOne({username : username }, {password: password})
        if(check!={username,password}){
            return("up date thanh cong")
        }
        else{
            return('that bai')
        }
    }
    async delete({username,passwork}){
        let check = await userLogin.deleteOne({username : username})
        if(check){
            return("xoa thanh cong")
        }
        else{
            return('xoa that bai')
        }
    }
}

module.exports = loginService;