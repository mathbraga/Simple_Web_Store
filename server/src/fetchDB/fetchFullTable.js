const { db } = require('../database/Database');

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

const insertUser = (data) => {
    return new Promise((resolve) =>{
        db.all(`insert into users (role_id, full_name, address, email, password) values (
        3, ${JSON.stringify(data.name)}, ${JSON.stringify(data.address)}, ${JSON.stringify(data.email)}, ${JSON.stringify(data.password)}
        )`, [], (err) => {
            if (err) {
                throw err;
            }
            resolve("Success.");
        });
    });
}

const removeUser = (data) => {
    return new Promise((resolve) =>{
        db.all(`delete from users where email = ${JSON.stringify(data.email)}`, [], (err) => {
            if (err) {
                throw err;
            }
            resolve("Success.");
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

const searchProduct = (data) => {
    return new Promise((resolve) =>{
        db.all(`select name from products where id = ${parseInt(data.id)}`, [], (err, rows) => {
            if (err) {
                throw err;
            }
            resolve(rows);
        });
    });
}

const insertOrder = (data) => {
    return new Promise((resolve) =>{
        db.all(`insert into orders (barcode, owner, price, products, status) values (
            ${JSON.stringify(data.barcode)}, ${JSON.stringify(data.owner)}, ${parseInt(data.price)}, ${JSON.stringify(data.products)}, ${parseInt(data.status)}
            )`, [], (err) => {
            if (err) {
                throw err;
            }
            resolve("Success.");
        });
    });
}

const removeOrder = (data) => {
    return new Promise((resolve) =>{
        db.all(`delete from orders where barcode = ${JSON.stringify(data.barcode)}`, [], (err) => {
            if (err) {
                throw err;
            }
            resolve("Success.");
        });
    });
}

const updateOrder = (data) => {
    return new Promise((resolve) =>{
        db.all(`update orders set status = ${parseInt(data.status)} where barcode = ${JSON.stringify(data.barcode)}`, [], (err) => {
            if (err) {
                throw err;
            }
            resolve("Success.");
        });
    });
}

module.exports = {
    selectCPU,
    selectGPU,
    selectMB,
    queryUser,
    insertUser,
    removeUser,
    insertProduct,
    removeProduct,
    searchProduct,
    insertOrder,
    removeOrder,
    updateOrder
};