const express = require('express');
const router = express.Router();

const {PRODUCT} = require('../../controller/requires.js')
const ob = new PRODUCT();

router.get('/get',ob.read);
router.post('/post',ob.create);
router.put('/put',ob.update);
router.delete('/delete',ob.Delete);

module.exports = router;