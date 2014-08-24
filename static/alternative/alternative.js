$(function() {
    var table = $('.events-table'),
        events = table.find('.event'),
        searchInput = $('.actions .search input');

    searchInput.keyup(function() {
        _search(this.value);
    });

    _drawTable(events);

    var callsBox = $('.actions .filter-by-type input[value="calls"]'),
        smsBox = $('.actions .filter-by-type input[value="sms"]');

    callsBox.add(smsBox).click(function() {
        _search(searchInput.val());
    });

    window.search = _search;

    function _search(v) {
        var filtered = events;

        if (!callsBox.prop('checked'))
            filtered = filtered.filter(':not(.call)');

        if (!smsBox.prop('checked'))
            filtered = filtered.filter(':not(.sms)');

        searchInput.val(v);
        var q = v.toLowerCase().replace(/\s/g, '');
        filtered = filtered.filter(function() {
            return $(this).find('.contact >').text().toLowerCase().replace(/\s/g, '').indexOf(q) != -1;
        });
        _drawTable(filtered);
    }

    function _drawTable(events) {
        table.find('.event').detach();
        table.empty();
        var tr;
        for (var i = 0; i < events.length; i++) {
            if (i % 3 == 0)
                tr = $('<tr>').appendTo(table);
            $('<td>').appendTo(tr).append(events[i]);
        }
    }
});
