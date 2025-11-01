const updateScore = function(result){
	const scoreElement = document.getElementById(result);
	let score = Number(scoreElement.innerHTML);
	score += 1;
	scoreElement.innerHTML = score;
}


const printMessage = function(msg){
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

const clearMessages = function(){
	document.getElementById('messages').innerHTML = '';
}