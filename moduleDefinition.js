module.exports = foo = function(opts){
    
    var module = {};
    
    var defaultParams = {
        param1 : 'param1',
        param2: 'param2'
    }
    
    // CHECK
    if(!opts){
        return foo(defaultParams); 
    }
    
    var miVar;
    
    // CONSTRUCTOR
    (function(){
        // init db or any stuff
    })();
	
    module.publicMethod = function () {
        console.log('hi buddy ' + miVar);
    };

    function privateMethod(pickle, jar) {
        // This will be NOT available 'outside'.
        return pickleJar;
    };

    return module;
}

var micosa = require('nomreb');
var micosa = require('noasdf')(asdf);