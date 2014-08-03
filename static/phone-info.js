;(function() {
    var cnt = $('.phone-info');

    cnt.find('.jolt-button').click(function(e) {
        e.preventDefault();
        alert("Elumination turned-on on the Viktoria's phone. She should notice it and check what has she missed");
    });

    cnt.find('.call-button').click(function(e) {
        e.preventDefault();
        alert("Calling Viktoria...");
    });
})();
