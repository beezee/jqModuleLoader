##Module file structure

Module files should be structured as follows

    var jqModuleToLoad = (function() {
    
        var functionThatReturnsNameSpacedCode = function(acceptedArg, anotherAcceptedArg) {
            
            var privatePropertyHere = acceptedArg;
            
            function privateMethodHere() { //do stuff }
            
            return {
                publicMethod: function() { //do stuff },
                
                publicProperty: 'value'
                
                //etc
            }
        }
    }());
    
The loader will unset the global jqModuleToLoad variable after moving it to the namespace provided in your call to the plugin.

##Plugin usage

The code below loads two modules, first foo and then bar. The foo module constructor will be passed one argument, a string 'baz', as defined
in the third parameter passed to $.jqLoadModule. The bar module constructor will be passed one argument, an object with properties
prefix and suffix, as defined in the args property of the bar property of the first parameter passed to $.jqLoadModule.

Note that the script property is required in defining a module when passing module specific argument overrides as in the bar definition in the below
example.

    $.jqLoadModule({ foo: 'javascripts/foo.js', bar: {script:'javascripts/bar.js', args:[{prefix:'pre ', suffix:' post'}]}}, function(modules) {
            modules.foo.hello();
            modules.bar.hello();
    }, ['baz']);