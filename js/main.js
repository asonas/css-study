$(function(){
  $('li.parent-menu').click(function(){
    console.log('click!');
    $('ul.children-menu').toggle();
  })
})