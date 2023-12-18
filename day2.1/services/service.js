const User = require('../model/model.js');

class service{
    
    async readUser(){
        
        try {
            // let name = data.name;
            // let age = data.age;
            // Xử lý nghiệp vụ và tương tác với tầng model
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

            //call model
            let user = new User({
                name : name,
                age : age
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
            
          let c =   User.deleteOne({name : name , since : since})
            //call model
            return c
        }
        catch(e){

        }
    }

}

module.exports = service;