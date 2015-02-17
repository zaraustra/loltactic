$(function(){
	itemIndex=0;
	
	$(".simbol").draggable({helper:"clone", revert:true, start:function(){itemIndex;}});
	$(".role").draggable({helper:"clone", revert:true, start:function(){itemIndex;}});
	
	$("#map").droppable({
		drop:function( event, ui ) {
			if ($(ui.draggable).hasClass("simbol")){
				$(this).append($(ui.helper).clone());
				$("#map .simbol").attr("id",itemIndex);
					$("#"+itemIndex).css({left:$("#"+itemIndex).position().left-($(document).width()-718)/2});
					$("#"+itemIndex).css({top:$("#"+itemIndex).position().top-($(document).height()-600)/2});
				if ($(ui.draggable).hasClass("blue")){
					$("#"+itemIndex).css({"border":"2px solid cyan"});
				} else {
					$("#"+itemIndex).css({"border":"2px solid red"});
					$("#"+itemIndex).css({top:$("#"+itemIndex).position().top+350});
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
		drop:function( event, ui ) {
				$(ui.helper).remove();
		}
	});
});