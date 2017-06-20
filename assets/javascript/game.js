var target
var red
var green
var blue
var yellow
var wins = 0
var losses = 0
var total = 0

function genTarget() {
	target = Math.floor(Math.random() * 102) + 19;
	$("#target").text(target);
}

function genCrystal() {
	red = Math.floor(Math.random() * 12) + 1;
	green = Math.floor(Math.random() * 12) + 1;
	blue = Math.floor(Math.random() * 12) + 1;
	yellow = Math.floor(Math.random() * 12) + 1;
}

function checkWin() {
	if (total === target) {
		wins ++;
		$("#won").html("<p>You Win!</p>");
		$("#wins").text(wins);
		total = 0;
		genCrystal();
		genTarget();

	}
	if (total > target) {
		losses ++;
		$("#won").html("<p>You Lost!</p>");
		$("#losses").text(losses);
		total = 0
		genCrystal();
		genTarget();
	}
}

function update() {
	$("#current").text(total);
	checkWin();
}

genCrystal();
genTarget();

$("#red").on("click", function() {
	total += red;
	update();
});
$("#green").on("click", function() {
	total += green;
	update();
});
$("#blue").on("click", function() {
	total += blue;
	update();
});
$("#yellow").on("click", function() {
	total += yellow;
	update();
});



