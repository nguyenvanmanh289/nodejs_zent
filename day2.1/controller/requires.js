const { json } = require("body-parser")
const err = require("./middleware/errorHanding")

class DO{

    Get = (req,res,next)=>{
        try{
            res.write('<html> <form action="http://localhost:81/home/customer/get" method="GET"><input type="text" name="name" /><input type="submit" value="send" /></form></html>')
            res.end()
            console.log("name: ",req.query.name)
            //fake 1 err pass to express
            //throw new error("fake err")
        }
        catch(err){
            // handle err handmade at here
                //...
            //auto passing to express
            next(err);
        }
        
    }
    Post = (req,res)=>{
        try {
            object = {
                name: req.body.name,
                age: req.body.age
            }
            res.json(object);
            console.log(req.body)
        }
        catch(err){
            // handle err handmade at here
                //...
            //auto passing to express
            next(err);
        }
        
    }
    Put = (req,res)=>{
        //try{}
        object = {
            name: req.body.name,
            age: req.body.age
        }
        res.json(object);
        //catch
    }
    Delete = (req,res)=>{
        //fake err test
        throw new err("fake err")
        res.send(req.query.name)
    }
}

module.exports = DO;


