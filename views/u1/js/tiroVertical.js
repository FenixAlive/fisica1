$(function(){
	$("#bv").click(function(e){
		e.preventDefault();
		var vt=$("#vt").val();
		var rv=vt*9.81;
		$("#rv").empty();
		$("#rv").append('<div class="card-panel small yellow darken-3 res">'+rv+'</div>');
		$(":text").each(function(){	
			$($(this)).val('');
		});
	});
	$("#bh").click(function(e){
		e.preventDefault();
		var hvi=$("#hvi").val();
		var ht=$("#ht").val();
		var rh=hvi*ht-0.5*9.81*(ht*ht);
		$("#rh").empty();
		$("#rh").append('<div class="card-panel small yellow darken-3 res">'+rh+'</div>');
		$(":text").each(function(){	
			$($(this)).val('');
		});
	});
	$("#bt").click(function(e){
		e.preventDefault();
		var th=$("#th").val();
		var tvi=$("#tvi").val();
		rt=tvi/9.81;
		$("#rt").empty();
		$("#rt").append('<div class="card-panel small yellow darken-3 res"> Tiempo en Subir o Bajar: '+rt+'</div>');
		$(":text").each(function(){	
			$($(this)).val('');
		});
	});

})
