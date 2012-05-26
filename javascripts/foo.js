$.jqModules.push((function($, exports) {
    
    var foo = function(content) {
        var c = content || 'foo';
        
        return {
            hello: function() { $('#content').append('<p>'+c+'</p>'); }
        }
    }
    
    return foo;
    
}(jQuery, window)));