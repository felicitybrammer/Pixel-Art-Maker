// Select colour input and add click event
function clickCell() {
  //choose colour
  const colorPicker = document.getElementById('colorPicker');
  const cellClass = document.getElementsByClassName('cell');
  for (let i = 0; i < cellClass.length; i++) {
    cellClass[i].addEventListener('click', function (event) {
      let targetCell = event.target; //where was the click?
      targetCell.style.backgroundColor = colorPicker.value;
    });
  }
}

// Select size input - get values from form and call makeGrid()
function submitForm() {
  event.preventDefault();
  const gridHeight = document.getElementById('inputHeight').value;
  const gridWidth = document.getElementById('inputWidth').value;
  makeGrid(gridHeight, gridWidth);
}

//call submitForm() when submit is pressed
let size = document.getElementById('sizePicker');
size.onsubmit = function () {
  submitForm();
};


// When size is submitted by the user, call makeGrid()
function makeGrid(gridHeight, gridWidth) {
  const canvas = document.getElementById('pixelCanvas');
  let grid = '';

  //loop over rows
  for (let i = 0; i < gridHeight; i++) {
    grid += '<tr class="row: '+ i + '">';
    //loop over cells, increase row by 1, add cells to grid
    for (let j = 0; j < gridWidth; j++) {
      grid += '<td class = "cell" id = "row' + 1 + 'cell: ' + j  + '"> </td>';
    }
    //add rows to grid
    grid += '</tr>';
  }
  //add grid to canvas element
  canvas.innerHTML = grid;

  //add click event to grid cells
  clickCell();
}
