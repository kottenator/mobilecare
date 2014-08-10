;(function() {
    setTimeout(function() {
        $('.phone-actions > ul > li > span > .counter').addClass('collapsed');

        if ($('.phone-actions > ul > li:eq(1) .counter.collapsed')[0])
            window.localStorage.setItem('MobileCare:callsViewed', true);

        if ($('.phone-actions > ul > li:eq(2) .counter.collapsed')[0])
            window.localStorage.setItem('MobileCare:SMSViewed', true);
    }, 3000);
})();
