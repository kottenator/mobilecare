;(function() {
    $('.event').click(function() {
        window.location = $(this).data('detail-url');
    }).find('a').click(function(e) {
        e.preventDefault();
        e.stopPropagation();
        alert('Show popup with contact details');
    });
})();
