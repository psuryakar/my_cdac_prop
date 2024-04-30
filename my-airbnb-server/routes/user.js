const express = require('express')
const db = require('../db')
const utils = require('../utils')
const crypto = require('crypto-js')
const jwt = require('jsonwebtoken')
const config = require('../config')

const router = express.Router()

router.put('/profile/', (request, response) => {
  const { firstName, lastName, phone } = request.body
  const statement = `update user set firstName = ?, lastName = ?, phoneNumber = ? where id = ?`
  db.pool.execute(
    statement,
    [firstName, lastName, phone, request.userId],
    (error, result) => {
      response.send(utils.createResult(error, result))
    }
  )
})

router.get('/profile/', (request, response) => {
  const statement = `select firstName, lastName, phoneNumber, email from user where id = ?`
  db.pool.execute(statement, [request.userId], (error, result) => {
    response.send(utils.createResult(error, result))
  })
})

router.post('/register', (request, response) => {
  const { firstName, lastName, email, password, phone } = request.body
  const statement = `insert into user (firstName, lastName, email, password, phoneNumber) values (?, ?, ?, ?, ?);`
  const encryptedPassword = String(crypto.SHA256(password))
  db.pool.execute(
    statement,
    [firstName, lastName, email, encryptedPassword, phone],
    (error, result) => {
      response.send(utils.createResult(error, result))
    }
  )
})

router.post('/login', (request, response) => {
  const { email, password } = request.body
  const statement = `select id, firstName, lastName, phoneNumber, isDeleted from user where email = ? and password = ?`
  const encryptedPassword = String(crypto.SHA256(password))
  db.pool.query(statement, [email, encryptedPassword], (error, users) => {
    if (error) {
      response.send(utils.createErrorResult(error))
    } else {
      if (users.length == 0) {
        response.send(utils.createErrorResult('user does not exist'))
      } else {
        const user = users[0]
        if (user.isDeleted) {
          response.send(utils.createErrorResult('your account is closed'))
        } else {
          // create the payload
          const payload = { id: user.id }
          const token = jwt.sign(payload, config.secret)
          const userData = {
            token,
            name: `${user['firstName']} ${user['lastName']}`,
          }
          response.send(utils.createSuccessResult(userData))
        }
      }
    }
  })
})
router.post('/add-to-favorites', (req, res) => {
  const { propertyID } = req.body;


  // Assuming you have user authentication and can get the user ID from the session or token
  const userID = req.userId; // Get user ID from authentication middleware
  console.log(userID);
  const sql = 'INSERT INTO FavoriteProperties (UserID, PropertyID) VALUES (?, ?)';
  db.pool.execute(sql, [userID, propertyID], (err, result) => {
    if (err) {
      console.error('Error adding property to favorites:', err);
      res.status(500).json({ error: 'Internal server error' });
      return;
    }
    console.log('Property added to favorites');
    res.status(200).json({ message: 'Property added to favorites' });
  });
});

router.get('/favorites', (req, response) => {
  const userID = req.userId; 
  const statement = `select * from FavoriteProperties, property where FavoriteProperties.UserID = ? and property.id = FavoriteProperties.PropertyID;`
  db.pool.execute(statement, [req.userId], (error, result) => {
    response.send(utils.createResult(error, result))
  })
})





module.exports = router
