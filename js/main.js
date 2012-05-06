$(function(){ //ページが読まれたら、中身を実行するよ
  $('li.parent-menu').click(function(){ // li タグの parent-menu っていう class が"クリック"されたら
    $('ul.children-menu').toggle(); // ul タグの children-menu を反転するよ
  })
})

//toggle()についての説明
$(function(){
  $('.dummy').click(function(){
    //これは
    $('.dummy-menu').toggle();
    //以下のように書き換えられる
    if $('.dummy-menu').attr('class', 'hidden') { // .dummy-menu の class に hidden が含まれていたら
      $('.dummy-menu').show(); // .dummy-menuを表示
    } else {
      $('.dummy-menu').hide(); // .dummy-menuを隠す
    }
  })
})
