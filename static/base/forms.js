;(function() {
    $('form').submit(function(e) {
        e.preventDefault();
        noty({type: 'success', text: 'Changes would be saved in production version', timeout: 3000});
    });
})();
