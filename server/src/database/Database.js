const path = require('path');
const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database(path.resolve(__dirname, './database.sqlite'), (err) => {
    if (err) {
    console.error(err.message);
    }
    console.log('Connected to the database.');
});

const initialize = function initDb(){
    db.serialize(() => {
        db.run(`CREATE TABLE IF NOT EXISTS roles ( 
            id INTEGER PRIMARY KEY UNIQUE,
            role TEXT NOT NULL UNIQUE
        )`);

        db.run(`CREATE TABLE IF NOT EXISTS users ( 
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            role_id INTEGER NOT NULL,
            full_name TEXT NOT NULL,
            email TEXT NOT NULL UNIQUE,
            password TEXT NOT NULL UNIQUE,
            FOREIGN KEY (role_id) 
                REFERENCES roles (id) 
                ON DELETE CASCADE
                ON UPDATE CASCADE
        )`);

        db.run(`CREATE TABLE IF NOT EXISTS categories ( 
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            category TEXT NOT NULL UNIQUE
        )`);

        db.run(`CREATE TABLE IF NOT EXISTS products ( 
            id INTEGER PRIMARY KEY,
            category_id INTEGER NOT NULL,
            name TEXT NOT NULL,
            price REAL NOT NULL, 
            avatar TEXT NOT NULL
        )`);

        db.run(`insert or ignore into categories (category) values ('motherboards')`);
        db.run(`insert or ignore into categories (category) values ('graphicscard')`);
        db.run(`insert or ignore into categories (category) values ('processor')`);

        db.run(`insert or ignore into roles (id, role) values (1, 'admin')`);
        db.run(`insert or ignore into roles (id, role) values (2, 'colaborator')`);
        db.run(`insert or ignore into roles (id, role) values (3, 'customer')`);

        db.run(`insert or ignore into users (role_id, full_name, email, password) values (1, 'admin', 'admin@admin.com', 'admin123')`);

        db.run(`insert or ignore into products (id, category_id, name, price, avatar) values (1, 3, 'AMD Ryzen 7 3800X', '2.800,00', 'https://images5.kabum.com.br/produtos/fotos/102435/processador-amd-ryzen-7-3800x-cache-32mb-3-9ghz-4-5ghz-max-turbo-amd4-100-100000025box_processador-amd-ryzen-7-3800x-cache-32mb-3-9ghz-4-5ghz-max-turbo-amd4-100-100000025box_1562600416_m.jpg')`);
        db.run(`insert or ignore into products (id, category_id, name, price, avatar) values (2, 3, 'Intel Core i9-10900', '3.399,99', 'https://images8.kabum.com.br/produtos/fotos/112998/processador-intel-core-i9-10900-cache-20mb-2-8ghz-lga-1200-bx8070110900_1589227432_m.jpg')`);
        db.run(`insert or ignore into products (id, category_id, name, price, avatar) values (3, 3, 'Intel Core i5-9400f', '999,00', 'https://images3.kabum.com.br/produtos/fotos/99683/processador-intel-core-i5-9400f-coffee-lake-cache-9mb-2-9ghz-4-1ghz-max-turbo-lga-1151-bx80684i59400f_processador-intel-core-i5-9400f-coffee-lake-cache-9mb-2-9ghz-4-1ghz-max-turbo-lga-1151-bx80684i59400f_1564429485_m.jpg')`);
    })
}

const terminate = function closeDb(){
    db.close((err) => {
        if (err) {
        console.error(err.message);
        }
        console.log('Close the database connection.');
    });
}

module.exports = { db, initialize, terminate };