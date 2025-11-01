
{
    const playGame = function(arg) {
        
        clearMessages();
        let playerInput = arg;
        
        const getMoveName = function(MoveID) {
            if (MoveID == 1) {
                return 'Kamień';
            }else if(MoveID == 2){
                return 'Papier';
            }else if(MoveID == 3){
                return 'Nożyce';
            }
        }
        
        
        
        //    let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
        const RandomNumber = Math.floor(Math.random() * 3 + 1);
        const computerMove = getMoveName(RandomNumber);
        const playerMove = getMoveName(playerInput);

        printMessage('You play: '+playerMove);
        printMessage('I play: '+computerMove);
        
        
        const displayResult = function(argComputerMove, argPlayerMove) {
            console.log('moves:', computerMove, playerMove);
            if (argComputerMove == 'Kamień' && argPlayerMove == 'Papier') { //cpu == kamień
                printMessage('You win!');
                updateScore('resultPlayer');
            } else if(argComputerMove == 'Kamień' && argPlayerMove == 'Kamień'){
                printMessage('Tie');
            } else if(argComputerMove == 'Kamień' && argPlayerMove == 'Nożyce'){
                printMessage('I win!');
                updateScore('resultCPU');
            }else if(argComputerMove == 'Papier' && argPlayerMove == 'Kamień'){ //cpu == papier
                printMessage('I Win!');
                updateScore('resultCPU');
            }else if(argComputerMove == 'Papier' && argPlayerMove == 'Papier'){
                printMessage('Tie');
            }else if(argComputerMove == 'Papier' && argPlayerMove == 'Nożyce'){
                printMessage('You win!');
                updateScore('resultPlayer');
            }else if(argComputerMove == 'Nożyce' && argPlayerMove == 'Kamień'){ //cpu == nożyce
                printMessage('You win!');
                updateScore('resultPlayer');
            }else if(argComputerMove == 'Nożyce' && argPlayerMove == 'Papier'){
                printMessage('I win!');
                updateScore('resultCPU');
            }else if(argComputerMove == 'Nożyce' && argPlayerMove == 'Nożyce'){
                printMessage('Tie!');
            }else{
                printMessage('Something went wrong :(');
            } 
        }
        
        displayResult(computerMove, playerMove);
    }
    
    
    
    const rockButton = document.getElementById('play-rock');
    const paperButton = document.getElementById('play-paper');
    const scissorsButton = document.getElementById('play-scissors');
    
    rockButton.addEventListener('click', function(){
        playGame(1);
    });
    paperButton.addEventListener('click', function(){
        playGame(2);
    });
    scissorsButton.addEventListener('click', function(){
        playGame(3);
    });
}