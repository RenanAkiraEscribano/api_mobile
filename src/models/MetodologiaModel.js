const db = require('../db');

module.exports = {    
    getAll: () => {
        const query = `SELECT * FROM Metodologias`;
        return new Promise((resolve, reject) => {
            db.query(query, (error, results) => {
                if (error) { reject(error); return; }
                resolve(results);
            });
        });
    },
    findById: (id_Metodologia) => {
        const query = `SELECT * FROM Metodologias WHERE id_Metodologia = ?`;
        return new Promise((resolve, reject) => {
            db.query(query, [id_Metodologia], (error, results) => {
                if (error) { reject(error); return; }
                if (results.lenght > 0){
                    resolve(results[0]);
                }else{
                    resolve(false)
                }
            });
        });
    },
    add: (id_Usuario, metodo) => {
        const query = `INSERT INTO Metodologias VALUES (?,?,?)`;
        return new Promise((resolve, reject) => {
            db.query(query, [0, id_Usuario, metodo], (error, results) => {
                if (error) { reject(error); return; }
                resolve(results.insertId);
            })
        });
    },
    update: (id_Metodologia, id_Usuario, metodo) => {
        const query = `UPDATE Metodologias SET id_Usuario = ?, metodo = ? WHERE id_Metodologia = ?`;
        return new Promise((resolve, reject) => {
            db.query(query, [id_Usuario, metodo, id_Metodologia], (error, results) => {
                if (error) { reject(error); return; }
                resolve(results);
            })
        });
    },
    delete: (id_Metodologia) => {
        const query = `DELETE FROM Metodologias WHERE id_Metodologia = ?`;
        return new Promise((resolve, reject) => {
            db.query(query, [id_Metodologia], (error, results) => {
                if (error) { reject(error); return; }
                resolve(results);
            })
        })
    }
}