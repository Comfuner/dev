var cssClassValidation = (function cssClassValidation() {
    "use strict";

    var errors = {};

    function init() {
        // select the target node
        var target = document.body;

        // create an observer instance
        var observer = new MutationObserver(function(mutations) {
            mutations.forEach(function(mutation) {
                if (mutation.attributeName === "class") {
                    printClassesThatDontExist(mutation.target);
                }
            });
        });
        // configuration of the observer:
        var config = {
            attributes: true,
            subtree: true
        };

        // pass in the target node, as well as the observer options
        observer.observe(target, config);
        
        printClassErrorsOnDOMTree(target);
    }
    
    function printClassErrorsOnDOMTree(target) {
        printClassesThatDontExist(target);
        for(var i=0; i<target.children.length; i++) {
            printClassErrorsOnDOMTree(target.children[i]);
        }
    }

    function printClassesThatDontExist(element) {
        var classNames = Array.prototype.slice.call(element.classList);
        classNames.forEach(function(className) {
            if (!isNameExistInStyleSheets(className)) {
                printError(className);
            }
        });
    }

    function isNameExistInStyleSheets(className) {
        var styleSheets = Array.prototype.slice.call(document.styleSheets);
        return styleSheets.some(function(styleSheet) {
            var cssRules = Array.prototype.slice.call(styleSheet.cssRules);
            return cssRules.some(function(cssRule) {
                return isExistInCSSRule(className, cssRule);
            });
        });
    }

    function isExistInCSSRule(className, cssRule) {
        var regex = new RegExp("[^a-zA-Z](" + className + ")[^a-zA-Z]", "g");
        var match = regex.exec(cssRule.selectorText + " ");

        return match !== null;
    }
    
    function printError(className) {
        if(isClassErrorExist(className)) {
            console.error(className + " class not found");   
            errors[className] = true;
        }
    }
    
    function isClassErrorExist(className) {
        return !errors[className];
    }
    
    return {
        init: init
    };

})();
