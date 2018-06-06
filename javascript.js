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

  var masterPlay = document.getElementById('square');
  var mainPlay = document.getElementById('off');
  var mainPause = document.getElementById('on');
  var music2 = document.getElementById('music2');
  masterPlay.addEventListener("click", play);
  mainPlay.addEventListener("click", play);
  mainPause.addEventListener("click", play);

  function play(){
  if (music2.paused) {
      music2.play();
    } else {
      music2.pause();
    }
  }
});
