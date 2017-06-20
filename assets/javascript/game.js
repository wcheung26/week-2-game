var target
var red
var green
var blue
var yellow

function genTarget() {
	target = Math.floor(Math.random() * 102) + 19
}

function genCrystal() {
	red = Math.floor(Math.random() * 12) + 1
	green = Math.floor(Math.random() * 12) + 1
	blue = Math.floor(Math.random() * 12) + 1
	yellow = Math.floor(Math.random() * 12) + 1
}