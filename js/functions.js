function updateScore(result){
	const scoreElement = document.getElementById(result);
	let score = Number(scoreElement.innerHTML);
	score += 1;
	scoreElement.innerHTML = score;
}


function printMessage(msg){
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}