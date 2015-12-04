$(document).ready(function () {
  $('button').on('mouseenter', function () {
    $(this).addClass('highlight');
  });
  $('button').on('mouseleave', function () {
    $(this).removeClass('highlight');
  });
});
 
$(document).ready(function() {
  $('button').on('click', function() {
    $('button').remove(),
    $('.headshot').addClass('shrink'),
    $('.cross_horizontal').fadeIn(),
    $('.cross_vertical').fadeIn(),
    $('#header').slideDown(),
    $('.body').slideDown();
  });
});