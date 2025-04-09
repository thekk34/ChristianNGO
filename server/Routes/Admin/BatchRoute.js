const express = require('express');
const { getBatches, createBatch, updateBatch, deleteBatch } = require('../../Controller/AdminController/BatchController');

const router = express.Router();

router.get('/batches', getBatches);
router.post('/batches', createBatch);
router.put('/batches/:id', updateBatch);
router.delete('/batches/:id', deleteBatch);

module.exports = router;
