Cold.add("app.lazyLoad",["event","browser","dom"],function(){var e=Cold.event.add,b=Cold.event.remove,a=Cold.browser.winSize,d=Cold.browser.scroll,c=Cold.dom.getXY;var f={tag:"img",src:"lazysrc",preHeight:300};return function(j){Cold.extend(f,j,true);var h=document.getElementsByTagName(f.tag);var i=function(){for(var m=0,k=h.length;m<k;m++){if(h[m].getAttribute(f.src)){return h[m]}}return null};var g=function(){var l=i(),k=d()["top"]+a()["height"]+f.preHeight;if(l){if(k>=c(l)["y"]){l.setAttribute("src",l.getAttribute(f.src));l.removeAttribute(f.src);setTimeout(arguments.callee,10)}}else{b(window,"scroll",g);b(window,"resize",g)}};g();e(window,"scroll",g);e(window,"resize",g)}});