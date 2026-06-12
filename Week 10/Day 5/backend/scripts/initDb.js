const { Pool } = require('pg')
require('dotenv').config()

const pool = new Pool({ connectionString: process.env.DATABASE_URL })

const queries = [
  `CREATE TABLE IF NOT EXISTS users (id SERIAL PRIMARY KEY, username VARCHAR(50) NOT NULL, email VARCHAR(100) UNIQUE NOT NULL, password_hash TEXT NOT NULL);`,
  `CREATE TABLE IF NOT EXISTS stories (id SERIAL PRIMARY KEY, title VARCHAR(255) NOT NULL, content TEXT NOT NULL, author_id INT REFERENCES users(id), created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP);`,
  `CREATE TABLE IF NOT EXISTS contributors (id SERIAL PRIMARY KEY, story_id INT REFERENCES stories(id), user_id INT REFERENCES users(id));`
]

;(async () => {
  for (const q of queries) {
    await pool.query(q)
    console.log('Executed:', q.split('(')[0])
  }
  await pool.end()
  console.log('Done')
})().catch(e => { console.error(e); process.exit(1) })
