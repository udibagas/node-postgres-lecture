"use strict"

const pool = require("./connection")


const ddlUsers = `
  CREATE TABLE "Users" (
    "id" SERIAL PRIMARY KEY,
    "firstName" VARCHAR NOT NULL,
    "lastName" VARCHAR NULL,
    "email" VARCHAR UNIQUE NOT NULL,
    "gender" VARCHAR NOT NULL
  )
`

const ddlSales = `
  CREATE TABLE "Sales" (
    "id" SERIAL PRIMARY KEY,
    "date" DATE NOT NULL,
    "amount" INTEGER,
    "UserId" INT REFERENCES "Users"(id)
  )
`

pool.query(ddlUsers, (err) => {
  if (err) return console.log('Failed to create table Users', err);

  pool.query(ddlSales, (err) => {
    if (err) return console.log('Failed to create table Sales', err);

    console.log('SUCCESS!');
    pool.end()
  })
})