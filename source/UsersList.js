function UsersList(config){
  var container = $(config.id);
  var lis = config.users.map(function(user){
    return `
    <li class ="list-group-item">
      ${user.name}
    </li>`;
  })
  var template = `
    ${lis.join('')}
    `;

  var html = $(template)

  html.on('click', 'li', function(){
    var $this = $(this);
    console.log('now we have ' + $this);
  })

  container.empty();
  var $html = $(html)
  container.append($html);

}

