$(function(){
	var champs=['akali','azir','aatrox','ahri','alistar','amumu','anivia','annie','ashe','blitzcrank','brand','braum','caitlyn','cassiopeia','chogath','corki','darius','diana','draven','drmundo','elise','evelynn','ezreal','fiddlesticks','fiora','fizz','galio','gangplank','garen','gragas','graves','hecarim','heimerdinger','irelia','janna','jarvaniv','jax','jayce','jinx','kalista','karma','karthus','kassadin','katarina','kayle','kennen','khazix','kogmaw','leblanc','leesin','leona','lissandra','lucian','lulu','lux','malphite','malzahar','maokai','masteryi','missfortune','mordekaiser','morgana','mundo','nami','nasus','nautilus','nidalee','nocturne','nunu','olaf','orianna','pantheon','poppy','quinn','rammus','reksai','renekton','rengar','riven','rumble','ryze','sejuani','shaco','shen','shyvana','singed','sion','sivir','skarner','sona','soraka','swain','syndra','talon','taric','teemo','thresh','tristana','trundle','tryndamere','twistedfate','twitch','udyr','urgot','varus','vayne','veigar','velkoz','vi','viktor','vladimir','volibear','warwick','wukong','xerath','xinzhao','yasuo','yorick','zac','zed','ziggs','zilean','zyra'];
	var input = $("#champSearch");
	var value = input.val();
	var resultsDiv = '<div class="champSearchResults"><h2>Results for "<span class="results-for"></span>"</h2></div>';
	var resultsFor;
	var matches;
	
	$("#champSearch").on("keyup", function() {
		//erase previus search
		$(".append").empty();
		//check if input isn't empty
		if($("#champSearch").val() != ""){
			resultsFor = $('.results-for');
			resultsFor.html($(this).val());
			//searching value into champs array
			for(var x = 0; x < champs.length; x++){
				if(champs[x].indexOf($("#champSearch").val()) == 0)
					//append all results into ".append" div
					$(".append").append("<img class=\"simbol champicon \" title=\""+champs[x]+"\" src=\"images/champ/"+champs[x]+".png\"/>");
				//re-assign draggable property to all new appended simbols
				$(".simbol").draggable({helper:"clone", revert:true, start:function(){itemIndex;}});
			}
		}
	});
});	