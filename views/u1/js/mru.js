$(function(){
	$("#bd").click(function(e){
		e.preventDefault();
		var dt=$("#dt").val();
		var dv=$("#dv").val();
		var rd=dt*dv;
		$("#rd").empty();
		$("#rd").append('<div class="card-panel small teal darken-3 res">'+rd+'</div>')

		$(":text").each(function(){	
			$($(this)).val('');
		});
	});
	$("#bt").click(function(e){
		e.preventDefault();
		var td=$("#td").val();
		var tv=$("#tv").val();
		var rt=td/tv;
		$("#rt").empty();
		$("#rt").append('<div class="card-panel small teal darken-3 res">'+rt+'</div>');
		$(":text").each(function(){	
			$($(this)).val('');
		});
	});
	$("#bv").click(function(e){
		e.preventDefault();
		var vd=$("#vd").val();
		var vt=$("#vt").val();
		var rv=vd/vt;
		$("#rv").empty();
		$("#rv").append('<div class="card-panel small teal darken-3 res">'+rv+'</div>');
		$(":text").each(function(){	
			$($(this)).val('');
		});
	});

})
