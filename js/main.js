$(document).ready(function() {

  // Generate cells based on user input size
  makeGrid(16,16);

  paint();

  // Reset board color
  $('#clearBtn').click(function() {
    clearBoard();
  });

  //Resize cells

  $('#resizeBtn').click(function() {
    resizeBoard();
  });


});


function paint() {
  $('.cell').mouseenter(function() {
          $(this).css({'opacity': 0.9});
  });
};


function makeGrid(row,col) {
  for (var i = 0; i < row; i++) {
        var $row = $("<tr class='row' id='" + i + "'></tr>");
        $row.appendTo('.container');
            for (var j = 0; j < col ; j++) {
                $('#' + i ).append("<div class='cell'></div>");
            }
  }

};


function resizeBoard() {
    var numCell = 0;
    var newSize = 0;

    numCell = $('#nCell').val();

    if (numCell > 0 && $.isNumeric(numCell)) {
      $('.cell').remove();

        newSize = 960/numCell;
        // Generate cells based on user input size
        makeGrid(numCell,numCell);
        $('.cell').css('height', newSize + 'px');
        $('.cell').css('width', newSize + 'px');
        // $('.cell').mouseenter(function() {
        //   $(this).css({'opacity': 0.9});
        // });
        paint();
    } else {
      alert('You must enter a number');
      $('#nCell').val('16');
    }
};


function clearBoard() {
  $('.cell').css('background-color','black');
  $('.cell').css('opacity',0.1);
};
