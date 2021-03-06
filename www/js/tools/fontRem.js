(function (doc, win) {
    var docEl = doc.documentElement,
        resizeEvt = "orientationchange" in window ? "orientationchange" : "resize",
        recalc = function () {
            var clientWidth = docEl.clientWidth;
            if (!clientWidth) return;
            if (clientWidth<640){
                docEl.style.fontSize = 20 * (clientWidth / 320) + "px";
               // console.log(12 * (clientWidth / 320) + "px");
            }else{
                //docEl.style.fontSize = "12px";
                docEl.style.fontSize = 20 *  ( 640 / 320) + "px";
            }
        };

    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);