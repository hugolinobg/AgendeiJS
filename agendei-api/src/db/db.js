import sqlite3 from 'sqlite3'

const SQLite = sqlite3.verbose()

const db = new SQLite.Database(
  './src/database/agendei.db',
  SQLite.OPEN_READWRITE,
  (err) => {
    if (err) {
      return console.log(`Erro ao conectar com o banco: ${err.message}`)
    }
  }
)

function query(command, params, method = 'all') {
  return new Promise(function (resolve, reject) {
    db[method](command, params, function (error, result) {
      if (error) {
        reject(error)
      } else {
        resolve(result)
      }
    })
  })
}

export { db, query }
