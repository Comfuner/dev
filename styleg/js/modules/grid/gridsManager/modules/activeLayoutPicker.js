(function(modulesManager) {
    "use strict";
    
    modulesManager.set("grid.itemLayoutPicker", ItemLayoutPicker);
    
    /**
     * Returns object that helps getting the active layout on item in grid based on container layout
     * @param {Object} container - DOM element that represents the container element of the grid.
     * @param {Object} sizes - the specific sizes and configuration of the grid.
     */
    function ItemLayoutPicker() {
        var gridLayouts = {},
            container,
            sizes;

        /**
         * create mapping between the grid layouts and numbers.
         */
        function createMapping() {
            var valueOfLayout = Object.keys(sizes).length;
            
            // create mapping between layout sizes and numbers
            for (var layoutKey in sizes) {
                gridLayouts[layoutKey] = valueOfLayout;
                valueOfLayout -= 1;
            }
        };
        
        /**
         * Initialize by setting container and sizes of layouts and create the mapping
         * @param {Object} userContainer - DOM element that represents the grid.
         * @param {Object} userSizes - grid breakpoints sizes based on element width.
         */
        function init(userContainer, userSizes) {
            container = userContainer;
            sizes = userSizes;
            
            createMapping();
        }

        /**
         * get the active item layout based on container layout. 
         * @param {Object} item - DOM element represents item in grid.
         */
        function get(item) {
            var itemLayoutsArray,
                indexOfItemActiveLayout,
                itemLayoutsInNumbers,
                gridLayoutInNumber;

            // find the layout of item that is equal or bigger the layout of container
            gridLayoutInNumber = gridLayouts[container.dataset.grid];
            itemLayoutsArray = item.dataset.gridOptions.split(" ");
            itemLayoutsInNumbers = getGridLayoutsNumbers(itemLayoutsArray);
            indexOfItemActiveLayout = findBiggerOrEqual(gridLayoutInNumber, itemLayoutsInNumbers);

            // find the layout that match the number
            for (var layoutKey in sizes) {
                if (gridLayouts[layoutKey] === itemLayoutsInNumbers[indexOfItemActiveLayout]) {
                    return itemLayoutsArray[indexOfItemActiveLayout];
                }
            }
        }
        
        /**
         * Returns index of equal or bigger value than the searched one.
         * @param {Number} number - the number we are searching equal or bigger.
         * @param {Number} numberArray - pool of numbers we are searching on.
         */
        function findBiggerOrEqual(number, numbersArray) {
            for (var i = 0; i < numbersArray.length; i++) {
                if (number > numbersArray[i]) {
                    if (i !== 0) {
                        return i - 1;
                    }
                    else {
                        return 0;
                    }
                }
            }
            return i-1;
        }

        /**
         * Returns array of numbers that represents the layouts on the item.
         * @param {Array} itemLayoutsArray - An array of layouts on item.
         */
        function getGridLayoutsNumbers(itemLayoutsArray) {
            var layoutOptionsInNumbers = [],
                layoutName;

            for (var i = 0; i < itemLayoutsArray.length; i++) {
                layoutName = itemLayoutsArray[i].split("-")[0]; // the layout name is the prefix seperated by dash
                if (gridLayouts[layoutName] === undefined) {
                    console.error(layoutName + " - layout size not found.");
                }
                else {
                    layoutOptionsInNumbers.push(gridLayouts[layoutName]);
                }
            }
            return layoutOptionsInNumbers;
        }

        return {
            get: get,
            init: init
        };
    }

})(modulesManager);
