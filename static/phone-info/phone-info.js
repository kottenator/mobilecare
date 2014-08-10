;(function() {
    var cnt = $('.phone-info');

    cnt.find('.jolt-button').click(function(e) {
        e.preventDefault();
        noty({
            text: "Elumination turned-on on the remote phone. Somebody should notice it and check out the reason",
            type: 'success'
        });
    });
})();
