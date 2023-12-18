const express = require('express');
const router = express.Router();

const {CUSTOMER} = require('../../controller/requires.js')
const ob = new CUSTOMER();

router.get('/get',ob.read);
router.post('/post',ob.create);
router.put('/put',ob.update);
router.delete('/delete',ob.Delete);
router.get("",(req,res)=>{
    res.send('no data')
})
module.exports = router;