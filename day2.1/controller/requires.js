const { json } = require("body-parser")


const Get = (req,res)=>{
    res.write('<html> <form action="http://localhost:81/home/customer/get" method="GET"><input type="text" name="name" /><input type="submit" value="send" /></form></html>')
    res.end()
    console.log("name: ",req.query.name)
}
const Post = (req,res)=>{
    object = {
        name: req.body.name,
        age: req.body.age
    }
    res.json(object);
    console.log(req.body)
}
const Put = (req,res)=>{
    object = {
        name: req.body.name,
        age: req.body.age
    }
    res.json(object);
}
const Delete = (req,res)=>{
    res.send(req.query.name)
}

module.exports = {Get , Post ,Put , Delete};