;(function() {
    var callsViewed = window.localStorage.getItem('MobileCare:callsViewed'),
        SMSViewed = window.localStorage.getItem('MobileCare:SMSViewed');

    // homepage dashboard
    if ($('.phone-actions > ul > li:eq(0) > span')[0]) {
        if (callsViewed)
            $('.calls-overview').find('.recent-events').hide().end().find('.empty-message').removeClass('hidden');
        if (SMSViewed)
            $('.sms-overview').find('.recent-events').hide().end().find('.empty-message').removeClass('hidden');
    }
    // calls / SMS dashboard
    else {
        var recent = $('.event.highlighted'),
            currentViewed = (
                $('.phone-actions > ul > li:eq(1) > span')[0] && callsViewed
                ||
                $('.phone-actions > ul > li:eq(2) > span')[0] && SMSViewed
            );

        if (currentViewed) {
            recent.addClass('no-transition').removeClass('highlighted');
        } else {
            recent.addClass('slow-transition');
            setTimeout(function() {
                recent.removeClass('highlighted');
                setTimeout(function() { recent.removeClass('slow-transition'); }, 1500);
            }, 3000);
        }
    }
})();
