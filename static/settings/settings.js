;(function() {
    $('.social-networks a').click(function(e) {
        e.preventDefault();
        noty({text: 'Social network popup would appear in production version', timeout: 3000});
    });
})();
