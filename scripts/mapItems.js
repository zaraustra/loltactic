$(function(){
	//inizializing global variables
	itemIndex=0;
	
	//select "blue team" as default
	color="blue";
	
	//make simbols draggable
	$(".simbol").draggable({helper:"clone", revert:true, start:function(){itemIndex;}});
	$(".role").draggable({helper:"clone", revert:true, start:function(){itemIndex;}});
	
	//make map droppable
	$("#map").droppable({
		drop:function( event, ui ) {
			if ($(ui.draggable).hasClass("simbol")){
				$(this).append($(ui.helper).clone());
				//make new mapItem unique and set position into map div
				$("#map .simbol").attr("id",itemIndex);
					$("#"+itemIndex).css({left:$("#"+itemIndex).position().left-($(document).width()-718)/2});
					$("#"+itemIndex).css({top:$("#"+itemIndex).position().top-($(document).height()-600)/2});
				//add as border color as selected team
				if ($("#blue").hasClass("selected")){
					$("#"+itemIndex).css({"border":"2px solid cyan"});
				} else {
					$("#"+itemIndex).css({"border":"2px solid red"});
				}
				$(ui.helper).remove();
				$("#"+itemIndex).addClass("mapItem");
				$("#"+itemIndex).removeClass("ui-draggable simbol");
				$("#"+itemIndex).draggable({containment: 'parent'});
				itemIndex++;
			}
      }
	});
	
	$("#recBin").droppable({
		drop:function( event, ui ){
			$(ui.helper).remove();
		}
	});
});