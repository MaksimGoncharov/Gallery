


var columns = document.querySelector(".block-gallery");
var todo;
function local() {
    todos = columns.innerHTML;
    localStorage.setItem('todos', todos);
}


$(function(){
    $('.like-toggle').click(function(){
      $(this).toggleClass('like-active');
      $(this).next().toggleClass('hidden');
    });
    local()
  });

  
  if (localStorage.getItem('todos')) {
    columns.innerHTML = localStorage.getItem('todos')
}


