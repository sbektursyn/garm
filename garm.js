const ans1 = document.querySelector('#answer1');
const ans2 = document.querySelector('#answer2');
const ans3 = document.querySelector('#answer3');

function first(){
	ans1.style.display = 'flex'
	ans2.style.display = 'none'
	ans3.style.display = 'none'
}

function second(){
	ans1.style.display = 'none'
	ans2.style.display = 'flex'
	ans3.style.display = 'none'
}

function third(){
	ans1.style.display = 'none'
	ans2.style.display = 'none'
	ans3.style.display = 'flex'
}