$(document).ready(function(){
  let squareStatus = 'off';
  $('#square').click(function(){
    if (squareStatus === 'off') {
      $('#square').css('right','-15%');
      $('#on').css('right','5%');
      $('#off').css('left','100%');
    } else {
      $('#square').css('right','70%');
      $('#on').css('right','100%');
      $('#off').css('left','5%');
    }
  });
  $('#bar-parent').click(function(){
    if (squareStatus === 'off') {
    $('#square').css('right','-15%');
    $('#on').css('right','5%');
    $('#off').css('left','100%');
    squareStatus = 'on';
      } else {
    $('#square').css('right','70%');
    $('#on').css('right','100%');
    $('#off').css('left','5%');
    squareStatus = 'off';
    }
  });
});
