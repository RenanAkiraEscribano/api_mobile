const ItensModel = require('../models/ItensModel')

module.exports = {
    all: async (req, res) => {
        let item = await ItensModel.getAll(req.body.idMetodologia)
        res.json(item)
    },
    new: async (req,res) => {
        let item = await ItensModel.add(req.body.idMetodologia, req.body.nomeItem, req.body.regem, req.body.funcionamento, req.body.instrucao, req.body.exemplo, req.body.referenciasBibliograficas)
        res.json(item)
    },
    att: async (req, res) => {
        let json = { error: '', result: {} };
        let idItem = req.body.idItem
        let nomeItem = req.body.nomeItem
        let regem = req.body.regem
        let funcionamento = req.body.funcionamento
        let instrucao = req.body.instrucao
        let exemplo = req.body.exemplo
        let referenciasBibliograficas = req.body.referenciasBibliograficas

        if (idItem && nomeItem && regem && funcionamento && instrucao && exemplo && referenciasBibliograficas) {
            await ItensModel.update(idItem, nomeItem, regem, funcionamento, instrucao, exemplo, referenciasBibliograficas)
            json.result = {
                idItem, nomeItem, regem, funcionamento, instrucao, exemplo, referenciasBibliograficas
            }
        } else {
            json.result = {
                idItem, nomeItem, regem, funcionamento, instrucao, exemplo, referenciasBibliograficas
            };
            json.error = "Campos não enviados"
        }
        res.json(json)
    },
    del: async (req, res) => {
        let item = await ItensModel.delete(req.body.idItem);
        res.json(item);
    }
}