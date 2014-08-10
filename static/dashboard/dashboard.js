;(function() {
    var events = $('.event');

    events.find('a').click(function(e) {
        e.preventDefault();
        e.stopPropagation();
        alert('Show popup with contact details');
    });

    var recent = events.filter('.highlighted').addClass('slow-transition');
    setTimeout(function() {
        recent.removeClass('highlighted');
        setTimeout(function() { recent.removeClass('slow-transition'); }, 1500);
    }, 3000);
})();
