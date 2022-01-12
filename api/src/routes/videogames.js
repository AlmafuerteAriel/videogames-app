const { Router } = require('express');
const { videogames } = require('../controllers/videogames');
const router = Router();

router.get('/videogames', videogames);
//router.get('/countries/:countryId', filterById);

module.exports = router;