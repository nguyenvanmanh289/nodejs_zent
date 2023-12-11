const express = require('express');
const router = express.Router();

const DO = require('../../controller/requires.js')
const ob = new DO();

router.get('/get',ob.Get);
router.post('/post',ob.Post);
router.put('/put',ob.Put);
router.delete('/delete',ob.Delete);

module.exports = router;