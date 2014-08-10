;(function() {
    $('.person').click(function(e) {
        e.preventDefault();
        $($('#contact-person-template').html()).modal();
    });
})();
