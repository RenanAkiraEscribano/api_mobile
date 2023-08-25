const MetodologiaModel = require('../models/MetodologiaModel');

module.exports = {
    ping: (req, res) => {
        res.json({pong: true})
    },
    all: async (req, res) => {
        let json = {erro:'', result:[]};

        let metodologia = await MetodologiaModel.getAll();
        for (let i in metodologia){
            json.result.push({
                id_Metodologia: metodologia[i].id_Metodologia,
                id_Usuario: metodologia[i].id_Usuario,
                metodo: metodologia[i].metodo
            })
        }

        res.json(json);
    },
    one: async (req, res) => {
        let json = {error:'', result:{}};

        let metodologia = await MetodologiaModel.findById(req.params.id_Metodologia);
        if (metodologia) {
            json.result = metodologia
        }

        res.json(json);
    },
    new: async (req, res) => {
        let json = {error:'', result:{}};

        let id_Usuario = req.body.id_Usuario;
        let metodo = req.body.metodo;

        if (id_Usuario && metodo){
            let metodoId = await MetodologiaModel.add(id_Usuario, metodo)
            json.result = {
                id_Metodologia: metodoId,
                id_Usuario,
                metodo
            }
        } else {
            json.error = "Registro não inserido"
        }

        res.json(json);
    },
    edit: async (req, res) => {
        let json = {error:'', result:{}};

        let id_Metodologia = req.params.id_Metodologia;
        let id_Usuario = req.body.id_Usuario;
        let metodo = req.body.metodo;

        if (id_Metodologia && id_Usuario && metodo){
            await MetodologiaModel.update(id_Metodologia, id_Usuario, metodo)
            json.result = {
                id_Metodologia,
                id_Usuario,
                metodo
            }
        } else {
            json.error = "Campos não alterados"
        }

        res.json(json);
    },
    delete: async (req, res) => {
        let json = {error:'', result:{}};

        await MetodologiaModel.delete(req.params.id_Metodologia);

        res.json(json);
    }
}
