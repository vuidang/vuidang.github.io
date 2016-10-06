/*
Fancy Resume / CV
Created: 02/02/2010
By: Catalin Pinte
Contact Info: pinte_catalin@yahoo.com
*/
$(document).ready(function(){

/* Fancy Box */
	$(".fancy-box").fancybox({

		  'overlayColor': "#111",
		  'overlayOpacity': 0.7,
		  'easingIn' : 'easeInBack',
		  'easingOut' : 'easeOutBack'
	});

	$("#contact-me").fancybox({

		    'easingIn' : 'easeInBack',
		    'easingOut' : 'easeOutBack',
	        'padding' : 40,
			'overlayColor': "#111",
			'overlayOpacity': 0.7,
			'scrolling'		: 'no',
			'titleShow'		: false
     });

	 var $query = '',
	     $elem = $("#tooltip");



    $("#background-switcher a").click(function(){
         var $backgr = $(this).parent().css('background');
		 $("body").css({
		     'background': $backgr,
			 'background-attachment':'fixed',
			 'background-position':'0 0'
		 });
	});

     $(".controls li").not('#tooltip').hover(
          function () {
		      clearTimeout($query);
			  if($elem.attr("class") === 'active'){
				  $elem.clearQueue().animate({'left': ($(this).position().left - 38 ) + 'px'}, 300);
				  $elem.text($(this).attr('title'));
			  }
			  if ($elem.attr("class") === 'inactive'){
				  $elem.css({'left':  ($(this).position().left - 38 )+ 'px'}).css({'top': ($(this).position().top + 40)  + 'px'}).fadeIn("slow").attr('class','active');
				  $elem.html($(this).attr('title'));
		      }

         },
		 function () {
			 $query = setTimeout( function(){ $elem.fadeOut("fast", function(){$elem.css({'left':'0'}).attr('class','inactive'); }); } ,500);
		}
    );

    $(".controls li a").click(function(){
	     $elem.fadeOut("fast", function(){$elem.css({'left':'0'}).attr('class','inactive'); });
	});

	$(".controls li a#print").click(function(){
	     $elem.fadeOut("fast", function(){$elem.css({'left':'0'}).attr('class','inactive'); });
		 window.print();
		 return false;
	});


	$('#middle-content ul.list>li:nth-child(even)').not('.arrow-up').css({ 'background': '#e6e6e6'});
	$('#middle-content ul.list>li:nth-child(odd)').not('.arrow-up').css({ 'background': '#f6f6f6'});
	$('#middle-content ul.list:last-child').css({'margin-bottom':'0'});
	// random color for toptag class
	var colors = ['#c55d98', '#ffce57', '#df5151','#41a270','#17365b'];
	var random_color_1 = colors[Math.floor(Math.random() * colors.length)];
	var random_color_2 = colors[Math.floor(Math.random() * colors.length)];
	$('.top-tag-1').css('background',random_color_1) ;
	$('.top-tag-2').css('background',random_color_2) ;
});
