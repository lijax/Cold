Cold.add("event",function(){var g=function(h){return h=Cold.isString(h)?document.getElementById(h):h};var f=function(i,h,j){i=g(i);h=h||"click";if(!i||i.nodeType===3||i.nodeType===8||!Cold.isFunction(j)){return false}if(i.addEventListener){i.addEventListener(h,j,false)}else{if(i.attachEvent){i.attachEvent("on"+h,j)}else{i["on"+h]=j}}return true};var b=function(i,h,j){i=g(i);h=h||"click";if(!i||i.nodeType===3||i.nodeType===8||!Cold.isFunction(j)){return false}if(i.removeEventListener){i.removeEventListener(h,j,false)}else{if(i.detachEvent){i.detachEvent("on"+h,j)}else{i["on"+h]=null}}return true};var c=function(j,i){j=g(j);i=i||"click";if(j.fireEvent){j.fireEvent("on"+i)}else{var h=document.createEvent("HTMLEvents");h.initEvent(i,true,true);j.dispatchEvent(h)}return true};var e=function(h,i){return f(h,"click",i)};var d=function(k,p){var s=100,j=null,r=p.over||function(){},n=p.out||function(){},t=p.elems||[],h=function(){j&&clearTimeout(j);j=setTimeout(function(){if(k.over===true){r&&r()}},s)},u=function(){j&&clearTimeout(j);j=setTimeout(function(){if(k.over===false){n&&n()}},s)};f(k,"mouseover",function(){k.over=true;h()});f(k,"mouseout",function(){k.over=false;u()});for(var o=0,q,m=t.length;q=t[o];o++){f(q,"mouseover",function(){k.over=true;h()});f(q,"mouseout",function(){k.over=false;u()})}};var a=function(k,j,i){var h=0;j=j||function(){};i=i||function(){};e(k,function(){(h++)%2===0?j():i()})};return{add:f,remove:b,fire:c,click:e,hover:d,toggle:a}});