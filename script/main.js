(function() {
    $(document).ready(function() {
        $(".begin").width($(window).width()).height($(window).height());
        var fsize = (($(window).width()) / 1440 * 1.9).toString() + 'em';
        $("#type-text").css("font-size", fsize);
    });
    $(window).click(function() {
        $("#video-wrap1").hide();
        $("#video-wrap2").show();
        $("#begin2").get(0).play();
        $("#type-text").hide();
        $("#begin-text").hide();
    })
    setTimeout(function() {
        $("#begin-text").show();
    }, 2500);
})();