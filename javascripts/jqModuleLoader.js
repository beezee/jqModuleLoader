(function($) {
    $.jqLoadModule = function(scripts, callback, args) {
        var keys = [], urls = [], scriptArgs = [], depth = 0, modules = {};
        $.each(scripts, function(k, v) {
                keys.push(k);
                var url = (v.script) ? v.script : v;
                urls.push(url);
                var _args = (v.args) ? v.args : (args) ? args : [];
                scriptArgs.push(_args);
        });
        function cb() {
                if (typeof jqModuleToLoad === 'function') modules[keys[depth]] = jqModuleToLoad.apply(jqModuleToLoad, scriptArgs[depth]);
                if (jqModuleToLoad) jqModuleToLoad = null;
                depth++;
                if (depth < urls.length) $.getScript(urls[depth], cb);
                else callback(modules);
        }
        $.getScript(urls[depth], cb);
    }
}(jQuery));