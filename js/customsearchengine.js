
//custom search engine
(function() {
var cx = '001578284417931012478:9782p9w_jdy';
var gcse = document.createElement('script');
gcse.type = 'text/javascript';
gcse.async = true;
gcse.src = (document.location.protocol == 'https:' ? 'https:' : 'http:') +
	'//cse.google.com/cse.js?cx=' + cx;
var s = document.getElementsByTagName('script')[0];
s.parentNode.insertBefore(gcse, s);
})();


$(document).on('click', function (e) {

    if ($(e.target).closest('#bs-example-navbar-collapse-1 > ul.nav.navbar-nav.navbar-right > div').length) return false;
   
	if ( $(e.target).closest('#___gcse_0 > div').length ) {
    	$('#bs-example-navbar-collapse-1 > ul.nav.navbar-nav.navbar-right > div').toggle();
    } else {
    	$('#bs-example-navbar-collapse-1 > ul.nav.navbar-nav.navbar-right > div').hide();
    }
});











