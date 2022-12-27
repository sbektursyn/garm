// 1 шаг = объеденить вопросы и ответы
// 2 шаг = придумать правльную вариацию функции
// 3 шаг = открыть ответ
// 4 шаг = закрыть все остальные ответы

/*function first(){
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
}*/

document.querySelectorAll('.accordion').forEach((element)=> {
	//берем все элементы с классом .accordion
	element.addEventListener('click', () => {
		//создаем событие по клику
		let content = element.nextElementSibling;
		//берем следующий элемент 
		console.log(content)

		if (content.style.maxHeight){
			//если в стиле ответа присутствует max-height прировнять его к нулю
			document.querySelectorAll('.content').forEach((element) => element.style.maxHeight = null)
		} else {
			//в другом случае прировнять все другие элементы к нулю и сделать так чтобы именно у следующего элемента после вопроса max-height = высоте самого контента
			document.querySelectorAll('.content').forEach((element) => element.style.maxHeight = null)
			content.style.maxHeight = content.scrollHeight + 'px'
		}
		 
	})
})

//forEach вызывает функцию для каждого элемента
//nextElementSibling берет следующий элемент (все облегчил спасибо разрабам)))
//overflow:hidden; скрывает все элементы за пределами блока
//используем max-height и hidden чтобы манипулировать ответами







