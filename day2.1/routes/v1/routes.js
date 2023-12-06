const express = require('express');
const router = express.Router();

const { Get , Post , Put ,Delete} = require('../../controller/requires.js')

router.get('/get',Get);
router.post('/post',Post);
router.put('/put',Put);
router.delete('/delete',Delete);

module.exports = router;