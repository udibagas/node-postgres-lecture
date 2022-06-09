# SALES APP

## DB Schema

### Table "Users"
| Field         | Datatype | Modifiers   |
| ------------- | -------- | ----------- |
| id            | SERIAL   | PRIMARY KEY |
| firstName     | VARCHAR  | NOT NULL    |
| lastName      | VARCHAR  | NULL        |
| email         | VARCHAR  | NOT NULL    |
| gender        | VARCHAR  | NOT NULL    |

### Table "Sales"
| Field         | Datatype | Modifiers   |
| ------------- | -------- | ----------- |
| id            | SERIAL   | PRIMARY KEY |
| date          | DATE     | NOT NULL    |
| amount        | INTEGER  | NOT NULL    |
| UserId        | INTEGER  | FOREIGN KEY |

## Command
```
$ node app.js - Display help message
$ node app.js users - Dislay all users
$ node app.js sales - Display all sales
$ node app.js users::sales <id> - Display single user based on id with related sales
$ node app.js sales::add <UserId> <date> <amount> - Add new sales
$ node app.js sales::update <id> <UserId> <date> <amount> - Update sales based on id
$ node app.js sales::delete <id> - Delete sales based on id
$ node app.js sales::report <start> <end> - Display sales report between start and end date
```