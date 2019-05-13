;
(function() {
    var $btns = $('#jsIndexData .classify-btn .btn');
    var $contents = $('#jsIndexData .classify-detail .fadeInClass');
    $btns.on('click', function() {
        // alert('12');
        $(this).addClass('current').siblings('div').removeClass('current'); //链式操作的核心是最开始的元素对象
        $contents.eq($(this).index()).addClass('show').siblings('li').removeClass('show');
    });
})();