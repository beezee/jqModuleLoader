$.jqModules.push((function() {
    var bar = function(bookends) {
        var content = 'bar', pre = bookends.prefix, suf = bookends.suffix;
        return {
            hello: function() {
                $('#content').append('<p>'+pre+content+suf+'</p>');
            }
        };
    }
    
    return bar;
}()));