
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




$("#bs-example-navbar-collapse-1 > ul.nav.navbar-nav.navbar-right > div > img").click(function (e) {
  e.stopPropagation();
  $('div#display_active').toggle();
});

$(document).click(function(event) { 
    if(!$(event.target).closest('#___gcse_0 > div').length) {
        if($('#___gcse_0 > div').is(":visible")) {
            $('#___gcse_0 > div').hide()
        }
    }        
})
