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
            price REAL NOT NULL
        )`);

        db.run(`insert or ignore into categories (category) values ('motherboards')`);
        db.run(`insert or ignore into categories (category) values ('graphicscard')`);
        db.run(`insert or ignore into categories (category) values ('processor')`);

        db.run(`insert or ignore into roles (id, role) values (1, 'admin')`);
        db.run(`insert or ignore into roles (id, role) values (2, 'colaborator')`);
        db.run(`insert or ignore into roles (id, role) values (3, 'customer')`);

        db.run(`insert or ignore into users (role_id, full_name, email, password) values (1, 'admin', 'admin@admin.com', 'admin123')`);
    });
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