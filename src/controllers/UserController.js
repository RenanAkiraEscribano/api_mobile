const UsuarioModel = require('../models/UsuarioModel');

module.exports = {
    check: async (req, res) => {
        let json = { error: '', result: {} };
        if (req.body.email) {
            let user = await UsuarioModel.findById(req.body.email)
            if (user) {
                json.result = user[0]
            } else {
                json.result = req.body.email
                json.error = 'Usuario não encontrado'
            }
        } else {
            json.result = req.body
            json.error = 'Email não foi passado'
        }
        res.json(json);
    }
}