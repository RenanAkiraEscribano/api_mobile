const express = require('express');
const router = express.Router();

const MetodologiaController = require('./controllers/metodologiaController');
const UsuarioController = require('./controllers/UsuarioController');
const ItensController = require('./controllers/ItensController')
const UserController = require('./controllers/UserController')
const MetodologiasController = require('./controllers/MetodologiasController')
const ItemController = require('./controllers/itemController')
const DeleteController = require('./controllers/deleteController')

router.get('/metodologia', MetodologiaController.all);
router.get('/metodologia', MetodologiaController.one);
router.post('/metodologia', MetodologiaController.new);
router.put('/metodologia', MetodologiaController.att);
router.delete('/metodologia', MetodologiaController.del);

router.get('/usuario', UsuarioController.one);
router.post('/usuario', UsuarioController.new);
router.put('/usuario', UsuarioController.att);
router.delete('/usuario', UsuarioController.del);

router.get('/item', ItensController.all);
router.post('/item', ItensController.new);
router.put('/item', ItensController.att);
router.delete('/item', ItensController.del);

router.post('/user', UserController.check);

router.post('/metodologias', MetodologiasController.all);

router.post('/itens', ItemController.all);

router.post('/delete', DeleteController.del);

module.exports = router;