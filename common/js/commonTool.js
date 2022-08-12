var coomonTool = {
    getMobileType: function() {
        var o = navigator.userAgent.toLocaleLowerCase();
        return /iphone|ipad|ipod/.test(o) ? "IOS" : "ANDROID"
    },
    getLanguage: function() {
        return -1 !== window.location.href.indexOf("cn") ? "CN" : "EN"
    }
};