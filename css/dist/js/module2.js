define([],function(){return{bufferMove:function(n,a,l){var i=0;function o(t,e){return window.getComputedStyle?getComputedStyle(t)[e]:t.currentStyle[e]}clearInterval(n.timer),n.timer=setInterval(function(){var t=!0;for(var e in a){var r=null;i=0<(i="opacity"==e?(r=Math.round(100*o(n,"opacity")),(100*a[e]-r)/10):(r=parseInt(o(n,e)),(a[e]-r)/10))?Math.ceil(i):Math.floor(i),r!=a[e]&&("opacity"==e?(n.style.opacity=(r+i)/100,n.style.filter="alpha(filter="+(r+i)+")"):n.style[e]=r+i+"px",t=!1)}t&&(clearInterval(n.timer),l&&l())},5)}}});