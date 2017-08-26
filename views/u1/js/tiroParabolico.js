$(function(){
	$("#bv").click(function(e){
		e.preventDefault();
		var vi=$("#vi").val();
		var va=(($("#va").val())*Math.PI)/180;
		var rvx=vi*Math.cos(va);
		var rvy=vi*Math.sin(va);
		$("#rv").empty();
		$("#rv").append('<div class="card-panel small purple darken-3 res"><div>Velocidad Inicial en X: '+rvx+'</div><br><div>Velocidad Inicial en Y: '+rvy+'</div></div>');
		$(":text").each(function(){	
			$($(this)).val('');
		});
	});
	$("#bvy").click(function(e){
		e.preventDefault();
		var vyi=$("#vyi").val();
		var vyt=$("#vyt").val();
		var rvy=vyi-9.81*vyt;
		$("#rvy").empty();
		$("#rvy").append('<div class="card-panel small purple darken-3 res"><div>Velocidad en Y: '+rvy+'</div></div>');
		$(":text").each(function(){	
			$($(this)).val('');
		});
	});
	$("#bhx").click(function(e){
		e.preventDefault();
		var hvix=$("#hvix").val();
		var htx=$("#htx").val();
		var rhx=hvix*htx;
		$("#rhx").empty();
		$("#rhx").append('<div class="card-panel small purple darken-3 res">'+rhx+'</div>');
		$(":text").each(function(){	
			$($(this)).val('');
		});
	});
	$("#bhy").click(function(e){
		e.preventDefault();
		var hviy=$("#hviy").val();
		var ht=$("#ht").val();
		var rhy=hviy*ht-0.5*9.81*(ht*ht);
		$("#rhy").empty();
		$("#rhy").append('<div class="card-panel small purple darken-3 res">'+rhy+'</div>');
		$(":text").each(function(){	
			$($(this)).val('');
		});
	});
	$("#bt").click(function(e){
		e.preventDefault();
		var tviy=$("#tvi").val();
		var rt=tviy/9.81;
		var rtt=rt*2;
		$("#rt").empty();
		$("#rt").append('<div class="card-panel small purple darken-3 res"> Tiempo en llegar al punto maximo: '+rt+'<br>Tiempo total en subir y bajar: '+rtt+'</div>');
		$(":text").each(function(){	
			$($(this)).val('');
		});
	});
	$("#bta").click(function(e){
		e.preventDefault();
		var tavi=$("#tavi").val();
		var taa=(($("#taa").val())*Math.PI)/180;
		var vix=tavi*Math.cos(taa);
		var viy=tavi*Math.sin(taa);
		var tm=viy/9.81;
		var tp=tm/5;
		var t=0
		var vy=0;
		var dx=0;
		var dy=0;
		$("#rta").empty();
		$("#rta").append('<div class="res table"><table id="table"></table></div>');
		$("#table").append('<thead><tr><th>t</th><th>Vx</th><th>Vy</th><th>Dx</th><th>Dy</th></tr></thead>')
		for(i=0;i<=10;i++){
			t= tp*i;
			vy = viy-9.81*t;
			dx = vix*t;
			dy = viy*t-.5*9.81*(t*t);
			$("#table").append('<tr><td>'+t.toFixed(6)+'</td><td>'+vix.toFixed(6)+'</td><td>'+vy.toFixed(6)+'</td><td>'+dx.toFixed(6)+'</td><td>'+dy.toFixed(6)+'</td></tr>')
		}
		$(":text").each(function(){	
			$($(this)).val('');
		});
	});

})
