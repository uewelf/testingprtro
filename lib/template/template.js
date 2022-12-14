! function() {
    function x(e) {
        return "'" + e.replace(/('|\\)/g, "\\$1").replace(/\r/g, "\\r").replace(/\n/g, "\\n") + "'"
    }

    function i(e, a) {
        function r(e) {
            return s += e.split(/\n/).length - 1, t && (e = e.replace(/\s+/g, " ").replace(/<!--[\w\W]*?-->/g, "")), e && (e = $[1] + x(e) + $[2] + "\n"), e
        }

        function o(e) {
            var n = s;
            if (c ? e = c(e, a) : i && (e = e.replace(/\n/g, function() {
                    return "$line=" + ++s + ";"
                })), 0 === e.indexOf("=")) {
                var t = u && !/^=[=#]/.test(e);
                if (e = e.replace(/^=[=#]?|[\s;]*$/g, ""), t) {
                    var r = e.replace(/\s*\([^\)]+\)/, "");
                    T[r] || /^(include|print)$/.test(r) || (e = "$escape(" + e + ")")
                } else e = "$string(" + e + ")";
                e = $[1] + e + $[2]
            }
            return i && (e = "$line=" + n + ";" + e), j(e.replace(S, "").replace(W, ",").replace(A, "").replace(R, "").replace(k, "").split(F), function(e) {
                var n;
                e && !f[e] && (n = "print" === e ? d : "include" === e ? m : T[e] ? "$utils." + e : E[e] ? "$helpers." + e : "$data." + e, h += e + "=" + n + ",", f[e] = !0)
            }), e + "\n"
        }
        var i = a.debug,
            n = a.openTag,
            l = a.closeTag,
            c = a.parser,
            t = a.compress,
            u = a.escape,
            s = 1,
            f = {
                $data: 1,
                $filename: 1,
                $utils: 1,
                $helpers: 1,
                $out: 1,
                $line: 1
            },
            p = "".trim,
            $ = p ? ["$out='';", "$out+=", ";", "$out"] : ["$out=[];", "$out.push(", ");", "$out.join('')"],
            g = p ? "$out+=text;return $out;" : "$out.push(text);",
            d = "function(){var text=''.concat.apply('',arguments);" + g + "}",
            m = "function(filename,data){data=data||$data;var text=$utils.$include(filename,data,$filename);" + g + "}",
            h = "'use strict';var $utils=this,$helpers=$utils.$helpers," + (i ? "$line=0," : ""),
            v = $[0],
            y = "return new String(" + $[3] + ");";
        j(e.split(n), function(e) {
            var n = (e = e.split(l))[0],
                t = e[1];
            1 === e.length ? v += r(n) : (v += o(n), t && (v += r(t)))
        });
        var w = h + v + y;
        i && (w = "try{" + w + "}catch(e){throw {filename:$filename,name:'Render Error',message:e.message,line:$line,source:" + x(e) + ".split(/\\n/)[$line-1].replace(/^\\s+/,'')};}");
        try {
            var b = new Function("$data", "$filename", w);
            return b.prototype = T, b
        } catch (e) {
            throw e.temp = "function anonymous($data,$filename) {" + w + "}", e
        }
    }
    var r = function(e, n) {
        return "string" == typeof n ? f(n, {
            filename: e
        }) : t(e, n)
    };
    r.version = "3.0.0", r.config = function(e, n) {
        l[e] = n
    };
    var l = r.defaults = {
            openTag: "<%",
            closeTag: "%>",
            escape: !0,
            cache: !0,
            compress: !1,
            parser: null
        },
        c = r.cache = {};
    r.render = function(e, n) {
        return f(e, n)
    };
    var t = r.renderFile = function(e, n) {
        var t = r.get(e) || s({
            filename: e,
            name: "Render Error",
            message: "Template not found"
        });
        return n ? t(n) : t
    };
    r.get = function(e) {
        var n;
        if (c[e]) n = c[e];
        else if ("object" == typeof document) {
            var t = document.getElementById(e);
            if (t) {
                var r = (t.value || t.innerHTML).replace(/^\s*|\s*$/g, "");
                n = f(r, {
                    filename: e
                })
            }
        }
        return n
    };
    var a = function(e, n) {
            return "string" != typeof e && ("number" === (n = typeof e) ? e += "" : e = "function" === n ? a(e.call(e)) : ""), e
        },
        n = {
            "<": "&#60;",
            ">": "&#62;",
            '"': "&#34;",
            "'": "&#39;",
            "&": "&#38;"
        },
        o = function(e) {
            return n[e]
        },
        u = Array.isArray || function(e) {
            return "[object Array]" === {}.toString.call(e)
        },
        T = r.utils = {
            $helpers: {},
            $include: t,
            $string: a,
            $escape: function(e) {
                return a(e).replace(/&(?![\w#]+;)|[<>"']/g, o)
            },
            $each: function(e, n) {
                var t, r;
                if (u(e))
                    for (t = 0, r = e.length; t < r; t++) n.call(e, e[t], t, e);
                else
                    for (t in e) n.call(e, e[t], t)
            }
        };
    r.helper = function(e, n) {
        E[e] = n
    };
    var E = r.helpers = T.$helpers;
    r.onerror = function(e) {
        var n = "Template Error\n\n";
        for (var t in e) n += "<" + t + ">\n" + e[t] + "\n\n";
        "object" == typeof console && console.error(n)
    };
    var s = function(e) {
            return r.onerror(e),
                function() {
                    return "{Template Error}"
                }
        },
        f = r.compile = function(t, r) {
            function e(n) {
                try {
                    return new o(n, a) + ""
                } catch (e) {
                    return r.debug ? s(e)() : (r.debug = !0, f(t, r)(n))
                }
            }
            for (var n in r = r || {}, l) void 0 === r[n] && (r[n] = l[n]);
            var a = r.filename;
            try {
                var o = i(t, r)
            } catch (e) {
                return e.filename = a || "anonymous", e.name = "Syntax Error", s(e)
            }
            return e.prototype = o.prototype, e.toString = function() {
                return o.toString()
            }, a && r.cache && (c[a] = e), e
        },
        j = T.$each,
        S = /\/\*[\w\W]*?\*\/|\/\/[^\n]*\n|\/\/[^\n]*$|"(?:[^"\\]|\\[\w\W])*"|'(?:[^'\\]|\\[\w\W])*'|\s*\.\s*[$\w\.]+/g,
        W = /[^\w$]+/g,
        A = new RegExp(["\\b" + "break,case,catch,continue,debugger,default,delete,do,else,false,finally,for,function,if,in,instanceof,new,null,return,switch,this,throw,true,try,typeof,var,void,while,with,abstract,boolean,byte,char,class,const,double,enum,export,extends,final,float,goto,implements,import,int,interface,long,native,package,private,protected,public,short,static,super,synchronized,throws,transient,volatile,arguments,let,yield,undefined".replace(/,/g, "\\b|\\b") + "\\b"].join("|"), "g"),
        R = /^\d[^,]*|,\d[^,]*/g,
        k = /^,+|,+$/g,
        F = /^$|,+/;
    "function" == typeof define ? define(function() {
        return r
    }) : "undefined" != typeof exports ? module.exports = r : this.template = r
}();