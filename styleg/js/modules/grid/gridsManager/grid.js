(function(modulesManager) {
    "use strict";

    modulesManager.set("grid", Grid);

    /**
     * Returns Object that creates grid.
     */
    function Grid() {
        var util = modulesManager.get("util");
        var activeLayout = modulesManager.get("grid.itemLayoutPicker");
        var gridListeners = modulesManager.get("grid.listeners");
        var rowCommentsHandler = modulesManager.get("grid.rowCommentsHandler");
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