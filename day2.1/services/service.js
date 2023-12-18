const User = require('../model/model.js');

class service{
    
    async readUser(){
        try {
            let lisUser = await User.find()
            return lisUser;
        } catch (error) {
            throw error;
        }
    }
    createUser = async (data)=>{
        try{
            let name = data.name;
            let age = data.age;
            let phoneNumber = data.phoneNumber;
            let email = data.email;
            let address = data.address;
            let sex = data.sex;
            let user = new User({
                name : name,
                age : age,
                phoneNumber :phoneNumber,
                email : email,
                address : address,
                sex : sex
            })
            await user.save();
            return user;
        }
        catch(e){

        }
    }

    updateUser = (data) =>{
        try{
            let name = data.name;
            let age = data.age;

            //call model
            let c =User.updateOne({name : name},{ age :age})
            return c
        }
        catch(e){

        }
    }
    deleteUser = (name) =>{
        try{     
          let c =   User.deleteOne({name : name })
            //call model
            return c
        }
        catch(e){

        }
    }

}
module.exports = service;