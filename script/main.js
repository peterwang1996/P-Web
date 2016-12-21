(function() {
    $(document).ready(function() {
        function adjust() {
            $(".begin").width($(window).width()).height($(window).height());
            var fsize = (($(window).width()) / 1440 * 1.9).toString() + 'em';
            $("#type-text").css("font-size", fsize);
            $(".p-col div").width(($(window).width() - 1) / 6).height(($(window).width() - 1) / 6);
            $(".p-col div h2").css("margin-top", ((($(window).width()) / 1440 * 70).toString() + 'px'));
            $(".p-col div h2").css("font-size", ((($(window).width()) / 1440 * 1.6).toString() + 'em'));
        }
        window.onload = function() {
            window.onresize = adjust;
            adjust();
        }
        $('#menu-icon').click(function() {
            $(this).toggleClass('open');
            $("#menu-bar").toggleClass('active');
            setTimeout(function() {
                $('#menu-mask').toggleClass('active1');
                $('#menu-bar h2').toggleClass('active2');
                $('#menu-bar div').toggleClass('active2');
            }, 200);
        });
    });
    $(window).click(function() {
            $("#video-wrap1").hide();
            $("#video-wrap2").show();
            $("#begin2").get(0).play();
            $("#type-text").fadeOut("slow");
            $("#begin-text").fadeOut("slow");
            setTimeout(function() {
                $("#wrap").fadeOut("slow");
                $(".p-col div").delay(400).fadeIn(400);
                $(".mask1").animate({ left: "+=2400px" }, 1000, 'easeInOutCubic');
                $(".mask2").delay(200).animate({ left: "+=2400px" }, 800, 'easeInOutCubic');
            }, 1000);
            $("#p-wrap").show();
        })
        /*
            $(window).scroll(function() {
                $("#video-wrap1").hide();
                $("#video-wrap2").show();
                $("#begin2").get(0).play();
                $("#type-text").hide();
                $("#begin-text").hide();
                $("#arrow1").hide();
                $("#portfolio-content").fadeIn();
            })
        */
    setTimeout(function() {
        $("#video-wrap1").hide();
        $("#video-wrap2").show();
        $("#begin2").get(0).play();
        $("#type-text").fadeOut("slow");
        $("#begin-text").fadeOut("slow");
        setTimeout(function() {
            $("#wrap").fadeOut("slow");
            $(".p-col div").delay(400).fadeIn(400);
            $(".mask1").animate({ left: "+=2400px" }, 1000, 'easeInOutCubic');
            $(".mask2").delay(200).animate({ left: "+=2400px" }, 800, 'easeInOutCubic');
        }, 1000);
        $("#p-wrap").show();
    }, 6000);

    setTimeout(function() {
        $("#begin-text").show();
    }, 2500);

    $("#navi1").mouseover(function() {
        $("#navi1 div").animate({ left: "+=90px" }, 200);
    });

    $("#navi1").mouseleave(function() {
        $("#navi1 div").animate({ left: "+=90px" }, 200);
        setTimeout(function() {
            $("#navi1 div").css("left", "-90px");
        }, 300);
    });

    $("#navi2").mouseover(function() {
        $("#navi2 div").animate({ left: "+=90px" }, 200);
    });

    $("#navi2").mouseleave(function() {
        $("#navi2 div").animate({ left: "+=90px" }, 200);
        setTimeout(function() {
            $("#navi2 div").css("left", "-90px");
        }, 300);
    });

    $("#navi3").mouseover(function() {
        $("#navi3 div").animate({ left: "+=100px" }, 200);
    });

    $("#navi3").mouseleave(function() {
        $("#navi3 div").animate({ left: "+=100px" }, 200);
        setTimeout(function() {
            $("#navi3 div").css("left", "-100px");
        }, 300);
    });

    $("#navi4").mouseover(function() {
        $("#navi4 div").animate({ left: "+=65px" }, 200);
    });

    $("#navi4").mouseleave(function() {
        $("#navi4 div").animate({ left: "+=65px" }, 200);
        setTimeout(function() {
            $("#navi4 div").css("left", "-65px");
        }, 300);
    });

    /*

    */

    jQuery.easing['easeInOutExpo'] = jQuery.easing['swing'];

    jQuery.extend(jQuery.easing, {
        def: 'easeOutQuad',
        swing: function(x, t, b, c, d) {
            //alert(jQuery.easing.default);
            return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
        },
        easeInQuad: function(x, t, b, c, d) {
            return c * (t /= d) * t + b;
        },
        easeOutQuad: function(x, t, b, c, d) {
            return -c * (t /= d) * (t - 2) + b;
        },
        easeInOutQuad: function(x, t, b, c, d) {
            if ((t /= d / 2) < 1) return c / 2 * t * t + b;
            return -c / 2 * ((--t) * (t - 2) - 1) + b;
        },
        easeInCubic: function(x, t, b, c, d) {
            return c * (t /= d) * t * t + b;
        },
        easeOutCubic: function(x, t, b, c, d) {
            return c * ((t = t / d - 1) * t * t + 1) + b;
        },
        easeInOutCubic: function(x, t, b, c, d) {
            if ((t /= d / 2) < 1) return c / 2 * t * t * t + b;
            return c / 2 * ((t -= 2) * t * t + 2) + b;
        },
        easeInQuart: function(x, t, b, c, d) {
            return c * (t /= d) * t * t * t + b;
        },
        easeOutQuart: function(x, t, b, c, d) {
            return -c * ((t = t / d - 1) * t * t * t - 1) + b;
        },
        easeInOutQuart: function(x, t, b, c, d) {
            if ((t /= d / 2) < 1) return c / 2 * t * t * t * t + b;
            return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
        },
        easeInQuint: function(x, t, b, c, d) {
            return c * (t /= d) * t * t * t * t + b;
        },
        easeOutQuint: function(x, t, b, c, d) {
            return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
        },
        easeInOutQuint: function(x, t, b, c, d) {
            if ((t /= d / 2) < 1) return c / 2 * t * t * t * t * t + b;
            return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
        },
        easeInSine: function(x, t, b, c, d) {
            return -c * Math.cos(t / d * (Math.PI / 2)) + c + b;
        },
        easeOutSine: function(x, t, b, c, d) {
            return c * Math.sin(t / d * (Math.PI / 2)) + b;
        },
        easeInOutSine: function(x, t, b, c, d) {
            return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
        },
        easeInExpo: function(x, t, b, c, d) {
            return (t == 0) ? b : c * Math.pow(2, 10 * (t / d - 1)) + b;
        },
        easeOutExpo: function(x, t, b, c, d) {
            return (t == d) ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b;
        },
        easeInOutExpo: function(x, t, b, c, d) {
            if (t == 0) return b;
            if (t == d) return b + c;
            if ((t /= d / 2) < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
            return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
        },
        easeInCirc: function(x, t, b, c, d) {
            return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
        },
        easeOutCirc: function(x, t, b, c, d) {
            return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
        },
        easeInOutCirc: function(x, t, b, c, d) {
            if ((t /= d / 2) < 1) return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
            return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
        },
        easeInElastic: function(x, t, b, c, d) {
            var s = 1.70158;
            var p = 0;
            var a = c;
            if (t == 0) return b;
            if ((t /= d) == 1) return b + c;
            if (!p) p = d * .3;
            if (a < Math.abs(c)) {
                a = c;
                var s = p / 4;
            } else var s = p / (2 * Math.PI) * Math.asin(c / a);
            return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
        },
        easeOutElastic: function(x, t, b, c, d) {
            var s = 1.70158;
            var p = 0;
            var a = c;
            if (t == 0) return b;
            if ((t /= d) == 1) return b + c;
            if (!p) p = d * .3;
            if (a < Math.abs(c)) {
                a = c;
                var s = p / 4;
            } else var s = p / (2 * Math.PI) * Math.asin(c / a);
            return a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b;
        },
        easeInOutElastic: function(x, t, b, c, d) {
            var s = 1.70158;
            var p = 0;
            var a = c;
            if (t == 0) return b;
            if ((t /= d / 2) == 2) return b + c;
            if (!p) p = d * (.3 * 1.5);
            if (a < Math.abs(c)) {
                a = c;
                var s = p / 4;
            } else var s = p / (2 * Math.PI) * Math.asin(c / a);
            if (t < 1) return -.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
            return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p) * .5 + c + b;
        },
        easeInBack: function(x, t, b, c, d, s) {
            if (s == undefined) s = 1.70158;
            return c * (t /= d) * t * ((s + 1) * t - s) + b;
        },
        easeOutBack: function(x, t, b, c, d, s) {
            if (s == undefined) s = 1.70158;
            return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
        },
        easeInOutBack: function(x, t, b, c, d, s) {
            if (s == undefined) s = 1.70158;
            if ((t /= d / 2) < 1) return c / 2 * (t * t * (((s *= (1.525)) + 1) * t - s)) + b;
            return c / 2 * ((t -= 2) * t * (((s *= (1.525)) + 1) * t + s) + 2) + b;
        },
        easeInBounce: function(x, t, b, c, d) {
            return c - jQuery.easing.easeOutBounce(x, d - t, 0, c, d) + b;
        },
        easeOutBounce: function(x, t, b, c, d) {
            if ((t /= d) < (1 / 2.75)) {
                return c * (7.5625 * t * t) + b;
            } else if (t < (2 / 2.75)) {
                return c * (7.5625 * (t -= (1.5 / 2.75)) * t + .75) + b;
            } else if (t < (2.5 / 2.75)) {
                return c * (7.5625 * (t -= (2.25 / 2.75)) * t + .9375) + b;
            } else {
                return c * (7.5625 * (t -= (2.625 / 2.75)) * t + .984375) + b;
            }
        },
        easeInOutBounce: function(x, t, b, c, d) {
            if (t < d / 2) return jQuery.easing.easeInBounce(x, t * 2, 0, c, d) * .5 + b;
            return jQuery.easing.easeOutBounce(x, t * 2 - d, 0, c, d) * .5 + c * .5 + b;
        }
    });

})();