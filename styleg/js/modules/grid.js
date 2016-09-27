

(function() {
    "use strict";

    var modulesManager = (function md() {

        var modules = {};

        function get(moduleName, params) {
            if (modules[moduleName]) {
                return modules[moduleName].apply(null, params);
            }
            else {
                console.error(moduleName + " - module does not exist");
            }
        }

        function set(moduleName, moduleFunction) {
            if (modules[moduleName] !== undefined) {
                console.warn(moduleName + "already exist as moduleName");
            }

            modules[moduleName] = moduleFunction;
        }

        return {
            get: get,
            set: set
        };
    })();



    (function(modulesManager) {
        "use strict";

        modulesManager.set("util", util);

        function util() {

            return {
                getArray: function getArray(arrayLike) {
                    return Array.prototype.slice.call(arrayLike);
                },
                getElementsByNodeType: function getElementsByNodeType(element, nodeType, matchedElements) {
                    matchedElements = matchedElements || [];
                    if (element.nodeType === nodeType) {
                        matchedElements.push(element);
                    }

                    for (var i = 0; i < element.childNodes.length; i++) {
                        getElementsByNodeType(element.childNodes[i], nodeType, matchedElements);
                    }

                    return matchedElements;
                },
                removeElements: function removeElements(elementsArr) {
                    elementsArr.forEach(function(element) {
                        element.parentNode.removeChild(element);
                    });
                }
            };
        }

    })(modulesManager);

    (function(modulesManager) {
        "use strict";

        modulesManager.set("util", util);

        function util() {

            return {
                getArray: function getArray(arrayLike) {
                    return Array.prototype.slice.call(arrayLike);
                },
                getElementsByNodeType: function getElementsByNodeType(element, nodeType, matchedElements) {
                    matchedElements = matchedElements || [];
                    if (element.nodeType === nodeType) {
                        matchedElements.push(element);
                    }

                    for (var i = 0; i < element.childNodes.length; i++) {
                        getElementsByNodeType(element.childNodes[i], nodeType, matchedElements);
                    }

                    return matchedElements;
                },
                removeElements: function removeElements(elementsArr) {
                    elementsArr.forEach(function(element) {
                        element.parentNode.removeChild(element);
                    });
                }
            };
        }

    })(modulesManager);


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
                return i - 1;
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

    (function(modulesManager) {
        "use strict";

        modulesManager.set("grid.listeners", ChangeLayoutListeners);

        /**
         * Returns an object that helps configuring triggers to change layout.
         */
        function ChangeLayoutListeners() {

            var sizes,
                container,
                listeners = [];

            /**
             * add new function to the listerners array.
             * @param {Function} listerner - function that will be called when layout change is triggered.
             * @return {Boolean} true if succesful, false otherwise.
             */
            function subscribe(listener) {
                if (typeof listener === "function") {
                    listeners.push(listener);
                    return true;
                }
                else {
                    return false;
                }
            }

            /**
             * Get the layout that is correspond to the grid width
             * @param {Number} gridWidth - grid width in numbers
             * @return {String} the layout string
             */
            function getLayoutFromSize(gridWidth) {
                var prevKey;
                for (var key in sizes) {
                    if (sizes.hasOwnProperty(key) && sizes[key].breakPoint < gridWidth) {
                        return key;
                    }
                    prevKey = key;
                }
                return prevKey;
            }

            /**
             * remove listener
             * @param {Function} listener - listener to remove.
             * @return {Boolean} return true if successful, false if otherwise.
             */
            function unsubscribe(listener) {
                var listenerIndex = listeners.indexOf(listener);
                if (listenerIndex > -1) {
                    listeners.splice(listenerIndex, 1);
                    return true;
                }
                return false;
            }

            /**
             * initialize module
             * @param {Object} userContainer - DOM element which represents the grid.
             * @param {Object} userSizes - configure the breakpoints of the layout.
             */
            function init(userContainer, userSizes) {
                sizes = userSizes;
                container = userContainer;
                window.addEventListener("load", resizeThrottler);
                window.addEventListener("resize", resizeThrottler);
            }

            function resizeThrottler() {
                var resizeTimeout;
                // ignore resize events as long as an actualResizeHandler execution is in the queue
                if (!resizeTimeout) {
                    resizeTimeout = setTimeout(function() {
                        resizeTimeout = null;
                        resizeHandler();
                        // The actualResizeHandler will execute at a rate of 15fps
                    }, 100);
                }
            }

            /**
             * Javascript media query, assign data-type according to media
             */

            function assignMediaSize($containerWidth){
                var media = [600,768,1280,1440],
                    ww = parseInt($containerWidth);
                    console.log(ww);
                if (ww < media[0])
                {
                    $('.ww').attr('mq','t');
                        // .addClass('t')
                        // .removeClass('s m l x')
                } else if ((ww > media[0]) && (ww < media[1]))
                {
                    $('.ww').attr('mq','s');
                        // .addClass('s')
                        // .removeClass('t m l x')
                } else if ((ww > media[1]) && (ww < media[2]))
                {
                    $('.ww').attr('mq','m');
                        // .addClass('m')
                        // .removeClass('t s l x')

                } else if ((ww > media[2]) && (ww < media[3]))
                {
                    $('.ww').attr('mq','l');
                        // .addClass('l')
                        // .removeClass('t s m x')

                } else if (ww > media[3]) {
                    $('.ww').attr('mq','x');
                        // .addClass('x')
                        // .removeClass('t s m l')

                }
            }

            /**
             * Trigger all listeners if layout is changed after resize event.
             */
            function resizeHandler() {
                var layout = getLayoutFromSize(container.offsetWidth);
                console.log(container.offsetWidth)
                assignMediaSize(container.offsetWidth)
                if (layout !== container.dataset.grid) {
                    container.dataset.grid = layout;
                    listeners.forEach(function(listener) {
                        listener();
                    })
                }
            }

            return {
                subscribe: subscribe,
                unsubscribe: unsubscribe,
                init: init
            };
        }

    })(modulesManager);

    (function(modulesManager) {
        "use strict";

        modulesManager.set("grid.rowCommentsHandler", RowCommentsHandler);
        var util = modulesManager.get('util');

        /**
         * Returns Object that helps creating comments between grid rows.
         */
        function RowCommentsHandler() {
            var rowDetails = {
                    currentRowWidth: 0,
                    rowNumber: 1
                },
                container;

            /**
             * initialize RowCommentsHandler
             * @param {Element} userContainer - represents the container of the grid.
             */
            function init(userContainer) {
                container = userContainer;
            }

            /**
             * Remove previous layout comments that seperate rows
             */
            function clearComments() {
                var commentsArr = util.getElementsByNodeType(container, document.COMMENT_NODE);
                util.removeElements(commentsArr);
            }

            /**
             * Insert row comments.
             * @param {Element} item - item of grid.
             * @param {Number} itemIndex - index of item in items.
             * @param {Number} itemsLength - the amount of items in arr.
             */
            function updateRow(item, itemIndex, itemsLength) {

                // handle first row
                if (isFirstItem()) {
                    createFirstRowComment(item);
                }

                // handle rows between first and last
                rowDetails.currentRowWidth += item.offsetWidth;
                if (rowDetails.currentRowWidth > container.offsetWidth && !isLastItem(itemIndex, itemsLength)) { // bigger than full width row (100%)
                    rowDetails.rowNumber += 1;
                    rowDetails.currentRowWidth = item.offsetWidth;
                    createBetweenRowsComment(item);
                }

                // handle last row
                if (isLastItem(itemIndex, itemsLength)) {
                    createLastRowComment(item);
                    rowDetails = {
                        currentRowWidth: 0,
                        rowNumber: 1
                    };
                }
            }

            /**
             * is first item in grid
             */
            function isFirstItem() {
                return rowDetails.rowNumber === 1 && rowDetails.currentRowWidth === 0;
            }

            /**
             * is the last item
             * @param {Number} itemIndex - the index of the item
             * @param {Number} itemsLength - the length of items
             */
            function isLastItem(itemIndex, itemsLength) {
                var itemNumber = itemIndex + 1;
                return itemNumber === itemsLength;
            }

            /**
             * create first row comment
             * @param {Element} item - item element
             */
            function createFirstRowComment(item) {
                var beginOfNewRowComment = document.createComment("----- row " + rowDetails.rowNumber + " begins -----");
                item.parentNode.insertBefore(beginOfNewRowComment, item);
            }

            /**
             * create last row comment
             * @param {Element} item - item element
             */
            function createLastRowComment(item) {
                var endOfRowComment = document.createComment("----- row " + rowDetails.rowNumber + " ends -----");
                item.parentNode.appendChild(endOfRowComment);
            }

            /**
             * create comment between rows
             * @param {Element} item - item element
             */
            function createBetweenRowsComment(item) {
                var comments = document.createDocumentFragment();
                var endOfRowComment = document.createComment("----- row " + (rowDetails.rowNumber - 1) + " ends -----");
                var beginOfNewRowComment = document.createComment("----- row " + rowDetails.rowNumber + " begins -----");
                comments.appendChild(endOfRowComment);
                comments.appendChild(beginOfNewRowComment);
                item.parentNode.insertBefore(comments, item);
            }

            return {
                init: init,
                updateRow: updateRow,
                clearComments: clearComments
            };
        }

    })(modulesManager);

    (function(modulesManager) {
        "use strict";

        modulesManager.set("grid", Grid);
        var util = modulesManager.get("util");
        var activeLayout = modulesManager.get("grid.itemLayoutPicker");
        var gridListeners = modulesManager.get("grid.listeners");
        var rowCommentsHandler = modulesManager.get("grid.rowCommentsHandler");

        /**
         * Returns Object that creates grid.
         */
        function Grid() {
            var sizes,
                container,
                defaultSizes = {
                    'x': {
                        breakPoint: 1500,
                        gridGutter: "looseV looseH",
                    },
                    'l': {
                        breakPoint: 1200,
                        gridGutter: "looseV looseH",
                    },
                    'm': {
                        breakPoint: 900,
                        gridGutter: "normalV normalH",
                    },
                    's': {
                        breakPoint: 600,
                        gridGutter: "denseV denseH",
                    },
                    't': {
                        breakPoint: 400,
                        gridGutter: "denseV denseH",
                    }
                };

            /**
             * create grid.
             * @param {Object} userContainer - DOM element that contains the items of the grid.
             * @param {Object} userSizes - breakpoints based of container size the change layout.
             */
            function create(userContainer, userSizes) {
                sizes = userSizes || defaultSizes;
                container = userContainer;

                activeLayout.init(container, sizes);
                gridListeners.init(container, sizes);
                rowCommentsHandler.init(container, sizes);

                gridListeners.subscribe(resizeGrid);

                var containerLayoutSize;

                if (isLayoutSizeValid(container.dataset.grid)) {
                    containerLayoutSize = container.dataset.grid;
                }
                else {
                    console.error(container.dataset.grid + " - layout size not found.");
                }

                resizeGrid();
            }

            /**
             * After a change in layout. The grid will be resized.
             * The grid will be marked with comments in the DOM to separate rows.
             */
            function resizeGrid() {
                var items = util.getArray(container.querySelectorAll("[data-grid-active]"));

                rowCommentsHandler.clearComments();

                setGutter();

                items.forEach(function(item, index) {
                    var newGridActive = activeLayout.get(item),
                        layoutClass,
                        newLayoutClass;

                    if (item.dataset.gridActive !== newGridActive) {
                        if (item.dataset.gridActive) {
                            layoutClass = item.dataset.gridActive.split("-")[1];
                            item.classList.remove(layoutClass);
                        }
                        item.dataset.gridActive = newGridActive;
                        newLayoutClass = newGridActive.split("-")[1];
                        item.classList.add(newLayoutClass);
                    }

                    rowCommentsHandler.updateRow(item, index, items.length);
                });
            }

            /**
             * Set the gutter of the grid.
             */
            function setGutter() {
                var newLayout = container.dataset.grid;
                var gridGutterArr = container.dataset.gridGutter.split(" ");
                container.classList.remove(gridGutterArr[0], gridGutterArr[1]);
                container.dataset.gridGutter = sizes[newLayout].gridGutter;
                var newGridGutterArr = sizes[newLayout].gridGutter.split(" ");
                container.classList.add(newGridGutterArr[0], newGridGutterArr[1]);
            }

            /**
             * Returns if certain string is a valid layout size
             * @param {string} string - text.
             * @returns {Boolean}
             */
            function isLayoutSizeValid(string) {
                var sizesArr = Object.keys(sizes);
                return sizesArr.indexOf(string) > -1;
            }

            return {
                create: create
            };
        }

    })(modulesManager);

    (function(modulesManager) {
        "use strict";

        modulesManager.set("grid.manager", gridsManager);
        var gridModule = modulesManager.get("grid");

        /**
         * Returns object that helps create grids.
         */
        function gridsManager() {
            var grids = [];

            /**
             * create grid with specific break-points
             * @param {Object} container - DOM element which represents the container of the grid.
             * @param {Object} userSizes - represents the metadata of each layout.
             */
            function create(container, userSizes) {
                grids.push(gridModule.create(container, userSizes));
            }

            return {
                create: create
            };

        }

    })(modulesManager);

    document.addEventListener('DOMContentLoaded', domReady);
    function domReady() {
        var ggArr = document.querySelectorAll(".gg");

    ggArr.forEach(function(gg) {
        modulesManager.get("grid.manager").create(gg);
    });

    // cssClassValidation.init();
    };

})();
