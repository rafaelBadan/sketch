$(document).ready(function() {

  $( "#nCell" ).keyup(function() {
    var value = $( this ).val();
    $( "#feedback" ).text( value + 'x' + value);
  })
  .keyup();

  // Generate cells based on user input size
  makeGrid(16,16);
  
  $('.cell').hover(draw);

  // Reset board color
  $('#clearBtn').click(function() {
    clearBoard();
  });

  //Resize cells

  $('#resizeBtn').click(function() {
    var numCell = 0;
    var newSize = 0;
      $('.container').empty();
        numCell = $('#nCell').val();
        newSize = 960/numCell;
        // Generate cells based on user input size
        makeGrid(numCell,numCell);
        $('.cell').css('height', newSize + 'px');
        $('.cell').css('width', newSize + 'px');
  });



});

function makeGrid(row,col) {
  for (var i = 0; i < row; i++) {
        var $row = $("<tr class='row' id='" + i + "'></tr>");
        $row.appendTo('.container');
            for (var j = 0; j < col ; j++) {
                $('#' + i ).append("<div class='cell'></div>");
            }
  }
};

function draw() {
	var currentOp = +$(this).css('opacity');
	if (currentOp < 1) {
		currentOp += 0.1;
		$(this).css({'opacity': currentOp});
	}
}

function clearBoard() {
  $('.cell').css('background-color','#f2d2d2');
};
