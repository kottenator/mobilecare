;(function() {
    $('[data-toggle="tooltip"]').tooltip();

    $('.user-menu .logout-button').click(function(e) {
        e.preventDefault();
        noty({text: "You would be logged out now (in production version)", timeout: 5000});
    });

    if (window.localStorage.getItem('MobileCare:callsViewed'))
        $('.phone-actions > ul > li:eq(1) .counter').hide();

    if (window.localStorage.getItem('MobileCare:SMSViewed'))
        $('.phone-actions > ul > li:eq(2) .counter').hide();
})();

$.noty.defaults.layout = 'topCenter';
