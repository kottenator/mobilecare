;(function() {
    $('[data-toggle="tooltip"]').tooltip();

    $('.user-menu .logout-button').click(function(e) {
        e.preventDefault();
        alert("Logging out...");
    });
})();
