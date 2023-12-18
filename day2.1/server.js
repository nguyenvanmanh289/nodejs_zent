const express = require('express')
const app = express();
const err = require('./controller/middleware/errorHanding');
const connect = require('./configs/mongodb/index.js');
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.json())

const route = require('./routes/v1/index');
const route2 = require('./routes/v2/index');
let port = 81;

app.use('/home',route);
app.use('/home',route2);
app.use(err);
connect();
app.listen(port,()=>{
    console.log(`server run at localhost:${port}`)
})