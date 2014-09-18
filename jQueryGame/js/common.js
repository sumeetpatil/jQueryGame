$(function(){
	  var screenHeight = window.innerHeight - 100;
	  var screenWidth = window.innerWidth - 100;

	  var right_img = ".\\images\\right.png";
	  var left_img = ".\\images\\left.png";
	  var top_img = ".\\images\\top.png";
	  var down_img = ".\\images\\bottom.png";
	  var collision_img = ".\\images\\collision.png";
	  var list;

	var img_div = $("#img_div");			//1st player div
	var img = $("#img");				 //1st player img

	var img_new_div = $("#img_new_div");   //2nd player div
	var img_new = $("#img_new");            //2nd player img

	var left = 0;                          //1st player left css absolute
	var top_att = 0;			//1st player top css absolute
	var left1 = 400;                          //1st player left css absolute
	var top_att1 = 0;			//1st player top css absolute
	var keys = {};   //store multiple keys pressed



	$(img).attr('src',right_img);   
	$(img_new).attr('src',left_img);   

	$(window).bind('keydown', function(e){

	//*********************************
	//Screen width and height
	//*********************************
	if(left >= screenWidth)

	{
	   left = 0;
	}

	if(top_att >= screenHeight)
	{
	   top_att = 0;
	}


	if(left1 >= screenWidth)
	{
	   left1 = 0;
	}

	if(top_att1 >= screenHeight)
	{
	   top_att1 = 0;
	}


	if(left < 0)
	{
	   left = screenWidth;
	}

	if(top_att < 0)
	{
	   top_att = screenHeight;
	}


	if(left1 < 0)
	{
	   left1 = screenWidth;
	}

	if(top_att1 < 0)
	{
	   top_att1 = screenHeight;
	}


	//*********************************
	// End Screen width and height
	//*********************************


	//*********************************
	//     Collision Detection
	//*********************************

	var aPos = img_div.position();
	var bPos = img_new_div.position();

		  var aLeft = aPos.left;
			  var aRight = aPos.left + img_div.width();
			  var aTop = aPos.top;
			  var aBottom = aPos.top + img_div.height();
			 
			  var bLeft = bPos.left;
			  var bRight = bPos.left + img_new_div.width();
			  var bTop = bPos.top;
			  var bBottom = bPos.top + img_new_div.height();
			 
	if(!( bLeft> aRight || bRight <aLeft || bTop> aBottom || bBottom <aTop ))
	{
	 $("#message").html("Collision");
	 $(img).attr('src',collision_img);
	 $(img_new).attr('src',collision_img);
	}
	else
	{
	$("#message").html("");
	}

	//*********************************
	//     End of Collision Detection
	//*********************************


		keys[e.which] = true;
		for (var i in keys)
	 {
		
		if (!keys.hasOwnProperty(i)) continue;

	//  1st player
		if (i==37) {
			//console.log ('left');
			$(img).attr('src',left_img);
			left = left - 10;
		$(img_div).css('left',left+'px');
		} 
	   else if (i==38) {
			$(img).attr('src',top_img);
	   
			top_att = top_att - 10;
		$(img_div).css('top',top_att+'px');
			//console.log ('up');
		} 
		else if (i==39) {
			//console.log ('right');
			$(img).attr('src',right_img);
		  
			left = left + 10;
		$(img_div).css('left',left+'px');
		}
		
		else if (i==40) {
			//console.log ('down');
			$(img).attr('src',down_img);
	   
			top_att = top_att + 10;
		$(img_div).css('top',top_att+'px');
		}
		



	//  2nd player

		if(i==98) {    //num down
		//console.log ('down');
		$(img_new).attr('src',down_img);
	   
		top_att1 = top_att1 + 10;
		$(img_new_div).css('top',top_att1+'px');
		}

		else if (i==102) {   //num right
			//console.log ('right');
			$(img_new).attr('src',right_img);
		  
			left1 = left1 + 10;
		$(img_new_div).css('left',left1+'px');
		}

	   else if (i==100) {   //num left
		   // console.log ('left');
			$(img_new).attr('src',left_img);
			left1 = left1 - 10;
		$(img_new_div).css('left',left1+'px');
		}

		else if (i==104) {      //num top
			$(img_new).attr('src',top_img);
	   
			top_att1 = top_att1 - 10;
		$(img_new_div).css('top',top_att1+'px');
			//console.log ('up');
		}

	  
	 }
	});


	$(window).bind('keyup', function(e){

	 delete keys[e.which];
	  
	});

});