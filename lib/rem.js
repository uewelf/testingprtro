! function(e, n) {
    var i = e.documentElement,
        t = "orientationchange" in window ? "orientationchange" : "resize",
        o = function() {
            var e = i.clientWidth;
            if (e)
                if (750 <= e) {
                    var n = e / 1920 * 100,
                        t = 100 < n ? 100 : n;
                    i.style.fontSize = t + "px"
                } else i.style.fontSize = e / 750 * 100 + "px"
        };
    e.addEventListener && (n.addEventListener(t, o, !1), e.addEventListener("DOMContentLoaded", o, !1))
}(document, window);