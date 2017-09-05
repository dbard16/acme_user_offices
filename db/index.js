const Sequelize = require('sequelize');

const conn = require('./conn');
const Office = require('./Office');
const User = require('./User');

User.belongsTo(Office);
Office.hasMany(User);

const sync = ()=> conn.sync({force: true});

const seed = ()=> {
  let fullstack, amsterdam;
  return Promise.all([
    Office.create({
      name: '5 Hanover Square, Floor 25, New York, NY 10004, USA',
      lat: 40.705076,
      lng: -74.00916
    }),
    Office.create({
      name: '665 Amsterdam Ave, New York, NY 10025, USA',
      lat: 40.791792,
      lng: -73.97175
    })
  ])
  .then(function(offices){
    fullstack = offices[0];
    amsterdam = offices[1];
    return Promise.all([
      User.create({
        name: 'Tony'
      }),
      User.create({
        name: 'Bob'
      }),
      User.create({
        name: 'James'
      })
    ])
  })
  .then(function(users){

      users[0].setOffice(fullstack);
      users[1].setOffice(fullstack);
      users[2].setOffice(amsterdam);
    })
}


module.exports = {
  sync,
  Office,
  User,
  seed
}
