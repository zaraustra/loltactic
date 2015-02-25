var canvas, ctx;
mousePressed = false;

// Initialization sequence.
function init () {
	// Find the canvas element.
    ctx = document.getElementById('imageView').getContext("2d");
    $('#imageView').mousedown(function (e) {
        mousePressed = true;
        Draw(e.pageX - $(this).offset().left, e.pageY - $(this).offset().top, false);
    });

    $('#imageView').mousemove(function (e) {
        if (mousePressed) {
            Draw(e.pageX - $(this).offset().left, e.pageY - $(this).offset().top, true);
        }
    });

    $('#imageView').mouseup(function (e) {
        if (mousePressed) {
            mousePressed = false;
            cPush();
        }
    });

    $('#imageView').mouseleave(function (e) {
        if (mousePressed) {
            mousePressed = false;
            cPush();
        }
    });
    drawImage();
}

function drawImage() {
	var image = new Image();
	image.src = 'images/map.jpg';
	$(image).load(function () {
		ctx.drawImage(image, 0, 0, 718, 600);
		cPush();
	});    
}

function Draw(x, y, isDown) {
    if (isDown) {
        ctx.beginPath();
        ctx.strokeStyle = $("ul#colorpicker li").find(".selected").attr("id");
		ctx.lineWidth = 3;
        ctx.lineJoin = "round";
        ctx.moveTo(lastX, lastY);
        ctx.lineTo(x, y);
        ctx.closePath();
        ctx.stroke();
    }
    lastX = x;
    lastY = y;
}

//undo functions
var cPushArray = new Array();
var cStep = -1;

function cPush() {
    cStep++;
    if (cStep < cPushArray.length) { cPushArray.length = cStep; }
    cPushArray.push(document.getElementById('imageView').toDataURL());
}

function cUndo() {
	if (cStep > 0) {
		cStep--;
		var canvasPic = new Image();
		canvasPic.src = cPushArray[cStep];
		canvasPic.onload = function () { ctx.drawImage(canvasPic, 0, 0);}
	}
}

function cRedo() {
	if (cStep < cPushArray.length-1) {
		cStep++;
		var canvasPic = new Image();
		canvasPic.src = cPushArray[cStep];
		canvasPic.onload = function () { ctx.drawImage(canvasPic, 0, 0); }
	}
}

$(function(){
	init();
	drawImage();
	//colorpicker
	$('#colorpicker li div').click(function(){
		$('#colorpicker li div').removeClass("selected");
		$(this).addClass("selected");
	});
});