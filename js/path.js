/*global dessert, troop, node */

/**
 * @class node.path
 * @extends troop.Base
 */
node.path = troop.Base.extend()
    .addMethods(/** @lends node.path */{
        extname: function (fileName) {
            return fileName.slice(fileName.lastIndexOf('.'));
        }
    });
