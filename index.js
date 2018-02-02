/**
 * Created by nivethida on 8/8/17.
 */
var turns = "O";
var result = false;



function tictactoe(cells) {
    if(cells.innerHTML == "") {
        document.getElementById("message").innerHTML = "";
        cells.innerHTML = turns;

        switchTurn();
        findResult();
    }
    else{
        document.getElementById("message").innerHTML = "The cell is already filled";
    }
}
 function switchTurn() {
if(turns === "X"){
    turns = "O";
}
else {
    turns = "X";
}
 }

 function findResult(cells) {
    var a00 = $("#I00").html();
    var a01 = $("#I01").html();
    var a02 = $("#I02").html();
    var a10 = $("#I10").html();
    var a11 = $("#I11").html();
    var a12 = $("#I12").html();
    var a20 = $("#I20").html();
    var a21 = $("#I21").html();
    var a22 = $("#I22").html();

    if( (a00 == 'X' && a01 == 'X' && a02 == 'X') ||
        (a10 == 'X' && a11 == 'X' && a12 == 'X') ||
        (a20 == 'X' && a21 == 'X' && a22 == 'X') ||
        (a00 == 'X' && a10 == 'X' && a20 == 'X') ||
        (a01 == 'X' && a11 == 'X' && a21 == 'X') ||
        (a02 == 'X' && a12 == 'X' && a22 == 'X') ||
        (a00 == 'X' && a11 == 'X' && a22 == 'X') ||
        (a02 == 'X' && a11 == 'X' && a20 == 'X')
    )
    {
        document.getElementById("message").innerHTML = "X has won";
    }
    else if((a00 == 'O' && a01 == 'O' && a02 == 'O') ||
         (a10 == 'O' && a11 == 'O' && a12 == 'O') ||
         (a20 == 'O' && a21 == 'O' && a22 == 'O') ||
         (a00 == 'O' && a10 == 'O' && a20 == 'O') ||
         (a01 == 'O' && a11 == 'O' && a21 == 'O') ||
         (a02 == 'O' && a12 == 'O' && a22 == 'O') ||
         (a00 == 'O' && a11 == 'O' && a22 == 'O') ||
         (a02 == 'O' && a11 == 'O' && a20 == 'O')
    ) {
        document.getElementById("message").innerHTML = "O has won";

    }
 }
