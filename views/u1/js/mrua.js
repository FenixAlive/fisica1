$(function(){
	$("#bv").click(function(e){
		e.preventDefault();
		var vt=$("#vt").val();
		var va=$("#va").val();
		var vi=$("#vi").val();
		var vf=$("#vf").val();
		if(vf){
			var rv=vf-va*vt;
		$("#rv").empty();
		$("#rv").append('<div class="card-panel small red darken-3 res">Velocidad Inicial: '+rv+'</div>')
		}else if(vi){
			console.log("vi")
			var rv=vi+va*vt;
		$("#rv").empty();
		$("#rv").append('<div class="card-panel small red darken-3 res">Velocidad Final: '+rv+'</div>')
		}else{
			console.log("sin velocidades")
		$("#rv").empty();
		$("#rv").append('<div class="card-panel small red darken-3 res">Es necesario llenar una velocidad.</div>')
		}		
		$(":text").each(function(){	
			$($(this)).val('');
		});
	});
	$("#ba").click(function(e){
		e.preventDefault();
		var at=$("#at").val();
		var ad=$("#ad").val();
		var avi=$("#avi").val();
		var avf=$("#avf").val();
		var ra="Es necesario llenar los campos solicitados";
		if(avi && avf){
			ra=(avf-avi)/at;
		}else if(at && ad && !avf){
			ra=(2*ad)/(at*at);
		}else{
			ra="Es necesario llenar los campos solicitados";
		}
		$("#ra").empty();
		$("#ra").append('<div class="card-panel small red darken-3 res">'+ra+'</div>');
		$(":text").each(function(){	
			$($(this)).val('');
		});
	});
	$("#bt").click(function(e){
		e.preventDefault();
		var td=$("#td").val();
		var ta=$("#ta").val();
		var tvi=$("#tvi").val();
		var tvf=$("#tvf").val();
		var rt="Es necesario llenar los campos solicitados";
		if(tvi && tvf){
			rt=(tvf-tvi)/ta;
		}else if(td && ta && !tvf){
			rt=Math.sqrt((2*td)/ta);
		}else{
			rt="Es necesario llenar los campos solicitados";
		}
		$("#rt").empty();
		$("#rt").append('<div class="card-panel small red darken-3 res">'+rt+'</div>');
		$(":text").each(function(){	
			$($(this)).val('');
		});
	});
	$("#bd").click(function(e){
		e.preventDefault();
		var dt=$("#dt").val();
		var dvi=$("#dvi").val();
		var da=$("#da").val();
		var rd="Solo se permite dejar en blanco la velocidad inicial en caso de ser 0, los demas campos son obligatorios";
		if(dvi && dvi != 0){
			rd=(dvi*dt)+(0.5*da*(dt*dt));
		}else if(dt && da){
			rd=0.5*da*(dt*dt);
		}else{
			rd="Solo se permite dejar en blanco la velocidad inicial en caso de ser 0, los demas campos son obligatorios";
		}
		$("#rd").empty();
		$("#rd").append('<div class="card-panel small red darken-3 res">'+rd+'</div>');
		$(":text").each(function(){	
			$($(this)).val('');
		});
	});

})
