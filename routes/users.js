const express = require('express')
const router = express.Router();
const db = require('../db');
const User = db.User;
const Office = db.Office;


router.get('/', function(req, res, next){
  User.findAll({
    order: ['id'],
    include: {
      model: Office
    }
  })
  .then(function(users){
    res.send(users)
  })
  .catch(next)
})

router.delete('/:id', function(req, res, next){
  User.destroy({ where: {id: req.params.id } })
  .then(res.send());
})

router.put('/:id', function(req, res, next){

})

router.post('/', function(req, res, next){
  console.log(req);
})

module.exports = router
