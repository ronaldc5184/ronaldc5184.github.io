var currentPlayer = 1;
var turns = 0;
var b = document.querySelectorAll("button");
const winConditions = [[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]];

for (i = 0; i < 8; i++) {
	for (i2 = 0; i2 < 3; i2++) {
		winConditions[i][i2] -= 1;
	}
}

for (i = 0; i < 9; i++) {
	b[i].addEventListener("click", takeTurn);
}
b[9].addEventListener("click", function(){location.reload();});
b[10].addEventListener("click", function(){document.querySelector('#container').style.display = "none"});
b[11].addEventListener("click", function(){document.querySelector('#container2').style.display = "none"});

function takeTurn() {
	if (currentPlayer == 1 && this.innerHTML == "") {
		this.innerHTML = "X";
		this.style.color = "red";
		currentPlayer = 2;
		turns++;
	} else if (currentPlayer == 2 && this.innerHTML == "") {
		this.innerHTML = "O";
		this.style.color = "lime";
		currentPlayer = 1;
		turns++;
	}
	
	console.log("Turn " + turns);	
	
	setTimeout(function(){checkWin()},100);
	
}

function checkWin() {
	var ended = 0;
	for (i = 0; i < 8; i++) {
		if (b[winConditions[i][0]].innerHTML == b[winConditions[i][1]].innerHTML && b[winConditions[i][1]].innerHTML == b[winConditions[i][2]].innerHTML && b[winConditions[i][0]].innerHTML != "") {
			announceWin(b[winConditions[i][0]].innerHTML);
			ended = 1;
			break;
		}
	}
	if (turns == 9 && ended == 0) {
		document.body.style.backgroundImage = 'url("cat.gif")';
		document.querySelector('#container').style.display = "flex";
	}
	
}

function announceWin(winner) {
	document.querySelector('#container2').style.display = "flex";
	document.querySelector('#wintext').innerHTML = winner + " wins!"
	if (winner == "X") {
		document.querySelector('#wintext').style.color = "red";
	} else {
		document.querySelector('#wintext').style.color = "lime";
	}
	for (i = 0; i < 9; i++) {
		b[i].removeEventListener("click", takeTurn);
	}
}

