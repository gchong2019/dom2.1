;
(function() {
    $(window).on('scroll', function() {
        //1.通过滚动条的距离控制楼梯导航的显示与隐藏
        var $top = $(window).scrollTop();
        var $loutinav = $('.loutinav');
        if ($top >= 700) {
            $loutinav.show();
        } else {
            $loutinav.hide();
        }
        //4.通过滚轮事件，给对应的左侧的楼梯导航添加对应的class=active
        $('.louceng').each(function(index, element) {
            var $loucengtop = $(element).offset().top + 200;
            if ($loucengtop > $top) {
                $('.loutinav a').removeClass('current');
                $('.loutinav a').eq(index).addClass('current');
                return false;
            }
        });
    });
    //2.点击楼梯导航，让对应的楼层进行位置的跳转。
    $('.loutinav a').not('.last').on('click', function() {
        $(this).addClass('current').siblings('a').removeClass('current');
        var $top = $('.louceng').eq($(this).index()).offset().top;
        $('html,body').animate({ //这里给滚动条赋值，兼容写法
            scrollTop: $top
        });
    });
    //3.回到顶部。
    $('.last').on('click', function() {
        $('html,body').animate({
            scrollTop: 0
        });
    })

    $('#back-top').on('click', function() {
        $('html,body').animate({
            scrollTop: 0
        });
    })


})();