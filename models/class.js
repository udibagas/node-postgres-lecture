"use strict"

class User {
  constructor(id, firstName, lastName, email, gender) {
    this.id = id
    this.firstName = firstName
    this.lastName = lastName
    this.email = email
    this.gender = gender
  }
}

class Sale {
  constructor(id, date, amount, UserId, userName) {
    this.id = id
    this.date = date
    this.amount = amount
    this.UserId = UserId
    this.userName = userName
  }
}

class Factory {
  static createUser(id, firstName, lastName, email, gender) {
    return new User(id, firstName, lastName, email, gender)
  }

  static createSale(id, date, amount, UserId) {
    return new Sale(id, date, amount, UserId)
  }

  static createBulkUser(users) {
    return users.map(user => {
      const { id, firstName, lastName, email, gender } = user
      return this.createUser(id, firstName, lastName, email, gender)
    })
  }

  static createBulkSale(sales) {
    return sales.map(sale => {
      const { id, date, amount, UserId } = sale
      return this.createSale(id, date, amount, UserId)
    })
  }
}

module.exports = Factory