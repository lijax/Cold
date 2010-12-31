Cold.add("Cold.browser", function(){

	var _ua = navigator.userAgent.toLowerCase();
	var _browser = {
		platform: navigator.platform,
		engine	: {
			presto: function(){
				return (!window.opera) ? false : ((arguments.callee.caller) ? 960 : ((document.getElementsByClassName) ? 950 : 925));
			},
			trident: function(){
				return (!window.ActiveXObject) ? false : ((window.XMLHttpRequest) ? ((document.querySelectorAll) ? 6 : 5) : 4);
			},
			webkit: function(){
				return (navigator.taintEnabled) ? false : ((Browser.Features.xpath) ? ((Browser.Features.query) ? 525 : 420) : 419);
			},
			gecko: function(){
				return (!document.getBoxObjectFor && window.mozInnerScreenX == null) ? false : ((document.getElementsByClassName) ? 19 : 18);
			}
		},
		version : (_ua.match(/.+(?:rv|it|ra|ie)[\/: ]([\d.]+)/) || [0, '0'])[1],
		msie	: /msie/.test(_ua),
		firefox : /firefox/.test(_ua),
		chrome	: /chrome/.test(_ua) && /webkit/.test(_ua),
		safari	: /safari/.test(_ua) && !this.chrome,
		opera	: /opera/.test(_ua)
	};
	_browser.ie = _browser.msie;
	_browser.ie6 = _browser.msie && parseInt(_browser.version) === 6;
	_browser.ie7 = _browser.msie && parseInt(_browser.version) === 7;
	_browser.ie8 = _browser.msie && parseInt(_browser.version) === 8;

	return _browser;

});