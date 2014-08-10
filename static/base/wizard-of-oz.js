;(function() {
    $('.wizard-of-oz a.see-all').click(function(e) {
        e.preventDefault();
        window.localStorage.setItem('MobileCare:callsViewed', true);
        window.localStorage.setItem('MobileCare:SMSViewed', true);
        $('.content').text('Reloading...');
        window.location.reload();
    });

    $('.wizard-of-oz a.unsee-all').click(function(e) {
        e.preventDefault();
        window.localStorage.removeItem('MobileCare:callsViewed');
        window.localStorage.removeItem('MobileCare:SMSViewed');
        $('.content').text('Reloading...');
        window.location.reload();
    });
})();
