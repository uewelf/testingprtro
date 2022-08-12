var home = {
    DEVICETYPE: {
        IOS: "IOS",
        ANDROID: "ANDROID"
    },
    LANGUAGE: {
        EN: "EN",
        CN: "CN"
    },
    DATA: {
        us_url: "https://android.tronlink.org/Tronlink_official_4.8.0_20220705114030.apk",
        md5: "d26c49daf73bd74a4d9916156046d4bd",
        testflight: "https://testflight.apple.com/join/DEX9uYRq",
        china_url: "https://asia.tronlink.org:7935/Tronlink_official_4.8.0_20220705114030.apk"
    },
    harmonyDATA: {
        us_url: "https://android.tronlink.org/Tronlink_official_4.8.0_20220705114030.apk",
        md5: "d26c49daf73bd74a4d9916156046d4bd",
        testflight: "https://testflight.apple.com/join/DEX9uYRq",
        china_url: "https://asia.tronlink.org:7935/Tronlink_official_4.8.0_20220705114030.apk"
    },
    isShowFooter: !1,
    initFullPage: function() {
        var t = this;
        new fullpage("#fullpage", {
            css3: !0,
            scrollingSpeed: 1200,
            verticalCentered: !1,
            navigation: !0,
            navigationPosition: "left",
            resetSliders: !0,
            animateAnchor: !0,
            onLeave: function(e, a, o) {
                switch (a.index) {
                    case 0:
                        "up" === o && ($(".header-container").removeClass("whiteBg").removeClass("page-nav-animate"), t.isShowFooter && $(".page-footer").removeClass("blue-footer").removeClass("hide").removeClass("page-nav-animate")), $(".page-bg").addClass("hide");
                        break;
                    case 1:
                        $(".page-bg").removeClass("hide"), "down" === o && ($(".header-container").addClass("opacity").addClass("whiteBg").removeClass("page-nav-animate"), t.isShowFooter && $(".page-footer").addClass("opacity").addClass("blue-footer").removeClass("page-nav-animate")), $("#fp-nav").removeClass("home"), $(".page-bg").removeClass("page-bg-animate2").addClass("page-bg-animate1"), $(".page1-secure-title").addClass("bottom-top-opacity"), $(".page1-secure-info").addClass("bottom-top-opacity3"), $(".page1-ball-l").addClass("page1-ball-l-animate"), $(".page1-ball-r").addClass("page1-ball-r-animate");
                        break;
                    case 2:
                        $(".secure-earth-ball1").addClass("secure-earth-ball1-animate"), $(".secure-earth-ball2").addClass("secure-earth-ball2-animate"), $(".header-container").addClass("whiteBg"), $(".page-footer").addClass("blue-footer"), $("#fp-nav").removeClass("home"), $(".page-bg").removeClass("page-bg-animate1").removeClass("page-bg-animate3").addClass("page-bg-animate2"), $(".page2-secure-title").addClass("bottom-top-opacity"), $(".page2-secure-info").addClass("bottom-top-opacity3"), $(".page2-ball-l").addClass("page2-ball-l-animate"), $(".page2-ball-r").addClass("page2-ball-r-animate");
                        break;
                    case 3:
                        $(".header-container").addClass("whiteBg"), $("#fp-nav").removeClass("home"), $(".page-bg").removeClass("hide").removeClass("page-bg-animate2").addClass("page-bg-animate3"), $(".page3-bg-img").addClass("page1-bg-img-animate"), $(".page3-secure-title").addClass("bottom-top-opacity"), $(".page3-secure-info").addClass("bottom-top-opacity3"), $(".page3-ball-l").addClass("page3-ball-l-animate"), $(".page3-ball-r").addClass("page3-ball-r-animate");
                        break;
                    case 4:
                        $(".header-container").addClass("whiteBg"), t.isShowFooter && $(".page-footer").removeClass("hide").addClass("blue-footer"), $(".page5-footer-wrap").removeClass("hide"), $("#fp-nav").removeClass("home"), $(".page-bg").addClass("hide"), $(".page4-secure-title").addClass("bottom-top-opacity"), $(".page4-secure-desc").addClass("bottom-top-opacity"), $(".page4-secure-info").addClass("bottom-top-opacity3"), $(".page4-ball-l").addClass("page4-ball-l-animate"), $(".page4-ball-r-t").addClass("page4-ball-r-t-animate"), $(".page4-ball-r-b").addClass("page4-ball-r-b-animate");
                        break;
                    case 5:
                        $(".page-bg").addClass("hide"), $(".header-container").addClass("whiteBg"), $("#fp-nav").removeClass("home"), $(".page-footer").addClass("hide"), $(".recommend").addClass("bottom-top-opacity"), $(".re-title, .re-footer").addClass("opacity-animate"), $(".page5-ball-l").addClass("page5-ball-l-animate"), $(".page5-ball-r-min").addClass("page5-ball-r-min-animate"), $(".page5-ball-r-max").addClass("page5-ball-r-max-animate")
                }
            },
            afterLoad: function(e, a, o) {
                switch (a.index) {
                    case 0:
                        $("#fp-nav").addClass("home"), "up" === o && ($(".header-container").addClass("page-nav-animate"), $(".page-footer").addClass("page-nav-animate")), $(".page1-bg-img").removeClass("page1-bg-img-animate"), $(".page1-secure-title").removeClass("bottom-top-opacity"), $(".page1-secure-info").removeClass("bottom-top-opacity3"), $(".page1-ball-l").removeClass("page1-ball-l-animate"), $(".page1-ball-r").removeClass("page1-ball-r-animate");
                        break;
                    case 1:
                        "down" === o && ($(".header-container").addClass("page-nav-animate"), $(".page-footer").addClass("page-nav-animate")), $(".page2-bg-img").removeClass("page2-bg-img-animate"), $(".page2-secure-title").removeClass("bottom-top-opacity"), $(".page2-secure-info").removeClass("bottom-top-opacity3"), $(".page2-ball-l").removeClass("page2-ball-l-animate"), $(".page2-ball-r").removeClass("page2-ball-r-animate");
                        break;
                    case 2:
                        $(".page1-secure-title").removeClass("bottom-top-opacity"), $(".page1-secure-info").removeClass("bottom-top-opacity3"), $(".page1-ball-l").removeClass("page1-ball-l-animate"), $(".page1-ball-r").removeClass("page1-ball-r-animate"), $(".page3-bg-img").removeClass("page1-bg-img-animate"), $(".page3-secure-title").removeClass("bottom-top-opacity"), $(".page3-secure-info").removeClass("bottom-top-opacity3"), $(".page3-ball-l").removeClass("page3-ball-l-animate"), $(".page3-ball-r").removeClass("page3-ball-r-animate");
                        break;
                    case 3:
                        $(".page2-bg-img").removeClass("page2-bg-img-animate"), $(".page2-secure-title").removeClass("bottom-top-opacity"), $(".page2-secure-info").removeClass("bottom-top-opacity3"), $(".page2-ball-l").removeClass("page2-ball-l-animate"), $(".page2-ball-r").removeClass("page2-ball-r-animate"), $(".page4-secure-title").removeClass("bottom-top-opacity"), $(".page4-secure-desc").removeClass("bottom-top-opacity"), $(".page4-secure-info").removeClass("bottom-top-opacity3"), $(".page4-ball-l").removeClass("page4-ball-l-animate"), $(".page4-ball-r-t").removeClass("page4-ball-r-t-animate"), $(".page4-ball-r-b").removeClass("page4-ball-r-b-animate");
                        break;
                    case 4:
                        $(".page3-secure-title").removeClass("bottom-top-opacity"), $(".page3-secure-info").removeClass("bottom-top-opacity3"), $(".page3-ball-l").removeClass("page3-ball-l-animate"), $(".page3-ball-r").removeClass("page3-ball-r-animate"), $(".recommend").removeClass("bottom-top-opacity"), $(".re-title, .re-footer").removeClass("opacity-animate"), $(".page5-ball-l").removeClass("page5-ball-l-animate"), $(".page5-ball-r-min").removeClass("page5-ball-r-min-animate"), $(".page5-ball-r-max").removeClass("page5-ball-r-max-animate");
                        break;
                    case 5:
                        $(".page4-secure-title").removeClass("bottom-top-opacity"), $(".page4-secure-desc").removeClass("bottom-top-opacity"), $(".page4-secure-info").removeClass("bottom-top-opacity3"), $(".page4-ball-l").removeClass("page4-ball-l-animate"), $(".page4-ball-r-t").removeClass("page4-ball-r-t-animate"), $(".page4-ball-r-b").removeClass("page4-ball-r-b-animate")
                }
            }
        })
    },
    getData: function() {
        var o = this,
            e = coomonTool.getLanguage() === o.LANGUAGE.EN ? "en" : "zh";
        $.ajax({
            type: "get",
            url: "https://walletapi.byb.world/?s=tronlink.index&lan=" + e,
            async: !1,
            success: function(e) {
                if (200 === e.ret && e.data && 0 < e.data.length) {
                    o.isShowFooter = !0;
                    var a = template("gitItTmp", e.data[0]);
                    $(".page-footer").html("").append(a), $(".page-footer").removeClass("hide")
                }
            }
        })
    },
    getApkVersion: function() {
        var e = this;
        $(".china-url").attr("href", e.DATA.china_url), $(".us-url").attr("href", e.DATA.us_url), $(".md5Code").html(e.DATA.md5), $(".TestFlight").attr("href", e.DATA.testflight), $(".huawei-url").attr("href", e.harmonyDATA.china_url)
    },
    getMobileDownLoad: function() {},
    generateQrcode: function() {
        $("#qrcode").qrcode({
            render: "canvas",
            text: window.location.href,
            width: "105",
            height: "110",
            background: "#fff",
            foreground: "#000",
            src: "./../images/logo.png"
        }), $("#qrcode2").qrcode({
            render: "canvas",
            text: window.location.href,
            width: "105",
            height: "110",
            background: "#fff",
            foreground: "#000",
            src: "./../images/logo.png"
        })
    },
    bindEvent: function() {
        var o = this,
            t = null;
        $(document).on("mouseover", ".selectLan", function() {
            null !== t && window.clearTimeout(t), $(".uncheckLan").show(500), $(".activedLan").addClass("selected")
        }), $(document).on("mouseout", ".activedLan, .selectLan", function(e) {
            e.stopPropagation(), null !== t && window.clearTimeout(t), t = setTimeout(function() {
                $(".uncheckLan").hide(500), $(".activedLan").removeClass("selected"), window.clearTimeout(t)
            }, 500)
        }), $(document).on("click", ".uncheckLan", function(e) {
            e.stopPropagation(), null !== t && window.clearTimeout(t), t = setTimeout(function() {
                var e = $(".uncheckLan").clone(),
                    a = $(".activedLan").clone();
                $(".activedLan").html(e.html()), $(".uncheckLan").html(a.html()), $(".uncheckLan").hide(500), $(".activedLan").removeClass("selected"), coomonTool.getLanguage() === o.LANGUAGE.EN ? window.location.href = "/cn/" : window.location.href = "/", window.clearTimeout(t)
            }, 500)
        }), $(document).on("click", ".close-footer", function(e) {
            $(".page-footer").addClass("hide")
        });
        var e = null;
        $(document).on("mouseover", ".page5-wx", function() {
            null !== e && window.clearTimeout(e), $(".footer-wx-container").find(".wx-model").animate({
                top: "-1.71rem",
                opacity: 1
            }, 500)
        }), $(document).on("mouseout", ".page5-wx, .wx-container", function() {
            null !== e && window.clearTimeout(e), e = setTimeout(function() {
                $(".footer-wx-container").find(".wx-model").animate({
                    top: "-1.51rem",
                    opacity: 0
                }, 500), window.clearTimeout(e)
            }, 500)
        }), $(document).on("click", ".mobile-wx", function(e) {
            e.stopPropagation(), $(".mobile-wx-container").show()
        }), $(document).on("touchend click", ":not(.mobile-wx)", function() {
            $(".mobile-wx-container").hide()
        });
        var a = null;
        $(document).on("mouseover", ".page5-email", function() {
            null !== a && window.clearTimeout(a), $(".footer-email-container").find(".email-model").animate({
                top: "-0.6rem",
                opacity: 1
            }, 500)
        }), $(document).on("mouseout", ".page5-email, .email-container", function() {
            null !== a && window.clearTimeout(a), a = setTimeout(function() {
                $(".footer-email-container").find(".email-model").animate({
                    top: "-1.51rem",
                    opacity: 0
                }, 500), window.clearTimeout(a)
            }, 500)
        }), $(document).on("click", ".mobile-email", function(e) {
            e.stopPropagation(), $(".mobile-email-container").show()
        }), $(document).on("touchend click", ":not(.mobile-email)", function() {
            $(".mobile-email-container").hide()
        });
        var n = null;
        $(document).on("mouseover", ".cn-wx", function() {
            null !== n && window.clearTimeout(n), $(".header-wx-container").find(".wx-model").animate({
                top: ".4rem",
                opacity: 1
            }, 500)
        }), $(document).on("mouseout", ".cn-wx, .wx-container", function() {
            null !== n && window.clearTimeout(n), n = setTimeout(function() {
                $(".header-wx-container").find(".wx-model").animate({
                    top: ".2rem",
                    opacity: 0
                }, 500), window.clearTimeout(n)
            }, 500)
        }), $(document).on("click", ".cn-wx", function(e) {
            e && e.preventDefault && e.preventDefault()
        }), $(document).on("click", ".page5-wx", function(e) {
            e && e.preventDefault && e.preventDefault()
        }), $(document).on("click", ".menu", function() {
            $(".menu-model").show(), $(".model-content").animate({
                top: "0"
            }, 800)
        }), $(document).on("click", ".model-close-btn", function() {
            $(".model-content").animate({
                top: "-10rem"
            }, 1e3, function() {
                $(".menu-model").hide()
            })
        });
        var l = null;
        $(".download .links .drop-div").hover(function() {
            clearTimeout(l), $(this).siblings("div").find(".dropdown-content").hide(200), $(this).parents(".links").siblings("li").find(".dropdown-content").hide(), $(this).stop(!0, !0).children().show(200), $(this).parents(".page4-bg").css("z-index", 3)
        }, function() {
            l = setTimeout(function() {
                $(".dropdown-content").stop(!0, !0).hide(200), $(".Android-download-line").hide(200), $(".page4-bg").css("z-index", 1)
            }, 100)
        }), $(document).on("click", ".android-device", function() {
            $(".android-model").show(), $(".dropdown-content").show()
        }), $(document).on("click", ".ios-device", function() {
            $(".ios-model").show(), $(".dropdown-content").show()
        }), $(document).on("touchstart", ".model-bg", function() {
            $(".mobile-model-download").hide(), $(".dropdown-content").hide()
        });
        var i = null;
        $(".developer").hover(function() {
            clearTimeout(i), $(this).stop(!0, !0).children().show(200)
        }, function() {
            i = setTimeout(function() {
                $(".menu-dropdown-content").stop(!0, !0).hide(200)
            }, 100)
        }), $(".Android-download").hover(function() {
            $(".Android-download-line").show()
        }), $(".Android-download").click(function() {
            $(".Android-download-line").show()
        }), $(document).on("click", ".see-report-mobile", function(e) {
            e.stopPropagation(), $(this).find(".dropdown-content-mobile").show(), $(document).bind("click", function(e) {
                $(".see-report-mobile .dropdown-content-mobile").hide()
            })
        }), new ClipboardJS(".mobile-to-wx", {
            text: function() {
                return $("#hiden-tronlink").val()
            }
        }).on("success", function(e) {
            $.toast({
                text: "已复制微信号，请前往微信添加",
                hideAfter: 5e3
            }), e.clearSelection()
        })
    }
};
$(function() {
    var e = 750 < window.screen.availWidth;
    e && home.initFullPage(), home.getApkVersion(), home.generateQrcode(), home.getMobileDownLoad(), home.bindEvent(), $(window).resize(function() {
        e ? home.initFullPage() : home.getMobileDownLoad()
    }), $(window).scroll(function() {
        var e = 0;
        document.documentElement && document.documentElement.scrollTop ? e = document.documentElement.scrollTop : document.body && (e = document.body.scrollTop);
        var a = e / 200;
        .3 < (a = isNaN(a) ? 0 : a) ? ($(".mobile-header").addClass("mobile-white-header"), $(".mobile-white-header").css("opacity", a)) : ($(".mobile-header").removeClass("mobile-white-header"), $(".mobile-header").css("opacity", 1))
    })
});