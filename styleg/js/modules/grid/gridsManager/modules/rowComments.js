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