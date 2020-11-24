const express = require('express');
const path = require('path');
const routes = express.Router();
const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database(path.resolve(__dirname, './database/database.sqlite'), (err) => {
    if (err) {
      console.error(err.message);
    }
    console.log('Connected to the database.');
});

db.serialize(() => {
    db.run(`CREATE TABLE IF NOT EXISTS roles ( 
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        role TEXT NOT NULL
    )`);
    db.run(`CREATE TABLE IF NOT EXISTS users ( 
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        role_id INTEGER NOT NULL,
        full_name TEXT NOT NULL,
        email TEXT NOT NULL,
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
    db.run(`insert or ignore into categories (category) values ('motherboards')`);
    db.run(`insert or ignore into categories (category) values ('graphicscard')`);
    db.run(`insert or ignore into categories (category) values ('processor')`);
});

routes.get('/', (req, res) => {
    res.send("Server message.")
})
  
db.close((err) => {
    if (err) {
      console.error(err.message);
    }
    console.log('Close the database connection.');
});

module.exports = routes;