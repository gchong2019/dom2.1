;
(function() {
    // var $w = $('.bigimg').width();
    // var $h = $('.bigimg').height();
    $('#jsIndexData .bigimg').mouseenter(function() {
        var wValue = 1.2 * $(this).width();
        var hValue = 1.2 * $(this).height();
        $(this).stop().animate({
            width: wValue,
            height: hValue,
            left: ("-" + (0.2 * $(this).width()) / 2),
            top: ("-" + (0.2 * $(this).height()) / 2)
        }, 1000);
    }).mouseleave(function() {
        $(this).stop().animate({
            // width: "100",
            // height: "80",
            // width: "600",
            // height: "400",
            width: '100%',
            height: '100%',
            left: "0px",
            top: "0px"
        }, 1000);
    });
})()






// $(function() {
//     $('.focus_news').mouseenter(function() {
//         var imgObj = $(this).find('img');
//         imgObj.stop().css({ width: "100%", height: "100%", left: "0px", top: "0px" });
//         var wValue = 1.5 * imgObj.width();
//         var hValue = 1.5 * imgObj.height();
//         imgObj.animate({
//             width: wValue,
//             height: hValue,
//             left: ("-" + (0.5 * imgObj.width()) / 2),
//             top: ("-" + (0.5 * imgObj.height()) / 2)
//         }, 500);
//         $(this).find('.com_news_title').css('color', '#F59300');
//     }).mouseleave(function() {
//         $(this).find('.com_news_title').css('color', '#52A2DE');
//         $(this).find('img').stop().animate({
//             width: "100%",
//             height: "100%",
//             left: "0px",
//             top: "0px"
//         }, 500);
//     });
// });