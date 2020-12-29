var width = 0
var height = 0
var heartCount = 1
var time = 10
var createGnatTime = 1500
var level = window.location.search
level = level.replace('?', '')
if (level === 'easy'){
	createGnatTime = 1500
} else if (level === 'normal'){
	createGnatTime = 1000
} else if (level === 'hard'){
	createGnatTime = 750
}

function resizeScene(){
	width = window.innerWidth
	height = window.innerHeight
	console.log(width, height)
}

resizeScene()

function randomPosition(){
	
	if (document.getElementById('gnat')){

		document.getElementById('gnat').remove()

		if(heartCount > 3){

			window.location.href = 'gameOver.html'

		}
		else{

			document.getElementById('heart' + heartCount).src = 'image/heartEmpty.png'
			heartCount++

		}

		}

	var positionX = Math.floor(Math.random() * width -100)
	positionX = positionX < 0 ? 0 : positionX
	var positionY = Math.floor(Math.random() * height - 100)
	positionY = positionY < 0 ? 0 : positionY

	var gnat = document.createElement('img')
	gnat.src = 'image/gnat.png'
	gnat.className = randomSize() + ' ' + randomSide()
	gnat.style.left = positionX + 'px'
	gnat.style.top = positionY + 'px'
	gnat.style.position = 'absolute'
	gnat.id = 'gnat'
	gnat.onclick = function(){
		this.remove()
	}

	document.body.appendChild(gnat)

	randomSize()

}

function randomSize(){
	var classNumber = Math.floor(Math.random() * 3)
	console.log(classNumber)
	switch (classNumber){
		case 0:
			return 'gnat1'
		case 1:
			return 'gnat2'
		case 2:
			return 'gnat3'
	}

}

function randomSide(){
	var side = Math.floor(Math.random() * 2)
	
	switch (side){
		case 0:
			return 'leftSide'
		case 1:
			return 'rightSide'
		}
}

var chronometer = setInterval(function(){
	time -= 1
	if (time <= 0){
		window.location.href = 'win.html'
	}
	else{
	document.getElementById('chronometer').innerHTML = time
	}
}, 1000)
