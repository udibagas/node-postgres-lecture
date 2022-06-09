"use strict";

const pool = require("../connection");
const Factory = require("./class");

class Model {

  static getAllUsers(cb) {
    const query = `SELECT * FROM "Users"`;
    pool.query(query, (err, result) => {
      if (err) return cb(err)

      cb(null, Factory.createBulkUser(result.rows))
    })
  }

  static getAllSales(cb) {
    const query = `SELECT * FROM "Sales"`
    pool.query(query, (err, result) => {
      if (err) return cb(err)

      cb(null, Factory.createBulkSale(result.rows))
    })
  }

  static getUserById(userId, cb) {
    const query = `SELECT * FROM "Users" WHERE id = $1`
    pool.query(query, [userId], (err, result) => {
      if (err) return cb(err)
      if (result.rowCount == 0) return cb(`User with id ${userId} is not found`)

      const { id, firstName, lastName, email, gender } = result.rows[0]
      cb(null, Factory.createUser(id, firstName, lastName, email, gender))
    })
  }

  static getSalesByUserId(userId, cb) {
    const query = `SELECT * FROM "Sales" WHERE "UserId" = $1`
    pool.query(query, [userId], (err, result) => {
      if (err) return cb(err)

      cb(null, Factory.createBulkSale(result.rows))
    })
  }

  static createSale(UserId, date, amount, cb) {
    const query = `INSERT INTO "Sales" ("UserId", "date", "amount") VALUES ($1, $2, $3) RETURNING *`

    pool.query(query, [UserId, date, amount], (err, result) => {
      if (err) return cb(err)
      const { id, date, amount, UserId } = result.rows[0]
      cb(null, Factory.createSale(id, date, amount, UserId))
    })
  }

  static updateSale(id, UserId, date, amount, cb) {
    const query = `UPDATE "Sales" SET "UserId" = $1, "date" = $2, "amount" = $3 WHERE "id" = $4 RETURNING *`

    pool.query(query, [UserId, date, amount, id], (err, result) => {
      if (err) return cb(err)
      if (result.rowCount == 0) return cb(`Sale with id ${userId} is not found`)
      const { id, date, amount, UserId } = result.rows[0]
      cb(null, Factory.createSale(id, date, amount, UserId))
    })
  }

  static deleteSale(id, cb) {
    const query = `DELETE FROM "Sales" WHERE "id" = $1`

    pool.query(query, [id], (err, result) => {
      if (err) return cb(err)
      if (result.rowCount == 0) return cb(`Sale with id ${userId} is not found`)
      const { id, date, amount, UserId } = result.rows[0]
      cb(null, Factory.createSale(id, date, amount, UserId))
    })
  }

  static salesReport(start, end, cb) {
    const query = `
    SELECT 
      s.*, 
      CONCAT(u."firstName", ' ', u."lastName") as "userName" 
    FROM "Sales" s 
      JOIN "Users" u ON u.id = s."UserId" 
    WHERE "date" BETWEEN $1 AND $2`
    
    pool.query(query, [start, end], (err, result) => {
      if (err) return cb(err)

      cb(null, Factory.createBulkSale(result.rows))
    })
  }

}

// Model.getAllUsers((err, result) => console.log(err, result))
// Model.getAllSales((err, result) => {
//   if (err) return console.log(err);

//   console.table(result);
// })
// Model.getUserById(1, (err, result) => console.log(err, result))
// Model.getSalesByUserId(1, (err, result) => console.log(err, result))
// Model.salesReport('2022-04-01', '2022-04-30', (err, result) => console.table(result))

Model.createSale(1, '2022-05-12', 10_000_000, (err, data) => {
  if (err) return console.log(err);

  console.log(data);
})

module.exports = Model