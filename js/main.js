$(document).ready(function() {

  // Generate cells based on user input size
  makeGrid(32);

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


function makeGrid(rowColCount) {

  var size = 960 / rowColCount;

  for (var i = 0; i < rowColCount; i++) {
      var $row = $("<div class='row' id='" + i + "'></div>");
      $row.appendTo('.container');
      addCols(rowColCount, i);
      setSize(size);
  }

  return console.log('qtd de linhas: ' + rowColCount);

};

function addCols(colCount, rowId) {

    for (var j = 0; j < colCount ; j++) {
        $('#' + rowId ).append("<div class='cell'></div>");
    }
    return console.log('qtd de colunas: ' + colCount);
};

function setSize(newSize) {

    $('.cell').css('height', newSize + 'px');
    $('.cell').css('width', newSize + 'px');
    $('.row').css('height', newSize + 'px');
};


function resizeBoard() {
    var numCell = 0;
    numCell = $('#nCell').val();

    if (numCell > 0 && $.isNumeric(numCell)) {
      $('.cell').remove();
      $('.row').remove();
        makeGrid(numCell);
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
