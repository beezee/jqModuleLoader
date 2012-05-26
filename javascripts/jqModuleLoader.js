(function($) {
    $.jqLoadModule = function(scripts, callback) {
        var keys = [], urls = [], depth = 0, modules = {};
        $.each(scripts, function(k, v) {
                keys.push(k);
                urls.push(v);
        });
        function cb() {
                if (typeof module === 'function') modules[keys[depth]] = module();
                depth++;
                if (depth < urls.length) $.getScript(urls[depth], cb);
                else callback(modules);
        }
        $.getScript(urls[depth], cb);
    }
}(jQuery));