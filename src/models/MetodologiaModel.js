const db = require('../db');

module.exports = {    
    getAll: (email) => {
        const query = `SELECT * FROM Metodologias WHERE emailUsuario = ? ORDER BY idMetodologia DESC`;
        return new Promise((resolve, reject) => {
            db.query(query, [email], (error, results) => {
                if (error) { reject(error); return; }
                resolve(results);
            });
        });
    },
    findById: (idMetodologia) => {
        const query = `select * from Metodologias where idMetodologia = ?`;
        return new Promise((resolve, reject) => {
            db.query(query, [idMetodologia], (error, results) => {
                if (error) { reject(error); return; }
                if (results) {
                    resolve(results);
                } else {
                    resolve(false)
                }
            });
        });
    },
    add: (email, nomeMetodologia) => {
        const query = `INSERT INTO Metodologias VALUES (?,?,?,?,?)`;
        return new Promise((resolve, reject) => {
            db.query(query, [0, email, nomeMetodologia, 0, 0], (error, results) => {
                if (error) { reject(error); return; }
                resolve(results.insertId);
            })
        });
    },
    update: (idMetodologia, email, nomeMetodologia, revisada, numeroRevisoes) => {
        const query = `UPDATE Metodologias SET emailUsuario = ?, nomeMetodologia = ?, revisada = ?, numeroRevisoes = ? WHERE idMetodologia = ?`;
        return new Promise((resolve, reject) => {
            db.query(query, [email, nomeMetodologia, revisada, numeroRevisoes, idMetodologia], (error, results) => {
                if (error) { reject(error); return; }
                resolve(results);
            })
        });
    },
    delete: (idMetodologia) => {
        const query = `DELETE FROM Metodologias WHERE idMetodologia = ?`;
        return new Promise((resolve, reject) => {
            db.query(query, [idMetodologia], (error, results) => {
                if (error) { reject(error); return; }
                resolve(results);
            })
        })
    }
}