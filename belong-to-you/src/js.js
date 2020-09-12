$(document).ready(function(){

  // Back to Top
  $('#back-to-top').hide();

  $(window).scroll(function() {
		if($(this).scrollTop() != 0) {
			$('#back-to-top').fadeIn("slow");
		} else {
			$('#back-to-top').fadeOut("slow");
		}
	});

	$('#back-to-top').click(function() {
		$('body,html').animate({scrollTop:0},800);
  });

  // NSFW Warning
    
  if (document.cookie.indexOf('modal_shown=') >= 0) {
    //do nothing if modal_shown cookie is present
   } else {
     $('#nsfw-warning').modal('show'); //show modal pop up
     document.cookie = 'modal_shown=seen'; //set cookie modal_shown
     //cookie will expire when browser is closed
   }

   // Dark Mode

   $('.dm-btn').on('click', function() {
     $('body').toggleClass('dark-mode');

     if ($('body').hasClass('dark-mode')) {
      $('.dm-btn .fas').removeClass('fa-moon').addClass('fa-sun');
     } else {
      $('.dm-btn .fas').removeClass('fa-sun').addClass('fa-moon');
     }
   })

});
