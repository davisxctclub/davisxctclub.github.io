
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


$(document).ready(function(){
    var flag = false;

    $('html').click(function (e) {
        if (e.target.id == '#bs-example-navbar-collapse-1 > ul.nav.navbar-nav.navbar-right > div' && flag === false) {
            $('#___gcse_0 > div').show();
            flag = true;
        }

        else if (flag === true && e.target.id == '#bs-example-navbar-collapse-1 > ul.nav.navbar-nav.navbar-right > div') {
            $('#___gcse_0 > div').hide();
            flag = false;
        }

        else {
            $('#___gcse_0 > div').hide();
            flag = false;
        }
    });
});










