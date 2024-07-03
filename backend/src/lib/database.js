const sqlite3 = require('sqlite3').verbose();
const { database } = require('../config');

let db = new sqlite3.Database('../db/tangle', sqlite3.OPEN_READWRITE, (err) => {

  if (err)
    return console.log(err.message)
  ;

  console.log('Connected to Tangle database')

});

// db.serialize(() => {

//   db.run(`
//     CREATE TABLE users (
//       id INTEGER PRIMARY KEY AUTOINCREMENT,
//       names TEXT NOT NULL,
//       surnames TEXT NOT NULL,
//       phone TEXT NOT NULL UNIQUE,
//       email TEXT NOT NULL UNIQUE,
//       username TEXT NOT NULL UNIQUE,
//       password TEXT NOT NULL
//     )
//   `);

//   db.run(`
//     CREATE TABLE tokens (
//       id INTEGER PRIMARY KEY AUTOINCREMENT,
//       user_id INTEGER NOT NULL,
//       token TEXT NOT NULL,
//       expires_at DATETIME NOT NULL,
//       FOREIGN KEY (user_id) REFERENCES users(id)
//     )
//   `)

// });

module.exports = db;
