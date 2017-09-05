/* globals UsersList $ */

$(function(){
  $.get('/users')
    .then(function(users){

      function renderUser(){

        var selectUser = function(user){
          console.log('this is user ' + user);
        }

        UsersList({
          id: '#usersList',
          selectUser
        });



      }

      renderUser();

    })
});
