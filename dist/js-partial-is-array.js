/*
 |----------------------------------------------------------------------------------------------------------------------
 | A partial to check whether an object is an array.
 |----------------------------------------------------------------------------------------------------------------------
 */

/**
 * More information on [JavaScript Open Standards]{@link https://github.com/jsopenstd/jsopenstd}.
 *
 * @namespace js.partial
 * @version 0.0.0
 *
 * @author Richard King <richrdkng@gmail.com> [GitHub]{@link https://github.com/richrdkng}
 * @license [MIT]{@link https://github.com/jsopenstd/js-partial-foreach/blob/master/license.md}
 */

/**
 * UMD - [returnExports.js pattern]{@link https://github.com/umdjs/umd/blob/master/templates/returnExports.js}
 * For more information and license, check the link below:
 * [UMD GitHub Repository]{@link https://github.com/umdjs/umd}
 */
(function(root, factory) {
    // AMD
    /* istanbul ignore next: ignore coverage test for UMD */
    if (typeof define === 'function' && define.amd) {
        define([], factory);

    // CommonJS
    } else if (typeof module === 'object' && module.exports) {
        module.exports = factory();

    // Browser
    } else {
        root.js_partial_isArray = factory();
    }
}(this, function() {
    'use strict';

    /**
     * Determines whether an object is an array.
     * By default it handles **typed arrays and array-likes as non-arrays**.
     *
     * @function isArray
     * @memberOf js.partial
     *
     * @param {*}       object                          - The object to check.
     * @param {boolean} [handleTypedArrayAsArray=false] - Handle a typed array as a regular array too.
     *                                                    By default a typed array is not classified as a regular array.
     * @param {boolean} [handleArrayLikeAsArray=false]  - Handle an array-like as a regular array too.
     *                                                    An array-like is anything, that has a valid .length property
     *                                                    and behaves as a collection, that stores values
     *                                                    (e.g.: arguments, strings, objects based on arrays/objects).
     *                                                    By default an array-like is not classified as a regular array.
     *
     * @returns {boolean} If the object is an array, it will return true.
     */
    return function isArray(object, handleTypedArrayAsArray, handleArrayLikeAsArray) {
        var handleTypedArray = handleTypedArrayAsArray === true,
            handleArrayLike  = handleArrayLikeAsArray === true;

        if (object !== null && typeof object === 'object') {

            if ( ! handleTypedArray &&
                 ! handleArrayLike) {

                return Object.prototype.toString.call(object) === '[object Array]';
            }

            if (handleTypedArray) {
                return object instanceof Int8Array         ||
                       object instanceof Uint8Array        ||
                       object instanceof Uint8ClampedArray ||
                       object instanceof Int16Array        ||
                       object instanceof Uint16Array       ||
                       object instanceof Int32Array        ||
                       object instanceof Uint32Array       ||
                       object instanceof Float32Array      ||
                       object instanceof Float64Array;
            }

            if (handleArrayLike) {
                if ('length' in object &&
                    typeof object.length === 'number') {

                    return true;
                }
            }
        }

        return false;
    };
}));
