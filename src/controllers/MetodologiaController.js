const MetodologiaModel = require('../models/metodologiaModel');

module.exports = {
    all: async (req, res) => {
        let met = await MetodologiaModel.getAll(req.body.email);
        res.json(met);
    },
    one: async (req, res) => {
        let json = { error: '', result: {} };
        let met = await MetodologiaModel.findById(req.body.idMetodologia);
        if (met) {
            json.result = met
        } else {
            json.result = req.body.idMetodologia
            json.error = 'Metodologia não encontrado'
        }
        res.json(json);
    },
    new: async (req, res) => {
        let met = await MetodologiaModel.add(req.body.email, req.body.nomeMetodologia)
        res.json(met);
    },
    att: async (req, res) => {
        let json = {error:'', result:{}};
        let idMetodologia = req.body.idMetodologia
        let email = req.body.email
        let nomeMetodologia = req.body.nomeMetodologia
        let revisada = req.body.revisada
        let numeroRevisoes = req.body.numeroRevisoes

        if (idMetodologia && email && nomeMetodologia && numeroRevisoes){
            await MetodologiaModel.update(idMetodologia, email, nomeMetodologia, revisada, numeroRevisoes)
            json.result = {
                idMetodologia, email, nomeMetodologia, revisada, numeroRevisoes
            }
        } else {
            json.result = {
                idMetodologia, email, nomeMetodologia, revisada, numeroRevisoes
            }
            json.error = "Campos não alterados"
        }
        res.json(json);
    },
    del: async (req, res) => {
        let met = await MetodologiaModel.delete(req.body.idMetodologia);
        res.json(met);
    }
}
