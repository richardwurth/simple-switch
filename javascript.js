$(document).ready(function(){
  var masterPlay = document.getElementById('master-play');
  var music2 = document.getElementById('music2');
  var music3 = document.getElementById('music3');
  var music4 = document.getElementById('music4');
  var music5 = document.getElementById('music5');
  var music6 = document.getElementById('music6');
  var music7 = document.getElementById('music7');



  masterPlay.addEventListener("click", play);




  let squareStatus = 'off';
  $('#square').click(function(e){
    if (squareStatus === 'off') {
      $('#square').css('right','-15%');
      $('#on').css('right','5%');
      $('#off').css('left','100%');
      e = e || window.event2;
      music2.muted = !music2.muted;
      e.preventDefault();
      squareStatus = 'on';
    } else {
      $('#square').css('right','70%');
      $('#on').css('right','100%');
      $('#off').css('left','5%');
      e = e || window.event2;
      music2.muted = !music2.muted;
      e.preventDefault();
      squareStatus = 'off';
    }
  });
  $('#bar').click(function(e){
    if (squareStatus === 'off') {
      $('#square').css('right','-15%');
      $('#on').css('right','5%');
      $('#off').css('left','100%');
      e = e || window.event2;
      music2.muted = !music2.muted;
      e.preventDefault();
      squareStatus = 'on';
    } else {
      $('#square').css('right','70%');
      $('#on').css('right','100%');
      $('#off').css('left','5%');
      e = e || window.event2;
      music2.muted = !music2.muted;
      e.preventDefault();
      squareStatus = 'off';
    }
  });

  let squareStatus2 = 'off';
  $('#square2').click(function(e){
    if (squareStatus2 === 'off') {
      $('#square2').css('right','-15%');
      $('#on2').css('right','5%');
      $('#off2').css('left','100%');
      e = e || window.event2;
      music3.muted = !music3.muted;
      e.preventDefault();
      squareStatus2 = 'on';
    } else {
      $('#square2').css('right','70%');
      $('#on2').css('right','100%');
      $('#off2').css('left','5%');
      e = e || window.event3;
      music3.muted = !music3.muted;
      e.preventDefault();
      squareStatus2 = 'off';
    }
  });
  $('#bar2').click(function(e){
    if (squareStatus2 === 'off') {
      $('#square2').css('right','-15%');
      $('#on2').css('right','5%');
      $('#off2').css('left','100%');
      e = e || window.event3;
      music3.muted = !music3.muted;
      e.preventDefault();
      squareStatus2 = 'on';
    } else {
      $('#square2').css('right','70%');
      $('#on2').css('right','100%');
      $('#off2').css('left','5%');
      e = e || window.event3;
      music3.muted = !music3.muted;
      e.preventDefault();
      squareStatus2 = 'off';
    }
  });
  let squareStatus4 = 'off';
  $('#square4').click(function(e){
    if (squareStatus4 === 'off') {
      $('#square4').css('right','-15%');
      $('#on4').css('right','5%');
      $('#off4').css('left','100%');
      e = e || window.event4;
      music4.muted = !music4.muted;
      e.preventDefault();
      squareStatus4 = 'on';
    } else {
      $('#square4').css('right','70%');
      $('#on4').css('right','100%');
      $('#off4').css('left','5%');
      e = e || window.event4;
      music4.muted = !music4.muted;
      e.preventDefault();
      squareStatus4 = 'off';
    }
  });
  $('#bar4').click(function(e){
    if (squareStatus4 === 'off') {
      $('#square4').css('right','-15%');
      $('#on4').css('right','5%');
      $('#off4').css('left','100%');
      e = e || window.event4;
      music4.muted = !music4.muted;
      e.preventDefault();
      squareStatus4 = 'on';
    } else {
      $('#square4').css('right','70%');
      $('#on4').css('right','100%');
      $('#off4').css('left','5%');
      e = e || window.event4;
      music4.muted = !music4.muted;
      e.preventDefault();
      squareStatus4 = 'off';
    }
  });
  let squareStatus5 = 'off';
  $('#square5').click(function(e){
    if (squareStatus5 === 'off') {
      $('#square5').css('right','-15%');
      $('#on5').css('right','5%');
      $('#off5').css('left','100%');
      e = e || window.event5;
      music5.muted = !music5.muted;
      e.preventDefault();
      squareStatus5 = 'on';
    } else {
      $('#square5').css('right','70%');
      $('#on5').css('right','100%');
      $('#off5').css('left','5%');
      e = e || window.event5;
      music5.muted = !music5.muted;
      e.preventDefault();
      squareStatus5 = 'off';
    }
  });
  $('#bar5').click(function(e){
    if (squareStatus5 === 'off') {
      $('#square5').css('right','-15%');
      $('#on5').css('right','5%');
      $('#off5').css('left','100%');
      e = e || window.event5;
      music5.muted = !music5.muted;
      e.preventDefault();
      squareStatus5 = 'on';
    } else {
      $('#square5').css('right','70%');
      $('#on5').css('right','100%');
      $('#off5').css('left','5%');
      e = e || window.event5;
      music5.muted = !music5.muted;
      e.preventDefault();
      squareStatus5 = 'off';
    }
  });
  let squareStatus6 = 'off';
  $('#square6').click(function(e){
    if (squareStatus6 === 'off') {
      $('#square6').css('right','-15%');
      $('#on6').css('right','5%');
      $('#off6').css('left','100%');
      e = e || window.event6;
      music6.muted = !music6.muted;
      e.preventDefault();
      squareStatus6 = 'on';
    } else {
      $('#square6').css('right','70%');
      $('#on6').css('right','100%');
      $('#off6').css('left','5%');
      e = e || window.event6;
      music6.muted = !music6.muted;
      e.preventDefault();
      squareStatus6 = 'off';
    }
  });
  $('#bar6').click(function(e){
    if (squareStatus6 === 'off') {
      $('#square6').css('right','-15%');
      $('#on6').css('right','5%');
      $('#off6').css('left','100%');
      e = e || window.event6;
      music6.muted = !music6.muted;
      e.preventDefault();
      squareStatus6 = 'on';
    } else {
      $('#square6').css('right','70%');
      $('#on6').css('right','100%');
      $('#off6').css('left','5%');
      e = e || window.event6;
      music6.muted = !music6.muted;
      e.preventDefault();
      squareStatus6 = 'off';
    }
  });
  let squareStatus7 = 'off';
  $('#square7').click(function(e){
    if (squareStatus7 === 'off') {
      $('#square7').css('right','-15%');
      $('#on7').css('right','5%');
      $('#off7').css('left','100%');
      e = e || window.event7;
      music7.muted = !music7.muted;
      e.preventDefault();
      squareStatus7 = 'on';
    } else {
      $('#square7').css('right','70%');
      $('#on7').css('right','100%');
      $('#off7').css('left','5%');
      e = e || window.event7;
      music7.muted = !music7.muted;
      e.preventDefault();
      squareStatus7 = 'off';
    }
  });
  $('#bar7').click(function(e){
    if (squareStatus7 === 'off') {
      $('#square7').css('right','-15%');
      $('#on7').css('right','5%');
      $('#off7').css('left','100%');
      e = e || window.event7;
      music7.muted = !music7.muted;
      e.preventDefault();
      squareStatus7 = 'on';
    } else {
      $('#square7').css('right','70%');
      $('#on7').css('right','100%');
      $('#off7').css('left','5%');
      e = e || window.event7;
      music7.muted = !music7.muted;
      e.preventDefault();
      squareStatus7 = 'off';
    }
  });


  function play(){
    $('#square').css('right','-15%');
    $('#on').css('right','5%');
    $('#off').css('left','100%');
    $('#square2').css('right','-15%');
    $('#on2').css('right','5%');
    $('#off2').css('left','100%');
    $('#square4').css('right','-15%');
    $('#on4').css('right','5%');
    $('#off4').css('left','100%');
    $('#square5').css('right','-15%');
    $('#on5').css('right','5%');
    $('#off5').css('left','100%');
    $('#square6').css('right','-15%');
    $('#on6').css('right','5%');
    $('#off6').css('left','100%');
    $('#square7').css('right','-15%');
    $('#on7').css('right','5%');
    $('#off7').css('left','100%');
    $('#master-play').attr("src","https://cdn2.iconfinder.com/data/icons/media-and-navigation-buttons-square/512/Button_4-512.png");
    squareStatus = 'on';
    squareStatus2 = 'on';
    squareStatus4 = 'on';
    squareStatus5 = 'on';
    squareStatus6 = 'on';
    squareStatus7 = 'on';
    if (music2.paused) {
      music2.play();
      music3.play();
      // music4.play();
      // music5.play();
      // music6.play();
      // music7.play();
    } else {
      music2.pause();
      music3.pause();
      // music4.pause();
      // music5.pause();
      // music6.pause();
      // music7.pause();
      $('#master-play').attr("src","https://www.conformingtojesus.com/images/latest/play-button.png");
    }
  }
});
