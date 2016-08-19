'use strict';

const assert  = require('assert'),
      vars    = require('./variables'),
      isArray = require(vars.path);

module.exports = {
    'js-partial-is-object' : () => {
        let _undefined = undefined,
            _null      = null,
            _boolean   = false,
            _number    = 0,
            _string    = 'str',
            _function  = () => {},
            _array     = [],
            _object    = {},

            _objectCreated_1 = Object.create({}),
            _objectCreated_2 = Object.create(Object.prototype),
            _nullProtoObject = Object.create(null),

            _typedArray = new Uint8Array(0),
            _arrayLike  = (function() { return arguments; })(1, 2, 3);

        assert(isArray()           === false);
        assert(isArray(_undefined) === false);
        assert(isArray(_null)      === false);
        assert(isArray(_boolean)   === false);
        assert(isArray(_number)    === false);
        assert(isArray(_string)    === false);
        assert(isArray(_function)  === false);
        assert(isArray(_array)     === true);
        assert(isArray(_object)    === false);

        assert(isArray(_objectCreated_1) === false);
        assert(isArray(_objectCreated_2) === false);
        assert(isArray(_nullProtoObject) === false);

        assert(isArray(_array, true)  === true);
        assert(isArray(_array, false) === true);

        assert(isArray(_typedArray, true)  === true);
        assert(isArray(_typedArray, false) === false);

        assert(isArray(_arrayLike, true)  === false);
        assert(isArray(_arrayLike, false) === false);

        assert(isArray(_array, true,  true) === true);
        assert(isArray(_array, false, true) === true);
        assert(isArray(_array, null,  true) === true);

        assert(isArray(_typedArray, true,  true)  === true);
        assert(isArray(_typedArray, false, false) === false);
        assert(isArray(_typedArray, null,  false) === false);

        assert(isArray(_arrayLike, true,  true)  === true);
        assert(isArray(_arrayLike, false, false) === false);
        assert(isArray(_arrayLike, null,  true)  === true);
        assert(isArray(_arrayLike, null,  false) === false);

        assert(isArray(_object, true,  true)  === false);
        assert(isArray(_object, false, false) === false);
        assert(isArray(_object, null,  true)  === false);
        assert(isArray(_object, null,  false) === false);
    }
};
