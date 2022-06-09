const { Pool } = require('pg')

const pool = new Pool({
  user: 'postgres',
  host: '172.18.192.1',
  database: 'sales',
  password: 'bismillah',
  port: 5432,
})

module.exports = pool