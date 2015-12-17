$(window).load(function(){
  $("#preloaderImg").fadeOut("slow");
  $("#loader").delay(1000).fadeOut("slow");

});

$(document).ready(function() {
	
	  $(".button-collapse").sideNav();

var op;	
	if(op!=1)
	{
		var full_url = window.location.href;
		var parts = full_url.split("#");
        var trgt = parts[1];
		location.hash='';
		if(trgt!=null && trgt!='')
		{
			var target_offset = $("#"+trgt).offset();
			var target_top = target_offset.top-100;
        	$('html, body').animate({scrollTop:target_top},
									{
				easing:'easeInSine',
				duration:1500,	
				complete:function()
				{		
					
				}
			}
 		);
		}
	}

		
	var t=new Array();

	for(var i=1;i<=7;i++)
	{
		try{
			t[i]=$("#"+i).offset().top;
		}catch(e){
			
		}
		
	}
		/*var t1=$("#1").offset().top;
		var t2=$("#2").offset().top;
		var t3=$("#3").offset().top;
		var t4=$("#4").offset().top;
		var t5=$("#5").offset().top;
		var t6=$("#6").offset().top;
		var t7=$("#7").offset().top;*/
	
	var s=1;
	
	$(window).scroll(function(){
		 s;
		for(var i=1;i<=7;i++)
		{
			if(scrollY+451>=t[i])
			{
				s=i;
			}
			/*if(scrollY+501>=t[6])
			{
				s=7;
			}*/
		}
		$(".sel").removeClass("sel");
		$('a[href="#'+s+'"]').addClass('sel');
		
		
	});

	
	$(".scroll").click(function(event){
        event.preventDefault();
        var full_url = this.href;
		op=1;
		//file:///C:/Users/pratik/Desktop/MS/SCOMM/MUN/Site/index.html#2
        var parts = full_url.split("#");
        var trgt = parts[1];
        var target_offset = $("#"+trgt).offset();
        var target_top = target_offset.top-100;
		//console.log(target_top);
        $('html, body').animate({scrollTop:target_top}, 1500, 'easeInSine');
    });
	
/*	setTimeout(function(){
		$('body').addClass('loaded');
		$('h1').css('color','#222222');
	}, 3000);*/
	
});