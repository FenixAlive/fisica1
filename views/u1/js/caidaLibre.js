$(function(){
	$("#bv").click(function(e){
		e.preventDefault();
		var vt=$("#vt").val();
		var rv=vt*9.81;
		$("#rv").empty();
		$("#rv").append('<div class="card-panel small green darken-3 res">'+rv+'</div>');
		$(":text").each(function(){	
			$($(this)).val('');
		});
	});
	$("#bh").click(function(e){
		e.preventDefault();
		var ht=$("#ht").val();
		var rh=0.5*9.81*(ht*ht);
		$("#rh").empty();
		$("#rh").append('<div class="card-panel small green darken-3 res">'+rh+'</div>');
		$(":text").each(function(){	
			$($(this)).val('');
		});
	});
	$("#bt").click(function(e){
		e.preventDefault();
		var th=$("#th").val();
		var tvf=$("#tvf").val();
		var rt="Debe ingresar ya sea la velocidad final o el tiempo."
		if(th){
			rt=Math.sqrt(th/(0.5*9.81));
		}else if(tvf){
			rt=tvf/9.81;
		}
		$("#rt").empty();
		$("#rt").append('<div class="card-panel small green darken-3 res">'+rt+'</div>');
		$(":text").each(function(){	
			$($(this)).val('');
		});
	});

})
