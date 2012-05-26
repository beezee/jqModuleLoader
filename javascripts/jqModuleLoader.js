(function($) {
    $.jqModules = [];
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
                var i = $.jqModules.length - 1;
                if (typeof $.jqModules[i] === 'function') modules[keys[depth]] = $.jqModules[i].apply($.jqModules[i], scriptArgs[depth]);
                if ($.jqModules[i]) delete $.jqModules[i];
                depth++;
                if (depth < urls.length) $.getScript(urls[depth], cb);
                else { callback(modules); delete $.jqModules }
        }
        $.getScript(urls[depth], cb);
    }
}(jQuery));