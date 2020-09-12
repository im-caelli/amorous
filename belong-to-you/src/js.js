$(document).ready(function(){

  $('#back-to-top').hide();

  // Back to Top
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

});
