!function(f,c){var l,p=/^([\-+])=\s*(\d+\.?\d*)/,r=[{re:/rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(r){return[r[1],r[2],r[3],r[4]]}},{re:/rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(r){return[2.55*r[1],2.55*r[2],2.55*r[3],r[4]]}},{re:/#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,parse:function(r){return[parseInt(r[1],16),parseInt(r[2],16),parseInt(r[3],16)]}},{re:/#([a-f0-9])([a-f0-9])([a-f0-9])/,parse:function(r){return[parseInt(r[1]+r[1],16),parseInt(r[2]+r[2],16),parseInt(r[3]+r[3],16)]}},{re:/hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,space:"hsla",parse:function(r){return[r[1],r[2]/100,r[3]/100,r[4]]}}],d=f.Color=function(r,n,t,e){return new f.Color.fn.parse(r,n,t,e)},h={rgba:{props:{red:{idx:0,type:"byte"},green:{idx:1,type:"byte"},blue:{idx:2,type:"byte"}}},hsla:{props:{hue:{idx:0,type:"degrees"},saturation:{idx:1,type:"percent"},lightness:{idx:2,type:"percent"}}}},g={byte:{floor:!0,max:255},percent:{max:1},degrees:{mod:360,floor:!0}},s=d.support={},n=f("<p>")[0],b=f.each;function y(r,n,t){var e=g[n.type]||{};return null==r?t||!n.def?null:n.def:(r=e.floor?~~r:parseFloat(r),isNaN(r)?n.def:e.mod?(r+e.mod)%e.mod:r<0?0:e.max<r?e.max:r)}function i(s){var i=d(),u=i._rgba=[];return s=s.toLowerCase(),b(r,function(r,n){var t,e=n.re.exec(s),o=e&&n.parse(e),a=n.space||"rgba";if(o)return t=i[a](o),i[h[a].cache]=t[h[a].cache],u=i._rgba=t._rgba,!1}),u.length?("0,0,0,0"===u.join()&&f.extend(u,l.transparent),i):l[s]}function u(r,n,t){return 6*(t=(t+1)%1)<1?r+(n-r)*t*6:2*t<1?n:3*t<2?r+(n-r)*(2/3-t)*6:r}n.style.cssText="background-color:rgba(1,1,1,.5)",s.rgba=-1<n.style.backgroundColor.indexOf("rgba"),b(h,function(r,n){n.cache="_"+r,n.props.alpha={idx:3,type:"percent",def:1}}),d.fn=f.extend(d.prototype,{parse:function(o,r,n,t){if(o===c)return this._rgba=[null,null,null,null],this;(o.jquery||o.nodeType)&&(o=f(o).css(r),r=c);var a=this,e=f.type(o),s=this._rgba=[];return r!==c&&(o=[o,r,n,t],e="array"),"string"===e?this.parse(i(o)||l._default):"array"===e?(b(h.rgba.props,function(r,n){s[n.idx]=y(o[n.idx],n)}),this):"object"===e?(b(h,o instanceof d?function(r,n){o[n.cache]&&(a[n.cache]=o[n.cache].slice())}:function(r,t){var e=t.cache;b(t.props,function(r,n){if(!a[e]&&t.to){if("alpha"===r||null==o[r])return;a[e]=t.to(a._rgba)}a[e][n.idx]=y(o[r],n,!0)}),a[e]&&f.inArray(null,a[e].slice(0,3))<0&&(a[e][3]=1,t.from&&(a._rgba=t.from(a[e])))}),this):void 0},is:function(r){var o=d(r),a=!0,s=this;return b(h,function(r,n){var t,e=o[n.cache];return e&&(t=s[n.cache]||n.to&&n.to(s._rgba)||[],b(n.props,function(r,n){if(null!=e[n.idx])return a=e[n.idx]===t[n.idx]})),a}),a},_space:function(){var t=[],e=this;return b(h,function(r,n){e[n.cache]&&t.push(r)}),t.pop()},transition:function(r,s){var i=d(r),n=i._space(),t=h[n],e=0===this.alpha()?d("transparent"):this,u=e[t.cache]||t.to(e._rgba),l=u.slice();return i=i[t.cache],b(t.props,function(r,n){var t=n.idx,e=u[t],o=i[t],a=g[n.type]||{};null!==o&&(null===e?l[t]=o:(a.mod&&(o-e>a.mod/2?e+=a.mod:e-o>a.mod/2&&(e-=a.mod)),l[t]=y((o-e)*s+e,n)))}),this[n](l)},blend:function(r){if(1===this._rgba[3])return this;var n=this._rgba.slice(),t=n.pop(),e=d(r)._rgba;return d(f.map(n,function(r,n){return(1-t)*e[n]+t*r}))},toRgbaString:function(){var r="rgba(",n=f.map(this._rgba,function(r,n){return null==r?2<n?1:0:r});return 1===n[3]&&(n.pop(),r="rgb("),r+n.join()+")"},toHslaString:function(){var r="hsla(",n=f.map(this.hsla(),function(r,n){return null==r&&(r=2<n?1:0),n&&n<3&&(r=Math.round(100*r)+"%"),r});return 1===n[3]&&(n.pop(),r="hsl("),r+n.join()+")"},toHexString:function(r){var n=this._rgba.slice(),t=n.pop();return r&&n.push(~~(255*t)),"#"+f.map(n,function(r){return 1===(r=(r||0).toString(16)).length?"0"+r:r}).join("")},toString:function(){return 0===this._rgba[3]?"transparent":this.toRgbaString()}}),d.fn.parse.prototype=d.fn,h.hsla.to=function(r){if(null==r[0]||null==r[1]||null==r[2])return[null,null,null,r[3]];var n,t,e=r[0]/255,o=r[1]/255,a=r[2]/255,s=r[3],i=Math.max(e,o,a),u=Math.min(e,o,a),l=i-u,f=i+u,c=.5*f;return n=u===i?0:e===i?60*(o-a)/l+360:o===i?60*(a-e)/l+120:60*(e-o)/l+240,t=0==l?0:c<=.5?l/f:l/(2-f),[Math.round(n)%360,t,c,null==s?1:s]},h.hsla.from=function(r){if(null==r[0]||null==r[1]||null==r[2])return[null,null,null,r[3]];var n=r[0]/360,t=r[1],e=r[2],o=r[3],a=e<=.5?e*(1+t):e+t-e*t,s=2*e-a;return[Math.round(255*u(s,a,n+1/3)),Math.round(255*u(s,a,n)),Math.round(255*u(s,a,n-1/3)),o]},b(h,function(u,r){var t=r.props,s=r.cache,i=r.to,l=r.from;d.fn[u]=function(r){if(i&&!this[s]&&(this[s]=i(this._rgba)),r===c)return this[s].slice();var n,e=f.type(r),o="array"===e||"object"===e?r:arguments,a=this[s].slice();return b(t,function(r,n){var t=o["object"===e?r:n.idx];null==t&&(t=a[n.idx]),a[n.idx]=y(t,n)}),l?((n=d(l(a)))[s]=a,n):d(a)},b(t,function(s,i){d.fn[s]||(d.fn[s]=function(r){var n,t=f.type(r),e="alpha"===s?this._hsla?"hsla":"rgba":u,o=this[e](),a=o[i.idx];return"undefined"===t?a:("function"===t&&(r=r.call(this,a),t=f.type(r)),null==r&&i.empty?this:("string"===t&&(n=p.exec(r))&&(r=a+parseFloat(n[2])*("+"===n[1]?1:-1)),o[i.idx]=r,this[e](o)))})})}),d.hook=function(r){var n=r.split(" ");b(n,function(r,a){f.cssHooks[a]={set:function(r,n){var t,e,o="";if("string"!==f.type(n)||(t=i(n))){if(n=d(t||n),!s.rgba&&1!==n._rgba[3]){for(e="backgroundColor"===a?r.parentNode:r;(""===o||"transparent"===o)&&e&&e.style;)try{o=f.css(e,"backgroundColor"),e=e.parentNode}catch(r){}n=n.blend(o&&"transparent"!==o?o:"_default")}n=n.toRgbaString()}try{r.style[a]=n}catch(r){}}},f.fx.step[a]=function(r){r.colorInit||(r.start=d(r.elem,a),r.end=d(r.end),r.colorInit=!0),f.cssHooks[a].set(r.elem,r.start.transition(r.end,r.pos))}})},d.hook("backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor"),f.cssHooks.borderColor={expand:function(t){var e={};return b(["Top","Right","Bottom","Left"],function(r,n){e["border"+n+"Color"]=t}),e}},l=f.Color.names={aqua:"#00ffff",black:"#000000",blue:"#0000ff",fuchsia:"#ff00ff",gray:"#808080",green:"#008000",lime:"#00ff00",maroon:"#800000",navy:"#000080",olive:"#808000",purple:"#800080",red:"#ff0000",silver:"#c0c0c0",teal:"#008080",white:"#ffffff",yellow:"#ffff00",transparent:[null,null,null,0],_default:"#ffffff"}}(jQuery);