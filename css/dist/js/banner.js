!function(){var e=document.querySelector(".scroll-banner"),l=document.querySelector(".scroll-banner .scroll-content"),n=document.querySelectorAll(".scroll-banner .scroll-content li"),t=document.querySelectorAll(".scroll-banner .scroll-btn span"),c=document.querySelector("#left"),o=document.querySelector("#right"),r=0,s=!0,a=null,i=n[0].cloneNode(!0),u=n[n.length-1].cloneNode(!0);l.appendChild(i),l.insertBefore(u,n[0]);var f=(n=document.querySelectorAll(".scroll-banner .scroll-content li"))[0].offsetWidth;l.style.width=f*n.length+"px",l.style.left=-f+"px";for(var d=0;d<t.length;d++)t[d].index=d,t[d].onclick=function(){r=this.index,y(),t[r].className="active"};function y(){for(var e=0;e<t.length;e++)t[e].className="";m2.bufferMove(l,{left:-(r+1)*f},function(){l.offsetLeft<=-f*(t.length+1)&&(l.style.left=-f+"px",r=0),0<=l.offsetLeft&&(l.style.left=-f*t.length+"px",r=t.length-1),s=!0})}e.onmouseover=function(){c.style.display="block",o.style.display="block",clearInterval(a)},e.onmouseout=function(){c.style.display="none",o.style.display="none",a=setInterval(function(){o.onclick()},2e3)},o.onclick=function(){s&&(s=!1,r++,y(),r==t.length?t[0].className="active":t[r].className="active")},c.onclick=function(){s&&(s=!1,r--,y(),r<0?t[t.length-1].className="active":t[r].className="active")},a=setInterval(function(){o.onclick()},2e3)}();