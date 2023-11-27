const ItensModel = require('../models/ItensModel')

module.exports = {
    all: async (req, res) => {
        let json = { error: '', result: {} };
        if (req.body.idMetodologia) {
            let user = await ItensModel.getAll(req.body.idMetodologia)
            if (user) {
                json.result = user
            } else {
                json.result = req.body.idMetodologia
                json.error = 'Metodologias não encontradas'
            }
        } else {
            json.result = req.body
            json.error = 'Não foi passado'
        }
        res.json(json);
    }
}