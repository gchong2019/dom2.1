$(window).on("scroll",function(){var l=$(window).scrollTop(),o=$(".loutinav");700<=l?o.show():o.hide(),$(".louceng").each(function(o,n){var t=$(n).offset().top+200;if(l<t)return $(".loutinav a").removeClass("current"),$(".loutinav a").eq(o).addClass("current"),!1})}),$(".loutinav a").not(".last").on("click",function(){$(this).addClass("current").siblings("a").removeClass("current");var o=$(".louceng").eq($(this).index()).offset().top;$("html,body").animate({scrollTop:o})}),$(".last").on("click",function(){$("html,body").animate({scrollTop:0})}),$("#back-top").on("click",function(){$("html,body").animate({scrollTop:0})});