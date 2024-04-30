const express = require('express')
const db = require('../db')
const utils = require('../utils')
const config = require('../config')

const router = express.Router()

router.post('/add-to-favorites', (req, res) => {
    const { propertyID } = req.body;
    const UserID=0;
    // Assuming you have user authentication and can get the user ID from the session or token
    const token = request.headers['token']

    if (!token || token.length === 0) {
      response.send(utils.createErrorResult('missing token'))
    } else {
      try {
        // verify the token
        const payload = jwt.verify(token, config.secret)

        // add the user Id to the request
        request.userId = payload['id']
        
        const userID=0;
        const sql = 'INSERT INTO FavoriteProperties (UserID, PropertyID) VALUES (?, ?)';
        connection.query(sql, [userID, propertyID], (err, result) => {
         if (err) {
          console.error('Error adding property to favorites:', err);
          res.status(500).json({ error: 'Internal server error' });
          return;
      }
      console.log('Property added to favorites');
      res.status(200).json({ message: 'Property added to favorites' });
    });

        //TODO: expiry logic

        // call the real route
        next()
      } catch (ex) {
        response.send(utils.createErrorResult('invalid token'))
      }
    }
    //const userID = req.user.userID; // Get user ID from authentication middleware
  
    
  });

  module.exports = router