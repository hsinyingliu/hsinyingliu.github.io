// Google Analytics
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
	(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
	m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
ga('create', 'UA-54986188-1', 'auto');
ga('send', 'pageview');


// Facebook
window.fbAsyncInit = function() {
	FB.init({
		appId      : '643863559064098',
		xfbml      : true,
		version    : 'v2.1'
	});

	FB.Event.subscribe('edge.create', function(targetUrl) {
		ga('send', 'social', 'facebook', 'like', targetUrl);
	});

	FB.Event.subscribe('edge.remove', function(targetUrl) {
		ga('send', 'social', 'facebook', 'unlike', targetUrl);
	});

	FB.Event.subscribe('message.send', function(targetUrl) {
		ga('send', 'social', 'facebook', 'send', targetUrl);
	});
};

(function(d, s, id){
	var js, fjs = d.getElementsByTagName(s)[0];
	if (d.getElementById(id)) {return;}
	js = d.createElement(s); js.id = id;
	js.src = "//connect.facebook.net/en_US/sdk.js";
	fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
