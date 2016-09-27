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

            window.addEventListener("resize", resizeThrottler);
            window.addEventListener("load", resizeThrottler);
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
         * Trigger all listeners if layout is changed after resize event.
         */
        function resizeHandler() {
            var layout = getLayoutFromSize(container.offsetWidth);
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