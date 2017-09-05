function UsersList(config){
  var container = $(config.id);

  var template = `
    <li class="list-group-item"> Apple </li>
    <li class="list-group-item"> Potato </li>
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

