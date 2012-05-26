var module = (function($, exports) {
    
    var foo = function() {
        return {
            hello: function() { $('#content').append('<p>foo</p>'); }
        }
    }
    
    return foo;
    
}(jQuery, window));