const { db } = require('../database/Database');

const selectRoles = new Promise(function roles(resolve){
        db.all('select * from roles', [], (err, rows) => {
            if (err) {
            throw err;
            }
            resolve(rows);
        });
});

const selectUsers = new Promise(function users(resolve){
    db.all('select id, role_id, full_name, email from users', [], (err, rows) => {
        if (err) {
        throw err;
        }
        resolve(rows);
    });
});

const selectCategories = new Promise(function categories(resolve){
    db.all('select * from categories', [], (err, rows) => {
        if (err) {
        throw err;
        }
        resolve(rows);
    });
});

const selectCPU = new Promise((resolve) => {
    db.all('select * from products where category_id = 3', [], (err, rows) => {
        if (err) {
        throw err;
        }
        resolve(rows);
    });
});

const selectGPU = new Promise((resolve) => {
    db.all('select * from products where category_id = 2', [], (err, rows) => {
        if (err) {
        throw err;
        }
        resolve(rows);
    });
});

const selectMB = new Promise((resolve) => {
    db.all('select * from products where category_id = 1', [], (err, rows) => {
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

const insertProduct = (data) => {
    return new Promise((resolve) =>{
        db.all(`insert into products (id, category_id, name, price, avatar) values (
            ${parseInt(data.id)}, ${parseInt(data.category)}, ${JSON.stringify(data.name)}, ${parseFloat(data.price)}, ${JSON.stringify(data.avatar)}
            )`, [], (err) => {
            if (err) {
                throw err;
            }
            resolve("Success.");
        });
    });
}

const removeProduct = (data) => {
    return new Promise((resolve) =>{
        db.all(`delete from products where id = ${parseInt(data.id)}`, [], (err) => {
            if (err) {
                throw err;
            }
            resolve("Success.");
        });
    });
}

// SELECT c.product_id, p.name FROM cart c inner join users u on c.owner_id = 1
// 	inner join products p on c.product_id = p.id

module.exports = { 
    selectRoles, 
    selectUsers, 
    selectCategories, 
    selectCPU,
    selectGPU,
    selectMB,
    queryUser, 
    insertProduct,
    removeProduct
};