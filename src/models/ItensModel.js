const db = require('../db');

module.exports = {
    getAll: (idMetodologia) => {
        const query = `SELECT * FROM Itens WHERE idMetodologia = ? ORDER BY idMetodologia DESC`;
        return new Promise((resolve, reject) => {
            db.query(query, [idMetodologia], (error, results) => {
                if (error) { reject(error); return; }
                resolve(results);
            });
        });
    },
    add: (idMetodologia, nomeItem, regem, funcionamento, instrucao, exemplo, referenciasBibliograficas) => {
        const query = `INSERT INTO Itens VALUES (?, ?, ?, ?, ?, ?,?,?)`;
        return new Promise((resolve, reject) => {
            db.query(query, [0, idMetodologia, nomeItem, regem, funcionamento, instrucao, exemplo, referenciasBibliograficas], (error, results) => {
                if (error) { reject(error); return; }
                resolve(results.insertId);
            });
        });
    },
    update: (idItem, nomeItem, regem, funcionamento, instrucao, exemplo, referenciasBibliograficas) => {
        const query = `UPDATE Itens SET nomeItem = ?, regem = ?, funcionamento = ?, instrucao = ?, exemplo = ?, referenciasBibliograficas = ? WHERE idItem = ?`;
        return new Promise((resolve, reject) => {
            db.query(query, [nomeItem, regem, funcionamento, instrucao, exemplo, referenciasBibliograficas, idItem], (error, results) => {
                if (error) { reject(error); return; }
                resolve(results);
            })
        });
    },
    delete: (idItem) => {
        const query = `DELETE FROM Itens WHERE idItem = ?`;
        return new Promise((resolve, reject) => {
            db.query(query, [idItem], (error, results) => {
                if (error) { reject(error); return; }
                resolve(results);
            })
        })
    }
}