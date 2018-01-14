"use strict";

// Get All Fields in the Sudoku board
var fields = document.getElementsByClassName("field");

function addPuzzleToBoard(puzzle){
  for (var i = 0; i < fields.length; i++) {
    if (puzzle.charAt(i) == "0") {
        fields[i].innerHTML = ""
    } else {
        fields[i].innerHTML = puzzle.charAt(i);
        fields[i].classList.add("solved");
    }
  }
}

document.addEventListener('DOMContentLoaded', function() {
  
  // Define Puzzle
  var givenPuzzle = "800406007000000400010000650509030780000070000048020103052000090001000000300902005";
  var solvedPuzzle = "835416927296857431417293658569134782123678549748529163652781394981345276374962815"
  
  // Create a 9x9 Board
  for (var i = 0; i < 81; i++) {
    var div = document.createElement("div");
    div.classList.add("field");

    // Add eventlistener on click add select class on div
    div.addEventListener("click", function select() {
      if (this.classList.contains("solved") === false) {
        for (var i = 0; i < fields.length; i++) {
          fields[i].classList.remove("select");
        }
        this.classList.add('select');
      }
    });
    document.getElementById("board").appendChild(div);
  }

  //Add givenPuzzle to the board
  addPuzzleToBoard(givenPuzzle);


  // Buttons  
  document.getElementById("result").addEventListener("click", function() {
    for (var i = 0; i < fields.length; i++) {
      if(!fields[i].classList.contains('solved')){
        fields[i].classList.add("lightgray");
      }
      fields[i].innerHTML = solvedPuzzle.charAt(i);
    }
  });
  document.getElementById("reset").addEventListener("click", function() {
    location.reload();
  });
  document.getElementById("check").addEventListener("click", check);
  document.getElementById("solved").addEventListener("click", function(){
    this.classList.remove('show')
  })


  
  // Check for Solved Puzzle
  function check() {
    var getPuzzle = ''
    for (var i = 0; i < fields.length; i++) {
      getPuzzle += fields[i].innerHTML;
    }
    if(getPuzzle === solvedPuzzle){
      document.getElementById("solved").classList.add('show');
      document.getElementById("solved").innerHTML = "<h1>Congrats! You did it!</h1>";
    } else{
      document.getElementById("solved").classList.add('show');
      document.getElementById("solved").innerHTML = "<h1>Not yet. Try again!</h1>";
    }
  }

});

// Allow keyboard input
document.addEventListener("keypress", function keypress(e) {
  var key = e.keyCode || e.charCode;
  if (key > 48 && key <= 57) { //keyCode values for numeric keypad
    document.getElementsByClassName("select")[0].innerHTML = key - 48;
  } else if (key == 13) { // if Press Enter Key
    document.getElementsByClassName("select")[0].classList.remove("select");
  } else {
    document.getElementsByClassName("select")[0].innerHTML = "";
  }
});

// // Check for win
// function check() {
//   var total = 0;
//   for (var i = 1; i <= 9; i++) {
//     for (var j = i * 9 - 9; j < i * 9; j++) {
//       if (fields[j].innerHTML !== "") {
//         total += parseInt(fields[j].innerHTML);
//       } else {
//       }
//     }
//     for (var k = i; k < 82; k += 9) {
//       total += parseInt(fields[k - 1].innerHTML);
//     }
//   }
//   if (total - 2 == 45 * 18) {
//     alert("hooray");
//   } else {
//     alert("nooo");
//   }
// }

// function solve() {
//   var array = [1, 2, 3, 4, 6, 7, 8, 9];

//   var missing = 9 - array.length;
//   var total = 38;

//   for (var i = 0; i < array.length - 1; i++) {
//     console.log(array[i]);
//     //var total += array[i];
//   }
//   console.log(45 % total);
// }
