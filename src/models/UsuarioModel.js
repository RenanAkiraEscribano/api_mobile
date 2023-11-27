const db = require('../db');

module.exports = {
    findById: (email) => {
        const query = `SELECT * FROM Usuario where email = ?`;
        return new Promise((resolve, reject) => {
            db.query(query, [email], (error, results) => {
                if (error) { reject(error); return; }
                if (results) {
                    resolve(results);
                } else {
                    resolve(false)
                }
            });
        });
    },
    add: (email, nome, senha) => {
        const query = `INSERT INTO Usuario VALUES (?,?,?);`;
        return new Promise((resolve, reject) => {
            db.query(query, [email, nome, senha], (error, results) => {
                if (error) { reject(error); return; }
                resolve(results);
            });

        });
    },
    update: (email, nome, senha) => {
        const query = `UPDATE Usuario SET nome = ?, senha = ? WHERE email = ?`;
        return new Promise((resolve, reject) => {
            db.query(query, [nome, senha, email], (error, results) => {
                if (error) { reject(error); return; }
                resolve(results);
            })
        });
    },
    delete: (email) => {
        const query = `DELETE FROM Usuario WHERE email = ?`;
        return new Promise((resolve, reject) => {
            db.query(query, [email], (error, results) => {
                if (error) { reject(error); return; }
                resolve(results);
            })
        })
    }
}  