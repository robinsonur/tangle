import sqlite3 from 'sqlite3';

const db = new sqlite3.Database('./tangle.sqlite', (err) => {

  console.log(err ? err : 'Conexión establecida con la base de datos');

});

db.serialize(() => {

  db.run(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      username TEXT UNIQUE,
      password TEXT
    )
  `)

})

export default db