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
        $("#type-text").fadeOut( "slow" );
        $("#begin-text").fadeOut( "slow" );
    })

    $(window).scroll(function() {
        $("#video-wrap1").hide();
        $("#video-wrap2").show();
        $("#begin2").get(0).play();
        $("#type-text").hide();
        $("#begin-text").hide();
        $("#arrow1").hide();
    })

    setTimeout(function() {
        $("#video-wrap1").hide();
        $("#video-wrap2").show();
        $("#begin2").get(0).play();
        $("#type-text").fadeOut( "slow" );
        $("#begin-text").fadeOut( "slow" );
    },6000);

    setTimeout(function() {
        $("#begin-text").show();
    }, 2500);

    $("#navi1").mouseover(function() {
        $("#navi1 div").animate({left: "+=75px"}, 200);
    });

    $("#navi1").mouseleave(function() {
        $("#navi1 div").animate({left: "+=75px"}, 200);
        setTimeout(function() {
        $("#navi1 div").css("left", "-75px");
    }, 300);
    });

    $("#navi2").mouseover(function() {
        $("#navi2 div").animate({left: "+=76px"}, 200);
    });

    $("#navi2").mouseleave(function() {
        $("#navi2 div").animate({left: "+=76px"}, 200);
        setTimeout(function() {
        $("#navi2 div").css("left", "-76px");
    }, 300);
    });

    $("#navi3").mouseover(function() {
        $("#navi3 div").animate({left: "+=90px"}, 200);
    });

    $("#navi3").mouseleave(function() {
        $("#navi3 div").animate({left: "+=90px"}, 200);
        setTimeout(function() {
        $("#navi3 div").css("left", "-90px");
    }, 300);
    });

    $("#navi4").mouseover(function() {
        $("#navi4 div").animate({left: "+=51px"}, 200);
    });

    $("#navi4").mouseleave(function() {
        $("#navi4 div").animate({left: "+=51px"}, 200);
        setTimeout(function() {
        $("#navi4 div").css("left", "-51px");
    }, 300);
    });
})();