
let RandomNumber = Math.floor(Math.random() * 3 + 1)

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
let computerMove = `unknown`;
let playerMove = 'unknown';

function printMessage(msg){
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}

console.log('Liczba '+RandomNumber);

if(RandomNumber == 1){
    computerMove = 'Kamień';
}
else if(RandomNumber == 2){
    computerMove = 'Papier';
}
else{
    computerMove = 'Nożyce';
}

printMessage('Mój ruch to '+computerMove);

if (playerInput == 1) {
    playerMove = 'Kamień';
} else if (playerInput == 2) {
    playerMove = 'Papier';
} else if(playerInput == 3){
    playerMove = 'Nożyce';
}

console.log(playerMove);
printMessage('Twój ruch to '+playerMove);

if (computerMove == 'Kamień' && playerMove == 'Papier') { //cpu == kamień
    printMessage('Ty wygrywasz!');
} else if(computerMove == 'Kamień' && playerMove == 'Kamień'){
    printMessage('Remis');
} else if(computerMove == 'Kamień' && playerMove == 'Nożyce'){
    printMessage('Ja wygrywam!');
}else if(computerMove == 'Papier' && playerMove == 'Kamień'){ //cpu == papier
    printMessage('Ja wygrywam!');
}else if(computerMove == 'Papier' && playerMove == 'Papier'){
    printMessage('Remis');
}else if(computerMove == 'Papier' && playerMove == 'Nożyce'){
    printMessage('Ty wygrywasz!');
}else if(computerMove == 'Nożyce' && playerMove == 'Kamień'){ //cpu == nożyce
    printMessage('Ty wygrywasz');
}else if(computerMove == 'Nożyce' && playerMove == 'Papier'){
    printMessage('Ja wygrywam!');
}else if(computerMove == 'Nożyce' && playerMove == 'Nożyce'){
    printMessage('Ty wygrywasz!');
}else{
    printMessage('Coś poszło nie tak :(');
}