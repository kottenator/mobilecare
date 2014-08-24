;(function() {
    var upt = $('.phone-info .uptime .value');
    upt.data('text', upt.text());

    $('.wizard-of-oz .view-all').click(function(e) {
        e.preventDefault();
        window.localStorage.setItem('MobileCare:callsViewed', true);
        window.localStorage.setItem('MobileCare:SMSViewed', true);
        $('.content').text('Reloading...');
        window.location.reload();
    });

    $('.wizard-of-oz .unview-all').click(function(e) {
        e.preventDefault();
        window.localStorage.removeItem('MobileCare:callsViewed');
        window.localStorage.removeItem('MobileCare:SMSViewed');
        $('.content').text('Reloading...');
        window.location.reload();
    });

    $('.wizard-of-oz .low-battery').click(function(e) {
        e.preventDefault();
        $('.phone-info .battery .value').text('1%')
        $('.phone-info .battery .time-left').text('(5 minutes left)');
        upt.text(upt.data('text'));
        $('.low-battery-message').removeClass('hidden');
        $('.offline-message').addClass('hidden');
        resetLink.removeClass('hidden');
    });

    $('.wizard-of-oz .offline').click(function(e) {
        e.preventDefault();
        $('.phone-info .battery .value').text('0%')
        $('.phone-info .battery .time-left').text('(since 12h ago)');
        $('.phone-info .uptime .value').text('--');
        $('.low-battery-message').addClass('hidden');
        $('.offline-message').removeClass('hidden');
        resetLink.removeClass('hidden');
    });

    var resetLink = $('.wizard-of-oz .reset');
    resetLink.click(function(e) {
        e.preventDefault();
        $('.phone-info .battery .value').text('39%')
        $('.phone-info .battery .time-left').text('(5 hours left)');
        upt.text(upt.data('text'));
        $('.low-battery-message').addClass('hidden');
        $('.offline-message').addClass('hidden');
        $(this).addClass('hidden');
    });
})();
