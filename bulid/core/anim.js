Cold.add("anim",["dom"],function(){var e=Cold.dom.$E,m=Cold.dom.css,r=Cold.dom.isStyle,h=Cold.dom.getXY,f=1.70158,q=function(){},j=Date.now||function(){return +new Date};var d={linear:function(u){return u},easeIn:function(u){return u*u},easeOut:function(u){return(2-u)*u},easeBoth:function(u){return(u*=2)<1?0.5*u*u:0.5*(1-(--u)*(u-2))},easeInStrong:function(u){return u*u*u*u},easeOutStrong:function(u){return 1-(--u)*u*u*u},easeBothStrong:function(u){return(u*=2)<1?0.5*u*u*u*u:0.5*(2-(u-=2)*u*u*u)},elasticIn:function(u){var w=0.3,v=w/4;if(u===0||u===1){return u}return -(Math.pow(2,10*(u-=1))*Math.sin((u-v)*(2*Math.PI)/w))},elasticOut:function(u){var w=0.3,v=w/4;if(u===0||u===1){return u}return Math.pow(2,-10*u)*Math.sin((u-v)*(2*Math.PI)/w)+1},elasticBoth:function(u){var w=0.45,v=w/4;if(u===0||(u*=2)===2){return u}if(u<1){return -0.5*(Math.pow(2,10*(u-=1))*Math.sin((u-v)*(2*Math.PI)/w))}return Math.pow(2,-10*(u-=1))*Math.sin((u-v)*(2*Math.PI)/w)*0.5+1},backIn:function(u){if(u===1){u-=0.001}return u*u*((f+1)*u-f)},backOut:function(u){return(u-=1)*u*((f+1)*u+f)+1},backBoth:function(u){if((u*=2)<1){return 0.5*(u*u*(((f*=(1.525))+1)*u-f))}return 0.5*((u-=2)*u*(((f*=(1.525))+1)*u+f)+2)},bounceIn:function(u){return 1-d.bounceOut(1-u)},bounceOut:function(u){var v=7.5625,w;if(u<(1/2.75)){w=v*u*u}else{if(u<(2/2.75)){w=v*(u-=(1.5/2.75))*u+0.75}else{if(u<(2.5/2.75)){w=v*(u-=(2.25/2.75))*u+0.9375}else{w=v*(u-=(2.625/2.75))*u+0.984375}}}return w},bounceBoth:function(u){if(u<0.5){return d.bounceIn(u*2)*0.5}return d.bounceOut(u*2-1)*0.5+0.5}};var g={re_RGB:/^rgb\(([0-9]+)\s*,\s*([0-9]+)\s*,\s*([0-9]+)\)$/i,re_hex:/^#?([0-9A-F]{2})([0-9A-F]{2})([0-9A-F]{2})$/i,re_hex3:/^#?([0-9A-F]{1})([0-9A-F]{1})([0-9A-F]{1})$/i,getRGB:function(t){if(g.re_hex.exec(t)){t="rgb("+[parseInt(RegExp.$1,16),parseInt(RegExp.$2,16),parseInt(RegExp.$3,16)].join(", ")+")"}else{if(g.re_hex3.exec(t)){t="rgb("+[parseInt(RegExp.$1+RegExp.$1,16),parseInt(RegExp.$2+RegExp.$2,16),parseInt(RegExp.$3+RegExp.$3,16)].join(", ")+")"}}return t},isColorStyle:function(u){var t=/backgroundColor|borderBottomColor|borderLeftColor|borderRightColor|borderTopColor|color|outlineColor/i;return t.test(u)},init:function(v,x,A){var z,y,u,w,t=g.re_RGB;u=g.getRGB(m(v,x));u=u.match(t);z=[parseInt(u[1],10),parseInt(u[2],10),parseInt(u[3],10)];w=g.getRGB(A);w=w.match(t);y=[parseInt(w[1],10),parseInt(w[2],10),parseInt(w[3],10)];return[z,y]}};var s=function(){this.init.apply(this,arguments)};s.DefaultOption={fps:25,duration:1000,onStart:q,onComplete:q,easing:"linear"};s.prototype=(function(){var t={};return{init:function(w,v,u){this.el=e(w);this.props=v||{};this.from={};this.to={};this.unit={};u=u||{};Cold.extend(s.DefaultOption,u,true);Cold.extend(this,s.DefaultOption,true)},initData:function(){this.begin=j();this.end=this.begin+this.duration;for(var v in this.props){var x=this.props[v],u=Cold.isString(x)?x.match(/^(\d*)(\.\d*)?(.*)$/):x;if(g.isColorStyle(v)){var w=g.init(this.el,v,x);this.from[v]=w[0];this.to[v]=w[1]}else{if(u!=null){this.from[v]=parseFloat(this.el[v]||m(this.el,v));this.to[v]=u[1]||u;this.unit[v]=u[3]||"px"}else{throw"anim init: Invalid arguments."}}}},step:function(){var u=j();if(u<this.end){this.update((u-this.begin)/this.duration)}else{this.stop&&this.stop();this.update(1);this.onComplete&&this.onComplete()}},update:function(u){for(var v in this.props){var w=this.compute(this.from[v],this.to[v],u);if(r(this.el,v)){if(v!=="opacity"&&!g.isColorStyle(v)){w=parseInt(w,10)+this.unit[v]}m(this.el,v,w)}else{this.el[v]=w}}},compute:function(A,z,v){var y=d[this.easing||"linear"];if(Cold.isArray(A)){var x=parseInt(A[0]+(z[0]-A[0])*y(v),10),u=parseInt(A[1]+(z[1]-A[1])*y(v),10),w=parseInt(A[2]+(z[2]-A[2])*y(v),10);return"rgb("+x+","+u+","+w+")"}return A+(z-A)*y(v)},pause:function(){this.paused=true},resume:function(){this.paused=false},reset:function(){this.update(0);this.stop()},start:function(v){this.stop();var w=false;v=v||false;var u=(function(x){return function(){x.initData();var y=x.onComplete,z;x.onStart&&x.onStart();x.onComplete=function(){y&&y();if(w||v){z=t[x.el].shift();z?z():delete t[x.el]}};x.timer=setInterval(function(){if(x.paused){x.end+=x.fps;return}x.step.call(x)},x.fps||s.DefaultOption.fps)}})(this);if(!(this.el in t)){w=true;t[this.el]=[];u();return}v?t[this.el].push(u):u()},stop:function(){this.timer&&clearInterval(this.timer);this.timer=null}}})();var i=function(t){t=t||false;return function(w,v,A,y,z){var u={};if(Cold.isFunction(A)){u.onComplete=A;u.duration=y;u.easing=z}else{u=A}var x=new s(w,v,u);x.start(t);return this}};var k=i();var o=i(true);var n=function(t,u,y,w,x){if(m(t,"position")!=="static"){var v=new s(t,{left:u[0],top:u[1]},{duration:w,onComplete:y,easing:x});v.start()}else{throw"position is static, cant move!"}};var p=function(t,y,x,v,w){var u=new s(t,{opacity:y},{duration:v,onComplete:x,easing:w});u.start()};var l=function(t,x,v,w){var u=new s(t,{opacity:0},{duration:v,onComplete:x,easing:w});u.start()};var b=function(t,x,v,w){var u=new s(t,{opacity:1},{duration:v,onComplete:x,easing:w});u.start()};var a=function(t,y,x,v,w){var u=new s(t,{height:y},{duration:v,onComplete:x,easing:w});u.start()};var c=function(y,A,x,z){var u=y.match(/\s*#(.*)\s*/);if(u){y=h(e(u[1]))["y"]}var w=document,t=w.documentElement;var v=new s((t.scrollTop?t:w.body),{scrollTop:y},{duration:Cold.isFunction(A)?x:A,onComplete:Cold.isFunction(A)?A:q,easing:z});v.start()};return{run:k,queue:o,move:n,fade:p,fadeIn:l,fadeOut:b,slide:a,scrollTo:c,Easing:d}});