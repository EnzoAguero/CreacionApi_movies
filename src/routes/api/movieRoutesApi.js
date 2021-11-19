const express = require('express');
const router = express.Router();
const moviesAPIController = require('../../controllers/api/movieApi');


router.post('/create', moviesAPIController.create);
router.delete('/delete/:id', moviesAPIController.destroy);

module.exports = router;