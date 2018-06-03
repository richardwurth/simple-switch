$(document).ready(function(){
  let squareStatus = 'off';
  $('#square').click(function(){
    if (squareStatus === 'off') {
    $('#square').css('right','-20px');
    $('#text').css('background-color','green');
    $('#text').text('Active');
    squareStatus = 'on';
      } else {
    $('#square').css('right','20px');
    $('#text').css('background-color','red');
    $('#text').text('Inactive');
    squareStatus = 'off';
    }
  });
});
