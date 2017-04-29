$(function () {
  $('.signin').on('click', function(){
    $('.modal').fadeIn();
  });

  $('.close').on('click', function(){
    $('.modal').fadeOut();
  });

  $('.submit').on('click', function(){
    $('input').addClass('input.error')
  });

  $('form').find('input[name="user"]').on('click',function(){
    $('input').removeClass('input.error')
  });

  $('form').find('input[name="pass"]').on('click',function(){
    $('input').removeClass('input.error')
  });
});
