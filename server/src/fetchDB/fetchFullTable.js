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
    db.all('select * from products where category_id = 3', [], (err, rows) => {
        if (err) {
        throw err;
        }
        resolve(rows);
    });
});

const queryUser = (data) => {
    return new Promise((resolve) =>{
        db.all(`select email, role_id from users where email = ${JSON.stringify(data.email)} AND password = ${JSON.stringify(data.password)}`, [], (err, rows) => {
            if (err) {
                throw err;
            }
            resolve(rows);
        });
    });
}

// SELECT c.product_id, p.name FROM cart c inner join users u on c.owner_id = 1
// 	inner join products p on c.product_id = p.id

module.exports = { selectRoles, selectUsers, selectCategories, selectCPU, queryUser };