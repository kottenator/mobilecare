;(function() {
    var cnt = $('.phone-info');

    cnt.find('.jolt-button').click(function(e) {
        e.preventDefault();
        noty({
            text: "Elumination turned-on on your mother's phone. She should notice it and check what has she missed",
            type: 'success'
        });
    });
})();
