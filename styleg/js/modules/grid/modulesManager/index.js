"use strict";

var modulesManager = (function md() {
    
    var modules = {};
    
    function get(moduleName, params) {
        if(modules[moduleName]) {
            return modules[moduleName].apply(null, params);
        } else {
            console.error(moduleName + " - module does not exist");
        }
    }
    
    function set(moduleName, moduleFunction) {
        if(modules[moduleName] !== undefined) {
            console.warn(moduleName + "already exist as moduleName");
        }
        
        modules[moduleName] = moduleFunction;
    }
    
    return {
        get: get,
        set: set
    };
})();