const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("./dreams.db", (err) => {
    if (err) {
        console.error("Database connection failed:", err.message);
    } else {
        console.log("Connected to SQLite");
    }
});

db.run(`
  CREATE TABLE IF NOT EXISTS dreams (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    text TEXT NOT NULL
  )
`);

module.exports = db;