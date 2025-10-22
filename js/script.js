
function playGame(arg) {
    
    clearMessages();
    let playerInput = arg;

    function getMoveName(MoveID) {
        if (MoveID == 1) {
            return 'Kamień';
        }else if(MoveID == 2){
            return 'Papier';
        }else if(MoveID == 3){
            return 'Nożyce';
        }
    }
    
    
    
//    let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
    let RandomNumber = Math.floor(Math.random() * 3 + 1);
    let computerMove = getMoveName(RandomNumber);
    let playerMove = getMoveName(playerInput);
    
    

    console.log('Liczba '+RandomNumber);
    
    printMessage('Mój ruch to '+computerMove);
    
    console.log(playerMove);
    printMessage('Twój ruch to '+playerMove);
    
    function displayResult(argComputerMove, argPlayerMove) {
        console.log('moves:', computerMove, playerMove);
        if (argComputerMove == 'Kamień' && argPlayerMove == 'Papier') { //cpu == kamień
            printMessage('Ty wygrywasz!');
        } else if(argComputerMove == 'Kamień' && argPlayerMove == 'Kamień'){
            printMessage('Remis');
        } else if(argComputerMove == 'Kamień' && argPlayerMove == 'Nożyce'){
            printMessage('Ja wygrywam!');
        }else if(argComputerMove == 'Papier' && argPlayerMove == 'Kamień'){ //cpu == papier
            printMessage('Ja wygrywam!');
        }else if(argComputerMove == 'Papier' && argPlayerMove == 'Papier'){
            printMessage('Remis');
        }else if(argComputerMove == 'Papier' && argPlayerMove == 'Nożyce'){
            printMessage('Ty wygrywasz!');
        }else if(argComputerMove == 'Nożyce' && argPlayerMove == 'Kamień'){ //cpu == nożyce
            printMessage('Ty wygrywasz!');
        }else if(argComputerMove == 'Nożyce' && argPlayerMove == 'Papier'){
            printMessage('Ja wygrywam!');
        }else if(argComputerMove == 'Nożyce' && argPlayerMove == 'Nożyce'){
            printMessage('Ty wygrywasz!');
        }else{
            printMessage('Coś poszło nie tak :(');
        } 
    }
    
    displayResult(computerMove, playerMove);
}



let rockButton = document.getElementById('play-rock');
let paperButton = document.getElementById('play-paper');
let scissorsButton = document.getElementById('play-scissors');

rockButton.addEventListener('click', function(){
    playGame(1);
});
paperButton.addEventListener('click', function(){
    playGame(2);
});
scissorsButton.addEventListener('click', function(){
    playGame(3);
});