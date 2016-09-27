(function(modulesManager) {
    "use strict";
    
    modulesManager.set("grid.manager", gridsManager);
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
            var gridModule = modulesManager.get("grid");
            grids.push(gridModule.create(container, userSizes));
        }

        return {
            create: create
        };

    }

})(modulesManager);