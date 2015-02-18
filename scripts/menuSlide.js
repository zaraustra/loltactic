$(function(){
	$(".menuTitle").click(function(){
		$(".submenu").slideUp();

		var test=$(this).attr("class");

		switch (test){
			case "menuTitle utiSimbols":
				if($("#utiSimbols").is(':hidden')){
					$("#utiSimbols").slideDown();
				} else {$("#utiSimbols").slideUp();}
				break;
			case "menuTitle classSimbols":
				if($("#classSimbols").is(':hidden')){
					$("#classSimbols").slideDown();
				} else {$("#classSimbols").slideUp();}
				break;
			case "menuTitle roleSimbols":
				if($("#roleSimbols").is(':hidden')){
					$("#roleSimbols").slideDown();
				} else {$("#roleSimbols").slideUp();}
				break;
			case "menuTitle champSimbols":
				if($("#champSimbols").is(':hidden')){
					$("#champSimbols").slideDown();
				} else {$("#champSimbols").slideUp();}
				break;
		}
	});

	$(".team").click(function(){
		$(".team").removeClass("selected");
		$(this).addClass("selected");
		//check selected team and set color 
		if ($(this).attr("id")=="blue"){
			color="blue";
			$("#red").slideUp();
		} else {
			color="red";
			$("#blue").slideUp();}
	});
	
	$("#teamSelect").click(function(){
		$(".team").slideDown();
	});
});