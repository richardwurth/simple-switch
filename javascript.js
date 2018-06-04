$(document).ready(function(){
  let squareStatus = 'off';
  $('#bar-parent').click(function(){
    if (squareStatus === 'off') {
    $('#square').css('right','-8%');
    $('#on').css('right','5%');
    $('#off').css('left','100%');
    // $('#text').css('background-color','green');
    // $('#text').text('Active');
    squareStatus = 'on';
      } else {
    $('#square').css('right','8%');
    $('#on').css('right','100%');
    $('#off').css('left','5%');
    // $('#text').css('background-color','red');
    // $('#text').text('Inactive');
    squareStatus = 'off';
    }
  });
  $('#square').click(function(){
    if (squareStatus === 'off') {
    $('#square').css('right','-8%');
    $('#on').css('right','5%');
    $('#off').css('left','100%');
    // $('#text').css('background-color','green');
    // $('#text').text('Active');
    squareStatus = 'on';
      } else {
    $('#square').css('right','8%');
    $('#on').css('right','100%');
    $('#off').css('left','5%');
    // $('#text').css('background-color','red');
    // $('#text').text('Inactive');
    squareStatus = 'off';
    }
  });
});
