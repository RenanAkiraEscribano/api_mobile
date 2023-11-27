const ItensModel = require('../models/ItensModel')

module.exports = {
    del: async (req, res) => {
        let json = { error: '', result: {} };

        switch (req.body.objeto) {
            case ('item'):
                if (req.body.id) {
                    let user = await ItensModel.delete(req.body.id)
                    if (user) {
                        json.result = user
                    } else {
                        json.result = req.body.id
                        json.error = 'Id não encontrado'
                    }
                } else {
                    json.result = req.body
                    json.error = 'Não foi passado'
                }
                break;
        }



        res.json(json);
    }
}