;(function() {
    $('.tutorial a').click(function(e) {
        e.preventDefault();
        noty({text: "Of course we will need mobile apps in production version, but not now", timeout: 3000});
    });

    $('form .unlink').click(function(e) {
        e.preventDefault();
        if (confirm("Are you sure you want to do this?"))
             noty({type: 'success', text: "Phone would be unlinked in production version", timeout: 3000});
    });
})();
