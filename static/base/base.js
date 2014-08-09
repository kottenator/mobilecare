;(function() {
    $('[data-toggle="tooltip"]').tooltip();

    $('.user-menu .logout-button').click(function(e) {
        e.preventDefault();
        noty({text: "You would be logged out now (in production version)", timeout: 5000});
    });
})();

$.noty.defaults.layout = 'topCenter';
