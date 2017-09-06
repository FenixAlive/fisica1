$(function(){
	$("#bcu").click(function(e){
		e.preventDefault();
		var cvur=($("#cvur").val())/60;
		var cvurad=$("#cvurad").val();
		var cvum=$("#cvum").val();
		var cdum=$("#cdum").val();
		var cdur=$("#cdur").val();
		var cut=$("#cut").val();
		var cur=$("#cur").val();
		
		if(cvur){
			cvurad=cvur*2*Math.PI;
			cvum=cvur*cur*2*Math.PI;	
		}else if(cvurad){
			cvur=cvurad/(2*Math.PI);
			cvum=cvur*cur*2*Math.PI;
		}else if(cvum){
			cvur=cvum/(cur*2*Math.PI);
			cvurad=cvur*2*Math.PI;
		}
		$("#rcu").empty();
		$("#rcu").append('<div class="card-panel small pink darken-3 res">Velocidad (RPS) = '+cvur+'<br> Velocidad (rad/s) = '+cvurad+'<br>Velocidad (m/s) = '+cvum+'</div>');
		if(cdum){
			cdur=cdum/(cur*2*Math.PI);
			cut=cdum/cvum;
		}else if(cdur){
			cdum=cdur*cur*2*Math.PI;
			if(cur){
			cut=cdum/cvum;
			}else{
				cut=cdur/cvur;
			}
		}else if(cut){
			if(cur){
				cdum=cvum*cut;
				cdur=cdum/(cur*2*Math.PI);
			}else{
				cdur=cvur*cut;
			}
		}
		$("#rcu").append('<div class="card-panel small pink darken-3 res">Distancia (m) = '+cdum+'<br> Distancia (Revoluciones) = '+cdur+'</div>');
		$("#rcu").append('<div class="card-panel small pink darken-3 res">Tiempo (s) = '+cut+'<br> Tiempo (min) = '+cut/60+'<br> Tiempo (horas) = '+cut/60/60+'</div>');
		if(!cur){
			$("#rcu").append('<div class="card-panel small pink darken-3 res">Es necesario ingresar el radio para el calculo de la distancia y velocidad en metros</div>');
		}
		$(":text").each(function(){	
		$($(this)).val('');
		});
		
	});
})
