var sel, selPC;
var vezPC = false;
var fim = false;
$(document).ready(function() {
  $('.players').click(function() {
    if ($(this).text() == 'One player') {
      vezPC = true;
    }
    $('.menu').fadeOut();
    $('.xo').delay(1000).fadeIn().delay;
  });
  $('.xis').click(function() {
    sel = $(this).text();

    if (sel == 'X') {
      selPC = 'O';
    } else {
      selPC = 'X';
    }

    $('.xo').fadeOut();
    $('section').delay(1000).fadeIn().delay;
  });
  var spaces = [
  $('.1').children(),
  $('.2').children(),
  $('.3').children(),
  $('.4').children(),
  $('.5').children(),
  $('.6').children(),
  $('.7').children(),
  $('.8').children(),
  $('.9').children()
  ];

  $('.reset').click(function() {
    spaces.forEach(function(name) {
      name.text("");
    });
    fim = false;
    rodada = 0;
    $('h1').text('');
    $('span').css('color','#333');
  });

  $('td').click(function() {
    if (!fim) {
      if ($(this).children().text() == '') {
        $(this).children().text(sel);
        if (!vezPC) {
          if (sel == 'X') {
            sel = 'O';
          } else {
            sel = 'X';
          }
        }
      }
      vencer(sel);
      if (vezPC) {
        if ($('h1').text() == '') {
          fim = true;
          setTimeout(pc, 500);
        }
      }
    }
  });

  function pc() {
    var pos = Math.floor((Math.random() * 9) + 0);
    if (spaces[pos].text() == '') {
      spaces[pos].text(selPC);
    } else {
      pc();
    }
    vencer(selPC);
    fim = false;
  }

  function vencer(play) {
    if (spaces[0].text() == spaces[1].text() && spaces[0].text() == spaces[2].text() && spaces[2].text() !== '') {
      $('h1').text("The "+play + ' Wins!');
      spaces[0].css('color',"red");
      spaces[1].css('color',"red");
      spaces[2].css('color',"red");
      fim = true;
    }
    if (spaces[3].text() == spaces[4].text() && spaces[3].text() == spaces[5].text() && spaces[5].text() !== '') {
      $('h1').text("The "+play + ' Wins!');
      spaces[3].css('color',"red");
      spaces[4].css('color',"red");
      spaces[5].css('color',"red");
      fim = true;
    }
    if (spaces[6].text() == spaces[7].text() && spaces[6].text() == spaces[8].text() && spaces[8].text() !== '') {
      $('h1').text("The "+play + ' Wins!');
      spaces[6].css('color',"red");
      spaces[7].css('color',"red");
      spaces[8].css('color',"red");
      fim = true;
    }
    if (spaces[0].text() == spaces[3].text() && spaces[0].text() == spaces[6].text() && spaces[6].text() !== '') {
      $('h1').text("The "+play + ' Wins!');
      spaces[0].css('color',"red");
      spaces[3].css('color',"red");
      spaces[6].css('color',"red");
      fim = true;
    }
    if (spaces[1].text() == spaces[4].text() && spaces[1].text() == spaces[7].text() && spaces[7].text() !== '') {
      $('h1').text("The "+play + ' Wins!');
      spaces[1].css('color',"red");
      spaces[4].css('color',"red");
      spaces[7].css('color',"red");
      fim = true;
    }
    if (spaces[2].text() == spaces[5].text() && spaces[2].text() == spaces[8].text() && spaces[8].text() !== '') {
      $('h1').text("The "+play + ' Wins!');
      spaces[2].css('color',"red");
      spaces[5].css('color',"red");
      spaces[8].css('color',"red");
      fim = true;
    }
    if (spaces[0].text() == spaces[4].text() && spaces[0].text() == spaces[8].text() && spaces[8].text() !== '') {
      $('h1').text("The "+play + ' Wins!');
      spaces[0].css('color',"red");
      spaces[4].css('color',"red");
      spaces[8].css('color',"red");
      fim = true;
    }
    if (spaces[2].text() == spaces[4].text() && spaces[2].text() == spaces[6].text() && spaces[6].text() !== '') {
      $('h1').text("The "+play + ' Wins!');
      spaces[2].css('color',"red");
      spaces[4].css('color',"red");
      spaces[6].css('color',"red");
      fim = true;
    }
  }

});