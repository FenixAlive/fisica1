$(function(){
	$("#bc").click(function(e){
		e.preventDefault();
		var ct1=$("#ct1").val();
		var ct2=$("#ct2").val();
		var cf1=$("#cf1").val();
		var cf2=$("#cf2").val();
		var ca1=(($("#ca1").val())*Math.PI)/180;
		var ca2=(($("#ca2").val())*Math.PI)/180;
		var cg=$("#cg").val();
		var cm=$("#cm").val();
		var Fx=cf1*Math.cos(ca1)+cf2*Math.cos(ca2);
		var Fy=cf1*Math.sin(ca1)+cf2*Math.sin(ca2)-cm*cg;
		var Fr=Math.sqrt((Fx*Fx)+(Fy*Fy));
		$("#rc").empty();
		$("#rc").append('<div class="card-panel small cyan darken-3 res">Fx = '+Fx.toFixed(4)+'<br>Fy = '+Fy.toFixed(4)+'</div>');
		var Fr=Math.sqrt((Fx*Fx)+(Fy*Fy));
		$("#rc").append('<div class="card-panel small cyan darken-3 res">Fr = '+Fr.toFixed(4)+'</div>');
		dir=Math.atan(Fy/Fx)*180/Math.PI ; //cuadrante 1
		if (Fx<0 && Fy>0){ //cuadrante 2
			dir += 180;
		}else if(Fx<0 && Fy<0){ //cuadrante 3
			dir += 180;
		}else if(Fx>0 && Fy<0){ //cuadrante 4
			dir += 360;
		}
		$("#rc").append('<div class="card-panel small cyan darken-3 res">Dirección o Angulo final = '+dir.toFixed(4)+'</div>');
		ax=Fx/cm;
		ay=Fy/cm;
		$("#rc").append('<div class="card-panel small cyan darken-3 res">ax = '+ax.toFixed(4)+'<br>ay = '+ay.toFixed(4)+'</div>');
		dx1=.5*ax*(ct1*ct1);
		dx2=.5*ax*(ct2*ct2);
		dy1=.5*ay*(ct1*ct1);
		dy2=.5*ay*(ct2*ct2);
		$("#rc").append('<div class="card-panel small cyan darken-3 res">dx en '+ct1+' seg = '+dx1.toFixed(4)+'<br>dx en '+ct2+' seg = '+dx2.toFixed(4)+'</div>');
		$("#rc").append('<div class="card-panel small cyan darken-3 res">dy en '+ct1+' seg = '+dy1.toFixed(4)+'<br>dy en '+ct2+' seg = '+dy2.toFixed(4)+'</div>');
		dt1=Math.sqrt((dx1*dx1)+(dy1*dy1));
		dt2=Math.sqrt((dx2*dx2)+(dy2*dy2));
		$("#rc").append('<div class="card-panel small cyan darken-3 res">distancia total en '+ct1+' seg = '+dt1.toFixed(4)+'<br>distancia total en '+ct2+' seg = '+dt2.toFixed(4)+'</div>');
		Vx1=ax*ct1;
		Vx2=ax*ct2;
		$("#rc").append('<div class="card-panel small cyan darken-3 res">Vx en '+ct1+' seg = '+Vx1.toFixed(4)+'<br>Vx en '+ct2+' seg = '+Vx2.toFixed(4)+'</div>');
		Vy1=ay*ct1;
		Vy2=ay*ct2;
		$("#rc").append('<div class="card-panel small cyan darken-3 res">Vy en '+ct1+' seg = '+Vy1.toFixed(4)+'<br>Vy en '+ct2+' seg = '+Vy2.toFixed(4)+'</div>');
		Vt1=Math.sqrt((Vx1*Vx1)+(Vy1*Vy1));
		Vt2=Math.sqrt((Vx2*Vx2)+(Vy2*Vy2));
		$("#rc").append('<div class="card-panel small cyan darken-3 res">Velocidad total en '+ct1+' seg = '+Vt1.toFixed(4)+'<br>Velocidad total en '+ct2+' seg = '+Vt2.toFixed(4)+'</div>');
		W1=Fx*dx1+Fy*dy1;
		W2=Fx*dx2+Fy*dy2;
		$("#rc").append('<div class="card-panel small cyan darken-3 res">Trabajo (W) en '+ct1+' seg = '+W1.toFixed(4)+'<br>Trabajo (W) en '+ct2+' seg = '+W2.toFixed(4)+'</div>');
		I1=Fr*ct1;
		I2=Fr*ct2;
		$("#rc").append('<div class="card-panel small cyan darken-3 res">Impulso (I) en '+ct1+' seg = '+I1.toFixed(4)+'<br>Impulso (I) en '+ct2+' seg = '+I2.toFixed(4)+'</div>');
		P1=W1/ct1;
		P2=W2/ct2;
		$("#rc").append('<div class="card-panel small cyan darken-3 res">Potencia (P) en '+ct1+' seg = '+P1.toFixed(4)+'<br>Potencia (P) en '+ct2+' seg = '+P2.toFixed(4)+'</div>');

		/*
		$(":text").each(function(){	
			$($(this)).val('');
		});
		*/
	});
	

})
