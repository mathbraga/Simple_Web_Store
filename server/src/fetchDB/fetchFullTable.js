const { db } = require('../database/Database');

const selectRoles = new Promise(function roles(resolve){
        db.all('select * from roles', [], (err, rows) => {
            if (err) {
            throw err;
            }
            resolve(rows);
        });
});

const selectUsers = new Promise(function roles(resolve){
    db.all('select id, role_id, full_name, email from users', [], (err, rows) => {
        if (err) {
        throw err;
        }
        resolve(rows);
    });
});

const selectCategories = new Promise(function roles(resolve){
    db.all('select * from categories', [], (err, rows) => {
        if (err) {
        throw err;
        }
        resolve(rows);
    });
});

const selectCPU = new Promise(function roles(resolve){
    db.all('select * from products where category_id == 3', [], (err, rows) => {
        if (err) {
        throw err;
        }
        resolve(rows);
    });
});

module.exports = { selectRoles, selectUsers, selectCategories, selectCPU };