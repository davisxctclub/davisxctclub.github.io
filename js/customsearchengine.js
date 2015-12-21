
$(document).on('click', function (e) {

    if ($(e.target).closest('#___gcse_0 > div').length) return false;
   
	if ( $(e.target).closest('#bs-example-navbar-collapse-1 > ul.nav.navbar-nav.navbar-right > div > img').length ) {
    	$('#___gcse_0 > div').toggle();
    } else {
    	$('#___gcse_0 > div').hide();
    }
});











