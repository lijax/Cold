Cold.add("Cold.browser",function(){var b=navigator.userAgent.toLowerCase();var a={platform:navigator.platform,features:{xpath:!!(document.evaluate),air:!!(window.runtime),query:!!(document.querySelector)},engine:{presto:function(){return(!window.opera)?false:((arguments.callee.caller)?960:((document.getElementsByClassName)?950:925))},trident:function(){return(!window.ActiveXObject)?false:((window.XMLHttpRequest)?((document.querySelectorAll)?6:5):4)},webkit:function(){return(navigator.taintEnabled)?false:((a.features.xpath)?((a.features.query)?525:420):419)},gecko:function(){return(!document.getBoxObjectFor&&window.mozInnerScreenX==null)?false:((document.getElementsByClassName)?19:18)}},detect:function(){var f="";for(var g in this.engine){var d=this.engine[g]();if(d!==false){f+="engine:"+g+" "+d;break}}for(var c in this){if(this[c]===true){f+=" browser:"+c+" "+this["version"];break}}return f},version:(b.match(/.+(?:rv|it|ra|ie)[\/: ]([\d.]+)/)||[0,"0"])[1],msie:/msie/.test(b),firefox:/firefox/.test(b),chrome:/chrome/.test(b)&&/webkit/.test(b),safari:/safari/.test(b)&&!this.chrome,opera:/opera/.test(b)};a.ie=a.msie;a.ie6=a.msie&&parseInt(a.version)===6;a.ie7=a.msie&&parseInt(a.version)===7;a.ie8=a.msie&&parseInt(a.version)===8;return a});