var module = (function() {
    var bar = function() {
        return {
            hello: function() {
                $('#content').append('<p>bar</p>');
            }
        };
    }
    
    return bar;
}());