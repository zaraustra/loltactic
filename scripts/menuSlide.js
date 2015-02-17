$(function(){
	$(".ulMenu").click(function(){
		var test=$(this).attr("class");
		if ($(this).hasClass("blue")){
			var color="blue";
			$(".ulBlue").slideUp();
		} else {
			var color="red";
			$(".ulRed").slideUp();
		}
		switch (test){
			case "ulMenu utiSimbols"+" "+color:
				if($("#utiSimbols"+color).is(':hidden')){
					$("#utiSimbols"+color).slideDown();
				} else {$("#utiSimbols"+color).slideUp();}
				break;
			case "ulMenu classSimbols"+" "+color:
				if($("#classSimbols"+color).is(':hidden')){
					$("#classSimbols"+color).slideDown();
				} else {$("#classSimbols"+color).slideUp();}
				break;
			case "ulMenu roleSimbols"+" "+color:
				if($("#roleSimbols"+color).is(':hidden')){
					$("#roleSimbols"+color).slideDown();
				} else {$("#roleSimbols"+color).slideUp();}
				break;
			case "ulMenu champSimbols"+" "+color:
				if($("#champSimbols"+color).is(':hidden')){
					$("#champSimbols"+color).slideDown();
				} else {$("#champSimbols"+color).slideUp();}
				break;
		}
	});
});