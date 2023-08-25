const express = require('express');
const router = express.Router();

const MetodologiaController = require('./controllers/metodologiaController');

router.get('/ping', MetodologiaController.ping);

router.get('/metodologias', MetodologiaController.all);
router.get('/metodologia/:id_Metodologia', MetodologiaController.one);
router.post('/metodologia', MetodologiaController.new);
router.put('/metodologia/:id_Metodologia', MetodologiaController.edit);
router.delete('/metodologia/:id_Metodologia', MetodologiaController.delete);

module.exports = router;