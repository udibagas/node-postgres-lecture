"use strict"

const fs = require('fs');
const pool = require('./connection');

// insert data users
const users = JSON.parse(fs.readFileSync('./data/users.json', 'utf-8')).map(user => {
  const { firstName, lastName, email, gender } = user
  return `('${firstName}', '${lastName}', '${email}', '${gender}')`
}).join(',\n')

const queryUsers = `INSERT INTO "Users" ("firstName", "lastName", "email", "gender") VALUES ${users}`

const sales = JSON.parse(fs.readFileSync('./data/sales.json', 'utf-8')).map(user => {
  const { date, amount, UserId } = user
  return `('${date}', '${amount}', ${UserId})`
}).join(',\n')

const querySales = `INSERT INTO "Sales" ("date", "amount", "UserId") VALUES ${sales}`

pool.query(queryUsers, (err) => {
  if (err) return console.log('Failed to seed Users', err);

  pool.query(querySales, (err) => {
    if (err) return console.log('Failed to seed Sales', err);

    console.log('SUCCESS!');
    pool.end()
  })
})
