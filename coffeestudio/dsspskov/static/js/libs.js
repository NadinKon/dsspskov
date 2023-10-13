function isReadCookiePolicy() {
    var e = Cookies.get("isReadCookiePolicy"), o = document.getElementById("cookie-policy-info");
    o.style.display = void 0 !== e ? "none" : "block"
}

function clickCookieBtn() {
    var e = document.getElementById("cookie-policy-info");
    Cookies.set("isReadCookiePolicy", "true", {expires: 365}), e.style.display = "none"
}

document.getElementById("cookie-policy-btn").addEventListener("click", clickCookieBtn, !1),
    document.addEventListener("DOMContentLoaded", isReadCookiePolicy);

$(document).ajaxStart(function () {
    $('.loader').show();
}).ajaxStop(function () {
    $('.loader').hide();
});

$(document).ready(function () {
    if($('input[type=tel]').length > 0) {
        $('input[type=tel]').inputmask('+7 (999) 999-99-99');
    }
});

var body = $('body'),
    ua = navigator.userAgent,
    event = (ua.match(/iPad/i)) ? "touchstart" : "click";

$('[data-modal]').magnificPopup({
    type: 'inline',
    callbacks: {
        open: function () {
            $('html, body').css('overflow', 'hidden');
        },
        close: function () {
            $('html, body').css('overflow', '');
        }
    }
});

$('body').on('click', '.js-burger-open', function () {
    $('.header-content').addClass('active');
    $('html,body').css('overflow', 'hidden');
});

$('body').on('click', '.js-burger-close', function () {
    $('.header-content').removeClass('active');
    $('html,body').css('overflow', '');
});


