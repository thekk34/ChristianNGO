const express = require('express');
const { getUsers, getUserByEmail, updateUser, deleteUser } = require('../../Controller/AdminController/UserController');

const router = express.Router();


router.get('/users', getUsers);
router.get('/users/:email', getUserByEmail);
router.put('/users/:email', updateUser);
router.delete('/users/:email', deleteUser);

module.exports = router;

