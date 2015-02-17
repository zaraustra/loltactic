$(function(){
	var champs=['akali','azir','aatrox','ahri','alistar','amumu','anivia','annie','ashe','blitzcrank','brand','braum','caitlyn','cassiopeia','chogath','corki','darius','diana','draven','drmundo','elise','evelynn','ezreal','fiddlesticks','fiora','fizz','galio','gangplank','garen','gragas','graves','hecarim','heimerdinger','irelia','janna','jarvaniv','jax','jayce','jinx','kalista','karma','karthus','kassadin','katarina','kayle','kennen','khazix','kogmaw','leblanc','leesin','leona','lissandra','lucian','lulu','lux','malphite','malzahar','maokai','masteryi','missfortune','mordekaiser','morgana','mundo','nami','nasus','nautilus','nidalee','nocturne','nunu','olaf','orianna','pantheon','poppy','quinn','rammus','reksai','renekton','rengar','riven','rumble','ryze','sejuani','shaco','shen','shyvana','singed','sion','sivir','skarner','sona','soraka','swain','syndra','talon','taric','teemo','thresh','tristana','trundle','tryndamere','twistedfate','twitch','udyr','urgot','varus','vayne','veigar','velkoz','vi','viktor','vladimir','volibear','warwick','wukong','xerath','xinzhao','yasuo','yorick','zac','zed','ziggs','zilean','zyra'];
	var input = $("#champSearchBlue");
	var value = input.val();
	var resultsDiv = '<div class="champSearchResults"><h2>Results for "<span class="results-for"></span>"</h2></div>';
	var resultsFor;
	var matches;
	
	$("#champSearchBlue").on("keyup", function() {
		$(".appendblue").empty();
		if($("#champSearchBlue").val() != ""){
			resultsFor = $('.results-for');
			resultsFor.html($(this).val());
			for(var x = 0; x < champs.length; x++){
				if(champs[x].indexOf($("#champSearchBlue").val()) == 0)
					$(".appendblue").append("<img class=\"simbol champicon blue\" title=\""+champs[x]+"\" src=\"images/champ/"+champs[x]+".png\"/>");
					$(".simbol").draggable({helper:"clone", revert:true, start:function(){itemIndex;}});
			}
		}
	});
	
	$("#champSearchRed").on("keyup", function() {
		$(".appendred").empty();
		if($("#champSearchRed").val() != ""){
			resultsFor = $('.results-for');
			resultsFor.html($(this).val());
			for(var x = 0; x < champs.length; x++){
				if(champs[x].indexOf($("#champSearchRed").val()) == 0)
					$(".appendred").append("<img class=\"simbol champicon red\" title=\""+champs[x]+"\" src=\"images/champ/"+champs[x]+".png\"/>");
					$(".simbol").draggable({helper:"clone", revert:true, start:function(){itemIndex;}});
			}
		}
	});
});	