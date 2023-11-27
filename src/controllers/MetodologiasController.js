const MetodologiaModel = require('../models/metodologiaModel');

module.exports = {
    all: async (req, res) => {
        let json = { error: '', result: {} };
        if (req.body.email) {
            let user = await MetodologiaModel.getAll(req.body.email)
            if (user) {
                json.result = user
            } else {
                json.result = req.body.email
                json.error = 'Metodologias não encontradas'
            }
        } else {
            json.result = req.body
            json.error = 'Email não foi passado'
        }
        res.json(json);
    }
}