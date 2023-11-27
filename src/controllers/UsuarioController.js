const UsuarioModel = require('../models/UsuarioModel');

module.exports = {
    one: async (req, res) => {
        let json = { error: '', result: {} };
        let user = await UsuarioModel.findById(req.body.email);
        if (user) {
            json.result = user
        } else {
            json.result = req.body.email
            json.error = 'Usuario não encontrado'
        }
        res.json(json);
    },
    new: async (req, res) => {
        if (req.body.email && req.body.nome && req.body.senha){
            let user = await UsuarioModel.add(req.body.email, req.body.nome, req.body.senha)
            res.json(user);
        } else {
            res.json("Campos não enviados")
        }
    },
    att: async (req, res) => {
        let json = { error: '', result: {} };
        let email = req.body.email;
        let nome = req.body.nome;
        let senha = req.body.senha;

        if (email && nome && senha) {
            await UsuarioModel.update(email, nome, senha)
            json.result = {
                email, nome, senha
            }
        } else {
            json.result = {
                email, nome, senha
            };
            json.error = "Campos não enviados"
        }
        res.json(json)
    },
    del: async (req, res) => {
        let user = await UsuarioModel.delete(req.body.email);
        res.json(user);
    }
}