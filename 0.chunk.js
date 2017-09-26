webpackJsonp([0,10],Array(647).concat([
/* 647 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_translation_module__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__theme_nga_module__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__parliament_component__ = __webpack_require__(1005);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__parliament_routing__ = __webpack_require__(1028);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__util_helper_service__ = __webpack_require__(664);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_tile_tile_service__ = __webpack_require__(717);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_shared_module__ = __webpack_require__(786);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__federal_assembly_federal_assembly_component__ = __webpack_require__(1019);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__national_council_national_council_component__ = __webpack_require__(1025);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__council_of_states_council_of_states_component__ = __webpack_require__(1016);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__federal_council_federal_council_component__ = __webpack_require__(1022);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParliamentModule", function() { return ParliamentModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var ParliamentModule = /** @class */ (function () {
    function ParliamentModule() {
    }
    ParliamentModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__app_translation_module__["a" /* AppTranslationModule */],
                __WEBPACK_IMPORTED_MODULE_4__theme_nga_module__["a" /* NgaModule */],
                __WEBPACK_IMPORTED_MODULE_6__parliament_routing__["a" /* routing */],
                __WEBPACK_IMPORTED_MODULE_9__shared_shared_module__["a" /* SharedModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__parliament_component__["a" /* Parliament */],
                __WEBPACK_IMPORTED_MODULE_10__federal_assembly_federal_assembly_component__["a" /* FederalAssemblyComponent */],
                __WEBPACK_IMPORTED_MODULE_11__national_council_national_council_component__["a" /* NationalCouncilComponent */],
                __WEBPACK_IMPORTED_MODULE_12__council_of_states_council_of_states_component__["a" /* CouncilOfStatesComponent */],
                __WEBPACK_IMPORTED_MODULE_13__federal_council_federal_council_component__["a" /* FederalCouncilComponent */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__shared_tile_tile_service__["a" /* TileService */],
                __WEBPACK_IMPORTED_MODULE_7__util_helper_service__["a" /* Helper */]
            ]
        })
    ], ParliamentModule);
    return ParliamentModule;
}());

//# sourceMappingURL=parliament.module.js.map

/***/ }),
/* 648 */,
/* 649 */,
/* 650 */
/***/ (function(module, exports, __webpack_require__) {

var _curry1 = __webpack_require__(651);
var _isPlaceholder = __webpack_require__(687);


/**
 * Optimized internal two-arity curry function.
 *
 * @private
 * @category Function
 * @param {Function} fn The function to curry.
 * @return {Function} The curried function.
 */
module.exports = function _curry2(fn) {
  return function f2(a, b) {
    switch (arguments.length) {
      case 0:
        return f2;
      case 1:
        return _isPlaceholder(a) ? f2
             : _curry1(function(_b) { return fn(a, _b); });
      default:
        return _isPlaceholder(a) && _isPlaceholder(b) ? f2
             : _isPlaceholder(a) ? _curry1(function(_a) { return fn(_a, b); })
             : _isPlaceholder(b) ? _curry1(function(_b) { return fn(a, _b); })
             : fn(a, b);
    }
  };
};


/***/ }),
/* 651 */
/***/ (function(module, exports, __webpack_require__) {

var _isPlaceholder = __webpack_require__(687);


/**
 * Optimized internal one-arity curry function.
 *
 * @private
 * @category Function
 * @param {Function} fn The function to curry.
 * @return {Function} The curried function.
 */
module.exports = function _curry1(fn) {
  return function f1(a) {
    if (arguments.length === 0 || _isPlaceholder(a)) {
      return f1;
    } else {
      return fn.apply(this, arguments);
    }
  };
};


/***/ }),
/* 652 */
/***/ (function(module, exports, __webpack_require__) {

var _curry1 = __webpack_require__(651);
var _curry2 = __webpack_require__(650);
var _isPlaceholder = __webpack_require__(687);


/**
 * Optimized internal three-arity curry function.
 *
 * @private
 * @category Function
 * @param {Function} fn The function to curry.
 * @return {Function} The curried function.
 */
module.exports = function _curry3(fn) {
  return function f3(a, b, c) {
    switch (arguments.length) {
      case 0:
        return f3;
      case 1:
        return _isPlaceholder(a) ? f3
             : _curry2(function(_b, _c) { return fn(a, _b, _c); });
      case 2:
        return _isPlaceholder(a) && _isPlaceholder(b) ? f3
             : _isPlaceholder(a) ? _curry2(function(_a, _c) { return fn(_a, b, _c); })
             : _isPlaceholder(b) ? _curry2(function(_b, _c) { return fn(a, _b, _c); })
             : _curry1(function(_c) { return fn(a, b, _c); });
      default:
        return _isPlaceholder(a) && _isPlaceholder(b) && _isPlaceholder(c) ? f3
             : _isPlaceholder(a) && _isPlaceholder(b) ? _curry2(function(_a, _b) { return fn(_a, _b, c); })
             : _isPlaceholder(a) && _isPlaceholder(c) ? _curry2(function(_a, _c) { return fn(_a, b, _c); })
             : _isPlaceholder(b) && _isPlaceholder(c) ? _curry2(function(_b, _c) { return fn(a, _b, _c); })
             : _isPlaceholder(a) ? _curry1(function(_a) { return fn(_a, b, c); })
             : _isPlaceholder(b) ? _curry1(function(_b) { return fn(a, _b, c); })
             : _isPlaceholder(c) ? _curry1(function(_c) { return fn(a, b, _c); })
             : fn(a, b, c);
    }
  };
};


/***/ }),
/* 653 */
/***/ (function(module, exports, __webpack_require__) {

var _isArray = __webpack_require__(665);
var _isTransformer = __webpack_require__(708);


/**
 * Returns a function that dispatches with different strategies based on the
 * object in list position (last argument). If it is an array, executes [fn].
 * Otherwise, if it has a function with one of the given method names, it will
 * execute that function (functor case). Otherwise, if it is a transformer,
 * uses transducer [xf] to return a new transformer (transducer case).
 * Otherwise, it will default to executing [fn].
 *
 * @private
 * @param {Array} methodNames properties to check for a custom implementation
 * @param {Function} xf transducer to initialize if object is transformer
 * @param {Function} fn default ramda implementation
 * @return {Function} A function that dispatches on object in list position
 */
module.exports = function _dispatchable(methodNames, xf, fn) {
  return function() {
    if (arguments.length === 0) {
      return fn();
    }
    var args = Array.prototype.slice.call(arguments, 0);
    var obj = args.pop();
    if (!_isArray(obj)) {
      var idx = 0;
      while (idx < methodNames.length) {
        if (typeof obj[methodNames[idx]] === 'function') {
          return obj[methodNames[idx]].apply(obj, args);
        }
        idx += 1;
      }
      if (_isTransformer(obj)) {
        var transducer = xf.apply(null, args);
        return transducer(obj);
      }
    }
    return fn.apply(this, arguments);
  };
};


/***/ }),
/* 654 */
/***/ (function(module, exports) {

module.exports = {
  init: function() {
    return this.xf['@@transducer/init']();
  },
  result: function(result) {
    return this.xf['@@transducer/result'](result);
  }
};


/***/ }),
/* 655 */
/***/ (function(module, exports, __webpack_require__) {

var _arity = __webpack_require__(661);
var _curry1 = __webpack_require__(651);
var _curry2 = __webpack_require__(650);
var _curryN = __webpack_require__(684);


/**
 * Returns a curried equivalent of the provided function, with the specified
 * arity. The curried function has two unusual capabilities. First, its
 * arguments needn't be provided one at a time. If `g` is `R.curryN(3, f)`, the
 * following are equivalent:
 *
 *   - `g(1)(2)(3)`
 *   - `g(1)(2, 3)`
 *   - `g(1, 2)(3)`
 *   - `g(1, 2, 3)`
 *
 * Secondly, the special placeholder value [`R.__`](#__) may be used to specify
 * "gaps", allowing partial application of any combination of arguments,
 * regardless of their positions. If `g` is as above and `_` is [`R.__`](#__),
 * the following are equivalent:
 *
 *   - `g(1, 2, 3)`
 *   - `g(_, 2, 3)(1)`
 *   - `g(_, _, 3)(1)(2)`
 *   - `g(_, _, 3)(1, 2)`
 *   - `g(_, 2)(1)(3)`
 *   - `g(_, 2)(1, 3)`
 *   - `g(_, 2)(_, 3)(1)`
 *
 * @func
 * @memberOf R
 * @since v0.5.0
 * @category Function
 * @sig Number -> (* -> a) -> (* -> a)
 * @param {Number} length The arity for the returned function.
 * @param {Function} fn The function to curry.
 * @return {Function} A new, curried function.
 * @see R.curry
 * @example
 *
 *      var sumArgs = (...args) => R.sum(args);
 *
 *      var curriedAddFourNumbers = R.curryN(4, sumArgs);
 *      var f = curriedAddFourNumbers(1, 2);
 *      var g = f(3);
 *      g(4); //=> 10
 */
module.exports = _curry2(function curryN(length, fn) {
  if (length === 1) {
    return _curry1(fn);
  }
  return _arity(length, _curryN(length, [], fn));
});


/***/ }),
/* 656 */
/***/ (function(module, exports) {

module.exports = function _has(prop, obj) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
};


/***/ }),
/* 657 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(650);
var _dispatchable = __webpack_require__(653);
var _map = __webpack_require__(688);
var _reduce = __webpack_require__(659);
var _xmap = __webpack_require__(883);
var curryN = __webpack_require__(655);
var keys = __webpack_require__(662);


/**
 * Takes a function and
 * a [functor](https://github.com/fantasyland/fantasy-land#functor),
 * applies the function to each of the functor's values, and returns
 * a functor of the same shape.
 *
 * Ramda provides suitable `map` implementations for `Array` and `Object`,
 * so this function may be applied to `[1, 2, 3]` or `{x: 1, y: 2, z: 3}`.
 *
 * Dispatches to the `map` method of the second argument, if present.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * Also treats functions as functors and will compose them together.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig Functor f => (a -> b) -> f a -> f b
 * @param {Function} fn The function to be called on every element of the input `list`.
 * @param {Array} list The list to be iterated over.
 * @return {Array} The new list.
 * @see R.transduce, R.addIndex
 * @example
 *
 *      var double = x => x * 2;
 *
 *      R.map(double, [1, 2, 3]); //=> [2, 4, 6]
 *
 *      R.map(double, {x: 1, y: 2, z: 3}); //=> {x: 2, y: 4, z: 6}
 * @symb R.map(f, [a, b]) = [f(a), f(b)]
 * @symb R.map(f, { x: a, y: b }) = { x: f(a), y: f(b) }
 * @symb R.map(f, functor_o) = functor_o.map(f)
 */
module.exports = _curry2(_dispatchable(['fantasy-land/map', 'map'], _xmap, function map(fn, functor) {
  switch (Object.prototype.toString.call(functor)) {
    case '[object Function]':
      return curryN(functor.length, function() {
        return fn.call(this, functor.apply(this, arguments));
      });
    case '[object Object]':
      return _reduce(function(acc, key) {
        acc[key] = fn(functor[key]);
        return acc;
      }, {}, keys(functor));
    default:
      return _map(fn, functor);
  }
}));


/***/ }),
/* 658 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(650);
var _equals = __webpack_require__(858);


/**
 * Returns `true` if its arguments are equivalent, `false` otherwise. Handles
 * cyclical data structures.
 *
 * Dispatches symmetrically to the `equals` methods of both arguments, if
 * present.
 *
 * @func
 * @memberOf R
 * @since v0.15.0
 * @category Relation
 * @sig a -> b -> Boolean
 * @param {*} a
 * @param {*} b
 * @return {Boolean}
 * @example
 *
 *      R.equals(1, 1); //=> true
 *      R.equals(1, '1'); //=> false
 *      R.equals([1, 2, 3], [1, 2, 3]); //=> true
 *
 *      var a = {}; a.v = a;
 *      var b = {}; b.v = b;
 *      R.equals(a, b); //=> true
 */
module.exports = _curry2(function equals(a, b) {
  return _equals(a, b, [], []);
});


/***/ }),
/* 659 */
/***/ (function(module, exports, __webpack_require__) {

var _isArrayLike = __webpack_require__(685);
var _xwrap = __webpack_require__(750);
var bind = __webpack_require__(728);


module.exports = (function() {
  function _arrayReduce(xf, acc, list) {
    var idx = 0;
    var len = list.length;
    while (idx < len) {
      acc = xf['@@transducer/step'](acc, list[idx]);
      if (acc && acc['@@transducer/reduced']) {
        acc = acc['@@transducer/value'];
        break;
      }
      idx += 1;
    }
    return xf['@@transducer/result'](acc);
  }

  function _iterableReduce(xf, acc, iter) {
    var step = iter.next();
    while (!step.done) {
      acc = xf['@@transducer/step'](acc, step.value);
      if (acc && acc['@@transducer/reduced']) {
        acc = acc['@@transducer/value'];
        break;
      }
      step = iter.next();
    }
    return xf['@@transducer/result'](acc);
  }

  function _methodReduce(xf, acc, obj, methodName) {
    return xf['@@transducer/result'](obj[methodName](bind(xf['@@transducer/step'], xf), acc));
  }

  var symIterator = (typeof Symbol !== 'undefined') ? Symbol.iterator : '@@iterator';
  return function _reduce(fn, acc, list) {
    if (typeof fn === 'function') {
      fn = _xwrap(fn);
    }
    if (_isArrayLike(list)) {
      return _arrayReduce(fn, acc, list);
    }
    if (typeof list['fantasy-land/reduce'] === 'function') {
      return _methodReduce(fn, acc, list, 'fantasy-land/reduce');
    }
    if (list[symIterator] != null) {
      return _iterableReduce(fn, acc, list[symIterator]());
    }
    if (typeof list.next === 'function') {
      return _iterableReduce(fn, acc, list);
    }
    if (typeof list.reduce === 'function') {
      return _methodReduce(fn, acc, list, 'reduce');
    }

    throw new TypeError('reduce: list must be array or iterable');
  };
}());


/***/ }),
/* 660 */
/***/ (function(module, exports) {

/**
 * Private `concat` function to merge two array-like objects.
 *
 * @private
 * @param {Array|Arguments} [set1=[]] An array-like object.
 * @param {Array|Arguments} [set2=[]] An array-like object.
 * @return {Array} A new, merged array.
 * @example
 *
 *      _concat([4, 5, 6], [1, 2, 3]); //=> [4, 5, 6, 1, 2, 3]
 */
module.exports = function _concat(set1, set2) {
  set1 = set1 || [];
  set2 = set2 || [];
  var idx;
  var len1 = set1.length;
  var len2 = set2.length;
  var result = [];

  idx = 0;
  while (idx < len1) {
    result[result.length] = set1[idx];
    idx += 1;
  }
  idx = 0;
  while (idx < len2) {
    result[result.length] = set2[idx];
    idx += 1;
  }
  return result;
};


/***/ }),
/* 661 */
/***/ (function(module, exports) {

module.exports = function _arity(n, fn) {
  /* eslint-disable no-unused-vars */
  switch (n) {
    case 0: return function() { return fn.apply(this, arguments); };
    case 1: return function(a0) { return fn.apply(this, arguments); };
    case 2: return function(a0, a1) { return fn.apply(this, arguments); };
    case 3: return function(a0, a1, a2) { return fn.apply(this, arguments); };
    case 4: return function(a0, a1, a2, a3) { return fn.apply(this, arguments); };
    case 5: return function(a0, a1, a2, a3, a4) { return fn.apply(this, arguments); };
    case 6: return function(a0, a1, a2, a3, a4, a5) { return fn.apply(this, arguments); };
    case 7: return function(a0, a1, a2, a3, a4, a5, a6) { return fn.apply(this, arguments); };
    case 8: return function(a0, a1, a2, a3, a4, a5, a6, a7) { return fn.apply(this, arguments); };
    case 9: return function(a0, a1, a2, a3, a4, a5, a6, a7, a8) { return fn.apply(this, arguments); };
    case 10: return function(a0, a1, a2, a3, a4, a5, a6, a7, a8, a9) { return fn.apply(this, arguments); };
    default: throw new Error('First argument to _arity must be a non-negative integer no greater than ten');
  }
};


/***/ }),
/* 662 */
/***/ (function(module, exports, __webpack_require__) {

var _curry1 = __webpack_require__(651);
var _has = __webpack_require__(656);
var _isArguments = __webpack_require__(745);


/**
 * Returns a list containing the names of all the enumerable own properties of
 * the supplied object.
 * Note that the order of the output array is not guaranteed to be consistent
 * across different JS platforms.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Object
 * @sig {k: v} -> [k]
 * @param {Object} obj The object to extract properties from
 * @return {Array} An array of the object's own properties.
 * @see R.keysIn, R.values
 * @example
 *
 *      R.keys({a: 1, b: 2, c: 3}); //=> ['a', 'b', 'c']
 */
module.exports = (function() {
  // cover IE < 9 keys issues
  var hasEnumBug = !({toString: null}).propertyIsEnumerable('toString');
  var nonEnumerableProps = ['constructor', 'valueOf', 'isPrototypeOf', 'toString',
                            'propertyIsEnumerable', 'hasOwnProperty', 'toLocaleString'];
  // Safari bug
  var hasArgsEnumBug = (function() {
    'use strict';
    return arguments.propertyIsEnumerable('length');
  }());

  var contains = function contains(list, item) {
    var idx = 0;
    while (idx < list.length) {
      if (list[idx] === item) {
        return true;
      }
      idx += 1;
    }
    return false;
  };

  return typeof Object.keys === 'function' && !hasArgsEnumBug ?
    _curry1(function keys(obj) {
      return Object(obj) !== obj ? [] : Object.keys(obj);
    }) :
    _curry1(function keys(obj) {
      if (Object(obj) !== obj) {
        return [];
      }
      var prop, nIdx;
      var ks = [];
      var checkArgsLength = hasArgsEnumBug && _isArguments(obj);
      for (prop in obj) {
        if (_has(prop, obj) && (!checkArgsLength || prop !== 'length')) {
          ks[ks.length] = prop;
        }
      }
      if (hasEnumBug) {
        nIdx = nonEnumerableProps.length - 1;
        while (nIdx >= 0) {
          prop = nonEnumerableProps[nIdx];
          if (_has(prop, obj) && !contains(ks, prop)) {
            ks[ks.length] = prop;
          }
          nIdx -= 1;
        }
      }
      return ks;
    });
}());


/***/ }),
/* 663 */
/***/ (function(module, exports, __webpack_require__) {

var _curry3 = __webpack_require__(652);
var _reduce = __webpack_require__(659);


/**
 * Returns a single item by iterating through the list, successively calling
 * the iterator function and passing it an accumulator value and the current
 * value from the array, and then passing the result to the next call.
 *
 * The iterator function receives two values: *(acc, value)*. It may use
 * [`R.reduced`](#reduced) to shortcut the iteration.
 *
 * The arguments' order of [`reduceRight`](#reduceRight)'s iterator function
 * is *(value, acc)*.
 *
 * Note: `R.reduce` does not skip deleted or unassigned indices (sparse
 * arrays), unlike the native `Array.prototype.reduce` method. For more details
 * on this behavior, see:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce#Description
 *
 * Dispatches to the `reduce` method of the third argument, if present. When
 * doing so, it is up to the user to handle the [`R.reduced`](#reduced)
 * shortcuting, as this is not implemented by `reduce`.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig ((a, b) -> a) -> a -> [b] -> a
 * @param {Function} fn The iterator function. Receives two values, the accumulator and the
 *        current element from the array.
 * @param {*} acc The accumulator value.
 * @param {Array} list The list to iterate over.
 * @return {*} The final, accumulated value.
 * @see R.reduced, R.addIndex, R.reduceRight
 * @example
 *
 *      R.reduce(R.subtract, 0, [1, 2, 3, 4]) // => ((((0 - 1) - 2) - 3) - 4) = -10
 *                -               -10
 *               / \              / \
 *              -   4           -6   4
 *             / \              / \
 *            -   3   ==>     -3   3
 *           / \              / \
 *          -   2           -1   2
 *         / \              / \
 *        0   1            0   1
 *
 * @symb R.reduce(f, a, [b, c, d]) = f(f(f(a, b), c), d)
 */
module.exports = _curry3(_reduce);


/***/ }),
/* 664 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mapping__ = __webpack_require__(788);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Helper; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by Adrian on 9/10/2017.
 */




var Helper = /** @class */ (function () {
    function Helper(http) {
        this.http = http;
    }
    Helper.prototype.getUserByTwitterId = function (id) {
        return __WEBPACK_IMPORTED_MODULE_3__mapping__["a" /* MAPPING */].find(function (user) { return user['id'] === id; });
    };
    Helper.prototype.getUserByPersonId = function (id) {
        return __WEBPACK_IMPORTED_MODULE_3__mapping__["a" /* MAPPING */].find(function (user) { return user['person_id'] === id; });
    };
    Helper.prototype.getIdsForParty = function (party) {
        return __WEBPACK_IMPORTED_MODULE_3__mapping__["a" /* MAPPING */].filter(function (p) { return p.party === party; }).map(function (element) { return element['person_id']; });
    };
    Helper.prototype.extractData = function (res) {
        if (res.status < 200 || res.status >= 300) {
            throw new Error('Bad response status: ' + res.status);
        }
        return res.json();
    };
    Helper.prototype.handleError = function (error) {
        var errMsg = error.message || 'Server error';
        console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(errMsg);
    };
    Helper.prototype.initTwitterWidget = function () {
        window.twttr = (function (d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0], t = window.twttr || {};
            if (d.getElementById(id))
                d.getElementById(id).remove();
            js = d.createElement(s);
            js.id = id;
            js.src = "https://platform.twitter.com/widgets.js";
            fjs = d.getElementsByTagName(s)[0];
            fjs.parentNode.insertBefore(js, fjs);
            t._e = [];
            t.ready = function (f) {
                t._e.push(f);
            };
            return t;
        }(document, "script", "twitter-wjs"));
        if (window.twttr.ready())
            window.twttr.widgets.load();
    };
    Helper = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
    ], Helper);
    return Helper;
    var _a;
}());

//# sourceMappingURL=helper.service.js.map

/***/ }),
/* 665 */
/***/ (function(module, exports) {

/**
 * Tests whether or not an object is an array.
 *
 * @private
 * @param {*} val The object to test.
 * @return {Boolean} `true` if `val` is an array, `false` otherwise.
 * @example
 *
 *      _isArray([]); //=> true
 *      _isArray(null); //=> false
 *      _isArray({}); //=> false
 */
module.exports = Array.isArray || function _isArray(val) {
  return (val != null &&
          val.length >= 0 &&
          Object.prototype.toString.call(val) === '[object Array]');
};


/***/ }),
/* 666 */
/***/ (function(module, exports) {

module.exports = function _reduced(x) {
  return x && x['@@transducer/reduced'] ? x :
    {
      '@@transducer/value': x,
      '@@transducer/reduced': true
    };
};


/***/ }),
/* 667 */
/***/ (function(module, exports, __webpack_require__) {

var _indexOf = __webpack_require__(744);


module.exports = function _contains(a, list) {
  return _indexOf(list, a, 0) >= 0;
};


/***/ }),
/* 668 */
/***/ (function(module, exports, __webpack_require__) {

var _checkForMethod = __webpack_require__(671);
var _curry3 = __webpack_require__(652);


/**
 * Returns the elements of the given list or string (or object with a `slice`
 * method) from `fromIndex` (inclusive) to `toIndex` (exclusive).
 *
 * Dispatches to the `slice` method of the third argument, if present.
 *
 * @func
 * @memberOf R
 * @since v0.1.4
 * @category List
 * @sig Number -> Number -> [a] -> [a]
 * @sig Number -> Number -> String -> String
 * @param {Number} fromIndex The start index (inclusive).
 * @param {Number} toIndex The end index (exclusive).
 * @param {*} list
 * @return {*}
 * @example
 *
 *      R.slice(1, 3, ['a', 'b', 'c', 'd']);        //=> ['b', 'c']
 *      R.slice(1, Infinity, ['a', 'b', 'c', 'd']); //=> ['b', 'c', 'd']
 *      R.slice(0, -1, ['a', 'b', 'c', 'd']);       //=> ['a', 'b', 'c']
 *      R.slice(-3, -1, ['a', 'b', 'c', 'd']);      //=> ['b', 'c']
 *      R.slice(0, 3, 'ramda');                     //=> 'ram'
 */
module.exports = _curry3(_checkForMethod('slice', function slice(fromIndex, toIndex, list) {
  return Array.prototype.slice.call(list, fromIndex, toIndex);
}));


/***/ }),
/* 669 */
/***/ (function(module, exports, __webpack_require__) {

var _curry1 = __webpack_require__(651);


/**
 * Returns a function that always returns the given value. Note that for
 * non-primitives the value returned is a reference to the original value.
 *
 * This function is known as `const`, `constant`, or `K` (for K combinator) in
 * other languages and libraries.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig a -> (* -> a)
 * @param {*} val The value to wrap in a function
 * @return {Function} A Function :: * -> val.
 * @example
 *
 *      var t = R.always('Tee');
 *      t(); //=> 'Tee'
 */
module.exports = _curry1(function always(val) {
  return function() {
    return val;
  };
});


/***/ }),
/* 670 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(650);


/**
 * Returns the larger of its two arguments.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig Ord a => a -> a -> a
 * @param {*} a
 * @param {*} b
 * @return {*}
 * @see R.maxBy, R.min
 * @example
 *
 *      R.max(789, 123); //=> 789
 *      R.max('a', 'b'); //=> 'b'
 */
module.exports = _curry2(function max(a, b) { return b > a ? b : a; });


/***/ }),
/* 671 */
/***/ (function(module, exports, __webpack_require__) {

var _isArray = __webpack_require__(665);


/**
 * This checks whether a function has a [methodname] function. If it isn't an
 * array it will execute that function otherwise it will default to the ramda
 * implementation.
 *
 * @private
 * @param {Function} fn ramda implemtation
 * @param {String} methodname property to check for a custom implementation
 * @return {Object} Whatever the return value of the method is.
 */
module.exports = function _checkForMethod(methodname, fn) {
  return function() {
    var length = arguments.length;
    if (length === 0) {
      return fn();
    }
    var obj = arguments[length - 1];
    return (_isArray(obj) || typeof obj[methodname] !== 'function') ?
      fn.apply(this, arguments) :
      obj[methodname].apply(obj, Array.prototype.slice.call(arguments, 0, length - 1));
  };
};


/***/ }),
/* 672 */
/***/ (function(module, exports) {

module.exports = function _isString(x) {
  return Object.prototype.toString.call(x) === '[object String]';
};


/***/ }),
/* 673 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(650);
var _isFunction = __webpack_require__(686);
var curryN = __webpack_require__(655);
var toString = __webpack_require__(677);


/**
 * Turns a named method with a specified arity into a function that can be
 * called directly supplied with arguments and a target object.
 *
 * The returned function is curried and accepts `arity + 1` parameters where
 * the final parameter is the target object.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig Number -> String -> (a -> b -> ... -> n -> Object -> *)
 * @param {Number} arity Number of arguments the returned function should take
 *        before the target object.
 * @param {String} method Name of the method to call.
 * @return {Function} A new curried function.
 * @see R.construct
 * @example
 *
 *      var sliceFrom = R.invoker(1, 'slice');
 *      sliceFrom(6, 'abcdefghijklm'); //=> 'ghijklm'
 *      var sliceFrom6 = R.invoker(2, 'slice')(6);
 *      sliceFrom6(8, 'abcdefghijklm'); //=> 'gh'
 * @symb R.invoker(0, 'method')(o) = o['method']()
 * @symb R.invoker(1, 'method')(a, o) = o['method'](a)
 * @symb R.invoker(2, 'method')(a, b, o) = o['method'](a, b)
 */
module.exports = _curry2(function invoker(arity, method) {
  return curryN(arity + 1, function() {
    var target = arguments[arity];
    if (target != null && _isFunction(target[method])) {
      return target[method].apply(target, Array.prototype.slice.call(arguments, 0, arity));
    }
    throw new TypeError(toString(target) + ' does not have a method named "' + method + '"');
  });
});


/***/ }),
/* 674 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(650);
var _isString = __webpack_require__(672);


/**
 * Returns the nth element of the given list or string. If n is negative the
 * element at index length + n is returned.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig Number -> [a] -> a | Undefined
 * @sig Number -> String -> String
 * @param {Number} offset
 * @param {*} list
 * @return {*}
 * @example
 *
 *      var list = ['foo', 'bar', 'baz', 'quux'];
 *      R.nth(1, list); //=> 'bar'
 *      R.nth(-1, list); //=> 'quux'
 *      R.nth(-99, list); //=> undefined
 *
 *      R.nth(2, 'abc'); //=> 'c'
 *      R.nth(3, 'abc'); //=> ''
 * @symb R.nth(-1, [a, b, c]) = c
 * @symb R.nth(0, [a, b, c]) = a
 * @symb R.nth(1, [a, b, c]) = b
 */
module.exports = _curry2(function nth(offset, list) {
  var idx = offset < 0 ? list.length + offset : offset;
  return _isString(list) ? list.charAt(idx) : list[idx];
});


/***/ }),
/* 675 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(650);


/**
 * Retrieve the value at a given path.
 *
 * @func
 * @memberOf R
 * @since v0.2.0
 * @category Object
 * @typedefn Idx = String | Int
 * @sig [Idx] -> {a} -> a | Undefined
 * @param {Array} path The path to use.
 * @param {Object} obj The object to retrieve the nested property from.
 * @return {*} The data at `path`.
 * @see R.prop
 * @example
 *
 *      R.path(['a', 'b'], {a: {b: 2}}); //=> 2
 *      R.path(['a', 'b'], {c: {b: 2}}); //=> undefined
 */
module.exports = _curry2(function path(paths, obj) {
  var val = obj;
  var idx = 0;
  while (idx < paths.length) {
    if (val == null) {
      return;
    }
    val = val[paths[idx]];
    idx += 1;
  }
  return val;
});


/***/ }),
/* 676 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(650);
var map = __webpack_require__(657);
var prop = __webpack_require__(710);


/**
 * Returns a new list by plucking the same named property off all objects in
 * the list supplied.
 *
 * `pluck` will work on
 * any [functor](https://github.com/fantasyland/fantasy-land#functor) in
 * addition to arrays, as it is equivalent to `R.map(R.prop(k), f)`.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig Functor f => k -> f {k: v} -> f v
 * @param {Number|String} key The key name to pluck off of each object.
 * @param {Array} f The array or functor to consider.
 * @return {Array} The list of values for the given key.
 * @see R.props
 * @example
 *
 *      R.pluck('a')([{a: 1}, {a: 2}]); //=> [1, 2]
 *      R.pluck(0)([[1, 2], [3, 4]]);   //=> [1, 3]
 *      R.pluck('val', {a: {val: 3}, b: {val: 5}}); //=> {a: 3, b: 5}
 * @symb R.pluck('x', [{x: 1, y: 2}, {x: 3, y: 4}, {x: 5, y: 6}]) = [1, 3, 5]
 * @symb R.pluck(0, [[1, 2], [3, 4], [5, 6]]) = [1, 3, 5]
 */
module.exports = _curry2(function pluck(p, list) {
  return map(prop(p), list);
});


/***/ }),
/* 677 */
/***/ (function(module, exports, __webpack_require__) {

var _curry1 = __webpack_require__(651);
var _toString = __webpack_require__(870);


/**
 * Returns the string representation of the given value. `eval`'ing the output
 * should result in a value equivalent to the input value. Many of the built-in
 * `toString` methods do not satisfy this requirement.
 *
 * If the given value is an `[object Object]` with a `toString` method other
 * than `Object.prototype.toString`, this method is invoked with no arguments
 * to produce the return value. This means user-defined constructor functions
 * can provide a suitable `toString` method. For example:
 *
 *     function Point(x, y) {
 *       this.x = x;
 *       this.y = y;
 *     }
 *
 *     Point.prototype.toString = function() {
 *       return 'new Point(' + this.x + ', ' + this.y + ')';
 *     };
 *
 *     R.toString(new Point(1, 2)); //=> 'new Point(1, 2)'
 *
 * @func
 * @memberOf R
 * @since v0.14.0
 * @category String
 * @sig * -> String
 * @param {*} val
 * @return {String}
 * @example
 *
 *      R.toString(42); //=> '42'
 *      R.toString('abc'); //=> '"abc"'
 *      R.toString([1, 2, 3]); //=> '[1, 2, 3]'
 *      R.toString({foo: 1, bar: 2, baz: 3}); //=> '{"bar": 2, "baz": 3, "foo": 1}'
 *      R.toString(new Date('2001-02-03T04:05:06Z')); //=> 'new Date("2001-02-03T04:05:06.000Z")'
 */
module.exports = _curry1(function toString(val) { return _toString(val, []); });


/***/ }),
/* 678 */
/***/ (function(module, exports) {

//# sourceMappingURL=app-config.interface.js.map

/***/ }),
/* 679 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(650);


/**
 * Adds two values.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Math
 * @sig Number -> Number -> Number
 * @param {Number} a
 * @param {Number} b
 * @return {Number}
 * @see R.subtract
 * @example
 *
 *      R.add(2, 3);       //=>  5
 *      R.add(7)(10);      //=> 17
 */
module.exports = _curry2(function add(a, b) {
  return Number(a) + Number(b);
});


/***/ }),
/* 680 */
/***/ (function(module, exports, __webpack_require__) {

var _curry3 = __webpack_require__(652);


/**
 * Makes a shallow clone of an object, setting or overriding the specified
 * property with the given value. Note that this copies and flattens prototype
 * properties onto the new object as well. All non-primitive properties are
 * copied by reference.
 *
 * @func
 * @memberOf R
 * @since v0.8.0
 * @category Object
 * @sig String -> a -> {k: v} -> {k: v}
 * @param {String} prop The property name to set
 * @param {*} val The new value
 * @param {Object} obj The object to clone
 * @return {Object} A new object equivalent to the original except for the changed property.
 * @see R.dissoc
 * @example
 *
 *      R.assoc('c', 3, {a: 1, b: 2}); //=> {a: 1, b: 2, c: 3}
 */
module.exports = _curry3(function assoc(prop, val, obj) {
  var result = {};
  for (var p in obj) {
    result[p] = obj[p];
  }
  result[prop] = val;
  return result;
});


/***/ }),
/* 681 */
/***/ (function(module, exports, __webpack_require__) {

var _curry1 = __webpack_require__(651);
var curryN = __webpack_require__(655);


/**
 * Returns a curried equivalent of the provided function. The curried function
 * has two unusual capabilities. First, its arguments needn't be provided one
 * at a time. If `f` is a ternary function and `g` is `R.curry(f)`, the
 * following are equivalent:
 *
 *   - `g(1)(2)(3)`
 *   - `g(1)(2, 3)`
 *   - `g(1, 2)(3)`
 *   - `g(1, 2, 3)`
 *
 * Secondly, the special placeholder value [`R.__`](#__) may be used to specify
 * "gaps", allowing partial application of any combination of arguments,
 * regardless of their positions. If `g` is as above and `_` is [`R.__`](#__),
 * the following are equivalent:
 *
 *   - `g(1, 2, 3)`
 *   - `g(_, 2, 3)(1)`
 *   - `g(_, _, 3)(1)(2)`
 *   - `g(_, _, 3)(1, 2)`
 *   - `g(_, 2)(1)(3)`
 *   - `g(_, 2)(1, 3)`
 *   - `g(_, 2)(_, 3)(1)`
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig (* -> a) -> (* -> a)
 * @param {Function} fn The function to curry.
 * @return {Function} A new, curried function.
 * @see R.curryN
 * @example
 *
 *      var addFourNumbers = (a, b, c, d) => a + b + c + d;
 *
 *      var curriedAddFourNumbers = R.curry(addFourNumbers);
 *      var f = curriedAddFourNumbers(1, 2);
 *      var g = f(3);
 *      g(4); //=> 10
 */
module.exports = _curry1(function curry(fn) {
  return curryN(fn.length, fn);
});


/***/ }),
/* 682 */
/***/ (function(module, exports, __webpack_require__) {

var _curry1 = __webpack_require__(651);
var curry = __webpack_require__(681);


/**
 * Returns a new function much like the supplied one, except that the first two
 * arguments' order is reversed.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig (a -> b -> c -> ... -> z) -> (b -> a -> c -> ... -> z)
 * @param {Function} fn The function to invoke with its first two parameters reversed.
 * @return {*} The result of invoking `fn` with its first two parameters' order reversed.
 * @example
 *
 *      var mergeThree = (a, b, c) => [].concat(a, b, c);
 *
 *      mergeThree(1, 2, 3); //=> [1, 2, 3]
 *
 *      R.flip(mergeThree)(1, 2, 3); //=> [2, 1, 3]
 * @symb R.flip(f)(a, b, c) = f(b, a, c)
 */
module.exports = _curry1(function flip(fn) {
  return curry(function(a, b) {
    var args = Array.prototype.slice.call(arguments, 0);
    args[0] = b;
    args[1] = a;
    return fn.apply(this, args);
  });
});


/***/ }),
/* 683 */
/***/ (function(module, exports) {

module.exports = function _containsWith(pred, x, list) {
  var idx = 0;
  var len = list.length;

  while (idx < len) {
    if (pred(x, list[idx])) {
      return true;
    }
    idx += 1;
  }
  return false;
};


/***/ }),
/* 684 */
/***/ (function(module, exports, __webpack_require__) {

var _arity = __webpack_require__(661);
var _isPlaceholder = __webpack_require__(687);


/**
 * Internal curryN function.
 *
 * @private
 * @category Function
 * @param {Number} length The arity of the curried function.
 * @param {Array} received An array of arguments received thus far.
 * @param {Function} fn The function to curry.
 * @return {Function} The curried function.
 */
module.exports = function _curryN(length, received, fn) {
  return function() {
    var combined = [];
    var argsIdx = 0;
    var left = length;
    var combinedIdx = 0;
    while (combinedIdx < received.length || argsIdx < arguments.length) {
      var result;
      if (combinedIdx < received.length &&
          (!_isPlaceholder(received[combinedIdx]) ||
           argsIdx >= arguments.length)) {
        result = received[combinedIdx];
      } else {
        result = arguments[argsIdx];
        argsIdx += 1;
      }
      combined[combinedIdx] = result;
      if (!_isPlaceholder(result)) {
        left -= 1;
      }
      combinedIdx += 1;
    }
    return left <= 0 ? fn.apply(this, combined)
                     : _arity(left, _curryN(length, combined, fn));
  };
};


/***/ }),
/* 685 */
/***/ (function(module, exports, __webpack_require__) {

var _curry1 = __webpack_require__(651);
var _isArray = __webpack_require__(665);
var _isString = __webpack_require__(672);


/**
 * Tests whether or not an object is similar to an array.
 *
 * @private
 * @category Type
 * @category List
 * @sig * -> Boolean
 * @param {*} x The object to test.
 * @return {Boolean} `true` if `x` has a numeric length property and extreme indices defined; `false` otherwise.
 * @example
 *
 *      _isArrayLike([]); //=> true
 *      _isArrayLike(true); //=> false
 *      _isArrayLike({}); //=> false
 *      _isArrayLike({length: 10}); //=> false
 *      _isArrayLike({0: 'zero', 9: 'nine', length: 10}); //=> true
 */
module.exports = _curry1(function isArrayLike(x) {
  if (_isArray(x)) { return true; }
  if (!x) { return false; }
  if (typeof x !== 'object') { return false; }
  if (_isString(x)) { return false; }
  if (x.nodeType === 1) { return !!x.length; }
  if (x.length === 0) { return true; }
  if (x.length > 0) {
    return x.hasOwnProperty(0) && x.hasOwnProperty(x.length - 1);
  }
  return false;
});


/***/ }),
/* 686 */
/***/ (function(module, exports) {

module.exports = function _isFunction(x) {
  return Object.prototype.toString.call(x) === '[object Function]';
};


/***/ }),
/* 687 */
/***/ (function(module, exports) {

module.exports = function _isPlaceholder(a) {
  return a != null &&
         typeof a === 'object' &&
         a['@@functional/placeholder'] === true;
};


/***/ }),
/* 688 */
/***/ (function(module, exports) {

module.exports = function _map(fn, functor) {
  var idx = 0;
  var len = functor.length;
  var result = Array(len);
  while (idx < len) {
    result[idx] = fn(functor[idx]);
    idx += 1;
  }
  return result;
};


/***/ }),
/* 689 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(650);
var map = __webpack_require__(657);


/**
 * Returns a lens for the given getter and setter functions. The getter "gets"
 * the value of the focus; the setter "sets" the value of the focus. The setter
 * should not mutate the data structure.
 *
 * @func
 * @memberOf R
 * @since v0.8.0
 * @category Object
 * @typedefn Lens s a = Functor f => (a -> f a) -> s -> f s
 * @sig (s -> a) -> ((a, s) -> s) -> Lens s a
 * @param {Function} getter
 * @param {Function} setter
 * @return {Lens}
 * @see R.view, R.set, R.over, R.lensIndex, R.lensProp
 * @example
 *
 *      var xLens = R.lens(R.prop('x'), R.assoc('x'));
 *
 *      R.view(xLens, {x: 1, y: 2});            //=> 1
 *      R.set(xLens, 4, {x: 1, y: 2});          //=> {x: 4, y: 2}
 *      R.over(xLens, R.negate, {x: 1, y: 2});  //=> {x: -1, y: 2}
 */
module.exports = _curry2(function lens(getter, setter) {
  return function(toFunctorFn) {
    return function(target) {
      return map(
        function(focus) {
          return setter(focus, target);
        },
        toFunctorFn(getter(target))
      );
    };
  };
});


/***/ }),
/* 690 */
/***/ (function(module, exports, __webpack_require__) {

var _curry1 = __webpack_require__(651);
var liftN = __webpack_require__(756);


/**
 * "lifts" a function of arity > 1 so that it may "map over" a list, Function or other
 * object that satisfies the [FantasyLand Apply spec](https://github.com/fantasyland/fantasy-land#apply).
 *
 * @func
 * @memberOf R
 * @since v0.7.0
 * @category Function
 * @sig (*... -> *) -> ([*]... -> [*])
 * @param {Function} fn The function to lift into higher context
 * @return {Function} The lifted function.
 * @see R.liftN
 * @example
 *
 *      var madd3 = R.lift((a, b, c) => a + b + c);
 *
 *      madd3([1,2,3], [1,2,3], [1]); //=> [3, 4, 5, 4, 5, 6, 5, 6, 7]
 *
 *      var madd5 = R.lift((a, b, c, d, e) => a + b + c + d + e);
 *
 *      madd5([1,2], [3], [4, 5], [6], [7, 8]); //=> [21, 22, 22, 23, 22, 23, 23, 24]
 */
module.exports = _curry1(function lift(fn) {
  return liftN(fn.length, fn);
});


/***/ }),
/* 691 */
/***/ (function(module, exports, __webpack_require__) {

var _curry3 = __webpack_require__(652);
var _isObject = __webpack_require__(707);
var mergeWithKey = __webpack_require__(709);


/**
 * Creates a new object with the own properties of the two provided objects.
 * If a key exists in both objects:
 * - and both associated values are also objects then the values will be
 *   recursively merged.
 * - otherwise the provided function is applied to the key and associated values
 *   using the resulting value as the new value associated with the key.
 * If a key only exists in one object, the value will be associated with the key
 * of the resulting object.
 *
 * @func
 * @memberOf R
 * @since v0.24.0
 * @category Object
 * @sig (String -> a -> a -> a) -> {a} -> {a} -> {a}
 * @param {Function} fn
 * @param {Object} lObj
 * @param {Object} rObj
 * @return {Object}
 * @see R.mergeWithKey, R.mergeDeep, R.mergeDeepWith
 * @example
 *
 *      let concatValues = (k, l, r) => k == 'values' ? R.concat(l, r) : r
 *      R.mergeDeepWithKey(concatValues,
 *                         { a: true, c: { thing: 'foo', values: [10, 20] }},
 *                         { b: true, c: { thing: 'bar', values: [15, 35] }});
 *      //=> { a: true, b: true, c: { thing: 'bar', values: [10, 20, 15, 35] }}
 */
module.exports = _curry3(function mergeDeepWithKey(fn, lObj, rObj) {
  return mergeWithKey(function(k, lVal, rVal) {
    if (_isObject(lVal) && _isObject(rVal)) {
      return mergeDeepWithKey(fn, lVal, rVal);
    } else {
      return fn(k, lVal, rVal);
    }
  }, lObj, rObj);
});


/***/ }),
/* 692 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(650);


/**
 * Wraps a function of any arity (including nullary) in a function that accepts
 * exactly `n` parameters. Any extraneous parameters will not be passed to the
 * supplied function.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig Number -> (* -> a) -> (* -> a)
 * @param {Number} n The desired arity of the new function.
 * @param {Function} fn The function to wrap.
 * @return {Function} A new function wrapping `fn`. The new function is guaranteed to be of
 *         arity `n`.
 * @see R.binary, R.unary
 * @example
 *
 *      var takesTwoArgs = (a, b) => [a, b];
 *
 *      takesTwoArgs.length; //=> 2
 *      takesTwoArgs(1, 2); //=> [1, 2]
 *
 *      var takesOneArg = R.nAry(1, takesTwoArgs);
 *      takesOneArg.length; //=> 1
 *      // Only `n` arguments are passed to the wrapped function
 *      takesOneArg(1, 2); //=> [1, undefined]
 * @symb R.nAry(0, f)(a, b) = f()
 * @symb R.nAry(1, f)(a, b) = f(a)
 * @symb R.nAry(2, f)(a, b) = f(a, b)
 */
module.exports = _curry2(function nAry(n, fn) {
  switch (n) {
    case 0: return function() {return fn.call(this);};
    case 1: return function(a0) {return fn.call(this, a0);};
    case 2: return function(a0, a1) {return fn.call(this, a0, a1);};
    case 3: return function(a0, a1, a2) {return fn.call(this, a0, a1, a2);};
    case 4: return function(a0, a1, a2, a3) {return fn.call(this, a0, a1, a2, a3);};
    case 5: return function(a0, a1, a2, a3, a4) {return fn.call(this, a0, a1, a2, a3, a4);};
    case 6: return function(a0, a1, a2, a3, a4, a5) {return fn.call(this, a0, a1, a2, a3, a4, a5);};
    case 7: return function(a0, a1, a2, a3, a4, a5, a6) {return fn.call(this, a0, a1, a2, a3, a4, a5, a6);};
    case 8: return function(a0, a1, a2, a3, a4, a5, a6, a7) {return fn.call(this, a0, a1, a2, a3, a4, a5, a6, a7);};
    case 9: return function(a0, a1, a2, a3, a4, a5, a6, a7, a8) {return fn.call(this, a0, a1, a2, a3, a4, a5, a6, a7, a8);};
    case 10: return function(a0, a1, a2, a3, a4, a5, a6, a7, a8, a9) {return fn.call(this, a0, a1, a2, a3, a4, a5, a6, a7, a8, a9);};
    default: throw new Error('First argument to nAry must be a non-negative integer no greater than ten');
  }
});


/***/ }),
/* 693 */
/***/ (function(module, exports, __webpack_require__) {

var _curryN = __webpack_require__(684);
var _dispatchable = __webpack_require__(653);
var _has = __webpack_require__(656);
var _reduce = __webpack_require__(659);
var _xreduceBy = __webpack_require__(884);


/**
 * Groups the elements of the list according to the result of calling
 * the String-returning function `keyFn` on each element and reduces the elements
 * of each group to a single value via the reducer function `valueFn`.
 *
 * This function is basically a more general [`groupBy`](#groupBy) function.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.20.0
 * @category List
 * @sig ((a, b) -> a) -> a -> (b -> String) -> [b] -> {String: a}
 * @param {Function} valueFn The function that reduces the elements of each group to a single
 *        value. Receives two values, accumulator for a particular group and the current element.
 * @param {*} acc The (initial) accumulator value for each group.
 * @param {Function} keyFn The function that maps the list's element into a key.
 * @param {Array} list The array to group.
 * @return {Object} An object with the output of `keyFn` for keys, mapped to the output of
 *         `valueFn` for elements which produced that key when passed to `keyFn`.
 * @see R.groupBy, R.reduce
 * @example
 *
 *      var reduceToNamesBy = R.reduceBy((acc, student) => acc.concat(student.name), []);
 *      var namesByGrade = reduceToNamesBy(function(student) {
 *        var score = student.score;
 *        return score < 65 ? 'F' :
 *               score < 70 ? 'D' :
 *               score < 80 ? 'C' :
 *               score < 90 ? 'B' : 'A';
 *      });
 *      var students = [{name: 'Lucy', score: 92},
 *                      {name: 'Drew', score: 85},
 *                      // ...
 *                      {name: 'Bart', score: 62}];
 *      namesByGrade(students);
 *      // {
 *      //   'A': ['Lucy'],
 *      //   'B': ['Drew']
 *      //   // ...,
 *      //   'F': ['Bart']
 *      // }
 */
module.exports = _curryN(4, [], _dispatchable([], _xreduceBy,
  function reduceBy(valueFn, valueAcc, keyFn, list) {
    return _reduce(function(acc, elt) {
      var key = keyFn(elt);
      acc[key] = valueFn(_has(key, acc) ? acc[key] : valueAcc, elt);
      return acc;
    }, {}, list);
  }));


/***/ }),
/* 694 */
/***/ (function(module, exports, __webpack_require__) {

var _complement = __webpack_require__(742);
var _curry2 = __webpack_require__(650);
var filter = __webpack_require__(701);


/**
 * The complement of [`filter`](#filter).
 *
 * Acts as a transducer if a transformer is given in list position. Filterable
 * objects include plain objects or any object that has a filter method such
 * as `Array`.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig Filterable f => (a -> Boolean) -> f a -> f a
 * @param {Function} pred
 * @param {Array} filterable
 * @return {Array}
 * @see R.filter, R.transduce, R.addIndex
 * @example
 *
 *      var isOdd = (n) => n % 2 === 1;
 *
 *      R.reject(isOdd, [1, 2, 3, 4]); //=> [2, 4]
 *
 *      R.reject(isOdd, {a: 1, b: 2, c: 3, d: 4}); //=> {b: 2, d: 4}
 */
module.exports = _curry2(function reject(pred, filterable) {
  return filter(_complement(pred), filterable);
});


/***/ }),
/* 695 */
/***/ (function(module, exports, __webpack_require__) {

var _curry1 = __webpack_require__(651);
var _isString = __webpack_require__(672);


/**
 * Returns a new list or string with the elements or characters in reverse
 * order.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig [a] -> [a]
 * @sig String -> String
 * @param {Array|String} list
 * @return {Array|String}
 * @example
 *
 *      R.reverse([1, 2, 3]);  //=> [3, 2, 1]
 *      R.reverse([1, 2]);     //=> [2, 1]
 *      R.reverse([1]);        //=> [1]
 *      R.reverse([]);         //=> []
 *
 *      R.reverse('abc');      //=> 'cba'
 *      R.reverse('ab');       //=> 'ba'
 *      R.reverse('a');        //=> 'a'
 *      R.reverse('');         //=> ''
 */
module.exports = _curry1(function reverse(list) {
  return _isString(list) ? list.split('').reverse().join('') :
                           Array.prototype.slice.call(list, 0).reverse();
});


/***/ }),
/* 696 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  F: __webpack_require__(794),
  T: __webpack_require__(795),
  __: __webpack_require__(796),
  add: __webpack_require__(679),
  addIndex: __webpack_require__(797),
  adjust: __webpack_require__(723),
  all: __webpack_require__(798),
  allPass: __webpack_require__(799),
  always: __webpack_require__(669),
  and: __webpack_require__(724),
  any: __webpack_require__(725),
  anyPass: __webpack_require__(800),
  ap: __webpack_require__(697),
  aperture: __webpack_require__(801),
  append: __webpack_require__(802),
  apply: __webpack_require__(726),
  applySpec: __webpack_require__(803),
  ascend: __webpack_require__(804),
  assoc: __webpack_require__(680),
  assocPath: __webpack_require__(727),
  binary: __webpack_require__(805),
  bind: __webpack_require__(728),
  both: __webpack_require__(806),
  call: __webpack_require__(807),
  chain: __webpack_require__(698),
  clamp: __webpack_require__(808),
  clone: __webpack_require__(809),
  comparator: __webpack_require__(810),
  complement: __webpack_require__(811),
  compose: __webpack_require__(699),
  composeK: __webpack_require__(729),
  composeP: __webpack_require__(812),
  concat: __webpack_require__(700),
  cond: __webpack_require__(813),
  construct: __webpack_require__(814),
  constructN: __webpack_require__(730),
  contains: __webpack_require__(815),
  converge: __webpack_require__(731),
  countBy: __webpack_require__(816),
  curry: __webpack_require__(681),
  curryN: __webpack_require__(655),
  dec: __webpack_require__(817),
  defaultTo: __webpack_require__(732),
  descend: __webpack_require__(818),
  difference: __webpack_require__(733),
  differenceWith: __webpack_require__(734),
  dissoc: __webpack_require__(735),
  dissocPath: __webpack_require__(819),
  divide: __webpack_require__(820),
  drop: __webpack_require__(736),
  dropLast: __webpack_require__(821),
  dropLastWhile: __webpack_require__(822),
  dropRepeats: __webpack_require__(823),
  dropRepeatsWith: __webpack_require__(737),
  dropWhile: __webpack_require__(824),
  either: __webpack_require__(825),
  empty: __webpack_require__(738),
  endsWith: __webpack_require__(826),
  eqBy: __webpack_require__(827),
  eqProps: __webpack_require__(828),
  equals: __webpack_require__(658),
  evolve: __webpack_require__(829),
  filter: __webpack_require__(701),
  find: __webpack_require__(830),
  findIndex: __webpack_require__(831),
  findLast: __webpack_require__(832),
  findLastIndex: __webpack_require__(833),
  flatten: __webpack_require__(834),
  flip: __webpack_require__(682),
  forEach: __webpack_require__(835),
  forEachObjIndexed: __webpack_require__(836),
  fromPairs: __webpack_require__(837),
  groupBy: __webpack_require__(838),
  groupWith: __webpack_require__(839),
  gt: __webpack_require__(840),
  gte: __webpack_require__(841),
  has: __webpack_require__(842),
  hasIn: __webpack_require__(843),
  head: __webpack_require__(844),
  identical: __webpack_require__(739),
  identity: __webpack_require__(702),
  ifElse: __webpack_require__(845),
  inc: __webpack_require__(846),
  indexBy: __webpack_require__(847),
  indexOf: __webpack_require__(848),
  init: __webpack_require__(849),
  innerJoin: __webpack_require__(850),
  insert: __webpack_require__(851),
  insertAll: __webpack_require__(852),
  intersection: __webpack_require__(887),
  intersectionWith: __webpack_require__(888),
  intersperse: __webpack_require__(889),
  into: __webpack_require__(890),
  invert: __webpack_require__(891),
  invertObj: __webpack_require__(892),
  invoker: __webpack_require__(673),
  is: __webpack_require__(751),
  isEmpty: __webpack_require__(893),
  isNil: __webpack_require__(752),
  join: __webpack_require__(894),
  juxt: __webpack_require__(753),
  keys: __webpack_require__(662),
  keysIn: __webpack_require__(895),
  last: __webpack_require__(754),
  lastIndexOf: __webpack_require__(896),
  length: __webpack_require__(755),
  lens: __webpack_require__(689),
  lensIndex: __webpack_require__(897),
  lensPath: __webpack_require__(898),
  lensProp: __webpack_require__(899),
  lift: __webpack_require__(690),
  liftN: __webpack_require__(756),
  lt: __webpack_require__(900),
  lte: __webpack_require__(901),
  map: __webpack_require__(657),
  mapAccum: __webpack_require__(902),
  mapAccumRight: __webpack_require__(903),
  mapObjIndexed: __webpack_require__(904),
  match: __webpack_require__(905),
  mathMod: __webpack_require__(906),
  max: __webpack_require__(670),
  maxBy: __webpack_require__(907),
  mean: __webpack_require__(757),
  median: __webpack_require__(908),
  memoize: __webpack_require__(909),
  memoizeWith: __webpack_require__(758),
  merge: __webpack_require__(910),
  mergeAll: __webpack_require__(911),
  mergeDeepLeft: __webpack_require__(912),
  mergeDeepRight: __webpack_require__(913),
  mergeDeepWith: __webpack_require__(914),
  mergeDeepWithKey: __webpack_require__(691),
  mergeWith: __webpack_require__(915),
  mergeWithKey: __webpack_require__(709),
  min: __webpack_require__(916),
  minBy: __webpack_require__(917),
  modulo: __webpack_require__(918),
  multiply: __webpack_require__(759),
  nAry: __webpack_require__(692),
  negate: __webpack_require__(919),
  none: __webpack_require__(920),
  not: __webpack_require__(760),
  nth: __webpack_require__(674),
  nthArg: __webpack_require__(921),
  o: __webpack_require__(922),
  objOf: __webpack_require__(761),
  of: __webpack_require__(923),
  omit: __webpack_require__(924),
  once: __webpack_require__(925),
  or: __webpack_require__(762),
  over: __webpack_require__(763),
  pair: __webpack_require__(926),
  partial: __webpack_require__(927),
  partialRight: __webpack_require__(928),
  partition: __webpack_require__(929),
  path: __webpack_require__(675),
  pathEq: __webpack_require__(930),
  pathOr: __webpack_require__(931),
  pathSatisfies: __webpack_require__(932),
  pick: __webpack_require__(933),
  pickAll: __webpack_require__(764),
  pickBy: __webpack_require__(934),
  pipe: __webpack_require__(765),
  pipeK: __webpack_require__(935),
  pipeP: __webpack_require__(766),
  pluck: __webpack_require__(676),
  prepend: __webpack_require__(767),
  product: __webpack_require__(936),
  project: __webpack_require__(937),
  prop: __webpack_require__(710),
  propEq: __webpack_require__(938),
  propIs: __webpack_require__(939),
  propOr: __webpack_require__(940),
  propSatisfies: __webpack_require__(941),
  props: __webpack_require__(942),
  range: __webpack_require__(943),
  reduce: __webpack_require__(663),
  reduceBy: __webpack_require__(693),
  reduceRight: __webpack_require__(768),
  reduceWhile: __webpack_require__(944),
  reduced: __webpack_require__(945),
  reject: __webpack_require__(694),
  remove: __webpack_require__(769),
  repeat: __webpack_require__(946),
  replace: __webpack_require__(947),
  reverse: __webpack_require__(695),
  scan: __webpack_require__(948),
  sequence: __webpack_require__(770),
  set: __webpack_require__(949),
  slice: __webpack_require__(668),
  sort: __webpack_require__(950),
  sortBy: __webpack_require__(951),
  sortWith: __webpack_require__(952),
  split: __webpack_require__(953),
  splitAt: __webpack_require__(954),
  splitEvery: __webpack_require__(955),
  splitWhen: __webpack_require__(956),
  startsWith: __webpack_require__(957),
  subtract: __webpack_require__(958),
  sum: __webpack_require__(771),
  symmetricDifference: __webpack_require__(959),
  symmetricDifferenceWith: __webpack_require__(960),
  tail: __webpack_require__(711),
  take: __webpack_require__(712),
  takeLast: __webpack_require__(772),
  takeLastWhile: __webpack_require__(961),
  takeWhile: __webpack_require__(962),
  tap: __webpack_require__(963),
  test: __webpack_require__(964),
  times: __webpack_require__(773),
  toLower: __webpack_require__(965),
  toPairs: __webpack_require__(966),
  toPairsIn: __webpack_require__(967),
  toString: __webpack_require__(677),
  toUpper: __webpack_require__(968),
  transduce: __webpack_require__(969),
  transpose: __webpack_require__(970),
  traverse: __webpack_require__(971),
  trim: __webpack_require__(972),
  tryCatch: __webpack_require__(973),
  type: __webpack_require__(713),
  unapply: __webpack_require__(974),
  unary: __webpack_require__(975),
  uncurryN: __webpack_require__(976),
  unfold: __webpack_require__(977),
  union: __webpack_require__(978),
  unionWith: __webpack_require__(979),
  uniq: __webpack_require__(714),
  uniqBy: __webpack_require__(774),
  uniqWith: __webpack_require__(715),
  unless: __webpack_require__(980),
  unnest: __webpack_require__(981),
  until: __webpack_require__(982),
  update: __webpack_require__(716),
  useWith: __webpack_require__(775),
  values: __webpack_require__(776),
  valuesIn: __webpack_require__(983),
  view: __webpack_require__(984),
  when: __webpack_require__(985),
  where: __webpack_require__(777),
  whereEq: __webpack_require__(986),
  without: __webpack_require__(987),
  xprod: __webpack_require__(988),
  zip: __webpack_require__(989),
  zipObj: __webpack_require__(990),
  zipWith: __webpack_require__(991)
};


/***/ }),
/* 697 */
/***/ (function(module, exports, __webpack_require__) {

var _concat = __webpack_require__(660);
var _curry2 = __webpack_require__(650);
var _reduce = __webpack_require__(659);
var map = __webpack_require__(657);


/**
 * ap applies a list of functions to a list of values.
 *
 * Dispatches to the `ap` method of the second argument, if present. Also
 * treats curried functions as applicatives.
 *
 * @func
 * @memberOf R
 * @since v0.3.0
 * @category Function
 * @sig [a -> b] -> [a] -> [b]
 * @sig Apply f => f (a -> b) -> f a -> f b
 * @param {*} applyF
 * @param {*} applyX
 * @return {*}
 * @example
 *
 *      R.ap([R.multiply(2), R.add(3)], [1,2,3]); //=> [2, 4, 6, 4, 5, 6]
 *      R.ap([R.concat('tasty '), R.toUpper], ['pizza', 'salad']); //=> ["tasty pizza", "tasty salad", "PIZZA", "SALAD"]
 * @symb R.ap([f, g], [a, b]) = [f(a), f(b), g(a), g(b)]
 */
module.exports = _curry2(function ap(applyF, applyX) {
  return (
    typeof applyX['fantasy-land/ap'] === 'function' ?
      applyX['fantasy-land/ap'](applyF) :
    typeof applyF.ap === 'function' ?
      applyF.ap(applyX) :
    typeof applyF === 'function' ?
      function(x) { return applyF(x)(applyX(x)); } :
    // else
      _reduce(function(acc, f) { return _concat(acc, map(f, applyX)); }, [], applyF)
  );
});


/***/ }),
/* 698 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(650);
var _dispatchable = __webpack_require__(653);
var _makeFlat = __webpack_require__(747);
var _xchain = __webpack_require__(873);
var map = __webpack_require__(657);


/**
 * `chain` maps a function over a list and concatenates the results. `chain`
 * is also known as `flatMap` in some libraries
 *
 * Dispatches to the `chain` method of the second argument, if present,
 * according to the [FantasyLand Chain spec](https://github.com/fantasyland/fantasy-land#chain).
 *
 * @func
 * @memberOf R
 * @since v0.3.0
 * @category List
 * @sig Chain m => (a -> m b) -> m a -> m b
 * @param {Function} fn The function to map with
 * @param {Array} list The list to map over
 * @return {Array} The result of flat-mapping `list` with `fn`
 * @example
 *
 *      var duplicate = n => [n, n];
 *      R.chain(duplicate, [1, 2, 3]); //=> [1, 1, 2, 2, 3, 3]
 *
 *      R.chain(R.append, R.head)([1, 2, 3]); //=> [1, 2, 3, 1]
 */
module.exports = _curry2(_dispatchable(['fantasy-land/chain', 'chain'], _xchain, function chain(fn, monad) {
  if (typeof monad === 'function') {
    return function(x) { return fn(monad(x))(x); };
  }
  return _makeFlat(false)(map(fn, monad));
}));


/***/ }),
/* 699 */
/***/ (function(module, exports, __webpack_require__) {

var pipe = __webpack_require__(765);
var reverse = __webpack_require__(695);


/**
 * Performs right-to-left function composition. The rightmost function may have
 * any arity; the remaining functions must be unary.
 *
 * **Note:** The result of compose is not automatically curried.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig ((y -> z), (x -> y), ..., (o -> p), ((a, b, ..., n) -> o)) -> ((a, b, ..., n) -> z)
 * @param {...Function} ...functions The functions to compose
 * @return {Function}
 * @see R.pipe
 * @example
 *
 *      var classyGreeting = (firstName, lastName) => "The name's " + lastName + ", " + firstName + " " + lastName
 *      var yellGreeting = R.compose(R.toUpper, classyGreeting);
 *      yellGreeting('James', 'Bond'); //=> "THE NAME'S BOND, JAMES BOND"
 *
 *      R.compose(Math.abs, R.add(1), R.multiply(2))(-4) //=> 7
 *
 * @symb R.compose(f, g, h)(a, b) = f(g(h(a, b)))
 */
module.exports = function compose() {
  if (arguments.length === 0) {
    throw new Error('compose requires at least one argument');
  }
  return pipe.apply(this, reverse(arguments));
};


/***/ }),
/* 700 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(650);
var _isArray = __webpack_require__(665);
var _isFunction = __webpack_require__(686);
var _isString = __webpack_require__(672);
var toString = __webpack_require__(677);


/**
 * Returns the result of concatenating the given lists or strings.
 *
 * Note: `R.concat` expects both arguments to be of the same type,
 * unlike the native `Array.prototype.concat` method. It will throw
 * an error if you `concat` an Array with a non-Array value.
 *
 * Dispatches to the `concat` method of the first argument, if present.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig [a] -> [a] -> [a]
 * @sig String -> String -> String
 * @param {Array|String} firstList The first list
 * @param {Array|String} secondList The second list
 * @return {Array|String} A list consisting of the elements of `firstList` followed by the elements of
 * `secondList`.
 *
 * @example
 *
 *      R.concat('ABC', 'DEF'); // 'ABCDEF'
 *      R.concat([4, 5, 6], [1, 2, 3]); //=> [4, 5, 6, 1, 2, 3]
 *      R.concat([], []); //=> []
 */
module.exports = _curry2(function concat(a, b) {
  if (_isArray(a)) {
    if (_isArray(b)) {
      return a.concat(b);
    }
    throw new TypeError(toString(b) + ' is not an array');
  }
  if (_isString(a)) {
    if (_isString(b)) {
      return a + b;
    }
    throw new TypeError(toString(b) + ' is not a string');
  }
  if (a != null && _isFunction(a['fantasy-land/concat'])) {
    return a['fantasy-land/concat'](b);
  }
  if (a != null && _isFunction(a.concat)) {
    return a.concat(b);
  }
  throw new TypeError(toString(a) + ' does not have a method named "concat" or "fantasy-land/concat"');
});


/***/ }),
/* 701 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(650);
var _dispatchable = __webpack_require__(653);
var _filter = __webpack_require__(704);
var _isObject = __webpack_require__(707);
var _reduce = __webpack_require__(659);
var _xfilter = __webpack_require__(878);
var keys = __webpack_require__(662);


/**
 * Takes a predicate and a `Filterable`, and returns a new filterable of the
 * same type containing the members of the given filterable which satisfy the
 * given predicate. Filterable objects include plain objects or any object
 * that has a filter method such as `Array`.
 *
 * Dispatches to the `filter` method of the second argument, if present.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig Filterable f => (a -> Boolean) -> f a -> f a
 * @param {Function} pred
 * @param {Array} filterable
 * @return {Array} Filterable
 * @see R.reject, R.transduce, R.addIndex
 * @example
 *
 *      var isEven = n => n % 2 === 0;
 *
 *      R.filter(isEven, [1, 2, 3, 4]); //=> [2, 4]
 *
 *      R.filter(isEven, {a: 1, b: 2, c: 3, d: 4}); //=> {b: 2, d: 4}
 */
module.exports = _curry2(_dispatchable(['filter'], _xfilter, function(pred, filterable) {
  return (
    _isObject(filterable) ?
      _reduce(function(acc, key) {
        if (pred(filterable[key])) {
          acc[key] = filterable[key];
        }
        return acc;
      }, {}, keys(filterable)) :
    // else
      _filter(pred, filterable)
  );
}));


/***/ }),
/* 702 */
/***/ (function(module, exports, __webpack_require__) {

var _curry1 = __webpack_require__(651);
var _identity = __webpack_require__(705);


/**
 * A function that does nothing but return the parameter supplied to it. Good
 * as a default or placeholder function.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig a -> a
 * @param {*} x The value to return.
 * @return {*} The input value, `x`.
 * @example
 *
 *      R.identity(1); //=> 1
 *
 *      var obj = {};
 *      R.identity(obj) === obj; //=> true
 * @symb R.identity(a) = a
 */
module.exports = _curry1(_identity);


/***/ }),
/* 703 */
/***/ (function(module, exports, __webpack_require__) {

var _objectAssign = __webpack_require__(863);

module.exports =
  typeof Object.assign === 'function' ? Object.assign : _objectAssign;


/***/ }),
/* 704 */
/***/ (function(module, exports) {

module.exports = function _filter(fn, list) {
  var idx = 0;
  var len = list.length;
  var result = [];

  while (idx < len) {
    if (fn(list[idx])) {
      result[result.length] = list[idx];
    }
    idx += 1;
  }
  return result;
};


/***/ }),
/* 705 */
/***/ (function(module, exports) {

module.exports = function _identity(x) { return x; };


/***/ }),
/* 706 */
/***/ (function(module, exports) {

/**
 * Determine if the passed argument is an integer.
 *
 * @private
 * @param {*} n
 * @category Type
 * @return {Boolean}
 */
module.exports = Number.isInteger || function _isInteger(n) {
  return (n << 0) === n;
};


/***/ }),
/* 707 */
/***/ (function(module, exports) {

module.exports = function _isObject(x) {
  return Object.prototype.toString.call(x) === '[object Object]';
};


/***/ }),
/* 708 */
/***/ (function(module, exports) {

module.exports = function _isTransformer(obj) {
  return typeof obj['@@transducer/step'] === 'function';
};


/***/ }),
/* 709 */
/***/ (function(module, exports, __webpack_require__) {

var _curry3 = __webpack_require__(652);
var _has = __webpack_require__(656);


/**
 * Creates a new object with the own properties of the two provided objects. If
 * a key exists in both objects, the provided function is applied to the key
 * and the values associated with the key in each object, with the result being
 * used as the value associated with the key in the returned object.
 *
 * @func
 * @memberOf R
 * @since v0.19.0
 * @category Object
 * @sig (String -> a -> a -> a) -> {a} -> {a} -> {a}
 * @param {Function} fn
 * @param {Object} l
 * @param {Object} r
 * @return {Object}
 * @see R.mergeDeepWithKey, R.merge, R.mergeWith
 * @example
 *
 *      let concatValues = (k, l, r) => k == 'values' ? R.concat(l, r) : r
 *      R.mergeWithKey(concatValues,
 *                     { a: true, thing: 'foo', values: [10, 20] },
 *                     { b: true, thing: 'bar', values: [15, 35] });
 *      //=> { a: true, b: true, thing: 'bar', values: [10, 20, 15, 35] }
 * @symb R.mergeWithKey(f, { x: 1, y: 2 }, { y: 5, z: 3 }) = { x: 1, y: f('y', 2, 5), z: 3 }
 */
module.exports = _curry3(function mergeWithKey(fn, l, r) {
  var result = {};
  var k;

  for (k in l) {
    if (_has(k, l)) {
      result[k] = _has(k, r) ? fn(k, l[k], r[k]) : l[k];
    }
  }

  for (k in r) {
    if (_has(k, r) && !(_has(k, result))) {
      result[k] = r[k];
    }
  }

  return result;
});


/***/ }),
/* 710 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(650);


/**
 * Returns a function that when supplied an object returns the indicated
 * property of that object, if it exists.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Object
 * @sig s -> {s: a} -> a | Undefined
 * @param {String} p The property name
 * @param {Object} obj The object to query
 * @return {*} The value at `obj.p`.
 * @see R.path
 * @example
 *
 *      R.prop('x', {x: 100}); //=> 100
 *      R.prop('x', {}); //=> undefined
 */
module.exports = _curry2(function prop(p, obj) { return obj[p]; });


/***/ }),
/* 711 */
/***/ (function(module, exports, __webpack_require__) {

var _checkForMethod = __webpack_require__(671);
var _curry1 = __webpack_require__(651);
var slice = __webpack_require__(668);


/**
 * Returns all but the first element of the given list or string (or object
 * with a `tail` method).
 *
 * Dispatches to the `slice` method of the first argument, if present.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig [a] -> [a]
 * @sig String -> String
 * @param {*} list
 * @return {*}
 * @see R.head, R.init, R.last
 * @example
 *
 *      R.tail([1, 2, 3]);  //=> [2, 3]
 *      R.tail([1, 2]);     //=> [2]
 *      R.tail([1]);        //=> []
 *      R.tail([]);         //=> []
 *
 *      R.tail('abc');  //=> 'bc'
 *      R.tail('ab');   //=> 'b'
 *      R.tail('a');    //=> ''
 *      R.tail('');     //=> ''
 */
module.exports = _curry1(_checkForMethod('tail', slice(1, Infinity)));


/***/ }),
/* 712 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(650);
var _dispatchable = __webpack_require__(653);
var _xtake = __webpack_require__(885);
var slice = __webpack_require__(668);


/**
 * Returns the first `n` elements of the given list, string, or
 * transducer/transformer (or object with a `take` method).
 *
 * Dispatches to the `take` method of the second argument, if present.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig Number -> [a] -> [a]
 * @sig Number -> String -> String
 * @param {Number} n
 * @param {*} list
 * @return {*}
 * @see R.drop
 * @example
 *
 *      R.take(1, ['foo', 'bar', 'baz']); //=> ['foo']
 *      R.take(2, ['foo', 'bar', 'baz']); //=> ['foo', 'bar']
 *      R.take(3, ['foo', 'bar', 'baz']); //=> ['foo', 'bar', 'baz']
 *      R.take(4, ['foo', 'bar', 'baz']); //=> ['foo', 'bar', 'baz']
 *      R.take(3, 'ramda');               //=> 'ram'
 *
 *      var personnel = [
 *        'Dave Brubeck',
 *        'Paul Desmond',
 *        'Eugene Wright',
 *        'Joe Morello',
 *        'Gerry Mulligan',
 *        'Bob Bates',
 *        'Joe Dodge',
 *        'Ron Crotty'
 *      ];
 *
 *      var takeFive = R.take(5);
 *      takeFive(personnel);
 *      //=> ['Dave Brubeck', 'Paul Desmond', 'Eugene Wright', 'Joe Morello', 'Gerry Mulligan']
 * @symb R.take(-1, [a, b]) = [a, b]
 * @symb R.take(0, [a, b]) = []
 * @symb R.take(1, [a, b]) = [a]
 * @symb R.take(2, [a, b]) = [a, b]
 */
module.exports = _curry2(_dispatchable(['take'], _xtake, function take(n, xs) {
  return slice(0, n < 0 ? Infinity : n, xs);
}));


/***/ }),
/* 713 */
/***/ (function(module, exports, __webpack_require__) {

var _curry1 = __webpack_require__(651);


/**
 * Gives a single-word string description of the (native) type of a value,
 * returning such answers as 'Object', 'Number', 'Array', or 'Null'. Does not
 * attempt to distinguish user Object types any further, reporting them all as
 * 'Object'.
 *
 * @func
 * @memberOf R
 * @since v0.8.0
 * @category Type
 * @sig (* -> {*}) -> String
 * @param {*} val The value to test
 * @return {String}
 * @example
 *
 *      R.type({}); //=> "Object"
 *      R.type(1); //=> "Number"
 *      R.type(false); //=> "Boolean"
 *      R.type('s'); //=> "String"
 *      R.type(null); //=> "Null"
 *      R.type([]); //=> "Array"
 *      R.type(/[A-z]/); //=> "RegExp"
 *      R.type(() => {}); //=> "Function"
 */
module.exports = _curry1(function type(val) {
  return val === null      ? 'Null'      :
         val === undefined ? 'Undefined' :
         Object.prototype.toString.call(val).slice(8, -1);
});


/***/ }),
/* 714 */
/***/ (function(module, exports, __webpack_require__) {

var identity = __webpack_require__(702);
var uniqBy = __webpack_require__(774);


/**
 * Returns a new list containing only one copy of each element in the original
 * list. [`R.equals`](#equals) is used to determine equality.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig [a] -> [a]
 * @param {Array} list The array to consider.
 * @return {Array} The list of unique items.
 * @example
 *
 *      R.uniq([1, 1, 2, 1]); //=> [1, 2]
 *      R.uniq([1, '1']);     //=> [1, '1']
 *      R.uniq([[42], [42]]); //=> [[42]]
 */
module.exports = uniqBy(identity);


/***/ }),
/* 715 */
/***/ (function(module, exports, __webpack_require__) {

var _containsWith = __webpack_require__(683);
var _curry2 = __webpack_require__(650);


/**
 * Returns a new list containing only one copy of each element in the original
 * list, based upon the value returned by applying the supplied predicate to
 * two list elements. Prefers the first item if two items compare equal based
 * on the predicate.
 *
 * @func
 * @memberOf R
 * @since v0.2.0
 * @category List
 * @sig (a, a -> Boolean) -> [a] -> [a]
 * @param {Function} pred A predicate used to test whether two items are equal.
 * @param {Array} list The array to consider.
 * @return {Array} The list of unique items.
 * @example
 *
 *      var strEq = R.eqBy(String);
 *      R.uniqWith(strEq)([1, '1', 2, 1]); //=> [1, 2]
 *      R.uniqWith(strEq)([{}, {}]);       //=> [{}]
 *      R.uniqWith(strEq)([1, '1', 1]);    //=> [1]
 *      R.uniqWith(strEq)(['1', 1, 1]);    //=> ['1']
 */
module.exports = _curry2(function uniqWith(pred, list) {
  var idx = 0;
  var len = list.length;
  var result = [];
  var item;
  while (idx < len) {
    item = list[idx];
    if (!_containsWith(pred, item, result)) {
      result[result.length] = item;
    }
    idx += 1;
  }
  return result;
});


/***/ }),
/* 716 */
/***/ (function(module, exports, __webpack_require__) {

var _curry3 = __webpack_require__(652);
var adjust = __webpack_require__(723);
var always = __webpack_require__(669);


/**
 * Returns a new copy of the array with the element at the provided index
 * replaced with the given value.
 *
 * @func
 * @memberOf R
 * @since v0.14.0
 * @category List
 * @sig Number -> a -> [a] -> [a]
 * @param {Number} idx The index to update.
 * @param {*} x The value to exist at the given index of the returned array.
 * @param {Array|Arguments} list The source array-like object to be updated.
 * @return {Array} A copy of `list` with the value at index `idx` replaced with `x`.
 * @see R.adjust
 * @example
 *
 *      R.update(1, 11, [0, 1, 2]);     //=> [0, 11, 2]
 *      R.update(1)(11)([0, 1, 2]);     //=> [0, 11, 2]
 * @symb R.update(-1, a, [b, c]) = [b, a]
 * @symb R.update(0, a, [b, c]) = [a, c]
 * @symb R.update(1, a, [b, c]) = [b, a]
 */
module.exports = _curry3(function update(idx, x, list) {
  return adjust(always(x), idx, list);
});


/***/ }),
/* 717 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_config_interface__ = __webpack_require__(678);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_config_interface___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__app_config_interface__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_config_constants__ = __webpack_require__(401);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__util_helper_service__ = __webpack_require__(664);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TileService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};







var TileService = /** @class */ (function () {
    function TileService(http, helper, config) {
        this.http = http;
        this.helper = helper;
        this.config = config;
    }
    TileService.prototype.getUsersToday = function (queryParmas) {
        return this.http.get(this.config.BACKEND_URL + '/tweets/users/count' + queryParmas)
            .map(this.helper.extractData)
            .map(function (result) { return result.users; })
            .catch(this.helper.handleError);
    };
    TileService.prototype.getTweetsToday = function (queryParmas) {
        return this.http.get(this.config.BACKEND_URL + '/tweets/count' + queryParmas)
            .map(this.helper.extractData)
            .map(function (result) { return result.tweets; })
            .catch(this.helper.handleError);
    };
    TileService.prototype.getTrendingTopics = function (queryParmas) {
        return this.http.get(this.config.BACKEND_URL + '/trending' + queryParmas)
            .map(this.helper.extractData)
            .map(function (result) { return result.trending; })
            .catch(this.helper.handleError);
    };
    TileService.prototype.getTrendingTopicsWeekly = function () {
        return this.http.get(this.config.BACKEND_URL + '/trending/weekly')
            .map(this.helper.extractData)
            .map(function (result) { return result.trending; })
            .catch(this.helper.handleError);
    };
    TileService.prototype.getMostActiveUsers = function () {
        return this.http.get(this.config.BACKEND_URL + '/tweets/count/weekly')
            .map(this.helper.extractData)
            .map(function (result) { return result.users; })
            .catch(this.helper.handleError);
    };
    TileService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(),
        __param(2, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* Inject */])(__WEBPACK_IMPORTED_MODULE_5__app_config_constants__["a" /* APP_CONFIG */])),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6__util_helper_service__["a" /* Helper */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__util_helper_service__["a" /* Helper */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__app_config_interface__["IAppConfig"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__app_config_interface__["IAppConfig"]) === "function" && _c || Object])
    ], TileService);
    return TileService;
    var _a, _b, _c;
}());

//# sourceMappingURL=tile.service.js.map

/***/ }),
/* 718 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tableData__ = __webpack_require__(780);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ramda__ = __webpack_require__(696);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ramda___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ramda__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MentionsTransformerService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MentionsTransformerService = /** @class */ (function () {
    function MentionsTransformerService() {
        this.amountOfDays = 30;
    }
    MentionsTransformerService.prototype.orderedSumPerDay = function (mentions) {
        var today = new Date();
        var resultMap = this.createEmptyTableData(today);
        for (var _i = 0, mentions_1 = mentions; _i < mentions_1.length; _i++) {
            var mention = mentions_1[_i];
            this.incrementMentionForDay(resultMap, new Date(mention.createdAt));
        }
        return this.convertMapToOrderedArray(resultMap);
    };
    MentionsTransformerService.prototype.convertMapToOrderedArray = function (resultMap) {
        var result = [];
        resultMap.forEach(function (value, key) { return result.push(new __WEBPACK_IMPORTED_MODULE_1__tableData__["a" /* TableData */](new Date(key), value)); });
        __WEBPACK_IMPORTED_MODULE_3_ramda__["sort"](function (a, b) { return a.date.valueOf() - b.date.valueOf(); }, result);
        return result;
    };
    MentionsTransformerService.prototype.createEmptyTableData = function (today) {
        var result = new Map();
        for (var day = this.amountOfDays; day > 0; day--) {
            var aDate = __WEBPACK_IMPORTED_MODULE_2_moment__(today).add(-day, 'days');
            result.set(this.truncateDateToDate(aDate.toDate()).valueOf(), 0);
        }
        return result;
    };
    MentionsTransformerService.prototype.truncateDateToDate = function (date) {
        return new Date(date.getFullYear(), date.getMonth(), date.getDate());
    };
    MentionsTransformerService.prototype.incrementMentionForDay = function (resultMap, date) {
        try {
            var time = this.truncateDateToDate(date).valueOf();
            var mentions = resultMap.get(time);
            resultMap.set(time, mentions + 1);
        }
        catch (e) {
            // Do nothing at the moment
        }
    };
    MentionsTransformerService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], MentionsTransformerService);
    return MentionsTransformerService;
}());

//# sourceMappingURL=mentions-transformer.service.js.map

/***/ }),
/* 719 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_queryBuilder__ = __webpack_require__(785);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QueryHelper; });

var QueryHelper = /** @class */ (function () {
    function QueryHelper() {
        this.queryBuilder = new __WEBPACK_IMPORTED_MODULE_0__services_queryBuilder__["a" /* QueryBuilder */]();
    }
    QueryHelper.prototype.createQueryString = function (party, politicianId) {
        if (party) {
            return this.queryBuilder.queryFromPartyName(party);
        }
        else if (politicianId) {
            return this.queryBuilder.queryFromPoliticianId(politicianId);
        }
        else {
            return '';
        }
    };
    return QueryHelper;
}());

//# sourceMappingURL=queryHelper.js.map

/***/ }),
/* 720 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ramda__ = __webpack_require__(696);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ramda___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ramda__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tableData__ = __webpack_require__(782);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__truncateDate__ = __webpack_require__(783);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_moment__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SentimentsTransformerService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var Values = /** @class */ (function () {
    function Values() {
        this.positive = [];
        this.negative = [];
    }
    return Values;
}());
var SentimentsTransformerService = /** @class */ (function () {
    function SentimentsTransformerService() {
        this.amountOfDays = 30;
        this.truncateDate = new __WEBPACK_IMPORTED_MODULE_3__truncateDate__["a" /* TruncateDate */]();
    }
    SentimentsTransformerService.prototype.orderedSumPerDay = function (rawSentiments) {
        var today = new Date();
        var resultMap = this.createEmptyTableData(today);
        for (var _i = 0, rawSentiments_1 = rawSentiments; _i < rawSentiments_1.length; _i++) {
            var sentiment = rawSentiments_1[_i];
            this.addSentimentValueToDay(resultMap, sentiment);
        }
        return this.convertMapToOrderedArray(resultMap);
    };
    SentimentsTransformerService.prototype.convertMapToOrderedArray = function (resultMap) {
        var result = [];
        resultMap.forEach(function (value, key) {
            var positive = __WEBPACK_IMPORTED_MODULE_1_ramda__["mean"](value.positive);
            var negative = __WEBPACK_IMPORTED_MODULE_1_ramda__["mean"](value.negative);
            result.push(new __WEBPACK_IMPORTED_MODULE_2__tableData__["a" /* TableData */](new Date(key), positive, negative, positive + negative));
        });
        __WEBPACK_IMPORTED_MODULE_1_ramda__["sort"](function (a, b) { return a.date.valueOf() - b.date.valueOf(); }, result);
        return result;
    };
    SentimentsTransformerService.prototype.createEmptyTableData = function (today) {
        var result = new Map();
        for (var day = this.amountOfDays; day > 0; day--) {
            var aDate = __WEBPACK_IMPORTED_MODULE_4_moment__(today).add(-day, 'days');
            result.set(this.truncateDate.truncateDateToDate(aDate.toDate()).valueOf(), new Values());
        }
        return result;
    };
    SentimentsTransformerService.prototype.addSentimentValueToDay = function (resultMap, sentiment) {
        var time = this.truncateDate.truncateDateToDate(sentiment.createdAt).valueOf();
        var mapEntry = resultMap.get(time);
        if (mapEntry) {
            if (sentiment.sentimentLabel === 'positive') {
                mapEntry.positive.push(sentiment.sentimentScore);
            }
            else if (sentiment.sentimentLabel === 'negative') {
                mapEntry.negative.push(sentiment.sentimentScore);
            }
        }
    };
    SentimentsTransformerService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], SentimentsTransformerService);
    return SentimentsTransformerService;
}());

//# sourceMappingURL=sentiments-transformer.service.js.map

/***/ }),
/* 721 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_helper_service__ = __webpack_require__(664);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_config_constants__ = __webpack_require__(401);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_config_interface__ = __webpack_require__(678);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_config_interface___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__app_config_interface__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MentionsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};







var MentionsService = /** @class */ (function () {
    function MentionsService(http, helper, config) {
        this.http = http;
        this.helper = helper;
        this.config = config;
    }
    MentionsService.prototype.getMentions = function (query) {
        return this.http.get(this.config.BACKEND_URL + "/mentions" + query)
            .map(this.helper.extractData)
            .map(function (dataInHolder) { return dataInHolder.mentions; })
            .catch(this.helper.handleError);
    };
    MentionsService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(),
        __param(2, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* Inject */])(__WEBPACK_IMPORTED_MODULE_3__app_config_constants__["a" /* APP_CONFIG */])),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__util_helper_service__["a" /* Helper */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__util_helper_service__["a" /* Helper */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__app_config_interface__["IAppConfig"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__app_config_interface__["IAppConfig"]) === "function" && _c || Object])
    ], MentionsService);
    return MentionsService;
    var _a, _b, _c;
}());

//# sourceMappingURL=mentions.service.js.map

/***/ }),
/* 722 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_helper_service__ = __webpack_require__(664);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_config_constants__ = __webpack_require__(401);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_config_interface__ = __webpack_require__(678);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_config_interface___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__app_config_interface__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ramda__ = __webpack_require__(696);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ramda___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_ramda__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SentimentsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};








var SentimentsService = /** @class */ (function () {
    function SentimentsService(http, helper, config) {
        this.http = http;
        this.helper = helper;
        this.config = config;
    }
    SentimentsService.prototype.getSentiments = function (query) {
        return this.http.get(this.config.BACKEND_URL + "/sentiments" + query)
            .map(this.helper.extractData)
            .map(function (dataInHolder) { return dataInHolder.sentiments; })
            .map(function (sentiments) { return __WEBPACK_IMPORTED_MODULE_7_ramda__["map"](function (sentiment) {
            return {
                twitterUserId: sentiment.user.id,
                sentimentLabel: sentiment.tweet.sentiment.label,
                sentimentScore: sentiment.tweet.sentiment.score,
                createdAt: new Date(sentiment.createdAt)
            };
        }, sentiments); })
            .catch(this.helper.handleError);
    };
    SentimentsService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(),
        __param(2, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* Inject */])(__WEBPACK_IMPORTED_MODULE_3__app_config_constants__["a" /* APP_CONFIG */])),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__util_helper_service__["a" /* Helper */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__util_helper_service__["a" /* Helper */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__app_config_interface__["IAppConfig"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__app_config_interface__["IAppConfig"]) === "function" && _c || Object])
    ], SentimentsService);
    return SentimentsService;
    var _a, _b, _c;
}());

//# sourceMappingURL=sentiments.service.js.map

/***/ }),
/* 723 */
/***/ (function(module, exports, __webpack_require__) {

var _concat = __webpack_require__(660);
var _curry3 = __webpack_require__(652);


/**
 * Applies a function to the value at the given index of an array, returning a
 * new copy of the array with the element at the given index replaced with the
 * result of the function application.
 *
 * @func
 * @memberOf R
 * @since v0.14.0
 * @category List
 * @sig (a -> a) -> Number -> [a] -> [a]
 * @param {Function} fn The function to apply.
 * @param {Number} idx The index.
 * @param {Array|Arguments} list An array-like object whose value
 *        at the supplied index will be replaced.
 * @return {Array} A copy of the supplied array-like object with
 *         the element at index `idx` replaced with the value
 *         returned by applying `fn` to the existing element.
 * @see R.update
 * @example
 *
 *      R.adjust(R.add(10), 1, [1, 2, 3]);     //=> [1, 12, 3]
 *      R.adjust(R.add(10))(1)([1, 2, 3]);     //=> [1, 12, 3]
 * @symb R.adjust(f, -1, [a, b]) = [a, f(b)]
 * @symb R.adjust(f, 0, [a, b]) = [f(a), b]
 */
module.exports = _curry3(function adjust(fn, idx, list) {
  if (idx >= list.length || idx < -list.length) {
    return list;
  }
  var start = idx < 0 ? list.length : 0;
  var _idx = start + idx;
  var _list = _concat(list);
  _list[_idx] = fn(list[_idx]);
  return _list;
});


/***/ }),
/* 724 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(650);


/**
 * Returns `true` if both arguments are `true`; `false` otherwise.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Logic
 * @sig a -> b -> a | b
 * @param {Any} a
 * @param {Any} b
 * @return {Any} the first argument if it is falsy, otherwise the second argument.
 * @see R.both
 * @example
 *
 *      R.and(true, true); //=> true
 *      R.and(true, false); //=> false
 *      R.and(false, true); //=> false
 *      R.and(false, false); //=> false
 */
module.exports = _curry2(function and(a, b) {
  return a && b;
});


/***/ }),
/* 725 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(650);
var _dispatchable = __webpack_require__(653);
var _xany = __webpack_require__(748);


/**
 * Returns `true` if at least one of elements of the list match the predicate,
 * `false` otherwise.
 *
 * Dispatches to the `any` method of the second argument, if present.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig (a -> Boolean) -> [a] -> Boolean
 * @param {Function} fn The predicate function.
 * @param {Array} list The array to consider.
 * @return {Boolean} `true` if the predicate is satisfied by at least one element, `false`
 *         otherwise.
 * @see R.all, R.none, R.transduce
 * @example
 *
 *      var lessThan0 = R.flip(R.lt)(0);
 *      var lessThan2 = R.flip(R.lt)(2);
 *      R.any(lessThan0)([1, 2]); //=> false
 *      R.any(lessThan2)([1, 2]); //=> true
 */
module.exports = _curry2(_dispatchable(['any'], _xany, function any(fn, list) {
  var idx = 0;
  while (idx < list.length) {
    if (fn(list[idx])) {
      return true;
    }
    idx += 1;
  }
  return false;
}));


/***/ }),
/* 726 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(650);


/**
 * Applies function `fn` to the argument list `args`. This is useful for
 * creating a fixed-arity function from a variadic function. `fn` should be a
 * bound function if context is significant.
 *
 * @func
 * @memberOf R
 * @since v0.7.0
 * @category Function
 * @sig (*... -> a) -> [*] -> a
 * @param {Function} fn The function which will be called with `args`
 * @param {Array} args The arguments to call `fn` with
 * @return {*} result The result, equivalent to `fn(...args)`
 * @see R.call, R.unapply
 * @example
 *
 *      var nums = [1, 2, 3, -99, 42, 6, 7];
 *      R.apply(Math.max, nums); //=> 42
 * @symb R.apply(f, [a, b, c]) = f(a, b, c)
 */
module.exports = _curry2(function apply(fn, args) {
  return fn.apply(this, args);
});


/***/ }),
/* 727 */
/***/ (function(module, exports, __webpack_require__) {

var _curry3 = __webpack_require__(652);
var _has = __webpack_require__(656);
var _isArray = __webpack_require__(665);
var _isInteger = __webpack_require__(706);
var assoc = __webpack_require__(680);
var isNil = __webpack_require__(752);


/**
 * Makes a shallow clone of an object, setting or overriding the nodes required
 * to create the given path, and placing the specific value at the tail end of
 * that path. Note that this copies and flattens prototype properties onto the
 * new object as well. All non-primitive properties are copied by reference.
 *
 * @func
 * @memberOf R
 * @since v0.8.0
 * @category Object
 * @typedefn Idx = String | Int
 * @sig [Idx] -> a -> {a} -> {a}
 * @param {Array} path the path to set
 * @param {*} val The new value
 * @param {Object} obj The object to clone
 * @return {Object} A new object equivalent to the original except along the specified path.
 * @see R.dissocPath
 * @example
 *
 *      R.assocPath(['a', 'b', 'c'], 42, {a: {b: {c: 0}}}); //=> {a: {b: {c: 42}}}
 *
 *      // Any missing or non-object keys in path will be overridden
 *      R.assocPath(['a', 'b', 'c'], 42, {a: 5}); //=> {a: {b: {c: 42}}}
 */
module.exports = _curry3(function assocPath(path, val, obj) {
  if (path.length === 0) {
    return val;
  }
  var idx = path[0];
  if (path.length > 1) {
    var nextObj = (!isNil(obj) && _has(idx, obj)) ? obj[idx] : _isInteger(path[1]) ? [] : {};
    val = assocPath(Array.prototype.slice.call(path, 1), val, nextObj);
  }
  if (_isInteger(idx) && _isArray(obj)) {
    var arr = [].concat(obj);
    arr[idx] = val;
    return arr;
  } else {
    return assoc(idx, val, obj);
  }
});


/***/ }),
/* 728 */
/***/ (function(module, exports, __webpack_require__) {

var _arity = __webpack_require__(661);
var _curry2 = __webpack_require__(650);


/**
 * Creates a function that is bound to a context.
 * Note: `R.bind` does not provide the additional argument-binding capabilities of
 * [Function.prototype.bind](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind).
 *
 * @func
 * @memberOf R
 * @since v0.6.0
 * @category Function
 * @category Object
 * @sig (* -> *) -> {*} -> (* -> *)
 * @param {Function} fn The function to bind to context
 * @param {Object} thisObj The context to bind `fn` to
 * @return {Function} A function that will execute in the context of `thisObj`.
 * @see R.partial
 * @example
 *
 *      var log = R.bind(console.log, console);
 *      R.pipe(R.assoc('a', 2), R.tap(log), R.assoc('a', 3))({a: 1}); //=> {a: 3}
 *      // logs {a: 2}
 * @symb R.bind(f, o)(a, b) = f.call(o, a, b)
 */
module.exports = _curry2(function bind(fn, thisObj) {
  return _arity(fn.length, function() {
    return fn.apply(thisObj, arguments);
  });
});


/***/ }),
/* 729 */
/***/ (function(module, exports, __webpack_require__) {

var chain = __webpack_require__(698);
var compose = __webpack_require__(699);
var map = __webpack_require__(657);


/**
 * Returns the right-to-left Kleisli composition of the provided functions,
 * each of which must return a value of a type supported by [`chain`](#chain).
 *
 * `R.composeK(h, g, f)` is equivalent to `R.compose(R.chain(h), R.chain(g), R.chain(f))`.
 *
 * @func
 * @memberOf R
 * @since v0.16.0
 * @category Function
 * @sig Chain m => ((y -> m z), (x -> m y), ..., (a -> m b)) -> (a -> m z)
 * @param {...Function} ...functions The functions to compose
 * @return {Function}
 * @see R.pipeK
 * @example
 *
 *       //  get :: String -> Object -> Maybe *
 *       var get = R.curry((propName, obj) => Maybe(obj[propName]))
 *
 *       //  getStateCode :: Maybe String -> Maybe String
 *       var getStateCode = R.composeK(
 *         R.compose(Maybe.of, R.toUpper),
 *         get('state'),
 *         get('address'),
 *         get('user'),
 *       );
 *       getStateCode({"user":{"address":{"state":"ny"}}}); //=> Maybe.Just("NY")
 *       getStateCode({}); //=> Maybe.Nothing()
 * @symb R.composeK(f, g, h)(a) = R.chain(f, R.chain(g, h(a)))
 */
module.exports = function composeK() {
  if (arguments.length === 0) {
    throw new Error('composeK requires at least one argument');
  }
  var init = Array.prototype.slice.call(arguments);
  var last = init.pop();
  return compose(compose.apply(this, map(chain, init)), last);
};


/***/ }),
/* 730 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(650);
var curry = __webpack_require__(681);
var nAry = __webpack_require__(692);


/**
 * Wraps a constructor function inside a curried function that can be called
 * with the same arguments and returns the same type. The arity of the function
 * returned is specified to allow using variadic constructor functions.
 *
 * @func
 * @memberOf R
 * @since v0.4.0
 * @category Function
 * @sig Number -> (* -> {*}) -> (* -> {*})
 * @param {Number} n The arity of the constructor function.
 * @param {Function} Fn The constructor function to wrap.
 * @return {Function} A wrapped, curried constructor function.
 * @example
 *
 *      // Variadic Constructor function
 *      function Salad() {
 *        this.ingredients = arguments;
 *      };
 *      Salad.prototype.recipe = function() {
 *        var instructions = R.map((ingredient) => (
 *          'Add a whollop of ' + ingredient, this.ingredients)
 *        )
 *        return R.join('\n', instructions)
 *      }
 *
 *      var ThreeLayerSalad = R.constructN(3, Salad)
 *
 *      // Notice we no longer need the 'new' keyword, and the constructor is curried for 3 arguments.
 *      var salad = ThreeLayerSalad('Mayonnaise')('Potato Chips')('Ketchup')
 *      console.log(salad.recipe());
 *      // Add a whollop of Mayonnaise
 *      // Add a whollop of Potato Chips
 *      // Add a whollop of Potato Ketchup
 */
module.exports = _curry2(function constructN(n, Fn) {
  if (n > 10) {
    throw new Error('Constructor with greater than ten arguments');
  }
  if (n === 0) {
    return function() { return new Fn(); };
  }
  return curry(nAry(n, function($0, $1, $2, $3, $4, $5, $6, $7, $8, $9) {
    switch (arguments.length) {
      case  1: return new Fn($0);
      case  2: return new Fn($0, $1);
      case  3: return new Fn($0, $1, $2);
      case  4: return new Fn($0, $1, $2, $3);
      case  5: return new Fn($0, $1, $2, $3, $4);
      case  6: return new Fn($0, $1, $2, $3, $4, $5);
      case  7: return new Fn($0, $1, $2, $3, $4, $5, $6);
      case  8: return new Fn($0, $1, $2, $3, $4, $5, $6, $7);
      case  9: return new Fn($0, $1, $2, $3, $4, $5, $6, $7, $8);
      case 10: return new Fn($0, $1, $2, $3, $4, $5, $6, $7, $8, $9);
    }
  }));
});


/***/ }),
/* 731 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(650);
var _map = __webpack_require__(688);
var curryN = __webpack_require__(655);
var max = __webpack_require__(670);
var pluck = __webpack_require__(676);
var reduce = __webpack_require__(663);


/**
 * Accepts a converging function and a list of branching functions and returns
 * a new function. When invoked, this new function is applied to some
 * arguments, each branching function is applied to those same arguments. The
 * results of each branching function are passed as arguments to the converging
 * function to produce the return value.
 *
 * @func
 * @memberOf R
 * @since v0.4.2
 * @category Function
 * @sig (x1 -> x2 -> ... -> z) -> [(a -> b -> ... -> x1), (a -> b -> ... -> x2), ...] -> (a -> b -> ... -> z)
 * @param {Function} after A function. `after` will be invoked with the return values of
 *        `fn1` and `fn2` as its arguments.
 * @param {Array} functions A list of functions.
 * @return {Function} A new function.
 * @see R.useWith
 * @example
 *
 *      var average = R.converge(R.divide, [R.sum, R.length])
 *      average([1, 2, 3, 4, 5, 6, 7]) //=> 4
 *
 *      var strangeConcat = R.converge(R.concat, [R.toUpper, R.toLower])
 *      strangeConcat("Yodel") //=> "YODELyodel"
 *
 * @symb R.converge(f, [g, h])(a, b) = f(g(a, b), h(a, b))
 */
module.exports = _curry2(function converge(after, fns) {
  return curryN(reduce(max, 0, pluck('length', fns)), function() {
    var args = arguments;
    var context = this;
    return after.apply(context, _map(function(fn) {
      return fn.apply(context, args);
    }, fns));
  });
});


/***/ }),
/* 732 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(650);


/**
 * Returns the second argument if it is not `null`, `undefined` or `NaN`;
 * otherwise the first argument is returned.
 *
 * @func
 * @memberOf R
 * @since v0.10.0
 * @category Logic
 * @sig a -> b -> a | b
 * @param {a} default The default value.
 * @param {b} val `val` will be returned instead of `default` unless `val` is `null`, `undefined` or `NaN`.
 * @return {*} The second value if it is not `null`, `undefined` or `NaN`, otherwise the default value
 * @example
 *
 *      var defaultTo42 = R.defaultTo(42);
 *
 *      defaultTo42(null);  //=> 42
 *      defaultTo42(undefined);  //=> 42
 *      defaultTo42('Ramda');  //=> 'Ramda'
 *      // parseInt('string') results in NaN
 *      defaultTo42(parseInt('string')); //=> 42
 */
module.exports = _curry2(function defaultTo(d, v) {
  return v == null || v !== v ? d : v;
});


/***/ }),
/* 733 */
/***/ (function(module, exports, __webpack_require__) {

var _contains = __webpack_require__(667);
var _curry2 = __webpack_require__(650);


/**
 * Finds the set (i.e. no duplicates) of all elements in the first list not
 * contained in the second list. Objects and Arrays are compared in terms of
 * value equality, not reference equality.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig [*] -> [*] -> [*]
 * @param {Array} list1 The first list.
 * @param {Array} list2 The second list.
 * @return {Array} The elements in `list1` that are not in `list2`.
 * @see R.differenceWith, R.symmetricDifference, R.symmetricDifferenceWith, R.without
 * @example
 *
 *      R.difference([1,2,3,4], [7,6,5,4,3]); //=> [1,2]
 *      R.difference([7,6,5,4,3], [1,2,3,4]); //=> [7,6,5]
 *      R.difference([{a: 1}, {b: 2}], [{a: 1}, {c: 3}]) //=> [{b: 2}]
 */
module.exports = _curry2(function difference(first, second) {
  var out = [];
  var idx = 0;
  var firstLen = first.length;
  while (idx < firstLen) {
    if (!_contains(first[idx], second) && !_contains(first[idx], out)) {
      out[out.length] = first[idx];
    }
    idx += 1;
  }
  return out;
});


/***/ }),
/* 734 */
/***/ (function(module, exports, __webpack_require__) {

var _containsWith = __webpack_require__(683);
var _curry3 = __webpack_require__(652);


/**
 * Finds the set (i.e. no duplicates) of all elements in the first list not
 * contained in the second list. Duplication is determined according to the
 * value returned by applying the supplied predicate to two list elements.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig ((a, a) -> Boolean) -> [a] -> [a] -> [a]
 * @param {Function} pred A predicate used to test whether two items are equal.
 * @param {Array} list1 The first list.
 * @param {Array} list2 The second list.
 * @return {Array} The elements in `list1` that are not in `list2`.
 * @see R.difference, R.symmetricDifference, R.symmetricDifferenceWith
 * @example
 *
 *      var cmp = (x, y) => x.a === y.a;
 *      var l1 = [{a: 1}, {a: 2}, {a: 3}];
 *      var l2 = [{a: 3}, {a: 4}];
 *      R.differenceWith(cmp, l1, l2); //=> [{a: 1}, {a: 2}]
 */
module.exports = _curry3(function differenceWith(pred, first, second) {
  var out = [];
  var idx = 0;
  var firstLen = first.length;
  while (idx < firstLen) {
    if (!_containsWith(pred, first[idx], second) &&
        !_containsWith(pred, first[idx], out)) {
      out.push(first[idx]);
    }
    idx += 1;
  }
  return out;
});


/***/ }),
/* 735 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(650);


/**
 * Returns a new object that does not contain a `prop` property.
 *
 * @func
 * @memberOf R
 * @since v0.10.0
 * @category Object
 * @sig String -> {k: v} -> {k: v}
 * @param {String} prop The name of the property to dissociate
 * @param {Object} obj The object to clone
 * @return {Object} A new object equivalent to the original but without the specified property
 * @see R.assoc
 * @example
 *
 *      R.dissoc('b', {a: 1, b: 2, c: 3}); //=> {a: 1, c: 3}
 */
module.exports = _curry2(function dissoc(prop, obj) {
  var result = {};
  for (var p in obj) {
    result[p] = obj[p];
  }
  delete result[prop];
  return result;
});


/***/ }),
/* 736 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(650);
var _dispatchable = __webpack_require__(653);
var _xdrop = __webpack_require__(874);
var slice = __webpack_require__(668);


/**
 * Returns all but the first `n` elements of the given list, string, or
 * transducer/transformer (or object with a `drop` method).
 *
 * Dispatches to the `drop` method of the second argument, if present.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig Number -> [a] -> [a]
 * @sig Number -> String -> String
 * @param {Number} n
 * @param {*} list
 * @return {*} A copy of list without the first `n` elements
 * @see R.take, R.transduce, R.dropLast, R.dropWhile
 * @example
 *
 *      R.drop(1, ['foo', 'bar', 'baz']); //=> ['bar', 'baz']
 *      R.drop(2, ['foo', 'bar', 'baz']); //=> ['baz']
 *      R.drop(3, ['foo', 'bar', 'baz']); //=> []
 *      R.drop(4, ['foo', 'bar', 'baz']); //=> []
 *      R.drop(3, 'ramda');               //=> 'da'
 */
module.exports = _curry2(_dispatchable(['drop'], _xdrop, function drop(n, xs) {
  return slice(Math.max(0, n), Infinity, xs);
}));


/***/ }),
/* 737 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(650);
var _dispatchable = __webpack_require__(653);
var _xdropRepeatsWith = __webpack_require__(749);
var last = __webpack_require__(754);


/**
 * Returns a new list without any consecutively repeating elements. Equality is
 * determined by applying the supplied predicate to each pair of consecutive elements. The
 * first element in a series of equal elements will be preserved.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.14.0
 * @category List
 * @sig (a, a -> Boolean) -> [a] -> [a]
 * @param {Function} pred A predicate used to test whether two items are equal.
 * @param {Array} list The array to consider.
 * @return {Array} `list` without repeating elements.
 * @see R.transduce
 * @example
 *
 *      var l = [1, -1, 1, 3, 4, -4, -4, -5, 5, 3, 3];
 *      R.dropRepeatsWith(R.eqBy(Math.abs), l); //=> [1, 3, 4, -5, 3]
 */
module.exports = _curry2(_dispatchable([], _xdropRepeatsWith, function dropRepeatsWith(pred, list) {
  var result = [];
  var idx = 1;
  var len = list.length;
  if (len !== 0) {
    result[0] = list[0];
    while (idx < len) {
      if (!pred(last(result), list[idx])) {
        result[result.length] = list[idx];
      }
      idx += 1;
    }
  }
  return result;
}));



/***/ }),
/* 738 */
/***/ (function(module, exports, __webpack_require__) {

var _curry1 = __webpack_require__(651);
var _isArguments = __webpack_require__(745);
var _isArray = __webpack_require__(665);
var _isObject = __webpack_require__(707);
var _isString = __webpack_require__(672);


/**
 * Returns the empty value of its argument's type. Ramda defines the empty
 * value of Array (`[]`), Object (`{}`), String (`''`), and Arguments. Other
 * types are supported if they define `<Type>.empty` and/or
 * `<Type>.prototype.empty`.
 *
 * Dispatches to the `empty` method of the first argument, if present.
 *
 * @func
 * @memberOf R
 * @since v0.3.0
 * @category Function
 * @sig a -> a
 * @param {*} x
 * @return {*}
 * @example
 *
 *      R.empty(Just(42));      //=> Nothing()
 *      R.empty([1, 2, 3]);     //=> []
 *      R.empty('unicorns');    //=> ''
 *      R.empty({x: 1, y: 2});  //=> {}
 */
module.exports = _curry1(function empty(x) {
  return (
    (x != null && typeof x['fantasy-land/empty'] === 'function') ?
      x['fantasy-land/empty']() :
    (x != null && x.constructor != null && typeof x.constructor['fantasy-land/empty'] === 'function') ?
      x.constructor['fantasy-land/empty']() :
    (x != null && typeof x.empty === 'function') ?
      x.empty() :
    (x != null && x.constructor != null && typeof x.constructor.empty === 'function') ?
      x.constructor.empty() :
    _isArray(x) ?
      [] :
    _isString(x) ?
      '' :
    _isObject(x) ?
      {} :
    _isArguments(x) ?
      (function() { return arguments; }()) :
    // else
      void 0
  );
});


/***/ }),
/* 739 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(650);


/**
 * Returns true if its arguments are identical, false otherwise. Values are
 * identical if they reference the same memory. `NaN` is identical to `NaN`;
 * `0` and `-0` are not identical.
 *
 * @func
 * @memberOf R
 * @since v0.15.0
 * @category Relation
 * @sig a -> a -> Boolean
 * @param {*} a
 * @param {*} b
 * @return {Boolean}
 * @example
 *
 *      var o = {};
 *      R.identical(o, o); //=> true
 *      R.identical(1, 1); //=> true
 *      R.identical(1, '1'); //=> false
 *      R.identical([], []); //=> false
 *      R.identical(0, -0); //=> false
 *      R.identical(NaN, NaN); //=> true
 */
module.exports = _curry2(function identical(a, b) {
  // SameValue algorithm
  if (a === b) { // Steps 1-5, 7-10
    // Steps 6.b-6.e: +0 != -0
    return a !== 0 || 1 / a === 1 / b;
  } else {
    // Step 6.a: NaN == NaN
    return a !== a && b !== b;
  }
});


/***/ }),
/* 740 */
/***/ (function(module, exports, __webpack_require__) {

var _cloneRegExp = __webpack_require__(741);
var type = __webpack_require__(713);


/**
 * Copies an object.
 *
 * @private
 * @param {*} value The value to be copied
 * @param {Array} refFrom Array containing the source references
 * @param {Array} refTo Array containing the copied source references
 * @param {Boolean} deep Whether or not to perform deep cloning.
 * @return {*} The copied value.
 */
module.exports = function _clone(value, refFrom, refTo, deep) {
  var copy = function copy(copiedValue) {
    var len = refFrom.length;
    var idx = 0;
    while (idx < len) {
      if (value === refFrom[idx]) {
        return refTo[idx];
      }
      idx += 1;
    }
    refFrom[idx + 1] = value;
    refTo[idx + 1] = copiedValue;
    for (var key in value) {
      copiedValue[key] = deep ?
        _clone(value[key], refFrom, refTo, true) : value[key];
    }
    return copiedValue;
  };
  switch (type(value)) {
    case 'Object':  return copy({});
    case 'Array':   return copy([]);
    case 'Date':    return new Date(value.valueOf());
    case 'RegExp':  return _cloneRegExp(value);
    default:        return value;
  }
};


/***/ }),
/* 741 */
/***/ (function(module, exports) {

module.exports = function _cloneRegExp(pattern) {
  return new RegExp(pattern.source, (pattern.global     ? 'g' : '') +
                                    (pattern.ignoreCase ? 'i' : '') +
                                    (pattern.multiline  ? 'm' : '') +
                                    (pattern.sticky     ? 'y' : '') +
                                    (pattern.unicode    ? 'u' : ''));
};


/***/ }),
/* 742 */
/***/ (function(module, exports) {

module.exports = function _complement(f) {
  return function() {
    return !f.apply(this, arguments);
  };
};


/***/ }),
/* 743 */
/***/ (function(module, exports, __webpack_require__) {

var _arity = __webpack_require__(661);
var _curry2 = __webpack_require__(650);


module.exports = function _createPartialApplicator(concat) {
  return _curry2(function(fn, args) {
    return _arity(Math.max(0, fn.length - args.length), function() {
      return fn.apply(this, concat(args, arguments));
    });
  });
};


/***/ }),
/* 744 */
/***/ (function(module, exports, __webpack_require__) {

var equals = __webpack_require__(658);


module.exports = function _indexOf(list, a, idx) {
  var inf, item;
  // Array.prototype.indexOf doesn't exist below IE9
  if (typeof list.indexOf === 'function') {
    switch (typeof a) {
      case 'number':
        if (a === 0) {
          // manually crawl the list to distinguish between +0 and -0
          inf = 1 / a;
          while (idx < list.length) {
            item = list[idx];
            if (item === 0 && 1 / item === inf) {
              return idx;
            }
            idx += 1;
          }
          return -1;
        } else if (a !== a) {
          // NaN
          while (idx < list.length) {
            item = list[idx];
            if (typeof item === 'number' && item !== item) {
              return idx;
            }
            idx += 1;
          }
          return -1;
        }
        // non-zero numbers can utilise Set
        return list.indexOf(a, idx);

      // all these types can utilise Set
      case 'string':
      case 'boolean':
      case 'function':
      case 'undefined':
        return list.indexOf(a, idx);

      case 'object':
        if (a === null) {
          // null can utilise Set
          return list.indexOf(a, idx);
        }
    }
  }
  // anything else not covered above, defer to R.equals
  while (idx < list.length) {
    if (equals(list[idx], a)) {
      return idx;
    }
    idx += 1;
  }
  return -1;
};


/***/ }),
/* 745 */
/***/ (function(module, exports, __webpack_require__) {

var _has = __webpack_require__(656);


module.exports = (function() {
  var toString = Object.prototype.toString;
  return toString.call(arguments) === '[object Arguments]' ?
    function _isArguments(x) { return toString.call(x) === '[object Arguments]'; } :
    function _isArguments(x) { return _has('callee', x); };
}());


/***/ }),
/* 746 */
/***/ (function(module, exports) {

module.exports = function _isNumber(x) {
  return Object.prototype.toString.call(x) === '[object Number]';
};


/***/ }),
/* 747 */
/***/ (function(module, exports, __webpack_require__) {

var _isArrayLike = __webpack_require__(685);


/**
 * `_makeFlat` is a helper function that returns a one-level or fully recursive
 * function based on the flag passed in.
 *
 * @private
 */
module.exports = function _makeFlat(recursive) {
  return function flatt(list) {
    var value, jlen, j;
    var result = [];
    var idx = 0;
    var ilen = list.length;

    while (idx < ilen) {
      if (_isArrayLike(list[idx])) {
        value = recursive ? flatt(list[idx]) : list[idx];
        j = 0;
        jlen = value.length;
        while (j < jlen) {
          result[result.length] = value[j];
          j += 1;
        }
      } else {
        result[result.length] = list[idx];
      }
      idx += 1;
    }
    return result;
  };
};


/***/ }),
/* 748 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(650);
var _reduced = __webpack_require__(666);
var _xfBase = __webpack_require__(654);


module.exports = (function() {
  function XAny(f, xf) {
    this.xf = xf;
    this.f = f;
    this.any = false;
  }
  XAny.prototype['@@transducer/init'] = _xfBase.init;
  XAny.prototype['@@transducer/result'] = function(result) {
    if (!this.any) {
      result = this.xf['@@transducer/step'](result, false);
    }
    return this.xf['@@transducer/result'](result);
  };
  XAny.prototype['@@transducer/step'] = function(result, input) {
    if (this.f(input)) {
      this.any = true;
      result = _reduced(this.xf['@@transducer/step'](result, true));
    }
    return result;
  };

  return _curry2(function _xany(f, xf) { return new XAny(f, xf); });
}());


/***/ }),
/* 749 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(650);
var _xfBase = __webpack_require__(654);


module.exports = (function() {
  function XDropRepeatsWith(pred, xf) {
    this.xf = xf;
    this.pred = pred;
    this.lastValue = undefined;
    this.seenFirstValue = false;
  }

  XDropRepeatsWith.prototype['@@transducer/init'] = _xfBase.init;
  XDropRepeatsWith.prototype['@@transducer/result'] = _xfBase.result;
  XDropRepeatsWith.prototype['@@transducer/step'] = function(result, input) {
    var sameAsLast = false;
    if (!this.seenFirstValue) {
      this.seenFirstValue = true;
    } else if (this.pred(this.lastValue, input)) {
      sameAsLast = true;
    }
    this.lastValue = input;
    return sameAsLast ? result : this.xf['@@transducer/step'](result, input);
  };

  return _curry2(function _xdropRepeatsWith(pred, xf) { return new XDropRepeatsWith(pred, xf); });
}());


/***/ }),
/* 750 */
/***/ (function(module, exports) {

module.exports = (function() {
  function XWrap(fn) {
    this.f = fn;
  }
  XWrap.prototype['@@transducer/init'] = function() {
    throw new Error('init not implemented on XWrap');
  };
  XWrap.prototype['@@transducer/result'] = function(acc) { return acc; };
  XWrap.prototype['@@transducer/step'] = function(acc, x) {
    return this.f(acc, x);
  };

  return function _xwrap(fn) { return new XWrap(fn); };
}());


/***/ }),
/* 751 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(650);


/**
 * See if an object (`val`) is an instance of the supplied constructor. This
 * function will check up the inheritance chain, if any.
 *
 * @func
 * @memberOf R
 * @since v0.3.0
 * @category Type
 * @sig (* -> {*}) -> a -> Boolean
 * @param {Object} ctor A constructor
 * @param {*} val The value to test
 * @return {Boolean}
 * @example
 *
 *      R.is(Object, {}); //=> true
 *      R.is(Number, 1); //=> true
 *      R.is(Object, 1); //=> false
 *      R.is(String, 's'); //=> true
 *      R.is(String, new String('')); //=> true
 *      R.is(Object, new String('')); //=> true
 *      R.is(Object, 's'); //=> false
 *      R.is(Number, {}); //=> false
 */
module.exports = _curry2(function is(Ctor, val) {
  return val != null && val.constructor === Ctor || val instanceof Ctor;
});


/***/ }),
/* 752 */
/***/ (function(module, exports, __webpack_require__) {

var _curry1 = __webpack_require__(651);


/**
 * Checks if the input value is `null` or `undefined`.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category Type
 * @sig * -> Boolean
 * @param {*} x The value to test.
 * @return {Boolean} `true` if `x` is `undefined` or `null`, otherwise `false`.
 * @example
 *
 *      R.isNil(null); //=> true
 *      R.isNil(undefined); //=> true
 *      R.isNil(0); //=> false
 *      R.isNil([]); //=> false
 */
module.exports = _curry1(function isNil(x) { return x == null; });


/***/ }),
/* 753 */
/***/ (function(module, exports, __webpack_require__) {

var _curry1 = __webpack_require__(651);
var converge = __webpack_require__(731);


/**
 * juxt applies a list of functions to a list of values.
 *
 * @func
 * @memberOf R
 * @since v0.19.0
 * @category Function
 * @sig [(a, b, ..., m) -> n] -> ((a, b, ..., m) -> [n])
 * @param {Array} fns An array of functions
 * @return {Function} A function that returns a list of values after applying each of the original `fns` to its parameters.
 * @see R.applySpec
 * @example
 *
 *      var getRange = R.juxt([Math.min, Math.max]);
 *      getRange(3, 4, 9, -3); //=> [-3, 9]
 * @symb R.juxt([f, g, h])(a, b) = [f(a, b), g(a, b), h(a, b)]
 */
module.exports = _curry1(function juxt(fns) {
  return converge(function() { return Array.prototype.slice.call(arguments, 0); }, fns);
});


/***/ }),
/* 754 */
/***/ (function(module, exports, __webpack_require__) {

var nth = __webpack_require__(674);


/**
 * Returns the last element of the given list or string.
 *
 * @func
 * @memberOf R
 * @since v0.1.4
 * @category List
 * @sig [a] -> a | Undefined
 * @sig String -> String
 * @param {*} list
 * @return {*}
 * @see R.init, R.head, R.tail
 * @example
 *
 *      R.last(['fi', 'fo', 'fum']); //=> 'fum'
 *      R.last([]); //=> undefined
 *
 *      R.last('abc'); //=> 'c'
 *      R.last(''); //=> ''
 */
module.exports = nth(-1);


/***/ }),
/* 755 */
/***/ (function(module, exports, __webpack_require__) {

var _curry1 = __webpack_require__(651);
var _isNumber = __webpack_require__(746);


/**
 * Returns the number of elements in the array by returning `list.length`.
 *
 * @func
 * @memberOf R
 * @since v0.3.0
 * @category List
 * @sig [a] -> Number
 * @param {Array} list The array to inspect.
 * @return {Number} The length of the array.
 * @example
 *
 *      R.length([]); //=> 0
 *      R.length([1, 2, 3]); //=> 3
 */
module.exports = _curry1(function length(list) {
  return list != null && _isNumber(list.length) ? list.length : NaN;
});


/***/ }),
/* 756 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(650);
var _reduce = __webpack_require__(659);
var ap = __webpack_require__(697);
var curryN = __webpack_require__(655);
var map = __webpack_require__(657);


/**
 * "lifts" a function to be the specified arity, so that it may "map over" that
 * many lists, Functions or other objects that satisfy the [FantasyLand Apply spec](https://github.com/fantasyland/fantasy-land#apply).
 *
 * @func
 * @memberOf R
 * @since v0.7.0
 * @category Function
 * @sig Number -> (*... -> *) -> ([*]... -> [*])
 * @param {Function} fn The function to lift into higher context
 * @return {Function} The lifted function.
 * @see R.lift, R.ap
 * @example
 *
 *      var madd3 = R.liftN(3, (...args) => R.sum(args));
 *      madd3([1,2,3], [1,2,3], [1]); //=> [3, 4, 5, 4, 5, 6, 5, 6, 7]
 */
module.exports = _curry2(function liftN(arity, fn) {
  var lifted = curryN(arity, fn);
  return curryN(arity, function() {
    return _reduce(ap, map(lifted, arguments[0]), Array.prototype.slice.call(arguments, 1));
  });
});


/***/ }),
/* 757 */
/***/ (function(module, exports, __webpack_require__) {

var _curry1 = __webpack_require__(651);
var sum = __webpack_require__(771);


/**
 * Returns the mean of the given list of numbers.
 *
 * @func
 * @memberOf R
 * @since v0.14.0
 * @category Math
 * @sig [Number] -> Number
 * @param {Array} list
 * @return {Number}
 * @see R.median
 * @example
 *
 *      R.mean([2, 7, 9]); //=> 6
 *      R.mean([]); //=> NaN
 */
module.exports = _curry1(function mean(list) {
  return sum(list) / list.length;
});


/***/ }),
/* 758 */
/***/ (function(module, exports, __webpack_require__) {

var _arity = __webpack_require__(661);
var _curry2 = __webpack_require__(650);
var _has = __webpack_require__(656);


/**
 * A customisable version of [`R.memoize`](#memoize). `memoizeWith` takes an
 * additional function that will be applied to a given argument set and used to
 * create the cache key under which the results of the function to be memoized
 * will be stored. Care must be taken when implementing key generation to avoid
 * clashes that may overwrite previous entries erroneously.
 *
 *
 * @func
 * @memberOf R
 * @since v0.24.0
 * @category Function
 * @sig (*... -> String) -> (*... -> a) -> (*... -> a)
 * @param {Function} fn The function to generate the cache key.
 * @param {Function} fn The function to memoize.
 * @return {Function} Memoized version of `fn`.
 * @see R.memoize
 * @example
 *
 *      let count = 0;
 *      const factorial = R.memoizeWith(R.identity, n => {
 *        count += 1;
 *        return R.product(R.range(1, n + 1));
 *      });
 *      factorial(5); //=> 120
 *      factorial(5); //=> 120
 *      factorial(5); //=> 120
 *      count; //=> 1
 */
module.exports = _curry2(function memoizeWith(mFn, fn) {
  var cache = {};
  return _arity(fn.length, function() {
    var key = mFn.apply(this, arguments);
    if (!_has(key, cache)) {
      cache[key] = fn.apply(this, arguments);
    }
    return cache[key];
  });
});


/***/ }),
/* 759 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(650);


/**
 * Multiplies two numbers. Equivalent to `a * b` but curried.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Math
 * @sig Number -> Number -> Number
 * @param {Number} a The first value.
 * @param {Number} b The second value.
 * @return {Number} The result of `a * b`.
 * @see R.divide
 * @example
 *
 *      var double = R.multiply(2);
 *      var triple = R.multiply(3);
 *      double(3);       //=>  6
 *      triple(4);       //=> 12
 *      R.multiply(2, 5);  //=> 10
 */
module.exports = _curry2(function multiply(a, b) { return a * b; });


/***/ }),
/* 760 */
/***/ (function(module, exports, __webpack_require__) {

var _curry1 = __webpack_require__(651);


/**
 * A function that returns the `!` of its argument. It will return `true` when
 * passed false-y value, and `false` when passed a truth-y one.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Logic
 * @sig * -> Boolean
 * @param {*} a any value
 * @return {Boolean} the logical inverse of passed argument.
 * @see R.complement
 * @example
 *
 *      R.not(true); //=> false
 *      R.not(false); //=> true
 *      R.not(0); //=> true
 *      R.not(1); //=> false
 */
module.exports = _curry1(function not(a) {
  return !a;
});


/***/ }),
/* 761 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(650);


/**
 * Creates an object containing a single key:value pair.
 *
 * @func
 * @memberOf R
 * @since v0.18.0
 * @category Object
 * @sig String -> a -> {String:a}
 * @param {String} key
 * @param {*} val
 * @return {Object}
 * @see R.pair
 * @example
 *
 *      var matchPhrases = R.compose(
 *        R.objOf('must'),
 *        R.map(R.objOf('match_phrase'))
 *      );
 *      matchPhrases(['foo', 'bar', 'baz']); //=> {must: [{match_phrase: 'foo'}, {match_phrase: 'bar'}, {match_phrase: 'baz'}]}
 */
module.exports = _curry2(function objOf(key, val) {
  var obj = {};
  obj[key] = val;
  return obj;
});


/***/ }),
/* 762 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(650);


/**
 * Returns `true` if one or both of its arguments are `true`. Returns `false`
 * if both arguments are `false`.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Logic
 * @sig a -> b -> a | b
 * @param {Any} a
 * @param {Any} b
 * @return {Any} the first argument if truthy, otherwise the second argument.
 * @see R.either
 * @example
 *
 *      R.or(true, true); //=> true
 *      R.or(true, false); //=> true
 *      R.or(false, true); //=> true
 *      R.or(false, false); //=> false
 */
module.exports = _curry2(function or(a, b) {
  return a || b;
});


/***/ }),
/* 763 */
/***/ (function(module, exports, __webpack_require__) {

var _curry3 = __webpack_require__(652);


/**
 * Returns the result of "setting" the portion of the given data structure
 * focused by the given lens to the result of applying the given function to
 * the focused value.
 *
 * @func
 * @memberOf R
 * @since v0.16.0
 * @category Object
 * @typedefn Lens s a = Functor f => (a -> f a) -> s -> f s
 * @sig Lens s a -> (a -> a) -> s -> s
 * @param {Lens} lens
 * @param {*} v
 * @param {*} x
 * @return {*}
 * @see R.prop, R.lensIndex, R.lensProp
 * @example
 *
 *      var headLens = R.lensIndex(0);
 *
 *      R.over(headLens, R.toUpper, ['foo', 'bar', 'baz']); //=> ['FOO', 'bar', 'baz']
 */
module.exports = (function() {
  // `Identity` is a functor that holds a single value, where `map` simply
  // transforms the held value with the provided function.
  var Identity = function(x) {
    return {value: x, map: function(f) { return Identity(f(x)); }};
  };

  return _curry3(function over(lens, f, x) {
    // The value returned by the getter function is first transformed with `f`,
    // then set as the value of an `Identity`. This is then mapped over with the
    // setter function of the lens.
    return lens(function(y) { return Identity(f(y)); })(x).value;
  });
}());


/***/ }),
/* 764 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(650);


/**
 * Similar to `pick` except that this one includes a `key: undefined` pair for
 * properties that don't exist.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Object
 * @sig [k] -> {k: v} -> {k: v}
 * @param {Array} names an array of String property names to copy onto a new object
 * @param {Object} obj The object to copy from
 * @return {Object} A new object with only properties from `names` on it.
 * @see R.pick
 * @example
 *
 *      R.pickAll(['a', 'd'], {a: 1, b: 2, c: 3, d: 4}); //=> {a: 1, d: 4}
 *      R.pickAll(['a', 'e', 'f'], {a: 1, b: 2, c: 3, d: 4}); //=> {a: 1, e: undefined, f: undefined}
 */
module.exports = _curry2(function pickAll(names, obj) {
  var result = {};
  var idx = 0;
  var len = names.length;
  while (idx < len) {
    var name = names[idx];
    result[name] = obj[name];
    idx += 1;
  }
  return result;
});


/***/ }),
/* 765 */
/***/ (function(module, exports, __webpack_require__) {

var _arity = __webpack_require__(661);
var _pipe = __webpack_require__(865);
var reduce = __webpack_require__(663);
var tail = __webpack_require__(711);


/**
 * Performs left-to-right function composition. The leftmost function may have
 * any arity; the remaining functions must be unary.
 *
 * In some libraries this function is named `sequence`.
 *
 * **Note:** The result of pipe is not automatically curried.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig (((a, b, ..., n) -> o), (o -> p), ..., (x -> y), (y -> z)) -> ((a, b, ..., n) -> z)
 * @param {...Function} functions
 * @return {Function}
 * @see R.compose
 * @example
 *
 *      var f = R.pipe(Math.pow, R.negate, R.inc);
 *
 *      f(3, 4); // -(3^4) + 1
 * @symb R.pipe(f, g, h)(a, b) = h(g(f(a, b)))
 */
module.exports = function pipe() {
  if (arguments.length === 0) {
    throw new Error('pipe requires at least one argument');
  }
  return _arity(arguments[0].length,
                reduce(_pipe, arguments[0], tail(arguments)));
};


/***/ }),
/* 766 */
/***/ (function(module, exports, __webpack_require__) {

var _arity = __webpack_require__(661);
var _pipeP = __webpack_require__(866);
var reduce = __webpack_require__(663);
var tail = __webpack_require__(711);


/**
 * Performs left-to-right composition of one or more Promise-returning
 * functions. The leftmost function may have any arity; the remaining functions
 * must be unary.
 *
 * @func
 * @memberOf R
 * @since v0.10.0
 * @category Function
 * @sig ((a -> Promise b), (b -> Promise c), ..., (y -> Promise z)) -> (a -> Promise z)
 * @param {...Function} functions
 * @return {Function}
 * @see R.composeP
 * @example
 *
 *      //  followersForUser :: String -> Promise [User]
 *      var followersForUser = R.pipeP(db.getUserById, db.getFollowers);
 */
module.exports = function pipeP() {
  if (arguments.length === 0) {
    throw new Error('pipeP requires at least one argument');
  }
  return _arity(arguments[0].length,
                reduce(_pipeP, arguments[0], tail(arguments)));
};


/***/ }),
/* 767 */
/***/ (function(module, exports, __webpack_require__) {

var _concat = __webpack_require__(660);
var _curry2 = __webpack_require__(650);


/**
 * Returns a new list with the given element at the front, followed by the
 * contents of the list.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig a -> [a] -> [a]
 * @param {*} el The item to add to the head of the output list.
 * @param {Array} list The array to add to the tail of the output list.
 * @return {Array} A new array.
 * @see R.append
 * @example
 *
 *      R.prepend('fee', ['fi', 'fo', 'fum']); //=> ['fee', 'fi', 'fo', 'fum']
 */
module.exports = _curry2(function prepend(el, list) {
  return _concat([el], list);
});


/***/ }),
/* 768 */
/***/ (function(module, exports, __webpack_require__) {

var _curry3 = __webpack_require__(652);


/**
 * Returns a single item by iterating through the list, successively calling
 * the iterator function and passing it an accumulator value and the current
 * value from the array, and then passing the result to the next call.
 *
 * Similar to [`reduce`](#reduce), except moves through the input list from the
 * right to the left.
 *
 * The iterator function receives two values: *(value, acc)*, while the arguments'
 * order of `reduce`'s iterator function is *(acc, value)*.
 *
 * Note: `R.reduceRight` does not skip deleted or unassigned indices (sparse
 * arrays), unlike the native `Array.prototype.reduceRight` method. For more details
 * on this behavior, see:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduceRight#Description
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig (a, b -> b) -> b -> [a] -> b
 * @param {Function} fn The iterator function. Receives two values, the current element from the array
 *        and the accumulator.
 * @param {*} acc The accumulator value.
 * @param {Array} list The list to iterate over.
 * @return {*} The final, accumulated value.
 * @see R.reduce, R.addIndex
 * @example
 *
 *      R.reduceRight(R.subtract, 0, [1, 2, 3, 4]) // => (1 - (2 - (3 - (4 - 0)))) = -2
 *          -               -2
 *         / \              / \
 *        1   -            1   3
 *           / \              / \
 *          2   -     ==>    2  -1
 *             / \              / \
 *            3   -            3   4
 *               / \              / \
 *              4   0            4   0
 *
 * @symb R.reduceRight(f, a, [b, c, d]) = f(b, f(c, f(d, a)))
 */
module.exports = _curry3(function reduceRight(fn, acc, list) {
  var idx = list.length - 1;
  while (idx >= 0) {
    acc = fn(list[idx], acc);
    idx -= 1;
  }
  return acc;
});


/***/ }),
/* 769 */
/***/ (function(module, exports, __webpack_require__) {

var _curry3 = __webpack_require__(652);


/**
 * Removes the sub-list of `list` starting at index `start` and containing
 * `count` elements. _Note that this is not destructive_: it returns a copy of
 * the list with the changes.
 * <small>No lists have been harmed in the application of this function.</small>
 *
 * @func
 * @memberOf R
 * @since v0.2.2
 * @category List
 * @sig Number -> Number -> [a] -> [a]
 * @param {Number} start The position to start removing elements
 * @param {Number} count The number of elements to remove
 * @param {Array} list The list to remove from
 * @return {Array} A new Array with `count` elements from `start` removed.
 * @example
 *
 *      R.remove(2, 3, [1,2,3,4,5,6,7,8]); //=> [1,2,6,7,8]
 */
module.exports = _curry3(function remove(start, count, list) {
  var result = Array.prototype.slice.call(list, 0);
  result.splice(start, count);
  return result;
});


/***/ }),
/* 770 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(650);
var ap = __webpack_require__(697);
var map = __webpack_require__(657);
var prepend = __webpack_require__(767);
var reduceRight = __webpack_require__(768);


/**
 * Transforms a [Traversable](https://github.com/fantasyland/fantasy-land#traversable)
 * of [Applicative](https://github.com/fantasyland/fantasy-land#applicative) into an
 * Applicative of Traversable.
 *
 * Dispatches to the `sequence` method of the second argument, if present.
 *
 * @func
 * @memberOf R
 * @since v0.19.0
 * @category List
 * @sig (Applicative f, Traversable t) => (a -> f a) -> t (f a) -> f (t a)
 * @param {Function} of
 * @param {*} traversable
 * @return {*}
 * @see R.traverse
 * @example
 *
 *      R.sequence(Maybe.of, [Just(1), Just(2), Just(3)]);   //=> Just([1, 2, 3])
 *      R.sequence(Maybe.of, [Just(1), Just(2), Nothing()]); //=> Nothing()
 *
 *      R.sequence(R.of, Just([1, 2, 3])); //=> [Just(1), Just(2), Just(3)]
 *      R.sequence(R.of, Nothing());       //=> [Nothing()]
 */
module.exports = _curry2(function sequence(of, traversable) {
  return typeof traversable.sequence === 'function' ?
    traversable.sequence(of) :
    reduceRight(function(x, acc) { return ap(map(prepend, x), acc); },
                of([]),
                traversable);
});


/***/ }),
/* 771 */
/***/ (function(module, exports, __webpack_require__) {

var add = __webpack_require__(679);
var reduce = __webpack_require__(663);


/**
 * Adds together all the elements of a list.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Math
 * @sig [Number] -> Number
 * @param {Array} list An array of numbers
 * @return {Number} The sum of all the numbers in the list.
 * @see R.reduce
 * @example
 *
 *      R.sum([2,4,6,8,100,1]); //=> 121
 */
module.exports = reduce(add, 0);


/***/ }),
/* 772 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(650);
var drop = __webpack_require__(736);


/**
 * Returns a new list containing the last `n` elements of the given list.
 * If `n > list.length`, returns a list of `list.length` elements.
 *
 * @func
 * @memberOf R
 * @since v0.16.0
 * @category List
 * @sig Number -> [a] -> [a]
 * @sig Number -> String -> String
 * @param {Number} n The number of elements to return.
 * @param {Array} xs The collection to consider.
 * @return {Array}
 * @see R.dropLast
 * @example
 *
 *      R.takeLast(1, ['foo', 'bar', 'baz']); //=> ['baz']
 *      R.takeLast(2, ['foo', 'bar', 'baz']); //=> ['bar', 'baz']
 *      R.takeLast(3, ['foo', 'bar', 'baz']); //=> ['foo', 'bar', 'baz']
 *      R.takeLast(4, ['foo', 'bar', 'baz']); //=> ['foo', 'bar', 'baz']
 *      R.takeLast(3, 'ramda');               //=> 'mda'
 */
module.exports = _curry2(function takeLast(n, xs) {
  return drop(n >= 0 ? xs.length - n : 0, xs);
});


/***/ }),
/* 773 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(650);


/**
 * Calls an input function `n` times, returning an array containing the results
 * of those function calls.
 *
 * `fn` is passed one argument: The current value of `n`, which begins at `0`
 * and is gradually incremented to `n - 1`.
 *
 * @func
 * @memberOf R
 * @since v0.2.3
 * @category List
 * @sig (Number -> a) -> Number -> [a]
 * @param {Function} fn The function to invoke. Passed one argument, the current value of `n`.
 * @param {Number} n A value between `0` and `n - 1`. Increments after each function call.
 * @return {Array} An array containing the return values of all calls to `fn`.
 * @see R.repeat
 * @example
 *
 *      R.times(R.identity, 5); //=> [0, 1, 2, 3, 4]
 * @symb R.times(f, 0) = []
 * @symb R.times(f, 1) = [f(0)]
 * @symb R.times(f, 2) = [f(0), f(1)]
 */
module.exports = _curry2(function times(fn, n) {
  var len = Number(n);
  var idx = 0;
  var list;

  if (len < 0 || isNaN(len)) {
    throw new RangeError('n must be a non-negative number');
  }
  list = new Array(len);
  while (idx < len) {
    list[idx] = fn(idx);
    idx += 1;
  }
  return list;
});


/***/ }),
/* 774 */
/***/ (function(module, exports, __webpack_require__) {

var _Set = __webpack_require__(853);
var _curry2 = __webpack_require__(650);


/**
 * Returns a new list containing only one copy of each element in the original
 * list, based upon the value returned by applying the supplied function to
 * each list element. Prefers the first item if the supplied function produces
 * the same value on two items. [`R.equals`](#equals) is used for comparison.
 *
 * @func
 * @memberOf R
 * @since v0.16.0
 * @category List
 * @sig (a -> b) -> [a] -> [a]
 * @param {Function} fn A function used to produce a value to use during comparisons.
 * @param {Array} list The array to consider.
 * @return {Array} The list of unique items.
 * @example
 *
 *      R.uniqBy(Math.abs, [-1, -5, 2, 10, 1, 2]); //=> [-1, -5, 2, 10]
 */
module.exports = _curry2(function uniqBy(fn, list) {
  var set = new _Set();
  var result = [];
  var idx = 0;
  var appliedItem, item;

  while (idx < list.length) {
    item = list[idx];
    appliedItem = fn(item);
    if (set.add(appliedItem)) {
      result.push(item);
    }
    idx += 1;
  }
  return result;
});


/***/ }),
/* 775 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(650);
var curryN = __webpack_require__(655);


/**
 * Accepts a function `fn` and a list of transformer functions and returns a
 * new curried function. When the new function is invoked, it calls the
 * function `fn` with parameters consisting of the result of calling each
 * supplied handler on successive arguments to the new function.
 *
 * If more arguments are passed to the returned function than transformer
 * functions, those arguments are passed directly to `fn` as additional
 * parameters. If you expect additional arguments that don't need to be
 * transformed, although you can ignore them, it's best to pass an identity
 * function so that the new function reports the correct arity.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig (x1 -> x2 -> ... -> z) -> [(a -> x1), (b -> x2), ...] -> (a -> b -> ... -> z)
 * @param {Function} fn The function to wrap.
 * @param {Array} transformers A list of transformer functions
 * @return {Function} The wrapped function.
 * @see R.converge
 * @example
 *
 *      R.useWith(Math.pow, [R.identity, R.identity])(3, 4); //=> 81
 *      R.useWith(Math.pow, [R.identity, R.identity])(3)(4); //=> 81
 *      R.useWith(Math.pow, [R.dec, R.inc])(3, 4); //=> 32
 *      R.useWith(Math.pow, [R.dec, R.inc])(3)(4); //=> 32
 * @symb R.useWith(f, [g, h])(a, b) = f(g(a), h(b))
 */
module.exports = _curry2(function useWith(fn, transformers) {
  return curryN(transformers.length, function() {
    var args = [];
    var idx = 0;
    while (idx < transformers.length) {
      args.push(transformers[idx].call(this, arguments[idx]));
      idx += 1;
    }
    return fn.apply(this, args.concat(Array.prototype.slice.call(arguments, transformers.length)));
  });
});


/***/ }),
/* 776 */
/***/ (function(module, exports, __webpack_require__) {

var _curry1 = __webpack_require__(651);
var keys = __webpack_require__(662);


/**
 * Returns a list of all the enumerable own properties of the supplied object.
 * Note that the order of the output array is not guaranteed across different
 * JS platforms.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Object
 * @sig {k: v} -> [v]
 * @param {Object} obj The object to extract values from
 * @return {Array} An array of the values of the object's own properties.
 * @see R.valuesIn, R.keys
 * @example
 *
 *      R.values({a: 1, b: 2, c: 3}); //=> [1, 2, 3]
 */
module.exports = _curry1(function values(obj) {
  var props = keys(obj);
  var len = props.length;
  var vals = [];
  var idx = 0;
  while (idx < len) {
    vals[idx] = obj[props[idx]];
    idx += 1;
  }
  return vals;
});


/***/ }),
/* 777 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(650);
var _has = __webpack_require__(656);


/**
 * Takes a spec object and a test object; returns true if the test satisfies
 * the spec. Each of the spec's own properties must be a predicate function.
 * Each predicate is applied to the value of the corresponding property of the
 * test object. `where` returns true if all the predicates return true, false
 * otherwise.
 *
 * `where` is well suited to declaratively expressing constraints for other
 * functions such as [`filter`](#filter) and [`find`](#find).
 *
 * @func
 * @memberOf R
 * @since v0.1.1
 * @category Object
 * @sig {String: (* -> Boolean)} -> {String: *} -> Boolean
 * @param {Object} spec
 * @param {Object} testObj
 * @return {Boolean}
 * @example
 *
 *      // pred :: Object -> Boolean
 *      var pred = R.where({
 *        a: R.equals('foo'),
 *        b: R.complement(R.equals('bar')),
 *        x: R.gt(R.__, 10),
 *        y: R.lt(R.__, 20)
 *      });
 *
 *      pred({a: 'foo', b: 'xxx', x: 11, y: 19}); //=> true
 *      pred({a: 'xxx', b: 'xxx', x: 11, y: 19}); //=> false
 *      pred({a: 'foo', b: 'bar', x: 11, y: 19}); //=> false
 *      pred({a: 'foo', b: 'xxx', x: 10, y: 19}); //=> false
 *      pred({a: 'foo', b: 'xxx', x: 11, y: 20}); //=> false
 */
module.exports = _curry2(function where(spec, testObj) {
  for (var prop in spec) {
    if (_has(prop, spec) && !spec[prop](testObj[prop])) {
      return false;
    }
  }
  return true;
});


/***/ }),
/* 778 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_filter__ = __webpack_require__(997);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_config_interface__ = __webpack_require__(678);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_config_interface___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__app_config_interface__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_config_constants__ = __webpack_require__(401);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__util_helper_service__ = __webpack_require__(664);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParlamentService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};








var ParlamentService = /** @class */ (function () {
    function ParlamentService(http, helper, config) {
        this.http = http;
        this.helper = helper;
        this.config = config;
    }
    ParlamentService.prototype.getPoliticanInfos = function (id) {
        return this.http.get(this.config.BACKEND_URL + '/councillor/' + id)
            .map(this.helper.extractData)
            .map(function (result) { return result.data; })
            .catch(this.helper.handleError);
    };
    ParlamentService.prototype.getFactionInfos = function (party) {
        var _this = this;
        return this.http.get(this.config.BACKEND_URL + '/faction/' + party.faction)
            .map(this.helper.extractData)
            .map(function (result) {
            return result.data.members.filter(function (member) {
                return _this.helper.getIdsForParty(party.name).includes(member.id);
            });
        })
            .catch(this.helper.handleError);
    };
    ParlamentService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(),
        __param(2, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* Inject */])(__WEBPACK_IMPORTED_MODULE_6__app_config_constants__["a" /* APP_CONFIG */])),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_7__util_helper_service__["a" /* Helper */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__util_helper_service__["a" /* Helper */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__app_config_interface__["IAppConfig"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__app_config_interface__["IAppConfig"]) === "function" && _c || Object])
    ], ParlamentService);
    return ParlamentService;
    var _a, _b, _c;
}());

//# sourceMappingURL=paralament.service.js.map

/***/ }),
/* 779 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__theme__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__theme_theme_configProvider__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_from__ = __webpack_require__(996);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_from___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_from__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_mentions_service__ = __webpack_require__(721);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__mentions_transformer_service__ = __webpack_require__(718);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__queryHelper__ = __webpack_require__(719);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MentionsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MentionsComponent = /** @class */ (function () {
    function MentionsComponent(mentionsDataService, transformationService, baconfig) {
        this.queryHelper = new __WEBPACK_IMPORTED_MODULE_6__queryHelper__["a" /* QueryHelper */]();
        this.mentionsDataService = mentionsDataService;
        this.mentionsTransformerService = transformationService;
        this.baConfig = baconfig;
    }
    MentionsComponent.prototype.ngOnInit = function () {
        this.mentions = this.getData();
        this.loadData();
    };
    MentionsComponent.prototype.ngOnChanges = function (changes) {
        if (changes['party'] || changes['politicianId']) {
            this.loadData();
        }
    };
    MentionsComponent.prototype.loadData = function () {
        var _this = this;
        this.mentionsDataService.getMentions(this.queryHelper.createQueryString(this.party, this.politicianId)).
            subscribe(function (mentionsData) {
            _this.chart.dataProvider = _this.mentionsTransformerService.orderedSumPerDay(mentionsData);
            _this.chart.validateData();
        });
    };
    MentionsComponent.prototype.chartReady = function (chart) {
        this.chart = chart;
    };
    MentionsComponent.prototype.getData = function () {
        var layoutColors = this.baConfig.get().colors;
        var graphColor = this.baConfig.get().colors.custom.dashboardLineChart;
        var theLineColor = this.baConfig.get().colors.dashboard.green;
        return {
            type: 'serial',
            theme: 'blur',
            marginTop: 15,
            marginRight: 15,
            responsive: {
                'enabled': true
            },
            titles: [{
                    text: 'Erwähnungen'
                }],
            dataProvider: [],
            categoryField: 'date',
            categoryAxis: {
                parseDates: true,
                gridAlpha: 0,
                color: layoutColors.defaultText,
                axisColor: layoutColors.defaultText
            },
            valueAxes: [
                {
                    minVerticalGap: 50,
                    gridAlpha: 0,
                    color: layoutColors.defaultText,
                    axisColor: layoutColors.defaultText
                }
            ],
            graphs: [
                {
                    id: 'g0',
                    bullet: 'none',
                    useLineColorForBulletBorder: true,
                    lineColor: theLineColor,
                    lineThickness: 1,
                    negativeLineColor: layoutColors.danger,
                    type: 'smoothedLine',
                    valueField: 'value',
                    fillAlphas: 1,
                    fillColorsField: 'lineColor'
                }
            ],
            chartCursor: {
                categoryBalloonDateFormat: 'DD MM',
                categoryBalloonColor: '#4285F4',
                categoryBalloonAlpha: 0.7,
                cursorAlpha: 0,
                valueLineEnabled: true,
                valueLineBalloonEnabled: true,
                valueLineAlpha: 0.5
            },
            dataDateFormat: 'DD MM YYYY',
            export: {
                enabled: true
            },
            creditsPosition: 'bottom-right',
            zoomOutButton: {
                backgroundColor: '#fff',
                backgroundAlpha: 0
            },
            zoomOutText: '',
            pathToImages: __WEBPACK_IMPORTED_MODULE_1__theme__["b" /* layoutPaths */].images.amChart
        };
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Input */])(),
        __metadata("design:type", String)
    ], MentionsComponent.prototype, "party", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Input */])(),
        __metadata("design:type", String)
    ], MentionsComponent.prototype, "politicianId", void 0);
    MentionsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
            selector: 'app-mentions',
            template: __webpack_require__(992),
            styles: [__webpack_require__(790)]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__services_mentions_service__["a" /* MentionsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_mentions_service__["a" /* MentionsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__mentions_transformer_service__["a" /* MentionsTransformerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__mentions_transformer_service__["a" /* MentionsTransformerService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__theme_theme_configProvider__["a" /* BaThemeConfigProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__theme_theme_configProvider__["a" /* BaThemeConfigProvider */]) === "function" && _c || Object])
    ], MentionsComponent);
    return MentionsComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=mentions.component.js.map

/***/ }),
/* 780 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TableData; });
var TableData = /** @class */ (function () {
    function TableData(date, value) {
        this.date = date;
        this.value = value;
    }
    return TableData;
}());

//# sourceMappingURL=tableData.js.map

/***/ }),
/* 781 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__theme__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__theme_theme_configProvider__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_sentiments_service__ = __webpack_require__(722);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__sentiments_transformer_service__ = __webpack_require__(720);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__queryHelper__ = __webpack_require__(719);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SentimentsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SentimentsComponent = /** @class */ (function () {
    function SentimentsComponent(sentimentDataService, sentimentTransformerService, baconfig) {
        this.queryHelper = new __WEBPACK_IMPORTED_MODULE_5__queryHelper__["a" /* QueryHelper */]();
        this.sentimentDataService = sentimentDataService;
        this.sentimentTransformerService = sentimentTransformerService;
        this.baConfig = baconfig;
    }
    SentimentsComponent.prototype.ngOnInit = function () {
        this.sentiments = this.getData();
        this.loadData();
    };
    SentimentsComponent.prototype.ngOnChanges = function (changes) {
        if (changes['party'] || changes['politicianId']) {
            this.loadData();
        }
    };
    SentimentsComponent.prototype.loadData = function () {
        var _this = this;
        this.sentimentDataService.getSentiments(this.queryHelper.createQueryString(this.party, this.politicianId)).
            subscribe(function (sentiments) {
            _this.chart.dataProvider = _this.sentimentTransformerService.orderedSumPerDay(sentiments);
            _this.chart.validateData();
        });
    };
    SentimentsComponent.prototype.chartReady = function (chart) {
        this.chart = chart;
    };
    SentimentsComponent.prototype.getData = function () {
        var layoutColors = this.baConfig.get().colors;
        var graphColor = this.baConfig.get().colors.custom.dashboardLineChart;
        var positiveColor = this.baConfig.get().colors.dashboard.green;
        var meanColor = this.baConfig.get().colors.dashboard.yellow;
        return {
            type: 'serial',
            theme: 'blur',
            marginTop: 15,
            marginRight: 15,
            responsive: {
                'enabled': true
            },
            titles: [{
                    text: 'Stimmung'
                }],
            dataProvider: [],
            categoryField: 'date',
            categoryAxis: {
                parseDates: true,
                gridAlpha: 0,
                color: layoutColors.defaultText,
                axisColor: layoutColors.defaultText
            },
            valueAxes: [
                {
                    minVerticalGap: 50,
                    gridAlpha: 0,
                    color: layoutColors.defaultText,
                    axisColor: layoutColors.defaultText
                }
            ],
            graphs: [
                {
                    id: 'g0',
                    bullet: 'none',
                    useLineColorForBulletBorder: true,
                    lineColor: positiveColor,
                    lineThickness: 1,
                    negativeLineColor: layoutColors.danger,
                    type: 'smoothedLine',
                    valueField: 'positive',
                    fillAlphas: 1,
                    fillColorsField: 'lineColor'
                },
                {
                    id: 'g1',
                    bullet: 'none',
                    useLineColorForBulletBorder: true,
                    lineColor: __WEBPACK_IMPORTED_MODULE_1__theme__["c" /* colorHelper */].hexToRgbA(graphColor, 0.15),
                    lineThickness: 1,
                    negativeLineColor: layoutColors.danger,
                    type: 'smoothedLine',
                    valueField: 'negative',
                    fillAlphas: 1,
                    fillColorsField: 'lineColor'
                },
                {
                    id: 'g2',
                    bullet: 'none',
                    useLineColorForBulletBorder: true,
                    lineColor: meanColor,
                    lineThickness: 1,
                    negativeLineColor: meanColor,
                    type: 'smoothedLine',
                    valueField: 'mean',
                    fillAlphas: 1,
                    fillColorsField: 'lineColor'
                }
            ],
            chartCursor: {
                categoryBalloonDateFormat: 'DD MM',
                categoryBalloonColor: '#4285F4',
                categoryBalloonAlpha: 0.7,
                cursorAlpha: 0,
                valueLineEnabled: true,
                valueLineBalloonEnabled: true,
                valueLineAlpha: 0.5
            },
            dataDateFormat: 'DD MM YYYY',
            export: {
                enabled: true
            },
            creditsPosition: 'bottom-right',
            zoomOutButton: {
                backgroundColor: '#fff',
                backgroundAlpha: 0
            },
            zoomOutText: '',
            pathToImages: __WEBPACK_IMPORTED_MODULE_1__theme__["b" /* layoutPaths */].images.amChart
        };
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Input */])(),
        __metadata("design:type", String)
    ], SentimentsComponent.prototype, "party", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Input */])(),
        __metadata("design:type", String)
    ], SentimentsComponent.prototype, "politicianId", void 0);
    SentimentsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
            selector: 'app-sentiments',
            template: __webpack_require__(993),
            styles: [__webpack_require__(791)]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_sentiments_service__["a" /* SentimentsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_sentiments_service__["a" /* SentimentsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__sentiments_transformer_service__["a" /* SentimentsTransformerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__sentiments_transformer_service__["a" /* SentimentsTransformerService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__theme_theme_configProvider__["a" /* BaThemeConfigProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__theme_theme_configProvider__["a" /* BaThemeConfigProvider */]) === "function" && _c || Object])
    ], SentimentsComponent);
    return SentimentsComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=sentiments.component.js.map

/***/ }),
/* 782 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TableData; });
var TableData = /** @class */ (function () {
    function TableData(date, positive, negative, mean) {
        this.date = date;
        this.positive = positive;
        this.negative = negative;
        this.mean = mean;
    }
    return TableData;
}());

//# sourceMappingURL=tableData.js.map

/***/ }),
/* 783 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TruncateDate; });
var TruncateDate = /** @class */ (function () {
    function TruncateDate() {
    }
    TruncateDate.prototype.truncateDateToDate = function (date) {
        return new Date(date.getFullYear(), date.getMonth(), date.getDate());
    };
    return TruncateDate;
}());

//# sourceMappingURL=truncateDate.js.map

/***/ }),
/* 784 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_helper_service__ = __webpack_require__(664);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Feed; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Feed = /** @class */ (function () {
    function Feed(_helper) {
        this._helper = _helper;
    }
    Feed.prototype.ngAfterViewInit = function () {
        this._helper.initTwitterWidget();
    };
    Feed.prototype.ngOnChanges = function (changes) {
        if (changes['selectedParty']) {
            this._helper.initTwitterWidget();
        }
    };
    Feed.prototype.ngOnInit = function () {
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Input */])(),
        __metadata("design:type", Object)
    ], Feed.prototype, "selectedParty", void 0);
    Feed = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
            selector: 'feed',
            template: __webpack_require__(994),
            styles: [__webpack_require__(792)]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__util_helper_service__["a" /* Helper */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__util_helper_service__["a" /* Helper */]) === "function" && _a || Object])
    ], Feed);
    return Feed;
    var _a;
}());

//# sourceMappingURL=feed.component.js.map

/***/ }),
/* 785 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QueryBuilder; });
var QueryBuilder = /** @class */ (function () {
    function QueryBuilder() {
    }
    QueryBuilder.prototype.queryFromPoliticianId = function (politicianId) {
        return "?politicianId=" + politicianId;
    };
    QueryBuilder.prototype.queryFromPartyName = function (party) {
        return "?party=" + party;
    };
    return QueryBuilder;
}());

//# sourceMappingURL=queryBuilder.js.map

/***/ }),
/* 786 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tile_tile_component__ = __webpack_require__(787);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_translation_module__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__theme_nga_module__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_app_pages_util_helper_service__ = __webpack_require__(664);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__tile_tile_service__ = __webpack_require__(717);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_paralament_service__ = __webpack_require__(778);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__diagrams_sentiments_sentiments_component__ = __webpack_require__(781);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__diagrams_mentions_mentions_component__ = __webpack_require__(779);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_mentions_service__ = __webpack_require__(721);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_sentiments_service__ = __webpack_require__(722);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__diagrams_sentiments_sentiments_transformer_service__ = __webpack_require__(720);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__diagrams_mentions_mentions_transformer_service__ = __webpack_require__(718);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__feed_feed_component__ = __webpack_require__(784);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__app_translation_module__["a" /* AppTranslationModule */],
                __WEBPACK_IMPORTED_MODULE_5__theme_nga_module__["a" /* NgaModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_15__feed_feed_component__["a" /* Feed */],
                __WEBPACK_IMPORTED_MODULE_3__tile_tile_component__["a" /* Tile */],
                __WEBPACK_IMPORTED_MODULE_9__diagrams_sentiments_sentiments_component__["a" /* SentimentsComponent */],
                __WEBPACK_IMPORTED_MODULE_10__diagrams_mentions_mentions_component__["a" /* MentionsComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_15__feed_feed_component__["a" /* Feed */],
                __WEBPACK_IMPORTED_MODULE_3__tile_tile_component__["a" /* Tile */],
                __WEBPACK_IMPORTED_MODULE_9__diagrams_sentiments_sentiments_component__["a" /* SentimentsComponent */],
                __WEBPACK_IMPORTED_MODULE_10__diagrams_mentions_mentions_component__["a" /* MentionsComponent */],
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_7__tile_tile_service__["a" /* TileService */],
                __WEBPACK_IMPORTED_MODULE_8__services_paralament_service__["a" /* ParlamentService */],
                __WEBPACK_IMPORTED_MODULE_6_app_pages_util_helper_service__["a" /* Helper */],
                __WEBPACK_IMPORTED_MODULE_11__services_mentions_service__["a" /* MentionsService */],
                __WEBPACK_IMPORTED_MODULE_12__services_sentiments_service__["a" /* SentimentsService */],
                __WEBPACK_IMPORTED_MODULE_13__diagrams_sentiments_sentiments_transformer_service__["a" /* SentimentsTransformerService */],
                __WEBPACK_IMPORTED_MODULE_14__diagrams_mentions_mentions_transformer_service__["a" /* MentionsTransformerService */]
            ]
        })
    ], SharedModule);
    return SharedModule;
}());

//# sourceMappingURL=shared.module.js.map

/***/ }),
/* 787 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tile_service__ = __webpack_require__(717);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_easy_pie_chart_dist_jquery_easypiechart_js__ = __webpack_require__(789);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_easy_pie_chart_dist_jquery_easypiechart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_easy_pie_chart_dist_jquery_easypiechart_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__theme_theme_configProvider__ = __webpack_require__(118);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Tile; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Tile = /** @class */ (function () {
    function Tile(_pieChartService, _baConfig) {
        this._pieChartService = _pieChartService;
        this._baConfig = _baConfig;
        this._init = false;
        //this.charts = this.data;
        this.pieColor = this._baConfig.get().colors.custom.dashboardPieChart;
    }
    Tile.prototype.ngOnInit = function () {
        this.loadTileData();
    };
    Tile.prototype.ngOnChanges = function (changes) {
        if (changes['party']) {
            this.loadTileData();
        }
    };
    Tile.prototype.loadTileData = function () {
        var _this = this;
        var queryParmas = '';
        if (this.politicianId) {
            queryParmas = '?politicianId=' + this.politicianId;
        }
        else if (this.party) {
            queryParmas = '?party=' + this.party;
        }
        if (!this.politicianId) {
            this._pieChartService.getUsersToday(queryParmas).subscribe(function (data) {
                _this.usersToday = data;
            });
        }
        this._pieChartService.getTweetsToday(queryParmas).subscribe(function (data) {
            _this.tweetsToday = data;
        });
        this._pieChartService.getTrendingTopics(queryParmas).subscribe(function (data) {
            _this.trendingTopics = data.slice(0, 3).map(function (ele) { return '#' + ele; });
        });
    };
    Tile.prototype.ngAfterViewInit = function () {
        if (!this._init) {
            this._init = true;
        }
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Input */])(),
        __metadata("design:type", Object)
    ], Tile.prototype, "politicianId", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Input */])(),
        __metadata("design:type", Object)
    ], Tile.prototype, "party", void 0);
    Tile = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
            selector: 'tile',
            template: __webpack_require__(995),
            styles: [__webpack_require__(793)]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__tile_service__["a" /* TileService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__tile_service__["a" /* TileService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__theme_theme_configProvider__["a" /* BaThemeConfigProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__theme_theme_configProvider__["a" /* BaThemeConfigProvider */]) === "function" && _b || Object])
    ], Tile);
    return Tile;
    var _a, _b;
}());

//# sourceMappingURL=tile.component.js.map

/***/ }),
/* 788 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MAPPING; });
var MAPPING = [
    {
        "id": "743779500341792768",
        "person_id": 4199,
        "name": "seilergraf",
        "party": "SP",
        "rat": "NR"
    },
    {
        "id": "2948791281",
        "person_id": 4061,
        "name": "th_hardegger",
        "party": "SP",
        "rat": "NR"
    },
    {
        "id": "2696249536",
        "person_id": 4131,
        "name": "claufriedl",
        "party": "SP",
        "rat": "NR"
    },
    {
        "id": "2613366038",
        "person_id": 1125,
        "name": "ChantalGallade",
        "party": "SP",
        "rat": "NR"
    },
    {
        "id": "2536865558",
        "person_id": 4121,
        "name": "BaGysi",
        "party": "SP",
        "rat": "NR"
    },
    {
        "id": "2527505330",
        "person_id": 3887,
        "name": "AlfredHeer",
        "party": "SVP",
        "rat": "NR"
    },
    {
        "id": "2452772930",
        "person_id": 4070,
        "name": "martin_candinas",
        "party": "CVP",
        "rat": "NR"
    },
    {
        "id": "2341633765",
        "person_id": 4031,
        "name": "MajaIngold",
        "party": "EVP",
        "rat": "NR"
    },
    {
        "id": "2226700633",
        "person_id": 4036,
        "name": "MarianneStreiff",
        "party": "EVP",
        "rat": "NR"
    },
    {
        "id": "1543019749",
        "person_id": 4094,
        "name": "LorenzHess",
        "party": "BDP",
        "rat": "NR"
    },
    {
        "id": "1530247224",
        "person_id": 4095,
        "name": "RegulaRytz",
        "party": "GPS",
        "rat": "NR"
    },
    {
        "id": "1360306513",
        "person_id": 4101,
        "name": "BulliardMarbach",
        "party": "CVP",
        "rat": "NR"
    },
    {
        "id": "1307125520",
        "person_id": 4129,
        "name": "verenaherzog",
        "party": "SVP",
        "rat": "NR"
    },
    {
        "id": "1228066279",
        "person_id": 4130,
        "name": "nmasshardt",
        "party": "SP",
        "rat": "NR"
    },
    {
        "id": "1077680574",
        "person_id": 3890,
        "name": "HurterThomas",
        "party": "SVP",
        "rat": "NR"
    },
    {
        "id": "1052528581",
        "person_id": 3899,
        "name": "enussbi",
        "party": "SP",
        "rat": "NR"
    },
    {
        "id": "1017350089",
        "person_id": 3876,
        "name": "Yvette67Yvette",
        "party": "SVP",
        "rat": "NR"
    },
    {
        "id": "991720068",
        "person_id": 4072,
        "name": "fregazzi",
        "party": "CVP",
        "rat": "NR"
    },
    {
        "id": "847717320",
        "person_id": 3830,
        "name": "MarinaCarobbio",
        "party": "SP",
        "rat": "NR"
    },
    {
        "id": "815578430",
        "person_id": 4018,
        "name": "MaireJack",
        "party": "SP",
        "rat": "NR"
    },
    {
        "id": "804958800",
        "person_id": 540,
        "name": "lombardi1956",
        "party": "CVP",
        "rat": "SR"
    },
    {
        "id": "780565772",
        "person_id": 4134,
        "name": "MartinaMunz",
        "party": "SP",
        "rat": "NR"
    },
    {
        "id": "778644518",
        "person_id": 1279,
        "name": "NordmannRoger",
        "party": "SP",
        "rat": "NR"
    },
    {
        "id": "627501106",
        "person_id": 1124,
        "name": "DdeBuman",
        "party": "CVP",
        "rat": "NR"
    },
    {
        "id": "621159422",
        "person_id": 4109,
        "name": "Valerie_Piller",
        "party": "SP",
        "rat": "NR"
    },
    {
        "id": "619225869",
        "person_id": 4079,
        "name": "fderder",
        "party": "FDP",
        "rat": "NR"
    },
    {
        "id": "617269323",
        "person_id": 3921,
        "name": "GraberKonrad",
        "party": "CVP",
        "rat": "SR"
    },
    {
        "id": "607353825",
        "person_id": 3923,
        "name": "ada_marra",
        "party": "SP",
        "rat": "NR"
    },
    {
        "id": "546752881",
        "person_id": 91,
        "name": "UGiezendanner",
        "party": "SVP",
        "rat": "NR"
    },
    {
        "id": "529478391",
        "person_id": 172,
        "name": "PaulRechsteiner",
        "party": "SP",
        "rat": "SR"
    },
    {
        "id": "485885985",
        "person_id": 4113,
        "name": "ManuelTornare",
        "party": "SP",
        "rat": "NR"
    },
    {
        "id": "463149099",
        "person_id": 4083,
        "name": "Juerg_Grossen",
        "party": "GLP",
        "rat": "NR"
    },
    {
        "id": "458597614",
        "person_id": 4063,
        "name": "MullerAltermatt",
        "party": "CVP",
        "rat": "NR"
    },
    {
        "id": "444935177",
        "person_id": 1337,
        "name": "idamicha",
        "party": "CVP",
        "rat": "NR"
    },
    {
        "id": "442685639",
        "person_id": 4075,
        "name": "AndreaCaroniAR",
        "party": "FDP",
        "rat": "SR"
    },
    {
        "id": "406232148",
        "person_id": 4091,
        "name": "MathiasReynard",
        "party": "SP",
        "rat": "NR"
    },
    {
        "id": "379014467",
        "person_id": 341,
        "name": "votrevoix",
        "party": "SP",
        "rat": "SR"
    },
    {
        "id": "365423665",
        "person_id": 4116,
        "name": "PetraGoessi",
        "party": "FDP",
        "rat": "NR"
    },
    {
        "id": "350243582",
        "person_id": 214,
        "name": "LuziStamm",
        "party": "SVP",
        "rat": "NR"
    },
    {
        "id": "350198606",
        "person_id": 4073,
        "name": "RobiPanta",
        "party": "LEGA",
        "rat": "NR"
    },
    {
        "id": "332184640",
        "person_id": 487,
        "name": "SusanneSlo",
        "party": "SP",
        "rat": "NR"
    },
    {
        "id": "327254073",
        "person_id": 4118,
        "name": "Ch_Lohr",
        "party": "CVP",
        "rat": "NR"
    },
    {
        "id": "323132835",
        "person_id": 4046,
        "name": "LorenzQuadri",
        "party": "LEGA",
        "rat": "NR"
    },
    {
        "id": "304379532",
        "person_id": 1153,
        "name": "RuediNoser",
        "party": "FDP",
        "rat": "SR"
    },
    {
        "id": "303319566",
        "person_id": 1129,
        "name": "SchenkerSilvia",
        "party": "SP",
        "rat": "NR"
    },
    {
        "id": "280789941",
        "person_id": 4049,
        "name": "M_Aebischer",
        "party": "SP",
        "rat": "NR"
    },
    {
        "id": "278262326",
        "person_id": 4138,
        "name": "BarazzoneG",
        "party": "CVP",
        "rat": "NR"
    },
    {
        "id": "271271590",
        "person_id": 305,
        "name": "berberatdidier",
        "party": "SP",
        "rat": "SR"
    },
    {
        "id": "271068328",
        "person_id": 4086,
        "name": "ybuttet",
        "party": "CVP",
        "rat": "NR"
    },
    {
        "id": "270609583",
        "person_id": 3828,
        "name": "ignaziocassis",
        "party": "FDP",
        "rat": "NR"
    },
    {
        "id": "263582303",
        "person_id": 4040,
        "name": "Elisabeth_S_S",
        "party": "CVP",
        "rat": "NR"
    },
    {
        "id": "246714911",
        "person_id": 1295,
        "name": "EdithGraf",
        "party": "SP",
        "rat": "NR"
    },
    {
        "id": "244437560",
        "person_id": 4115,
        "name": "jcschwaab",
        "party": "SP",
        "rat": "NR"
    },
    {
        "id": "241509277",
        "person_id": 823,
        "name": "PascaleBruderer",
        "party": "SP",
        "rat": "SR"
    },
    {
        "id": "227087638",
        "person_id": 4069,
        "name": "yferi",
        "party": "SP",
        "rat": "NR"
    },
    {
        "id": "226922317",
        "person_id": 1139,
        "name": "ChristaMarkwald",
        "party": "FDP",
        "rat": "NR"
    },
    {
        "id": "217706717",
        "person_id": 1131,
        "name": "eviallemann",
        "party": "SP",
        "rat": "NR"
    },
    {
        "id": "196646702",
        "person_id": 3871,
        "name": "PirminBischof",
        "party": "CVP",
        "rat": "NR"
    },
    {
        "id": "190944081",
        "person_id": 3902,
        "name": "NatalieRickli",
        "party": "SVP",
        "rat": "NR"
    },
    {
        "id": "157431387",
        "person_id": 1120,
        "name": "CarloSommaruga",
        "party": "SP",
        "rat": "NR"
    },
    {
        "id": "155823857",
        "person_id": 1346,
        "name": "IsabelleMoret",
        "party": "FDP",
        "rat": "NR"
    },
    {
        "id": "149008275",
        "person_id": 4108,
        "name": "I_Chevalley",
        "party": "GLP",
        "rat": "NR"
    },
    {
        "id": "123362849",
        "person_id": 4059,
        "name": "beatflach",
        "party": "GLP",
        "rat": "NR"
    },
    {
        "id": "113616426",
        "person_id": 4082,
        "name": "BernhardGuhl",
        "party": "BDP",
        "rat": "NR"
    },
    {
        "id": "109517535",
        "person_id": 4141,
        "name": "HPPortmann",
        "party": "FDP",
        "rat": "NR"
    },
    {
        "id": "93878848",
        "person_id": 502,
        "name": "KathyRiklin",
        "party": "CVP",
        "rat": "NR"
    },
    {
        "id": "84155033",
        "person_id": 525,
        "name": "zanettiroberto",
        "party": "SP",
        "rat": "SR"
    },
    {
        "id": "75777484",
        "person_id": 4076,
        "name": "PhilippHadorn",
        "party": "SP",
        "rat": "NR"
    },
    {
        "id": "72560162",
        "person_id": 1288,
        "name": "Violapamherd",
        "party": "CVP",
        "rat": "NR"
    },
    {
        "id": "67100346",
        "person_id": 1156,
        "name": "beaheim",
        "party": "SP",
        "rat": "NR"
    },
    {
        "id": "61431883",
        "person_id": 307,
        "name": "SVPBrunner",
        "party": "SVP",
        "rat": "NR"
    },
    {
        "id": "50444931",
        "person_id": 3912,
        "name": "cwasi",
        "party": "FDP",
        "rat": "NR"
    },
    {
        "id": "50262858",
        "person_id": 4120,
        "name": "MarcoRomanoPPD",
        "party": "CVP",
        "rat": "NR"
    },
    {
        "id": "50047040",
        "person_id": 4058,
        "name": "JayBadran",
        "party": "SP",
        "rat": "NR"
    },
    {
        "id": "45513818",
        "person_id": 3904,
        "name": "SchmidFederer",
        "party": "CVP",
        "rat": "NR"
    },
    {
        "id": "40872955",
        "person_id": 1150,
        "name": "ChristianLevrat",
        "party": "SP",
        "rat": "NR"
    },
    {
        "id": "35465127",
        "person_id": 3888,
        "name": "hhiltpold",
        "party": "FDP",
        "rat": "NR"
    },
    {
        "id": "26531313",
        "person_id": 3901,
        "name": "lukasreimann",
        "party": "SVP",
        "rat": "NR"
    },
    {
        "id": "21436172",
        "person_id": 4057,
        "name": "cedricwermuth",
        "party": "SP",
        "rat": "NR"
    },
    {
        "id": "14675346",
        "person_id": 4093,
        "name": "bglaettli",
        "party": "GPS",
        "rat": "NR"
    },
    {
        "id": "14077586",
        "person_id": 3882,
        "name": "bastiengirod",
        "party": "SP",
        "rat": "NR"
    },
    {
        "id": "14077586",
        "person_id": 3882,
        "name": "bastiengirod",
        "party": "SP",
        "rat": "NR"
    },
    {
        "id": "2536784770",
        "person_id": 3914,
        "name": "RobertCramer_GE",
        "party": "GPS",
        "rat": "SR"
    },
    {
        "id": "1947128240",
        "person_id": 4205,
        "name": "Beat_Vonlanthen",
        "party": "CVP",
        "rat": "SR"
    },
    {
        "id": "603431624",
        "person_id": 4207,
        "name": "Damian_Mueller_",
        "party": "FDP",
        "rat": "SR"
    },
    {
        "id": "2832533567",
        "person_id": 4204,
        "name": "RiederBeat",
        "party": "CVP",
        "rat": "SR"
    },
    {
        "id": "2431017296",
        "person_id": 4145,
        "name": "Werner_Hoesli",
        "party": "SVP",
        "rat": "SR"
    },
    {
        "id": "132899636",
        "person_id": 1106,
        "name": "HaeberliKollerB",
        "party": "CVP",
        "rat": "SR"
    },
    {
        "id": "2154083999",
        "person_id": 4206,
        "name": "e_ettlin",
        "party": "CVP",
        "rat": "SR"
    },
    {
        "id": "3428301377",
        "person_id": 3879,
        "name": "OliFrancais",
        "party": "FDP",
        "rat": "SR"
    },
    {
        "id": "3246291543",
        "person_id": 3891,
        "name": "danieljositsch",
        "party": "SP",
        "rat": "SR"
    },
    {
        "id": "3290133496",
        "person_id": 4055,
        "name": "engler_stefan",
        "party": "CVP",
        "rat": "SR"
    },
    {
        "id": "3295223895",
        "person_id": 4026,
        "name": "RaphaelComteCE",
        "party": "FDP",
        "rat": "SR"
    },
    {
        "id": "2822483402",
        "person_id": 4191,
        "name": "BenoitGenecand",
        "party": "FDP",
        "rat": "NR"
    },
    {
        "id": "3064353419",
        "person_id": 173,
        "name": "maximilian_rei",
        "party": "SVP",
        "rat": "NR"
    },
    {
        "id": "3240586961",
        "person_id": 4189,
        "name": "ThierryBurkart",
        "party": "FDP",
        "rat": "NR"
    },
    {
        "id": "816301993799155712",
        "person_id": 4149,
        "name": "Chrige_Haesler",
        "party": "GPS",
        "rat": "NR"
    },
    {
        "id": "107053461",
        "person_id": 4197,
        "name": "minlimarti",
        "party": "SP",
        "rat": "NR"
    },
    {
        "id": "3063932104",
        "person_id": 4176,
        "name": "hansuelivogt",
        "party": "SVP",
        "rat": "NR"
    },
    {
        "id": "2870723938",
        "person_id": 3907,
        "name": "adelethorens",
        "party": "GPS",
        "rat": "NR"
    },
    {
        "id": "2870723938",
        "person_id": 3907,
        "name": "adelethorens",
        "party": "GPS",
        "rat": "NR"
    },
    {
        "id": "556256043",
        "person_id": 4173,
        "name": "SaSollberger",
        "party": "SVP",
        "rat": "NR"
    },
    {
        "id": "3374457514",
        "person_id": 806,
        "name": "nr_mayagraf",
        "party": "GPS",
        "rat": "NR"
    },
    {
        "id": "182760916",
        "person_id": 4185,
        "name": "FrickerJonas",
        "party": "GPS",
        "rat": "NR"
    },
    {
        "id": "3257088023",
        "person_id": 4184,
        "name": "SibelArslanBS",
        "party": "GPS",
        "rat": "NR"
    },
    {
        "id": "2881577681",
        "person_id": 4198,
        "name": "meyer_mattea",
        "party": "SP",
        "rat": "NR"
    },
    {
        "id": "62798697",
        "person_id": 4163,
        "name": "Erich_Hess",
        "party": "SVP",
        "rat": "NR"
    },
    {
        "id": "385293664",
        "person_id": 4174,
        "name": "BabaSteinemann",
        "party": "SVP",
        "rat": "NR"
    },
    {
        "id": "2982472295",
        "person_id": 4114,
        "name": "HansjoergKnecht",
        "party": "SVP",
        "rat": "NR"
    },
    {
        "id": "121068845",
        "person_id": 4178,
        "name": "zac1967",
        "party": "SVP",
        "rat": "NR"
    },
    {
        "id": "353662120",
        "person_id": 4158,
        "name": "ThomasBurgherr",
        "party": "SVP",
        "rat": "NR"
    },
    {
        "id": "605639477",
        "person_id": 4162,
        "name": "fgrueter",
        "party": "SVP",
        "rat": "NR"
    },
    {
        "id": "3221526790",
        "person_id": 1138,
        "name": "Martin_Baeumle",
        "party": "GLP",
        "rat": "NR"
    },
    {
        "id": "724584142344695808",
        "person_id": 4156,
        "name": "michael_buffat",
        "party": "SVP",
        "rat": "NR"
    },
    {
        "id": "3130690545",
        "person_id": 4066,
        "name": "QuadrantiR",
        "party": "BDP",
        "rat": "NR"
    },
    {
        "id": "222903677",
        "person_id": 4164,
        "name": "ChristianImark",
        "party": "SVP",
        "rat": "NR"
    },
    {
        "id": "761741430",
        "person_id": 4008,
        "name": "LandoltMartin",
        "party": "BDP",
        "rat": "NR"
    },
    {
        "id": "219076403",
        "person_id": 4203,
        "name": "anbarrile",
        "party": "SP",
        "rat": "NR"
    },
    {
        "id": "3329760406",
        "person_id": 4209,
        "name": "HUBigler",
        "party": "FDP",
        "rat": "NR"
    },
    {
        "id": "3301771943",
        "person_id": 4194,
        "name": "LaurentWehrli",
        "party": "FDP",
        "rat": "NR"
    },
    {
        "id": "2899280753",
        "person_id": 4123,
        "name": "uschneiderschue",
        "party": "SP",
        "rat": "NR"
    },
    {
        "id": "20442734",
        "person_id": 4193,
        "name": "nantermod",
        "party": "FDP",
        "rat": "NR"
    },
    {
        "id": "2882434546",
        "person_id": 4190,
        "name": "Marcel_Dobler",
        "party": "FDP",
        "rat": "NR"
    },
    {
        "id": "373194785",
        "person_id": 4188,
        "name": "FredericBorloz",
        "party": "FDP",
        "rat": "NR"
    },
    {
        "id": "716002872",
        "person_id": 4208,
        "name": "JauslinMatthias",
        "party": "FDP",
        "rat": "NR"
    },
    {
        "id": "1940472746",
        "person_id": 4182,
        "name": "ClaudeBegle",
        "party": "CVP",
        "rat": "NR"
    },
    {
        "id": "3354760547",
        "person_id": 3883,
        "name": "AliceGlauser",
        "party": "SVP",
        "rat": "NR"
    },
    {
        "id": "2449367689",
        "person_id": 4183,
        "name": "GMarchand_Balet",
        "party": "CVP",
        "rat": "NR"
    },
    {
        "id": "888380018673545216",
        "person_id": 4212,
        "name": "Thomas_Egger_NR",
        "party": "CVP",
        "rat": "NR"
    },
    {
        "id": "289393019",
        "person_id": 4159,
        "name": "marcochiesa74",
        "party": "SVP",
        "rat": "NR"
    },
    {
        "id": "3302607988",
        "person_id": 4180,
        "name": "th_ammann",
        "party": "CVP",
        "rat": "NR"
    },
    {
        "id": "3039132947",
        "person_id": 4067,
        "name": "BrandHeinz",
        "party": "SVP",
        "rat": "NR"
    },
    {
        "id": "235081966",
        "person_id": 4181,
        "name": "Agmur",
        "party": "CVP",
        "rat": "NR"
    },
    {
        "id": "2991955251",
        "person_id": 3898,
        "name": "YvesNidegger",
        "party": "SVP",
        "rat": "NR"
    },
    {
        "id": "256863130",
        "person_id": 4154,
        "name": "udcvr64",
        "party": "SVP",
        "rat": "NR"
    },
    {
        "id": "3070292500",
        "person_id": 3877,
        "name": "DorisFiala",
        "party": "FDP",
        "rat": "NR"
    },
    {
        "id": "43504217",
        "person_id": 4213,
        "name": "bendahan",
        "party": "SP",
        "rat": "NR"
    },
    {
        "id": "2841156604",
        "person_id": 4196,
        "name": "TimGuldimann",
        "party": "SP",
        "rat": "NR"
    },
    {
        "id": "4702673004",
        "person_id": 4060,
        "name": "SchneeDani67",
        "party": "FDP",
        "rat": "NR"
    },
    {
        "id": "3133285757",
        "person_id": 4172,
        "name": "WernerSalzmann",
        "party": "SVP",
        "rat": "NR"
    },
    {
        "id": "3096244845",
        "person_id": 4090,
        "name": "AmaudruzCeline",
        "party": "SVP",
        "rat": "NR"
    },
    {
        "id": "3291242279",
        "person_id": 1109,
        "name": "gerhardpfister",
        "party": "CVP",
        "rat": "NR"
    },
    {
        "id": "2860664668",
        "person_id": 1071,
        "name": "RuthHumbel",
        "party": "CVP",
        "rat": "NR"
    },
    {
        "id": "899322895528321024",
        "party": "NONE"
    }
];
//# sourceMappingURL=mapping.js.map

/***/ }),
/* 789 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**!
 * easy-pie-chart
 * Lightweight plugin to render simple, animated and retina optimized pie charts
 *
 * @license 
 * @author Robert Fleischmann <rendro87@gmail.com> (http://robert-fleischmann.de)
 * @version 2.1.7
 **/

(function (root, factory) {
  if (true) {
    // AMD. Register as an anonymous module unless amdModuleId is set
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(177)], __WEBPACK_AMD_DEFINE_RESULT__ = function (a0) {
      return (factory(a0));
    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports === 'object') {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = factory(require("jquery"));
  } else {
    factory(jQuery);
  }
}(this, function ($) {

/**
 * Renderer to render the chart on a canvas object
 * @param {DOMElement} el      DOM element to host the canvas (root of the plugin)
 * @param {object}     options options object of the plugin
 */
var CanvasRenderer = function(el, options) {
	var cachedBackground;
	var canvas = document.createElement('canvas');

	el.appendChild(canvas);

	if (typeof(G_vmlCanvasManager) === 'object') {
		G_vmlCanvasManager.initElement(canvas);
	}

	var ctx = canvas.getContext('2d');

	canvas.width = canvas.height = options.size;

	// canvas on retina devices
	var scaleBy = 1;
	if (window.devicePixelRatio > 1) {
		scaleBy = window.devicePixelRatio;
		canvas.style.width = canvas.style.height = [options.size, 'px'].join('');
		canvas.width = canvas.height = options.size * scaleBy;
		ctx.scale(scaleBy, scaleBy);
	}

	// move 0,0 coordinates to the center
	ctx.translate(options.size / 2, options.size / 2);

	// rotate canvas -90deg
	ctx.rotate((-1 / 2 + options.rotate / 180) * Math.PI);

	var radius = (options.size - options.lineWidth) / 2;
	if (options.scaleColor && options.scaleLength) {
		radius -= options.scaleLength + 2; // 2 is the distance between scale and bar
	}

	// IE polyfill for Date
	Date.now = Date.now || function() {
		return +(new Date());
	};

	/**
	 * Draw a circle around the center of the canvas
	 * @param {strong} color     Valid CSS color string
	 * @param {number} lineWidth Width of the line in px
	 * @param {number} percent   Percentage to draw (float between -1 and 1)
	 */
	var drawCircle = function(color, lineWidth, percent) {
		percent = Math.min(Math.max(-1, percent || 0), 1);
		var isNegative = percent <= 0 ? true : false;

		ctx.beginPath();
		ctx.arc(0, 0, radius, 0, Math.PI * 2 * percent, isNegative);

		ctx.strokeStyle = color;
		ctx.lineWidth = lineWidth;

		ctx.stroke();
	};

	/**
	 * Draw the scale of the chart
	 */
	var drawScale = function() {
		var offset;
		var length;

		ctx.lineWidth = 1;
		ctx.fillStyle = options.scaleColor;

		ctx.save();
		for (var i = 24; i > 0; --i) {
			if (i % 6 === 0) {
				length = options.scaleLength;
				offset = 0;
			} else {
				length = options.scaleLength * 0.6;
				offset = options.scaleLength - length;
			}
			ctx.fillRect(-options.size/2 + offset, 0, length, 1);
			ctx.rotate(Math.PI / 12);
		}
		ctx.restore();
	};

	/**
	 * Request animation frame wrapper with polyfill
	 * @return {function} Request animation frame method or timeout fallback
	 */
	var reqAnimationFrame = (function() {
		return  window.requestAnimationFrame ||
				window.webkitRequestAnimationFrame ||
				window.mozRequestAnimationFrame ||
				function(callback) {
					window.setTimeout(callback, 1000 / 60);
				};
	}());

	/**
	 * Draw the background of the plugin including the scale and the track
	 */
	var drawBackground = function() {
		if(options.scaleColor) drawScale();
		if(options.trackColor) drawCircle(options.trackColor, options.trackWidth || options.lineWidth, 1);
	};

  /**
    * Canvas accessor
   */
  this.getCanvas = function() {
    return canvas;
  };

  /**
    * Canvas 2D context 'ctx' accessor
   */
  this.getCtx = function() {
    return ctx;
  };

	/**
	 * Clear the complete canvas
	 */
	this.clear = function() {
		ctx.clearRect(options.size / -2, options.size / -2, options.size, options.size);
	};

	/**
	 * Draw the complete chart
	 * @param {number} percent Percent shown by the chart between -100 and 100
	 */
	this.draw = function(percent) {
		// do we need to render a background
		if (!!options.scaleColor || !!options.trackColor) {
			// getImageData and putImageData are supported
			if (ctx.getImageData && ctx.putImageData) {
				if (!cachedBackground) {
					drawBackground();
					cachedBackground = ctx.getImageData(0, 0, options.size * scaleBy, options.size * scaleBy);
				} else {
					ctx.putImageData(cachedBackground, 0, 0);
				}
			} else {
				this.clear();
				drawBackground();
			}
		} else {
			this.clear();
		}

		ctx.lineCap = options.lineCap;

		// if barcolor is a function execute it and pass the percent as a value
		var color;
		if (typeof(options.barColor) === 'function') {
			color = options.barColor(percent);
		} else {
			color = options.barColor;
		}

		// draw bar
		drawCircle(color, options.lineWidth, percent / 100);
	}.bind(this);

	/**
	 * Animate from some percent to some other percentage
	 * @param {number} from Starting percentage
	 * @param {number} to   Final percentage
	 */
	this.animate = function(from, to) {
		var startTime = Date.now();
		options.onStart(from, to);
		var animation = function() {
			var process = Math.min(Date.now() - startTime, options.animate.duration);
			var currentValue = options.easing(this, process, from, to - from, options.animate.duration);
			this.draw(currentValue);
			options.onStep(from, to, currentValue);
			if (process >= options.animate.duration) {
				options.onStop(from, to);
			} else {
				reqAnimationFrame(animation);
			}
		}.bind(this);

		reqAnimationFrame(animation);
	}.bind(this);
};

var EasyPieChart = function(el, opts) {
	var defaultOptions = {
		barColor: '#ef1e25',
		trackColor: '#f9f9f9',
		scaleColor: '#dfe0e0',
		scaleLength: 5,
		lineCap: 'round',
		lineWidth: 3,
		trackWidth: undefined,
		size: 110,
		rotate: 0,
		animate: {
			duration: 1000,
			enabled: true
		},
		easing: function (x, t, b, c, d) { // more can be found here: http://gsgd.co.uk/sandbox/jquery/easing/
			t = t / (d/2);
			if (t < 1) {
				return c / 2 * t * t + b;
			}
			return -c/2 * ((--t)*(t-2) - 1) + b;
		},
		onStart: function(from, to) {
			return;
		},
		onStep: function(from, to, currentValue) {
			return;
		},
		onStop: function(from, to) {
			return;
		}
	};

	// detect present renderer
	if (typeof(CanvasRenderer) !== 'undefined') {
		defaultOptions.renderer = CanvasRenderer;
	} else if (typeof(SVGRenderer) !== 'undefined') {
		defaultOptions.renderer = SVGRenderer;
	} else {
		throw new Error('Please load either the SVG- or the CanvasRenderer');
	}

	var options = {};
	var currentValue = 0;

	/**
	 * Initialize the plugin by creating the options object and initialize rendering
	 */
	var init = function() {
		this.el = el;
		this.options = options;

		// merge user options into default options
		for (var i in defaultOptions) {
			if (defaultOptions.hasOwnProperty(i)) {
				options[i] = opts && typeof(opts[i]) !== 'undefined' ? opts[i] : defaultOptions[i];
				if (typeof(options[i]) === 'function') {
					options[i] = options[i].bind(this);
				}
			}
		}

		// check for jQuery easing
		if (typeof(options.easing) === 'string' && typeof(jQuery) !== 'undefined' && jQuery.isFunction(jQuery.easing[options.easing])) {
			options.easing = jQuery.easing[options.easing];
		} else {
			options.easing = defaultOptions.easing;
		}

		// process earlier animate option to avoid bc breaks
		if (typeof(options.animate) === 'number') {
			options.animate = {
				duration: options.animate,
				enabled: true
			};
		}

		if (typeof(options.animate) === 'boolean' && !options.animate) {
			options.animate = {
				duration: 1000,
				enabled: options.animate
			};
		}

		// create renderer
		this.renderer = new options.renderer(el, options);

		// initial draw
		this.renderer.draw(currentValue);

		// initial update
		if (el.dataset && el.dataset.percent) {
			this.update(parseFloat(el.dataset.percent));
		} else if (el.getAttribute && el.getAttribute('data-percent')) {
			this.update(parseFloat(el.getAttribute('data-percent')));
		}
	}.bind(this);

	/**
	 * Update the value of the chart
	 * @param  {number} newValue Number between 0 and 100
	 * @return {object}          Instance of the plugin for method chaining
	 */
	this.update = function(newValue) {
		newValue = parseFloat(newValue);
		if (options.animate.enabled) {
			this.renderer.animate(currentValue, newValue);
		} else {
			this.renderer.draw(newValue);
		}
		currentValue = newValue;
		return this;
	}.bind(this);

	/**
	 * Disable animation
	 * @return {object} Instance of the plugin for method chaining
	 */
	this.disableAnimation = function() {
		options.animate.enabled = false;
		return this;
	};

	/**
	 * Enable animation
	 * @return {object} Instance of the plugin for method chaining
	 */
	this.enableAnimation = function() {
		options.animate.enabled = true;
		return this;
	};

	init();
};

$.fn.easyPieChart = function(options) {
	return this.each(function() {
		var instanceOptions;

		if (!$.data(this, 'easyPieChart')) {
			instanceOptions = $.extend({}, options, $(this).data());
			$.data(this, 'easyPieChart', new EasyPieChart(this, instanceOptions));
		}
	});
};


}));


/***/ }),
/* 790 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, ":host /deep/.dashboard-line-chart {\n  width: 100%;\n  height: 340px;\n  margin-top: -10px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 791 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, ":host /deep/.dashboard-line-chart {\n  width: 100%;\n  height: 340px;\n  margin-top: -10px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 792 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 793 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, ":host /deep/ .tiles {\n  color: #ffffff; }\n  :host /deep/ .tiles .tile-item-container {\n    position: relative;\n    padding: 0 15px;\n    float: left;\n    box-sizing: border-box; }\n    :host /deep/ .tiles .tile-item-container .card {\n      height: 114px; }\n  @media screen and (min-width: 1325px) {\n    :host /deep/ .tiles .tile-item-container {\n      -webkit-box-flex: 0;\n          -ms-flex: 0 0 75%;\n              flex: 0 0 75%; } }\n  @media screen and (min-width: 700px) and (max-width: 1325px) {\n    :host /deep/ .tiles .tile-item-container {\n      max-width: 75%;\n      -webkit-box-flex: 0;\n          -ms-flex: 0 0 75%;\n              flex: 0 0 75%; } }\n  @media screen and (max-width: 700px) {\n    :host /deep/ .tiles .tile-item-container {\n      max-width: 100%;\n      -webkit-box-flex: 0;\n          -ms-flex: 0 0 100%;\n              flex: 0 0 100%; } }\n  :host /deep/ .tiles .tile-item {\n    position: relative; }\n    :host /deep/ .tiles .tile-item .chart-icon {\n      position: absolute;\n      right: 0;\n      top: 3px; }\n  @media screen and (min-width: 1325px) and (max-width: 1650px), (min-width: 700px) and (max-width: 830px), (max-width: 400px) {\n    :host /deep/ .tiles .chart-icon {\n      display: none; } }\n  :host /deep/ .tiles .chart {\n    position: relative;\n    display: inline-block;\n    width: 84px;\n    height: 84px;\n    text-align: center;\n    float: left; }\n  :host /deep/ .tiles .chart canvas {\n    position: absolute;\n    top: 0;\n    left: 0; }\n  :host /deep/ .tiles .percent {\n    display: inline-block;\n    line-height: 84px;\n    z-index: 2;\n    font-size: 16px; }\n  :host /deep/ .tiles .percent:after {\n    content: '%';\n    margin-left: 0.1em;\n    font-size: .8em; }\n  :host /deep/ .tiles .description {\n    display: inline-block;\n    padding: 20px 0 0 20px;\n    font-size: 18px;\n    opacity: 0.9; }\n    :host /deep/ .tiles .description .description-stats {\n      padding-top: 8px;\n      font-size: 24px; }\n  :host /deep/ .tiles .trending {\n    padding: 0; }\n  :host /deep/ .tiles .angular {\n    margin-top: 100px; }\n  :host /deep/ .tiles .angular .chart {\n    margin-top: 0; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 794 */
/***/ (function(module, exports, __webpack_require__) {

var always = __webpack_require__(669);


/**
 * A function that always returns `false`. Any passed in parameters are ignored.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category Function
 * @sig * -> Boolean
 * @param {*}
 * @return {Boolean}
 * @see R.always, R.T
 * @example
 *
 *      R.F(); //=> false
 */
module.exports = always(false);


/***/ }),
/* 795 */
/***/ (function(module, exports, __webpack_require__) {

var always = __webpack_require__(669);


/**
 * A function that always returns `true`. Any passed in parameters are ignored.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category Function
 * @sig * -> Boolean
 * @param {*}
 * @return {Boolean}
 * @see R.always, R.F
 * @example
 *
 *      R.T(); //=> true
 */
module.exports = always(true);


/***/ }),
/* 796 */
/***/ (function(module, exports) {

/**
 * A special placeholder value used to specify "gaps" within curried functions,
 * allowing partial application of any combination of arguments, regardless of
 * their positions.
 *
 * If `g` is a curried ternary function and `_` is `R.__`, the following are
 * equivalent:
 *
 *   - `g(1, 2, 3)`
 *   - `g(_, 2, 3)(1)`
 *   - `g(_, _, 3)(1)(2)`
 *   - `g(_, _, 3)(1, 2)`
 *   - `g(_, 2, _)(1, 3)`
 *   - `g(_, 2)(1)(3)`
 *   - `g(_, 2)(1, 3)`
 *   - `g(_, 2)(_, 3)(1)`
 *
 * @constant
 * @memberOf R
 * @since v0.6.0
 * @category Function
 * @example
 *
 *      var greet = R.replace('{name}', R.__, 'Hello, {name}!');
 *      greet('Alice'); //=> 'Hello, Alice!'
 */
module.exports = {'@@functional/placeholder': true};


/***/ }),
/* 797 */
/***/ (function(module, exports, __webpack_require__) {

var _concat = __webpack_require__(660);
var _curry1 = __webpack_require__(651);
var curryN = __webpack_require__(655);


/**
 * Creates a new list iteration function from an existing one by adding two new
 * parameters to its callback function: the current index, and the entire list.
 *
 * This would turn, for instance, [`R.map`](#map) function into one that
 * more closely resembles `Array.prototype.map`. Note that this will only work
 * for functions in which the iteration callback function is the first
 * parameter, and where the list is the last parameter. (This latter might be
 * unimportant if the list parameter is not used.)
 *
 * @func
 * @memberOf R
 * @since v0.15.0
 * @category Function
 * @category List
 * @sig ((a ... -> b) ... -> [a] -> *) -> (a ..., Int, [a] -> b) ... -> [a] -> *)
 * @param {Function} fn A list iteration function that does not pass index or list to its callback
 * @return {Function} An altered list iteration function that passes (item, index, list) to its callback
 * @example
 *
 *      var mapIndexed = R.addIndex(R.map);
 *      mapIndexed((val, idx) => idx + '-' + val, ['f', 'o', 'o', 'b', 'a', 'r']);
 *      //=> ['0-f', '1-o', '2-o', '3-b', '4-a', '5-r']
 */
module.exports = _curry1(function addIndex(fn) {
  return curryN(fn.length, function() {
    var idx = 0;
    var origFn = arguments[0];
    var list = arguments[arguments.length - 1];
    var args = Array.prototype.slice.call(arguments, 0);
    args[0] = function() {
      var result = origFn.apply(this, _concat(arguments, [idx, list]));
      idx += 1;
      return result;
    };
    return fn.apply(this, args);
  });
});


/***/ }),
/* 798 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(650);
var _dispatchable = __webpack_require__(653);
var _xall = __webpack_require__(871);


/**
 * Returns `true` if all elements of the list match the predicate, `false` if
 * there are any that don't.
 *
 * Dispatches to the `all` method of the second argument, if present.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig (a -> Boolean) -> [a] -> Boolean
 * @param {Function} fn The predicate function.
 * @param {Array} list The array to consider.
 * @return {Boolean} `true` if the predicate is satisfied by every element, `false`
 *         otherwise.
 * @see R.any, R.none, R.transduce
 * @example
 *
 *      var equals3 = R.equals(3);
 *      R.all(equals3)([3, 3, 3, 3]); //=> true
 *      R.all(equals3)([3, 3, 1, 3]); //=> false
 */
module.exports = _curry2(_dispatchable(['all'], _xall, function all(fn, list) {
  var idx = 0;
  while (idx < list.length) {
    if (!fn(list[idx])) {
      return false;
    }
    idx += 1;
  }
  return true;
}));


/***/ }),
/* 799 */
/***/ (function(module, exports, __webpack_require__) {

var _curry1 = __webpack_require__(651);
var curryN = __webpack_require__(655);
var max = __webpack_require__(670);
var pluck = __webpack_require__(676);
var reduce = __webpack_require__(663);


/**
 * Takes a list of predicates and returns a predicate that returns true for a
 * given list of arguments if every one of the provided predicates is satisfied
 * by those arguments.
 *
 * The function returned is a curried function whose arity matches that of the
 * highest-arity predicate.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category Logic
 * @sig [(*... -> Boolean)] -> (*... -> Boolean)
 * @param {Array} predicates An array of predicates to check
 * @return {Function} The combined predicate
 * @see R.anyPass
 * @example
 *
 *      var isQueen = R.propEq('rank', 'Q');
 *      var isSpade = R.propEq('suit', '♠︎');
 *      var isQueenOfSpades = R.allPass([isQueen, isSpade]);
 *
 *      isQueenOfSpades({rank: 'Q', suit: '♣︎'}); //=> false
 *      isQueenOfSpades({rank: 'Q', suit: '♠︎'}); //=> true
 */
module.exports = _curry1(function allPass(preds) {
  return curryN(reduce(max, 0, pluck('length', preds)), function() {
    var idx = 0;
    var len = preds.length;
    while (idx < len) {
      if (!preds[idx].apply(this, arguments)) {
        return false;
      }
      idx += 1;
    }
    return true;
  });
});


/***/ }),
/* 800 */
/***/ (function(module, exports, __webpack_require__) {

var _curry1 = __webpack_require__(651);
var curryN = __webpack_require__(655);
var max = __webpack_require__(670);
var pluck = __webpack_require__(676);
var reduce = __webpack_require__(663);


/**
 * Takes a list of predicates and returns a predicate that returns true for a
 * given list of arguments if at least one of the provided predicates is
 * satisfied by those arguments.
 *
 * The function returned is a curried function whose arity matches that of the
 * highest-arity predicate.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category Logic
 * @sig [(*... -> Boolean)] -> (*... -> Boolean)
 * @param {Array} predicates An array of predicates to check
 * @return {Function} The combined predicate
 * @see R.allPass
 * @example
 *
 *      var isClub = R.propEq('suit', '♣');
 *      var isSpade = R.propEq('suit', '♠');
 *      var isBlackCard = R.anyPass([isClub, isSpade]);
 *
 *      isBlackCard({rank: '10', suit: '♣'}); //=> true
 *      isBlackCard({rank: 'Q', suit: '♠'}); //=> true
 *      isBlackCard({rank: 'Q', suit: '♦'}); //=> false
 */
module.exports = _curry1(function anyPass(preds) {
  return curryN(reduce(max, 0, pluck('length', preds)), function() {
    var idx = 0;
    var len = preds.length;
    while (idx < len) {
      if (preds[idx].apply(this, arguments)) {
        return true;
      }
      idx += 1;
    }
    return false;
  });
});


/***/ }),
/* 801 */
/***/ (function(module, exports, __webpack_require__) {

var _aperture = __webpack_require__(854);
var _curry2 = __webpack_require__(650);
var _dispatchable = __webpack_require__(653);
var _xaperture = __webpack_require__(872);


/**
 * Returns a new list, composed of n-tuples of consecutive elements. If `n` is
 * greater than the length of the list, an empty list is returned.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.12.0
 * @category List
 * @sig Number -> [a] -> [[a]]
 * @param {Number} n The size of the tuples to create
 * @param {Array} list The list to split into `n`-length tuples
 * @return {Array} The resulting list of `n`-length tuples
 * @see R.transduce
 * @example
 *
 *      R.aperture(2, [1, 2, 3, 4, 5]); //=> [[1, 2], [2, 3], [3, 4], [4, 5]]
 *      R.aperture(3, [1, 2, 3, 4, 5]); //=> [[1, 2, 3], [2, 3, 4], [3, 4, 5]]
 *      R.aperture(7, [1, 2, 3, 4, 5]); //=> []
 */
module.exports = _curry2(_dispatchable([], _xaperture, _aperture));


/***/ }),
/* 802 */
/***/ (function(module, exports, __webpack_require__) {

var _concat = __webpack_require__(660);
var _curry2 = __webpack_require__(650);


/**
 * Returns a new list containing the contents of the given list, followed by
 * the given element.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig a -> [a] -> [a]
 * @param {*} el The element to add to the end of the new list.
 * @param {Array} list The list of elements to add a new item to.
 *        list.
 * @return {Array} A new list containing the elements of the old list followed by `el`.
 * @see R.prepend
 * @example
 *
 *      R.append('tests', ['write', 'more']); //=> ['write', 'more', 'tests']
 *      R.append('tests', []); //=> ['tests']
 *      R.append(['tests'], ['write', 'more']); //=> ['write', 'more', ['tests']]
 */
module.exports = _curry2(function append(el, list) {
  return _concat(list, [el]);
});


/***/ }),
/* 803 */
/***/ (function(module, exports, __webpack_require__) {

var _curry1 = __webpack_require__(651);
var apply = __webpack_require__(726);
var curryN = __webpack_require__(655);
var map = __webpack_require__(657);
var max = __webpack_require__(670);
var pluck = __webpack_require__(676);
var reduce = __webpack_require__(663);
var values = __webpack_require__(776);


/**
 * Given a spec object recursively mapping properties to functions, creates a
 * function producing an object of the same structure, by mapping each property
 * to the result of calling its associated function with the supplied arguments.
 *
 * @func
 * @memberOf R
 * @since v0.20.0
 * @category Function
 * @sig {k: ((a, b, ..., m) -> v)} -> ((a, b, ..., m) -> {k: v})
 * @param {Object} spec an object recursively mapping properties to functions for
 *        producing the values for these properties.
 * @return {Function} A function that returns an object of the same structure
 * as `spec', with each property set to the value returned by calling its
 * associated function with the supplied arguments.
 * @see R.converge, R.juxt
 * @example
 *
 *      var getMetrics = R.applySpec({
 *                                      sum: R.add,
 *                                      nested: { mul: R.multiply }
 *                                   });
 *      getMetrics(2, 4); // => { sum: 6, nested: { mul: 8 } }
 * @symb R.applySpec({ x: f, y: { z: g } })(a, b) = { x: f(a, b), y: { z: g(a, b) } }
 */
module.exports = _curry1(function applySpec(spec) {
  spec = map(function(v) { return typeof v == 'function' ? v : applySpec(v); },
             spec);
  return curryN(reduce(max, 0, pluck('length', values(spec))),
                function() {
                  var args = arguments;
                  return map(function(f) { return apply(f, args); }, spec);
                });
});


/***/ }),
/* 804 */
/***/ (function(module, exports, __webpack_require__) {

var _curry3 = __webpack_require__(652);


/**
 * Makes an ascending comparator function out of a function that returns a value
 * that can be compared with `<` and `>`.
 *
 * @func
 * @memberOf R
 * @since v0.23.0
 * @category Function
 * @sig Ord b => (a -> b) -> a -> a -> Number
 * @param {Function} fn A function of arity one that returns a value that can be compared
 * @param {*} a The first item to be compared.
 * @param {*} b The second item to be compared.
 * @return {Number} `-1` if fn(a) < fn(b), `1` if fn(b) < fn(a), otherwise `0`
 * @see R.descend
 * @example
 *
 *      var byAge = R.ascend(R.prop('age'));
 *      var people = [
 *        // ...
 *      ];
 *      var peopleByYoungestFirst = R.sort(byAge, people);
 */
module.exports = _curry3(function ascend(fn, a, b) {
  var aa = fn(a);
  var bb = fn(b);
  return aa < bb ? -1 : aa > bb ? 1 : 0;
});


/***/ }),
/* 805 */
/***/ (function(module, exports, __webpack_require__) {

var _curry1 = __webpack_require__(651);
var nAry = __webpack_require__(692);


/**
 * Wraps a function of any arity (including nullary) in a function that accepts
 * exactly 2 parameters. Any extraneous parameters will not be passed to the
 * supplied function.
 *
 * @func
 * @memberOf R
 * @since v0.2.0
 * @category Function
 * @sig (* -> c) -> (a, b -> c)
 * @param {Function} fn The function to wrap.
 * @return {Function} A new function wrapping `fn`. The new function is guaranteed to be of
 *         arity 2.
 * @see R.nAry, R.unary
 * @example
 *
 *      var takesThreeArgs = function(a, b, c) {
 *        return [a, b, c];
 *      };
 *      takesThreeArgs.length; //=> 3
 *      takesThreeArgs(1, 2, 3); //=> [1, 2, 3]
 *
 *      var takesTwoArgs = R.binary(takesThreeArgs);
 *      takesTwoArgs.length; //=> 2
 *      // Only 2 arguments are passed to the wrapped function
 *      takesTwoArgs(1, 2, 3); //=> [1, 2, undefined]
 * @symb R.binary(f)(a, b, c) = f(a, b)
 */
module.exports = _curry1(function binary(fn) {
  return nAry(2, fn);
});


/***/ }),
/* 806 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(650);
var _isFunction = __webpack_require__(686);
var and = __webpack_require__(724);
var lift = __webpack_require__(690);


/**
 * A function which calls the two provided functions and returns the `&&`
 * of the results.
 * It returns the result of the first function if it is false-y and the result
 * of the second function otherwise. Note that this is short-circuited,
 * meaning that the second function will not be invoked if the first returns a
 * false-y value.
 *
 * In addition to functions, `R.both` also accepts any fantasy-land compatible
 * applicative functor.
 *
 * @func
 * @memberOf R
 * @since v0.12.0
 * @category Logic
 * @sig (*... -> Boolean) -> (*... -> Boolean) -> (*... -> Boolean)
 * @param {Function} f A predicate
 * @param {Function} g Another predicate
 * @return {Function} a function that applies its arguments to `f` and `g` and `&&`s their outputs together.
 * @see R.and
 * @example
 *
 *      var gt10 = R.gt(R.__, 10)
 *      var lt20 = R.lt(R.__, 20)
 *      var f = R.both(gt10, lt20);
 *      f(15); //=> true
 *      f(30); //=> false
 */
module.exports = _curry2(function both(f, g) {
  return _isFunction(f) ?
    function _both() {
      return f.apply(this, arguments) && g.apply(this, arguments);
    } :
    lift(and)(f, g);
});


/***/ }),
/* 807 */
/***/ (function(module, exports, __webpack_require__) {

var curry = __webpack_require__(681);


/**
 * Returns the result of calling its first argument with the remaining
 * arguments. This is occasionally useful as a converging function for
 * [`R.converge`](#converge): the first branch can produce a function while the
 * remaining branches produce values to be passed to that function as its
 * arguments.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category Function
 * @sig (*... -> a),*... -> a
 * @param {Function} fn The function to apply to the remaining arguments.
 * @param {...*} args Any number of positional arguments.
 * @return {*}
 * @see R.apply
 * @example
 *
 *      R.call(R.add, 1, 2); //=> 3
 *
 *      var indentN = R.pipe(R.times(R.always(' ')),
 *                           R.join(''),
 *                           R.replace(/^(?!$)/gm));
 *
 *      var format = R.converge(R.call, [
 *                                  R.pipe(R.prop('indent'), indentN),
 *                                  R.prop('value')
 *                              ]);
 *
 *      format({indent: 2, value: 'foo\nbar\nbaz\n'}); //=> '  foo\n  bar\n  baz\n'
 * @symb R.call(f, a, b) = f(a, b)
 */
module.exports = curry(function call(fn) {
  return fn.apply(this, Array.prototype.slice.call(arguments, 1));
});


/***/ }),
/* 808 */
/***/ (function(module, exports, __webpack_require__) {

var _curry3 = __webpack_require__(652);

/**
 * Restricts a number to be within a range.
 *
 * Also works for other ordered types such as Strings and Dates.
 *
 * @func
 * @memberOf R
 * @since v0.20.0
 * @category Relation
 * @sig Ord a => a -> a -> a -> a
 * @param {Number} minimum The lower limit of the clamp (inclusive)
 * @param {Number} maximum The upper limit of the clamp (inclusive)
 * @param {Number} value Value to be clamped
 * @return {Number} Returns `minimum` when `val < minimum`, `maximum` when `val > maximum`, returns `val` otherwise
 * @example
 *
 *      R.clamp(1, 10, -5) // => 1
 *      R.clamp(1, 10, 15) // => 10
 *      R.clamp(1, 10, 4)  // => 4
 */
module.exports = _curry3(function clamp(min, max, value) {
  if (min > max) {
    throw new Error('min must not be greater than max in clamp(min, max, value)');
  }
  return value < min ? min :
         value > max ? max :
         value;
});


/***/ }),
/* 809 */
/***/ (function(module, exports, __webpack_require__) {

var _clone = __webpack_require__(740);
var _curry1 = __webpack_require__(651);


/**
 * Creates a deep copy of the value which may contain (nested) `Array`s and
 * `Object`s, `Number`s, `String`s, `Boolean`s and `Date`s. `Function`s are
 * assigned by reference rather than copied
 *
 * Dispatches to a `clone` method if present.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Object
 * @sig {*} -> {*}
 * @param {*} value The object or array to clone
 * @return {*} A deeply cloned copy of `val`
 * @example
 *
 *      var objects = [{}, {}, {}];
 *      var objectsClone = R.clone(objects);
 *      objects === objectsClone; //=> false
 *      objects[0] === objectsClone[0]; //=> false
 */
module.exports = _curry1(function clone(value) {
  return value != null && typeof value.clone === 'function' ?
    value.clone() :
    _clone(value, [], [], true);
});


/***/ }),
/* 810 */
/***/ (function(module, exports, __webpack_require__) {

var _curry1 = __webpack_require__(651);


/**
 * Makes a comparator function out of a function that reports whether the first
 * element is less than the second.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig (a, b -> Boolean) -> (a, b -> Number)
 * @param {Function} pred A predicate function of arity two which will return `true` if the first argument
 * is less than the second, `false` otherwise
 * @return {Function} A Function :: a -> b -> Int that returns `-1` if a < b, `1` if b < a, otherwise `0`
 * @example
 *
 *      var byAge = R.comparator((a, b) => a.age < b.age);
 *      var people = [
 *        // ...
 *      ];
 *      var peopleByIncreasingAge = R.sort(byAge, people);
 */
module.exports = _curry1(function comparator(pred) {
  return function(a, b) {
    return pred(a, b) ? -1 : pred(b, a) ? 1 : 0;
  };
});


/***/ }),
/* 811 */
/***/ (function(module, exports, __webpack_require__) {

var lift = __webpack_require__(690);
var not = __webpack_require__(760);


/**
 * Takes a function `f` and returns a function `g` such that if called with the same arguments
 * when `f` returns a "truthy" value, `g` returns `false` and when `f` returns a "falsy" value `g` returns `true`.
 *
 * `R.complement` may be applied to any functor
 *
 * @func
 * @memberOf R
 * @since v0.12.0
 * @category Logic
 * @sig (*... -> *) -> (*... -> Boolean)
 * @param {Function} f
 * @return {Function}
 * @see R.not
 * @example
 *
 *      var isNotNil = R.complement(R.isNil);
 *      isNil(null); //=> true
 *      isNotNil(null); //=> false
 *      isNil(7); //=> false
 *      isNotNil(7); //=> true
 */
module.exports = lift(not);


/***/ }),
/* 812 */
/***/ (function(module, exports, __webpack_require__) {

var pipeP = __webpack_require__(766);
var reverse = __webpack_require__(695);


/**
 * Performs right-to-left composition of one or more Promise-returning
 * functions. The rightmost function may have any arity; the remaining
 * functions must be unary.
 *
 * @func
 * @memberOf R
 * @since v0.10.0
 * @category Function
 * @sig ((y -> Promise z), (x -> Promise y), ..., (a -> Promise b)) -> (a -> Promise z)
 * @param {...Function} functions The functions to compose
 * @return {Function}
 * @see R.pipeP
 * @example
 *
 *      var db = {
 *        users: {
 *          JOE: {
 *            name: 'Joe',
 *            followers: ['STEVE', 'SUZY']
 *          }
 *        }
 *      }
 *
 *      // We'll pretend to do a db lookup which returns a promise
 *      var lookupUser = (userId) => Promise.resolve(db.users[userId])
 *      var lookupFollowers = (user) => Promise.resolve(user.followers)
 *      lookupUser('JOE').then(lookupFollowers)
 *
 *      //  followersForUser :: String -> Promise [UserId]
 *      var followersForUser = R.composeP(lookupFollowers, lookupUser);
 *      followersForUser('JOE').then(followers => console.log('Followers:', followers))
 *      // Followers: ["STEVE","SUZY"]
 */
module.exports = function composeP() {
  if (arguments.length === 0) {
    throw new Error('composeP requires at least one argument');
  }
  return pipeP.apply(this, reverse(arguments));
};


/***/ }),
/* 813 */
/***/ (function(module, exports, __webpack_require__) {

var _arity = __webpack_require__(661);
var _curry1 = __webpack_require__(651);
var map = __webpack_require__(657);
var max = __webpack_require__(670);
var reduce = __webpack_require__(663);


/**
 * Returns a function, `fn`, which encapsulates `if/else, if/else, ...` logic.
 * `R.cond` takes a list of [predicate, transformer] pairs. All of the arguments
 * to `fn` are applied to each of the predicates in turn until one returns a
 * "truthy" value, at which point `fn` returns the result of applying its
 * arguments to the corresponding transformer. If none of the predicates
 * matches, `fn` returns undefined.
 *
 * @func
 * @memberOf R
 * @since v0.6.0
 * @category Logic
 * @sig [[(*... -> Boolean),(*... -> *)]] -> (*... -> *)
 * @param {Array} pairs A list of [predicate, transformer]
 * @return {Function}
 * @example
 *
 *      var fn = R.cond([
 *        [R.equals(0),   R.always('water freezes at 0°C')],
 *        [R.equals(100), R.always('water boils at 100°C')],
 *        [R.T,           temp => 'nothing special happens at ' + temp + '°C']
 *      ]);
 *      fn(0); //=> 'water freezes at 0°C'
 *      fn(50); //=> 'nothing special happens at 50°C'
 *      fn(100); //=> 'water boils at 100°C'
 */
module.exports = _curry1(function cond(pairs) {
  var arity = reduce(max,
                     0,
                     map(function(pair) { return pair[0].length; }, pairs));
  return _arity(arity, function() {
    var idx = 0;
    while (idx < pairs.length) {
      if (pairs[idx][0].apply(this, arguments)) {
        return pairs[idx][1].apply(this, arguments);
      }
      idx += 1;
    }
  });
});


/***/ }),
/* 814 */
/***/ (function(module, exports, __webpack_require__) {

var _curry1 = __webpack_require__(651);
var constructN = __webpack_require__(730);


/**
 * Wraps a constructor function inside a curried function that can be called
 * with the same arguments and returns the same type.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig (* -> {*}) -> (* -> {*})
 * @param {Function} fn The constructor function to wrap.
 * @return {Function} A wrapped, curried constructor function.
 * @see R.invoker
 * @example
 *
 *      // Constructor function
 *      function Animal(kind) {
 *        this.kind = kind;
 *      };
 *      Animal.prototype.sighting = function() {
 *        return "It's a " + this.kind + "!";
 *      }
 *
 *      var AnimalConstructor = R.construct(Animal)
 *
 *      // Notice we no longer need the 'new' keyword:
 *      AnimalConstructor('Pig'); //=> {"kind": "Pig", "sighting": function (){...}};
 *
 *      var animalTypes = ["Lion", "Tiger", "Bear"];
 *      var animalSighting = R.invoker(0, 'sighting');
 *      var sightNewAnimal = R.compose(animalSighting, AnimalConstructor);
 *      R.map(sightNewAnimal, animalTypes); //=> ["It's a Lion!", "It's a Tiger!", "It's a Bear!"]
 */
module.exports = _curry1(function construct(Fn) {
  return constructN(Fn.length, Fn);
});


/***/ }),
/* 815 */
/***/ (function(module, exports, __webpack_require__) {

var _contains = __webpack_require__(667);
var _curry2 = __webpack_require__(650);


/**
 * Returns `true` if the specified value is equal, in [`R.equals`](#equals)
 * terms, to at least one element of the given list; `false` otherwise.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig a -> [a] -> Boolean
 * @param {Object} a The item to compare against.
 * @param {Array} list The array to consider.
 * @return {Boolean} `true` if an equivalent item is in the list, `false` otherwise.
 * @see R.any
 * @example
 *
 *      R.contains(3, [1, 2, 3]); //=> true
 *      R.contains(4, [1, 2, 3]); //=> false
 *      R.contains({ name: 'Fred' }, [{ name: 'Fred' }]); //=> true
 *      R.contains([42], [[42]]); //=> true
 */
module.exports = _curry2(_contains);


/***/ }),
/* 816 */
/***/ (function(module, exports, __webpack_require__) {

var reduceBy = __webpack_require__(693);


/**
 * Counts the elements of a list according to how many match each value of a
 * key generated by the supplied function. Returns an object mapping the keys
 * produced by `fn` to the number of occurrences in the list. Note that all
 * keys are coerced to strings because of how JavaScript objects work.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig (a -> String) -> [a] -> {*}
 * @param {Function} fn The function used to map values to keys.
 * @param {Array} list The list to count elements from.
 * @return {Object} An object mapping keys to number of occurrences in the list.
 * @example
 *
 *      var numbers = [1.0, 1.1, 1.2, 2.0, 3.0, 2.2];
 *      R.countBy(Math.floor)(numbers);    //=> {'1': 3, '2': 2, '3': 1}
 *
 *      var letters = ['a', 'b', 'A', 'a', 'B', 'c'];
 *      R.countBy(R.toLower)(letters);   //=> {'a': 3, 'b': 2, 'c': 1}
 */
module.exports = reduceBy(function(acc, elem) { return acc + 1; }, 0);


/***/ }),
/* 817 */
/***/ (function(module, exports, __webpack_require__) {

var add = __webpack_require__(679);


/**
 * Decrements its argument.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category Math
 * @sig Number -> Number
 * @param {Number} n
 * @return {Number} n - 1
 * @see R.inc
 * @example
 *
 *      R.dec(42); //=> 41
 */
module.exports = add(-1);


/***/ }),
/* 818 */
/***/ (function(module, exports, __webpack_require__) {

var _curry3 = __webpack_require__(652);


/**
 * Makes a descending comparator function out of a function that returns a value
 * that can be compared with `<` and `>`.
 *
 * @func
 * @memberOf R
 * @since v0.23.0
 * @category Function
 * @sig Ord b => (a -> b) -> a -> a -> Number
 * @param {Function} fn A function of arity one that returns a value that can be compared
 * @param {*} a The first item to be compared.
 * @param {*} b The second item to be compared.
 * @return {Number} `-1` if fn(a) > fn(b), `1` if fn(b) > fn(a), otherwise `0`
 * @see R.ascend
 * @example
 *
 *      var byAge = R.descend(R.prop('age'));
 *      var people = [
 *        // ...
 *      ];
 *      var peopleByOldestFirst = R.sort(byAge, people);
 */
module.exports = _curry3(function descend(fn, a, b) {
  var aa = fn(a);
  var bb = fn(b);
  return aa > bb ? -1 : aa < bb ? 1 : 0;
});


/***/ }),
/* 819 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(650);
var _isInteger = __webpack_require__(706);
var assoc = __webpack_require__(680);
var dissoc = __webpack_require__(735);
var remove = __webpack_require__(769);
var update = __webpack_require__(716);


/**
 * Makes a shallow clone of an object, omitting the property at the given path.
 * Note that this copies and flattens prototype properties onto the new object
 * as well. All non-primitive properties are copied by reference.
 *
 * @func
 * @memberOf R
 * @since v0.11.0
 * @category Object
 * @typedefn Idx = String | Int
 * @sig [Idx] -> {k: v} -> {k: v}
 * @param {Array} path The path to the value to omit
 * @param {Object} obj The object to clone
 * @return {Object} A new object without the property at path
 * @see R.assocPath
 * @example
 *
 *      R.dissocPath(['a', 'b', 'c'], {a: {b: {c: 42}}}); //=> {a: {b: {}}}
 */
module.exports = _curry2(function dissocPath(path, obj) {
  switch (path.length) {
    case 0:
      return obj;
    case 1:
      return _isInteger(path[0]) ? remove(path[0], 1, obj) : dissoc(path[0], obj);
    default:
      var head = path[0];
      var tail = Array.prototype.slice.call(path, 1);
      if (obj[head] == null) {
        return obj;
      } else if (_isInteger(path[0])) {
        return update(head, dissocPath(tail, obj[head]), obj);
      } else {
        return assoc(head, dissocPath(tail, obj[head]), obj);
      }
  }
});


/***/ }),
/* 820 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(650);


/**
 * Divides two numbers. Equivalent to `a / b`.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Math
 * @sig Number -> Number -> Number
 * @param {Number} a The first value.
 * @param {Number} b The second value.
 * @return {Number} The result of `a / b`.
 * @see R.multiply
 * @example
 *
 *      R.divide(71, 100); //=> 0.71
 *
 *      var half = R.divide(R.__, 2);
 *      half(42); //=> 21
 *
 *      var reciprocal = R.divide(1);
 *      reciprocal(4);   //=> 0.25
 */
module.exports = _curry2(function divide(a, b) { return a / b; });


/***/ }),
/* 821 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(650);
var _dispatchable = __webpack_require__(653);
var _dropLast = __webpack_require__(856);
var _xdropLast = __webpack_require__(875);


/**
 * Returns a list containing all but the last `n` elements of the given `list`.
 *
 * @func
 * @memberOf R
 * @since v0.16.0
 * @category List
 * @sig Number -> [a] -> [a]
 * @sig Number -> String -> String
 * @param {Number} n The number of elements of `list` to skip.
 * @param {Array} list The list of elements to consider.
 * @return {Array} A copy of the list with only the first `list.length - n` elements
 * @see R.takeLast, R.drop, R.dropWhile, R.dropLastWhile
 * @example
 *
 *      R.dropLast(1, ['foo', 'bar', 'baz']); //=> ['foo', 'bar']
 *      R.dropLast(2, ['foo', 'bar', 'baz']); //=> ['foo']
 *      R.dropLast(3, ['foo', 'bar', 'baz']); //=> []
 *      R.dropLast(4, ['foo', 'bar', 'baz']); //=> []
 *      R.dropLast(3, 'ramda');               //=> 'ra'
 */
module.exports = _curry2(_dispatchable([], _xdropLast, _dropLast));


/***/ }),
/* 822 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(650);
var _dispatchable = __webpack_require__(653);
var _dropLastWhile = __webpack_require__(857);
var _xdropLastWhile = __webpack_require__(876);


/**
 * Returns a new list excluding all the tailing elements of a given list which
 * satisfy the supplied predicate function. It passes each value from the right
 * to the supplied predicate function, skipping elements until the predicate
 * function returns a `falsy` value. The predicate function is applied to one argument:
 * *(value)*.
 *
 * @func
 * @memberOf R
 * @since v0.16.0
 * @category List
 * @sig (a -> Boolean) -> [a] -> [a]
 * @param {Function} predicate The function to be called on each element
 * @param {Array} list The collection to iterate over.
 * @return {Array} A new array without any trailing elements that return `falsy` values from the `predicate`.
 * @see R.takeLastWhile, R.addIndex, R.drop, R.dropWhile
 * @example
 *
 *      var lteThree = x => x <= 3;
 *
 *      R.dropLastWhile(lteThree, [1, 2, 3, 4, 3, 2, 1]); //=> [1, 2, 3, 4]
 */
module.exports = _curry2(_dispatchable([], _xdropLastWhile, _dropLastWhile));


/***/ }),
/* 823 */
/***/ (function(module, exports, __webpack_require__) {

var _curry1 = __webpack_require__(651);
var _dispatchable = __webpack_require__(653);
var _xdropRepeatsWith = __webpack_require__(749);
var dropRepeatsWith = __webpack_require__(737);
var equals = __webpack_require__(658);


/**
 * Returns a new list without any consecutively repeating elements.
 * [`R.equals`](#equals) is used to determine equality.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.14.0
 * @category List
 * @sig [a] -> [a]
 * @param {Array} list The array to consider.
 * @return {Array} `list` without repeating elements.
 * @see R.transduce
 * @example
 *
 *     R.dropRepeats([1, 1, 1, 2, 3, 4, 4, 2, 2]); //=> [1, 2, 3, 4, 2]
 */
module.exports = _curry1(_dispatchable([], _xdropRepeatsWith(equals), dropRepeatsWith(equals)));


/***/ }),
/* 824 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(650);
var _dispatchable = __webpack_require__(653);
var _xdropWhile = __webpack_require__(877);


/**
 * Returns a new list excluding the leading elements of a given list which
 * satisfy the supplied predicate function. It passes each value to the supplied
 * predicate function, skipping elements while the predicate function returns
 * `true`. The predicate function is applied to one argument: *(value)*.
 *
 * Dispatches to the `dropWhile` method of the second argument, if present.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category List
 * @sig (a -> Boolean) -> [a] -> [a]
 * @param {Function} fn The function called per iteration.
 * @param {Array} list The collection to iterate over.
 * @return {Array} A new array.
 * @see R.takeWhile, R.transduce, R.addIndex
 * @example
 *
 *      var lteTwo = x => x <= 2;
 *
 *      R.dropWhile(lteTwo, [1, 2, 3, 4, 3, 2, 1]); //=> [3, 4, 3, 2, 1]
 */
module.exports = _curry2(_dispatchable(['dropWhile'], _xdropWhile, function dropWhile(pred, list) {
  var idx = 0;
  var len = list.length;
  while (idx < len && pred(list[idx])) {
    idx += 1;
  }
  return Array.prototype.slice.call(list, idx);
}));


/***/ }),
/* 825 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(650);
var _isFunction = __webpack_require__(686);
var lift = __webpack_require__(690);
var or = __webpack_require__(762);


/**
 * A function wrapping calls to the two functions in an `||` operation,
 * returning the result of the first function if it is truth-y and the result
 * of the second function otherwise. Note that this is short-circuited,
 * meaning that the second function will not be invoked if the first returns a
 * truth-y value.
 *
 * In addition to functions, `R.either` also accepts any fantasy-land compatible
 * applicative functor.
 *
 * @func
 * @memberOf R
 * @since v0.12.0
 * @category Logic
 * @sig (*... -> Boolean) -> (*... -> Boolean) -> (*... -> Boolean)
 * @param {Function} f a predicate
 * @param {Function} g another predicate
 * @return {Function} a function that applies its arguments to `f` and `g` and `||`s their outputs together.
 * @see R.or
 * @example
 *
 *      var gt10 = x => x > 10;
 *      var even = x => x % 2 === 0;
 *      var f = R.either(gt10, even);
 *      f(101); //=> true
 *      f(8); //=> true
 */
module.exports = _curry2(function either(f, g) {
  return _isFunction(f) ?
    function _either() {
      return f.apply(this, arguments) || g.apply(this, arguments);
    } :
    lift(or)(f, g);
});


/***/ }),
/* 826 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(650);
var equals = __webpack_require__(658);
var takeLast = __webpack_require__(772);

/**
 * Checks if a list ends with the provided values
 *
 * @func
 * @memberOf R
 * @since v0.24.0
 * @category List
 * @sig [a] -> Boolean
 * @sig String -> Boolean
 * @param {*} suffix
 * @param {*} list
 * @return {Boolean}
 * @example
 *
 *      R.endsWith('c', 'abc')                //=> true
 *      R.endsWith('b', 'abc')                //=> false
 *      R.endsWith(['c'], ['a', 'b', 'c'])    //=> true
 *      R.endsWith(['b'], ['a', 'b', 'c'])    //=> false
 */
module.exports = _curry2(function(suffix, list) {
  return equals(takeLast(suffix.length, list), suffix);
});


/***/ }),
/* 827 */
/***/ (function(module, exports, __webpack_require__) {

var _curry3 = __webpack_require__(652);
var equals = __webpack_require__(658);


/**
 * Takes a function and two values in its domain and returns `true` if the
 * values map to the same value in the codomain; `false` otherwise.
 *
 * @func
 * @memberOf R
 * @since v0.18.0
 * @category Relation
 * @sig (a -> b) -> a -> a -> Boolean
 * @param {Function} f
 * @param {*} x
 * @param {*} y
 * @return {Boolean}
 * @example
 *
 *      R.eqBy(Math.abs, 5, -5); //=> true
 */
module.exports = _curry3(function eqBy(f, x, y) {
  return equals(f(x), f(y));
});


/***/ }),
/* 828 */
/***/ (function(module, exports, __webpack_require__) {

var _curry3 = __webpack_require__(652);
var equals = __webpack_require__(658);


/**
 * Reports whether two objects have the same value, in [`R.equals`](#equals)
 * terms, for the specified property. Useful as a curried predicate.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Object
 * @sig k -> {k: v} -> {k: v} -> Boolean
 * @param {String} prop The name of the property to compare
 * @param {Object} obj1
 * @param {Object} obj2
 * @return {Boolean}
 *
 * @example
 *
 *      var o1 = { a: 1, b: 2, c: 3, d: 4 };
 *      var o2 = { a: 10, b: 20, c: 3, d: 40 };
 *      R.eqProps('a', o1, o2); //=> false
 *      R.eqProps('c', o1, o2); //=> true
 */
module.exports = _curry3(function eqProps(prop, obj1, obj2) {
  return equals(obj1[prop], obj2[prop]);
});


/***/ }),
/* 829 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(650);


/**
 * Creates a new object by recursively evolving a shallow copy of `object`,
 * according to the `transformation` functions. All non-primitive properties
 * are copied by reference.
 *
 * A `transformation` function will not be invoked if its corresponding key
 * does not exist in the evolved object.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category Object
 * @sig {k: (v -> v)} -> {k: v} -> {k: v}
 * @param {Object} transformations The object specifying transformation functions to apply
 *        to the object.
 * @param {Object} object The object to be transformed.
 * @return {Object} The transformed object.
 * @example
 *
 *      var tomato  = {firstName: '  Tomato ', data: {elapsed: 100, remaining: 1400}, id:123};
 *      var transformations = {
 *        firstName: R.trim,
 *        lastName: R.trim, // Will not get invoked.
 *        data: {elapsed: R.add(1), remaining: R.add(-1)}
 *      };
 *      R.evolve(transformations, tomato); //=> {firstName: 'Tomato', data: {elapsed: 101, remaining: 1399}, id:123}
 */
module.exports = _curry2(function evolve(transformations, object) {
  var result = {};
  var transformation, key, type;
  for (key in object) {
    transformation = transformations[key];
    type = typeof transformation;
    result[key] = type === 'function'                 ? transformation(object[key])
                : transformation && type === 'object' ? evolve(transformation, object[key])
                                                      : object[key];
  }
  return result;
});


/***/ }),
/* 830 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(650);
var _dispatchable = __webpack_require__(653);
var _xfind = __webpack_require__(879);


/**
 * Returns the first element of the list which matches the predicate, or
 * `undefined` if no element matches.
 *
 * Dispatches to the `find` method of the second argument, if present.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig (a -> Boolean) -> [a] -> a | undefined
 * @param {Function} fn The predicate function used to determine if the element is the
 *        desired one.
 * @param {Array} list The array to consider.
 * @return {Object} The element found, or `undefined`.
 * @see R.transduce
 * @example
 *
 *      var xs = [{a: 1}, {a: 2}, {a: 3}];
 *      R.find(R.propEq('a', 2))(xs); //=> {a: 2}
 *      R.find(R.propEq('a', 4))(xs); //=> undefined
 */
module.exports = _curry2(_dispatchable(['find'], _xfind, function find(fn, list) {
  var idx = 0;
  var len = list.length;
  while (idx < len) {
    if (fn(list[idx])) {
      return list[idx];
    }
    idx += 1;
  }
}));


/***/ }),
/* 831 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(650);
var _dispatchable = __webpack_require__(653);
var _xfindIndex = __webpack_require__(880);


/**
 * Returns the index of the first element of the list which matches the
 * predicate, or `-1` if no element matches.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.1.1
 * @category List
 * @sig (a -> Boolean) -> [a] -> Number
 * @param {Function} fn The predicate function used to determine if the element is the
 * desired one.
 * @param {Array} list The array to consider.
 * @return {Number} The index of the element found, or `-1`.
 * @see R.transduce
 * @example
 *
 *      var xs = [{a: 1}, {a: 2}, {a: 3}];
 *      R.findIndex(R.propEq('a', 2))(xs); //=> 1
 *      R.findIndex(R.propEq('a', 4))(xs); //=> -1
 */
module.exports = _curry2(_dispatchable([], _xfindIndex, function findIndex(fn, list) {
  var idx = 0;
  var len = list.length;
  while (idx < len) {
    if (fn(list[idx])) {
      return idx;
    }
    idx += 1;
  }
  return -1;
}));


/***/ }),
/* 832 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(650);
var _dispatchable = __webpack_require__(653);
var _xfindLast = __webpack_require__(881);


/**
 * Returns the last element of the list which matches the predicate, or
 * `undefined` if no element matches.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.1.1
 * @category List
 * @sig (a -> Boolean) -> [a] -> a | undefined
 * @param {Function} fn The predicate function used to determine if the element is the
 * desired one.
 * @param {Array} list The array to consider.
 * @return {Object} The element found, or `undefined`.
 * @see R.transduce
 * @example
 *
 *      var xs = [{a: 1, b: 0}, {a:1, b: 1}];
 *      R.findLast(R.propEq('a', 1))(xs); //=> {a: 1, b: 1}
 *      R.findLast(R.propEq('a', 4))(xs); //=> undefined
 */
module.exports = _curry2(_dispatchable([], _xfindLast, function findLast(fn, list) {
  var idx = list.length - 1;
  while (idx >= 0) {
    if (fn(list[idx])) {
      return list[idx];
    }
    idx -= 1;
  }
}));


/***/ }),
/* 833 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(650);
var _dispatchable = __webpack_require__(653);
var _xfindLastIndex = __webpack_require__(882);


/**
 * Returns the index of the last element of the list which matches the
 * predicate, or `-1` if no element matches.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.1.1
 * @category List
 * @sig (a -> Boolean) -> [a] -> Number
 * @param {Function} fn The predicate function used to determine if the element is the
 * desired one.
 * @param {Array} list The array to consider.
 * @return {Number} The index of the element found, or `-1`.
 * @see R.transduce
 * @example
 *
 *      var xs = [{a: 1, b: 0}, {a:1, b: 1}];
 *      R.findLastIndex(R.propEq('a', 1))(xs); //=> 1
 *      R.findLastIndex(R.propEq('a', 4))(xs); //=> -1
 */
module.exports = _curry2(_dispatchable([], _xfindLastIndex, function findLastIndex(fn, list) {
  var idx = list.length - 1;
  while (idx >= 0) {
    if (fn(list[idx])) {
      return idx;
    }
    idx -= 1;
  }
  return -1;
}));


/***/ }),
/* 834 */
/***/ (function(module, exports, __webpack_require__) {

var _curry1 = __webpack_require__(651);
var _makeFlat = __webpack_require__(747);


/**
 * Returns a new list by pulling every item out of it (and all its sub-arrays)
 * and putting them in a new array, depth-first.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig [a] -> [b]
 * @param {Array} list The array to consider.
 * @return {Array} The flattened list.
 * @see R.unnest
 * @example
 *
 *      R.flatten([1, 2, [3, 4], 5, [6, [7, 8, [9, [10, 11], 12]]]]);
 *      //=> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
 */
module.exports = _curry1(_makeFlat(true));


/***/ }),
/* 835 */
/***/ (function(module, exports, __webpack_require__) {

var _checkForMethod = __webpack_require__(671);
var _curry2 = __webpack_require__(650);


/**
 * Iterate over an input `list`, calling a provided function `fn` for each
 * element in the list.
 *
 * `fn` receives one argument: *(value)*.
 *
 * Note: `R.forEach` does not skip deleted or unassigned indices (sparse
 * arrays), unlike the native `Array.prototype.forEach` method. For more
 * details on this behavior, see:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach#Description
 *
 * Also note that, unlike `Array.prototype.forEach`, Ramda's `forEach` returns
 * the original array. In some libraries this function is named `each`.
 *
 * Dispatches to the `forEach` method of the second argument, if present.
 *
 * @func
 * @memberOf R
 * @since v0.1.1
 * @category List
 * @sig (a -> *) -> [a] -> [a]
 * @param {Function} fn The function to invoke. Receives one argument, `value`.
 * @param {Array} list The list to iterate over.
 * @return {Array} The original list.
 * @see R.addIndex
 * @example
 *
 *      var printXPlusFive = x => console.log(x + 5);
 *      R.forEach(printXPlusFive, [1, 2, 3]); //=> [1, 2, 3]
 *      // logs 6
 *      // logs 7
 *      // logs 8
 * @symb R.forEach(f, [a, b, c]) = [a, b, c]
 */
module.exports = _curry2(_checkForMethod('forEach', function forEach(fn, list) {
  var len = list.length;
  var idx = 0;
  while (idx < len) {
    fn(list[idx]);
    idx += 1;
  }
  return list;
}));


/***/ }),
/* 836 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(650);
var keys = __webpack_require__(662);


/**
 * Iterate over an input `object`, calling a provided function `fn` for each
 * key and value in the object.
 *
 * `fn` receives three argument: *(value, key, obj)*.
 *
 * @func
 * @memberOf R
 * @since v0.23.0
 * @category Object
 * @sig ((a, String, StrMap a) -> Any) -> StrMap a -> StrMap a
 * @param {Function} fn The function to invoke. Receives three argument, `value`, `key`, `obj`.
 * @param {Object} obj The object to iterate over.
 * @return {Object} The original object.
 * @example
 *
 *      var printKeyConcatValue = (value, key) => console.log(key + ':' + value);
 *      R.forEachObjIndexed(printKeyConcatValue, {x: 1, y: 2}); //=> {x: 1, y: 2}
 *      // logs x:1
 *      // logs y:2
 * @symb R.forEachObjIndexed(f, {x: a, y: b}) = {x: a, y: b}
 */
module.exports = _curry2(function forEachObjIndexed(fn, obj) {
  var keyList = keys(obj);
  var idx = 0;
  while (idx < keyList.length) {
    var key = keyList[idx];
    fn(obj[key], key, obj);
    idx += 1;
  }
  return obj;
});


/***/ }),
/* 837 */
/***/ (function(module, exports, __webpack_require__) {

var _curry1 = __webpack_require__(651);


/**
 * Creates a new object from a list key-value pairs. If a key appears in
 * multiple pairs, the rightmost pair is included in the object.
 *
 * @func
 * @memberOf R
 * @since v0.3.0
 * @category List
 * @sig [[k,v]] -> {k: v}
 * @param {Array} pairs An array of two-element arrays that will be the keys and values of the output object.
 * @return {Object} The object made by pairing up `keys` and `values`.
 * @see R.toPairs, R.pair
 * @example
 *
 *      R.fromPairs([['a', 1], ['b', 2], ['c', 3]]); //=> {a: 1, b: 2, c: 3}
 */
module.exports = _curry1(function fromPairs(pairs) {
  var result = {};
  var idx = 0;
  while (idx < pairs.length) {
    result[pairs[idx][0]] = pairs[idx][1];
    idx += 1;
  }
  return result;
});


/***/ }),
/* 838 */
/***/ (function(module, exports, __webpack_require__) {

var _checkForMethod = __webpack_require__(671);
var _curry2 = __webpack_require__(650);
var reduceBy = __webpack_require__(693);

/**
 * Splits a list into sub-lists stored in an object, based on the result of
 * calling a String-returning function on each element, and grouping the
 * results according to values returned.
 *
 * Dispatches to the `groupBy` method of the second argument, if present.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig (a -> String) -> [a] -> {String: [a]}
 * @param {Function} fn Function :: a -> String
 * @param {Array} list The array to group
 * @return {Object} An object with the output of `fn` for keys, mapped to arrays of elements
 *         that produced that key when passed to `fn`.
 * @see R.transduce
 * @example
 *
 *      var byGrade = R.groupBy(function(student) {
 *        var score = student.score;
 *        return score < 65 ? 'F' :
 *               score < 70 ? 'D' :
 *               score < 80 ? 'C' :
 *               score < 90 ? 'B' : 'A';
 *      });
 *      var students = [{name: 'Abby', score: 84},
 *                      {name: 'Eddy', score: 58},
 *                      // ...
 *                      {name: 'Jack', score: 69}];
 *      byGrade(students);
 *      // {
 *      //   'A': [{name: 'Dianne', score: 99}],
 *      //   'B': [{name: 'Abby', score: 84}]
 *      //   // ...,
 *      //   'F': [{name: 'Eddy', score: 58}]
 *      // }
 */
module.exports = _curry2(_checkForMethod('groupBy', reduceBy(function(acc, item) {
  if (acc == null) {
    acc = [];
  }
  acc.push(item);
  return acc;
}, null)));


/***/ }),
/* 839 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(650);

/**
 * Takes a list and returns a list of lists where each sublist's elements are
 * all satisfied pairwise comparison according to the provided function.
 * Only adjacent elements are passed to the comparison function.
 *
 * @func
 * @memberOf R
 * @since v0.21.0
 * @category List
 * @sig ((a, a) → Boolean) → [a] → [[a]]
 * @param {Function} fn Function for determining whether two given (adjacent)
 *        elements should be in the same group
 * @param {Array} list The array to group. Also accepts a string, which will be
 *        treated as a list of characters.
 * @return {List} A list that contains sublists of elements,
 *         whose concatenations are equal to the original list.
 * @example
 *
 * R.groupWith(R.equals, [0, 1, 1, 2, 3, 5, 8, 13, 21])
 * //=> [[0], [1, 1], [2], [3], [5], [8], [13], [21]]
 *
 * R.groupWith((a, b) => a + 1 === b, [0, 1, 1, 2, 3, 5, 8, 13, 21])
 * //=> [[0, 1], [1, 2, 3], [5], [8], [13], [21]]
 *
 * R.groupWith((a, b) => a % 2 === b % 2, [0, 1, 1, 2, 3, 5, 8, 13, 21])
 * //=> [[0], [1, 1], [2], [3, 5], [8], [13, 21]]
 *
 * R.groupWith(R.eqBy(isVowel), 'aestiou')
 * //=> ['ae', 'st', 'iou']
 */
module.exports = _curry2(function(fn, list) {
  var res = [];
  var idx = 0;
  var len = list.length;
  while (idx < len) {
    var nextidx = idx + 1;
    while (nextidx < len && fn(list[nextidx - 1], list[nextidx])) {
      nextidx += 1;
    }
    res.push(list.slice(idx, nextidx));
    idx = nextidx;
  }
  return res;
});


/***/ }),
/* 840 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(650);


/**
 * Returns `true` if the first argument is greater than the second; `false`
 * otherwise.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig Ord a => a -> a -> Boolean
 * @param {*} a
 * @param {*} b
 * @return {Boolean}
 * @see R.lt
 * @example
 *
 *      R.gt(2, 1); //=> true
 *      R.gt(2, 2); //=> false
 *      R.gt(2, 3); //=> false
 *      R.gt('a', 'z'); //=> false
 *      R.gt('z', 'a'); //=> true
 */
module.exports = _curry2(function gt(a, b) { return a > b; });


/***/ }),
/* 841 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(650);


/**
 * Returns `true` if the first argument is greater than or equal to the second;
 * `false` otherwise.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig Ord a => a -> a -> Boolean
 * @param {Number} a
 * @param {Number} b
 * @return {Boolean}
 * @see R.lte
 * @example
 *
 *      R.gte(2, 1); //=> true
 *      R.gte(2, 2); //=> true
 *      R.gte(2, 3); //=> false
 *      R.gte('a', 'z'); //=> false
 *      R.gte('z', 'a'); //=> true
 */
module.exports = _curry2(function gte(a, b) { return a >= b; });


/***/ }),
/* 842 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(650);
var _has = __webpack_require__(656);


/**
 * Returns whether or not an object has an own property with the specified name
 *
 * @func
 * @memberOf R
 * @since v0.7.0
 * @category Object
 * @sig s -> {s: x} -> Boolean
 * @param {String} prop The name of the property to check for.
 * @param {Object} obj The object to query.
 * @return {Boolean} Whether the property exists.
 * @example
 *
 *      var hasName = R.has('name');
 *      hasName({name: 'alice'});   //=> true
 *      hasName({name: 'bob'});     //=> true
 *      hasName({});                //=> false
 *
 *      var point = {x: 0, y: 0};
 *      var pointHas = R.has(R.__, point);
 *      pointHas('x');  //=> true
 *      pointHas('y');  //=> true
 *      pointHas('z');  //=> false
 */
module.exports = _curry2(_has);


/***/ }),
/* 843 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(650);


/**
 * Returns whether or not an object or its prototype chain has a property with
 * the specified name
 *
 * @func
 * @memberOf R
 * @since v0.7.0
 * @category Object
 * @sig s -> {s: x} -> Boolean
 * @param {String} prop The name of the property to check for.
 * @param {Object} obj The object to query.
 * @return {Boolean} Whether the property exists.
 * @example
 *
 *      function Rectangle(width, height) {
 *        this.width = width;
 *        this.height = height;
 *      }
 *      Rectangle.prototype.area = function() {
 *        return this.width * this.height;
 *      };
 *
 *      var square = new Rectangle(2, 2);
 *      R.hasIn('width', square);  //=> true
 *      R.hasIn('area', square);  //=> true
 */
module.exports = _curry2(function hasIn(prop, obj) {
  return prop in obj;
});


/***/ }),
/* 844 */
/***/ (function(module, exports, __webpack_require__) {

var nth = __webpack_require__(674);


/**
 * Returns the first element of the given list or string. In some libraries
 * this function is named `first`.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig [a] -> a | Undefined
 * @sig String -> String
 * @param {Array|String} list
 * @return {*}
 * @see R.tail, R.init, R.last
 * @example
 *
 *      R.head(['fi', 'fo', 'fum']); //=> 'fi'
 *      R.head([]); //=> undefined
 *
 *      R.head('abc'); //=> 'a'
 *      R.head(''); //=> ''
 */
module.exports = nth(0);


/***/ }),
/* 845 */
/***/ (function(module, exports, __webpack_require__) {

var _curry3 = __webpack_require__(652);
var curryN = __webpack_require__(655);


/**
 * Creates a function that will process either the `onTrue` or the `onFalse`
 * function depending upon the result of the `condition` predicate.
 *
 * @func
 * @memberOf R
 * @since v0.8.0
 * @category Logic
 * @sig (*... -> Boolean) -> (*... -> *) -> (*... -> *) -> (*... -> *)
 * @param {Function} condition A predicate function
 * @param {Function} onTrue A function to invoke when the `condition` evaluates to a truthy value.
 * @param {Function} onFalse A function to invoke when the `condition` evaluates to a falsy value.
 * @return {Function} A new unary function that will process either the `onTrue` or the `onFalse`
 *                    function depending upon the result of the `condition` predicate.
 * @see R.unless, R.when
 * @example
 *
 *      var incCount = R.ifElse(
 *        R.has('count'),
 *        R.over(R.lensProp('count'), R.inc),
 *        R.assoc('count', 1)
 *      );
 *      incCount({});           //=> { count: 1 }
 *      incCount({ count: 1 }); //=> { count: 2 }
 */
module.exports = _curry3(function ifElse(condition, onTrue, onFalse) {
  return curryN(Math.max(condition.length, onTrue.length, onFalse.length),
    function _ifElse() {
      return condition.apply(this, arguments) ? onTrue.apply(this, arguments) : onFalse.apply(this, arguments);
    }
  );
});


/***/ }),
/* 846 */
/***/ (function(module, exports, __webpack_require__) {

var add = __webpack_require__(679);


/**
 * Increments its argument.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category Math
 * @sig Number -> Number
 * @param {Number} n
 * @return {Number} n + 1
 * @see R.dec
 * @example
 *
 *      R.inc(42); //=> 43
 */
module.exports = add(1);


/***/ }),
/* 847 */
/***/ (function(module, exports, __webpack_require__) {

var reduceBy = __webpack_require__(693);


/**
 * Given a function that generates a key, turns a list of objects into an
 * object indexing the objects by the given key. Note that if multiple
 * objects generate the same value for the indexing key only the last value
 * will be included in the generated object.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.19.0
 * @category List
 * @sig (a -> String) -> [{k: v}] -> {k: {k: v}}
 * @param {Function} fn Function :: a -> String
 * @param {Array} array The array of objects to index
 * @return {Object} An object indexing each array element by the given property.
 * @example
 *
 *      var list = [{id: 'xyz', title: 'A'}, {id: 'abc', title: 'B'}];
 *      R.indexBy(R.prop('id'), list);
 *      //=> {abc: {id: 'abc', title: 'B'}, xyz: {id: 'xyz', title: 'A'}}
 */
module.exports = reduceBy(function(acc, elem) { return elem; }, null);


/***/ }),
/* 848 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(650);
var _indexOf = __webpack_require__(744);
var _isArray = __webpack_require__(665);


/**
 * Returns the position of the first occurrence of an item in an array, or -1
 * if the item is not included in the array. [`R.equals`](#equals) is used to
 * determine equality.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig a -> [a] -> Number
 * @param {*} target The item to find.
 * @param {Array} xs The array to search in.
 * @return {Number} the index of the target, or -1 if the target is not found.
 * @see R.lastIndexOf
 * @example
 *
 *      R.indexOf(3, [1,2,3,4]); //=> 2
 *      R.indexOf(10, [1,2,3,4]); //=> -1
 */
module.exports = _curry2(function indexOf(target, xs) {
  return typeof xs.indexOf === 'function' && !_isArray(xs) ?
    xs.indexOf(target) :
    _indexOf(xs, target, 0);
});


/***/ }),
/* 849 */
/***/ (function(module, exports, __webpack_require__) {

var slice = __webpack_require__(668);


/**
 * Returns all but the last element of the given list or string.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category List
 * @sig [a] -> [a]
 * @sig String -> String
 * @param {*} list
 * @return {*}
 * @see R.last, R.head, R.tail
 * @example
 *
 *      R.init([1, 2, 3]);  //=> [1, 2]
 *      R.init([1, 2]);     //=> [1]
 *      R.init([1]);        //=> []
 *      R.init([]);         //=> []
 *
 *      R.init('abc');  //=> 'ab'
 *      R.init('ab');   //=> 'a'
 *      R.init('a');    //=> ''
 *      R.init('');     //=> ''
 */
module.exports = slice(0, -1);


/***/ }),
/* 850 */
/***/ (function(module, exports, __webpack_require__) {

var _containsWith = __webpack_require__(683);
var _curry3 = __webpack_require__(652);
var _filter = __webpack_require__(704);


/**
 * Takes a predicate `pred`, a list `xs`, and a list `ys`, and returns a list
 * `xs'` comprising each of the elements of `xs` which is equal to one or more
 * elements of `ys` according to `pred`.
 *
 * `pred` must be a binary function expecting an element from each list.
 *
 * `xs`, `ys`, and `xs'` are treated as sets, semantically, so ordering should
 * not be significant, but since `xs'` is ordered the implementation guarantees
 * that its values are in the same order as they appear in `xs`. Duplicates are
 * not removed, so `xs'` may contain duplicates if `xs` contains duplicates.
 *
 * @func
 * @memberOf R
 * @since v0.24.0
 * @category Relation
 * @sig (a -> b -> Boolean) -> [a] -> [b] -> [a]
 * @param {Function} pred
 * @param {Array} xs
 * @param {Array} ys
 * @return {Array}
 * @see R.intersection
 * @example
 *
 *      R.innerJoin(
 *        (record, id) => record.id === id,
 *        [{id: 824, name: 'Richie Furay'},
 *         {id: 956, name: 'Dewey Martin'},
 *         {id: 313, name: 'Bruce Palmer'},
 *         {id: 456, name: 'Stephen Stills'},
 *         {id: 177, name: 'Neil Young'}],
 *        [177, 456, 999]
 *      );
 *      //=> [{id: 456, name: 'Stephen Stills'}, {id: 177, name: 'Neil Young'}]
 */
module.exports = _curry3(function innerJoin(pred, xs, ys) {
  return _filter(function(x) { return _containsWith(pred, x, ys); }, xs);
});


/***/ }),
/* 851 */
/***/ (function(module, exports, __webpack_require__) {

var _curry3 = __webpack_require__(652);


/**
 * Inserts the supplied element into the list, at the specified `index`. _Note that

 * this is not destructive_: it returns a copy of the list with the changes.
 * <small>No lists have been harmed in the application of this function.</small>
 *
 * @func
 * @memberOf R
 * @since v0.2.2
 * @category List
 * @sig Number -> a -> [a] -> [a]
 * @param {Number} index The position to insert the element
 * @param {*} elt The element to insert into the Array
 * @param {Array} list The list to insert into
 * @return {Array} A new Array with `elt` inserted at `index`.
 * @example
 *
 *      R.insert(2, 'x', [1,2,3,4]); //=> [1,2,'x',3,4]
 */
module.exports = _curry3(function insert(idx, elt, list) {
  idx = idx < list.length && idx >= 0 ? idx : list.length;
  var result = Array.prototype.slice.call(list, 0);
  result.splice(idx, 0, elt);
  return result;
});


/***/ }),
/* 852 */
/***/ (function(module, exports, __webpack_require__) {

var _curry3 = __webpack_require__(652);


/**
 * Inserts the sub-list into the list, at the specified `index`. _Note that this is not
 * destructive_: it returns a copy of the list with the changes.
 * <small>No lists have been harmed in the application of this function.</small>
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category List
 * @sig Number -> [a] -> [a] -> [a]
 * @param {Number} index The position to insert the sub-list
 * @param {Array} elts The sub-list to insert into the Array
 * @param {Array} list The list to insert the sub-list into
 * @return {Array} A new Array with `elts` inserted starting at `index`.
 * @example
 *
 *      R.insertAll(2, ['x','y','z'], [1,2,3,4]); //=> [1,2,'x','y','z',3,4]
 */
module.exports = _curry3(function insertAll(idx, elts, list) {
  idx = idx < list.length && idx >= 0 ? idx : list.length;
  return [].concat(Array.prototype.slice.call(list, 0, idx),
                   elts,
                   Array.prototype.slice.call(list, idx));
});


/***/ }),
/* 853 */
/***/ (function(module, exports, __webpack_require__) {

var _contains = __webpack_require__(667);


// A simple Set type that honours R.equals semantics
module.exports = (function() {
  function _Set() {
    /* globals Set */
    this._nativeSet = typeof Set === 'function' ? new Set() : null;
    this._items = {};
  }

  // until we figure out why jsdoc chokes on this
  // @param item The item to add to the Set
  // @returns {boolean} true if the item did not exist prior, otherwise false
  //
  _Set.prototype.add = function(item) {
    return !hasOrAdd(item, true, this);
  };

  //
  // @param item The item to check for existence in the Set
  // @returns {boolean} true if the item exists in the Set, otherwise false
  //
  _Set.prototype.has = function(item) {
    return hasOrAdd(item, false, this);
  };

  //
  // Combines the logic for checking whether an item is a member of the set and
  // for adding a new item to the set.
  //
  // @param item       The item to check or add to the Set instance.
  // @param shouldAdd  If true, the item will be added to the set if it doesn't
  //                   already exist.
  // @param set        The set instance to check or add to.
  // @return {boolean} true if the item already existed, otherwise false.
  //
  function hasOrAdd(item, shouldAdd, set) {
    var type = typeof item;
    var prevSize, newSize;
    switch (type) {
      case 'string':
      case 'number':
        // distinguish between +0 and -0
        if (item === 0 && 1 / item === -Infinity) {
          if (set._items['-0']) {
            return true;
          } else {
            if (shouldAdd) {
              set._items['-0'] = true;
            }
            return false;
          }
        }
        // these types can all utilise the native Set
        if (set._nativeSet !== null) {
          if (shouldAdd) {
            prevSize = set._nativeSet.size;
            set._nativeSet.add(item);
            newSize = set._nativeSet.size;
            return newSize === prevSize;
          } else {
            return set._nativeSet.has(item);
          }
        } else {
          if (!(type in set._items)) {
            if (shouldAdd) {
              set._items[type] = {};
              set._items[type][item] = true;
            }
            return false;
          } else if (item in set._items[type]) {
            return true;
          } else {
            if (shouldAdd) {
              set._items[type][item] = true;
            }
            return false;
          }
        }

      case 'boolean':
        // set._items['boolean'] holds a two element array
        // representing [ falseExists, trueExists ]
        if (type in set._items) {
          var bIdx = item ? 1 : 0;
          if (set._items[type][bIdx]) {
            return true;
          } else {
            if (shouldAdd) {
              set._items[type][bIdx] = true;
            }
            return false;
          }
        } else {
          if (shouldAdd) {
            set._items[type] = item ? [false, true] : [true, false];
          }
          return false;
        }

      case 'function':
        // compare functions for reference equality
        if (set._nativeSet !== null) {
          if (shouldAdd) {
            prevSize = set._nativeSet.size;
            set._nativeSet.add(item);
            newSize = set._nativeSet.size;
            return newSize === prevSize;
          } else {
            return set._nativeSet.has(item);
          }
        } else {
          if (!(type in set._items)) {
            if (shouldAdd) {
              set._items[type] = [item];
            }
            return false;
          }
          if (!_contains(item, set._items[type])) {
            if (shouldAdd) {
              set._items[type].push(item);
            }
            return false;
          }
          return true;
        }

      case 'undefined':
        if (set._items[type]) {
          return true;
        } else {
          if (shouldAdd) {
            set._items[type] = true;
          }
          return false;
        }

      case 'object':
        if (item === null) {
          if (!set._items['null']) {
            if (shouldAdd) {
              set._items['null'] = true;
            }
            return false;
          }
          return true;
        }
      /* falls through */
      default:
        // reduce the search size of heterogeneous sets by creating buckets
        // for each type.
        type = Object.prototype.toString.call(item);
        if (!(type in set._items)) {
          if (shouldAdd) {
            set._items[type] = [item];
          }
          return false;
        }
        // scan through all previously applied items
        if (!_contains(item, set._items[type])) {
          if (shouldAdd) {
            set._items[type].push(item);
          }
          return false;
        }
        return true;
    }
  }
  return _Set;
}());


/***/ }),
/* 854 */
/***/ (function(module, exports) {

module.exports = function _aperture(n, list) {
  var idx = 0;
  var limit = list.length - (n - 1);
  var acc = new Array(limit >= 0 ? limit : 0);
  while (idx < limit) {
    acc[idx] = Array.prototype.slice.call(list, idx, idx + n);
    idx += 1;
  }
  return acc;
};


/***/ }),
/* 855 */
/***/ (function(module, exports) {

module.exports = function _arrayFromIterator(iter) {
  var list = [];
  var next;
  while (!(next = iter.next()).done) {
    list.push(next.value);
  }
  return list;
};


/***/ }),
/* 856 */
/***/ (function(module, exports, __webpack_require__) {

var take = __webpack_require__(712);

module.exports = function dropLast(n, xs) {
  return take(n < xs.length ? xs.length - n : 0, xs);
};


/***/ }),
/* 857 */
/***/ (function(module, exports) {

module.exports = function dropLastWhile(pred, list) {
  var idx = list.length - 1;
  while (idx >= 0 && pred(list[idx])) {
    idx -= 1;
  }
  return Array.prototype.slice.call(list, 0, idx + 1);
};


/***/ }),
/* 858 */
/***/ (function(module, exports, __webpack_require__) {

var _arrayFromIterator = __webpack_require__(855);
var _functionName = __webpack_require__(861);
var _has = __webpack_require__(656);
var identical = __webpack_require__(739);
var keys = __webpack_require__(662);
var type = __webpack_require__(713);


module.exports = function _equals(a, b, stackA, stackB) {
  if (identical(a, b)) {
    return true;
  }

  if (type(a) !== type(b)) {
    return false;
  }

  if (a == null || b == null) {
    return false;
  }

  if (typeof a['fantasy-land/equals'] === 'function' || typeof b['fantasy-land/equals'] === 'function') {
    return typeof a['fantasy-land/equals'] === 'function' && a['fantasy-land/equals'](b) &&
           typeof b['fantasy-land/equals'] === 'function' && b['fantasy-land/equals'](a);
  }

  if (typeof a.equals === 'function' || typeof b.equals === 'function') {
    return typeof a.equals === 'function' && a.equals(b) &&
           typeof b.equals === 'function' && b.equals(a);
  }

  switch (type(a)) {
    case 'Arguments':
    case 'Array':
    case 'Object':
      if (typeof a.constructor === 'function' &&
          _functionName(a.constructor) === 'Promise') {
        return a === b;
      }
      break;
    case 'Boolean':
    case 'Number':
    case 'String':
      if (!(typeof a === typeof b && identical(a.valueOf(), b.valueOf()))) {
        return false;
      }
      break;
    case 'Date':
      if (!identical(a.valueOf(), b.valueOf())) {
        return false;
      }
      break;
    case 'Error':
      return a.name === b.name && a.message === b.message;
    case 'RegExp':
      if (!(a.source === b.source &&
            a.global === b.global &&
            a.ignoreCase === b.ignoreCase &&
            a.multiline === b.multiline &&
            a.sticky === b.sticky &&
            a.unicode === b.unicode)) {
        return false;
      }
      break;
    case 'Map':
    case 'Set':
      if (!_equals(_arrayFromIterator(a.entries()), _arrayFromIterator(b.entries()), stackA, stackB)) {
        return false;
      }
      break;
    case 'Int8Array':
    case 'Uint8Array':
    case 'Uint8ClampedArray':
    case 'Int16Array':
    case 'Uint16Array':
    case 'Int32Array':
    case 'Uint32Array':
    case 'Float32Array':
    case 'Float64Array':
      break;
    case 'ArrayBuffer':
      break;
    default:
      // Values of other types are only equal if identical.
      return false;
  }

  var keysA = keys(a);
  if (keysA.length !== keys(b).length) {
    return false;
  }

  var idx = stackA.length - 1;
  while (idx >= 0) {
    if (stackA[idx] === a) {
      return stackB[idx] === b;
    }
    idx -= 1;
  }

  stackA.push(a);
  stackB.push(b);
  idx = keysA.length - 1;
  while (idx >= 0) {
    var key = keysA[idx];
    if (!(_has(key, b) && _equals(b[key], a[key], stackA, stackB))) {
      return false;
    }
    idx -= 1;
  }
  stackA.pop();
  stackB.pop();
  return true;
};


/***/ }),
/* 859 */
/***/ (function(module, exports, __webpack_require__) {

var _forceReduced = __webpack_require__(860);
var _isArrayLike = __webpack_require__(685);
var _reduce = __webpack_require__(659);
var _xfBase = __webpack_require__(654);

module.exports = (function() {
  var preservingReduced = function(xf) {
    return {
      '@@transducer/init': _xfBase.init,
      '@@transducer/result': function(result) {
        return xf['@@transducer/result'](result);
      },
      '@@transducer/step': function(result, input) {
        var ret = xf['@@transducer/step'](result, input);
        return ret['@@transducer/reduced'] ? _forceReduced(ret) : ret;
      }
    };
  };

  return function _xcat(xf) {
    var rxf = preservingReduced(xf);
    return {
      '@@transducer/init': _xfBase.init,
      '@@transducer/result': function(result) {
        return rxf['@@transducer/result'](result);
      },
      '@@transducer/step': function(result, input) {
        return !_isArrayLike(input) ? _reduce(rxf, result, [input]) : _reduce(rxf, result, input);
      }
    };
  };
}());


/***/ }),
/* 860 */
/***/ (function(module, exports) {

module.exports = function _forceReduced(x) {
  return {
    '@@transducer/value': x,
    '@@transducer/reduced': true
  };
};


/***/ }),
/* 861 */
/***/ (function(module, exports) {

module.exports = function _functionName(f) {
  // String(x => x) evaluates to "x => x", so the pattern may not match.
  var match = String(f).match(/^function (\w*)/);
  return match == null ? '' : match[1];
};


/***/ }),
/* 862 */
/***/ (function(module, exports) {

module.exports = function _isRegExp(x) {
  return Object.prototype.toString.call(x) === '[object RegExp]';
};


/***/ }),
/* 863 */
/***/ (function(module, exports, __webpack_require__) {

var _has = __webpack_require__(656);

// Based on https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
module.exports = function _objectAssign(target) {
  if (target == null) {
    throw new TypeError('Cannot convert undefined or null to object');
  }

  var output = Object(target);
  var idx = 1;
  var length = arguments.length;
  while (idx < length) {
    var source = arguments[idx];
    if (source != null) {
      for (var nextKey in source) {
        if (_has(nextKey, source)) {
          output[nextKey] = source[nextKey];
        }
      }
    }
    idx += 1;
  }
  return output;
};


/***/ }),
/* 864 */
/***/ (function(module, exports) {

module.exports = function _of(x) { return [x]; };


/***/ }),
/* 865 */
/***/ (function(module, exports) {

module.exports = function _pipe(f, g) {
  return function() {
    return g.call(this, f.apply(this, arguments));
  };
};


/***/ }),
/* 866 */
/***/ (function(module, exports) {

module.exports = function _pipeP(f, g) {
  return function() {
    var ctx = this;
    return f.apply(ctx, arguments).then(function(x) {
      return g.call(ctx, x);
    });
  };
};


/***/ }),
/* 867 */
/***/ (function(module, exports) {

module.exports = function _quote(s) {
  var escaped = s
    .replace(/\\/g, '\\\\')
    .replace(/[\b]/g, '\\b')  // \b matches word boundary; [\b] matches backspace
    .replace(/\f/g, '\\f')
    .replace(/\n/g, '\\n')
    .replace(/\r/g, '\\r')
    .replace(/\t/g, '\\t')
    .replace(/\v/g, '\\v')
    .replace(/\0/g, '\\0');

  return '"' + escaped.replace(/"/g, '\\"') + '"';
};


/***/ }),
/* 868 */
/***/ (function(module, exports, __webpack_require__) {

var _assign = __webpack_require__(703);
var _identity = __webpack_require__(705);
var _isArrayLike = __webpack_require__(685);
var _isTransformer = __webpack_require__(708);
var objOf = __webpack_require__(761);


module.exports = (function() {
  var _stepCatArray = {
    '@@transducer/init': Array,
    '@@transducer/step': function(xs, x) {
      xs.push(x);
      return xs;
    },
    '@@transducer/result': _identity
  };
  var _stepCatString = {
    '@@transducer/init': String,
    '@@transducer/step': function(a, b) { return a + b; },
    '@@transducer/result': _identity
  };
  var _stepCatObject = {
    '@@transducer/init': Object,
    '@@transducer/step': function(result, input) {
      return _assign(
        result,
        _isArrayLike(input) ? objOf(input[0], input[1]) : input
      );
    },
    '@@transducer/result': _identity
  };

  return function _stepCat(obj) {
    if (_isTransformer(obj)) {
      return obj;
    }
    if (_isArrayLike(obj)) {
      return _stepCatArray;
    }
    if (typeof obj === 'string') {
      return _stepCatString;
    }
    if (typeof obj === 'object') {
      return _stepCatObject;
    }
    throw new Error('Cannot create transformer for ' + obj);
  };
}());


/***/ }),
/* 869 */
/***/ (function(module, exports) {

/**
 * Polyfill from <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString>.
 */
module.exports = (function() {
  var pad = function pad(n) { return (n < 10 ? '0' : '') + n; };

  return typeof Date.prototype.toISOString === 'function' ?
    function _toISOString(d) {
      return d.toISOString();
    } :
    function _toISOString(d) {
      return (
        d.getUTCFullYear() + '-' +
        pad(d.getUTCMonth() + 1) + '-' +
        pad(d.getUTCDate()) + 'T' +
        pad(d.getUTCHours()) + ':' +
        pad(d.getUTCMinutes()) + ':' +
        pad(d.getUTCSeconds()) + '.' +
        (d.getUTCMilliseconds() / 1000).toFixed(3).slice(2, 5) + 'Z'
      );
    };
}());


/***/ }),
/* 870 */
/***/ (function(module, exports, __webpack_require__) {

var _contains = __webpack_require__(667);
var _map = __webpack_require__(688);
var _quote = __webpack_require__(867);
var _toISOString = __webpack_require__(869);
var keys = __webpack_require__(662);
var reject = __webpack_require__(694);


module.exports = function _toString(x, seen) {
  var recur = function recur(y) {
    var xs = seen.concat([x]);
    return _contains(y, xs) ? '<Circular>' : _toString(y, xs);
  };

  //  mapPairs :: (Object, [String]) -> [String]
  var mapPairs = function(obj, keys) {
    return _map(function(k) { return _quote(k) + ': ' + recur(obj[k]); }, keys.slice().sort());
  };

  switch (Object.prototype.toString.call(x)) {
    case '[object Arguments]':
      return '(function() { return arguments; }(' + _map(recur, x).join(', ') + '))';
    case '[object Array]':
      return '[' + _map(recur, x).concat(mapPairs(x, reject(function(k) { return /^\d+$/.test(k); }, keys(x)))).join(', ') + ']';
    case '[object Boolean]':
      return typeof x === 'object' ? 'new Boolean(' + recur(x.valueOf()) + ')' : x.toString();
    case '[object Date]':
      return 'new Date(' + (isNaN(x.valueOf()) ? recur(NaN) : _quote(_toISOString(x))) + ')';
    case '[object Null]':
      return 'null';
    case '[object Number]':
      return typeof x === 'object' ? 'new Number(' + recur(x.valueOf()) + ')' : 1 / x === -Infinity ? '-0' : x.toString(10);
    case '[object String]':
      return typeof x === 'object' ? 'new String(' + recur(x.valueOf()) + ')' : _quote(x);
    case '[object Undefined]':
      return 'undefined';
    default:
      if (typeof x.toString === 'function') {
        var repr = x.toString();
        if (repr !== '[object Object]') {
          return repr;
        }
      }
      return '{' + mapPairs(x, keys(x)).join(', ') + '}';
  }
};


/***/ }),
/* 871 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(650);
var _reduced = __webpack_require__(666);
var _xfBase = __webpack_require__(654);


module.exports = (function() {
  function XAll(f, xf) {
    this.xf = xf;
    this.f = f;
    this.all = true;
  }
  XAll.prototype['@@transducer/init'] = _xfBase.init;
  XAll.prototype['@@transducer/result'] = function(result) {
    if (this.all) {
      result = this.xf['@@transducer/step'](result, true);
    }
    return this.xf['@@transducer/result'](result);
  };
  XAll.prototype['@@transducer/step'] = function(result, input) {
    if (!this.f(input)) {
      this.all = false;
      result = _reduced(this.xf['@@transducer/step'](result, false));
    }
    return result;
  };

  return _curry2(function _xall(f, xf) { return new XAll(f, xf); });
}());


/***/ }),
/* 872 */
/***/ (function(module, exports, __webpack_require__) {

var _concat = __webpack_require__(660);
var _curry2 = __webpack_require__(650);
var _xfBase = __webpack_require__(654);


module.exports = (function() {
  function XAperture(n, xf) {
    this.xf = xf;
    this.pos = 0;
    this.full = false;
    this.acc = new Array(n);
  }
  XAperture.prototype['@@transducer/init'] = _xfBase.init;
  XAperture.prototype['@@transducer/result'] = function(result) {
    this.acc = null;
    return this.xf['@@transducer/result'](result);
  };
  XAperture.prototype['@@transducer/step'] = function(result, input) {
    this.store(input);
    return this.full ? this.xf['@@transducer/step'](result, this.getCopy()) : result;
  };
  XAperture.prototype.store = function(input) {
    this.acc[this.pos] = input;
    this.pos += 1;
    if (this.pos === this.acc.length) {
      this.pos = 0;
      this.full = true;
    }
  };
  XAperture.prototype.getCopy = function() {
    return _concat(Array.prototype.slice.call(this.acc, this.pos),
                   Array.prototype.slice.call(this.acc, 0, this.pos));
  };

  return _curry2(function _xaperture(n, xf) { return new XAperture(n, xf); });
}());


/***/ }),
/* 873 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(650);
var _flatCat = __webpack_require__(859);
var map = __webpack_require__(657);


module.exports = _curry2(function _xchain(f, xf) {
  return map(f, _flatCat(xf));
});


/***/ }),
/* 874 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(650);
var _xfBase = __webpack_require__(654);


module.exports = (function() {
  function XDrop(n, xf) {
    this.xf = xf;
    this.n = n;
  }
  XDrop.prototype['@@transducer/init'] = _xfBase.init;
  XDrop.prototype['@@transducer/result'] = _xfBase.result;
  XDrop.prototype['@@transducer/step'] = function(result, input) {
    if (this.n > 0) {
      this.n -= 1;
      return result;
    }
    return this.xf['@@transducer/step'](result, input);
  };

  return _curry2(function _xdrop(n, xf) { return new XDrop(n, xf); });
}());


/***/ }),
/* 875 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(650);
var _xfBase = __webpack_require__(654);


module.exports = (function() {
  function XDropLast(n, xf) {
    this.xf = xf;
    this.pos = 0;
    this.full = false;
    this.acc = new Array(n);
  }
  XDropLast.prototype['@@transducer/init'] = _xfBase.init;
  XDropLast.prototype['@@transducer/result'] =  function(result) {
    this.acc = null;
    return this.xf['@@transducer/result'](result);
  };
  XDropLast.prototype['@@transducer/step'] = function(result, input) {
    if (this.full) {
      result = this.xf['@@transducer/step'](result, this.acc[this.pos]);
    }
    this.store(input);
    return result;
  };
  XDropLast.prototype.store = function(input) {
    this.acc[this.pos] = input;
    this.pos += 1;
    if (this.pos === this.acc.length) {
      this.pos = 0;
      this.full = true;
    }
  };

  return _curry2(function _xdropLast(n, xf) { return new XDropLast(n, xf); });
}());


/***/ }),
/* 876 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(650);
var _reduce = __webpack_require__(659);
var _xfBase = __webpack_require__(654);

module.exports = (function() {
  function XDropLastWhile(fn, xf) {
    this.f = fn;
    this.retained = [];
    this.xf = xf;
  }
  XDropLastWhile.prototype['@@transducer/init'] = _xfBase.init;
  XDropLastWhile.prototype['@@transducer/result'] = function(result) {
    this.retained = null;
    return this.xf['@@transducer/result'](result);
  };
  XDropLastWhile.prototype['@@transducer/step'] = function(result, input) {
    return this.f(input) ? this.retain(result, input)
                         : this.flush(result, input);
  };
  XDropLastWhile.prototype.flush = function(result, input) {
    result = _reduce(
      this.xf['@@transducer/step'],
      result,
      this.retained
    );
    this.retained = [];
    return this.xf['@@transducer/step'](result, input);
  };
  XDropLastWhile.prototype.retain = function(result, input) {
    this.retained.push(input);
    return result;
  };

  return _curry2(function _xdropLastWhile(fn, xf) { return new XDropLastWhile(fn, xf); });
}());


/***/ }),
/* 877 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(650);
var _xfBase = __webpack_require__(654);


module.exports = (function() {
  function XDropWhile(f, xf) {
    this.xf = xf;
    this.f = f;
  }
  XDropWhile.prototype['@@transducer/init'] = _xfBase.init;
  XDropWhile.prototype['@@transducer/result'] = _xfBase.result;
  XDropWhile.prototype['@@transducer/step'] = function(result, input) {
    if (this.f) {
      if (this.f(input)) {
        return result;
      }
      this.f = null;
    }
    return this.xf['@@transducer/step'](result, input);
  };

  return _curry2(function _xdropWhile(f, xf) { return new XDropWhile(f, xf); });
}());


/***/ }),
/* 878 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(650);
var _xfBase = __webpack_require__(654);


module.exports = (function() {
  function XFilter(f, xf) {
    this.xf = xf;
    this.f = f;
  }
  XFilter.prototype['@@transducer/init'] = _xfBase.init;
  XFilter.prototype['@@transducer/result'] = _xfBase.result;
  XFilter.prototype['@@transducer/step'] = function(result, input) {
    return this.f(input) ? this.xf['@@transducer/step'](result, input) : result;
  };

  return _curry2(function _xfilter(f, xf) { return new XFilter(f, xf); });
}());


/***/ }),
/* 879 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(650);
var _reduced = __webpack_require__(666);
var _xfBase = __webpack_require__(654);


module.exports = (function() {
  function XFind(f, xf) {
    this.xf = xf;
    this.f = f;
    this.found = false;
  }
  XFind.prototype['@@transducer/init'] = _xfBase.init;
  XFind.prototype['@@transducer/result'] = function(result) {
    if (!this.found) {
      result = this.xf['@@transducer/step'](result, void 0);
    }
    return this.xf['@@transducer/result'](result);
  };
  XFind.prototype['@@transducer/step'] = function(result, input) {
    if (this.f(input)) {
      this.found = true;
      result = _reduced(this.xf['@@transducer/step'](result, input));
    }
    return result;
  };

  return _curry2(function _xfind(f, xf) { return new XFind(f, xf); });
}());


/***/ }),
/* 880 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(650);
var _reduced = __webpack_require__(666);
var _xfBase = __webpack_require__(654);


module.exports = (function() {
  function XFindIndex(f, xf) {
    this.xf = xf;
    this.f = f;
    this.idx = -1;
    this.found = false;
  }
  XFindIndex.prototype['@@transducer/init'] = _xfBase.init;
  XFindIndex.prototype['@@transducer/result'] = function(result) {
    if (!this.found) {
      result = this.xf['@@transducer/step'](result, -1);
    }
    return this.xf['@@transducer/result'](result);
  };
  XFindIndex.prototype['@@transducer/step'] = function(result, input) {
    this.idx += 1;
    if (this.f(input)) {
      this.found = true;
      result = _reduced(this.xf['@@transducer/step'](result, this.idx));
    }
    return result;
  };

  return _curry2(function _xfindIndex(f, xf) { return new XFindIndex(f, xf); });
}());


/***/ }),
/* 881 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(650);
var _xfBase = __webpack_require__(654);


module.exports = (function() {
  function XFindLast(f, xf) {
    this.xf = xf;
    this.f = f;
  }
  XFindLast.prototype['@@transducer/init'] = _xfBase.init;
  XFindLast.prototype['@@transducer/result'] = function(result) {
    return this.xf['@@transducer/result'](this.xf['@@transducer/step'](result, this.last));
  };
  XFindLast.prototype['@@transducer/step'] = function(result, input) {
    if (this.f(input)) {
      this.last = input;
    }
    return result;
  };

  return _curry2(function _xfindLast(f, xf) { return new XFindLast(f, xf); });
}());


/***/ }),
/* 882 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(650);
var _xfBase = __webpack_require__(654);


module.exports = (function() {
  function XFindLastIndex(f, xf) {
    this.xf = xf;
    this.f = f;
    this.idx = -1;
    this.lastIdx = -1;
  }
  XFindLastIndex.prototype['@@transducer/init'] = _xfBase.init;
  XFindLastIndex.prototype['@@transducer/result'] = function(result) {
    return this.xf['@@transducer/result'](this.xf['@@transducer/step'](result, this.lastIdx));
  };
  XFindLastIndex.prototype['@@transducer/step'] = function(result, input) {
    this.idx += 1;
    if (this.f(input)) {
      this.lastIdx = this.idx;
    }
    return result;
  };

  return _curry2(function _xfindLastIndex(f, xf) { return new XFindLastIndex(f, xf); });
}());


/***/ }),
/* 883 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(650);
var _xfBase = __webpack_require__(654);


module.exports = (function() {
  function XMap(f, xf) {
    this.xf = xf;
    this.f = f;
  }
  XMap.prototype['@@transducer/init'] = _xfBase.init;
  XMap.prototype['@@transducer/result'] = _xfBase.result;
  XMap.prototype['@@transducer/step'] = function(result, input) {
    return this.xf['@@transducer/step'](result, this.f(input));
  };

  return _curry2(function _xmap(f, xf) { return new XMap(f, xf); });
}());


/***/ }),
/* 884 */
/***/ (function(module, exports, __webpack_require__) {

var _curryN = __webpack_require__(684);
var _has = __webpack_require__(656);
var _xfBase = __webpack_require__(654);


module.exports = (function() {
  function XReduceBy(valueFn, valueAcc, keyFn, xf) {
    this.valueFn = valueFn;
    this.valueAcc = valueAcc;
    this.keyFn = keyFn;
    this.xf = xf;
    this.inputs = {};
  }
  XReduceBy.prototype['@@transducer/init'] = _xfBase.init;
  XReduceBy.prototype['@@transducer/result'] = function(result) {
    var key;
    for (key in this.inputs) {
      if (_has(key, this.inputs)) {
        result = this.xf['@@transducer/step'](result, this.inputs[key]);
        if (result['@@transducer/reduced']) {
          result = result['@@transducer/value'];
          break;
        }
      }
    }
    this.inputs = null;
    return this.xf['@@transducer/result'](result);
  };
  XReduceBy.prototype['@@transducer/step'] = function(result, input) {
    var key = this.keyFn(input);
    this.inputs[key] = this.inputs[key] || [key, this.valueAcc];
    this.inputs[key][1] = this.valueFn(this.inputs[key][1], input);
    return result;
  };

  return _curryN(4, [],
                 function _xreduceBy(valueFn, valueAcc, keyFn, xf) {
                   return new XReduceBy(valueFn, valueAcc, keyFn, xf);
                 });
}());


/***/ }),
/* 885 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(650);
var _reduced = __webpack_require__(666);
var _xfBase = __webpack_require__(654);

module.exports = (function() {
  function XTake(n, xf) {
    this.xf = xf;
    this.n = n;
    this.i = 0;
  }
  XTake.prototype['@@transducer/init'] = _xfBase.init;
  XTake.prototype['@@transducer/result'] = _xfBase.result;
  XTake.prototype['@@transducer/step'] = function(result, input) {
    this.i += 1;
    var ret = this.n === 0 ? result : this.xf['@@transducer/step'](result, input);
    return this.n >= 0 && this.i >= this.n ? _reduced(ret) : ret;
  };

  return _curry2(function _xtake(n, xf) { return new XTake(n, xf); });
}());


/***/ }),
/* 886 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(650);
var _reduced = __webpack_require__(666);
var _xfBase = __webpack_require__(654);


module.exports = (function() {
  function XTakeWhile(f, xf) {
    this.xf = xf;
    this.f = f;
  }
  XTakeWhile.prototype['@@transducer/init'] = _xfBase.init;
  XTakeWhile.prototype['@@transducer/result'] = _xfBase.result;
  XTakeWhile.prototype['@@transducer/step'] = function(result, input) {
    return this.f(input) ? this.xf['@@transducer/step'](result, input) : _reduced(result);
  };

  return _curry2(function _xtakeWhile(f, xf) { return new XTakeWhile(f, xf); });
}());


/***/ }),
/* 887 */
/***/ (function(module, exports, __webpack_require__) {

var _contains = __webpack_require__(667);
var _curry2 = __webpack_require__(650);
var _filter = __webpack_require__(704);
var flip = __webpack_require__(682);
var uniq = __webpack_require__(714);


/**
 * Combines two lists into a set (i.e. no duplicates) composed of those
 * elements common to both lists.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig [*] -> [*] -> [*]
 * @param {Array} list1 The first list.
 * @param {Array} list2 The second list.
 * @return {Array} The list of elements found in both `list1` and `list2`.
 * @see R.innerJoin
 * @example
 *
 *      R.intersection([1,2,3,4], [7,6,5,4,3]); //=> [4, 3]
 */
module.exports = _curry2(function intersection(list1, list2) {
  var lookupList, filteredList;
  if (list1.length > list2.length) {
    lookupList = list1;
    filteredList = list2;
  } else {
    lookupList = list2;
    filteredList = list1;
  }
  return uniq(_filter(flip(_contains)(lookupList), filteredList));
});


/***/ }),
/* 888 */
/***/ (function(module, exports, __webpack_require__) {

var _containsWith = __webpack_require__(683);
var _curry3 = __webpack_require__(652);
var uniqWith = __webpack_require__(715);


/**
 * Combines two lists into a set (i.e. no duplicates) composed of those
 * elements common to both lists. Duplication is determined according to the
 * value returned by applying the supplied predicate to two list elements.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig ((a, a) -> Boolean) -> [a] -> [a] -> [a]
 * @param {Function} pred A predicate function that determines whether
 *        the two supplied elements are equal.
 * @param {Array} list1 One list of items to compare
 * @param {Array} list2 A second list of items to compare
 * @return {Array} A new list containing those elements common to both lists.
 * @see R.innerJoin
 * @deprecated since v0.24.0
 * @example
 *
 *      var buffaloSpringfield = [
 *        {id: 824, name: 'Richie Furay'},
 *        {id: 956, name: 'Dewey Martin'},
 *        {id: 313, name: 'Bruce Palmer'},
 *        {id: 456, name: 'Stephen Stills'},
 *        {id: 177, name: 'Neil Young'}
 *      ];
 *      var csny = [
 *        {id: 204, name: 'David Crosby'},
 *        {id: 456, name: 'Stephen Stills'},
 *        {id: 539, name: 'Graham Nash'},
 *        {id: 177, name: 'Neil Young'}
 *      ];
 *
 *      R.intersectionWith(R.eqBy(R.prop('id')), buffaloSpringfield, csny);
 *      //=> [{id: 456, name: 'Stephen Stills'}, {id: 177, name: 'Neil Young'}]
 */
module.exports = _curry3(function intersectionWith(pred, list1, list2) {
  var lookupList, filteredList;
  if (list1.length > list2.length) {
    lookupList = list1;
    filteredList = list2;
  } else {
    lookupList = list2;
    filteredList = list1;
  }
  var results = [];
  var idx = 0;
  while (idx < filteredList.length) {
    if (_containsWith(pred, filteredList[idx], lookupList)) {
      results[results.length] = filteredList[idx];
    }
    idx += 1;
  }
  return uniqWith(pred, results);
});


/***/ }),
/* 889 */
/***/ (function(module, exports, __webpack_require__) {

var _checkForMethod = __webpack_require__(671);
var _curry2 = __webpack_require__(650);


/**
 * Creates a new list with the separator interposed between elements.
 *
 * Dispatches to the `intersperse` method of the second argument, if present.
 *
 * @func
 * @memberOf R
 * @since v0.14.0
 * @category List
 * @sig a -> [a] -> [a]
 * @param {*} separator The element to add to the list.
 * @param {Array} list The list to be interposed.
 * @return {Array} The new list.
 * @example
 *
 *      R.intersperse('n', ['ba', 'a', 'a']); //=> ['ba', 'n', 'a', 'n', 'a']
 */
module.exports = _curry2(_checkForMethod('intersperse', function intersperse(separator, list) {
  var out = [];
  var idx = 0;
  var length = list.length;
  while (idx < length) {
    if (idx === length - 1) {
      out.push(list[idx]);
    } else {
      out.push(list[idx], separator);
    }
    idx += 1;
  }
  return out;
}));


/***/ }),
/* 890 */
/***/ (function(module, exports, __webpack_require__) {

var _clone = __webpack_require__(740);
var _curry3 = __webpack_require__(652);
var _isTransformer = __webpack_require__(708);
var _reduce = __webpack_require__(659);
var _stepCat = __webpack_require__(868);


/**
 * Transforms the items of the list with the transducer and appends the
 * transformed items to the accumulator using an appropriate iterator function
 * based on the accumulator type.
 *
 * The accumulator can be an array, string, object or a transformer. Iterated
 * items will be appended to arrays and concatenated to strings. Objects will
 * be merged directly or 2-item arrays will be merged as key, value pairs.
 *
 * The accumulator can also be a transformer object that provides a 2-arity
 * reducing iterator function, step, 0-arity initial value function, init, and
 * 1-arity result extraction function result. The step function is used as the
 * iterator function in reduce. The result function is used to convert the
 * final accumulator into the return type and in most cases is R.identity. The
 * init function is used to provide the initial accumulator.
 *
 * The iteration is performed with [`R.reduce`](#reduce) after initializing the
 * transducer.
 *
 * @func
 * @memberOf R
 * @since v0.12.0
 * @category List
 * @sig a -> (b -> b) -> [c] -> a
 * @param {*} acc The initial accumulator value.
 * @param {Function} xf The transducer function. Receives a transformer and returns a transformer.
 * @param {Array} list The list to iterate over.
 * @return {*} The final, accumulated value.
 * @example
 *
 *      var numbers = [1, 2, 3, 4];
 *      var transducer = R.compose(R.map(R.add(1)), R.take(2));
 *
 *      R.into([], transducer, numbers); //=> [2, 3]
 *
 *      var intoArray = R.into([]);
 *      intoArray(transducer, numbers); //=> [2, 3]
 */
module.exports = _curry3(function into(acc, xf, list) {
  return _isTransformer(acc) ?
    _reduce(xf(acc), acc['@@transducer/init'](), list) :
    _reduce(xf(_stepCat(acc)), _clone(acc, [], [], false), list);
});


/***/ }),
/* 891 */
/***/ (function(module, exports, __webpack_require__) {

var _curry1 = __webpack_require__(651);
var _has = __webpack_require__(656);
var keys = __webpack_require__(662);


/**
 * Same as [`R.invertObj`](#invertObj), however this accounts for objects with
 * duplicate values by putting the values into an array.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category Object
 * @sig {s: x} -> {x: [ s, ... ]}
 * @param {Object} obj The object or array to invert
 * @return {Object} out A new object with keys in an array.
 * @see R.invertObj
 * @example
 *
 *      var raceResultsByFirstName = {
 *        first: 'alice',
 *        second: 'jake',
 *        third: 'alice',
 *      };
 *      R.invert(raceResultsByFirstName);
 *      //=> { 'alice': ['first', 'third'], 'jake':['second'] }
 */
module.exports = _curry1(function invert(obj) {
  var props = keys(obj);
  var len = props.length;
  var idx = 0;
  var out = {};

  while (idx < len) {
    var key = props[idx];
    var val = obj[key];
    var list = _has(val, out) ? out[val] : (out[val] = []);
    list[list.length] = key;
    idx += 1;
  }
  return out;
});


/***/ }),
/* 892 */
/***/ (function(module, exports, __webpack_require__) {

var _curry1 = __webpack_require__(651);
var keys = __webpack_require__(662);


/**
 * Returns a new object with the keys of the given object as values, and the
 * values of the given object, which are coerced to strings, as keys. Note
 * that the last key found is preferred when handling the same value.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category Object
 * @sig {s: x} -> {x: s}
 * @param {Object} obj The object or array to invert
 * @return {Object} out A new object
 * @see R.invert
 * @example
 *
 *      var raceResults = {
 *        first: 'alice',
 *        second: 'jake'
 *      };
 *      R.invertObj(raceResults);
 *      //=> { 'alice': 'first', 'jake':'second' }
 *
 *      // Alternatively:
 *      var raceResults = ['alice', 'jake'];
 *      R.invertObj(raceResults);
 *      //=> { 'alice': '0', 'jake':'1' }
 */
module.exports = _curry1(function invertObj(obj) {
  var props = keys(obj);
  var len = props.length;
  var idx = 0;
  var out = {};

  while (idx < len) {
    var key = props[idx];
    out[obj[key]] = key;
    idx += 1;
  }
  return out;
});


/***/ }),
/* 893 */
/***/ (function(module, exports, __webpack_require__) {

var _curry1 = __webpack_require__(651);
var empty = __webpack_require__(738);
var equals = __webpack_require__(658);


/**
 * Returns `true` if the given value is its type's empty value; `false`
 * otherwise.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Logic
 * @sig a -> Boolean
 * @param {*} x
 * @return {Boolean}
 * @see R.empty
 * @example
 *
 *      R.isEmpty([1, 2, 3]);   //=> false
 *      R.isEmpty([]);          //=> true
 *      R.isEmpty('');          //=> true
 *      R.isEmpty(null);        //=> false
 *      R.isEmpty({});          //=> true
 *      R.isEmpty({length: 0}); //=> false
 */
module.exports = _curry1(function isEmpty(x) {
  return x != null && equals(x, empty(x));
});


/***/ }),
/* 894 */
/***/ (function(module, exports, __webpack_require__) {

var invoker = __webpack_require__(673);


/**
 * Returns a string made by inserting the `separator` between each element and
 * concatenating all the elements into a single string.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig String -> [a] -> String
 * @param {Number|String} separator The string used to separate the elements.
 * @param {Array} xs The elements to join into a string.
 * @return {String} str The string made by concatenating `xs` with `separator`.
 * @see R.split
 * @example
 *
 *      var spacer = R.join(' ');
 *      spacer(['a', 2, 3.4]);   //=> 'a 2 3.4'
 *      R.join('|', [1, 2, 3]);    //=> '1|2|3'
 */
module.exports = invoker(1, 'join');


/***/ }),
/* 895 */
/***/ (function(module, exports, __webpack_require__) {

var _curry1 = __webpack_require__(651);


/**
 * Returns a list containing the names of all the properties of the supplied
 * object, including prototype properties.
 * Note that the order of the output array is not guaranteed to be consistent
 * across different JS platforms.
 *
 * @func
 * @memberOf R
 * @since v0.2.0
 * @category Object
 * @sig {k: v} -> [k]
 * @param {Object} obj The object to extract properties from
 * @return {Array} An array of the object's own and prototype properties.
 * @see R.keys, R.valuesIn
 * @example
 *
 *      var F = function() { this.x = 'X'; };
 *      F.prototype.y = 'Y';
 *      var f = new F();
 *      R.keysIn(f); //=> ['x', 'y']
 */
module.exports = _curry1(function keysIn(obj) {
  var prop;
  var ks = [];
  for (prop in obj) {
    ks[ks.length] = prop;
  }
  return ks;
});


/***/ }),
/* 896 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(650);
var _isArray = __webpack_require__(665);
var equals = __webpack_require__(658);


/**
 * Returns the position of the last occurrence of an item in an array, or -1 if
 * the item is not included in the array. [`R.equals`](#equals) is used to
 * determine equality.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig a -> [a] -> Number
 * @param {*} target The item to find.
 * @param {Array} xs The array to search in.
 * @return {Number} the index of the target, or -1 if the target is not found.
 * @see R.indexOf
 * @example
 *
 *      R.lastIndexOf(3, [-1,3,3,0,1,2,3,4]); //=> 6
 *      R.lastIndexOf(10, [1,2,3,4]); //=> -1
 */
module.exports = _curry2(function lastIndexOf(target, xs) {
  if (typeof xs.lastIndexOf === 'function' && !_isArray(xs)) {
    return xs.lastIndexOf(target);
  } else {
    var idx = xs.length - 1;
    while (idx >= 0) {
      if (equals(xs[idx], target)) {
        return idx;
      }
      idx -= 1;
    }
    return -1;
  }
});


/***/ }),
/* 897 */
/***/ (function(module, exports, __webpack_require__) {

var _curry1 = __webpack_require__(651);
var lens = __webpack_require__(689);
var nth = __webpack_require__(674);
var update = __webpack_require__(716);


/**
 * Returns a lens whose focus is the specified index.
 *
 * @func
 * @memberOf R
 * @since v0.14.0
 * @category Object
 * @typedefn Lens s a = Functor f => (a -> f a) -> s -> f s
 * @sig Number -> Lens s a
 * @param {Number} n
 * @return {Lens}
 * @see R.view, R.set, R.over
 * @example
 *
 *      var headLens = R.lensIndex(0);
 *
 *      R.view(headLens, ['a', 'b', 'c']);            //=> 'a'
 *      R.set(headLens, 'x', ['a', 'b', 'c']);        //=> ['x', 'b', 'c']
 *      R.over(headLens, R.toUpper, ['a', 'b', 'c']); //=> ['A', 'b', 'c']
 */
module.exports = _curry1(function lensIndex(n) {
  return lens(nth(n), update(n));
});


/***/ }),
/* 898 */
/***/ (function(module, exports, __webpack_require__) {

var _curry1 = __webpack_require__(651);
var assocPath = __webpack_require__(727);
var lens = __webpack_require__(689);
var path = __webpack_require__(675);


/**
 * Returns a lens whose focus is the specified path.
 *
 * @func
 * @memberOf R
 * @since v0.19.0
 * @category Object
 * @typedefn Idx = String | Int
 * @typedefn Lens s a = Functor f => (a -> f a) -> s -> f s
 * @sig [Idx] -> Lens s a
 * @param {Array} path The path to use.
 * @return {Lens}
 * @see R.view, R.set, R.over
 * @example
 *
 *      var xHeadYLens = R.lensPath(['x', 0, 'y']);
 *
 *      R.view(xHeadYLens, {x: [{y: 2, z: 3}, {y: 4, z: 5}]});
 *      //=> 2
 *      R.set(xHeadYLens, 1, {x: [{y: 2, z: 3}, {y: 4, z: 5}]});
 *      //=> {x: [{y: 1, z: 3}, {y: 4, z: 5}]}
 *      R.over(xHeadYLens, R.negate, {x: [{y: 2, z: 3}, {y: 4, z: 5}]});
 *      //=> {x: [{y: -2, z: 3}, {y: 4, z: 5}]}
 */
module.exports = _curry1(function lensPath(p) {
  return lens(path(p), assocPath(p));
});


/***/ }),
/* 899 */
/***/ (function(module, exports, __webpack_require__) {

var _curry1 = __webpack_require__(651);
var assoc = __webpack_require__(680);
var lens = __webpack_require__(689);
var prop = __webpack_require__(710);


/**
 * Returns a lens whose focus is the specified property.
 *
 * @func
 * @memberOf R
 * @since v0.14.0
 * @category Object
 * @typedefn Lens s a = Functor f => (a -> f a) -> s -> f s
 * @sig String -> Lens s a
 * @param {String} k
 * @return {Lens}
 * @see R.view, R.set, R.over
 * @example
 *
 *      var xLens = R.lensProp('x');
 *
 *      R.view(xLens, {x: 1, y: 2});            //=> 1
 *      R.set(xLens, 4, {x: 1, y: 2});          //=> {x: 4, y: 2}
 *      R.over(xLens, R.negate, {x: 1, y: 2});  //=> {x: -1, y: 2}
 */
module.exports = _curry1(function lensProp(k) {
  return lens(prop(k), assoc(k));
});


/***/ }),
/* 900 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(650);


/**
 * Returns `true` if the first argument is less than the second; `false`
 * otherwise.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig Ord a => a -> a -> Boolean
 * @param {*} a
 * @param {*} b
 * @return {Boolean}
 * @see R.gt
 * @example
 *
 *      R.lt(2, 1); //=> false
 *      R.lt(2, 2); //=> false
 *      R.lt(2, 3); //=> true
 *      R.lt('a', 'z'); //=> true
 *      R.lt('z', 'a'); //=> false
 */
module.exports = _curry2(function lt(a, b) { return a < b; });


/***/ }),
/* 901 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(650);


/**
 * Returns `true` if the first argument is less than or equal to the second;
 * `false` otherwise.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig Ord a => a -> a -> Boolean
 * @param {Number} a
 * @param {Number} b
 * @return {Boolean}
 * @see R.gte
 * @example
 *
 *      R.lte(2, 1); //=> false
 *      R.lte(2, 2); //=> true
 *      R.lte(2, 3); //=> true
 *      R.lte('a', 'z'); //=> true
 *      R.lte('z', 'a'); //=> false
 */
module.exports = _curry2(function lte(a, b) { return a <= b; });


/***/ }),
/* 902 */
/***/ (function(module, exports, __webpack_require__) {

var _curry3 = __webpack_require__(652);


/**
 * The `mapAccum` function behaves like a combination of map and reduce; it
 * applies a function to each element of a list, passing an accumulating
 * parameter from left to right, and returning a final value of this
 * accumulator together with the new list.
 *
 * The iterator function receives two arguments, *acc* and *value*, and should
 * return a tuple *[acc, value]*.
 *
 * @func
 * @memberOf R
 * @since v0.10.0
 * @category List
 * @sig (acc -> x -> (acc, y)) -> acc -> [x] -> (acc, [y])
 * @param {Function} fn The function to be called on every element of the input `list`.
 * @param {*} acc The accumulator value.
 * @param {Array} list The list to iterate over.
 * @return {*} The final, accumulated value.
 * @see R.addIndex, R.mapAccumRight
 * @example
 *
 *      var digits = ['1', '2', '3', '4'];
 *      var appender = (a, b) => [a + b, a + b];
 *
 *      R.mapAccum(appender, 0, digits); //=> ['01234', ['01', '012', '0123', '01234']]
 * @symb R.mapAccum(f, a, [b, c, d]) = [
 *   f(f(f(a, b)[0], c)[0], d)[0],
 *   [
 *     f(a, b)[1],
 *     f(f(a, b)[0], c)[1],
 *     f(f(f(a, b)[0], c)[0], d)[1]
 *   ]
 * ]
 */
module.exports = _curry3(function mapAccum(fn, acc, list) {
  var idx = 0;
  var len = list.length;
  var result = [];
  var tuple = [acc];
  while (idx < len) {
    tuple = fn(tuple[0], list[idx]);
    result[idx] = tuple[1];
    idx += 1;
  }
  return [tuple[0], result];
});


/***/ }),
/* 903 */
/***/ (function(module, exports, __webpack_require__) {

var _curry3 = __webpack_require__(652);


/**
 * The `mapAccumRight` function behaves like a combination of map and reduce; it
 * applies a function to each element of a list, passing an accumulating
 * parameter from right to left, and returning a final value of this
 * accumulator together with the new list.
 *
 * Similar to [`mapAccum`](#mapAccum), except moves through the input list from
 * the right to the left.
 *
 * The iterator function receives two arguments, *value* and *acc*, and should
 * return a tuple *[value, acc]*.
 *
 * @func
 * @memberOf R
 * @since v0.10.0
 * @category List
 * @sig (x-> acc -> (y, acc)) -> acc -> [x] -> ([y], acc)
 * @param {Function} fn The function to be called on every element of the input `list`.
 * @param {*} acc The accumulator value.
 * @param {Array} list The list to iterate over.
 * @return {*} The final, accumulated value.
 * @see R.addIndex, R.mapAccum
 * @example
 *
 *      var digits = ['1', '2', '3', '4'];
 *      var append = (a, b) => [a + b, a + b];
 *
 *      R.mapAccumRight(append, 5, digits); //=> [['12345', '2345', '345', '45'], '12345']
 * @symb R.mapAccumRight(f, a, [b, c, d]) = [
 *   [
 *     f(b, f(c, f(d, a)[0])[0])[1],
 *     f(c, f(d, a)[0])[1],
 *     f(d, a)[1],
 *   ]
 *   f(b, f(c, f(d, a)[0])[0])[0],
 * ]
 */
module.exports = _curry3(function mapAccumRight(fn, acc, list) {
  var idx = list.length - 1;
  var result = [];
  var tuple = [acc];
  while (idx >= 0) {
    tuple = fn(list[idx], tuple[0]);
    result[idx] = tuple[1];
    idx -= 1;
  }
  return [result, tuple[0]];
});


/***/ }),
/* 904 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(650);
var _reduce = __webpack_require__(659);
var keys = __webpack_require__(662);


/**
 * An Object-specific version of [`map`](#map). The function is applied to three
 * arguments: *(value, key, obj)*. If only the value is significant, use
 * [`map`](#map) instead.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category Object
 * @sig ((*, String, Object) -> *) -> Object -> Object
 * @param {Function} fn
 * @param {Object} obj
 * @return {Object}
 * @see R.map
 * @example
 *
 *      var values = { x: 1, y: 2, z: 3 };
 *      var prependKeyAndDouble = (num, key, obj) => key + (num * 2);
 *
 *      R.mapObjIndexed(prependKeyAndDouble, values); //=> { x: 'x2', y: 'y4', z: 'z6' }
 */
module.exports = _curry2(function mapObjIndexed(fn, obj) {
  return _reduce(function(acc, key) {
    acc[key] = fn(obj[key], key, obj);
    return acc;
  }, {}, keys(obj));
});


/***/ }),
/* 905 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(650);


/**
 * Tests a regular expression against a String. Note that this function will
 * return an empty array when there are no matches. This differs from
 * [`String.prototype.match`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match)
 * which returns `null` when there are no matches.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category String
 * @sig RegExp -> String -> [String | Undefined]
 * @param {RegExp} rx A regular expression.
 * @param {String} str The string to match against
 * @return {Array} The list of matches or empty array.
 * @see R.test
 * @example
 *
 *      R.match(/([a-z]a)/g, 'bananas'); //=> ['ba', 'na', 'na']
 *      R.match(/a/, 'b'); //=> []
 *      R.match(/a/, null); //=> TypeError: null does not have a method named "match"
 */
module.exports = _curry2(function match(rx, str) {
  return str.match(rx) || [];
});


/***/ }),
/* 906 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(650);
var _isInteger = __webpack_require__(706);


/**
 * `mathMod` behaves like the modulo operator should mathematically, unlike the
 * `%` operator (and by extension, [`R.modulo`](#modulo)). So while
 * `-17 % 5` is `-2`, `mathMod(-17, 5)` is `3`. `mathMod` requires Integer
 * arguments, and returns NaN when the modulus is zero or negative.
 *
 * @func
 * @memberOf R
 * @since v0.3.0
 * @category Math
 * @sig Number -> Number -> Number
 * @param {Number} m The dividend.
 * @param {Number} p the modulus.
 * @return {Number} The result of `b mod a`.
 * @see R.modulo
 * @example
 *
 *      R.mathMod(-17, 5);  //=> 3
 *      R.mathMod(17, 5);   //=> 2
 *      R.mathMod(17, -5);  //=> NaN
 *      R.mathMod(17, 0);   //=> NaN
 *      R.mathMod(17.2, 5); //=> NaN
 *      R.mathMod(17, 5.3); //=> NaN
 *
 *      var clock = R.mathMod(R.__, 12);
 *      clock(15); //=> 3
 *      clock(24); //=> 0
 *
 *      var seventeenMod = R.mathMod(17);
 *      seventeenMod(3);  //=> 2
 *      seventeenMod(4);  //=> 1
 *      seventeenMod(10); //=> 7
 */
module.exports = _curry2(function mathMod(m, p) {
  if (!_isInteger(m)) { return NaN; }
  if (!_isInteger(p) || p < 1) { return NaN; }
  return ((m % p) + p) % p;
});


/***/ }),
/* 907 */
/***/ (function(module, exports, __webpack_require__) {

var _curry3 = __webpack_require__(652);


/**
 * Takes a function and two values, and returns whichever value produces the
 * larger result when passed to the provided function.
 *
 * @func
 * @memberOf R
 * @since v0.8.0
 * @category Relation
 * @sig Ord b => (a -> b) -> a -> a -> a
 * @param {Function} f
 * @param {*} a
 * @param {*} b
 * @return {*}
 * @see R.max, R.minBy
 * @example
 *
 *      //  square :: Number -> Number
 *      var square = n => n * n;
 *
 *      R.maxBy(square, -3, 2); //=> -3
 *
 *      R.reduce(R.maxBy(square), 0, [3, -5, 4, 1, -2]); //=> -5
 *      R.reduce(R.maxBy(square), 0, []); //=> 0
 */
module.exports = _curry3(function maxBy(f, a, b) {
  return f(b) > f(a) ? b : a;
});


/***/ }),
/* 908 */
/***/ (function(module, exports, __webpack_require__) {

var _curry1 = __webpack_require__(651);
var mean = __webpack_require__(757);


/**
 * Returns the median of the given list of numbers.
 *
 * @func
 * @memberOf R
 * @since v0.14.0
 * @category Math
 * @sig [Number] -> Number
 * @param {Array} list
 * @return {Number}
 * @see R.mean
 * @example
 *
 *      R.median([2, 9, 7]); //=> 7
 *      R.median([7, 2, 10, 9]); //=> 8
 *      R.median([]); //=> NaN
 */
module.exports = _curry1(function median(list) {
  var len = list.length;
  if (len === 0) {
    return NaN;
  }
  var width = 2 - len % 2;
  var idx = (len - width) / 2;
  return mean(Array.prototype.slice.call(list, 0).sort(function(a, b) {
    return a < b ? -1 : a > b ? 1 : 0;
  }).slice(idx, idx + width));
});


/***/ }),
/* 909 */
/***/ (function(module, exports, __webpack_require__) {

var memoizeWith = __webpack_require__(758);
var toString = __webpack_require__(677);


/**
 * Creates a new function that, when invoked, caches the result of calling `fn`
 * for a given argument set and returns the result. Subsequent calls to the
 * memoized `fn` with the same argument set will not result in an additional
 * call to `fn`; instead, the cached result for that set of arguments will be
 * returned.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig (*... -> a) -> (*... -> a)
 * @param {Function} fn The function to memoize.
 * @return {Function} Memoized version of `fn`.
 * @see R.memoizeWith
 * @example
 *
 *      let count = 0;
 *      const factorial = R.memoize(n => {
 *        count += 1;
 *        return R.product(R.range(1, n + 1));
 *      });
 *      factorial(5); //=> 120
 *      factorial(5); //=> 120
 *      factorial(5); //=> 120
 *      count; //=> 1
 */
module.exports = memoizeWith(function() {
  return toString(arguments);
});


/***/ }),
/* 910 */
/***/ (function(module, exports, __webpack_require__) {

var _assign = __webpack_require__(703);
var _curry2 = __webpack_require__(650);


/**
 * Create a new object with the own properties of the first object merged with
 * the own properties of the second object. If a key exists in both objects,
 * the value from the second object will be used.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Object
 * @sig {k: v} -> {k: v} -> {k: v}
 * @param {Object} l
 * @param {Object} r
 * @return {Object}
 * @see R.mergeDeepRight, R.mergeWith, R.mergeWithKey
 * @example
 *
 *      R.merge({ 'name': 'fred', 'age': 10 }, { 'age': 40 });
 *      //=> { 'name': 'fred', 'age': 40 }
 *
 *      var resetToDefault = R.merge(R.__, {x: 0});
 *      resetToDefault({x: 5, y: 2}); //=> {x: 0, y: 2}
 * @symb R.merge({ x: 1, y: 2 }, { y: 5, z: 3 }) = { x: 1, y: 5, z: 3 }
 */
module.exports = _curry2(function merge(l, r) {
  return _assign({}, l, r);
});


/***/ }),
/* 911 */
/***/ (function(module, exports, __webpack_require__) {

var _assign = __webpack_require__(703);
var _curry1 = __webpack_require__(651);


/**
 * Merges a list of objects together into one object.
 *
 * @func
 * @memberOf R
 * @since v0.10.0
 * @category List
 * @sig [{k: v}] -> {k: v}
 * @param {Array} list An array of objects
 * @return {Object} A merged object.
 * @see R.reduce
 * @example
 *
 *      R.mergeAll([{foo:1},{bar:2},{baz:3}]); //=> {foo:1,bar:2,baz:3}
 *      R.mergeAll([{foo:1},{foo:2},{bar:2}]); //=> {foo:2,bar:2}
 * @symb R.mergeAll([{ x: 1 }, { y: 2 }, { z: 3 }]) = { x: 1, y: 2, z: 3 }
 */
module.exports = _curry1(function mergeAll(list) {
  return _assign.apply(null, [{}].concat(list));
});


/***/ }),
/* 912 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(650);
var mergeDeepWithKey = __webpack_require__(691);


/**
 * Creates a new object with the own properties of the first object merged with
 * the own properties of the second object. If a key exists in both objects:
 * - and both values are objects, the two values will be recursively merged
 * - otherwise the value from the first object will be used.
 *
 * @func
 * @memberOf R
 * @since v0.24.0
 * @category Object
 * @sig {a} -> {a} -> {a}
 * @param {Object} lObj
 * @param {Object} rObj
 * @return {Object}
 * @see R.merge, R.mergeDeepRight, R.mergeDeepWith, R.mergeDeepWithKey
 * @example
 *
 *      R.mergeDeepLeft({ name: 'fred', age: 10, contact: { email: 'moo@example.com' }},
 *                      { age: 40, contact: { email: 'baa@example.com' }});
 *      //=> { name: 'fred', age: 10, contact: { email: 'moo@example.com' }}
 */
module.exports = _curry2(function mergeDeepLeft(lObj, rObj) {
  return mergeDeepWithKey(function(k, lVal, rVal) {
    return lVal;
  }, lObj, rObj);
});


/***/ }),
/* 913 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(650);
var mergeDeepWithKey = __webpack_require__(691);


/**
 * Creates a new object with the own properties of the first object merged with
 * the own properties of the second object. If a key exists in both objects:
 * - and both values are objects, the two values will be recursively merged
 * - otherwise the value from the second object will be used.
 *
 * @func
 * @memberOf R
 * @since v0.24.0
 * @category Object
 * @sig {a} -> {a} -> {a}
 * @param {Object} lObj
 * @param {Object} rObj
 * @return {Object}
 * @see R.merge, R.mergeDeepLeft, R.mergeDeepWith, R.mergeDeepWithKey
 * @example
 *
 *      R.mergeDeepRight({ name: 'fred', age: 10, contact: { email: 'moo@example.com' }},
 *                       { age: 40, contact: { email: 'baa@example.com' }});
 *      //=> { name: 'fred', age: 40, contact: { email: 'baa@example.com' }}
 */
module.exports = _curry2(function mergeDeepRight(lObj, rObj) {
  return mergeDeepWithKey(function(k, lVal, rVal) {
    return rVal;
  }, lObj, rObj);
});


/***/ }),
/* 914 */
/***/ (function(module, exports, __webpack_require__) {

var _curry3 = __webpack_require__(652);
var mergeDeepWithKey = __webpack_require__(691);


/**
 * Creates a new object with the own properties of the two provided objects.
 * If a key exists in both objects:
 * - and both associated values are also objects then the values will be
 *   recursively merged.
 * - otherwise the provided function is applied to associated values using the
 *   resulting value as the new value associated with the key.
 * If a key only exists in one object, the value will be associated with the key
 * of the resulting object.
 *
 * @func
 * @memberOf R
 * @since v0.24.0
 * @category Object
 * @sig (a -> a -> a) -> {a} -> {a} -> {a}
 * @param {Function} fn
 * @param {Object} lObj
 * @param {Object} rObj
 * @return {Object}
 * @see R.mergeWith, R.mergeDeep, R.mergeDeepWithKey
 * @example
 *
 *      R.mergeDeepWith(R.concat,
 *                      { a: true, c: { values: [10, 20] }},
 *                      { b: true, c: { values: [15, 35] }});
 *      //=> { a: true, b: true, c: { values: [10, 20, 15, 35] }}
 */
module.exports = _curry3(function mergeDeepWith(fn, lObj, rObj) {
  return mergeDeepWithKey(function(k, lVal, rVal) {
    return fn(lVal, rVal);
  }, lObj, rObj);
});


/***/ }),
/* 915 */
/***/ (function(module, exports, __webpack_require__) {

var _curry3 = __webpack_require__(652);
var mergeWithKey = __webpack_require__(709);


/**
 * Creates a new object with the own properties of the two provided objects. If
 * a key exists in both objects, the provided function is applied to the values
 * associated with the key in each object, with the result being used as the
 * value associated with the key in the returned object.
 *
 * @func
 * @memberOf R
 * @since v0.19.0
 * @category Object
 * @sig (a -> a -> a) -> {a} -> {a} -> {a}
 * @param {Function} fn
 * @param {Object} l
 * @param {Object} r
 * @return {Object}
 * @see R.mergeDeepWith, R.merge, R.mergeWithKey
 * @example
 *
 *      R.mergeWith(R.concat,
 *                  { a: true, values: [10, 20] },
 *                  { b: true, values: [15, 35] });
 *      //=> { a: true, b: true, values: [10, 20, 15, 35] }
 */
module.exports = _curry3(function mergeWith(fn, l, r) {
  return mergeWithKey(function(_, _l, _r) {
    return fn(_l, _r);
  }, l, r);
});


/***/ }),
/* 916 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(650);


/**
 * Returns the smaller of its two arguments.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig Ord a => a -> a -> a
 * @param {*} a
 * @param {*} b
 * @return {*}
 * @see R.minBy, R.max
 * @example
 *
 *      R.min(789, 123); //=> 123
 *      R.min('a', 'b'); //=> 'a'
 */
module.exports = _curry2(function min(a, b) { return b < a ? b : a; });


/***/ }),
/* 917 */
/***/ (function(module, exports, __webpack_require__) {

var _curry3 = __webpack_require__(652);


/**
 * Takes a function and two values, and returns whichever value produces the
 * smaller result when passed to the provided function.
 *
 * @func
 * @memberOf R
 * @since v0.8.0
 * @category Relation
 * @sig Ord b => (a -> b) -> a -> a -> a
 * @param {Function} f
 * @param {*} a
 * @param {*} b
 * @return {*}
 * @see R.min, R.maxBy
 * @example
 *
 *      //  square :: Number -> Number
 *      var square = n => n * n;
 *
 *      R.minBy(square, -3, 2); //=> 2
 *
 *      R.reduce(R.minBy(square), Infinity, [3, -5, 4, 1, -2]); //=> 1
 *      R.reduce(R.minBy(square), Infinity, []); //=> Infinity
 */
module.exports = _curry3(function minBy(f, a, b) {
  return f(b) < f(a) ? b : a;
});


/***/ }),
/* 918 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(650);


/**
 * Divides the first parameter by the second and returns the remainder. Note
 * that this function preserves the JavaScript-style behavior for modulo. For
 * mathematical modulo see [`mathMod`](#mathMod).
 *
 * @func
 * @memberOf R
 * @since v0.1.1
 * @category Math
 * @sig Number -> Number -> Number
 * @param {Number} a The value to the divide.
 * @param {Number} b The pseudo-modulus
 * @return {Number} The result of `b % a`.
 * @see R.mathMod
 * @example
 *
 *      R.modulo(17, 3); //=> 2
 *      // JS behavior:
 *      R.modulo(-17, 3); //=> -2
 *      R.modulo(17, -3); //=> 2
 *
 *      var isOdd = R.modulo(R.__, 2);
 *      isOdd(42); //=> 0
 *      isOdd(21); //=> 1
 */
module.exports = _curry2(function modulo(a, b) { return a % b; });


/***/ }),
/* 919 */
/***/ (function(module, exports, __webpack_require__) {

var _curry1 = __webpack_require__(651);


/**
 * Negates its argument.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category Math
 * @sig Number -> Number
 * @param {Number} n
 * @return {Number}
 * @example
 *
 *      R.negate(42); //=> -42
 */
module.exports = _curry1(function negate(n) { return -n; });


/***/ }),
/* 920 */
/***/ (function(module, exports, __webpack_require__) {

var _complement = __webpack_require__(742);
var _curry2 = __webpack_require__(650);
var _dispatchable = __webpack_require__(653);
var _xany = __webpack_require__(748);
var any = __webpack_require__(725);


/**
 * Returns `true` if no elements of the list match the predicate, `false`
 * otherwise.
 *
 * Dispatches to the `any` method of the second argument, if present.
 *
 * @func
 * @memberOf R
 * @since v0.12.0
 * @category List
 * @sig (a -> Boolean) -> [a] -> Boolean
 * @param {Function} fn The predicate function.
 * @param {Array} list The array to consider.
 * @return {Boolean} `true` if the predicate is not satisfied by every element, `false` otherwise.
 * @see R.all, R.any
 * @example
 *
 *      var isEven = n => n % 2 === 0;
 *
 *      R.none(isEven, [1, 3, 5, 7, 9, 11]); //=> true
 *      R.none(isEven, [1, 3, 5, 7, 8, 11]); //=> false
 */
module.exports = _curry2(_complement(_dispatchable(['any'], _xany, any)));


/***/ }),
/* 921 */
/***/ (function(module, exports, __webpack_require__) {

var _curry1 = __webpack_require__(651);
var curryN = __webpack_require__(655);
var nth = __webpack_require__(674);


/**
 * Returns a function which returns its nth argument.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category Function
 * @sig Number -> *... -> *
 * @param {Number} n
 * @return {Function}
 * @example
 *
 *      R.nthArg(1)('a', 'b', 'c'); //=> 'b'
 *      R.nthArg(-1)('a', 'b', 'c'); //=> 'c'
 * @symb R.nthArg(-1)(a, b, c) = c
 * @symb R.nthArg(0)(a, b, c) = a
 * @symb R.nthArg(1)(a, b, c) = b
 */
module.exports = _curry1(function nthArg(n) {
  var arity = n < 0 ? 1 : n + 1;
  return curryN(arity, function() {
    return nth(n, arguments);
  });
});


/***/ }),
/* 922 */
/***/ (function(module, exports, __webpack_require__) {

var _curry3 = __webpack_require__(652);


/**
 * `o` is a curried composition function that returns a unary function.
 * Like [`compose`](#compose), `o` performs right-to-left function composition.
 * Unlike [`compose`](#compose), the rightmost function passed to `o` will be
 * invoked with only one argument.
 *
 * @func
 * @memberOf R
 * @since v0.24.0
 * @category Function
 * @sig (b -> c) -> (a -> b) -> a -> c
 * @param {Function} f
 * @param {Function} g
 * @return {Function}
 * @see R.compose, R.pipe
 * @example
 *
 *      var classyGreeting = name => "The name's " + name.last + ", " + name.first + " " + lastName
 *      var yellGreeting = R.o(R.toUpper, classyGreeting);
 *      yellGreeting({first: 'James', last: 'Bond'}); //=> "THE NAME'S BOND, JAMES BOND"
 *
 *      R.o(R.multiply(10), R.add(10))(-4) //=> 60
 *
 * @symb R.o(f, g, x) = f(g(x))
 */
module.exports = _curry3(function o(f, g, x) {
  return f(g(x));
});


/***/ }),
/* 923 */
/***/ (function(module, exports, __webpack_require__) {

var _curry1 = __webpack_require__(651);
var _of = __webpack_require__(864);


/**
 * Returns a singleton array containing the value provided.
 *
 * Note this `of` is different from the ES6 `of`; See
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/of
 *
 * @func
 * @memberOf R
 * @since v0.3.0
 * @category Function
 * @sig a -> [a]
 * @param {*} x any value
 * @return {Array} An array wrapping `x`.
 * @example
 *
 *      R.of(null); //=> [null]
 *      R.of([42]); //=> [[42]]
 */
module.exports = _curry1(_of);


/***/ }),
/* 924 */
/***/ (function(module, exports, __webpack_require__) {

var _contains = __webpack_require__(667);
var _curry2 = __webpack_require__(650);


/**
 * Returns a partial copy of an object omitting the keys specified.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Object
 * @sig [String] -> {String: *} -> {String: *}
 * @param {Array} names an array of String property names to omit from the new object
 * @param {Object} obj The object to copy from
 * @return {Object} A new object with properties from `names` not on it.
 * @see R.pick
 * @example
 *
 *      R.omit(['a', 'd'], {a: 1, b: 2, c: 3, d: 4}); //=> {b: 2, c: 3}
 */
module.exports = _curry2(function omit(names, obj) {
  var result = {};
  for (var prop in obj) {
    if (!_contains(prop, names)) {
      result[prop] = obj[prop];
    }
  }
  return result;
});


/***/ }),
/* 925 */
/***/ (function(module, exports, __webpack_require__) {

var _arity = __webpack_require__(661);
var _curry1 = __webpack_require__(651);


/**
 * Accepts a function `fn` and returns a function that guards invocation of
 * `fn` such that `fn` can only ever be called once, no matter how many times
 * the returned function is invoked. The first value calculated is returned in
 * subsequent invocations.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig (a... -> b) -> (a... -> b)
 * @param {Function} fn The function to wrap in a call-only-once wrapper.
 * @return {Function} The wrapped function.
 * @example
 *
 *      var addOneOnce = R.once(x => x + 1);
 *      addOneOnce(10); //=> 11
 *      addOneOnce(addOneOnce(50)); //=> 11
 */
module.exports = _curry1(function once(fn) {
  var called = false;
  var result;
  return _arity(fn.length, function() {
    if (called) {
      return result;
    }
    called = true;
    result = fn.apply(this, arguments);
    return result;
  });
});


/***/ }),
/* 926 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(650);


/**
 * Takes two arguments, `fst` and `snd`, and returns `[fst, snd]`.
 *
 * @func
 * @memberOf R
 * @since v0.18.0
 * @category List
 * @sig a -> b -> (a,b)
 * @param {*} fst
 * @param {*} snd
 * @return {Array}
 * @see R.objOf, R.of
 * @example
 *
 *      R.pair('foo', 'bar'); //=> ['foo', 'bar']
 */
module.exports = _curry2(function pair(fst, snd) { return [fst, snd]; });


/***/ }),
/* 927 */
/***/ (function(module, exports, __webpack_require__) {

var _concat = __webpack_require__(660);
var _createPartialApplicator = __webpack_require__(743);


/**
 * Takes a function `f` and a list of arguments, and returns a function `g`.
 * When applied, `g` returns the result of applying `f` to the arguments
 * provided initially followed by the arguments provided to `g`.
 *
 * @func
 * @memberOf R
 * @since v0.10.0
 * @category Function
 * @sig ((a, b, c, ..., n) -> x) -> [a, b, c, ...] -> ((d, e, f, ..., n) -> x)
 * @param {Function} f
 * @param {Array} args
 * @return {Function}
 * @see R.partialRight
 * @example
 *
 *      var multiply2 = (a, b) => a * b;
 *      var double = R.partial(multiply2, [2]);
 *      double(2); //=> 4
 *
 *      var greet = (salutation, title, firstName, lastName) =>
 *        salutation + ', ' + title + ' ' + firstName + ' ' + lastName + '!';
 *
 *      var sayHello = R.partial(greet, ['Hello']);
 *      var sayHelloToMs = R.partial(sayHello, ['Ms.']);
 *      sayHelloToMs('Jane', 'Jones'); //=> 'Hello, Ms. Jane Jones!'
 * @symb R.partial(f, [a, b])(c, d) = f(a, b, c, d)
 */
module.exports = _createPartialApplicator(_concat);


/***/ }),
/* 928 */
/***/ (function(module, exports, __webpack_require__) {

var _concat = __webpack_require__(660);
var _createPartialApplicator = __webpack_require__(743);
var flip = __webpack_require__(682);


/**
 * Takes a function `f` and a list of arguments, and returns a function `g`.
 * When applied, `g` returns the result of applying `f` to the arguments
 * provided to `g` followed by the arguments provided initially.
 *
 * @func
 * @memberOf R
 * @since v0.10.0
 * @category Function
 * @sig ((a, b, c, ..., n) -> x) -> [d, e, f, ..., n] -> ((a, b, c, ...) -> x)
 * @param {Function} f
 * @param {Array} args
 * @return {Function}
 * @see R.partial
 * @example
 *
 *      var greet = (salutation, title, firstName, lastName) =>
 *        salutation + ', ' + title + ' ' + firstName + ' ' + lastName + '!';
 *
 *      var greetMsJaneJones = R.partialRight(greet, ['Ms.', 'Jane', 'Jones']);
 *
 *      greetMsJaneJones('Hello'); //=> 'Hello, Ms. Jane Jones!'
 * @symb R.partialRight(f, [a, b])(c, d) = f(c, d, a, b)
 */
module.exports = _createPartialApplicator(flip(_concat));


/***/ }),
/* 929 */
/***/ (function(module, exports, __webpack_require__) {

var filter = __webpack_require__(701);
var juxt = __webpack_require__(753);
var reject = __webpack_require__(694);


/**
 * Takes a predicate and a list or other `Filterable` object and returns the
 * pair of filterable objects of the same type of elements which do and do not
 * satisfy, the predicate, respectively. Filterable objects include plain objects or any object
 * that has a filter method such as `Array`.
 *
 * @func
 * @memberOf R
 * @since v0.1.4
 * @category List
 * @sig Filterable f => (a -> Boolean) -> f a -> [f a, f a]
 * @param {Function} pred A predicate to determine which side the element belongs to.
 * @param {Array} filterable the list (or other filterable) to partition.
 * @return {Array} An array, containing first the subset of elements that satisfy the
 *         predicate, and second the subset of elements that do not satisfy.
 * @see R.filter, R.reject
 * @example
 *
 *      R.partition(R.contains('s'), ['sss', 'ttt', 'foo', 'bars']);
 *      // => [ [ 'sss', 'bars' ],  [ 'ttt', 'foo' ] ]
 *
 *      R.partition(R.contains('s'), { a: 'sss', b: 'ttt', foo: 'bars' });
 *      // => [ { a: 'sss', foo: 'bars' }, { b: 'ttt' }  ]
 */
module.exports = juxt([filter, reject]);


/***/ }),
/* 930 */
/***/ (function(module, exports, __webpack_require__) {

var _curry3 = __webpack_require__(652);
var equals = __webpack_require__(658);
var path = __webpack_require__(675);


/**
 * Determines whether a nested path on an object has a specific value, in
 * [`R.equals`](#equals) terms. Most likely used to filter a list.
 *
 * @func
 * @memberOf R
 * @since v0.7.0
 * @category Relation
 * @typedefn Idx = String | Int
 * @sig [Idx] -> a -> {a} -> Boolean
 * @param {Array} path The path of the nested property to use
 * @param {*} val The value to compare the nested property with
 * @param {Object} obj The object to check the nested property in
 * @return {Boolean} `true` if the value equals the nested object property,
 *         `false` otherwise.
 * @example
 *
 *      var user1 = { address: { zipCode: 90210 } };
 *      var user2 = { address: { zipCode: 55555 } };
 *      var user3 = { name: 'Bob' };
 *      var users = [ user1, user2, user3 ];
 *      var isFamous = R.pathEq(['address', 'zipCode'], 90210);
 *      R.filter(isFamous, users); //=> [ user1 ]
 */
module.exports = _curry3(function pathEq(_path, val, obj) {
  return equals(path(_path, obj), val);
});


/***/ }),
/* 931 */
/***/ (function(module, exports, __webpack_require__) {

var _curry3 = __webpack_require__(652);
var defaultTo = __webpack_require__(732);
var path = __webpack_require__(675);


/**
 * If the given, non-null object has a value at the given path, returns the
 * value at that path. Otherwise returns the provided default value.
 *
 * @func
 * @memberOf R
 * @since v0.18.0
 * @category Object
 * @typedefn Idx = String | Int
 * @sig a -> [Idx] -> {a} -> a
 * @param {*} d The default value.
 * @param {Array} p The path to use.
 * @param {Object} obj The object to retrieve the nested property from.
 * @return {*} The data at `path` of the supplied object or the default value.
 * @example
 *
 *      R.pathOr('N/A', ['a', 'b'], {a: {b: 2}}); //=> 2
 *      R.pathOr('N/A', ['a', 'b'], {c: {b: 2}}); //=> "N/A"
 */
module.exports = _curry3(function pathOr(d, p, obj) {
  return defaultTo(d, path(p, obj));
});


/***/ }),
/* 932 */
/***/ (function(module, exports, __webpack_require__) {

var _curry3 = __webpack_require__(652);
var path = __webpack_require__(675);


/**
 * Returns `true` if the specified object property at given path satisfies the
 * given predicate; `false` otherwise.
 *
 * @func
 * @memberOf R
 * @since v0.19.0
 * @category Logic
 * @typedefn Idx = String | Int
 * @sig (a -> Boolean) -> [Idx] -> {a} -> Boolean
 * @param {Function} pred
 * @param {Array} propPath
 * @param {*} obj
 * @return {Boolean}
 * @see R.propSatisfies, R.path
 * @example
 *
 *      R.pathSatisfies(y => y > 0, ['x', 'y'], {x: {y: 2}}); //=> true
 */
module.exports = _curry3(function pathSatisfies(pred, propPath, obj) {
  return propPath.length > 0 && pred(path(propPath, obj));
});


/***/ }),
/* 933 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(650);


/**
 * Returns a partial copy of an object containing only the keys specified. If
 * the key does not exist, the property is ignored.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Object
 * @sig [k] -> {k: v} -> {k: v}
 * @param {Array} names an array of String property names to copy onto a new object
 * @param {Object} obj The object to copy from
 * @return {Object} A new object with only properties from `names` on it.
 * @see R.omit, R.props
 * @example
 *
 *      R.pick(['a', 'd'], {a: 1, b: 2, c: 3, d: 4}); //=> {a: 1, d: 4}
 *      R.pick(['a', 'e', 'f'], {a: 1, b: 2, c: 3, d: 4}); //=> {a: 1}
 */
module.exports = _curry2(function pick(names, obj) {
  var result = {};
  var idx = 0;
  while (idx < names.length) {
    if (names[idx] in obj) {
      result[names[idx]] = obj[names[idx]];
    }
    idx += 1;
  }
  return result;
});


/***/ }),
/* 934 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(650);


/**
 * Returns a partial copy of an object containing only the keys that satisfy
 * the supplied predicate.
 *
 * @func
 * @memberOf R
 * @since v0.8.0
 * @category Object
 * @sig (v, k -> Boolean) -> {k: v} -> {k: v}
 * @param {Function} pred A predicate to determine whether or not a key
 *        should be included on the output object.
 * @param {Object} obj The object to copy from
 * @return {Object} A new object with only properties that satisfy `pred`
 *         on it.
 * @see R.pick, R.filter
 * @example
 *
 *      var isUpperCase = (val, key) => key.toUpperCase() === key;
 *      R.pickBy(isUpperCase, {a: 1, b: 2, A: 3, B: 4}); //=> {A: 3, B: 4}
 */
module.exports = _curry2(function pickBy(test, obj) {
  var result = {};
  for (var prop in obj) {
    if (test(obj[prop], prop, obj)) {
      result[prop] = obj[prop];
    }
  }
  return result;
});


/***/ }),
/* 935 */
/***/ (function(module, exports, __webpack_require__) {

var composeK = __webpack_require__(729);
var reverse = __webpack_require__(695);

/**
 * Returns the left-to-right Kleisli composition of the provided functions,
 * each of which must return a value of a type supported by [`chain`](#chain).
 *
 * `R.pipeK(f, g, h)` is equivalent to `R.pipe(R.chain(f), R.chain(g), R.chain(h))`.
 *
 * @func
 * @memberOf R
 * @since v0.16.0
 * @category Function
 * @sig Chain m => ((a -> m b), (b -> m c), ..., (y -> m z)) -> (a -> m z)
 * @param {...Function}
 * @return {Function}
 * @see R.composeK
 * @example
 *
 *      //  parseJson :: String -> Maybe *
 *      //  get :: String -> Object -> Maybe *
 *
 *      //  getStateCode :: Maybe String -> Maybe String
 *      var getStateCode = R.pipeK(
 *        parseJson,
 *        get('user'),
 *        get('address'),
 *        get('state'),
 *        R.compose(Maybe.of, R.toUpper)
 *      );
 *
 *      getStateCode('{"user":{"address":{"state":"ny"}}}');
 *      //=> Just('NY')
 *      getStateCode('[Invalid JSON]');
 *      //=> Nothing()
 * @symb R.pipeK(f, g, h)(a) = R.chain(h, R.chain(g, f(a)))
 */
module.exports = function pipeK() {
  if (arguments.length === 0) {
    throw new Error('pipeK requires at least one argument');
  }
  return composeK.apply(this, reverse(arguments));
};


/***/ }),
/* 936 */
/***/ (function(module, exports, __webpack_require__) {

var multiply = __webpack_require__(759);
var reduce = __webpack_require__(663);


/**
 * Multiplies together all the elements of a list.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Math
 * @sig [Number] -> Number
 * @param {Array} list An array of numbers
 * @return {Number} The product of all the numbers in the list.
 * @see R.reduce
 * @example
 *
 *      R.product([2,4,6,8,100,1]); //=> 38400
 */
module.exports = reduce(multiply, 1);


/***/ }),
/* 937 */
/***/ (function(module, exports, __webpack_require__) {

var _map = __webpack_require__(688);
var identity = __webpack_require__(702);
var pickAll = __webpack_require__(764);
var useWith = __webpack_require__(775);


/**
 * Reasonable analog to SQL `select` statement.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Object
 * @category Relation
 * @sig [k] -> [{k: v}] -> [{k: v}]
 * @param {Array} props The property names to project
 * @param {Array} objs The objects to query
 * @return {Array} An array of objects with just the `props` properties.
 * @example
 *
 *      var abby = {name: 'Abby', age: 7, hair: 'blond', grade: 2};
 *      var fred = {name: 'Fred', age: 12, hair: 'brown', grade: 7};
 *      var kids = [abby, fred];
 *      R.project(['name', 'grade'], kids); //=> [{name: 'Abby', grade: 2}, {name: 'Fred', grade: 7}]
 */
module.exports = useWith(_map, [pickAll, identity]); // passing `identity` gives correct arity


/***/ }),
/* 938 */
/***/ (function(module, exports, __webpack_require__) {

var _curry3 = __webpack_require__(652);
var equals = __webpack_require__(658);


/**
 * Returns `true` if the specified object property is equal, in
 * [`R.equals`](#equals) terms, to the given value; `false` otherwise.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig String -> a -> Object -> Boolean
 * @param {String} name
 * @param {*} val
 * @param {*} obj
 * @return {Boolean}
 * @see R.equals, R.propSatisfies
 * @example
 *
 *      var abby = {name: 'Abby', age: 7, hair: 'blond'};
 *      var fred = {name: 'Fred', age: 12, hair: 'brown'};
 *      var rusty = {name: 'Rusty', age: 10, hair: 'brown'};
 *      var alois = {name: 'Alois', age: 15, disposition: 'surly'};
 *      var kids = [abby, fred, rusty, alois];
 *      var hasBrownHair = R.propEq('hair', 'brown');
 *      R.filter(hasBrownHair, kids); //=> [fred, rusty]
 */
module.exports = _curry3(function propEq(name, val, obj) {
  return equals(val, obj[name]);
});


/***/ }),
/* 939 */
/***/ (function(module, exports, __webpack_require__) {

var _curry3 = __webpack_require__(652);
var is = __webpack_require__(751);


/**
 * Returns `true` if the specified object property is of the given type;
 * `false` otherwise.
 *
 * @func
 * @memberOf R
 * @since v0.16.0
 * @category Type
 * @sig Type -> String -> Object -> Boolean
 * @param {Function} type
 * @param {String} name
 * @param {*} obj
 * @return {Boolean}
 * @see R.is, R.propSatisfies
 * @example
 *
 *      R.propIs(Number, 'x', {x: 1, y: 2});  //=> true
 *      R.propIs(Number, 'x', {x: 'foo'});    //=> false
 *      R.propIs(Number, 'x', {});            //=> false
 */
module.exports = _curry3(function propIs(type, name, obj) {
  return is(type, obj[name]);
});


/***/ }),
/* 940 */
/***/ (function(module, exports, __webpack_require__) {

var _curry3 = __webpack_require__(652);
var _has = __webpack_require__(656);


/**
 * If the given, non-null object has an own property with the specified name,
 * returns the value of that property. Otherwise returns the provided default
 * value.
 *
 * @func
 * @memberOf R
 * @since v0.6.0
 * @category Object
 * @sig a -> String -> Object -> a
 * @param {*} val The default value.
 * @param {String} p The name of the property to return.
 * @param {Object} obj The object to query.
 * @return {*} The value of given property of the supplied object or the default value.
 * @example
 *
 *      var alice = {
 *        name: 'ALICE',
 *        age: 101
 *      };
 *      var favorite = R.prop('favoriteLibrary');
 *      var favoriteWithDefault = R.propOr('Ramda', 'favoriteLibrary');
 *
 *      favorite(alice);  //=> undefined
 *      favoriteWithDefault(alice);  //=> 'Ramda'
 */
module.exports = _curry3(function propOr(val, p, obj) {
  return (obj != null && _has(p, obj)) ? obj[p] : val;
});


/***/ }),
/* 941 */
/***/ (function(module, exports, __webpack_require__) {

var _curry3 = __webpack_require__(652);


/**
 * Returns `true` if the specified object property satisfies the given
 * predicate; `false` otherwise.
 *
 * @func
 * @memberOf R
 * @since v0.16.0
 * @category Logic
 * @sig (a -> Boolean) -> String -> {String: a} -> Boolean
 * @param {Function} pred
 * @param {String} name
 * @param {*} obj
 * @return {Boolean}
 * @see R.propEq, R.propIs
 * @example
 *
 *      R.propSatisfies(x => x > 0, 'x', {x: 1, y: 2}); //=> true
 */
module.exports = _curry3(function propSatisfies(pred, name, obj) {
  return pred(obj[name]);
});


/***/ }),
/* 942 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(650);


/**
 * Acts as multiple `prop`: array of keys in, array of values out. Preserves
 * order.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Object
 * @sig [k] -> {k: v} -> [v]
 * @param {Array} ps The property names to fetch
 * @param {Object} obj The object to query
 * @return {Array} The corresponding values or partially applied function.
 * @example
 *
 *      R.props(['x', 'y'], {x: 1, y: 2}); //=> [1, 2]
 *      R.props(['c', 'a', 'b'], {b: 2, a: 1}); //=> [undefined, 1, 2]
 *
 *      var fullName = R.compose(R.join(' '), R.props(['first', 'last']));
 *      fullName({last: 'Bullet-Tooth', age: 33, first: 'Tony'}); //=> 'Tony Bullet-Tooth'
 */
module.exports = _curry2(function props(ps, obj) {
  var len = ps.length;
  var out = [];
  var idx = 0;

  while (idx < len) {
    out[idx] = obj[ps[idx]];
    idx += 1;
  }

  return out;
});


/***/ }),
/* 943 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(650);
var _isNumber = __webpack_require__(746);


/**
 * Returns a list of numbers from `from` (inclusive) to `to` (exclusive).
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig Number -> Number -> [Number]
 * @param {Number} from The first number in the list.
 * @param {Number} to One more than the last number in the list.
 * @return {Array} The list of numbers in tthe set `[a, b)`.
 * @example
 *
 *      R.range(1, 5);    //=> [1, 2, 3, 4]
 *      R.range(50, 53);  //=> [50, 51, 52]
 */
module.exports = _curry2(function range(from, to) {
  if (!(_isNumber(from) && _isNumber(to))) {
    throw new TypeError('Both arguments to range must be numbers');
  }
  var result = [];
  var n = from;
  while (n < to) {
    result.push(n);
    n += 1;
  }
  return result;
});


/***/ }),
/* 944 */
/***/ (function(module, exports, __webpack_require__) {

var _curryN = __webpack_require__(684);
var _reduce = __webpack_require__(659);
var _reduced = __webpack_require__(666);


/**
 * Like [`reduce`](#reduce), `reduceWhile` returns a single item by iterating
 * through the list, successively calling the iterator function. `reduceWhile`
 * also takes a predicate that is evaluated before each step. If the predicate
 * returns `false`, it "short-circuits" the iteration and returns the current
 * value of the accumulator.
 *
 * @func
 * @memberOf R
 * @since v0.22.0
 * @category List
 * @sig ((a, b) -> Boolean) -> ((a, b) -> a) -> a -> [b] -> a
 * @param {Function} pred The predicate. It is passed the accumulator and the
 *        current element.
 * @param {Function} fn The iterator function. Receives two values, the
 *        accumulator and the current element.
 * @param {*} a The accumulator value.
 * @param {Array} list The list to iterate over.
 * @return {*} The final, accumulated value.
 * @see R.reduce, R.reduced
 * @example
 *
 *      var isOdd = (acc, x) => x % 2 === 1;
 *      var xs = [1, 3, 5, 60, 777, 800];
 *      R.reduceWhile(isOdd, R.add, 0, xs); //=> 9
 *
 *      var ys = [2, 4, 6]
 *      R.reduceWhile(isOdd, R.add, 111, ys); //=> 111
 */
module.exports = _curryN(4, [], function _reduceWhile(pred, fn, a, list) {
  return _reduce(function(acc, x) {
    return pred(acc, x) ? fn(acc, x) : _reduced(acc);
  }, a, list);
});


/***/ }),
/* 945 */
/***/ (function(module, exports, __webpack_require__) {

var _curry1 = __webpack_require__(651);
var _reduced = __webpack_require__(666);

/**
 * Returns a value wrapped to indicate that it is the final value of the reduce
 * and transduce functions. The returned value should be considered a black
 * box: the internal structure is not guaranteed to be stable.
 *
 * Note: this optimization is unavailable to functions not explicitly listed
 * above. For instance, it is not currently supported by
 * [`reduceRight`](#reduceRight).
 *
 * @func
 * @memberOf R
 * @since v0.15.0
 * @category List
 * @sig a -> *
 * @param {*} x The final value of the reduce.
 * @return {*} The wrapped value.
 * @see R.reduce, R.transduce
 * @example
 *
 *     R.reduce(
 *       (acc, item) => item > 3 ? R.reduced(acc) : acc.concat(item),
 *       [],
 *       [1, 2, 3, 4, 5]) // [1, 2, 3]
 */

module.exports = _curry1(_reduced);


/***/ }),
/* 946 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(650);
var always = __webpack_require__(669);
var times = __webpack_require__(773);


/**
 * Returns a fixed list of size `n` containing a specified identical value.
 *
 * @func
 * @memberOf R
 * @since v0.1.1
 * @category List
 * @sig a -> n -> [a]
 * @param {*} value The value to repeat.
 * @param {Number} n The desired size of the output list.
 * @return {Array} A new array containing `n` `value`s.
 * @see R.times
 * @example
 *
 *      R.repeat('hi', 5); //=> ['hi', 'hi', 'hi', 'hi', 'hi']
 *
 *      var obj = {};
 *      var repeatedObjs = R.repeat(obj, 5); //=> [{}, {}, {}, {}, {}]
 *      repeatedObjs[0] === repeatedObjs[1]; //=> true
 * @symb R.repeat(a, 0) = []
 * @symb R.repeat(a, 1) = [a]
 * @symb R.repeat(a, 2) = [a, a]
 */
module.exports = _curry2(function repeat(value, n) {
  return times(always(value), n);
});


/***/ }),
/* 947 */
/***/ (function(module, exports, __webpack_require__) {

var _curry3 = __webpack_require__(652);


/**
 * Replace a substring or regex match in a string with a replacement.
 *
 * @func
 * @memberOf R
 * @since v0.7.0
 * @category String
 * @sig RegExp|String -> String -> String -> String
 * @param {RegExp|String} pattern A regular expression or a substring to match.
 * @param {String} replacement The string to replace the matches with.
 * @param {String} str The String to do the search and replacement in.
 * @return {String} The result.
 * @example
 *
 *      R.replace('foo', 'bar', 'foo foo foo'); //=> 'bar foo foo'
 *      R.replace(/foo/, 'bar', 'foo foo foo'); //=> 'bar foo foo'
 *
 *      // Use the "g" (global) flag to replace all occurrences:
 *      R.replace(/foo/g, 'bar', 'foo foo foo'); //=> 'bar bar bar'
 */
module.exports = _curry3(function replace(regex, replacement, str) {
  return str.replace(regex, replacement);
});


/***/ }),
/* 948 */
/***/ (function(module, exports, __webpack_require__) {

var _curry3 = __webpack_require__(652);


/**
 * Scan is similar to [`reduce`](#reduce), but returns a list of successively
 * reduced values from the left
 *
 * @func
 * @memberOf R
 * @since v0.10.0
 * @category List
 * @sig (a,b -> a) -> a -> [b] -> [a]
 * @param {Function} fn The iterator function. Receives two values, the accumulator and the
 *        current element from the array
 * @param {*} acc The accumulator value.
 * @param {Array} list The list to iterate over.
 * @return {Array} A list of all intermediately reduced values.
 * @see R.reduce
 * @example
 *
 *      var numbers = [1, 2, 3, 4];
 *      var factorials = R.scan(R.multiply, 1, numbers); //=> [1, 1, 2, 6, 24]
 * @symb R.scan(f, a, [b, c]) = [a, f(a, b), f(f(a, b), c)]
 */
module.exports = _curry3(function scan(fn, acc, list) {
  var idx = 0;
  var len = list.length;
  var result = [acc];
  while (idx < len) {
    acc = fn(acc, list[idx]);
    result[idx + 1] = acc;
    idx += 1;
  }
  return result;
});


/***/ }),
/* 949 */
/***/ (function(module, exports, __webpack_require__) {

var _curry3 = __webpack_require__(652);
var always = __webpack_require__(669);
var over = __webpack_require__(763);


/**
 * Returns the result of "setting" the portion of the given data structure
 * focused by the given lens to the given value.
 *
 * @func
 * @memberOf R
 * @since v0.16.0
 * @category Object
 * @typedefn Lens s a = Functor f => (a -> f a) -> s -> f s
 * @sig Lens s a -> a -> s -> s
 * @param {Lens} lens
 * @param {*} v
 * @param {*} x
 * @return {*}
 * @see R.prop, R.lensIndex, R.lensProp
 * @example
 *
 *      var xLens = R.lensProp('x');
 *
 *      R.set(xLens, 4, {x: 1, y: 2});  //=> {x: 4, y: 2}
 *      R.set(xLens, 8, {x: 1, y: 2});  //=> {x: 8, y: 2}
 */
module.exports = _curry3(function set(lens, v, x) {
  return over(lens, always(v), x);
});


/***/ }),
/* 950 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(650);


/**
 * Returns a copy of the list, sorted according to the comparator function,
 * which should accept two values at a time and return a negative number if the
 * first value is smaller, a positive number if it's larger, and zero if they
 * are equal. Please note that this is a **copy** of the list. It does not
 * modify the original.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig (a,a -> Number) -> [a] -> [a]
 * @param {Function} comparator A sorting function :: a -> b -> Int
 * @param {Array} list The list to sort
 * @return {Array} a new array with its elements sorted by the comparator function.
 * @example
 *
 *      var diff = function(a, b) { return a - b; };
 *      R.sort(diff, [4,2,7,5]); //=> [2, 4, 5, 7]
 */
module.exports = _curry2(function sort(comparator, list) {
  return Array.prototype.slice.call(list, 0).sort(comparator);
});


/***/ }),
/* 951 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(650);


/**
 * Sorts the list according to the supplied function.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig Ord b => (a -> b) -> [a] -> [a]
 * @param {Function} fn
 * @param {Array} list The list to sort.
 * @return {Array} A new list sorted by the keys generated by `fn`.
 * @example
 *
 *      var sortByFirstItem = R.sortBy(R.prop(0));
 *      var sortByNameCaseInsensitive = R.sortBy(R.compose(R.toLower, R.prop('name')));
 *      var pairs = [[-1, 1], [-2, 2], [-3, 3]];
 *      sortByFirstItem(pairs); //=> [[-3, 3], [-2, 2], [-1, 1]]
 *      var alice = {
 *        name: 'ALICE',
 *        age: 101
 *      };
 *      var bob = {
 *        name: 'Bob',
 *        age: -10
 *      };
 *      var clara = {
 *        name: 'clara',
 *        age: 314.159
 *      };
 *      var people = [clara, bob, alice];
 *      sortByNameCaseInsensitive(people); //=> [alice, bob, clara]
 */
module.exports = _curry2(function sortBy(fn, list) {
  return Array.prototype.slice.call(list, 0).sort(function(a, b) {
    var aa = fn(a);
    var bb = fn(b);
    return aa < bb ? -1 : aa > bb ? 1 : 0;
  });
});


/***/ }),
/* 952 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(650);


/**
 * Sorts a list according to a list of comparators.
 *
 * @func
 * @memberOf R
 * @since v0.23.0
 * @category Relation
 * @sig [a -> a -> Number] -> [a] -> [a]
 * @param {Array} functions A list of comparator functions.
 * @param {Array} list The list to sort.
 * @return {Array} A new list sorted according to the comarator functions.
 * @example
 *
 *      var alice = {
 *        name: 'alice',
 *        age: 40
 *      };
 *      var bob = {
 *        name: 'bob',
 *        age: 30
 *      };
 *      var clara = {
 *        name: 'clara',
 *        age: 40
 *      };
 *      var people = [clara, bob, alice];
 *      var ageNameSort = R.sortWith([
 *        R.descend(R.prop('age')),
 *        R.ascend(R.prop('name'))
 *      ]);
 *      ageNameSort(people); //=> [alice, clara, bob]
 */
module.exports = _curry2(function sortWith(fns, list) {
  return Array.prototype.slice.call(list, 0).sort(function(a, b) {
    var result = 0;
    var i = 0;
    while (result === 0 && i < fns.length) {
      result = fns[i](a, b);
      i += 1;
    }
    return result;
  });
});


/***/ }),
/* 953 */
/***/ (function(module, exports, __webpack_require__) {

var invoker = __webpack_require__(673);


/**
 * Splits a string into an array of strings based on the given
 * separator.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category String
 * @sig (String | RegExp) -> String -> [String]
 * @param {String|RegExp} sep The pattern.
 * @param {String} str The string to separate into an array.
 * @return {Array} The array of strings from `str` separated by `str`.
 * @see R.join
 * @example
 *
 *      var pathComponents = R.split('/');
 *      R.tail(pathComponents('/usr/local/bin/node')); //=> ['usr', 'local', 'bin', 'node']
 *
 *      R.split('.', 'a.b.c.xyz.d'); //=> ['a', 'b', 'c', 'xyz', 'd']
 */
module.exports = invoker(1, 'split');


/***/ }),
/* 954 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(650);
var length = __webpack_require__(755);
var slice = __webpack_require__(668);


/**
 * Splits a given list or string at a given index.
 *
 * @func
 * @memberOf R
 * @since v0.19.0
 * @category List
 * @sig Number -> [a] -> [[a], [a]]
 * @sig Number -> String -> [String, String]
 * @param {Number} index The index where the array/string is split.
 * @param {Array|String} array The array/string to be split.
 * @return {Array}
 * @example
 *
 *      R.splitAt(1, [1, 2, 3]);          //=> [[1], [2, 3]]
 *      R.splitAt(5, 'hello world');      //=> ['hello', ' world']
 *      R.splitAt(-1, 'foobar');          //=> ['fooba', 'r']
 */
module.exports = _curry2(function splitAt(index, array) {
  return [slice(0, index, array), slice(index, length(array), array)];
});


/***/ }),
/* 955 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(650);
var slice = __webpack_require__(668);


/**
 * Splits a collection into slices of the specified length.
 *
 * @func
 * @memberOf R
 * @since v0.16.0
 * @category List
 * @sig Number -> [a] -> [[a]]
 * @sig Number -> String -> [String]
 * @param {Number} n
 * @param {Array} list
 * @return {Array}
 * @example
 *
 *      R.splitEvery(3, [1, 2, 3, 4, 5, 6, 7]); //=> [[1, 2, 3], [4, 5, 6], [7]]
 *      R.splitEvery(3, 'foobarbaz'); //=> ['foo', 'bar', 'baz']
 */
module.exports = _curry2(function splitEvery(n, list) {
  if (n <= 0) {
    throw new Error('First argument to splitEvery must be a positive integer');
  }
  var result = [];
  var idx = 0;
  while (idx < list.length) {
    result.push(slice(idx, idx += n, list));
  }
  return result;
});


/***/ }),
/* 956 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(650);


/**
 * Takes a list and a predicate and returns a pair of lists with the following properties:
 *
 *  - the result of concatenating the two output lists is equivalent to the input list;
 *  - none of the elements of the first output list satisfies the predicate; and
 *  - if the second output list is non-empty, its first element satisfies the predicate.
 *
 * @func
 * @memberOf R
 * @since v0.19.0
 * @category List
 * @sig (a -> Boolean) -> [a] -> [[a], [a]]
 * @param {Function} pred The predicate that determines where the array is split.
 * @param {Array} list The array to be split.
 * @return {Array}
 * @example
 *
 *      R.splitWhen(R.equals(2), [1, 2, 3, 1, 2, 3]);   //=> [[1], [2, 3, 1, 2, 3]]
 */
module.exports = _curry2(function splitWhen(pred, list) {
  var idx = 0;
  var len = list.length;
  var prefix = [];

  while (idx < len && !pred(list[idx])) {
    prefix.push(list[idx]);
    idx += 1;
  }

  return [prefix, Array.prototype.slice.call(list, idx)];
});


/***/ }),
/* 957 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(650);
var equals = __webpack_require__(658);
var take = __webpack_require__(712);

/**
 * Checks if a list starts with the provided values
 *
 * @func
 * @memberOf R
 * @since v0.24.0
 * @category List
 * @sig [a] -> Boolean
 * @sig String -> Boolean
 * @param {*} prefix
 * @param {*} list
 * @return {Boolean}
 * @example
 *
 *      R.startsWith('a', 'abc')                //=> true
 *      R.startsWith('b', 'abc')                //=> false
 *      R.startsWith(['a'], ['a', 'b', 'c'])    //=> true
 *      R.startsWith(['b'], ['a', 'b', 'c'])    //=> false
 */
module.exports = _curry2(function(prefix, list) {
  return equals(take(prefix.length, list), prefix);
});


/***/ }),
/* 958 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(650);


/**
 * Subtracts its second argument from its first argument.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Math
 * @sig Number -> Number -> Number
 * @param {Number} a The first value.
 * @param {Number} b The second value.
 * @return {Number} The result of `a - b`.
 * @see R.add
 * @example
 *
 *      R.subtract(10, 8); //=> 2
 *
 *      var minus5 = R.subtract(R.__, 5);
 *      minus5(17); //=> 12
 *
 *      var complementaryAngle = R.subtract(90);
 *      complementaryAngle(30); //=> 60
 *      complementaryAngle(72); //=> 18
 */
module.exports = _curry2(function subtract(a, b) {
  return Number(a) - Number(b);
});


/***/ }),
/* 959 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(650);
var concat = __webpack_require__(700);
var difference = __webpack_require__(733);


/**
 * Finds the set (i.e. no duplicates) of all elements contained in the first or
 * second list, but not both.
 *
 * @func
 * @memberOf R
 * @since v0.19.0
 * @category Relation
 * @sig [*] -> [*] -> [*]
 * @param {Array} list1 The first list.
 * @param {Array} list2 The second list.
 * @return {Array} The elements in `list1` or `list2`, but not both.
 * @see R.symmetricDifferenceWith, R.difference, R.differenceWith
 * @example
 *
 *      R.symmetricDifference([1,2,3,4], [7,6,5,4,3]); //=> [1,2,7,6,5]
 *      R.symmetricDifference([7,6,5,4,3], [1,2,3,4]); //=> [7,6,5,1,2]
 */
module.exports = _curry2(function symmetricDifference(list1, list2) {
  return concat(difference(list1, list2), difference(list2, list1));
});


/***/ }),
/* 960 */
/***/ (function(module, exports, __webpack_require__) {

var _curry3 = __webpack_require__(652);
var concat = __webpack_require__(700);
var differenceWith = __webpack_require__(734);


/**
 * Finds the set (i.e. no duplicates) of all elements contained in the first or
 * second list, but not both. Duplication is determined according to the value
 * returned by applying the supplied predicate to two list elements.
 *
 * @func
 * @memberOf R
 * @since v0.19.0
 * @category Relation
 * @sig ((a, a) -> Boolean) -> [a] -> [a] -> [a]
 * @param {Function} pred A predicate used to test whether two items are equal.
 * @param {Array} list1 The first list.
 * @param {Array} list2 The second list.
 * @return {Array} The elements in `list1` or `list2`, but not both.
 * @see R.symmetricDifference, R.difference, R.differenceWith
 * @example
 *
 *      var eqA = R.eqBy(R.prop('a'));
 *      var l1 = [{a: 1}, {a: 2}, {a: 3}, {a: 4}];
 *      var l2 = [{a: 3}, {a: 4}, {a: 5}, {a: 6}];
 *      R.symmetricDifferenceWith(eqA, l1, l2); //=> [{a: 1}, {a: 2}, {a: 5}, {a: 6}]
 */
module.exports = _curry3(function symmetricDifferenceWith(pred, list1, list2) {
  return concat(differenceWith(pred, list1, list2), differenceWith(pred, list2, list1));
});


/***/ }),
/* 961 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(650);


/**
 * Returns a new list containing the last `n` elements of a given list, passing
 * each value to the supplied predicate function, and terminating when the
 * predicate function returns `false`. Excludes the element that caused the
 * predicate function to fail. The predicate function is passed one argument:
 * *(value)*.
 *
 * @func
 * @memberOf R
 * @since v0.16.0
 * @category List
 * @sig (a -> Boolean) -> [a] -> [a]
 * @param {Function} fn The function called per iteration.
 * @param {Array} list The collection to iterate over.
 * @return {Array} A new array.
 * @see R.dropLastWhile, R.addIndex
 * @example
 *
 *      var isNotOne = x => x !== 1;
 *
 *      R.takeLastWhile(isNotOne, [1, 2, 3, 4]); //=> [2, 3, 4]
 */
module.exports = _curry2(function takeLastWhile(fn, list) {
  var idx = list.length - 1;
  while (idx >= 0 && fn(list[idx])) {
    idx -= 1;
  }
  return Array.prototype.slice.call(list, idx + 1);
});


/***/ }),
/* 962 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(650);
var _dispatchable = __webpack_require__(653);
var _xtakeWhile = __webpack_require__(886);


/**
 * Returns a new list containing the first `n` elements of a given list,
 * passing each value to the supplied predicate function, and terminating when
 * the predicate function returns `false`. Excludes the element that caused the
 * predicate function to fail. The predicate function is passed one argument:
 * *(value)*.
 *
 * Dispatches to the `takeWhile` method of the second argument, if present.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig (a -> Boolean) -> [a] -> [a]
 * @param {Function} fn The function called per iteration.
 * @param {Array} list The collection to iterate over.
 * @return {Array} A new array.
 * @see R.dropWhile, R.transduce, R.addIndex
 * @example
 *
 *      var isNotFour = x => x !== 4;
 *
 *      R.takeWhile(isNotFour, [1, 2, 3, 4, 3, 2, 1]); //=> [1, 2, 3]
 */
module.exports = _curry2(_dispatchable(['takeWhile'], _xtakeWhile, function takeWhile(fn, list) {
  var idx = 0;
  var len = list.length;
  while (idx < len && fn(list[idx])) {
    idx += 1;
  }
  return Array.prototype.slice.call(list, 0, idx);
}));


/***/ }),
/* 963 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(650);


/**
 * Runs the given function with the supplied object, then returns the object.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig (a -> *) -> a -> a
 * @param {Function} fn The function to call with `x`. The return value of `fn` will be thrown away.
 * @param {*} x
 * @return {*} `x`.
 * @example
 *
 *      var sayX = x => console.log('x is ' + x);
 *      R.tap(sayX, 100); //=> 100
 *      // logs 'x is 100'
 * @symb R.tap(f, a) = a
 */
module.exports = _curry2(function tap(fn, x) {
  fn(x);
  return x;
});


/***/ }),
/* 964 */
/***/ (function(module, exports, __webpack_require__) {

var _cloneRegExp = __webpack_require__(741);
var _curry2 = __webpack_require__(650);
var _isRegExp = __webpack_require__(862);
var toString = __webpack_require__(677);


/**
 * Determines whether a given string matches a given regular expression.
 *
 * @func
 * @memberOf R
 * @since v0.12.0
 * @category String
 * @sig RegExp -> String -> Boolean
 * @param {RegExp} pattern
 * @param {String} str
 * @return {Boolean}
 * @see R.match
 * @example
 *
 *      R.test(/^x/, 'xyz'); //=> true
 *      R.test(/^y/, 'xyz'); //=> false
 */
module.exports = _curry2(function test(pattern, str) {
  if (!_isRegExp(pattern)) {
    throw new TypeError('‘test’ requires a value of type RegExp as its first argument; received ' + toString(pattern));
  }
  return _cloneRegExp(pattern).test(str);
});


/***/ }),
/* 965 */
/***/ (function(module, exports, __webpack_require__) {

var invoker = __webpack_require__(673);


/**
 * The lower case version of a string.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category String
 * @sig String -> String
 * @param {String} str The string to lower case.
 * @return {String} The lower case version of `str`.
 * @see R.toUpper
 * @example
 *
 *      R.toLower('XYZ'); //=> 'xyz'
 */
module.exports = invoker(0, 'toLowerCase');


/***/ }),
/* 966 */
/***/ (function(module, exports, __webpack_require__) {

var _curry1 = __webpack_require__(651);
var _has = __webpack_require__(656);


/**
 * Converts an object into an array of key, value arrays. Only the object's
 * own properties are used.
 * Note that the order of the output array is not guaranteed to be consistent
 * across different JS platforms.
 *
 * @func
 * @memberOf R
 * @since v0.4.0
 * @category Object
 * @sig {String: *} -> [[String,*]]
 * @param {Object} obj The object to extract from
 * @return {Array} An array of key, value arrays from the object's own properties.
 * @see R.fromPairs
 * @example
 *
 *      R.toPairs({a: 1, b: 2, c: 3}); //=> [['a', 1], ['b', 2], ['c', 3]]
 */
module.exports = _curry1(function toPairs(obj) {
  var pairs = [];
  for (var prop in obj) {
    if (_has(prop, obj)) {
      pairs[pairs.length] = [prop, obj[prop]];
    }
  }
  return pairs;
});


/***/ }),
/* 967 */
/***/ (function(module, exports, __webpack_require__) {

var _curry1 = __webpack_require__(651);


/**
 * Converts an object into an array of key, value arrays. The object's own
 * properties and prototype properties are used. Note that the order of the
 * output array is not guaranteed to be consistent across different JS
 * platforms.
 *
 * @func
 * @memberOf R
 * @since v0.4.0
 * @category Object
 * @sig {String: *} -> [[String,*]]
 * @param {Object} obj The object to extract from
 * @return {Array} An array of key, value arrays from the object's own
 *         and prototype properties.
 * @example
 *
 *      var F = function() { this.x = 'X'; };
 *      F.prototype.y = 'Y';
 *      var f = new F();
 *      R.toPairsIn(f); //=> [['x','X'], ['y','Y']]
 */
module.exports = _curry1(function toPairsIn(obj) {
  var pairs = [];
  for (var prop in obj) {
    pairs[pairs.length] = [prop, obj[prop]];
  }
  return pairs;
});


/***/ }),
/* 968 */
/***/ (function(module, exports, __webpack_require__) {

var invoker = __webpack_require__(673);


/**
 * The upper case version of a string.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category String
 * @sig String -> String
 * @param {String} str The string to upper case.
 * @return {String} The upper case version of `str`.
 * @see R.toLower
 * @example
 *
 *      R.toUpper('abc'); //=> 'ABC'
 */
module.exports = invoker(0, 'toUpperCase');


/***/ }),
/* 969 */
/***/ (function(module, exports, __webpack_require__) {

var _reduce = __webpack_require__(659);
var _xwrap = __webpack_require__(750);
var curryN = __webpack_require__(655);


/**
 * Initializes a transducer using supplied iterator function. Returns a single
 * item by iterating through the list, successively calling the transformed
 * iterator function and passing it an accumulator value and the current value
 * from the array, and then passing the result to the next call.
 *
 * The iterator function receives two values: *(acc, value)*. It will be
 * wrapped as a transformer to initialize the transducer. A transformer can be
 * passed directly in place of an iterator function. In both cases, iteration
 * may be stopped early with the [`R.reduced`](#reduced) function.
 *
 * A transducer is a function that accepts a transformer and returns a
 * transformer and can be composed directly.
 *
 * A transformer is an an object that provides a 2-arity reducing iterator
 * function, step, 0-arity initial value function, init, and 1-arity result
 * extraction function, result. The step function is used as the iterator
 * function in reduce. The result function is used to convert the final
 * accumulator into the return type and in most cases is
 * [`R.identity`](#identity). The init function can be used to provide an
 * initial accumulator, but is ignored by transduce.
 *
 * The iteration is performed with [`R.reduce`](#reduce) after initializing the transducer.
 *
 * @func
 * @memberOf R
 * @since v0.12.0
 * @category List
 * @sig (c -> c) -> ((a, b) -> a) -> a -> [b] -> a
 * @param {Function} xf The transducer function. Receives a transformer and returns a transformer.
 * @param {Function} fn The iterator function. Receives two values, the accumulator and the
 *        current element from the array. Wrapped as transformer, if necessary, and used to
 *        initialize the transducer
 * @param {*} acc The initial accumulator value.
 * @param {Array} list The list to iterate over.
 * @return {*} The final, accumulated value.
 * @see R.reduce, R.reduced, R.into
 * @example
 *
 *      var numbers = [1, 2, 3, 4];
 *      var transducer = R.compose(R.map(R.add(1)), R.take(2));
 *      R.transduce(transducer, R.flip(R.append), [], numbers); //=> [2, 3]
 *
 *      var isOdd = (x) => x % 2 === 1;
 *      var firstOddTransducer = R.compose(R.filter(isOdd), R.take(1));
 *      R.transduce(firstOddTransducer, R.flip(R.append), [], R.range(0, 100)); //=> [1]
 */
module.exports = curryN(4, function transduce(xf, fn, acc, list) {
  return _reduce(xf(typeof fn === 'function' ? _xwrap(fn) : fn), acc, list);
});


/***/ }),
/* 970 */
/***/ (function(module, exports, __webpack_require__) {

var _curry1 = __webpack_require__(651);


/**
 * Transposes the rows and columns of a 2D list.
 * When passed a list of `n` lists of length `x`,
 * returns a list of `x` lists of length `n`.
 *
 *
 * @func
 * @memberOf R
 * @since v0.19.0
 * @category List
 * @sig [[a]] -> [[a]]
 * @param {Array} list A 2D list
 * @return {Array} A 2D list
 * @example
 *
 *      R.transpose([[1, 'a'], [2, 'b'], [3, 'c']]) //=> [[1, 2, 3], ['a', 'b', 'c']]
 *      R.transpose([[1, 2, 3], ['a', 'b', 'c']]) //=> [[1, 'a'], [2, 'b'], [3, 'c']]
 *
 *      // If some of the rows are shorter than the following rows, their elements are skipped:
 *      R.transpose([[10, 11], [20], [], [30, 31, 32]]) //=> [[10, 20, 30], [11, 31], [32]]
 * @symb R.transpose([[a], [b], [c]]) = [a, b, c]
 * @symb R.transpose([[a, b], [c, d]]) = [[a, c], [b, d]]
 * @symb R.transpose([[a, b], [c]]) = [[a, c], [b]]
 */
module.exports = _curry1(function transpose(outerlist) {
  var i = 0;
  var result = [];
  while (i < outerlist.length) {
    var innerlist = outerlist[i];
    var j = 0;
    while (j < innerlist.length) {
      if (typeof result[j] === 'undefined') {
        result[j] = [];
      }
      result[j].push(innerlist[j]);
      j += 1;
    }
    i += 1;
  }
  return result;
});


/***/ }),
/* 971 */
/***/ (function(module, exports, __webpack_require__) {

var _curry3 = __webpack_require__(652);
var map = __webpack_require__(657);
var sequence = __webpack_require__(770);


/**
 * Maps an [Applicative](https://github.com/fantasyland/fantasy-land#applicative)-returning
 * function over a [Traversable](https://github.com/fantasyland/fantasy-land#traversable),
 * then uses [`sequence`](#sequence) to transform the resulting Traversable of Applicative
 * into an Applicative of Traversable.
 *
 * Dispatches to the `sequence` method of the third argument, if present.
 *
 * @func
 * @memberOf R
 * @since v0.19.0
 * @category List
 * @sig (Applicative f, Traversable t) => (a -> f a) -> (a -> f b) -> t a -> f (t b)
 * @param {Function} of
 * @param {Function} f
 * @param {*} traversable
 * @return {*}
 * @see R.sequence
 * @example
 *
 *      // Returns `Nothing` if the given divisor is `0`
 *      safeDiv = n => d => d === 0 ? Nothing() : Just(n / d)
 *
 *      R.traverse(Maybe.of, safeDiv(10), [2, 4, 5]); //=> Just([5, 2.5, 2])
 *      R.traverse(Maybe.of, safeDiv(10), [2, 0, 5]); //=> Nothing
 */
module.exports = _curry3(function traverse(of, f, traversable) {
  return typeof traversable['fantasy-land/traverse'] === 'function' ?
    traversable['fantasy-land/traverse'](f, of) :
    sequence(of, map(f, traversable));
});


/***/ }),
/* 972 */
/***/ (function(module, exports, __webpack_require__) {

var _curry1 = __webpack_require__(651);


/**
 * Removes (strips) whitespace from both ends of the string.
 *
 * @func
 * @memberOf R
 * @since v0.6.0
 * @category String
 * @sig String -> String
 * @param {String} str The string to trim.
 * @return {String} Trimmed version of `str`.
 * @example
 *
 *      R.trim('   xyz  '); //=> 'xyz'
 *      R.map(R.trim, R.split(',', 'x, y, z')); //=> ['x', 'y', 'z']
 */
module.exports = (function() {
  var ws = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
           '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028' +
           '\u2029\uFEFF';
  var zeroWidth = '\u200b';
  var hasProtoTrim = (typeof String.prototype.trim === 'function');
  if (!hasProtoTrim || (ws.trim() || !zeroWidth.trim())) {
    return _curry1(function trim(str) {
      var beginRx = new RegExp('^[' + ws + '][' + ws + ']*');
      var endRx = new RegExp('[' + ws + '][' + ws + ']*$');
      return str.replace(beginRx, '').replace(endRx, '');
    });
  } else {
    return _curry1(function trim(str) {
      return str.trim();
    });
  }
}());


/***/ }),
/* 973 */
/***/ (function(module, exports, __webpack_require__) {

var _arity = __webpack_require__(661);
var _concat = __webpack_require__(660);
var _curry2 = __webpack_require__(650);


/**
 * `tryCatch` takes two functions, a `tryer` and a `catcher`. The returned
 * function evaluates the `tryer`; if it does not throw, it simply returns the
 * result. If the `tryer` *does* throw, the returned function evaluates the
 * `catcher` function and returns its result. Note that for effective
 * composition with this function, both the `tryer` and `catcher` functions
 * must return the same type of results.
 *
 * @func
 * @memberOf R
 * @since v0.20.0
 * @category Function
 * @sig (...x -> a) -> ((e, ...x) -> a) -> (...x -> a)
 * @param {Function} tryer The function that may throw.
 * @param {Function} catcher The function that will be evaluated if `tryer` throws.
 * @return {Function} A new function that will catch exceptions and send then to the catcher.
 * @example
 *
 *      R.tryCatch(R.prop('x'), R.F)({x: true}); //=> true
 *      R.tryCatch(R.prop('x'), R.F)(null);      //=> false
 */
module.exports = _curry2(function _tryCatch(tryer, catcher) {
  return _arity(tryer.length, function() {
    try {
      return tryer.apply(this, arguments);
    } catch (e) {
      return catcher.apply(this, _concat([e], arguments));
    }
  });
});


/***/ }),
/* 974 */
/***/ (function(module, exports, __webpack_require__) {

var _curry1 = __webpack_require__(651);


/**
 * Takes a function `fn`, which takes a single array argument, and returns a
 * function which:
 *
 *   - takes any number of positional arguments;
 *   - passes these arguments to `fn` as an array; and
 *   - returns the result.
 *
 * In other words, `R.unapply` derives a variadic function from a function which
 * takes an array. `R.unapply` is the inverse of [`R.apply`](#apply).
 *
 * @func
 * @memberOf R
 * @since v0.8.0
 * @category Function
 * @sig ([*...] -> a) -> (*... -> a)
 * @param {Function} fn
 * @return {Function}
 * @see R.apply
 * @example
 *
 *      R.unapply(JSON.stringify)(1, 2, 3); //=> '[1,2,3]'
 * @symb R.unapply(f)(a, b) = f([a, b])
 */
module.exports = _curry1(function unapply(fn) {
  return function() {
    return fn(Array.prototype.slice.call(arguments, 0));
  };
});


/***/ }),
/* 975 */
/***/ (function(module, exports, __webpack_require__) {

var _curry1 = __webpack_require__(651);
var nAry = __webpack_require__(692);


/**
 * Wraps a function of any arity (including nullary) in a function that accepts
 * exactly 1 parameter. Any extraneous parameters will not be passed to the
 * supplied function.
 *
 * @func
 * @memberOf R
 * @since v0.2.0
 * @category Function
 * @sig (* -> b) -> (a -> b)
 * @param {Function} fn The function to wrap.
 * @return {Function} A new function wrapping `fn`. The new function is guaranteed to be of
 *         arity 1.
 * @see R.binary, R.nAry
 * @example
 *
 *      var takesTwoArgs = function(a, b) {
 *        return [a, b];
 *      };
 *      takesTwoArgs.length; //=> 2
 *      takesTwoArgs(1, 2); //=> [1, 2]
 *
 *      var takesOneArg = R.unary(takesTwoArgs);
 *      takesOneArg.length; //=> 1
 *      // Only 1 argument is passed to the wrapped function
 *      takesOneArg(1, 2); //=> [1, undefined]
 * @symb R.unary(f)(a, b, c) = f(a)
 */
module.exports = _curry1(function unary(fn) {
  return nAry(1, fn);
});


/***/ }),
/* 976 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(650);
var curryN = __webpack_require__(655);


/**
 * Returns a function of arity `n` from a (manually) curried function.
 *
 * @func
 * @memberOf R
 * @since v0.14.0
 * @category Function
 * @sig Number -> (a -> b) -> (a -> c)
 * @param {Number} length The arity for the returned function.
 * @param {Function} fn The function to uncurry.
 * @return {Function} A new function.
 * @see R.curry
 * @example
 *
 *      var addFour = a => b => c => d => a + b + c + d;
 *
 *      var uncurriedAddFour = R.uncurryN(4, addFour);
 *      uncurriedAddFour(1, 2, 3, 4); //=> 10
 */
module.exports = _curry2(function uncurryN(depth, fn) {
  return curryN(depth, function() {
    var currentDepth = 1;
    var value = fn;
    var idx = 0;
    var endIdx;
    while (currentDepth <= depth && typeof value === 'function') {
      endIdx = currentDepth === depth ? arguments.length : idx + value.length;
      value = value.apply(this, Array.prototype.slice.call(arguments, idx, endIdx));
      currentDepth += 1;
      idx = endIdx;
    }
    return value;
  });
});


/***/ }),
/* 977 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(650);


/**
 * Builds a list from a seed value. Accepts an iterator function, which returns
 * either false to stop iteration or an array of length 2 containing the value
 * to add to the resulting list and the seed to be used in the next call to the
 * iterator function.
 *
 * The iterator function receives one argument: *(seed)*.
 *
 * @func
 * @memberOf R
 * @since v0.10.0
 * @category List
 * @sig (a -> [b]) -> * -> [b]
 * @param {Function} fn The iterator function. receives one argument, `seed`, and returns
 *        either false to quit iteration or an array of length two to proceed. The element
 *        at index 0 of this array will be added to the resulting array, and the element
 *        at index 1 will be passed to the next call to `fn`.
 * @param {*} seed The seed value.
 * @return {Array} The final list.
 * @example
 *
 *      var f = n => n > 50 ? false : [-n, n + 10];
 *      R.unfold(f, 10); //=> [-10, -20, -30, -40, -50]
 * @symb R.unfold(f, x) = [f(x)[0], f(f(x)[1])[0], f(f(f(x)[1])[1])[0], ...]
 */
module.exports = _curry2(function unfold(fn, seed) {
  var pair = fn(seed);
  var result = [];
  while (pair && pair.length) {
    result[result.length] = pair[0];
    pair = fn(pair[1]);
  }
  return result;
});


/***/ }),
/* 978 */
/***/ (function(module, exports, __webpack_require__) {

var _concat = __webpack_require__(660);
var _curry2 = __webpack_require__(650);
var compose = __webpack_require__(699);
var uniq = __webpack_require__(714);


/**
 * Combines two lists into a set (i.e. no duplicates) composed of the elements
 * of each list.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig [*] -> [*] -> [*]
 * @param {Array} as The first list.
 * @param {Array} bs The second list.
 * @return {Array} The first and second lists concatenated, with
 *         duplicates removed.
 * @example
 *
 *      R.union([1, 2, 3], [2, 3, 4]); //=> [1, 2, 3, 4]
 */
module.exports = _curry2(compose(uniq, _concat));


/***/ }),
/* 979 */
/***/ (function(module, exports, __webpack_require__) {

var _concat = __webpack_require__(660);
var _curry3 = __webpack_require__(652);
var uniqWith = __webpack_require__(715);


/**
 * Combines two lists into a set (i.e. no duplicates) composed of the elements
 * of each list. Duplication is determined according to the value returned by
 * applying the supplied predicate to two list elements.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig (a -> a -> Boolean) -> [*] -> [*] -> [*]
 * @param {Function} pred A predicate used to test whether two items are equal.
 * @param {Array} list1 The first list.
 * @param {Array} list2 The second list.
 * @return {Array} The first and second lists concatenated, with
 *         duplicates removed.
 * @see R.union
 * @example
 *
 *      var l1 = [{a: 1}, {a: 2}];
 *      var l2 = [{a: 1}, {a: 4}];
 *      R.unionWith(R.eqBy(R.prop('a')), l1, l2); //=> [{a: 1}, {a: 2}, {a: 4}]
 */
module.exports = _curry3(function unionWith(pred, list1, list2) {
  return uniqWith(pred, _concat(list1, list2));
});


/***/ }),
/* 980 */
/***/ (function(module, exports, __webpack_require__) {

var _curry3 = __webpack_require__(652);


/**
 * Tests the final argument by passing it to the given predicate function. If
 * the predicate is not satisfied, the function will return the result of
 * calling the `whenFalseFn` function with the same argument. If the predicate
 * is satisfied, the argument is returned as is.
 *
 * @func
 * @memberOf R
 * @since v0.18.0
 * @category Logic
 * @sig (a -> Boolean) -> (a -> a) -> a -> a
 * @param {Function} pred        A predicate function
 * @param {Function} whenFalseFn A function to invoke when the `pred` evaluates
 *                               to a falsy value.
 * @param {*}        x           An object to test with the `pred` function and
 *                               pass to `whenFalseFn` if necessary.
 * @return {*} Either `x` or the result of applying `x` to `whenFalseFn`.
 * @see R.ifElse, R.when
 * @example
 *
 *      let safeInc = R.unless(R.isNil, R.inc);
 *      safeInc(null); //=> null
 *      safeInc(1); //=> 2
 */
module.exports = _curry3(function unless(pred, whenFalseFn, x) {
  return pred(x) ? x : whenFalseFn(x);
});


/***/ }),
/* 981 */
/***/ (function(module, exports, __webpack_require__) {

var _identity = __webpack_require__(705);
var chain = __webpack_require__(698);


/**
 * Shorthand for `R.chain(R.identity)`, which removes one level of nesting from
 * any [Chain](https://github.com/fantasyland/fantasy-land#chain).
 *
 * @func
 * @memberOf R
 * @since v0.3.0
 * @category List
 * @sig Chain c => c (c a) -> c a
 * @param {*} list
 * @return {*}
 * @see R.flatten, R.chain
 * @example
 *
 *      R.unnest([1, [2], [[3]]]); //=> [1, 2, [3]]
 *      R.unnest([[1, 2], [3, 4], [5, 6]]); //=> [1, 2, 3, 4, 5, 6]
 */
module.exports = chain(_identity);


/***/ }),
/* 982 */
/***/ (function(module, exports, __webpack_require__) {

var _curry3 = __webpack_require__(652);


/**
 * Takes a predicate, a transformation function, and an initial value,
 * and returns a value of the same type as the initial value.
 * It does so by applying the transformation until the predicate is satisfied,
 * at which point it returns the satisfactory value.
 *
 * @func
 * @memberOf R
 * @since v0.20.0
 * @category Logic
 * @sig (a -> Boolean) -> (a -> a) -> a -> a
 * @param {Function} pred A predicate function
 * @param {Function} fn The iterator function
 * @param {*} init Initial value
 * @return {*} Final value that satisfies predicate
 * @example
 *
 *      R.until(R.gt(R.__, 100), R.multiply(2))(1) // => 128
 */
module.exports = _curry3(function until(pred, fn, init) {
  var val = init;
  while (!pred(val)) {
    val = fn(val);
  }
  return val;
});


/***/ }),
/* 983 */
/***/ (function(module, exports, __webpack_require__) {

var _curry1 = __webpack_require__(651);


/**
 * Returns a list of all the properties, including prototype properties, of the
 * supplied object.
 * Note that the order of the output array is not guaranteed to be consistent
 * across different JS platforms.
 *
 * @func
 * @memberOf R
 * @since v0.2.0
 * @category Object
 * @sig {k: v} -> [v]
 * @param {Object} obj The object to extract values from
 * @return {Array} An array of the values of the object's own and prototype properties.
 * @see R.values, R.keysIn
 * @example
 *
 *      var F = function() { this.x = 'X'; };
 *      F.prototype.y = 'Y';
 *      var f = new F();
 *      R.valuesIn(f); //=> ['X', 'Y']
 */
module.exports = _curry1(function valuesIn(obj) {
  var prop;
  var vs = [];
  for (prop in obj) {
    vs[vs.length] = obj[prop];
  }
  return vs;
});


/***/ }),
/* 984 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(650);


/**
 * Returns a "view" of the given data structure, determined by the given lens.
 * The lens's focus determines which portion of the data structure is visible.
 *
 * @func
 * @memberOf R
 * @since v0.16.0
 * @category Object
 * @typedefn Lens s a = Functor f => (a -> f a) -> s -> f s
 * @sig Lens s a -> s -> a
 * @param {Lens} lens
 * @param {*} x
 * @return {*}
 * @see R.prop, R.lensIndex, R.lensProp
 * @example
 *
 *      var xLens = R.lensProp('x');
 *
 *      R.view(xLens, {x: 1, y: 2});  //=> 1
 *      R.view(xLens, {x: 4, y: 2});  //=> 4
 */
module.exports = (function() {
  // `Const` is a functor that effectively ignores the function given to `map`.
  var Const = function(x) {
    return {value: x, 'fantasy-land/map': function() { return this; }};
  };

  return _curry2(function view(lens, x) {
    // Using `Const` effectively ignores the setter function of the `lens`,
    // leaving the value returned by the getter function unmodified.
    return lens(Const)(x).value;
  });
}());


/***/ }),
/* 985 */
/***/ (function(module, exports, __webpack_require__) {

var _curry3 = __webpack_require__(652);


/**
 * Tests the final argument by passing it to the given predicate function. If
 * the predicate is satisfied, the function will return the result of calling
 * the `whenTrueFn` function with the same argument. If the predicate is not
 * satisfied, the argument is returned as is.
 *
 * @func
 * @memberOf R
 * @since v0.18.0
 * @category Logic
 * @sig (a -> Boolean) -> (a -> a) -> a -> a
 * @param {Function} pred       A predicate function
 * @param {Function} whenTrueFn A function to invoke when the `condition`
 *                              evaluates to a truthy value.
 * @param {*}        x          An object to test with the `pred` function and
 *                              pass to `whenTrueFn` if necessary.
 * @return {*} Either `x` or the result of applying `x` to `whenTrueFn`.
 * @see R.ifElse, R.unless
 * @example
 *
 *      // truncate :: String -> String
 *      var truncate = R.when(
 *        R.propSatisfies(R.gt(R.__, 10), 'length'),
 *        R.pipe(R.take(10), R.append('…'), R.join(''))
 *      );
 *      truncate('12345');         //=> '12345'
 *      truncate('0123456789ABC'); //=> '0123456789…'
 */
module.exports = _curry3(function when(pred, whenTrueFn, x) {
  return pred(x) ? whenTrueFn(x) : x;
});


/***/ }),
/* 986 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(650);
var equals = __webpack_require__(658);
var map = __webpack_require__(657);
var where = __webpack_require__(777);


/**
 * Takes a spec object and a test object; returns true if the test satisfies
 * the spec, false otherwise. An object satisfies the spec if, for each of the
 * spec's own properties, accessing that property of the object gives the same
 * value (in [`R.equals`](#equals) terms) as accessing that property of the
 * spec.
 *
 * `whereEq` is a specialization of [`where`](#where).
 *
 * @func
 * @memberOf R
 * @since v0.14.0
 * @category Object
 * @sig {String: *} -> {String: *} -> Boolean
 * @param {Object} spec
 * @param {Object} testObj
 * @return {Boolean}
 * @see R.where
 * @example
 *
 *      // pred :: Object -> Boolean
 *      var pred = R.whereEq({a: 1, b: 2});
 *
 *      pred({a: 1});              //=> false
 *      pred({a: 1, b: 2});        //=> true
 *      pred({a: 1, b: 2, c: 3});  //=> true
 *      pred({a: 1, b: 1});        //=> false
 */
module.exports = _curry2(function whereEq(spec, testObj) {
  return where(map(equals, spec), testObj);
});


/***/ }),
/* 987 */
/***/ (function(module, exports, __webpack_require__) {

var _contains = __webpack_require__(667);
var _curry2 = __webpack_require__(650);
var flip = __webpack_require__(682);
var reject = __webpack_require__(694);


/**
 * Returns a new list without values in the first argument.
 * [`R.equals`](#equals) is used to determine equality.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.19.0
 * @category List
 * @sig [a] -> [a] -> [a]
 * @param {Array} list1 The values to be removed from `list2`.
 * @param {Array} list2 The array to remove values from.
 * @return {Array} The new array without values in `list1`.
 * @see R.transduce, R.difference
 * @example
 *
 *      R.without([1, 2], [1, 2, 1, 3, 4]); //=> [3, 4]
 */
module.exports = _curry2(function(xs, list) {
  return reject(flip(_contains)(xs), list);
});


/***/ }),
/* 988 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(650);


/**
 * Creates a new list out of the two supplied by creating each possible pair
 * from the lists.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig [a] -> [b] -> [[a,b]]
 * @param {Array} as The first list.
 * @param {Array} bs The second list.
 * @return {Array} The list made by combining each possible pair from
 *         `as` and `bs` into pairs (`[a, b]`).
 * @example
 *
 *      R.xprod([1, 2], ['a', 'b']); //=> [[1, 'a'], [1, 'b'], [2, 'a'], [2, 'b']]
 * @symb R.xprod([a, b], [c, d]) = [[a, c], [a, d], [b, c], [b, d]]
 */
module.exports = _curry2(function xprod(a, b) { // = xprodWith(prepend); (takes about 3 times as long...)
  var idx = 0;
  var ilen = a.length;
  var j;
  var jlen = b.length;
  var result = [];
  while (idx < ilen) {
    j = 0;
    while (j < jlen) {
      result[result.length] = [a[idx], b[j]];
      j += 1;
    }
    idx += 1;
  }
  return result;
});


/***/ }),
/* 989 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(650);


/**
 * Creates a new list out of the two supplied by pairing up equally-positioned
 * items from both lists. The returned list is truncated to the length of the
 * shorter of the two input lists.
 * Note: `zip` is equivalent to `zipWith(function(a, b) { return [a, b] })`.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig [a] -> [b] -> [[a,b]]
 * @param {Array} list1 The first array to consider.
 * @param {Array} list2 The second array to consider.
 * @return {Array} The list made by pairing up same-indexed elements of `list1` and `list2`.
 * @example
 *
 *      R.zip([1, 2, 3], ['a', 'b', 'c']); //=> [[1, 'a'], [2, 'b'], [3, 'c']]
 * @symb R.zip([a, b, c], [d, e, f]) = [[a, d], [b, e], [c, f]]
 */
module.exports = _curry2(function zip(a, b) {
  var rv = [];
  var idx = 0;
  var len = Math.min(a.length, b.length);
  while (idx < len) {
    rv[idx] = [a[idx], b[idx]];
    idx += 1;
  }
  return rv;
});


/***/ }),
/* 990 */
/***/ (function(module, exports, __webpack_require__) {

var _curry2 = __webpack_require__(650);


/**
 * Creates a new object out of a list of keys and a list of values.
 * Key/value pairing is truncated to the length of the shorter of the two lists.
 * Note: `zipObj` is equivalent to `pipe(zipWith(pair), fromPairs)`.
 *
 * @func
 * @memberOf R
 * @since v0.3.0
 * @category List
 * @sig [String] -> [*] -> {String: *}
 * @param {Array} keys The array that will be properties on the output object.
 * @param {Array} values The list of values on the output object.
 * @return {Object} The object made by pairing up same-indexed elements of `keys` and `values`.
 * @example
 *
 *      R.zipObj(['a', 'b', 'c'], [1, 2, 3]); //=> {a: 1, b: 2, c: 3}
 */
module.exports = _curry2(function zipObj(keys, values) {
  var idx = 0;
  var len = Math.min(keys.length, values.length);
  var out = {};
  while (idx < len) {
    out[keys[idx]] = values[idx];
    idx += 1;
  }
  return out;
});


/***/ }),
/* 991 */
/***/ (function(module, exports, __webpack_require__) {

var _curry3 = __webpack_require__(652);


/**
 * Creates a new list out of the two supplied by applying the function to each
 * equally-positioned pair in the lists. The returned list is truncated to the
 * length of the shorter of the two input lists.
 *
 * @function
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig (a,b -> c) -> [a] -> [b] -> [c]
 * @param {Function} fn The function used to combine the two elements into one value.
 * @param {Array} list1 The first array to consider.
 * @param {Array} list2 The second array to consider.
 * @return {Array} The list made by combining same-indexed elements of `list1` and `list2`
 *         using `fn`.
 * @example
 *
 *      var f = (x, y) => {
 *        // ...
 *      };
 *      R.zipWith(f, [1, 2, 3], ['a', 'b', 'c']);
 *      //=> [f(1, 'a'), f(2, 'b'), f(3, 'c')]
 * @symb R.zipWith(fn, [a, b, c], [d, e, f]) = [fn(a, d), fn(b, e), fn(c, f)]
 */
module.exports = _curry3(function zipWith(fn, a, b) {
  var rv = [];
  var idx = 0;
  var len = Math.min(a.length, b.length);
  while (idx < len) {
    rv[idx] = fn(a[idx], b[idx]);
    idx += 1;
  }
  return rv;
});


/***/ }),
/* 992 */
/***/ (function(module, exports) {

module.exports = "<ba-am-chart baAmChartClass=\"dashboard-line-chart\" (onChartReady)=\"chartReady($event)\" [baAmChartConfiguration]=\"mentions\"></ba-am-chart>\r\n"

/***/ }),
/* 993 */
/***/ (function(module, exports) {

module.exports = "<ba-am-chart baAmChartClass=\"dashboard-line-chart\" (onChartReady)=\"chartReady($event)\" [baAmChartConfiguration]=\"sentiments\"></ba-am-chart>\r\n"

/***/ }),
/* 994 */
/***/ (function(module, exports) {

module.exports = "<!-- unfortunately databinding at the end of href does not work-->\r\n<div *ngIf=\"selectedParty === 'SVP'\">\r\n  <ba-card cardTitle=\"Feed\"\r\n           baCardClass=\"large-card with-scroll feed-panel\">\r\n    <a  class=\"twitter-timeline\" href=\"https://twitter.com/swiss_polytics/lists/SVP\"></a>\r\n  </ba-card>\r\n</div>\r\n<div *ngIf=\"selectedParty === 'FDP'\">\r\n  <ba-card cardTitle=\"Feed\"\r\n           baCardClass=\"large-card with-scroll feed-panel\">\r\n    <a class=\"twitter-timeline\" href=\"https://twitter.com/swiss_polytics/lists/FDP\"></a>\r\n  </ba-card>\r\n</div>\r\n<div *ngIf=\"selectedParty === 'SP'\">\r\n  <ba-card cardTitle=\"Feed\"\r\n           baCardClass=\"large-card with-scroll feed-panel\">\r\n    <a class=\"twitter-timeline\" href=\"https://twitter.com/swiss_polytics/lists/SP\"></a>\r\n  </ba-card>\r\n</div>\r\n<div *ngIf=\"selectedParty === 'CVP'\">\r\n  <ba-card cardTitle=\"Feed\"\r\n           baCardClass=\"large-card with-scroll feed-panel\">\r\n    <a class=\"twitter-timeline\" href=\"https://twitter.com/swiss_polytics/lists/CVP\"></a>\r\n  </ba-card>\r\n</div>\r\n<div *ngIf=\"selectedParty === 'GLP'\">\r\n  <ba-card cardTitle=\"Feed\"\r\n           baCardClass=\"large-card with-scroll feed-panel\">\r\n    <a class=\"twitter-timeline\" href=\"https://twitter.com/swiss_polytics/lists/GLP\"></a>\r\n  </ba-card>\r\n</div>\r\n<div *ngIf=\"selectedParty === 'GPS'\">\r\n  <ba-card cardTitle=\"Feed\"\r\n           baCardClass=\"large-card with-scroll feed-panel\">\r\n    <a class=\"twitter-timeline\" href=\"https://twitter.com/swiss_polytics/lists/GPS\"></a>\r\n  </ba-card>\r\n</div>\r\n<div *ngIf=\"selectedParty === 'BDP'\">\r\n  <ba-card cardTitle=\"Feed\"\r\n           baCardClass=\"large-card with-scroll feed-panel\">\r\n    <a class=\"twitter-timeline\" href=\"https://twitter.com/swiss_polytics/lists/BDP\"></a>\r\n  </ba-card>\r\n</div>\r\n\r\n"

/***/ }),
/* 995 */
/***/ (function(module, exports) {

module.exports = "<div class=\"row tiles\">\r\n\r\n  <ba-card *ngIf=\"!politicianId\" class=\"tile-item-container col-xlg-4 col-lg-4 col-md-4 col-sm-12 col-12\">\r\n    <div class=\"tile-item\">\r\n      <div class=\"description\">\r\n        <div translate>Tweeters heute</div>\r\n        <div class=\"description-stats\">{{ usersToday }}</div>\r\n      </div>\r\n      <i class=\"chart-icon fa fa-user fa-5x\"></i>\r\n    </div>\r\n\r\n  </ba-card>\r\n  <ba-card class=\"tile-item-container col-xlg-4 col-lg-4 col-md-4 col-sm-12 col-12\">\r\n    <div class=\"tile-item\">\r\n      <div class=\"description\">\r\n        <div translate>Tweets heute</div>\r\n        <div class=\"description-stats\">{{tweetsToday }}</div>\r\n      </div>\r\n      <i class=\"chart-icon fa fa-twitter fa-5x\"></i>\r\n    </div>\r\n\r\n  </ba-card>\r\n\r\n  <ba-card  *ngIf=\"trendingTopics && trendingTopics.length > 0\" class=\"tile-item-container col-xlg-4 col-lg-4 col-md-4 col-sm-12 col-12\">\r\n    <div class=\"tile-item\">\r\n      <div class=\"description trending\">\r\n        <div translate>Trending heute</div>\r\n        <div *ngFor=\"let topic of trendingTopics\">\r\n          <div class=\"description-stats\">{{topic}}</div>\r\n        </div>\r\n      </div>\r\n      <i class=\"chart-icon fa fa-arrow-up fa-5x\"></i>\r\n    </div>\r\n  </ba-card>\r\n</div>\r\n"

/***/ }),
/* 996 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(2);
var from_1 = __webpack_require__(402);
Observable_1.Observable.from = from_1.from;
//# sourceMappingURL=from.js.map

/***/ }),
/* 997 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(2);
var filter_1 = __webpack_require__(403);
Observable_1.Observable.prototype.filter = filter_1.filter;
//# sourceMappingURL=filter.js.map

/***/ }),
/* 998 */,
/* 999 */,
/* 1000 */,
/* 1001 */,
/* 1002 */,
/* 1003 */,
/* 1004 */,
/* 1005 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_helper_service__ = __webpack_require__(664);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Parliament; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Parliament = /** @class */ (function () {
    function Parliament(_helper) {
        this._helper = _helper;
    }
    Parliament.prototype.handleFilterClick = function ($event) {
        this.councilFilter = $event.currentTarget.value;
    };
    Parliament.prototype.ngAfterViewInit = function () {
        this._helper.initTwitterWidget();
    };
    Parliament = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
            selector: 'parliament',
            styles: [__webpack_require__(1042)],
            template: __webpack_require__(1055),
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__util_helper_service__["a" /* Helper */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__util_helper_service__["a" /* Helper */]) === "function" && _a || Object])
    ], Parliament);
    return Parliament;
    var _a;
}());

//# sourceMappingURL=parliament.component.js.map

/***/ }),
/* 1006 */,
/* 1007 */,
/* 1008 */,
/* 1009 */,
/* 1010 */,
/* 1011 */,
/* 1012 */,
/* 1013 */,
/* 1014 */,
/* 1015 */,
/* 1016 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_council_of_states_service__ = __webpack_require__(1018);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CouncilOfStatesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CouncilOfStatesComponent = /** @class */ (function () {
    function CouncilOfStatesComponent(federalAssemblyService, route, router) {
        this.federalAssemblyService = federalAssemblyService;
        this.route = route;
        this.router = router;
    }
    CouncilOfStatesComponent.prototype.getSeats = function () {
        this.seats = this.federalAssemblyService.getSeats();
    };
    CouncilOfStatesComponent.prototype.ngOnInit = function () {
        this.getSeats();
    };
    CouncilOfStatesComponent.prototype.goToProfile = function (personId) {
        //console.log('personId ' + personId + ' geklickt.');
        window.open('https://www.parlament.ch/de/biografie?CouncillorId=' + personId, '_blank');
    };
    CouncilOfStatesComponent.prototype.navigateToProfile = function (personId) {
        this.router.navigate(['/pages/politician/' + personId]);
    };
    CouncilOfStatesComponent.prototype.markAsSelected = function () {
    };
    CouncilOfStatesComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
            selector: 'app-council-of-states',
            template: __webpack_require__(1051),
            styles: [__webpack_require__(1038)],
            providers: [__WEBPACK_IMPORTED_MODULE_2__service_council_of_states_service__["a" /* CouncilOfStatesService */]],
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__service_council_of_states_service__["a" /* CouncilOfStatesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__service_council_of_states_service__["a" /* CouncilOfStatesService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _c || Object])
    ], CouncilOfStatesComponent);
    return CouncilOfStatesComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=council-of-states.component.js.map

/***/ }),
/* 1017 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SEATS; });
var SEATS = [
    {
        'rowNumber': 0,
        'seatNumber': 1,
        'seatId': 'BR001',
        'd': 'M130.5,341.5l-25.9-2.3l2.6-29.9l25.9,2.3L130.5,341.5z',
        'personId': '1',
        'rat': 'BR',
    },
    {
        'rowNumber': 0,
        'seatNumber': 2,
        'seatId': 'BR002',
        'd': 'M174.4,345.3l-25.9-2.3l2.6-29.9l25.9,2.3L174.4,345.3z',
        'personId': '2',
        'rat': 'BR',
    },
    {
        'rowNumber': 0,
        'seatNumber': 3,
        'seatId': 'BR003',
        'd': 'M195,317l25.9,2.3l-2.6,29.9l-25.9-2.3L195,317z',
        'personId': '3',
        'rat': 'BR',
    },
    {
        'rowNumber': 0,
        'seatNumber': 4,
        'seatId': 'SR002',
        'd': 'M287.9,349.4h-26v-30h26V349.4z',
        'personId': '1148',
        'rat': 'SR',
    },
    {
        'rowNumber': 0,
        'seatNumber': 5,
        'seatId': 'SR005',
        'd': 'M345.9,349.4h-26v-30h26V349.4z',
        'personId': '3915',
        'rat': 'SR',
    },
    {
        'rowNumber': 0,
        'seatNumber': 6,
        'seatId': 'BR004',
        'd': 'M415.9,346.9l-25.9,2.3l-2.6-29.9l25.9-2.3L415.9,346.9z',
        'personId': '#NV',
        'rat': 'BR',
    },
    {
        'rowNumber': 0,
        'seatNumber': 7,
        'seatId': 'BR005',
        'd': 'M431.2,315.5l25.9-2.3l2.6,29.9l-25.9,2.3L431.2,315.5z',
        'personId': '#NV',
        'rat': 'BR',
    },
    {
        'rowNumber': 0,
        'seatNumber': 8,
        'seatId': 'BR006',
        'd': 'M475,311.6l25.9-2.3l2.6,29.9l-25.9,2.3L475,311.6z',
        'personId': '#NV',
        'rat': 'BR',
    },
    {
        'rowNumber': 0,
        'seatNumber': 9,
        'seatId': '-',
        'd': 'M151.1,371.4l25.9,2.3l-2.6,29.9l-25.9-2.3L151.1,371.4z',
        'personId': '#NV',
        'rat': 'Protokollführer',
    },
    {
        'rowNumber': 0,
        'seatNumber': 10,
        'seatId': '-',
        'd': 'M195,375.3l25.9,2.3l-2.6,29.9l-25.9-2.3L195,375.3z',
        'personId': '#NV',
        'rat': 'Ratssekretariat',
    },
    {
        'rowNumber': 0,
        'seatNumber': 11,
        'seatId': 'SR001',
        'd': 'M289.9,377.4h26v30h-26V377.4z',
        'personId': '466',
        'rat': 'SR',
    },
    {
        'rowNumber': 0,
        'seatNumber': 12,
        'seatId': 'SR003',
        'd': 'M387.4,377.6l25.9-2.3l2.6,29.9l-25.9,2.3L387.4,377.6z',
        'personId': '4062',
        'rat': 'SR',
    },
    {
        'rowNumber': 0,
        'seatNumber': 13,
        'seatId': '-',
        'd': 'M431.2,373.7l25.9-2.3l2.6,29.9l-25.9,2.3L431.2,373.7z',
        'personId': '#NV',
        'rat': 'Amtliches Bulletin',
    },
    {
        'rowNumber': 1,
        'seatNumber': 1,
        'seatId': 'SR004',
        'd': 'M130.1,239.8c0.4-10.4,1.8-20.8,4.1-31l29,7.8c-1.7,7.6-2.7,15.4-3.1,23.2H130.1z',
        'personId': '341',
        'rat': 'SR',
    },
    {
        'rowNumber': 1,
        'seatNumber': 2,
        'seatId': 'SR006',
        'd': 'M137.6,196.1c3.1-10,7.1-19.6,12-28.9l26,15c-3.6,6.9-6.6,14.2-9,21.6L137.6,196.1z',
        'personId': '3914',
        'rat': 'SR',
    },
    {
        'rowNumber': 1,
        'seatNumber': 3,
        'seatId': 'SR008',
        'd': 'M162,147.1c5.3-7.3,11.1-14.2,17.5-20.6l21,21.4c-5,5.1-9.7,10.6-13.9,16.4L162,147.1z',
        'personId': '4151',
        'rat': 'SR',
    },
    {
        'rowNumber': 1,
        'seatNumber': 4,
        'seatId': 'SR010',
        'd': 'M182.6,123.4c6.5-6.2,13.5-11.9,21-17l16.7,24.9c-5.9,4.1-11.5,8.6-16.7,13.5L182.6,123.4z',
        'personId': '4207',
        'rat': 'SR',
    },
    {
        'rowNumber': 1,
        'seatNumber': 5,
        'seatId': 'SR012',
        'd': 'M207.2,104c7.6-4.9,15.5-9.2,23.7-12.9l11.8,27.6c-6.5,2.9-12.9,6.4-18.9,10.2L207.2,104z',
        'personId': '4112',
        'rat': 'SR',
    },
    {
        'rowNumber': 1,
        'seatNumber': 6,
        'seatId': 'SR014',
        'd': 'M235,89.3c8.3-3.4,16.9-6.2,25.7-8.3l6.5,29.3c-7,1.7-13.8,3.9-20.4,6.6L235,89.3z',
        'personId': '4068',
        'rat': 'SR',
    },
    {
        'rowNumber': 1,
        'seatNumber': 7,
        'seatId': 'SR016',
        'd': 'M265,80.1c8.8-1.9,17.8-3,26.8-3.4l1,30c-7.2,0.4-14.3,1.3-21.3,2.7L265,80.1z',
        'personId': '1162',
        'rat': 'SR',
    },
    {
        'rowNumber': 1,
        'seatNumber': 8,
        'seatId': 'SR019',
        'd': 'M308.1,76.6c9,0.4,18,1.6,26.8,3.4l-6.5,29.3c-7-1.5-14.1-2.4-21.3-2.7L308.1,76.6z',
        'personId': '4139',
        'rat': 'SR',
    },
    {
        'rowNumber': 1,
        'seatNumber': 9,
        'seatId': 'SR017',
        'd': 'M339.2,81c8.8,2.1,17.4,4.9,25.7,8.3l-11.8,27.6c-6.6-2.7-13.5-4.9-20.4-6.6L339.2,81z',
        'personId': '321',
        'rat': 'SR',
    },
    {
        'rowNumber': 1,
        'seatNumber': 10,
        'seatId': 'SR015',
        'd': 'M368.9,91.1c8.2,3.7,16.2,8,23.7,12.9L376,128.9c-6-3.9-12.3-7.3-18.9-10.2L368.9,91.1z',
        'personId': '4152',
        'rat': 'SR',
    },
    {
        'rowNumber': 1,
        'seatNumber': 11,
        'seatId': 'SR013',
        'd': 'M396.3,106.4c7.4,5.1,14.4,10.8,21,17l-21,21.4c-5.2-4.9-10.8-9.5-16.7-13.5L396.3,106.4z',
        'personId': '3918',
        'rat': 'SR',
    },
    {
        'rowNumber': 1,
        'seatNumber': 12,
        'seatId': 'SR011',
        'd': 'M420.4,126.5c6.4,6.4,12.2,13.3,17.5,20.6l-24.6,17.2c-4.2-5.8-8.8-11.3-13.9-16.4L420.4,126.5z',
        'personId': '4204',
        'rat': 'SR',
    },
    {
        'rowNumber': 1,
        'seatNumber': 13,
        'seatId': 'SR009',
        'd': 'M450.4,167.2c4.9,9.2,8.9,18.9,12,28.9l-29,7.8c-2.4-7.4-5.4-14.7-9-21.6L450.4,167.2z',
        'personId': '4153',
        'rat': 'SR',
    },
    {
        'rowNumber': 1,
        'seatNumber': 14,
        'seatId': 'SR007',
        'd': 'M465.7,208.8c2.3,10.2,3.7,20.5,4.1,31h-30c-0.4-7.8-1.4-15.6-3.1-23.2L465.7,208.8z',
        'personId': '4145',
        'rat': 'SR',
    },
    {
        'rowNumber': 2,
        'seatNumber': 1,
        'seatId': 'SR018',
        'd': 'M65,241.8c0.2-10.6,1.1-21.1,2.8-31.5l29.6,5.2c-1.3,8.7-2.1,17.5-2.3,26.3H65z',
        'personId': '1150',
        'rat': 'SR',
    },
    {
        'rowNumber': 2,
        'seatNumber': 2,
        'seatId': 'SR020',
        'd': 'M69.4,201c2-10.4,4.8-20.6,8.2-30.6l28.2,10.3c-2.8,8.3-5.1,16.9-6.8,25.5L69.4,201z',
        'personId': '823',
        'rat': 'SR',
    },
    {
        'rowNumber': 2,
        'seatNumber': 3,
        'seatId': 'SR022',
        'd': 'M80.8,161.7c3.8-9.8,8.3-19.4,13.4-28.7l26,15c-4.2,7.7-8,15.7-11.2,23.9L80.8,161.7z',
        'personId': '525',
        'rat': 'SR',
    },
    {
        'rowNumber': 2,
        'seatNumber': 4,
        'seatId': 'SR024',
        'd': 'M109.2,109.1c5.8-8,12.1-15.7,18.8-22.9l21.7,20.7c-5.7,6.1-11,12.6-15.9,19.4L109.2,109.1z',
        'personId': '1267',
        'rat': 'SR',
    },
    {
        'rowNumber': 2,
        'seatNumber': 5,
        'seatId': 'SR026',
        'd': 'M132.4,81.7c6.9-7.1,14.3-13.7,22.1-19.8l18.3,23.8c-6.6,5.2-12.8,10.8-18.7,16.7L132.4,81.7z',
        'personId': '172',
        'rat': 'SR',
    },
    {
        'rowNumber': 2,
        'seatNumber': 6,
        'seatId': 'SR028',
        'd': 'M159.4,58.1c7.9-5.9,16.2-11.3,24.8-16.2l14.4,26.3c-7.3,4.1-14.3,8.7-21,13.7L159.4,58.1z',
        'personId': '3879',
        'rat': 'SR',
    },
    {
        'rowNumber': 2,
        'seatNumber': 7,
        'seatId': 'SR030',
        'd': 'M189.7,38.9c8.7-4.6,17.7-8.7,27-12.2L227,54.9c-7.8,3-15.4,6.4-22.8,10.3L189.7,38.9z',
        'personId': '477',
        'rat': 'SR',
    },
    {
        'rowNumber': 2,
        'seatNumber': 8,
        'seatId': 'SR033',
        'd': 'M383.2,26.7c9.2,3.5,18.3,7.6,27,12.2l-14.4,26.3c-7.4-3.9-15-7.4-22.8-10.3L383.2,26.7z',
        'personId': '825',
        'rat': 'SR',
    },
    {
        'rowNumber': 2,
        'seatNumber': 9,
        'seatId': 'SR031',
        'd': 'M415.7,41.9c8.6,4.9,16.9,10.3,24.8,16.2l-18.3,23.8c-6.7-5-13.7-9.6-21-13.7L415.7,41.9z',
        'personId': '1141',
        'rat': 'SR',
    },
    {
        'rowNumber': 2,
        'seatNumber': 10,
        'seatId': 'SR029',
        'd': 'M445.5,61.9c7.8,6.1,15.1,12.7,22.1,19.8l-21.7,20.7c-5.9-5.9-12.1-11.5-18.7-16.7L445.5,61.9z',
        'personId': '1153',
        'rat': 'SR',
    },
    {
        'rowNumber': 2,
        'seatNumber': 11,
        'seatId': 'SR027',
        'd': 'M471.8,86.2c6.7,7.2,13,14.9,18.8,22.9L466,126.3c-4.9-6.8-10.2-13.2-15.9-19.4L471.8,86.2z',
        'personId': '801',
        'rat': 'SR',
    },
    {
        'rowNumber': 2,
        'seatNumber': 12,
        'seatId': 'SR025',
        'd': 'M505.8,133c5.1,9.2,9.6,18.8,13.4,28.7L491,172c-3.2-8.2-6.9-16.2-11.2-23.9L505.8,133z',
        'personId': '3921',
        'rat': 'SR',
    },
    {
        'rowNumber': 2,
        'seatNumber': 13,
        'seatId': 'SR023',
        'd': 'M522.3,170.5c3.4,10,6.1,20.2,8.2,30.6l-29.6,5.2c-1.7-8.6-4-17.2-6.8-25.5L522.3,170.5z',
        'personId': '4206',
        'rat': 'SR',
    },
    {
        'rowNumber': 2,
        'seatNumber': 14,
        'seatId': 'SR021',
        'd': 'M532.1,210.2c1.6,10.4,2.5,21,2.8,31.5h-30c-0.2-8.8-1-17.6-2.3-26.3L532.1,210.2z',
        'personId': '1106',
        'rat': 'SR',
    },
    {
        'rowNumber': 3,
        'seatNumber': 1,
        'seatId': 'SR032',
        'd': 'M0,240.4c0.2-9.1,0.8-18.1,1.8-27.1l29.8,3.9c-0.8,7.7-1.3,15.4-1.5,23.2L0,240.4L0,240.4z',
        'personId': '#NV',
        'rat': 'SR',
    },
    {
        'rowNumber': 3,
        'seatNumber': 2,
        'seatId': 'SR034',
        'd': 'M3.4,201.3c1.4-9,3.1-17.8,5.3-26.6l29,7.8c-1.8,7.5-3.3,15.1-4.5,22.8L3.4,201.3z',
        'personId': '3891',
        'rat': 'SR',
    },
    {
        'rowNumber': 3,
        'seatNumber': 3,
        'seatId': 'SR036',
        'd': 'M11.8,163c2.5-8.7,5.4-17.3,8.7-25.7l27.7,11.5c-2.8,7.2-5.3,14.6-7.5,22L11.8,163z',
        'personId': '305',
        'rat': 'SR',
    },
    {
        'rowNumber': 3,
        'seatNumber': 4,
        'seatId': 'SR038',
        'd': 'M25.1,126.1c3.6-8.3,7.6-16.4,12-24.4l26,15c-3.7,6.8-7.1,13.7-10.3,20.8L25.1,126.1z',
        'personId': '4205',
        'rat': 'SR',
    },
    {
        'rowNumber': 3,
        'seatNumber': 5,
        'seatId': 'SR040',
        'd': 'M56.5,71.1c5.6-7.7,11.5-15.2,17.8-22.4l22.3,20.1C91.1,75,86,81.5,81.1,88.3L56.5,71.1z',
        'personId': '3916',
        'rat': 'SR',
    },
    {
        'rowNumber': 3,
        'seatNumber': 6,
        'seatId': 'SR042',
        'd': 'M79.7,42.7c6.5-7,13.3-13.7,20.4-20l19.7,22.6c-6.2,5.5-12.1,11.4-17.8,17.5L79.7,42.7z',
        'personId': '4026',
        'rat': 'SR',
    },
    {
        'rowNumber': 3,
        'seatNumber': 7,
        'seatId': 'SR044',
        'd': 'M106.2,17.4c7.3-6.2,14.8-12,22.7-17.4l16.8,24.9c-6.8,4.7-13.4,9.8-19.8,15.2L106.2,17.4z',
        'personId': '3920',
        'rat': 'SR',
    },
    {
        'rowNumber': 3,
        'seatNumber': 8,
        'seatId': 'SR047',
        'd': 'M471,0c7.8,5.4,15.4,11.2,22.7,17.4L474,40c-6.3-5.4-12.9-10.4-19.8-15.2L471,0z',
        'personId': '3831',
        'rat': 'SR',
    },
    {
        'rowNumber': 3,
        'seatNumber': 9,
        'seatId': 'SR045',
        'd': 'M499.8,22.7c7.1,6.3,13.9,13,20.4,20l-22.3,20.1c-5.6-6.1-11.6-11.9-17.8-17.5L499.8,22.7z',
        'personId': '1162',
        'rat': 'SR',
    },
    {
        'rowNumber': 3,
        'seatNumber': 10,
        'seatId': 'SR043',
        'd': 'M525.6,48.7c6.3,7.2,12.2,14.6,17.8,22.4l-24.6,17.2c-4.9-6.7-10-13.2-15.5-19.5L525.6,48.7z',
        'personId': '4064',
        'rat': 'SR',
    },
    {
        'rowNumber': 3,
        'seatNumber': 11,
        'seatId': 'SR041',
        'd': 'M562.7,101.7c4.4,7.9,8.4,16.1,12,24.4L547,137.5c-3.1-7.1-6.6-14-10.3-20.8L562.7,101.7z',
        'personId': '3871',
        'rat': 'SR',
    },
    {
        'rowNumber': 3,
        'seatNumber': 12,
        'seatId': 'SR039',
        'd': 'M579.4,137.2c3.3,8.4,6.2,17,8.7,25.7l-29,7.8c-2.2-7.4-4.7-14.8-7.5-22L579.4,137.2z',
        'personId': '4088',
        'rat': 'SR',
    },
    {
        'rowNumber': 3,
        'seatNumber': 13,
        'seatId': 'SR037',
        'd': 'M591.2,174.6c2.2,8.8,3.9,17.7,5.3,26.6l-29.8,3.9c-1.2-7.7-2.7-15.3-4.5-22.8L591.2,174.6z',
        'personId': '4075',
        'rat': 'SR',
    },
    {
        'rowNumber': 3,
        'seatNumber': 14,
        'seatId': 'SR035',
        'd': 'M598.1,213.3c1,9,1.6,18,1.8,27.1h-30c-0.2-7.7-0.7-15.5-1.5-23.2L598.1,213.3z',
        'personId': '540',
        'rat': 'SR',
    },
];
//# sourceMappingURL=council-of-states.data.js.map

/***/ }),
/* 1018 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__council_of_states_data__ = __webpack_require__(1017);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CouncilOfStatesService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CouncilOfStatesService = /** @class */ (function () {
    function CouncilOfStatesService() {
    }
    CouncilOfStatesService.prototype.getSeats = function () {
        return __WEBPACK_IMPORTED_MODULE_1__council_of_states_data__["a" /* SEATS */];
    };
    CouncilOfStatesService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], CouncilOfStatesService);
    return CouncilOfStatesService;
}());

//# sourceMappingURL=council-of-states.service.js.map

/***/ }),
/* 1019 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_federal_assembly_service__ = __webpack_require__(1021);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FederalAssemblyComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FederalAssemblyComponent = /** @class */ (function () {
    function FederalAssemblyComponent(federalAssemblyService, route, router) {
        this.federalAssemblyService = federalAssemblyService;
        this.route = route;
        this.router = router;
    }
    FederalAssemblyComponent.prototype.getSeats = function () {
        this.seats = this.federalAssemblyService.getSeats();
    };
    FederalAssemblyComponent.prototype.ngOnInit = function () {
        this.getSeats();
    };
    FederalAssemblyComponent.prototype.goToProfile = function (personId) {
        //console.log('personId ' + personId + ' geklickt.');
        window.open('https://www.parlament.ch/de/biografie?CouncillorId=' + personId, '_blank');
    };
    FederalAssemblyComponent.prototype.navigateToProfile = function (personId) {
        this.router.navigate(['/pages/politician/' + personId]);
    };
    FederalAssemblyComponent.prototype.markAsSelected = function () {
    };
    FederalAssemblyComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
            selector: 'app-federal-assembly',
            template: __webpack_require__(1052),
            styles: [__webpack_require__(1039)],
            providers: [__WEBPACK_IMPORTED_MODULE_2__service_federal_assembly_service__["a" /* FederalAssemblyService */]],
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__service_federal_assembly_service__["a" /* FederalAssemblyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__service_federal_assembly_service__["a" /* FederalAssemblyService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _c || Object])
    ], FederalAssemblyComponent);
    return FederalAssemblyComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=federal-assembly.component.js.map

/***/ }),
/* 1020 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SEATS; });
var SEATS = [
    {
        'rowNumber': 0,
        'seatNumber': 1,
        'seatId': 'NR007',
        'd': 'M371.6,539h20v22h-20V539z',
        'personId': 1295,
        'rat': 'NR',
    },
    {
        'rowNumber': 0,
        'seatNumber': 2,
        'seatId': 'NR009',
        'd': 'M400.9,539h20v22h-20V539z',
        'personId': 4074,
        'rat': 'NR',
    },
    {
        'rowNumber': 0,
        'seatNumber': 3,
        'seatId': 'NR011',
        'd': 'M430.1,539h20v22h-20V539z',
        'personId': 4137,
        'rat': 'NR',
    },
    {
        'rowNumber': 0,
        'seatNumber': 4,
        'seatId': 'NR008',
        'd': 'M459.3,539h20v22h-20V539z',
        'personId': 4135,
        'rat': 'NR',
    },
    {
        'rowNumber': 0,
        'seatNumber': 5,
        'seatId': 'NR010',
        'd': 'M488.5,539h20v22h-20V539z',
        'personId': 3876,
        'rat': 'NR',
    },
    {
        'rowNumber': 0,
        'seatNumber': 6,
        'seatId': 'NR012',
        'd': 'M517.7,539h20v22h-20V539z',
        'personId': 4189,
        'rat': 'NR',
    },
    {
        'rowNumber': 0,
        'seatNumber': 7,
        'seatId': 'BR001',
        'd': 'M260.1,571.7l19.8,2.4l-2.7,21.8l-19.9-2.4L260.1,571.7z',
        'personId': 1,
        'rat': 'BR',
    },
    {
        'rowNumber': 0,
        'seatNumber': 8,
        'seatId': 'BR002',
        'd': 'M292.9,575.8l19.9,2.4l-2.7,21.8l-19.9-2.4L292.9,575.8z',
        'personId': 2,
        'rat': 'BR',
    },
    {
        'rowNumber': 0,
        'seatNumber': 9,
        'seatId': 'BR003',
        'd': 'M325.6,579.8l19.9,2.4l-2.7,21.8l-19.9-2.4L325.6,579.8z',
        'personId': 3,
        'rat': 'BR',
    },
    {
        'rowNumber': 0,
        'seatNumber': 10,
        'seatId': '-',
        'd': 'M371.6,582.1h20v22h-20V582.1z',
        'personId': '#NV',
        'rat': 'Kommissionssprecher',
    },
    {
        'rowNumber': 0,
        'seatNumber': 11,
        'seatId': '-',
        'd': 'M408.2,582.1h20v22h-20V582.1z',
        'personId': '#NV',
        'rat': 'Kommissionssprecher',
    },
    {
        'rowNumber': 0,
        'seatNumber': 12,
        'seatId': 'BR004',
        'd': 'M444.7,582.1h20v22h-20V582.1z',
        'personId': '#NV',
        'rat': 'BR',
    },
    {
        'rowNumber': 0,
        'seatNumber': 13,
        'seatId': 'NR003',
        'd': 'M481.2,582.1h20v22h-20V582.1z',
        'personId': 4025,
        'rat': 'NR',
    },
    {
        'rowNumber': 0,
        'seatNumber': 14,
        'seatId': 'NR005',
        'd': 'M517.7,582.1h20v22h-20V582.1z',
        'personId': 4191,
        'rat': 'NR',
    },
    {
        'rowNumber': 0,
        'seatNumber': 15,
        'seatId': 'BR005',
        'd': 'M561.6,582.3l19.8-2.4l2.7,21.8l-19.8,2.4L561.6,582.3z',
        'personId': '#NV',
        'rat': 'BR',
    },
    {
        'rowNumber': 0,
        'seatNumber': 16,
        'seatId': 'BR006',
        'd': 'M594.3,578.3l19.8-2.4l2.7,21.8l-19.9,2.4L594.3,578.3z',
        'personId': '#NV',
        'rat': 'BR',
    },
    {
        'rowNumber': 0,
        'seatNumber': 17,
        'seatId': 'BR007',
        'd': 'M627.1,574.2l19.8-2.4l2.7,21.8l-19.9,2.4L627.1,574.2z',
        'personId': '#NV',
        'rat': 'BR',
    },
    {
        'rowNumber': 0,
        'seatNumber': 18,
        'seatId': '-',
        'd': 'M292.9,617.9l19.9,2.4l-2.7,21.8l-19.9-2.4L292.9,617.9z',
        'personId': '#NV',
        'rat': '-',
    },
    {
        'rowNumber': 0,
        'seatNumber': 19,
        'seatId': '-',
        'd': 'M325.6,621.9l19.9,2.4l-2.7,21.8l-19.9-2.4L325.6,621.9z',
        'personId': '#NV',
        'rat': '-',
    },
    {
        'rowNumber': 0,
        'seatNumber': 20,
        'seatId': '-',
        'd': 'M371.6,624.2h20v22h-20V624.2z',
        'personId': '#NV',
        'rat': '-',
    },
    {
        'rowNumber': 0,
        'seatNumber': 21,
        'seatId': 'NR001',
        'd': 'M444.2,624.2h20v22h-20V624.2z',
        'personId': 514,
        'rat': 'NR',
    },
    {
        'rowNumber': 0,
        'seatNumber': 22,
        'seatId': 'NR002',
        'd': 'M517.7,624.2h20v22h-20V624.2z',
        'personId': 1124,
        'rat': 'NR',
    },
    {
        'rowNumber': 0,
        'seatNumber': 23,
        'seatId': 'NR004',
        'd': 'M561.6,624.3l19.9-1.7l1.9,21.9l-19.9,1.7L561.6,624.3z',
        'personId': 3830,
        'rat': 'NR',
    },
    {
        'rowNumber': 0,
        'seatNumber': 24,
        'seatId': 'NR006',
        'd': 'M594.5,621.4l19.9-1.7l1.9,21.9l-19.9,1.7L594.5,621.4z',
        'personId': 173,
        'rat': 'NR',
    },
    {
        'rowNumber': 1,
        'seatNumber': 1,
        'seatId': 'NR013',
        'd': 'M339.3,501.1c0.5-10.2,2.4-20.2,5.5-29.9l23.4,9c-2.1,6.8-3.4,13.8-3.9,20.9H339.3z',
        'personId': 724,
        'rat': 'NR',
    },
    {
        'rowNumber': 1,
        'seatNumber': 2,
        'seatId': 'NR015',
        'd': 'M349,460.4c4.1-9.3,9.5-18,15.9-25.9l18.6,16.8c-4.4,5.6-8.1,11.7-11.1,18.1L349,460.4z',
        'personId': 1318,
        'rat': 'NR',
    },
    {
        'rowNumber': 1,
        'seatNumber': 3,
        'seatId': 'NR017',
        'd': 'M378.6,420.3c7.7-6.7,16.2-12.3,25.3-16.8l9.8,23.1c-6.3,3.2-12.3,7.1-17.7,11.7L378.6,420.3z',
        'personId': 4093,
        'rat': 'NR',
    },
    {
        'rowNumber': 1,
        'seatNumber': 4,
        'seatId': 'NR019',
        'd': 'M414.6,399c9.6-3.5,19.5-5.7,29.7-6.6l0.9,25c-7.1,0.7-14,2.3-20.7,4.6L414.6,399z',
        'personId': 4149,
        'rat': 'NR',
    },
    {
        'rowNumber': 1,
        'seatNumber': 5,
        'seatId': 'NR014',
        'd': 'M464,392.4c10.1,0.9,20.1,3.1,29.7,6.6l-9.8,23.1c-6.7-2.3-13.7-3.9-20.7-4.6L464,392.4z',
        'personId': 4165,
        'rat': 'NR',
    },
    {
        'rowNumber': 1,
        'seatNumber': 6,
        'seatId': 'NR016',
        'd': 'M504.4,403.5c9.1,4.4,17.7,10.1,25.3,16.8l-17.4,18c-5.4-4.6-11.4-8.5-17.7-11.7L504.4,403.5z',
        'personId': 4110,
        'rat': 'NR',
    },
    {
        'rowNumber': 1,
        'seatNumber': 7,
        'seatId': 'NR018',
        'd': 'M543.4,434.5c6.4,7.9,11.7,16.6,15.9,25.9l-23.4,9c-3-6.5-6.7-12.5-11.1-18.1L543.4,434.5z',
        'personId': 3901,
        'rat': 'NR',
    },
    {
        'rowNumber': 1,
        'seatNumber': 8,
        'seatId': 'NR020',
        'd': 'M563.5,471.3c3.2,9.7,5,19.7,5.5,29.9h-25c-0.5-7.1-1.8-14.1-3.9-20.9L563.5,471.3z',
        'personId': 4179,
        'rat': 'NR',
    },
    {
        'rowNumber': 2,
        'seatNumber': 1,
        'seatId': 'NR021',
        'd': 'M283.2,505.3c0.1-7.2,0.6-14.5,1.6-21.6l24.7,3.7c-0.8,6-1.3,12-1.3,18h-25V505.3z',
        'personId': 4197,
        'rat': 'NR',
    },
    {
        'rowNumber': 2,
        'seatNumber': 2,
        'seatId': 'NR023',
        'd': 'M285.2,480.3c1.1-7.1,2.7-14.2,4.7-21.2l23.9,7.2c-1.7,5.8-3,11.6-3.9,17.6L285.2,480.3z',
        'personId': 4201,
        'rat': 'NR',
    },
    {
        'rowNumber': 2,
        'seatNumber': 3,
        'seatId': 'NR025',
        'd': 'M290.9,456c2.2-6.9,4.8-13.7,7.8-20.2l22.6,10.6c-2.5,5.5-4.7,11.1-6.5,16.8L290.9,456z',
        'personId': 4186,
        'rat': 'NR',
    },
    {
        'rowNumber': 2,
        'seatNumber': 4,
        'seatId': 'NR027',
        'd': 'M300.1,432.7c3.1-6.5,6.7-12.8,10.6-18.9l20.8,13.8c-3.3,5-6.2,10.3-8.8,15.7L300.1,432.7z',
        'personId': 3907,
        'rat': 'NR',
    },
    {
        'rowNumber': 2,
        'seatNumber': 5,
        'seatId': 'NR029',
        'd': 'M312.7,411c4.1-6,8.5-11.7,13.3-17.1l18.6,16.7c-4,4.5-7.7,9.3-11,14.2L312.7,411z',
        'personId': 806,
        'rat': 'NR',
    },
    {
        'rowNumber': 2,
        'seatNumber': 6,
        'seatId': 'NR031',
        'd': 'M336.6,382.8c6.8-6.4,14.1-12.3,21.8-17.5l13.8,20.8c-6.5,4.4-12.5,9.3-18.2,14.6L336.6,382.8z',
        'personId': 4095,
        'rat': 'NR',
    },
    {
        'rowNumber': 2,
        'seatNumber': 7,
        'seatId': 'NR033',
        'd': 'M361.2,363.5c7.8-5.1,16.1-9.5,24.6-13.2l9.8,23c-7.1,3.1-14,6.8-20.6,11.1L361.2,363.5z',
        'personId': 4185,
        'rat': 'NR',
    },
    {
        'rowNumber': 2,
        'seatNumber': 8,
        'seatId': 'NR035',
        'd': 'M388.9,348.9c8.6-3.6,17.5-6.4,26.6-8.5l5.4,24.4c-7.6,1.8-15,4.2-22.2,7.1L388.9,348.9z',
        'personId': 4184,
        'rat': 'NR',
    },
    {
        'rowNumber': 2,
        'seatNumber': 9,
        'seatId': 'NR037',
        'd': 'M418.8,339.7c9.1-1.9,18.4-3.1,27.7-3.5l0.9,25c-7.8,0.4-15.5,1.3-23.2,2.9L418.8,339.7z',
        'personId': 3882,
        'rat': 'NR',
    },
    {
        'rowNumber': 2,
        'seatNumber': 10,
        'seatId': 'NR022',
        'd': 'M461.8,336.2c9.3,0.4,18.6,1.6,27.7,3.5l-5.4,24.4c-7.6-1.6-15.4-2.6-23.2-2.9L461.8,336.2z',
        'personId': 4046,
        'rat': 'NR',
    },
    {
        'rowNumber': 2,
        'seatNumber': 11,
        'seatId': 'NR024',
        'd': 'M492.8,340.4c9.1,2.1,18,5,26.6,8.5l-9.8,23c-7.2-3-14.7-5.3-22.2-7.1L492.8,340.4z',
        'personId': 4073,
        'rat': 'NR',
    },
    {
        'rowNumber': 2,
        'seatNumber': 12,
        'seatId': 'NR026',
        'd': 'M522.5,350.2c8.5,3.7,16.8,8.2,24.6,13.2l-13.8,20.8c-6.6-4.2-13.4-7.9-20.6-11.1L522.5,350.2z',
        'personId': 4176,
        'rat': 'NR',
    },
    {
        'rowNumber': 2,
        'seatNumber': 13,
        'seatId': 'NR028',
        'd': 'M549.9,365.3c7.7,5.2,15,11.1,21.8,17.5l-17.4,18c-5.7-5.4-11.8-10.2-18.2-14.6L549.9,365.3z',
        'personId': 4173,
        'rat': 'NR',
    },
    {
        'rowNumber': 2,
        'seatNumber': 14,
        'seatId': 'NR030',
        'd': 'M582.3,393.8c4.8,5.4,9.2,11.1,13.3,17.1l-20.8,13.8c-3.4-5-7.1-9.7-11-14.2L582.3,393.8z',
        'personId': 4175,
        'rat': 'NR',
    },
    {
        'rowNumber': 2,
        'seatNumber': 15,
        'seatId': 'NR032',
        'd': 'M597.5,413.8c3.9,6.1,7.5,12.4,10.6,18.9l-22.6,10.6c-2.6-5.4-5.6-10.7-8.8-15.7L597.5,413.8z',
        'personId': 4103,
        'rat': 'NR',
    },
    {
        'rowNumber': 2,
        'seatNumber': 16,
        'seatId': 'NR034',
        'd': 'M609.6,435.7c3,6.6,5.6,13.3,7.8,20.2l-23.9,7.2c-1.8-5.7-4-11.4-6.5-16.8L609.6,435.7z',
        'personId': 4161,
        'rat': 'NR',
    },
    {
        'rowNumber': 2,
        'seatNumber': 17,
        'seatId': 'NR036',
        'd': 'M618.3,459.2c2,6.9,3.6,14,4.7,21.2l-24.7,3.7c-0.9-5.9-2.3-11.8-3.9-17.6L618.3,459.2z',
        'personId': 4155,
        'rat': 'NR',
    },
    {
        'rowNumber': 2,
        'seatNumber': 18,
        'seatId': 'NR038',
        'd': 'M623.5,483.7c1,7.2,1.5,14.4,1.6,21.6h-25c-0.1-6-0.5-12-1.3-18L623.5,483.7z',
        'personId': 3867,
        'rat': 'NR',
    },
    {
        'rowNumber': 3,
        'seatNumber': 1,
        'seatId': 'NR039',
        'd': 'M227.2,504.7c0.1-7.7,0.5-15.4,1.4-23.1l24.8,3c-0.7,6.7-1.2,13.4-1.2,20.1H227.2z',
        'personId': 4018,
        'rat': 'NR',
    },
    {
        'rowNumber': 3,
        'seatNumber': 2,
        'seatId': 'NR041',
        'd': 'M229.1,477.1c1-7.7,2.4-15.3,4.2-22.8l24.3,6c-1.5,6.5-2.8,13.1-3.7,19.8L229.1,477.1z',
        'personId': 4113,
        'rat': 'NR',
    },
    {
        'rowNumber': 3,
        'seatNumber': 3,
        'seatId': 'NR043',
        'd': 'M234.4,449.9c1.9-7.5,4.3-14.9,7-22.1l23.3,9c-2.3,6.3-4.4,12.7-6,19.2L234.4,449.9z',
        'personId': 4091,
        'rat': 'NR',
    },
    {
        'rowNumber': 3,
        'seatNumber': 4,
        'seatId': 'NR045',
        'd': 'M243,423.5c2.8-7.2,6-14.2,9.6-21.1l22.1,11.7c-3.1,6-5.9,12.1-8.3,18.3L243,423.5z',
        'personId': 4198,
        'rat': 'NR',
    },
    {
        'rowNumber': 3,
        'seatNumber': 5,
        'seatId': 'NR047',
        'd': 'M254.8,398.4c3.7-6.8,7.7-13.4,12.1-19.8l20.5,14.3c-3.8,5.5-7.3,11.3-10.5,17.1L254.8,398.4z',
        'personId': 4199,
        'rat': 'NR',
    },
    {
        'rowNumber': 3,
        'seatNumber': 6,
        'seatId': 'NR049',
        'd': 'M269.5,374.9c4.5-6.3,9.3-12.3,14.4-18.1l18.6,16.7c-4.4,5-8.6,10.3-12.5,15.7L269.5,374.9z',
        'personId': 4045,
        'rat': 'NR',
    },
    {
        'rowNumber': 3,
        'seatNumber': 7,
        'seatId': 'NR051',
        'd': 'M298.1,342.1c7-6.6,14.3-12.7,22.1-18.4l14.6,20.3c-6.7,4.9-13.2,10.3-19.2,16L298.1,342.1z',
        'personId': 4102,
        'rat': 'NR',
    },
    {
        'rowNumber': 3,
        'seatNumber': 8,
        'seatId': 'NR053',
        'd': 'M323.9,321.1c7.8-5.5,16-10.5,24.5-15l11.4,22.2c-7.4,3.9-14.5,8.3-21.4,13L323.9,321.1z',
        'personId': 4108,
        'rat': 'NR',
    },
    {
        'rowNumber': 3,
        'seatNumber': 9,
        'seatId': 'NR055',
        'd': 'M352.4,304.1c8.6-4.3,17.4-8,26.4-11.2l8.1,23.7c-7.9,2.8-15.6,6-23.1,9.8L352.4,304.1z',
        'personId': '#WERT!',
        'rat': 'NR',
    },
    {
        'rowNumber': 3,
        'seatNumber': 10,
        'seatId': 'NR057',
        'd': 'M383.2,291.4c9.1-3,18.4-5.4,27.8-7.2l4.5,24.6c-8.2,1.6-16.3,3.7-24.2,6.3L383.2,291.4z',
        'personId': 4200,
        'rat': 'NR',
    },
    {
        'rowNumber': 3,
        'seatNumber': 11,
        'seatId': 'NR059',
        'd': 'M415.4,283.3c9.4-1.6,19-2.7,28.5-3.1l0.9,25c-8.3,0.4-16.7,1.3-24.9,2.7L415.4,283.3z',
        'personId': 4082,
        'rat': 'NR',
    },
    {
        'rowNumber': 3,
        'seatNumber': 12,
        'seatId': 'NR040',
        'd': 'M464.3,280.2c9.6,0.4,19.1,1.5,28.5,3.1l-4.5,24.6c-8.2-1.4-16.5-2.3-24.9-2.7L464.3,280.2z',
        'personId': 4042,
        'rat': 'NR',
    },
    {
        'rowNumber': 3,
        'seatNumber': 13,
        'seatId': 'NR042',
        'd': 'M497.4,284.1c9.4,1.8,18.7,4.2,27.8,7.2l-8.1,23.7c-7.9-2.6-16-4.7-24.2-6.3L497.4,284.1z',
        'personId': 4177,
        'rat': 'NR',
    },
    {
        'rowNumber': 3,
        'seatNumber': 14,
        'seatId': 'NR044',
        'd': 'M529.5,292.8c9,3.2,17.9,6.9,26.4,11.2l-11.4,22.2c-7.5-3.7-15.2-7-23.1-9.8L529.5,292.8z',
        'personId': 4129,
        'rat': 'NR',
    },
    {
        'rowNumber': 3,
        'seatNumber': 15,
        'seatId': 'NR046',
        'd': 'M559.9,306.1c8.5,4.5,16.7,9.5,24.5,15l-14.6,20.3c-6.8-4.8-14-9.1-21.4-13L559.9,306.1z',
        'personId': 4163,
        'rat': 'NR',
    },
    {
        'rowNumber': 3,
        'seatNumber': 16,
        'seatId': 'NR048',
        'd': 'M588.1,323.8c7.7,5.7,15.1,11.8,22.1,18.4l-17.4,18c-6.1-5.7-12.5-11.1-19.2-16L588.1,323.8z',
        'personId': 4174,
        'rat': 'NR',
    },
    {
        'rowNumber': 3,
        'seatNumber': 17,
        'seatId': 'NR050',
        'd': 'M624.4,356.8c5.1,5.8,9.9,11.8,14.4,18.1l-20.5,14.3c-3.9-5.5-8.1-10.7-12.5-15.7L624.4,356.8z',
        'personId': 4114,
        'rat': 'NR',
    },
    {
        'rowNumber': 3,
        'seatNumber': 18,
        'seatId': 'NR052',
        'd': 'M641.4,378.7c4.4,6.4,8.4,13,12.1,19.8l-22.1,11.7c-3.2-5.9-6.7-11.6-10.5-17.1L641.4,378.7z',
        'personId': 4170,
        'rat': 'NR',
    },
    {
        'rowNumber': 3,
        'seatNumber': 19,
        'seatId': 'NR054',
        'd': 'M655.6,402.4c3.6,6.9,6.8,13.9,9.6,21.1l-23.3,9c-2.5-6.2-5.3-12.3-8.3-18.3L655.6,402.4z',
        'personId': 4051,
        'rat': 'NR',
    },
    {
        'rowNumber': 3,
        'seatNumber': 20,
        'seatId': 'NR056',
        'd': 'M666.9,427.8c2.7,7.2,5,14.6,7,22.1l-24.3,6c-1.7-6.5-3.7-12.9-6-19.2L666.9,427.8z',
        'personId': 4178,
        'rat': 'NR',
    },
    {
        'rowNumber': 3,
        'seatNumber': 21,
        'seatId': 'NR058',
        'd': 'M674.9,454.3c1.8,7.5,3.2,15.1,4.2,22.8l-24.8,3c-0.9-6.6-2.1-13.2-3.7-19.8L674.9,454.3z',
        'personId': 4158,
        'rat': 'NR',
    },
    {
        'rowNumber': 3,
        'seatNumber': 22,
        'seatId': 'NR060',
        'd': 'M679.7,481.6c0.9,7.7,1.3,15.4,1.4,23.1h-25c-0.1-6.7-0.5-13.4-1.2-20.1L679.7,481.6z',
        'personId': 3878,
        'rat': 'NR',
    },
    {
        'rowNumber': 4,
        'seatNumber': 1,
        'seatId': 'NR061',
        'd': 'M171.2,505.1c0-7.4,0.4-14.7,1-22.1l24.9,2.3c-0.6,6.6-0.9,13.2-0.9,19.8L171.2,505.1L171.2,505.1z',
        'personId': 4058,
        'rat': 'NR',
    },
    {
        'rowNumber': 4,
        'seatNumber': 2,
        'seatId': 'NR063',
        'd': 'M172.5,479.2c0.7-7.3,1.7-14.6,3-21.9l24.6,4.6c-1.2,6.5-2.1,13-2.7,19.6L172.5,479.2z',
        'personId': 3899,
        'rat': 'NR',
    },
    {
        'rowNumber': 4,
        'seatNumber': 3,
        'seatId': 'NR065',
        'd': 'M176.2,453.5c1.4-7.2,3.1-14.4,5-21.5l24.1,6.8c-1.7,6.4-3.2,12.8-4.5,19.3L176.2,453.5z',
        'personId': 4195,
        'rat': 'NR',
    },
    {
        'rowNumber': 4,
        'seatNumber': 4,
        'seatId': 'NR067',
        'd': 'M182.3,428.3c2-7.1,4.4-14.1,7-21l23.3,9c-2.3,6.2-4.4,12.5-6.2,18.8L182.3,428.3z',
        'personId': 4143,
        'rat': 'NR',
    },
    {
        'rowNumber': 4,
        'seatNumber': 5,
        'seatId': 'NR069',
        'd': 'M190.6,403.8c2.7-6.9,5.6-13.6,8.9-20.2l22.4,11.1c-2.9,5.9-5.5,12-7.9,18.1L190.6,403.8z',
        'personId': 3923,
        'rat': 'NR',
    },
    {
        'rowNumber': 4,
        'seatNumber': 6,
        'seatId': 'NR071',
        'd': 'M201.2,380.1c3.3-6.6,6.9-13,10.7-19.3l21.3,13.1c-3.4,5.7-6.6,11.4-9.6,17.3L201.2,380.1z',
        'personId': 4130,
        'rat': 'NR',
    },
    {
        'rowNumber': 4,
        'seatNumber': 7,
        'seatId': 'NR073',
        'd': 'M213.9,357.5c3.9-6.3,8-12.4,12.4-18.3l20,15c-3.9,5.3-7.6,10.8-11.1,16.4L213.9,357.5z',
        'personId': 4049,
        'rat': 'NR',
    },
    {
        'rowNumber': 4,
        'seatNumber': 8,
        'seatId': 'NR075',
        'd': 'M228.5,336.1c4.4-5.9,9.1-11.6,14-17.1l18.6,16.7c-4.4,4.9-8.6,10-12.6,15.3L228.5,336.1z',
        'personId': 224,
        'rat': 'NR',
    },
    {
        'rowNumber': 4,
        'seatNumber': 9,
        'seatId': 'NR077',
        'd': 'M258.9,302.1c6.2-5.9,12.7-11.6,19.5-16.9l15.4,19.7c-6.1,4.8-11.9,9.9-17.5,15.2L258.9,302.1z',
        'personId': 1138,
        'rat': 'NR',
    },
    {
        'rowNumber': 4,
        'seatNumber': 10,
        'seatId': 'NR079',
        'd': 'M281.4,282.8c6.8-5.3,13.9-10.2,21.1-14.8l13.2,21.2c-6.5,4.1-12.9,8.6-19,13.3L281.4,282.8z',
        'personId': 4083,
        'rat': 'NR',
    },
    {
        'rowNumber': 4,
        'seatNumber': 11,
        'seatId': 'NR081',
        'd': 'M305.8,266c7.3-4.5,14.9-8.7,22.6-12.5l11,22.5c-6.9,3.4-13.7,7.2-20.3,11.2L305.8,266z',
        'personId': 3897,
        'rat': 'NR',
    },
    {
        'rowNumber': 4,
        'seatNumber': 12,
        'seatId': 'NR083',
        'd': 'M331.8,251.8c7.8-3.7,15.7-7.1,23.7-10.1l8.6,23.5c-7.2,2.7-14.4,5.7-21.3,9.1L331.8,251.8z',
        'personId': 3931,
        'rat': 'NR',
    },
    {
        'rowNumber': 4,
        'seatNumber': 13,
        'seatId': 'NR085',
        'd': 'M359.2,240.4c8.1-2.9,16.3-5.4,24.7-7.5l6,24.3c-7.5,1.9-14.9,4.2-22.2,6.8L359.2,240.4z',
        'personId': 4059,
        'rat': 'NR',
    },
    {
        'rowNumber': 4,
        'seatNumber': 14,
        'seatId': 'NR087',
        'd': 'M387.5,231.9c8.4-2,16.8-3.7,25.3-4.9l3.5,24.8c-7.6,1.1-15.2,2.6-22.8,4.4L387.5,231.9z',
        'personId': 4066,
        'rat': 'NR',
    },
    {
        'rowNumber': 4,
        'seatNumber': 15,
        'seatId': 'NR089',
        'd': 'M416.7,226.5c8.5-1.1,17.1-1.9,25.7-2.2l0.9,25c-7.7,0.3-15.4,1-23.1,2L416.7,226.5z',
        'personId': 4008,
        'rat': 'NR',
    },
    {
        'rowNumber': 4,
        'seatNumber': 16,
        'seatId': 'NR062',
        'd': 'M465.9,224.2c8.6,0.4,17.2,1.1,25.7,2.2l-3.5,24.8c-7.7-1-15.4-1.7-23.1-2L465.9,224.2z',
        'personId': 3886,
        'rat': 'NR',
    },
    {
        'rowNumber': 4,
        'seatNumber': 17,
        'seatId': 'NR064',
        'd': 'M495.4,227c8.5,1.3,17,2.9,25.3,4.9l-6,24.3c-7.5-1.8-15.1-3.3-22.8-4.4L495.4,227z',
        'personId': 4094,
        'rat': 'NR',
    },
    {
        'rowNumber': 4,
        'seatNumber': 18,
        'seatId': 'NR066',
        'd': 'M524.5,232.9c8.3,2.1,16.6,4.7,24.7,7.5l-8.6,23.5c-7.3-2.6-14.7-4.9-22.2-6.8L524.5,232.9z',
        'personId': 4125,
        'rat': 'NR',
    },
    {
        'rowNumber': 4,
        'seatNumber': 19,
        'seatId': 'NR068',
        'd': 'M552.7,241.7c8.1,3,16,6.4,23.7,10.1l-11,22.5c-7-3.3-14.1-6.4-21.3-9.1L552.7,241.7z',
        'personId': 4162,
        'rat': 'NR',
    },
    {
        'rowNumber': 4,
        'seatNumber': 20,
        'seatId': 'NR070',
        'd': 'M579.9,253.5c7.7,3.8,15.2,8,22.6,12.5l-13.2,21.2c-6.6-4-13.4-7.8-20.3-11.2L579.9,253.5z',
        'personId': 1159,
        'rat': 'NR',
    },
    {
        'rowNumber': 4,
        'seatNumber': 21,
        'seatId': 'NR072',
        'd': 'M605.7,268c7.3,4.6,14.3,9.5,21.1,14.8l-15.4,19.7c-6.1-4.7-12.5-9.2-19-13.3L605.7,268z',
        'personId': 4160,
        'rat': 'NR',
    },
    {
        'rowNumber': 4,
        'seatNumber': 22,
        'seatId': 'NR074',
        'd': 'M629.9,285.2c6.7,5.3,13.2,11,19.5,16.9l-17.4,18c-5.6-5.3-11.4-10.4-17.5-15.2L629.9,285.2z',
        'personId': 1345,
        'rat': 'NR',
    },
    {
        'rowNumber': 4,
        'seatNumber': 23,
        'seatId': 'NR076',
        'd': 'M665.7,319.1c4.9,5.5,9.6,11.2,14,17.1l-20,15c-4-5.3-8.2-10.4-12.6-15.3L665.7,319.1z',
        'personId': 3887,
        'rat': 'NR',
    },
    {
        'rowNumber': 4,
        'seatNumber': 24,
        'seatId': 'NR078',
        'd': 'M682,339.2c4.4,5.9,8.5,12,12.4,18.3l-21.3,13.1c-3.5-5.6-7.2-11.1-11.1-16.4L682,339.2z',
        'personId': 4166,
        'rat': 'NR',
    },
    {
        'rowNumber': 4,
        'seatNumber': 25,
        'seatId': 'NR080',
        'd': 'M696.4,360.8c3.8,6.3,7.4,12.8,10.7,19.3l-22.4,11.1c-3-5.9-6.2-11.7-9.6-17.3L696.4,360.8z',
        'personId': 3885,
        'rat': 'NR',
    },
    {
        'rowNumber': 4,
        'seatNumber': 26,
        'seatId': 'NR082',
        'd': 'M708.8,383.5c3.2,6.6,6.2,13.4,8.9,20.2l-23.3,9c-2.4-6.1-5.1-12.2-7.9-18.1L708.8,383.5z',
        'personId': 4169,
        'rat': 'NR',
    },
    {
        'rowNumber': 4,
        'seatNumber': 27,
        'seatId': 'NR084',
        'd': 'M719,407.4c2.6,6.9,4.9,13.9,7,21l-24.1,6.8c-1.8-6.3-3.9-12.6-6.2-18.8L719,407.4z',
        'personId': 4156,
        'rat': 'NR',
    },
    {
        'rowNumber': 4,
        'seatNumber': 28,
        'seatId': 'NR086',
        'd': 'M727,432c2,7.1,3.6,14.3,5,21.5l-24.6,4.6c-1.3-6.5-2.8-12.9-4.5-19.3L727,432z',
        'personId': 3910,
        'rat': 'NR',
    },
    {
        'rowNumber': 4,
        'seatNumber': 29,
        'seatId': 'NR088',
        'd': 'M732.7,457.3c1.3,7.3,2.3,14.6,3,21.9l-24.9,2.3c-0.7-6.6-1.6-13.1-2.7-19.6L732.7,457.3z',
        'personId': 4164,
        'rat': 'NR',
    },
    {
        'rowNumber': 4,
        'seatNumber': 30,
        'seatId': 'NR090',
        'd': 'M736.1,483c0.6,7.3,1,14.7,1,22.1h-25c0-6.6-0.4-13.2-0.9-19.8L736.1,483z',
        'personId': 1142,
        'rat': 'NR',
    },
    {
        'rowNumber': 5,
        'seatNumber': 1,
        'seatId': 'NR091',
        'd': 'M115.2,504.7c0.1-7.7,0.4-15.3,0.9-23l24.9,2c-0.5,7-0.8,13.9-0.9,20.9h-24.9V504.7z',
        'personId': 4203,
        'rat': 'NR',
    },
    {
        'rowNumber': 5,
        'seatNumber': 2,
        'seatId': 'NR093',
        'd': 'M116.5,477.1c0.7-7.6,1.6-15.2,2.8-22.8l24.7,4.1c-1.1,6.9-1.9,13.8-2.6,20.8L116.5,477.1z',
        'personId': 4106,
        'rat': 'NR',
    },
    {
        'rowNumber': 5,
        'seatNumber': 3,
        'seatId': 'NR095',
        'd': 'M120,449.7c1.3-7.6,2.8-15.1,4.6-22.5l24.3,6c-1.6,6.8-3.1,13.6-4.2,20.5L120,449.7z',
        'personId': 4131,
        'rat': 'NR',
    },
    {
        'rowNumber': 5,
        'seatNumber': 4,
        'seatId': 'NR097',
        'd': 'M125.8,422.7c1.9-7.4,4.1-14.8,6.5-22.1l23.7,8c-2.2,6.6-4.2,13.3-5.9,20.1L125.8,422.7z',
        'personId': 4123,
        'rat': 'NR',
    },
    {
        'rowNumber': 5,
        'seatNumber': 5,
        'seatId': 'NR099',
        'd': 'M133.7,396.3c2.5-7.2,5.2-14.4,8.2-21.5l23,9.9c-2.7,6.4-5.2,13-7.5,19.6L133.7,396.3z',
        'personId': 4109,
        'rat': 'NR',
    },
    {
        'rowNumber': 5,
        'seatNumber': 6,
        'seatId': 'NR101',
        'd': 'M143.8,370.6c3.1-7,6.4-13.9,10-20.7l22.1,11.7c-3.2,6.2-6.3,12.5-9.1,18.9L143.8,370.6z',
        'personId': 4076,
        'rat': 'NR',
    },
    {
        'rowNumber': 5,
        'seatNumber': 7,
        'seatId': 'NR103',
        'd': 'M155.9,345.8c3.6-6.7,7.5-13.4,11.6-19.8l21,13.5c-3.7,5.9-7.3,11.9-10.6,18.1L155.9,345.8z',
        'personId': 354,
        'rat': 'NR',
    },
    {
        'rowNumber': 5,
        'seatNumber': 8,
        'seatId': 'NR105',
        'd': 'M170,322.1c4.2-6.4,8.6-12.7,13.2-18.8l19.9,15.2c-4.2,5.6-8.2,11.3-12,17.2L170,322.1z',
        'personId': 4061,
        'rat': 'NR',
    },
    {
        'rowNumber': 5,
        'seatNumber': 9,
        'seatId': 'NR107',
        'd': 'M186,299.6c4.7-6.1,9.6-12,14.7-17.7l18.6,16.7c-4.6,5.2-9.1,10.6-13.4,16.1L186,299.6z',
        'personId': 4030,
        'rat': 'NR',
    },
    {
        'rowNumber': 5,
        'seatNumber': 10,
        'seatId': 'NR109',
        'd': 'M220.3,261.5c5.5-5.3,11.3-10.4,17.2-15.3l15.8,19.3c-5.4,4.5-10.6,9.1-15.7,13.9L220.3,261.5z',
        'personId': 4182,
        'rat': 'NR',
    },
    {
        'rowNumber': 5,
        'seatNumber': 11,
        'seatId': 'NR111',
        'd': 'M241.1,243.3c6-4.8,12.1-9.4,18.4-13.8l14.2,20.6c-5.7,4-11.3,8.2-16.7,12.6L241.1,243.3z',
        'personId': 4183,
        'rat': 'NR',
    },
    {
        'rowNumber': 5,
        'seatNumber': 12,
        'seatId': 'NR113',
        'd': 'M263.2,226.9c6.3-4.3,12.8-8.4,19.4-12.3l12.5,21.7c-6,3.5-11.9,7.3-17.7,11.2L263.2,226.9z',
        'personId': 4212,
        'rat': 'NR',
    },
    {
        'rowNumber': 5,
        'seatNumber': 13,
        'seatId': 'NR115',
        'd': 'M286.6,212.3c6.7-3.8,13.5-7.3,20.4-10.7l10.7,22.6c-6.3,3-12.5,6.3-18.6,9.7L286.6,212.3z',
        'personId': 4180,
        'rat': 'NR',
    },
    {
        'rowNumber': 5,
        'seatNumber': 14,
        'seatId': 'NR117',
        'd': 'M311.2,199.6c6.9-3.2,14-6.2,21.2-9l8.8,23.4c-6.5,2.5-12.9,5.2-19.3,8.2L311.2,199.6z',
        'personId': 4181,
        'rat': 'NR',
    },
    {
        'rowNumber': 5,
        'seatNumber': 15,
        'seatId': 'NR119',
        'd': 'M336.7,189c7.2-2.7,14.5-5.1,21.8-7.2l6.9,24c-6.7,2-13.3,4.2-19.9,6.6L336.7,189z',
        'personId': 4085,
        'rat': 'NR',
    },
    {
        'rowNumber': 5,
        'seatNumber': 16,
        'seatId': 'NR121',
        'd': 'M362.9,180.5c7.4-2.1,14.8-3.9,22.3-5.4l4.9,24.5c-6.8,1.4-13.6,3.1-20.4,4.9L362.9,180.5z',
        'personId': 4031,
        'rat': 'NR',
    },
    {
        'rowNumber': 5,
        'seatNumber': 17,
        'seatId': 'NR123',
        'd': 'M389.8,174.2c7.5-1.5,15.1-2.7,22.7-3.6l2.9,24.8c-6.9,0.9-13.8,2-20.7,3.3L389.8,174.2z',
        'personId': 4036,
        'rat': 'NR',
    },
    {
        'rowNumber': 5,
        'seatNumber': 18,
        'seatId': 'NR125',
        'd': 'M417.1,170c7.6-0.8,15.3-1.4,22.9-1.7l0.9,25c-7,0.3-13.9,0.8-20.9,1.6L417.1,170z',
        'personId': 74,
        'rat': 'NR',
    },
    {
        'rowNumber': 5,
        'seatNumber': 19,
        'seatId': 'NR092',
        'd': 'M468.3,168.3c7.7,0.3,15.3,0.9,22.9,1.7l-2.9,24.8c-6.9-0.8-13.9-1.3-20.9-1.6L468.3,168.3z',
        'personId': 4209,
        'rat': 'NR',
    },
    {
        'rowNumber': 5,
        'seatNumber': 20,
        'seatId': 'NR094',
        'd': 'M495.8,170.6c7.6,0.9,15.2,2.1,22.7,3.6l-4.9,24.5c-6.9-1.3-13.8-2.4-20.7-3.3L495.8,170.6z',
        'personId': 4194,
        'rat': 'NR',
    },
    {
        'rowNumber': 5,
        'seatNumber': 21,
        'seatId': 'NR096',
        'd': 'M523,175.1c7.5,1.6,15,3.4,22.3,5.4l-6.9,24c-6.7-1.9-13.5-3.5-20.4-4.9L523,175.1z',
        'personId': 4202,
        'rat': 'NR',
    },
    {
        'rowNumber': 5,
        'seatNumber': 22,
        'seatId': 'NR098',
        'd': 'M549.8,181.8c7.4,2.2,14.6,4.6,21.8,7.2l-8.8,23.4c-6.6-2.4-13.2-4.6-19.9-6.6L549.8,181.8z',
        'personId': 4192,
        'rat': 'NR',
    },
    {
        'rowNumber': 5,
        'seatNumber': 23,
        'seatId': 'NR100',
        'd': 'M575.9,190.6c7.2,2.8,14.2,5.7,21.2,9l-10.7,22.6c-6.3-2.9-12.8-5.7-19.3-8.2L575.9,190.6z',
        'personId': 4193,
        'rat': 'NR',
    },
    {
        'rowNumber': 5,
        'seatNumber': 24,
        'seatId': 'NR102',
        'd': 'M601.3,201.6c6.9,3.3,13.7,6.9,20.4,10.7L609.2,234c-6.1-3.4-12.3-6.7-18.6-9.7L601.3,201.6z',
        'personId': 4190,
        'rat': 'NR',
    },
    {
        'rowNumber': 5,
        'seatNumber': 25,
        'seatId': 'NR104',
        'd': 'M625.6,214.6c6.6,3.9,13.1,8,19.4,12.3l-14.2,20.6c-5.8-3.9-11.7-7.7-17.7-11.2L625.6,214.6z',
        'personId': 4188,
        'rat': 'NR',
    },
    {
        'rowNumber': 5,
        'seatNumber': 26,
        'seatId': 'NR106',
        'd': 'M648.9,229.5c6.3,4.4,12.4,9,18.4,13.8l-15.8,19.3c-5.4-4.4-11-8.6-16.7-12.6L648.9,229.5z',
        'personId': 4208,
        'rat': 'NR',
    },
    {
        'rowNumber': 5,
        'seatNumber': 27,
        'seatId': 'NR108',
        'd': 'M670.8,246.3c5.9,4.9,11.6,10,17.2,15.3l-17.4,18c-5.1-4.8-10.3-9.5-15.7-13.9L670.8,246.3z',
        'personId': 4187,
        'rat': 'NR',
    },
    {
        'rowNumber': 5,
        'seatNumber': 28,
        'seatId': 'NR110',
        'd': 'M707.6,281.9c5.1,5.7,10,11.6,14.7,17.7l-19.9,15.2c-4.3-5.5-8.7-10.9-13.4-16.1L707.6,281.9z',
        'personId': 3883,
        'rat': 'NR',
    },
    {
        'rowNumber': 5,
        'seatNumber': 29,
        'seatId': 'NR112',
        'd': 'M725.1,303.2c4.6,6.1,9,12.4,13.2,18.8l-21,13.5c-3.8-5.9-7.8-11.6-12-17.2L725.1,303.2z',
        'personId': 4168,
        'rat': 'NR',
    },
    {
        'rowNumber': 5,
        'seatNumber': 30,
        'seatId': 'NR114',
        'd': 'M740.8,326c4.1,6.5,8,13.1,11.6,19.8l-22.1,11.7c-3.3-6.1-6.9-12.2-10.6-18.1L740.8,326z',
        'personId': 4159,
        'rat': 'NR',
    },
    {
        'rowNumber': 5,
        'seatNumber': 31,
        'seatId': 'NR116',
        'd': 'M754.5,349.9c3.6,6.8,6.9,13.7,10,20.7l-23,9.9c-2.8-6.4-5.8-12.7-9.1-18.9L754.5,349.9z',
        'personId': 4067,
        'rat': 'NR',
    },
    {
        'rowNumber': 5,
        'seatNumber': 32,
        'seatId': 'NR118',
        'd': 'M766.3,374.8c3,7.1,5.7,14.2,8.2,21.5l-23.7,8c-2.3-6.6-4.8-13.1-7.5-19.6L766.3,374.8z',
        'personId': 4098,
        'rat': 'NR',
    },
    {
        'rowNumber': 5,
        'seatNumber': 33,
        'seatId': 'NR120',
        'd': 'M776,400.7c2.4,7.3,4.6,14.6,6.5,22.1l-24.3,6c-1.7-6.8-3.7-13.5-5.9-20.1L776,400.7z',
        'personId': 3898,
        'rat': 'NR',
    },
    {
        'rowNumber': 5,
        'seatNumber': 34,
        'seatId': 'NR122',
        'd': 'M783.6,427.2c1.8,7.4,3.4,15,4.6,22.5l-24.7,4.1c-1.2-6.9-2.6-13.7-4.2-20.5L783.6,427.2z',
        'personId': 4154,
        'rat': 'NR',
    },
    {
        'rowNumber': 5,
        'seatNumber': 35,
        'seatId': 'NR124',
        'd': 'M789,454.3c1.2,7.6,2.1,15.2,2.8,22.8l-24.9,2c-0.6-7-1.5-13.9-2.6-20.8L789,454.3z',
        'personId': 4157,
        'rat': 'NR',
    },
    {
        'rowNumber': 5,
        'seatNumber': 36,
        'seatId': 'NR126',
        'd': 'M792.2,481.7c0.6,7.6,0.9,15.3,0.9,23h-25c-0.1-7-0.3-14-0.9-20.9L792.2,481.7z',
        'personId': 1111,
        'rat': 'NR',
    },
    {
        'rowNumber': 6,
        'seatNumber': 1,
        'seatId': 'NR127',
        'd': 'M59.2,504.3c0.1-7.8,0.3-15.7,0.9-23.5l24.9,1.8c-0.5,7.2-0.7,14.5-0.8,21.7H59.2z',
        'personId': 1125,
        'rat': 'NR',
    },
    {
        'rowNumber': 6,
        'seatNumber': 2,
        'seatId': 'NR129',
        'd': 'M60.4,475.4c0.6-7.8,1.5-15.6,2.6-23.4l24.7,3.7c-1,7.2-1.8,14.4-2.4,21.6L60.4,475.4z',
        'personId': 1131,
        'rat': 'NR',
    },
    {
        'rowNumber': 6,
        'seatNumber': 3,
        'seatId': 'NR131',
        'd': 'M63.8,446.6c1.2-7.8,2.6-15.5,4.3-23.1l24.4,5.5c-1.5,7.1-2.8,14.2-4,21.3L63.8,446.6z',
        'personId': 4069,
        'rat': 'NR',
    },
    {
        'rowNumber': 6,
        'seatNumber': 4,
        'seatId': 'NR133',
        'd': 'M69.3,418.2c1.8-7.6,3.8-15.2,6-22.8l23.9,7.2c-2,6.9-3.9,13.9-5.5,21L69.3,418.2z',
        'personId': 1120,
        'rat': 'NR',
    },
    {
        'rowNumber': 6,
        'seatNumber': 5,
        'seatId': 'NR135',
        'd': 'M76.8,390.2c2.3-7.5,4.9-14.9,7.6-22.3l23.3,9c-2.5,6.8-4.9,13.6-7,20.5L76.8,390.2z',
        'personId': 4213,
        'rat': 'NR',
    },
    {
        'rowNumber': 6,
        'seatNumber': 6,
        'seatId': 'NR137',
        'd': 'M86.4,362.9c2.9-7.3,5.9-14.5,9.2-21.7l22.6,10.6c-3,6.6-5.9,13.2-8.5,20L86.4,362.9z',
        'personId': 4115,
        'rat': 'NR',
    },
    {
        'rowNumber': 6,
        'seatNumber': 7,
        'seatId': 'NR139',
        'd': 'M97.9,336.4c3.4-7.1,7-14.1,10.8-20.9l21.8,12.3c-3.5,6.3-6.8,12.8-10,19.3L97.9,336.4z',
        'personId': 4134,
        'rat': 'NR',
    },
    {
        'rowNumber': 6,
        'seatNumber': 8,
        'seatId': 'NR141',
        'd': 'M111.4,310.7c3.9-6.8,8-13.5,12.3-20.1l20.8,13.8c-4,6.1-7.7,12.2-11.3,18.5L111.4,310.7z',
        'personId': 4196,
        'rat': 'NR',
    },
    {
        'rowNumber': 6,
        'seatNumber': 9,
        'seatId': 'NR143',
        'd': 'M126.6,286.1c4.4-6.5,9-12.9,13.7-19.1l19.8,15.3c-4.4,5.8-8.6,11.6-12.7,17.6L126.6,286.1z',
        'personId': 1156,
        'rat': 'NR',
    },
    {
        'rowNumber': 6,
        'seatNumber': 10,
        'seatId': 'NR145',
        'd': 'M143.7,262.8c4.9-6.2,9.9-12.2,15.1-18.1l18.6,16.7c-4.8,5.4-9.4,11-13.9,16.7L143.7,262.8z',
        'personId': 1147,
        'rat': 'NR',
    },
    {
        'rowNumber': 6,
        'seatNumber': 11,
        'seatId': 'NR147',
        'd': 'M181.7,221c5.7-5.4,11.5-10.7,17.5-15.7l16,19.2c-5.5,4.7-10.9,9.5-16.2,14.5L181.7,221z',
        'personId': 4101,
        'rat': 'NR',
    },
    {
        'rowNumber': 6,
        'seatNumber': 12,
        'seatId': 'NR149',
        'd': 'M203.4,201.8c6.1-5,12.3-9.8,18.6-14.4l14.6,20.3c-5.9,4.3-11.6,8.7-17.2,13.3L203.4,201.8z',
        'personId': 4087,
        'rat': 'NR',
    },
    {
        'rowNumber': 6,
        'seatNumber': 13,
        'seatId': 'NR151',
        'd': 'M226.4,184.2c6.4-4.5,13-8.9,19.6-13l13,21.3c-6.1,3.8-12.2,7.8-18.1,12L226.4,184.2z',
        'personId': 4072,
        'rat': 'NR',
    },
    {
        'rowNumber': 6,
        'seatNumber': 14,
        'seatId': 'NR153',
        'd': 'M250.7,168.4c6.7-4,13.6-7.9,20.5-11.5l11.4,22.2c-6.4,3.4-12.7,6.9-18.9,10.6L250.7,168.4z',
        'personId': 4086,
        'rat': 'NR',
    },
    {
        'rowNumber': 6,
        'seatNumber': 15,
        'seatId': 'NR155',
        'd': 'M276,154.4c7-3.5,14.1-6.9,21.3-10l9.8,23c-6.6,2.9-13.2,5.9-19.7,9.2L276,154.4z',
        'personId': 4138,
        'rat': 'NR',
    },
    {
        'rowNumber': 6,
        'seatNumber': 16,
        'seatId': 'NR157',
        'd': 'M302.3,142.3c7.2-3,14.6-5.8,22-8.4l8.1,23.7c-6.8,2.4-13.6,5-20.3,7.7L302.3,142.3z',
        'personId': 4040,
        'rat': 'NR',
    },
    {
        'rowNumber': 6,
        'seatNumber': 17,
        'seatId': 'NR159',
        'd': 'M329.4,132.2c7.4-2.5,15-4.7,22.5-6.8l6.3,24.2c-7,1.9-13.9,4-20.8,6.2L329.4,132.2z',
        'personId': 4052,
        'rat': 'NR',
    },
    {
        'rowNumber': 6,
        'seatNumber': 18,
        'seatId': 'NR161',
        'd': 'M357.2,124.1c7.6-1.9,15.3-3.6,23-5.1l4.5,24.6c-7.1,1.4-14.2,2.9-21.2,4.7L357.2,124.1z',
        'personId': 4063,
        'rat': 'NR',
    },
    {
        'rowNumber': 6,
        'seatNumber': 19,
        'seatId': 'NR163',
        'd': 'M385.5,118c7.7-1.4,15.5-2.5,23.3-3.4l2.7,24.9c-7.2,0.8-14.4,1.9-21.5,3.1L385.5,118z',
        'personId': 4096,
        'rat': 'NR',
    },
    {
        'rowNumber': 6,
        'seatNumber': 20,
        'seatId': 'NR165',
        'd': 'M414.2,114c7.8-0.8,15.6-1.4,23.5-1.7l0.9,25c-7.2,0.3-14.5,0.8-21.7,1.6L414.2,114z',
        'personId': 1104,
        'rat': 'NR',
    },
    {
        'rowNumber': 6,
        'seatNumber': 21,
        'seatId': 'NR128',
        'd': 'M470.6,112.3c7.8,0.3,15.7,0.9,23.5,1.7l-2.7,24.9c-7.2-0.7-14.4-1.2-21.7-1.6L470.6,112.3z',
        'personId': 3877,
        'rat': 'NR',
    },
    {
        'rowNumber': 6,
        'seatNumber': 22,
        'seatId': 'NR130',
        'd': 'M499.5,114.6c7.8,0.9,15.6,2,23.3,3.4l-4.5,24.6c-7.1-1.3-14.3-2.3-21.5-3.1L499.5,114.6z',
        'personId': 4054,
        'rat': 'NR',
    },
    {
        'rowNumber': 6,
        'seatNumber': 23,
        'seatId': 'NR132',
        'd': 'M528.1,119c7.7,1.5,15.4,3.2,23,5.1l-6.3,24.2c-7-1.8-14.1-3.3-21.2-4.7L528.1,119z',
        'personId': 4140,
        'rat': 'NR',
    },
    {
        'rowNumber': 6,
        'seatNumber': 24,
        'seatId': 'NR134',
        'd': 'M556.3,125.4c7.6,2,15.1,4.3,22.5,6.8l-8.1,23.7c-6.9-2.3-13.8-4.4-20.8-6.2L556.3,125.4z',
        'personId': 4124,
        'rat': 'NR',
    },
    {
        'rowNumber': 6,
        'seatNumber': 25,
        'seatId': 'NR136',
        'd': 'M584,133.9c7.4,2.6,14.7,5.4,22,8.4l-9.8,23c-6.7-2.8-13.4-5.4-20.3-7.7L584,133.9z',
        'personId': 4079,
        'rat': 'NR',
    },
    {
        'rowNumber': 6,
        'seatNumber': 26,
        'seatId': 'NR138',
        'd': 'M611,144.5c7.2,3.1,14.3,6.4,21.3,10l-11.4,22.2c-6.5-3.3-13-6.3-19.7-9.2L611,144.5z',
        'personId': 4141,
        'rat': 'NR',
    },
    {
        'rowNumber': 6,
        'seatNumber': 27,
        'seatId': 'NR140',
        'd': 'M637.1,156.9c7,3.6,13.8,7.5,20.5,11.5l-13,21.3c-6.2-3.7-12.5-7.3-18.9-10.6L637.1,156.9z',
        'personId': 4077,
        'rat': 'NR',
    },
    {
        'rowNumber': 6,
        'seatNumber': 28,
        'seatId': 'NR142',
        'd': 'M662.2,171.3c6.7,4.1,13.2,8.5,19.6,13l-14.6,20.3c-5.9-4.2-12-8.2-18.1-12L662.2,171.3z',
        'personId': 4060,
        'rat': 'NR',
    },
    {
        'rowNumber': 6,
        'seatNumber': 29,
        'seatId': 'NR146',
        'd': 'M686.3,187.4c6.3,4.6,12.6,9.4,18.6,14.4l-16,19.2c-5.6-4.6-11.3-9-17.2-13.3L686.3,187.4z',
        'personId': 1139,
        'rat': 'NR',
    },
    {
        'rowNumber': 6,
        'seatNumber': 30,
        'seatId': 'NR148',
        'd': 'M709.1,205.3c6,5.1,11.8,10.3,17.5,15.7l-17.4,18c-5.2-5-10.6-9.8-16.2-14.5L709.1,205.3z',
        'personId': 4144,
        'rat': 'NR',
    },
    {
        'rowNumber': 6,
        'seatNumber': 31,
        'seatId': 'NR150',
        'd': 'M749.5,244.7c5.2,5.9,10.2,11.9,15.1,18.1l-19.8,15.3c-4.5-5.7-9.1-11.2-13.9-16.7L749.5,244.7z',
        'personId': 4172,
        'rat': 'NR',
    },
    {
        'rowNumber': 6,
        'seatNumber': 32,
        'seatId': 'NR152',
        'd': 'M767.9,267c4.8,6.2,9.3,12.6,13.7,19.1L760.8,300c-4-6-8.3-11.9-12.7-17.6L767.9,267z',
        'personId': 4065,
        'rat': 'NR',
    },
    {
        'rowNumber': 6,
        'seatNumber': 33,
        'seatId': 'NR154',
        'd': 'M784.6,290.7c4.3,6.6,8.4,13.3,12.3,20.1L775.2,323c-3.6-6.3-7.4-12.5-11.3-18.5L784.6,290.7z',
        'personId': 3890,
        'rat': 'NR',
    },
    {
        'rowNumber': 6,
        'seatNumber': 34,
        'seatId': 'NR156',
        'd': 'M799.6,315.4c3.8,6.9,7.4,13.8,10.8,20.9L787.8,347c-3.1-6.5-6.4-13-10-19.3L799.6,315.4z',
        'personId': 4167,
        'rat': 'NR',
    },
    {
        'rowNumber': 6,
        'seatNumber': 35,
        'seatId': 'NR158',
        'd': 'M812.7,341.3c3.3,7.1,6.4,14.3,9.2,21.7l-23.3,9c-2.6-6.7-5.5-13.4-8.5-20L812.7,341.3z',
        'personId': 4053,
        'rat': 'NR',
    },
    {
        'rowNumber': 6,
        'seatNumber': 36,
        'seatId': 'NR160',
        'd': 'M823.9,368c2.8,7.3,5.3,14.8,7.6,22.3l-23.9,7.2c-2.1-6.9-4.5-13.8-7-20.5L823.9,368z',
        'personId': '#NV',
        'rat': 'NR',
    },
    {
        'rowNumber': 6,
        'seatNumber': 37,
        'seatId': 'NR162',
        'd': 'M833.1,395.4c2.2,7.5,4.2,15.1,6,22.8l-24.4,5.5c-1.6-7.1-3.5-14.1-5.5-21L833.1,395.4z',
        'personId': 519,
        'rat': 'NR',
    },
    {
        'rowNumber': 6,
        'seatNumber': 38,
        'seatId': 'NR164',
        'd': 'M840.2,423.5c1.7,7.7,3.1,15.4,4.3,23.1l-24.7,3.7c-1.1-7.2-2.4-14.3-4-21.3L840.2,423.5z',
        'personId': 3902,
        'rat': 'NR',
    },
    {
        'rowNumber': 6,
        'seatNumber': 39,
        'seatId': 'NR166',
        'd': 'M845.3,452c1.1,7.8,2,15.6,2.6,23.4l-24.9,1.8c-0.6-7.2-1.4-14.4-2.4-21.6L845.3,452z',
        'personId': 91,
        'rat': 'NR',
    },
    {
        'rowNumber': 6,
        'seatNumber': 40,
        'seatId': 'NR168',
        'd': 'M848.3,480.8c0.5,7.8,0.8,15.7,0.9,23.5h-25c-0.1-7.2-0.3-14.5-0.8-21.7L848.3,480.8z',
        'personId': 3872,
        'rat': 'NR',
    },
    {
        'rowNumber': 7,
        'seatNumber': 1,
        'seatId': 'NR167',
        'd': 'M34.2,342.5c2.6-6.6,5.3-13.2,8.3-19.7l22.7,10.4c-2.7,6-5.3,12.1-7.7,18.3L34.2,342.5z',
        'personId': 1129,
        'rat': 'NR',
    },
    {
        'rowNumber': 7,
        'seatNumber': 2,
        'seatId': 'NR169',
        'd': 'M45,317.1c3-6.5,6.1-12.8,9.4-19.1l22.1,11.7c-3.1,5.9-6,11.8-8.8,17.8L45,317.1z',
        'personId': 4057,
        'rat': 'NR',
    },
    {
        'rowNumber': 7,
        'seatNumber': 3,
        'seatId': 'NR171',
        'd': 'M57.4,292.5c3.4-6.3,6.9-12.4,10.6-18.5l21.3,13.1c-3.4,5.7-6.7,11.4-9.8,17.2L57.4,292.5z',
        'personId': 4121,
        'rat': 'NR',
    },
    {
        'rowNumber': 7,
        'seatNumber': 4,
        'seatId': 'NR173',
        'd': 'M71.2,268.7c3.8-6,7.7-12,11.7-17.8l20.5,14.3c-3.7,5.4-7.4,11-10.9,16.6L71.2,268.7z',
        'personId': 4032,
        'rat': 'NR',
    },
    {
        'rowNumber': 7,
        'seatNumber': 5,
        'seatId': 'NR175',
        'd': 'M86.5,245.8c4.1-5.8,8.4-11.5,12.8-17.1l19.6,15.6c-4.1,5.2-8,10.5-11.9,15.9L86.5,245.8z',
        'personId': 1279,
        'rat': 'NR',
    },
    {
        'rowNumber': 7,
        'seatNumber': 6,
        'seatId': 'NR177',
        'd': 'M103.1,223.8c4.5-5.5,9.1-11,13.8-16.3l18.6,16.7c-4.4,4.9-8.7,10-12.8,15.1L103.1,223.8z',
        'personId': 487,
        'rat': 'NR',
    },
    {
        'rowNumber': 7,
        'seatNumber': 7,
        'seatId': 'NR179',
        'd': 'M143.1,180.4c5.8-5.5,11.7-10.8,17.7-16l16.1,19.1c-5.6,4.8-11.1,9.8-16.5,14.9L143.1,180.4z',
        'personId': 4118,
        'rat': 'NR',
    },
    {
        'rowNumber': 7,
        'seatNumber': 8,
        'seatId': 'NR181',
        'd': 'M165.5,160.4c6.1-5.1,12.4-10,18.7-14.8l14.8,20.1c-5.9,4.4-11.7,9-17.4,13.7L165.5,160.4z',
        'personId': 4079,
        'rat': 'NR',
    },
    {
        'rowNumber': 7,
        'seatNumber': 9,
        'seatId': 'NR183',
        'd': 'M189.2,142c6.4-4.7,13-9.2,19.7-13.5l13.4,21.1c-6.2,4-12.3,8.2-18.3,12.5L189.2,142z',
        'personId': 4120,
        'rat': 'NR',
    },
    {
        'rowNumber': 7,
        'seatNumber': 10,
        'seatId': 'NR185',
        'd': 'M214.1,125.2c6.7-4.2,13.6-8.3,20.5-12.2l12,21.9c-6.5,3.6-12.8,7.4-19.1,11.3L214.1,125.2z',
        'personId': 4070,
        'rat': 'NR',
    },
    {
        'rowNumber': 7,
        'seatNumber': 11,
        'seatId': 'NR187',
        'd': 'M240.1,110c7-3.8,14.1-7.4,21.3-10.8l10.5,22.7c-6.7,3.2-13.3,6.5-19.8,10L240.1,110z',
        'personId': 1288,
        'rat': 'NR',
    },
    {
        'rowNumber': 7,
        'seatNumber': 12,
        'seatId': 'NR189',
        'd': 'M267,96.6c7.2-3.3,14.6-6.4,22-9.3l9,23.3c-6.9,2.7-13.7,5.6-20.4,8.7L267,96.6z',
        'personId': 1337,
        'rat': 'NR',
    },
    {
        'rowNumber': 7,
        'seatNumber': 13,
        'seatId': 'NR191',
        'd': 'M294.8,85.1c7.4-2.8,14.9-5.4,22.5-7.8l7.4,23.9c-7,2.2-14,4.7-21,7.3L294.8,85.1z',
        'personId': 3904,
        'rat': 'NR',
    },
    {
        'rowNumber': 7,
        'seatNumber': 14,
        'seatId': 'NR193',
        'd': 'M323.2,75.4c7.6-2.3,15.3-4.4,23-6.3l5.8,24.3c-7.2,1.8-14.3,3.7-21.4,5.9L323.2,75.4z',
        'personId': 1109,
        'rat': 'NR',
    },
    {
        'rowNumber': 7,
        'seatNumber': 15,
        'seatId': 'NR195',
        'd': 'M352.2,67.7c7.7-1.8,15.5-3.4,23.4-4.8l4.2,24.6c-7.3,1.3-14.5,2.8-21.7,4.4L352.2,67.7z',
        'personId': 4056,
        'rat': 'NR',
    },
    {
        'rowNumber': 7,
        'seatNumber': 16,
        'seatId': 'NR197',
        'd': 'M381.7,61.8c7.8-1.3,15.7-2.3,23.6-3.2l2.5,24.9c-7.4,0.8-14.7,1.8-22,3L381.7,61.8z',
        'personId': 1071,
        'rat': 'NR',
    },
    {
        'rowNumber': 7,
        'seatNumber': 17,
        'seatId': 'NR199',
        'd': 'M411.5,58c7.9-0.8,15.8-1.3,23.8-1.6l0.9,25c-7.4,0.3-14.8,0.8-22.1,1.5L411.5,58z',
        'personId': 502,
        'rat': 'NR',
    },
    {
        'rowNumber': 7,
        'seatNumber': 18,
        'seatId': 'NR168',
        'd': 'M473,56.4c7.9,0.3,15.9,0.9,23.8,1.6l-2.5,24.9c-7.4-0.7-14.7-1.2-22.1-1.5L473,56.4z',
        'personId': 3872,
        'rat': 'NR',
    },
    {
        'rowNumber': 7,
        'seatNumber': 19,
        'seatId': 'NR170',
        'd': 'M502.9,58.6c7.9,0.9,15.8,1.9,23.6,3.2l-4.2,24.6c-7.3-1.2-14.6-2.2-22-3L502.9,58.6z',
        'personId': 3888,
        'rat': 'NR',
    },
    {
        'rowNumber': 7,
        'seatNumber': 20,
        'seatId': 'NR172',
        'd': 'M532.7,62.9c7.8,1.4,15.6,3,23.4,4.8L550.2,92c-7.2-1.7-14.5-3.1-21.7-4.4L532.7,62.9z',
        'personId': 1137,
        'rat': 'NR',
    },
    {
        'rowNumber': 7,
        'seatNumber': 21,
        'seatId': 'NR174',
        'd': 'M562.1,69.1c7.7,1.9,15.4,4,23,6.3l-7.4,23.9c-7.1-2.1-14.2-4.1-21.4-5.9L562.1,69.1z',
        'personId': 3912,
        'rat': 'NR',
    },
    {
        'rowNumber': 7,
        'seatNumber': 22,
        'seatId': 'NR176',
        'd': 'M591,77.3c7.6,2.4,15.1,5,22.5,7.8l-9,23.3c-6.9-2.6-13.9-5-21-7.3L591,77.3z',
        'personId': 4116,
        'rat': 'NR',
    },
    {
        'rowNumber': 7,
        'seatNumber': 23,
        'seatId': 'NR178',
        'd': 'M619.3,87.3c7.4,2.9,14.7,6,22,9.3l-10.5,22.7c-6.7-3.1-13.5-6-20.4-8.7L619.3,87.3z',
        'personId': 3828,
        'rat': 'NR',
    },
    {
        'rowNumber': 7,
        'seatNumber': 24,
        'seatId': 'NR180',
        'd': 'M646.9,99.3c7.2,3.4,14.3,7,21.3,10.8l-12,21.9c-6.5-3.5-13.1-6.8-19.8-10L646.9,99.3z',
        'personId': 1122,
        'rat': 'NR',
    },
    {
        'rowNumber': 7,
        'seatNumber': 25,
        'seatId': 'NR182',
        'd': 'M673.6,113c6.9,3.9,13.8,7.9,20.5,12.2l-13.4,21.1c-6.3-3.9-12.6-7.7-19.1-11.3L673.6,113z',
        'personId': 1346,
        'rat': 'NR',
    },
    {
        'rowNumber': 7,
        'seatNumber': 26,
        'seatId': 'NR184',
        'd': 'M699.4,128.5c6.7,4.3,13.2,8.8,19.7,13.5l-14.8,20.1c-6-4.3-12.1-8.5-18.3-12.5L699.4,128.5z',
        'personId': 4142,
        'rat': 'NR',
    },
    {
        'rowNumber': 7,
        'seatNumber': 27,
        'seatId': 'NR186',
        'd': 'M724,145.7c6.4,4.8,12.6,9.7,18.7,14.8l-16.1,19.1c-5.7-4.7-11.5-9.3-17.4-13.7L724,145.7z',
        'personId': 3875,
        'rat': 'NR',
    },
    {
        'rowNumber': 7,
        'seatNumber': 28,
        'seatId': 'NR188',
        'd': 'M747.5,164.4c6,5.2,11.9,10.5,17.7,16l-17.4,18c-5.4-5.1-10.8-10.1-16.5-14.9L747.5,164.4z',
        'personId': 3895,
        'rat': 'NR',
    },
    {
        'rowNumber': 7,
        'seatNumber': 29,
        'seatId': 'NR190',
        'd': 'M791.4,207.5c4.7,5.3,9.3,10.8,13.8,16.3l-19.6,15.6c-4.2-5.1-8.4-10.2-12.8-15.1L791.4,207.5z',
        'personId': 214,
        'rat': 'NR',
    },
    {
        'rowNumber': 7,
        'seatNumber': 30,
        'seatId': 'NR192',
        'd': 'M809,228.7c4.4,5.6,8.6,11.3,12.8,17.1l-20.5,14.3c-3.8-5.4-7.8-10.7-11.9-15.9L809,228.7z',
        'personId': 4090,
        'rat': 'NR',
    },
    {
        'rowNumber': 7,
        'seatNumber': 31,
        'seatId': 'NR194',
        'd': 'M825.4,250.9c4,5.9,7.9,11.8,11.7,17.8l-21.3,13.1c-3.5-5.6-7.1-11.1-10.9-16.6L825.4,250.9z',
        'personId': 1119,
        'rat': 'NR',
    },
    {
        'rowNumber': 7,
        'seatNumber': 32,
        'seatId': 'NR196',
        'd': 'M840.3,274c3.7,6.1,7.2,12.3,10.6,18.5l-22.1,11.7c-3.1-5.8-6.4-11.5-9.8-17.2L840.3,274z',
        'personId': 4100,
        'rat': 'NR',
    },
    {
        'rowNumber': 7,
        'seatNumber': 33,
        'seatId': 'NR198',
        'd': 'M853.8,298c3.3,6.3,6.4,12.7,9.4,19.1l-22.7,10.4c-2.8-6-5.7-11.9-8.8-17.8L853.8,298z',
        'personId': 307,
        'rat': 'NR',
    },
    {
        'rowNumber': 7,
        'seatNumber': 34,
        'seatId': 'NR200',
        'd': 'M865.8,322.8c2.9,6.5,5.7,13.1,8.3,19.7l-23.3,9c-2.4-6.2-5-12.2-7.7-18.3L865.8,322.8z',
        'personId': 1135,
        'rat': 'NR',
    },
    {
        'rowNumber': 8,
        'seatNumber': 1,
        'seatId': 'SR006',
        'd': 'M0,281.6c2.7-5.4,5.5-10.7,8.3-16l21.9,12.1c-2.7,4.9-5.3,9.9-7.8,14.9L0,281.6z',
        'personId': 3914,
        'rat': 'SR',
    },
    {
        'rowNumber': 8,
        'seatNumber': 2,
        'seatId': 'SR004',
        'd': 'M11.7,259.4c2.9-5.3,6-10.5,9.1-15.6l21.3,13.1c-2.9,4.8-5.7,9.6-8.5,14.5L11.7,259.4z',
        'personId': 341,
        'rat': 'SR',
    },
    {
        'rowNumber': 8,
        'seatNumber': 3,
        'seatId': 'SR005',
        'd': 'M24.5,237.9c3.2-5.1,6.5-10.2,9.9-15.1L55,237c-3.1,4.6-6.2,9.4-9.2,14.1L24.5,237.9z',
        'personId': 3915,
        'rat': 'SR',
    },
    {
        'rowNumber': 8,
        'seatNumber': 4,
        'seatId': 'SR011',
        'd': 'M38.3,216.9c3.4-4.9,7-9.8,10.6-14.6l19.9,15.2c-3.4,4.5-6.7,9-9.9,13.6L38.3,216.9z',
        'personId': 4204,
        'rat': 'SR',
    },
    {
        'rowNumber': 8,
        'seatNumber': 5,
        'seatId': 'SR027',
        'd': 'M53.1,196.7c3.7-4.8,7.5-9.5,11.3-14.1l19.1,16.1c-3.6,4.3-7.1,8.7-10.5,13.1L53.1,196.7z',
        'personId': 801,
        'rat': 'SR',
    },
    {
        'rowNumber': 8,
        'seatNumber': 6,
        'seatId': 'SR035',
        'd': 'M69,177.3c3.9-4.6,7.9-9.1,12-13.5l18.3,17.1c-3.8,4.1-7.5,8.3-11.2,12.6L69,177.3z',
        'personId': 540,
        'rat': 'SR',
    },
    {
        'rowNumber': 8,
        'seatNumber': 7,
        'seatId': 'SR020',
        'd': 'M98.1,146c4.2-4.2,8.6-8.3,13-12.3l16.8,18.5c-4.1,3.8-8.1,7.6-12.1,11.5L98.1,146z',
        'personId': 823,
        'rat': 'SR',
    },
    {
        'rowNumber': 8,
        'seatNumber': 8,
        'seatId': 'SR031',
        'd': 'M116.3,129c4.4-4,9-7.9,13.5-11.7l15.9,19.3c-4.3,3.6-8.5,7.2-12.6,10.9L116.3,129z',
        'personId': 1141,
        'rat': 'SR',
    },
    {
        'rowNumber': 8,
        'seatNumber': 9,
        'seatId': 'SR026',
        'd': 'M135.2,112.9c4.6-3.8,9.3-7.4,14.1-11l14.9,20.1c-4.4,3.3-8.8,6.8-13.1,10.3L135.2,112.9z',
        'personId': 172,
        'rat': 'SR',
    },
    {
        'rowNumber': 8,
        'seatNumber': 10,
        'seatId': 'SR003',
        'd': 'M154.9,97.7c4.8-3.5,9.7-7,14.6-10.3l13.9,20.8c-4.6,3.1-9.1,6.3-13.6,9.6L154.9,97.7z',
        'personId': 4062,
        'rat': 'SR',
    },
    {
        'rowNumber': 8,
        'seatNumber': 11,
        'seatId': 'SR012',
        'd': 'M175.4,83.5c5-3.3,10-6.5,15.1-9.6l12.9,21.4c-4.7,2.9-9.4,5.9-14.1,8.9L175.4,83.5z',
        'personId': 4112,
        'rat': 'SR',
    },
    {
        'rowNumber': 8,
        'seatNumber': 12,
        'seatId': 'SR033',
        'd': 'M196.5,70.3c5.1-3,10.3-6,15.6-8.8l11.8,22c-4.9,2.7-9.7,5.4-14.5,8.2L196.5,70.3z',
        'personId': 825,
        'rat': 'SR',
    },
    {
        'rowNumber': 8,
        'seatNumber': 13,
        'seatId': 'SR041',
        'd': 'M218.2,58.2c5.3-2.8,10.6-5.5,16-8l10.7,22.6c-5,2.4-10,4.9-14.9,7.5L218.2,58.2z',
        'personId': 3871,
        'rat': 'SR',
    },
    {
        'rowNumber': 8,
        'seatNumber': 14,
        'seatId': 'SR022',
        'd': 'M240.5,47.2c5.4-2.5,10.9-4.9,16.4-7.3l9.6,23.1c-5.1,2.2-10.2,4.4-15.2,6.8L240.5,47.2z',
        'personId': 525,
        'rat': 'SR',
    },
    {
        'rowNumber': 8,
        'seatNumber': 15,
        'seatId': 'SR009',
        'd': 'M263.4,37.3c5.5-2.2,11.1-4.4,16.7-6.4l8.4,23.5c-5.2,1.9-10.4,3.9-15.5,6L263.4,37.3z',
        'personId': 4153,
        'rat': 'SR',
    },
    {
        'rowNumber': 8,
        'seatNumber': 16,
        'seatId': 'SR043',
        'd': 'M286.6,28.5c5.6-2,11.3-3.8,17-5.6l7.3,23.9c-5.3,1.7-10.6,3.4-15.8,5.2L286.6,28.5z',
        'personId': 4064,
        'rat': 'SR',
    },
    {
        'rowNumber': 8,
        'seatNumber': 17,
        'seatId': 'SR023',
        'd': 'M310.3,20.8c5.7-1.7,11.5-3.3,17.2-4.8l6.1,24.3c-5.4,1.4-10.7,2.9-16.1,4.4L310.3,20.8z',
        'personId': 4206,
        'rat': 'SR',
    },
    {
        'rowNumber': 8,
        'seatNumber': 18,
        'seatId': 'SR015',
        'd': 'M334.3,14.3c5.8-1.4,11.6-2.7,17.5-3.9l4.9,24.5c-5.4,1.1-10.9,2.3-16.3,3.7L334.3,14.3z',
        'personId': 4152,
        'rat': 'SR',
    },
    {
        'rowNumber': 8,
        'seatNumber': 19,
        'seatId': 'SR039',
        'd': 'M358.7,9.1C364.6,8,370.4,7,376.3,6l3.7,24.7c-5.5,0.9-11,1.8-16.4,2.8L358.7,9.1z',
        'personId': 4088,
        'rat': 'SR',
    },
    {
        'rowNumber': 8,
        'seatNumber': 20,
        'seatId': 'SR008',
        'd': 'M383.2,5c5.9-0.8,11.8-1.6,17.8-2.2l2.5,24.9c-5.5,0.6-11,1.3-16.5,2L383.2,5z',
        'personId': 4151,
        'rat': 'SR',
    },
    {
        'rowNumber': 8,
        'seatNumber': 21,
        'seatId': 'SR024',
        'd': 'M407.9,2.1c5.9-0.5,11.9-1,17.8-1.3l1.2,25c-5.5,0.3-11.1,0.7-16.6,1.2L407.9,2.1z',
        'personId': 1267,
        'rat': 'SR',
    },
    {
        'rowNumber': 8,
        'seatNumber': 22,
        'seatId': 'SR013',
        'd': 'M432.8,0.4c6-0.3,11.9-0.4,17.9-0.4v25c-5.6,0-11.1,0.2-16.7,0.4L432.8,0.4z',
        'personId': 3918,
        'rat': 'SR',
    },
    {
        'rowNumber': 8,
        'seatNumber': 23,
        'seatId': 'SR029',
        'd': 'M457.6,0c6,0,11.9,0.2,17.9,0.4l-1.2,25c-5.6-0.2-11.1-0.4-16.7-0.4L457.6,0L457.6,0z',
        'personId': 1153,
        'rat': 'SR',
    },
    {
        'rowNumber': 8,
        'seatNumber': 24,
        'seatId': 'SR034',
        'd': 'M482.5,0.8c6,0.3,11.9,0.8,17.8,1.3L497.9,27c-5.5-0.5-11.1-0.9-16.6-1.2L482.5,0.8z',
        'personId': 3891,
        'rat': 'SR',
    },
    {
        'rowNumber': 8,
        'seatNumber': 25,
        'seatId': 'SR025',
        'd': 'M507.3,2.8c5.9,0.6,11.9,1.4,17.8,2.2l-3.7,24.7c-5.5-0.8-11-1.5-16.5-2L507.3,2.8z',
        'personId': 3921,
        'rat': 'SR',
    },
    {
        'rowNumber': 8,
        'seatNumber': 26,
        'seatId': 'SR010',
        'd': 'M532,6c5.9,0.9,11.8,1.9,17.6,3.1l-4.9,24.5c-5.5-1-10.9-2-16.4-2.8L532,6z',
        'personId': 4207,
        'rat': 'SR',
    },
    {
        'rowNumber': 8,
        'seatNumber': 27,
        'seatId': 'SR017',
        'd': 'M556.5,10.4c5.8,1.2,11.7,2.5,17.5,3.9l-6.1,24.3c-5.4-1.3-10.8-2.5-16.3-3.7L556.5,10.4z',
        'personId': 321,
        'rat': 'SR',
    },
    {
        'rowNumber': 8,
        'seatNumber': 28,
        'seatId': 'SR016',
        'd': 'M580.7,16c5.8,1.5,11.5,3.1,17.2,4.8l-7.3,23.9c-5.3-1.6-10.7-3.1-16.1-4.4L580.7,16z',
        'personId': 1162,
        'rat': 'SR',
    },
    {
        'rowNumber': 8,
        'seatNumber': 29,
        'seatId': 'SR045',
        'd': 'M604.7,22.8c5.7,1.8,11.4,3.6,17,5.6L613.2,52c-5.2-1.8-10.5-3.6-15.8-5.2L604.7,22.8z',
        'personId': 1162,
        'rat': 'SR',
    },
    {
        'rowNumber': 8,
        'seatNumber': 30,
        'seatId': 'SR019',
        'd': 'M628.2,30.8c5.6,2,11.2,4.2,16.7,6.4l-9.6,23.1c-5.1-2.1-10.3-4.1-15.5-6L628.2,30.8z',
        'personId': 4139,
        'rat': 'SR',
    },
    {
        'rowNumber': 8,
        'seatNumber': 31,
        'seatId': 'SR007',
        'd': 'M651.4,39.9c5.5,2.3,10.9,4.7,16.4,7.3l-10.7,22.6c-5-2.3-10.1-4.6-15.2-6.8L651.4,39.9z',
        'personId': 4145,
        'rat': 'SR',
    },
    {
        'rowNumber': 8,
        'seatNumber': 32,
        'seatId': 'SR038',
        'd': 'M674.1,50.2c5.4,2.6,10.7,5.3,16,8l-11.8,22c-4.9-2.6-9.9-5.1-14.9-7.5L674.1,50.2z',
        'personId': 4205,
        'rat': 'SR',
    },
    {
        'rowNumber': 8,
        'seatNumber': 33,
        'seatId': 'SR018',
        'd': 'M696.2,61.5c5.2,2.8,10.4,5.8,15.6,8.8l-12.9,21.4c-4.8-2.8-9.6-5.6-14.5-8.2L696.2,61.5z',
        'personId': 1150,
        'rat': 'SR',
    },
    {
        'rowNumber': 8,
        'seatNumber': 34,
        'seatId': 'SR001',
        'd': 'M717.8,73.9c5.1,3.1,10.1,6.3,15.1,9.6L719,104.3c-4.6-3.1-9.3-6-14.1-8.9L717.8,73.9z',
        'personId': 466,
        'rat': 'SR',
    },
    {
        'rowNumber': 8,
        'seatNumber': 35,
        'seatId': 'SR030',
        'd': 'M738.7,87.4c4.9,3.3,9.8,6.8,14.6,10.3l-14.9,20.1c-4.5-3.3-9-6.5-13.6-9.6L738.7,87.4z',
        'personId': 477,
        'rat': 'SR',
    },
    {
        'rowNumber': 8,
        'seatNumber': 36,
        'seatId': 'SR047',
        'd': 'M759,101.9c4.8,3.6,9.5,7.3,14.1,11l-15.9,19.3c-4.3-3.5-8.7-6.9-13.1-10.3L759,101.9z',
        'personId': 3831,
        'rat': 'SR',
    },
    {
        'rowNumber': 8,
        'seatNumber': 37,
        'seatId': 'SR037',
        'd': 'M778.5,117.3c4.6,3.8,9.1,7.7,13.5,11.7l-16.8,18.5c-4.1-3.7-8.3-7.3-12.6-10.9L778.5,117.3z',
        'personId': 4075,
        'rat': 'SR',
    },
    {
        'rowNumber': 8,
        'seatNumber': 38,
        'seatId': 'SR021',
        'd': 'M797.2,133.7c4.4,4,8.7,8.1,13,12.3l-17.7,17.7c-4-3.9-8-7.7-12.1-11.5L797.2,133.7z',
        'personId': 1106,
        'rat': 'SR',
    },
    {
        'rowNumber': 8,
        'seatNumber': 39,
        'seatId': 'SR014',
        'd': 'M827.3,163.8c4.1,4.4,8.1,8.9,12,13.5l-19.1,16.1c-3.7-4.3-7.4-8.5-11.2-12.6L827.3,163.8z',
        'personId': 4068,
        'rat': 'SR',
    },
    {
        'rowNumber': 8,
        'seatNumber': 40,
        'seatId': 'SR002',
        'd': 'M843.8,182.6c3.9,4.6,7.6,9.3,11.3,14.1l-19.9,15.2c-3.4-4.4-7-8.8-10.5-13.1L843.8,182.6z',
        'personId': 1148,
        'rat': 'SR',
    },
    {
        'rowNumber': 8,
        'seatNumber': 41,
        'seatId': 'SR028',
        'd': 'M859.4,202.3c3.6,4.8,7.2,9.7,10.6,14.6l-20.6,14.2c-3.2-4.6-6.5-9.1-9.9-13.6L859.4,202.3z',
        'personId': 3879,
        'rat': 'SR',
    },
    {
        'rowNumber': 8,
        'seatNumber': 42,
        'seatId': 'SR042',
        'd': 'M873.9,222.7c3.4,5,6.7,10,9.9,15.1L862.5,251c-3-4.8-6-9.5-9.2-14.1L873.9,222.7z',
        'personId': 4026,
        'rat': 'SR',
    },
    {
        'rowNumber': 8,
        'seatNumber': 43,
        'seatId': 'SR036',
        'd': 'M887.5,243.8c3.1,5.2,6.2,10.4,9.1,15.6l-21.9,12.1c-2.7-4.9-5.6-9.7-8.5-14.5L887.5,243.8z',
        'personId': 305,
        'rat': 'SR',
    },
    {
        'rowNumber': 8,
        'seatNumber': 44,
        'seatId': 'SR040',
        'd': 'M900,265.6c2.9,5.3,5.6,10.6,8.3,16l-22.5,11c-2.5-5-5.1-10-7.8-14.9L900,265.6z',
        'personId': 3916,
        'rat': 'SR',
    },
    {
        'rowNumber': 8,
        'seatNumber': 45,
        'seatId': 'SR044',
        'd': 'M915.1,295.9c2.1,4.6,4.1,9.2,6.1,13.8l-23.1,9.6c-1.8-4.3-3.7-8.6-5.7-12.8L915.1,295.9z',
        'personId': 3920,
        'rat': 'SR',
    },
    {
        'rowNumber': 8,
        'seatNumber': 46,
        'seatId': 'SR042',
        'd': 'M923.9,316.2c1.9,4.7,3.7,9.4,5.5,14.1l-23.5,8.6c-1.6-4.4-3.3-8.7-5.1-13.1L923.9,316.2z',
        'personId': 4026,
        'rat': 'SR',
    },
];
//# sourceMappingURL=federal-assembly.data.js.map

/***/ }),
/* 1021 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__federal_assembly_data__ = __webpack_require__(1020);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FederalAssemblyService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FederalAssemblyService = /** @class */ (function () {
    function FederalAssemblyService() {
    }
    FederalAssemblyService.prototype.getSeats = function () {
        return __WEBPACK_IMPORTED_MODULE_1__federal_assembly_data__["a" /* SEATS */];
    };
    FederalAssemblyService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], FederalAssemblyService);
    return FederalAssemblyService;
}());

//# sourceMappingURL=federal-assembly.service.js.map

/***/ }),
/* 1022 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_federal_council_service__ = __webpack_require__(1024);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FederalCouncilComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FederalCouncilComponent = /** @class */ (function () {
    function FederalCouncilComponent(federalCouncilService, route, router) {
        this.federalCouncilService = federalCouncilService;
        this.route = route;
        this.router = router;
    }
    FederalCouncilComponent.prototype.getSeats = function () {
        this.seats = this.federalCouncilService.getSeats();
    };
    FederalCouncilComponent.prototype.ngOnInit = function () {
        this.getSeats();
    };
    FederalCouncilComponent.prototype.goToProfile = function (personId) {
        //console.log('personId ' + personId + ' geklickt.');
        window.open('https://www.parlament.ch/de/biografie?CouncillorId=' + personId, '_blank');
    };
    FederalCouncilComponent.prototype.navigateToProfile = function (personId) {
        this.router.navigate(['/pages/politician/' + personId]);
    };
    FederalCouncilComponent.prototype.markAsSelected = function () {
    };
    FederalCouncilComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
            selector: 'app-federal-council',
            template: __webpack_require__(1053),
            styles: [__webpack_require__(1040)],
            providers: [__WEBPACK_IMPORTED_MODULE_2__service_federal_council_service__["a" /* FederalCouncilService */]],
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__service_federal_council_service__["a" /* FederalCouncilService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__service_federal_council_service__["a" /* FederalCouncilService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _c || Object])
    ], FederalCouncilComponent);
    return FederalCouncilComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=federal-council.component.js.map

/***/ }),
/* 1023 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SEATS; });
var SEATS = [
    {
        'rowNumber': 0,
        'seatNumber': 1,
        'seatId': 'BR000',
        'd': 'M60,315.9h149.5v60H60V315.9z',
        'personId': '0',
        'rat': 'Bundesratssprecher',
    },
    {
        'rowNumber': 0,
        'seatNumber': 10,
        'seatId': '',
        'd': 'M561.2,315.9h90v60h-90V315.9z',
        'personId': '9',
        'rat': 'Vizekanzler',
    },
    {
        'rowNumber': 0,
        'seatNumber': 2,
        'seatId': 'BR001',
        'd': 'M307.1,315.9h90v60h-90V315.9z',
        'personId': '1',
        'rat': 'BR',
    },
    {
        'rowNumber': 0,
        'seatNumber': 3,
        'seatId': 'BR002',
        'd': 'M0,152h60v90H0V152z',
        'personId': '2',
        'rat': 'BR',
    },
    {
        'rowNumber': 0,
        'seatNumber': 4,
        'seatId': 'BR003',
        'd': 'M644.2,152h60v90h-60V152z',
        'personId': '3',
        'rat': 'BR',
    },
    {
        'rowNumber': 0,
        'seatNumber': 5,
        'seatId': 'BR004',
        'd': 'M0,65.5L63.6,1.8L106,44.2l-63.6,63.6L0,65.5z',
        'personId': '4',
        'rat': 'BR',
    },
    {
        'rowNumber': 0,
        'seatNumber': 6,
        'seatId': 'BR005',
        'd': 'M640.6,1.8l63.6,63.6l-42.4,42.4l-63.6-63.6L640.6,1.8z',
        'personId': '5',
        'rat': 'BR',
    },
    {
        'rowNumber': 0,
        'seatNumber': 7,
        'seatId': 'BR006',
        'd': 'M209.5,0h90v60h-90V0z',
        'personId': '6',
        'rat': 'BR',
    },
    {
        'rowNumber': 0,
        'seatNumber': 8,
        'seatId': 'BR007',
        'd': 'M404.4,0h90v60h-90V0z',
        'personId': '7',
        'rat': 'BR',
    },
    {
        'rowNumber': 0,
        'seatNumber': 9,
        'seatId': '',
        'd': 'M460.6,315.9h90v60h-90V315.9z',
        'personId': '8',
        'rat': 'Bundeskanzler',
    },
];
//# sourceMappingURL=federal-council.data.js.map

/***/ }),
/* 1024 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__federal_council_data__ = __webpack_require__(1023);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FederalCouncilService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FederalCouncilService = /** @class */ (function () {
    function FederalCouncilService() {
    }
    FederalCouncilService.prototype.getSeats = function () {
        return __WEBPACK_IMPORTED_MODULE_1__federal_council_data__["a" /* SEATS */];
    };
    FederalCouncilService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], FederalCouncilService);
    return FederalCouncilService;
}());

//# sourceMappingURL=federal-council.service.js.map

/***/ }),
/* 1025 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_national_council_service__ = __webpack_require__(1027);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NationalCouncilComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NationalCouncilComponent = /** @class */ (function () {
    function NationalCouncilComponent(nationalCouncilService, route, router) {
        this.nationalCouncilService = nationalCouncilService;
        this.route = route;
        this.router = router;
    }
    NationalCouncilComponent.prototype.getSeats = function () {
        this.seats = this.nationalCouncilService.getSeats();
    };
    NationalCouncilComponent.prototype.ngOnInit = function () {
        this.getSeats();
    };
    NationalCouncilComponent.prototype.goToProfile = function (personId) {
        //console.log('personId ' + personId + ' geklickt.');
        window.open('https://www.parlament.ch/de/biografie?CouncillorId=' + personId, '_blank');
    };
    NationalCouncilComponent.prototype.navigateToProfile = function (personId) {
        this.router.navigate(['/pages/politician/' + personId]);
    };
    NationalCouncilComponent.prototype.markAsSelected = function () {
    };
    NationalCouncilComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
            selector: 'app-national-council',
            template: __webpack_require__(1054),
            styles: [__webpack_require__(1041)],
            providers: [__WEBPACK_IMPORTED_MODULE_2__service_national_council_service__["a" /* NationalCouncilService */]],
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__service_national_council_service__["a" /* NationalCouncilService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__service_national_council_service__["a" /* NationalCouncilService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _c || Object])
    ], NationalCouncilComponent);
    return NationalCouncilComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=national-council.component.js.map

/***/ }),
/* 1026 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SEATS; });
var SEATS = [
    {
        'rowNumber': 0,
        'seatNumber': 1,
        'seatId': 'NR007',
        'd': 'M371.6,539h20v22h-20V539z',
        'personId': 1295,
        'rat': 'NR',
    },
    {
        'rowNumber': 0,
        'seatNumber': 2,
        'seatId': 'NR009',
        'd': 'M400.9,539h20v22h-20V539z',
        'personId': 4074,
        'rat': 'NR',
    },
    {
        'rowNumber': 0,
        'seatNumber': 3,
        'seatId': 'NR011',
        'd': 'M430.1,539h20v22h-20V539z',
        'personId': 4137,
        'rat': 'NR',
    },
    {
        'rowNumber': 0,
        'seatNumber': 4,
        'seatId': 'NR008',
        'd': 'M459.3,539h20v22h-20V539z',
        'personId': 4135,
        'rat': 'NR',
    },
    {
        'rowNumber': 0,
        'seatNumber': 5,
        'seatId': 'NR010',
        'd': 'M488.5,539h20v22h-20V539z',
        'personId': 3876,
        'rat': 'NR',
    },
    {
        'rowNumber': 0,
        'seatNumber': 6,
        'seatId': 'NR012',
        'd': 'M517.7,539h20v22h-20V539z',
        'personId': 4189,
        'rat': 'NR',
    },
    {
        'rowNumber': 0,
        'seatNumber': 7,
        'seatId': 'BR001',
        'd': 'M260.1,571.7l19.8,2.4l-2.7,21.8l-19.9-2.4L260.1,571.7z',
        'personId': 1,
        'rat': 'BR',
    },
    {
        'rowNumber': 0,
        'seatNumber': 8,
        'seatId': 'BR002',
        'd': 'M292.9,575.8l19.9,2.4l-2.7,21.8l-19.9-2.4L292.9,575.8z',
        'personId': 2,
        'rat': 'BR',
    },
    {
        'rowNumber': 0,
        'seatNumber': 9,
        'seatId': 'BR003',
        'd': 'M325.6,579.8l19.9,2.4l-2.7,21.8l-19.9-2.4L325.6,579.8z',
        'personId': 3,
        'rat': 'BR',
    },
    {
        'rowNumber': 0,
        'seatNumber': 10,
        'seatId': '-',
        'd': 'M371.6,582.1h20v22h-20V582.1z',
        'personId': '#NV',
        'rat': 'Kommissionssprecher',
    },
    {
        'rowNumber': 0,
        'seatNumber': 11,
        'seatId': '-',
        'd': 'M408.2,582.1h20v22h-20V582.1z',
        'personId': '#NV',
        'rat': 'Kommissionssprecher',
    },
    {
        'rowNumber': 0,
        'seatNumber': 12,
        'seatId': 'BR004',
        'd': 'M444.7,582.1h20v22h-20V582.1z',
        'personId': '#NV',
        'rat': 'BR',
    },
    {
        'rowNumber': 0,
        'seatNumber': 13,
        'seatId': 'NR003',
        'd': 'M481.2,582.1h20v22h-20V582.1z',
        'personId': 4025,
        'rat': 'NR',
    },
    {
        'rowNumber': 0,
        'seatNumber': 14,
        'seatId': 'NR005',
        'd': 'M517.7,582.1h20v22h-20V582.1z',
        'personId': 4191,
        'rat': 'NR',
    },
    {
        'rowNumber': 0,
        'seatNumber': 15,
        'seatId': 'BR005',
        'd': 'M561.6,582.3l19.8-2.4l2.7,21.8l-19.8,2.4L561.6,582.3z',
        'personId': '#NV',
        'rat': 'BR',
    },
    {
        'rowNumber': 0,
        'seatNumber': 16,
        'seatId': 'BR006',
        'd': 'M594.3,578.3l19.8-2.4l2.7,21.8l-19.9,2.4L594.3,578.3z',
        'personId': '#NV',
        'rat': 'BR',
    },
    {
        'rowNumber': 0,
        'seatNumber': 17,
        'seatId': 'BR007',
        'd': 'M627.1,574.2l19.8-2.4l2.7,21.8l-19.9,2.4L627.1,574.2z',
        'personId': '#NV',
        'rat': 'BR',
    },
    {
        'rowNumber': 0,
        'seatNumber': 18,
        'seatId': '-',
        'd': 'M292.9,617.9l19.9,2.4l-2.7,21.8l-19.9-2.4L292.9,617.9z',
        'personId': '#NV',
        'rat': '-',
    },
    {
        'rowNumber': 0,
        'seatNumber': 19,
        'seatId': '-',
        'd': 'M325.6,621.9l19.9,2.4l-2.7,21.8l-19.9-2.4L325.6,621.9z',
        'personId': '#NV',
        'rat': '-',
    },
    {
        'rowNumber': 0,
        'seatNumber': 20,
        'seatId': '-',
        'd': 'M371.6,624.2h20v22h-20V624.2z',
        'personId': '#NV',
        'rat': '-',
    },
    {
        'rowNumber': 0,
        'seatNumber': 21,
        'seatId': 'NR001',
        'd': 'M444.2,624.2h20v22h-20V624.2z',
        'personId': 514,
        'rat': 'NR',
    },
    {
        'rowNumber': 0,
        'seatNumber': 22,
        'seatId': 'NR002',
        'd': 'M517.7,624.2h20v22h-20V624.2z',
        'personId': 1124,
        'rat': 'NR',
    },
    {
        'rowNumber': 0,
        'seatNumber': 23,
        'seatId': 'NR004',
        'd': 'M561.6,624.3l19.9-1.7l1.9,21.9l-19.9,1.7L561.6,624.3z',
        'personId': 3830,
        'rat': 'NR',
    },
    {
        'rowNumber': 0,
        'seatNumber': 24,
        'seatId': 'NR006',
        'd': 'M594.5,621.4l19.9-1.7l1.9,21.9l-19.9,1.7L594.5,621.4z',
        'personId': 173,
        'rat': 'NR',
    },
    {
        'rowNumber': 1,
        'seatNumber': 1,
        'seatId': 'NR013',
        'd': 'M339.3,501.1c0.5-10.2,2.4-20.2,5.5-29.9l23.4,9c-2.1,6.8-3.4,13.8-3.9,20.9H339.3z',
        'personId': 724,
        'rat': 'NR',
    },
    {
        'rowNumber': 1,
        'seatNumber': 2,
        'seatId': 'NR015',
        'd': 'M349,460.4c4.1-9.3,9.5-18,15.9-25.9l18.6,16.8c-4.4,5.6-8.1,11.7-11.1,18.1L349,460.4z',
        'personId': 1318,
        'rat': 'NR',
    },
    {
        'rowNumber': 1,
        'seatNumber': 3,
        'seatId': 'NR017',
        'd': 'M378.6,420.3c7.7-6.7,16.2-12.3,25.3-16.8l9.8,23.1c-6.3,3.2-12.3,7.1-17.7,11.7L378.6,420.3z',
        'personId': 4093,
        'rat': 'NR',
    },
    {
        'rowNumber': 1,
        'seatNumber': 4,
        'seatId': 'NR019',
        'd': 'M414.6,399c9.6-3.5,19.5-5.7,29.7-6.6l0.9,25c-7.1,0.7-14,2.3-20.7,4.6L414.6,399z',
        'personId': 4149,
        'rat': 'NR',
    },
    {
        'rowNumber': 1,
        'seatNumber': 5,
        'seatId': 'NR014',
        'd': 'M464,392.4c10.1,0.9,20.1,3.1,29.7,6.6l-9.8,23.1c-6.7-2.3-13.7-3.9-20.7-4.6L464,392.4z',
        'personId': 4165,
        'rat': 'NR',
    },
    {
        'rowNumber': 1,
        'seatNumber': 6,
        'seatId': 'NR016',
        'd': 'M504.4,403.5c9.1,4.4,17.7,10.1,25.3,16.8l-17.4,18c-5.4-4.6-11.4-8.5-17.7-11.7L504.4,403.5z',
        'personId': 4110,
        'rat': 'NR',
    },
    {
        'rowNumber': 1,
        'seatNumber': 7,
        'seatId': 'NR018',
        'd': 'M543.4,434.5c6.4,7.9,11.7,16.6,15.9,25.9l-23.4,9c-3-6.5-6.7-12.5-11.1-18.1L543.4,434.5z',
        'personId': 3901,
        'rat': 'NR',
    },
    {
        'rowNumber': 1,
        'seatNumber': 8,
        'seatId': 'NR020',
        'd': 'M563.5,471.3c3.2,9.7,5,19.7,5.5,29.9h-25c-0.5-7.1-1.8-14.1-3.9-20.9L563.5,471.3z',
        'personId': 4179,
        'rat': 'NR',
    },
    {
        'rowNumber': 2,
        'seatNumber': 1,
        'seatId': 'NR021',
        'd': 'M283.2,505.3c0.1-7.2,0.6-14.5,1.6-21.6l24.7,3.7c-0.8,6-1.3,12-1.3,18h-25V505.3z',
        'personId': 4197,
        'rat': 'NR',
    },
    {
        'rowNumber': 2,
        'seatNumber': 2,
        'seatId': 'NR023',
        'd': 'M285.2,480.3c1.1-7.1,2.7-14.2,4.7-21.2l23.9,7.2c-1.7,5.8-3,11.6-3.9,17.6L285.2,480.3z',
        'personId': 4201,
        'rat': 'NR',
    },
    {
        'rowNumber': 2,
        'seatNumber': 3,
        'seatId': 'NR025',
        'd': 'M290.9,456c2.2-6.9,4.8-13.7,7.8-20.2l22.6,10.6c-2.5,5.5-4.7,11.1-6.5,16.8L290.9,456z',
        'personId': 4186,
        'rat': 'NR',
    },
    {
        'rowNumber': 2,
        'seatNumber': 4,
        'seatId': 'NR027',
        'd': 'M300.1,432.7c3.1-6.5,6.7-12.8,10.6-18.9l20.8,13.8c-3.3,5-6.2,10.3-8.8,15.7L300.1,432.7z',
        'personId': 3907,
        'rat': 'NR',
    },
    {
        'rowNumber': 2,
        'seatNumber': 5,
        'seatId': 'NR029',
        'd': 'M312.7,411c4.1-6,8.5-11.7,13.3-17.1l18.6,16.7c-4,4.5-7.7,9.3-11,14.2L312.7,411z',
        'personId': 806,
        'rat': 'NR',
    },
    {
        'rowNumber': 2,
        'seatNumber': 6,
        'seatId': 'NR031',
        'd': 'M336.6,382.8c6.8-6.4,14.1-12.3,21.8-17.5l13.8,20.8c-6.5,4.4-12.5,9.3-18.2,14.6L336.6,382.8z',
        'personId': 4095,
        'rat': 'NR',
    },
    {
        'rowNumber': 2,
        'seatNumber': 7,
        'seatId': 'NR033',
        'd': 'M361.2,363.5c7.8-5.1,16.1-9.5,24.6-13.2l9.8,23c-7.1,3.1-14,6.8-20.6,11.1L361.2,363.5z',
        'personId': 4185,
        'rat': 'NR',
    },
    {
        'rowNumber': 2,
        'seatNumber': 8,
        'seatId': 'NR035',
        'd': 'M388.9,348.9c8.6-3.6,17.5-6.4,26.6-8.5l5.4,24.4c-7.6,1.8-15,4.2-22.2,7.1L388.9,348.9z',
        'personId': 4184,
        'rat': 'NR',
    },
    {
        'rowNumber': 2,
        'seatNumber': 9,
        'seatId': 'NR037',
        'd': 'M418.8,339.7c9.1-1.9,18.4-3.1,27.7-3.5l0.9,25c-7.8,0.4-15.5,1.3-23.2,2.9L418.8,339.7z',
        'personId': 3882,
        'rat': 'NR',
    },
    {
        'rowNumber': 2,
        'seatNumber': 10,
        'seatId': 'NR022',
        'd': 'M461.8,336.2c9.3,0.4,18.6,1.6,27.7,3.5l-5.4,24.4c-7.6-1.6-15.4-2.6-23.2-2.9L461.8,336.2z',
        'personId': 4046,
        'rat': 'NR',
    },
    {
        'rowNumber': 2,
        'seatNumber': 11,
        'seatId': 'NR024',
        'd': 'M492.8,340.4c9.1,2.1,18,5,26.6,8.5l-9.8,23c-7.2-3-14.7-5.3-22.2-7.1L492.8,340.4z',
        'personId': 4073,
        'rat': 'NR',
    },
    {
        'rowNumber': 2,
        'seatNumber': 12,
        'seatId': 'NR026',
        'd': 'M522.5,350.2c8.5,3.7,16.8,8.2,24.6,13.2l-13.8,20.8c-6.6-4.2-13.4-7.9-20.6-11.1L522.5,350.2z',
        'personId': 4176,
        'rat': 'NR',
    },
    {
        'rowNumber': 2,
        'seatNumber': 13,
        'seatId': 'NR028',
        'd': 'M549.9,365.3c7.7,5.2,15,11.1,21.8,17.5l-17.4,18c-5.7-5.4-11.8-10.2-18.2-14.6L549.9,365.3z',
        'personId': 4173,
        'rat': 'NR',
    },
    {
        'rowNumber': 2,
        'seatNumber': 14,
        'seatId': 'NR030',
        'd': 'M582.3,393.8c4.8,5.4,9.2,11.1,13.3,17.1l-20.8,13.8c-3.4-5-7.1-9.7-11-14.2L582.3,393.8z',
        'personId': 4175,
        'rat': 'NR',
    },
    {
        'rowNumber': 2,
        'seatNumber': 15,
        'seatId': 'NR032',
        'd': 'M597.5,413.8c3.9,6.1,7.5,12.4,10.6,18.9l-22.6,10.6c-2.6-5.4-5.6-10.7-8.8-15.7L597.5,413.8z',
        'personId': 4103,
        'rat': 'NR',
    },
    {
        'rowNumber': 2,
        'seatNumber': 16,
        'seatId': 'NR034',
        'd': 'M609.6,435.7c3,6.6,5.6,13.3,7.8,20.2l-23.9,7.2c-1.8-5.7-4-11.4-6.5-16.8L609.6,435.7z',
        'personId': 4161,
        'rat': 'NR',
    },
    {
        'rowNumber': 2,
        'seatNumber': 17,
        'seatId': 'NR036',
        'd': 'M618.3,459.2c2,6.9,3.6,14,4.7,21.2l-24.7,3.7c-0.9-5.9-2.3-11.8-3.9-17.6L618.3,459.2z',
        'personId': 4155,
        'rat': 'NR',
    },
    {
        'rowNumber': 2,
        'seatNumber': 18,
        'seatId': 'NR038',
        'd': 'M623.5,483.7c1,7.2,1.5,14.4,1.6,21.6h-25c-0.1-6-0.5-12-1.3-18L623.5,483.7z',
        'personId': 3867,
        'rat': 'NR',
    },
    {
        'rowNumber': 3,
        'seatNumber': 1,
        'seatId': 'NR039',
        'd': 'M227.2,504.7c0.1-7.7,0.5-15.4,1.4-23.1l24.8,3c-0.7,6.7-1.2,13.4-1.2,20.1H227.2z',
        'personId': 4018,
        'rat': 'NR',
    },
    {
        'rowNumber': 3,
        'seatNumber': 2,
        'seatId': 'NR041',
        'd': 'M229.1,477.1c1-7.7,2.4-15.3,4.2-22.8l24.3,6c-1.5,6.5-2.8,13.1-3.7,19.8L229.1,477.1z',
        'personId': 4113,
        'rat': 'NR',
    },
    {
        'rowNumber': 3,
        'seatNumber': 3,
        'seatId': 'NR043',
        'd': 'M234.4,449.9c1.9-7.5,4.3-14.9,7-22.1l23.3,9c-2.3,6.3-4.4,12.7-6,19.2L234.4,449.9z',
        'personId': 4091,
        'rat': 'NR',
    },
    {
        'rowNumber': 3,
        'seatNumber': 4,
        'seatId': 'NR045',
        'd': 'M243,423.5c2.8-7.2,6-14.2,9.6-21.1l22.1,11.7c-3.1,6-5.9,12.1-8.3,18.3L243,423.5z',
        'personId': 4198,
        'rat': 'NR',
    },
    {
        'rowNumber': 3,
        'seatNumber': 5,
        'seatId': 'NR047',
        'd': 'M254.8,398.4c3.7-6.8,7.7-13.4,12.1-19.8l20.5,14.3c-3.8,5.5-7.3,11.3-10.5,17.1L254.8,398.4z',
        'personId': 4199,
        'rat': 'NR',
    },
    {
        'rowNumber': 3,
        'seatNumber': 6,
        'seatId': 'NR049',
        'd': 'M269.5,374.9c4.5-6.3,9.3-12.3,14.4-18.1l18.6,16.7c-4.4,5-8.6,10.3-12.5,15.7L269.5,374.9z',
        'personId': 4045,
        'rat': 'NR',
    },
    {
        'rowNumber': 3,
        'seatNumber': 7,
        'seatId': 'NR051',
        'd': 'M298.1,342.1c7-6.6,14.3-12.7,22.1-18.4l14.6,20.3c-6.7,4.9-13.2,10.3-19.2,16L298.1,342.1z',
        'personId': 4102,
        'rat': 'NR',
    },
    {
        'rowNumber': 3,
        'seatNumber': 8,
        'seatId': 'NR053',
        'd': 'M323.9,321.1c7.8-5.5,16-10.5,24.5-15l11.4,22.2c-7.4,3.9-14.5,8.3-21.4,13L323.9,321.1z',
        'personId': 4108,
        'rat': 'NR',
    },
    {
        'rowNumber': 3,
        'seatNumber': 9,
        'seatId': 'NR055',
        'd': 'M352.4,304.1c8.6-4.3,17.4-8,26.4-11.2l8.1,23.7c-7.9,2.8-15.6,6-23.1,9.8L352.4,304.1z',
        'personId': '#WERT!',
        'rat': 'NR',
    },
    {
        'rowNumber': 3,
        'seatNumber': 10,
        'seatId': 'NR057',
        'd': 'M383.2,291.4c9.1-3,18.4-5.4,27.8-7.2l4.5,24.6c-8.2,1.6-16.3,3.7-24.2,6.3L383.2,291.4z',
        'personId': 4200,
        'rat': 'NR',
    },
    {
        'rowNumber': 3,
        'seatNumber': 11,
        'seatId': 'NR059',
        'd': 'M415.4,283.3c9.4-1.6,19-2.7,28.5-3.1l0.9,25c-8.3,0.4-16.7,1.3-24.9,2.7L415.4,283.3z',
        'personId': 4082,
        'rat': 'NR',
    },
    {
        'rowNumber': 3,
        'seatNumber': 12,
        'seatId': 'NR040',
        'd': 'M464.3,280.2c9.6,0.4,19.1,1.5,28.5,3.1l-4.5,24.6c-8.2-1.4-16.5-2.3-24.9-2.7L464.3,280.2z',
        'personId': 4042,
        'rat': 'NR',
    },
    {
        'rowNumber': 3,
        'seatNumber': 13,
        'seatId': 'NR042',
        'd': 'M497.4,284.1c9.4,1.8,18.7,4.2,27.8,7.2l-8.1,23.7c-7.9-2.6-16-4.7-24.2-6.3L497.4,284.1z',
        'personId': 4177,
        'rat': 'NR',
    },
    {
        'rowNumber': 3,
        'seatNumber': 14,
        'seatId': 'NR044',
        'd': 'M529.5,292.8c9,3.2,17.9,6.9,26.4,11.2l-11.4,22.2c-7.5-3.7-15.2-7-23.1-9.8L529.5,292.8z',
        'personId': 4129,
        'rat': 'NR',
    },
    {
        'rowNumber': 3,
        'seatNumber': 15,
        'seatId': 'NR046',
        'd': 'M559.9,306.1c8.5,4.5,16.7,9.5,24.5,15l-14.6,20.3c-6.8-4.8-14-9.1-21.4-13L559.9,306.1z',
        'personId': 4163,
        'rat': 'NR',
    },
    {
        'rowNumber': 3,
        'seatNumber': 16,
        'seatId': 'NR048',
        'd': 'M588.1,323.8c7.7,5.7,15.1,11.8,22.1,18.4l-17.4,18c-6.1-5.7-12.5-11.1-19.2-16L588.1,323.8z',
        'personId': 4174,
        'rat': 'NR',
    },
    {
        'rowNumber': 3,
        'seatNumber': 17,
        'seatId': 'NR050',
        'd': 'M624.4,356.8c5.1,5.8,9.9,11.8,14.4,18.1l-20.5,14.3c-3.9-5.5-8.1-10.7-12.5-15.7L624.4,356.8z',
        'personId': 4114,
        'rat': 'NR',
    },
    {
        'rowNumber': 3,
        'seatNumber': 18,
        'seatId': 'NR052',
        'd': 'M641.4,378.7c4.4,6.4,8.4,13,12.1,19.8l-22.1,11.7c-3.2-5.9-6.7-11.6-10.5-17.1L641.4,378.7z',
        'personId': 4170,
        'rat': 'NR',
    },
    {
        'rowNumber': 3,
        'seatNumber': 19,
        'seatId': 'NR054',
        'd': 'M655.6,402.4c3.6,6.9,6.8,13.9,9.6,21.1l-23.3,9c-2.5-6.2-5.3-12.3-8.3-18.3L655.6,402.4z',
        'personId': 4051,
        'rat': 'NR',
    },
    {
        'rowNumber': 3,
        'seatNumber': 20,
        'seatId': 'NR056',
        'd': 'M666.9,427.8c2.7,7.2,5,14.6,7,22.1l-24.3,6c-1.7-6.5-3.7-12.9-6-19.2L666.9,427.8z',
        'personId': 4178,
        'rat': 'NR',
    },
    {
        'rowNumber': 3,
        'seatNumber': 21,
        'seatId': 'NR058',
        'd': 'M674.9,454.3c1.8,7.5,3.2,15.1,4.2,22.8l-24.8,3c-0.9-6.6-2.1-13.2-3.7-19.8L674.9,454.3z',
        'personId': 4158,
        'rat': 'NR',
    },
    {
        'rowNumber': 3,
        'seatNumber': 22,
        'seatId': 'NR060',
        'd': 'M679.7,481.6c0.9,7.7,1.3,15.4,1.4,23.1h-25c-0.1-6.7-0.5-13.4-1.2-20.1L679.7,481.6z',
        'personId': 3878,
        'rat': 'NR',
    },
    {
        'rowNumber': 4,
        'seatNumber': 1,
        'seatId': 'NR061',
        'd': 'M171.2,505.1c0-7.4,0.4-14.7,1-22.1l24.9,2.3c-0.6,6.6-0.9,13.2-0.9,19.8L171.2,505.1L171.2,505.1z',
        'personId': 4058,
        'rat': 'NR',
    },
    {
        'rowNumber': 4,
        'seatNumber': 2,
        'seatId': 'NR063',
        'd': 'M172.5,479.2c0.7-7.3,1.7-14.6,3-21.9l24.6,4.6c-1.2,6.5-2.1,13-2.7,19.6L172.5,479.2z',
        'personId': 3899,
        'rat': 'NR',
    },
    {
        'rowNumber': 4,
        'seatNumber': 3,
        'seatId': 'NR065',
        'd': 'M176.2,453.5c1.4-7.2,3.1-14.4,5-21.5l24.1,6.8c-1.7,6.4-3.2,12.8-4.5,19.3L176.2,453.5z',
        'personId': 4195,
        'rat': 'NR',
    },
    {
        'rowNumber': 4,
        'seatNumber': 4,
        'seatId': 'NR067',
        'd': 'M182.3,428.3c2-7.1,4.4-14.1,7-21l23.3,9c-2.3,6.2-4.4,12.5-6.2,18.8L182.3,428.3z',
        'personId': 4143,
        'rat': 'NR',
    },
    {
        'rowNumber': 4,
        'seatNumber': 5,
        'seatId': 'NR069',
        'd': 'M190.6,403.8c2.7-6.9,5.6-13.6,8.9-20.2l22.4,11.1c-2.9,5.9-5.5,12-7.9,18.1L190.6,403.8z',
        'personId': 3923,
        'rat': 'NR',
    },
    {
        'rowNumber': 4,
        'seatNumber': 6,
        'seatId': 'NR071',
        'd': 'M201.2,380.1c3.3-6.6,6.9-13,10.7-19.3l21.3,13.1c-3.4,5.7-6.6,11.4-9.6,17.3L201.2,380.1z',
        'personId': 4130,
        'rat': 'NR',
    },
    {
        'rowNumber': 4,
        'seatNumber': 7,
        'seatId': 'NR073',
        'd': 'M213.9,357.5c3.9-6.3,8-12.4,12.4-18.3l20,15c-3.9,5.3-7.6,10.8-11.1,16.4L213.9,357.5z',
        'personId': 4049,
        'rat': 'NR',
    },
    {
        'rowNumber': 4,
        'seatNumber': 8,
        'seatId': 'NR075',
        'd': 'M228.5,336.1c4.4-5.9,9.1-11.6,14-17.1l18.6,16.7c-4.4,4.9-8.6,10-12.6,15.3L228.5,336.1z',
        'personId': 224,
        'rat': 'NR',
    },
    {
        'rowNumber': 4,
        'seatNumber': 9,
        'seatId': 'NR077',
        'd': 'M258.9,302.1c6.2-5.9,12.7-11.6,19.5-16.9l15.4,19.7c-6.1,4.8-11.9,9.9-17.5,15.2L258.9,302.1z',
        'personId': 1138,
        'rat': 'NR',
    },
    {
        'rowNumber': 4,
        'seatNumber': 10,
        'seatId': 'NR079',
        'd': 'M281.4,282.8c6.8-5.3,13.9-10.2,21.1-14.8l13.2,21.2c-6.5,4.1-12.9,8.6-19,13.3L281.4,282.8z',
        'personId': 4083,
        'rat': 'NR',
    },
    {
        'rowNumber': 4,
        'seatNumber': 11,
        'seatId': 'NR081',
        'd': 'M305.8,266c7.3-4.5,14.9-8.7,22.6-12.5l11,22.5c-6.9,3.4-13.7,7.2-20.3,11.2L305.8,266z',
        'personId': 3897,
        'rat': 'NR',
    },
    {
        'rowNumber': 4,
        'seatNumber': 12,
        'seatId': 'NR083',
        'd': 'M331.8,251.8c7.8-3.7,15.7-7.1,23.7-10.1l8.6,23.5c-7.2,2.7-14.4,5.7-21.3,9.1L331.8,251.8z',
        'personId': 3931,
        'rat': 'NR',
    },
    {
        'rowNumber': 4,
        'seatNumber': 13,
        'seatId': 'NR085',
        'd': 'M359.2,240.4c8.1-2.9,16.3-5.4,24.7-7.5l6,24.3c-7.5,1.9-14.9,4.2-22.2,6.8L359.2,240.4z',
        'personId': 4059,
        'rat': 'NR',
    },
    {
        'rowNumber': 4,
        'seatNumber': 14,
        'seatId': 'NR087',
        'd': 'M387.5,231.9c8.4-2,16.8-3.7,25.3-4.9l3.5,24.8c-7.6,1.1-15.2,2.6-22.8,4.4L387.5,231.9z',
        'personId': 4066,
        'rat': 'NR',
    },
    {
        'rowNumber': 4,
        'seatNumber': 15,
        'seatId': 'NR089',
        'd': 'M416.7,226.5c8.5-1.1,17.1-1.9,25.7-2.2l0.9,25c-7.7,0.3-15.4,1-23.1,2L416.7,226.5z',
        'personId': 4008,
        'rat': 'NR',
    },
    {
        'rowNumber': 4,
        'seatNumber': 16,
        'seatId': 'NR062',
        'd': 'M465.9,224.2c8.6,0.4,17.2,1.1,25.7,2.2l-3.5,24.8c-7.7-1-15.4-1.7-23.1-2L465.9,224.2z',
        'personId': 3886,
        'rat': 'NR',
    },
    {
        'rowNumber': 4,
        'seatNumber': 17,
        'seatId': 'NR064',
        'd': 'M495.4,227c8.5,1.3,17,2.9,25.3,4.9l-6,24.3c-7.5-1.8-15.1-3.3-22.8-4.4L495.4,227z',
        'personId': 4094,
        'rat': 'NR',
    },
    {
        'rowNumber': 4,
        'seatNumber': 18,
        'seatId': 'NR066',
        'd': 'M524.5,232.9c8.3,2.1,16.6,4.7,24.7,7.5l-8.6,23.5c-7.3-2.6-14.7-4.9-22.2-6.8L524.5,232.9z',
        'personId': 4125,
        'rat': 'NR',
    },
    {
        'rowNumber': 4,
        'seatNumber': 19,
        'seatId': 'NR068',
        'd': 'M552.7,241.7c8.1,3,16,6.4,23.7,10.1l-11,22.5c-7-3.3-14.1-6.4-21.3-9.1L552.7,241.7z',
        'personId': 4162,
        'rat': 'NR',
    },
    {
        'rowNumber': 4,
        'seatNumber': 20,
        'seatId': 'NR070',
        'd': 'M579.9,253.5c7.7,3.8,15.2,8,22.6,12.5l-13.2,21.2c-6.6-4-13.4-7.8-20.3-11.2L579.9,253.5z',
        'personId': 1159,
        'rat': 'NR',
    },
    {
        'rowNumber': 4,
        'seatNumber': 21,
        'seatId': 'NR072',
        'd': 'M605.7,268c7.3,4.6,14.3,9.5,21.1,14.8l-15.4,19.7c-6.1-4.7-12.5-9.2-19-13.3L605.7,268z',
        'personId': 4160,
        'rat': 'NR',
    },
    {
        'rowNumber': 4,
        'seatNumber': 22,
        'seatId': 'NR074',
        'd': 'M629.9,285.2c6.7,5.3,13.2,11,19.5,16.9l-17.4,18c-5.6-5.3-11.4-10.4-17.5-15.2L629.9,285.2z',
        'personId': 1345,
        'rat': 'NR',
    },
    {
        'rowNumber': 4,
        'seatNumber': 23,
        'seatId': 'NR076',
        'd': 'M665.7,319.1c4.9,5.5,9.6,11.2,14,17.1l-20,15c-4-5.3-8.2-10.4-12.6-15.3L665.7,319.1z',
        'personId': 3887,
        'rat': 'NR',
    },
    {
        'rowNumber': 4,
        'seatNumber': 24,
        'seatId': 'NR078',
        'd': 'M682,339.2c4.4,5.9,8.5,12,12.4,18.3l-21.3,13.1c-3.5-5.6-7.2-11.1-11.1-16.4L682,339.2z',
        'personId': 4166,
        'rat': 'NR',
    },
    {
        'rowNumber': 4,
        'seatNumber': 25,
        'seatId': 'NR080',
        'd': 'M696.4,360.8c3.8,6.3,7.4,12.8,10.7,19.3l-22.4,11.1c-3-5.9-6.2-11.7-9.6-17.3L696.4,360.8z',
        'personId': 3885,
        'rat': 'NR',
    },
    {
        'rowNumber': 4,
        'seatNumber': 26,
        'seatId': 'NR082',
        'd': 'M708.8,383.5c3.2,6.6,6.2,13.4,8.9,20.2l-23.3,9c-2.4-6.1-5.1-12.2-7.9-18.1L708.8,383.5z',
        'personId': 4169,
        'rat': 'NR',
    },
    {
        'rowNumber': 4,
        'seatNumber': 27,
        'seatId': 'NR084',
        'd': 'M719,407.4c2.6,6.9,4.9,13.9,7,21l-24.1,6.8c-1.8-6.3-3.9-12.6-6.2-18.8L719,407.4z',
        'personId': 4156,
        'rat': 'NR',
    },
    {
        'rowNumber': 4,
        'seatNumber': 28,
        'seatId': 'NR086',
        'd': 'M727,432c2,7.1,3.6,14.3,5,21.5l-24.6,4.6c-1.3-6.5-2.8-12.9-4.5-19.3L727,432z',
        'personId': 3910,
        'rat': 'NR',
    },
    {
        'rowNumber': 4,
        'seatNumber': 29,
        'seatId': 'NR088',
        'd': 'M732.7,457.3c1.3,7.3,2.3,14.6,3,21.9l-24.9,2.3c-0.7-6.6-1.6-13.1-2.7-19.6L732.7,457.3z',
        'personId': 4164,
        'rat': 'NR',
    },
    {
        'rowNumber': 4,
        'seatNumber': 30,
        'seatId': 'NR090',
        'd': 'M736.1,483c0.6,7.3,1,14.7,1,22.1h-25c0-6.6-0.4-13.2-0.9-19.8L736.1,483z',
        'personId': 1142,
        'rat': 'NR',
    },
    {
        'rowNumber': 5,
        'seatNumber': 1,
        'seatId': 'NR091',
        'd': 'M115.2,504.7c0.1-7.7,0.4-15.3,0.9-23l24.9,2c-0.5,7-0.8,13.9-0.9,20.9h-24.9V504.7z',
        'personId': 4203,
        'rat': 'NR',
    },
    {
        'rowNumber': 5,
        'seatNumber': 2,
        'seatId': 'NR093',
        'd': 'M116.5,477.1c0.7-7.6,1.6-15.2,2.8-22.8l24.7,4.1c-1.1,6.9-1.9,13.8-2.6,20.8L116.5,477.1z',
        'personId': 4106,
        'rat': 'NR',
    },
    {
        'rowNumber': 5,
        'seatNumber': 3,
        'seatId': 'NR095',
        'd': 'M120,449.7c1.3-7.6,2.8-15.1,4.6-22.5l24.3,6c-1.6,6.8-3.1,13.6-4.2,20.5L120,449.7z',
        'personId': 4131,
        'rat': 'NR',
    },
    {
        'rowNumber': 5,
        'seatNumber': 4,
        'seatId': 'NR097',
        'd': 'M125.8,422.7c1.9-7.4,4.1-14.8,6.5-22.1l23.7,8c-2.2,6.6-4.2,13.3-5.9,20.1L125.8,422.7z',
        'personId': 4123,
        'rat': 'NR',
    },
    {
        'rowNumber': 5,
        'seatNumber': 5,
        'seatId': 'NR099',
        'd': 'M133.7,396.3c2.5-7.2,5.2-14.4,8.2-21.5l23,9.9c-2.7,6.4-5.2,13-7.5,19.6L133.7,396.3z',
        'personId': 4109,
        'rat': 'NR',
    },
    {
        'rowNumber': 5,
        'seatNumber': 6,
        'seatId': 'NR101',
        'd': 'M143.8,370.6c3.1-7,6.4-13.9,10-20.7l22.1,11.7c-3.2,6.2-6.3,12.5-9.1,18.9L143.8,370.6z',
        'personId': 4076,
        'rat': 'NR',
    },
    {
        'rowNumber': 5,
        'seatNumber': 7,
        'seatId': 'NR103',
        'd': 'M155.9,345.8c3.6-6.7,7.5-13.4,11.6-19.8l21,13.5c-3.7,5.9-7.3,11.9-10.6,18.1L155.9,345.8z',
        'personId': 354,
        'rat': 'NR',
    },
    {
        'rowNumber': 5,
        'seatNumber': 8,
        'seatId': 'NR105',
        'd': 'M170,322.1c4.2-6.4,8.6-12.7,13.2-18.8l19.9,15.2c-4.2,5.6-8.2,11.3-12,17.2L170,322.1z',
        'personId': 4061,
        'rat': 'NR',
    },
    {
        'rowNumber': 5,
        'seatNumber': 9,
        'seatId': 'NR107',
        'd': 'M186,299.6c4.7-6.1,9.6-12,14.7-17.7l18.6,16.7c-4.6,5.2-9.1,10.6-13.4,16.1L186,299.6z',
        'personId': 4030,
        'rat': 'NR',
    },
    {
        'rowNumber': 5,
        'seatNumber': 10,
        'seatId': 'NR109',
        'd': 'M220.3,261.5c5.5-5.3,11.3-10.4,17.2-15.3l15.8,19.3c-5.4,4.5-10.6,9.1-15.7,13.9L220.3,261.5z',
        'personId': 4182,
        'rat': 'NR',
    },
    {
        'rowNumber': 5,
        'seatNumber': 11,
        'seatId': 'NR111',
        'd': 'M241.1,243.3c6-4.8,12.1-9.4,18.4-13.8l14.2,20.6c-5.7,4-11.3,8.2-16.7,12.6L241.1,243.3z',
        'personId': 4183,
        'rat': 'NR',
    },
    {
        'rowNumber': 5,
        'seatNumber': 12,
        'seatId': 'NR113',
        'd': 'M263.2,226.9c6.3-4.3,12.8-8.4,19.4-12.3l12.5,21.7c-6,3.5-11.9,7.3-17.7,11.2L263.2,226.9z',
        'personId': 4212,
        'rat': 'NR',
    },
    {
        'rowNumber': 5,
        'seatNumber': 13,
        'seatId': 'NR115',
        'd': 'M286.6,212.3c6.7-3.8,13.5-7.3,20.4-10.7l10.7,22.6c-6.3,3-12.5,6.3-18.6,9.7L286.6,212.3z',
        'personId': 4180,
        'rat': 'NR',
    },
    {
        'rowNumber': 5,
        'seatNumber': 14,
        'seatId': 'NR117',
        'd': 'M311.2,199.6c6.9-3.2,14-6.2,21.2-9l8.8,23.4c-6.5,2.5-12.9,5.2-19.3,8.2L311.2,199.6z',
        'personId': 4181,
        'rat': 'NR',
    },
    {
        'rowNumber': 5,
        'seatNumber': 15,
        'seatId': 'NR119',
        'd': 'M336.7,189c7.2-2.7,14.5-5.1,21.8-7.2l6.9,24c-6.7,2-13.3,4.2-19.9,6.6L336.7,189z',
        'personId': 4085,
        'rat': 'NR',
    },
    {
        'rowNumber': 5,
        'seatNumber': 16,
        'seatId': 'NR121',
        'd': 'M362.9,180.5c7.4-2.1,14.8-3.9,22.3-5.4l4.9,24.5c-6.8,1.4-13.6,3.1-20.4,4.9L362.9,180.5z',
        'personId': 4031,
        'rat': 'NR',
    },
    {
        'rowNumber': 5,
        'seatNumber': 17,
        'seatId': 'NR123',
        'd': 'M389.8,174.2c7.5-1.5,15.1-2.7,22.7-3.6l2.9,24.8c-6.9,0.9-13.8,2-20.7,3.3L389.8,174.2z',
        'personId': 4036,
        'rat': 'NR',
    },
    {
        'rowNumber': 5,
        'seatNumber': 18,
        'seatId': 'NR125',
        'd': 'M417.1,170c7.6-0.8,15.3-1.4,22.9-1.7l0.9,25c-7,0.3-13.9,0.8-20.9,1.6L417.1,170z',
        'personId': 74,
        'rat': 'NR',
    },
    {
        'rowNumber': 5,
        'seatNumber': 19,
        'seatId': 'NR092',
        'd': 'M468.3,168.3c7.7,0.3,15.3,0.9,22.9,1.7l-2.9,24.8c-6.9-0.8-13.9-1.3-20.9-1.6L468.3,168.3z',
        'personId': 4209,
        'rat': 'NR',
    },
    {
        'rowNumber': 5,
        'seatNumber': 20,
        'seatId': 'NR094',
        'd': 'M495.8,170.6c7.6,0.9,15.2,2.1,22.7,3.6l-4.9,24.5c-6.9-1.3-13.8-2.4-20.7-3.3L495.8,170.6z',
        'personId': 4194,
        'rat': 'NR',
    },
    {
        'rowNumber': 5,
        'seatNumber': 21,
        'seatId': 'NR096',
        'd': 'M523,175.1c7.5,1.6,15,3.4,22.3,5.4l-6.9,24c-6.7-1.9-13.5-3.5-20.4-4.9L523,175.1z',
        'personId': 4202,
        'rat': 'NR',
    },
    {
        'rowNumber': 5,
        'seatNumber': 22,
        'seatId': 'NR098',
        'd': 'M549.8,181.8c7.4,2.2,14.6,4.6,21.8,7.2l-8.8,23.4c-6.6-2.4-13.2-4.6-19.9-6.6L549.8,181.8z',
        'personId': 4192,
        'rat': 'NR',
    },
    {
        'rowNumber': 5,
        'seatNumber': 23,
        'seatId': 'NR100',
        'd': 'M575.9,190.6c7.2,2.8,14.2,5.7,21.2,9l-10.7,22.6c-6.3-2.9-12.8-5.7-19.3-8.2L575.9,190.6z',
        'personId': 4193,
        'rat': 'NR',
    },
    {
        'rowNumber': 5,
        'seatNumber': 24,
        'seatId': 'NR102',
        'd': 'M601.3,201.6c6.9,3.3,13.7,6.9,20.4,10.7L609.2,234c-6.1-3.4-12.3-6.7-18.6-9.7L601.3,201.6z',
        'personId': 4190,
        'rat': 'NR',
    },
    {
        'rowNumber': 5,
        'seatNumber': 25,
        'seatId': 'NR104',
        'd': 'M625.6,214.6c6.6,3.9,13.1,8,19.4,12.3l-14.2,20.6c-5.8-3.9-11.7-7.7-17.7-11.2L625.6,214.6z',
        'personId': 4188,
        'rat': 'NR',
    },
    {
        'rowNumber': 5,
        'seatNumber': 26,
        'seatId': 'NR106',
        'd': 'M648.9,229.5c6.3,4.4,12.4,9,18.4,13.8l-15.8,19.3c-5.4-4.4-11-8.6-16.7-12.6L648.9,229.5z',
        'personId': 4208,
        'rat': 'NR',
    },
    {
        'rowNumber': 5,
        'seatNumber': 27,
        'seatId': 'NR108',
        'd': 'M670.8,246.3c5.9,4.9,11.6,10,17.2,15.3l-17.4,18c-5.1-4.8-10.3-9.5-15.7-13.9L670.8,246.3z',
        'personId': 4187,
        'rat': 'NR',
    },
    {
        'rowNumber': 5,
        'seatNumber': 28,
        'seatId': 'NR110',
        'd': 'M707.6,281.9c5.1,5.7,10,11.6,14.7,17.7l-19.9,15.2c-4.3-5.5-8.7-10.9-13.4-16.1L707.6,281.9z',
        'personId': 3883,
        'rat': 'NR',
    },
    {
        'rowNumber': 5,
        'seatNumber': 29,
        'seatId': 'NR112',
        'd': 'M725.1,303.2c4.6,6.1,9,12.4,13.2,18.8l-21,13.5c-3.8-5.9-7.8-11.6-12-17.2L725.1,303.2z',
        'personId': 4168,
        'rat': 'NR',
    },
    {
        'rowNumber': 5,
        'seatNumber': 30,
        'seatId': 'NR114',
        'd': 'M740.8,326c4.1,6.5,8,13.1,11.6,19.8l-22.1,11.7c-3.3-6.1-6.9-12.2-10.6-18.1L740.8,326z',
        'personId': 4159,
        'rat': 'NR',
    },
    {
        'rowNumber': 5,
        'seatNumber': 31,
        'seatId': 'NR116',
        'd': 'M754.5,349.9c3.6,6.8,6.9,13.7,10,20.7l-23,9.9c-2.8-6.4-5.8-12.7-9.1-18.9L754.5,349.9z',
        'personId': 4067,
        'rat': 'NR',
    },
    {
        'rowNumber': 5,
        'seatNumber': 32,
        'seatId': 'NR118',
        'd': 'M766.3,374.8c3,7.1,5.7,14.2,8.2,21.5l-23.7,8c-2.3-6.6-4.8-13.1-7.5-19.6L766.3,374.8z',
        'personId': 4098,
        'rat': 'NR',
    },
    {
        'rowNumber': 5,
        'seatNumber': 33,
        'seatId': 'NR120',
        'd': 'M776,400.7c2.4,7.3,4.6,14.6,6.5,22.1l-24.3,6c-1.7-6.8-3.7-13.5-5.9-20.1L776,400.7z',
        'personId': 3898,
        'rat': 'NR',
    },
    {
        'rowNumber': 5,
        'seatNumber': 34,
        'seatId': 'NR122',
        'd': 'M783.6,427.2c1.8,7.4,3.4,15,4.6,22.5l-24.7,4.1c-1.2-6.9-2.6-13.7-4.2-20.5L783.6,427.2z',
        'personId': 4154,
        'rat': 'NR',
    },
    {
        'rowNumber': 5,
        'seatNumber': 35,
        'seatId': 'NR124',
        'd': 'M789,454.3c1.2,7.6,2.1,15.2,2.8,22.8l-24.9,2c-0.6-7-1.5-13.9-2.6-20.8L789,454.3z',
        'personId': 4157,
        'rat': 'NR',
    },
    {
        'rowNumber': 5,
        'seatNumber': 36,
        'seatId': 'NR126',
        'd': 'M792.2,481.7c0.6,7.6,0.9,15.3,0.9,23h-25c-0.1-7-0.3-14-0.9-20.9L792.2,481.7z',
        'personId': 1111,
        'rat': 'NR',
    },
    {
        'rowNumber': 6,
        'seatNumber': 1,
        'seatId': 'NR127',
        'd': 'M59.2,504.3c0.1-7.8,0.3-15.7,0.9-23.5l24.9,1.8c-0.5,7.2-0.7,14.5-0.8,21.7H59.2z',
        'personId': 1125,
        'rat': 'NR',
    },
    {
        'rowNumber': 6,
        'seatNumber': 2,
        'seatId': 'NR129',
        'd': 'M60.4,475.4c0.6-7.8,1.5-15.6,2.6-23.4l24.7,3.7c-1,7.2-1.8,14.4-2.4,21.6L60.4,475.4z',
        'personId': 1131,
        'rat': 'NR',
    },
    {
        'rowNumber': 6,
        'seatNumber': 3,
        'seatId': 'NR131',
        'd': 'M63.8,446.6c1.2-7.8,2.6-15.5,4.3-23.1l24.4,5.5c-1.5,7.1-2.8,14.2-4,21.3L63.8,446.6z',
        'personId': 4069,
        'rat': 'NR',
    },
    {
        'rowNumber': 6,
        'seatNumber': 4,
        'seatId': 'NR133',
        'd': 'M69.3,418.2c1.8-7.6,3.8-15.2,6-22.8l23.9,7.2c-2,6.9-3.9,13.9-5.5,21L69.3,418.2z',
        'personId': 1120,
        'rat': 'NR',
    },
    {
        'rowNumber': 6,
        'seatNumber': 5,
        'seatId': 'NR135',
        'd': 'M76.8,390.2c2.3-7.5,4.9-14.9,7.6-22.3l23.3,9c-2.5,6.8-4.9,13.6-7,20.5L76.8,390.2z',
        'personId': 4213,
        'rat': 'NR',
    },
    {
        'rowNumber': 6,
        'seatNumber': 6,
        'seatId': 'NR137',
        'd': 'M86.4,362.9c2.9-7.3,5.9-14.5,9.2-21.7l22.6,10.6c-3,6.6-5.9,13.2-8.5,20L86.4,362.9z',
        'personId': 4115,
        'rat': 'NR',
    },
    {
        'rowNumber': 6,
        'seatNumber': 7,
        'seatId': 'NR139',
        'd': 'M97.9,336.4c3.4-7.1,7-14.1,10.8-20.9l21.8,12.3c-3.5,6.3-6.8,12.8-10,19.3L97.9,336.4z',
        'personId': 4134,
        'rat': 'NR',
    },
    {
        'rowNumber': 6,
        'seatNumber': 8,
        'seatId': 'NR141',
        'd': 'M111.4,310.7c3.9-6.8,8-13.5,12.3-20.1l20.8,13.8c-4,6.1-7.7,12.2-11.3,18.5L111.4,310.7z',
        'personId': 4196,
        'rat': 'NR',
    },
    {
        'rowNumber': 6,
        'seatNumber': 9,
        'seatId': 'NR143',
        'd': 'M126.6,286.1c4.4-6.5,9-12.9,13.7-19.1l19.8,15.3c-4.4,5.8-8.6,11.6-12.7,17.6L126.6,286.1z',
        'personId': 1156,
        'rat': 'NR',
    },
    {
        'rowNumber': 6,
        'seatNumber': 10,
        'seatId': 'NR145',
        'd': 'M143.7,262.8c4.9-6.2,9.9-12.2,15.1-18.1l18.6,16.7c-4.8,5.4-9.4,11-13.9,16.7L143.7,262.8z',
        'personId': 1147,
        'rat': 'NR',
    },
    {
        'rowNumber': 6,
        'seatNumber': 11,
        'seatId': 'NR147',
        'd': 'M181.7,221c5.7-5.4,11.5-10.7,17.5-15.7l16,19.2c-5.5,4.7-10.9,9.5-16.2,14.5L181.7,221z',
        'personId': 4101,
        'rat': 'NR',
    },
    {
        'rowNumber': 6,
        'seatNumber': 12,
        'seatId': 'NR149',
        'd': 'M203.4,201.8c6.1-5,12.3-9.8,18.6-14.4l14.6,20.3c-5.9,4.3-11.6,8.7-17.2,13.3L203.4,201.8z',
        'personId': 4087,
        'rat': 'NR',
    },
    {
        'rowNumber': 6,
        'seatNumber': 13,
        'seatId': 'NR151',
        'd': 'M226.4,184.2c6.4-4.5,13-8.9,19.6-13l13,21.3c-6.1,3.8-12.2,7.8-18.1,12L226.4,184.2z',
        'personId': 4072,
        'rat': 'NR',
    },
    {
        'rowNumber': 6,
        'seatNumber': 14,
        'seatId': 'NR153',
        'd': 'M250.7,168.4c6.7-4,13.6-7.9,20.5-11.5l11.4,22.2c-6.4,3.4-12.7,6.9-18.9,10.6L250.7,168.4z',
        'personId': 4086,
        'rat': 'NR',
    },
    {
        'rowNumber': 6,
        'seatNumber': 15,
        'seatId': 'NR155',
        'd': 'M276,154.4c7-3.5,14.1-6.9,21.3-10l9.8,23c-6.6,2.9-13.2,5.9-19.7,9.2L276,154.4z',
        'personId': 4138,
        'rat': 'NR',
    },
    {
        'rowNumber': 6,
        'seatNumber': 16,
        'seatId': 'NR157',
        'd': 'M302.3,142.3c7.2-3,14.6-5.8,22-8.4l8.1,23.7c-6.8,2.4-13.6,5-20.3,7.7L302.3,142.3z',
        'personId': 4040,
        'rat': 'NR',
    },
    {
        'rowNumber': 6,
        'seatNumber': 17,
        'seatId': 'NR159',
        'd': 'M329.4,132.2c7.4-2.5,15-4.7,22.5-6.8l6.3,24.2c-7,1.9-13.9,4-20.8,6.2L329.4,132.2z',
        'personId': 4052,
        'rat': 'NR',
    },
    {
        'rowNumber': 6,
        'seatNumber': 18,
        'seatId': 'NR161',
        'd': 'M357.2,124.1c7.6-1.9,15.3-3.6,23-5.1l4.5,24.6c-7.1,1.4-14.2,2.9-21.2,4.7L357.2,124.1z',
        'personId': 4063,
        'rat': 'NR',
    },
    {
        'rowNumber': 6,
        'seatNumber': 19,
        'seatId': 'NR163',
        'd': 'M385.5,118c7.7-1.4,15.5-2.5,23.3-3.4l2.7,24.9c-7.2,0.8-14.4,1.9-21.5,3.1L385.5,118z',
        'personId': 4096,
        'rat': 'NR',
    },
    {
        'rowNumber': 6,
        'seatNumber': 20,
        'seatId': 'NR165',
        'd': 'M414.2,114c7.8-0.8,15.6-1.4,23.5-1.7l0.9,25c-7.2,0.3-14.5,0.8-21.7,1.6L414.2,114z',
        'personId': 1104,
        'rat': 'NR',
    },
    {
        'rowNumber': 6,
        'seatNumber': 21,
        'seatId': 'NR128',
        'd': 'M470.6,112.3c7.8,0.3,15.7,0.9,23.5,1.7l-2.7,24.9c-7.2-0.7-14.4-1.2-21.7-1.6L470.6,112.3z',
        'personId': 3877,
        'rat': 'NR',
    },
    {
        'rowNumber': 6,
        'seatNumber': 22,
        'seatId': 'NR130',
        'd': 'M499.5,114.6c7.8,0.9,15.6,2,23.3,3.4l-4.5,24.6c-7.1-1.3-14.3-2.3-21.5-3.1L499.5,114.6z',
        'personId': 4054,
        'rat': 'NR',
    },
    {
        'rowNumber': 6,
        'seatNumber': 23,
        'seatId': 'NR132',
        'd': 'M528.1,119c7.7,1.5,15.4,3.2,23,5.1l-6.3,24.2c-7-1.8-14.1-3.3-21.2-4.7L528.1,119z',
        'personId': 4140,
        'rat': 'NR',
    },
    {
        'rowNumber': 6,
        'seatNumber': 24,
        'seatId': 'NR134',
        'd': 'M556.3,125.4c7.6,2,15.1,4.3,22.5,6.8l-8.1,23.7c-6.9-2.3-13.8-4.4-20.8-6.2L556.3,125.4z',
        'personId': 4124,
        'rat': 'NR',
    },
    {
        'rowNumber': 6,
        'seatNumber': 25,
        'seatId': 'NR136',
        'd': 'M584,133.9c7.4,2.6,14.7,5.4,22,8.4l-9.8,23c-6.7-2.8-13.4-5.4-20.3-7.7L584,133.9z',
        'personId': 4079,
        'rat': 'NR',
    },
    {
        'rowNumber': 6,
        'seatNumber': 26,
        'seatId': 'NR138',
        'd': 'M611,144.5c7.2,3.1,14.3,6.4,21.3,10l-11.4,22.2c-6.5-3.3-13-6.3-19.7-9.2L611,144.5z',
        'personId': 4141,
        'rat': 'NR',
    },
    {
        'rowNumber': 6,
        'seatNumber': 27,
        'seatId': 'NR140',
        'd': 'M637.1,156.9c7,3.6,13.8,7.5,20.5,11.5l-13,21.3c-6.2-3.7-12.5-7.3-18.9-10.6L637.1,156.9z',
        'personId': 4077,
        'rat': 'NR',
    },
    {
        'rowNumber': 6,
        'seatNumber': 28,
        'seatId': 'NR142',
        'd': 'M662.2,171.3c6.7,4.1,13.2,8.5,19.6,13l-14.6,20.3c-5.9-4.2-12-8.2-18.1-12L662.2,171.3z',
        'personId': 4060,
        'rat': 'NR',
    },
    {
        'rowNumber': 6,
        'seatNumber': 29,
        'seatId': 'NR146',
        'd': 'M686.3,187.4c6.3,4.6,12.6,9.4,18.6,14.4l-16,19.2c-5.6-4.6-11.3-9-17.2-13.3L686.3,187.4z',
        'personId': 1139,
        'rat': 'NR',
    },
    {
        'rowNumber': 6,
        'seatNumber': 30,
        'seatId': 'NR148',
        'd': 'M709.1,205.3c6,5.1,11.8,10.3,17.5,15.7l-17.4,18c-5.2-5-10.6-9.8-16.2-14.5L709.1,205.3z',
        'personId': 4144,
        'rat': 'NR',
    },
    {
        'rowNumber': 6,
        'seatNumber': 31,
        'seatId': 'NR150',
        'd': 'M749.5,244.7c5.2,5.9,10.2,11.9,15.1,18.1l-19.8,15.3c-4.5-5.7-9.1-11.2-13.9-16.7L749.5,244.7z',
        'personId': 4172,
        'rat': 'NR',
    },
    {
        'rowNumber': 6,
        'seatNumber': 32,
        'seatId': 'NR152',
        'd': 'M767.9,267c4.8,6.2,9.3,12.6,13.7,19.1L760.8,300c-4-6-8.3-11.9-12.7-17.6L767.9,267z',
        'personId': 4065,
        'rat': 'NR',
    },
    {
        'rowNumber': 6,
        'seatNumber': 33,
        'seatId': 'NR154',
        'd': 'M784.6,290.7c4.3,6.6,8.4,13.3,12.3,20.1L775.2,323c-3.6-6.3-7.4-12.5-11.3-18.5L784.6,290.7z',
        'personId': 3890,
        'rat': 'NR',
    },
    {
        'rowNumber': 6,
        'seatNumber': 34,
        'seatId': 'NR156',
        'd': 'M799.6,315.4c3.8,6.9,7.4,13.8,10.8,20.9L787.8,347c-3.1-6.5-6.4-13-10-19.3L799.6,315.4z',
        'personId': 4167,
        'rat': 'NR',
    },
    {
        'rowNumber': 6,
        'seatNumber': 35,
        'seatId': 'NR158',
        'd': 'M812.7,341.3c3.3,7.1,6.4,14.3,9.2,21.7l-23.3,9c-2.6-6.7-5.5-13.4-8.5-20L812.7,341.3z',
        'personId': 4053,
        'rat': 'NR',
    },
    {
        'rowNumber': 6,
        'seatNumber': 36,
        'seatId': 'NR160',
        'd': 'M823.9,368c2.8,7.3,5.3,14.8,7.6,22.3l-23.9,7.2c-2.1-6.9-4.5-13.8-7-20.5L823.9,368z',
        'personId': '#NV',
        'rat': 'NR',
    },
    {
        'rowNumber': 6,
        'seatNumber': 37,
        'seatId': 'NR162',
        'd': 'M833.1,395.4c2.2,7.5,4.2,15.1,6,22.8l-24.4,5.5c-1.6-7.1-3.5-14.1-5.5-21L833.1,395.4z',
        'personId': 519,
        'rat': 'NR',
    },
    {
        'rowNumber': 6,
        'seatNumber': 38,
        'seatId': 'NR164',
        'd': 'M840.2,423.5c1.7,7.7,3.1,15.4,4.3,23.1l-24.7,3.7c-1.1-7.2-2.4-14.3-4-21.3L840.2,423.5z',
        'personId': 3902,
        'rat': 'NR',
    },
    {
        'rowNumber': 6,
        'seatNumber': 39,
        'seatId': 'NR166',
        'd': 'M845.3,452c1.1,7.8,2,15.6,2.6,23.4l-24.9,1.8c-0.6-7.2-1.4-14.4-2.4-21.6L845.3,452z',
        'personId': 91,
        'rat': 'NR',
    },
    {
        'rowNumber': 6,
        'seatNumber': 40,
        'seatId': 'NR168',
        'd': 'M848.3,480.8c0.5,7.8,0.8,15.7,0.9,23.5h-25c-0.1-7.2-0.3-14.5-0.8-21.7L848.3,480.8z',
        'personId': 3872,
        'rat': 'NR',
    },
    {
        'rowNumber': 7,
        'seatNumber': 1,
        'seatId': 'NR167',
        'd': 'M34.2,342.5c2.6-6.6,5.3-13.2,8.3-19.7l22.7,10.4c-2.7,6-5.3,12.1-7.7,18.3L34.2,342.5z',
        'personId': 1129,
        'rat': 'NR',
    },
    {
        'rowNumber': 7,
        'seatNumber': 2,
        'seatId': 'NR169',
        'd': 'M45,317.1c3-6.5,6.1-12.8,9.4-19.1l22.1,11.7c-3.1,5.9-6,11.8-8.8,17.8L45,317.1z',
        'personId': 4057,
        'rat': 'NR',
    },
    {
        'rowNumber': 7,
        'seatNumber': 3,
        'seatId': 'NR171',
        'd': 'M57.4,292.5c3.4-6.3,6.9-12.4,10.6-18.5l21.3,13.1c-3.4,5.7-6.7,11.4-9.8,17.2L57.4,292.5z',
        'personId': 4121,
        'rat': 'NR',
    },
    {
        'rowNumber': 7,
        'seatNumber': 4,
        'seatId': 'NR173',
        'd': 'M71.2,268.7c3.8-6,7.7-12,11.7-17.8l20.5,14.3c-3.7,5.4-7.4,11-10.9,16.6L71.2,268.7z',
        'personId': 4032,
        'rat': 'NR',
    },
    {
        'rowNumber': 7,
        'seatNumber': 5,
        'seatId': 'NR175',
        'd': 'M86.5,245.8c4.1-5.8,8.4-11.5,12.8-17.1l19.6,15.6c-4.1,5.2-8,10.5-11.9,15.9L86.5,245.8z',
        'personId': 1279,
        'rat': 'NR',
    },
    {
        'rowNumber': 7,
        'seatNumber': 6,
        'seatId': 'NR177',
        'd': 'M103.1,223.8c4.5-5.5,9.1-11,13.8-16.3l18.6,16.7c-4.4,4.9-8.7,10-12.8,15.1L103.1,223.8z',
        'personId': 487,
        'rat': 'NR',
    },
    {
        'rowNumber': 7,
        'seatNumber': 7,
        'seatId': 'NR179',
        'd': 'M143.1,180.4c5.8-5.5,11.7-10.8,17.7-16l16.1,19.1c-5.6,4.8-11.1,9.8-16.5,14.9L143.1,180.4z',
        'personId': 4118,
        'rat': 'NR',
    },
    {
        'rowNumber': 7,
        'seatNumber': 8,
        'seatId': 'NR181',
        'd': 'M165.5,160.4c6.1-5.1,12.4-10,18.7-14.8l14.8,20.1c-5.9,4.4-11.7,9-17.4,13.7L165.5,160.4z',
        'personId': 4079,
        'rat': 'NR',
    },
    {
        'rowNumber': 7,
        'seatNumber': 9,
        'seatId': 'NR183',
        'd': 'M189.2,142c6.4-4.7,13-9.2,19.7-13.5l13.4,21.1c-6.2,4-12.3,8.2-18.3,12.5L189.2,142z',
        'personId': 4120,
        'rat': 'NR',
    },
    {
        'rowNumber': 7,
        'seatNumber': 10,
        'seatId': 'NR185',
        'd': 'M214.1,125.2c6.7-4.2,13.6-8.3,20.5-12.2l12,21.9c-6.5,3.6-12.8,7.4-19.1,11.3L214.1,125.2z',
        'personId': 4070,
        'rat': 'NR',
    },
    {
        'rowNumber': 7,
        'seatNumber': 11,
        'seatId': 'NR187',
        'd': 'M240.1,110c7-3.8,14.1-7.4,21.3-10.8l10.5,22.7c-6.7,3.2-13.3,6.5-19.8,10L240.1,110z',
        'personId': 1288,
        'rat': 'NR',
    },
    {
        'rowNumber': 7,
        'seatNumber': 12,
        'seatId': 'NR189',
        'd': 'M267,96.6c7.2-3.3,14.6-6.4,22-9.3l9,23.3c-6.9,2.7-13.7,5.6-20.4,8.7L267,96.6z',
        'personId': 1337,
        'rat': 'NR',
    },
    {
        'rowNumber': 7,
        'seatNumber': 13,
        'seatId': 'NR191',
        'd': 'M294.8,85.1c7.4-2.8,14.9-5.4,22.5-7.8l7.4,23.9c-7,2.2-14,4.7-21,7.3L294.8,85.1z',
        'personId': 3904,
        'rat': 'NR',
    },
    {
        'rowNumber': 7,
        'seatNumber': 14,
        'seatId': 'NR193',
        'd': 'M323.2,75.4c7.6-2.3,15.3-4.4,23-6.3l5.8,24.3c-7.2,1.8-14.3,3.7-21.4,5.9L323.2,75.4z',
        'personId': 1109,
        'rat': 'NR',
    },
    {
        'rowNumber': 7,
        'seatNumber': 15,
        'seatId': 'NR195',
        'd': 'M352.2,67.7c7.7-1.8,15.5-3.4,23.4-4.8l4.2,24.6c-7.3,1.3-14.5,2.8-21.7,4.4L352.2,67.7z',
        'personId': 4056,
        'rat': 'NR',
    },
    {
        'rowNumber': 7,
        'seatNumber': 16,
        'seatId': 'NR197',
        'd': 'M381.7,61.8c7.8-1.3,15.7-2.3,23.6-3.2l2.5,24.9c-7.4,0.8-14.7,1.8-22,3L381.7,61.8z',
        'personId': 1071,
        'rat': 'NR',
    },
    {
        'rowNumber': 7,
        'seatNumber': 17,
        'seatId': 'NR199',
        'd': 'M411.5,58c7.9-0.8,15.8-1.3,23.8-1.6l0.9,25c-7.4,0.3-14.8,0.8-22.1,1.5L411.5,58z',
        'personId': 502,
        'rat': 'NR',
    },
    {
        'rowNumber': 7,
        'seatNumber': 18,
        'seatId': 'NR168',
        'd': 'M473,56.4c7.9,0.3,15.9,0.9,23.8,1.6l-2.5,24.9c-7.4-0.7-14.7-1.2-22.1-1.5L473,56.4z',
        'personId': 3872,
        'rat': 'NR',
    },
    {
        'rowNumber': 7,
        'seatNumber': 19,
        'seatId': 'NR170',
        'd': 'M502.9,58.6c7.9,0.9,15.8,1.9,23.6,3.2l-4.2,24.6c-7.3-1.2-14.6-2.2-22-3L502.9,58.6z',
        'personId': 3888,
        'rat': 'NR',
    },
    {
        'rowNumber': 7,
        'seatNumber': 20,
        'seatId': 'NR172',
        'd': 'M532.7,62.9c7.8,1.4,15.6,3,23.4,4.8L550.2,92c-7.2-1.7-14.5-3.1-21.7-4.4L532.7,62.9z',
        'personId': 1137,
        'rat': 'NR',
    },
    {
        'rowNumber': 7,
        'seatNumber': 21,
        'seatId': 'NR174',
        'd': 'M562.1,69.1c7.7,1.9,15.4,4,23,6.3l-7.4,23.9c-7.1-2.1-14.2-4.1-21.4-5.9L562.1,69.1z',
        'personId': 3912,
        'rat': 'NR',
    },
    {
        'rowNumber': 7,
        'seatNumber': 22,
        'seatId': 'NR176',
        'd': 'M591,77.3c7.6,2.4,15.1,5,22.5,7.8l-9,23.3c-6.9-2.6-13.9-5-21-7.3L591,77.3z',
        'personId': 4116,
        'rat': 'NR',
    },
    {
        'rowNumber': 7,
        'seatNumber': 23,
        'seatId': 'NR178',
        'd': 'M619.3,87.3c7.4,2.9,14.7,6,22,9.3l-10.5,22.7c-6.7-3.1-13.5-6-20.4-8.7L619.3,87.3z',
        'personId': 3828,
        'rat': 'NR',
    },
    {
        'rowNumber': 7,
        'seatNumber': 24,
        'seatId': 'NR180',
        'd': 'M646.9,99.3c7.2,3.4,14.3,7,21.3,10.8l-12,21.9c-6.5-3.5-13.1-6.8-19.8-10L646.9,99.3z',
        'personId': 1122,
        'rat': 'NR',
    },
    {
        'rowNumber': 7,
        'seatNumber': 25,
        'seatId': 'NR182',
        'd': 'M673.6,113c6.9,3.9,13.8,7.9,20.5,12.2l-13.4,21.1c-6.3-3.9-12.6-7.7-19.1-11.3L673.6,113z',
        'personId': 1346,
        'rat': 'NR',
    },
    {
        'rowNumber': 7,
        'seatNumber': 26,
        'seatId': 'NR184',
        'd': 'M699.4,128.5c6.7,4.3,13.2,8.8,19.7,13.5l-14.8,20.1c-6-4.3-12.1-8.5-18.3-12.5L699.4,128.5z',
        'personId': 4142,
        'rat': 'NR',
    },
    {
        'rowNumber': 7,
        'seatNumber': 27,
        'seatId': 'NR186',
        'd': 'M724,145.7c6.4,4.8,12.6,9.7,18.7,14.8l-16.1,19.1c-5.7-4.7-11.5-9.3-17.4-13.7L724,145.7z',
        'personId': 3875,
        'rat': 'NR',
    },
    {
        'rowNumber': 7,
        'seatNumber': 28,
        'seatId': 'NR188',
        'd': 'M747.5,164.4c6,5.2,11.9,10.5,17.7,16l-17.4,18c-5.4-5.1-10.8-10.1-16.5-14.9L747.5,164.4z',
        'personId': 3895,
        'rat': 'NR',
    },
    {
        'rowNumber': 7,
        'seatNumber': 29,
        'seatId': 'NR190',
        'd': 'M791.4,207.5c4.7,5.3,9.3,10.8,13.8,16.3l-19.6,15.6c-4.2-5.1-8.4-10.2-12.8-15.1L791.4,207.5z',
        'personId': 214,
        'rat': 'NR',
    },
    {
        'rowNumber': 7,
        'seatNumber': 30,
        'seatId': 'NR192',
        'd': 'M809,228.7c4.4,5.6,8.6,11.3,12.8,17.1l-20.5,14.3c-3.8-5.4-7.8-10.7-11.9-15.9L809,228.7z',
        'personId': 4090,
        'rat': 'NR',
    },
    {
        'rowNumber': 7,
        'seatNumber': 31,
        'seatId': 'NR194',
        'd': 'M825.4,250.9c4,5.9,7.9,11.8,11.7,17.8l-21.3,13.1c-3.5-5.6-7.1-11.1-10.9-16.6L825.4,250.9z',
        'personId': 1119,
        'rat': 'NR',
    },
    {
        'rowNumber': 7,
        'seatNumber': 32,
        'seatId': 'NR196',
        'd': 'M840.3,274c3.7,6.1,7.2,12.3,10.6,18.5l-22.1,11.7c-3.1-5.8-6.4-11.5-9.8-17.2L840.3,274z',
        'personId': 4100,
        'rat': 'NR',
    },
    {
        'rowNumber': 7,
        'seatNumber': 33,
        'seatId': 'NR198',
        'd': 'M853.8,298c3.3,6.3,6.4,12.7,9.4,19.1l-22.7,10.4c-2.8-6-5.7-11.9-8.8-17.8L853.8,298z',
        'personId': 307,
        'rat': 'NR',
    },
    {
        'rowNumber': 7,
        'seatNumber': 34,
        'seatId': 'NR200',
        'd': 'M865.8,322.8c2.9,6.5,5.7,13.1,8.3,19.7l-23.3,9c-2.4-6.2-5-12.2-7.7-18.3L865.8,322.8z',
        'personId': 1135,
        'rat': 'NR',
    },
];
//# sourceMappingURL=national-council.data.js.map

/***/ }),
/* 1027 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__national_council_data__ = __webpack_require__(1026);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NationalCouncilService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NationalCouncilService = /** @class */ (function () {
    function NationalCouncilService() {
    }
    NationalCouncilService.prototype.getSeats = function () {
        return __WEBPACK_IMPORTED_MODULE_1__national_council_data__["a" /* SEATS */];
    };
    NationalCouncilService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], NationalCouncilService);
    return NationalCouncilService;
}());

//# sourceMappingURL=national-council.service.js.map

/***/ }),
/* 1028 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__parliament_component__ = __webpack_require__(1005);
/* unused harmony export routes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });


// noinspection TypeScriptValidateTypes
var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_1__parliament_component__["a" /* Parliament */],
        children: []
    }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forChild(routes);
//# sourceMappingURL=parliament.routing.js.map

/***/ }),
/* 1029 */,
/* 1030 */,
/* 1031 */,
/* 1032 */,
/* 1033 */,
/* 1034 */,
/* 1035 */,
/* 1036 */,
/* 1037 */,
/* 1038 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, ".seat {\n  fill: white;\n  stroke: black;\n  stroke-width: 1pt; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 1039 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, ".seat {\n  fill: white;\n  stroke: black;\n  stroke-width: 1pt; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 1040 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, ".seat {\n  fill: white;\n  stroke: black;\n  stroke-width: 1pt; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 1041 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, ".seat {\n  fill: white;\n  stroke: black;\n  stroke-width: 1pt; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 1042 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, "@media screen and (min-width: 1620px) {\n  .row.shift-up > * {\n    margin-top: -573px; } }\n\n@media screen and (max-width: 1620px) {\n  .card.feed-panel.large-card {\n    height: 824px; } }\n\n.user-stats-card .card-title {\n  padding: 0 0 15px; }\n\n.blurCalendar {\n  height: 475px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 1043 */,
/* 1044 */,
/* 1045 */,
/* 1046 */,
/* 1047 */,
/* 1048 */,
/* 1049 */,
/* 1050 */,
/* 1051 */
/***/ (function(module, exports) {

module.exports = "<div class=\"svg-container\">\r\n  <svg id=\"svgId\" currentScale=\"1\" x=\"0\" y=\"0\" width=\"100%\" height=\"100%\" viewBox=\"0 0 599.9 407.5\" preserveAspectRatio=\"none\">\r\n    <!-- One Point per Seat-->\r\n       \r\n    <g *ngFor=\"let seat of seats\">\r\n      <path\r\n        class=\"seat\"  \r\n        (click)=\"navigateToProfile(seat.personId);\"\r\n        [attr.d]=\"seat.d\"\r\n      />\r\n      </g>  \r\n      </svg>\r\n</div>"

/***/ }),
/* 1052 */
/***/ (function(module, exports) {

module.exports = "<div class=\"svg-container\">\r\n  <svg id=\"svgId\" currentScale=\"1\" x=\"0\" y=\"0\" width=\"100%\" height=\"100%\" viewBox=\"0 0 929.4 646.2\" preserveAspectRatio=\"none\">\r\n    <!-- One Point per Seat-->\r\n       \r\n    <g *ngFor=\"let seat of seats\">\r\n      <path\r\n        class=\"seat\"\r\n        (click)=\"navigateToProfile(seat.personId);\"\r\n        [attr.d]=\"seat.d\"\r\n      />\r\n      </g>  \r\n      </svg>\r\n</div>\r\n\r\n<!-- [attr.stroke]=\"black\" -->\r\n<!--\r\n          //[attr.cx]=\"seat.cx\" \r\n        [attr.cy]=\"seat.cy\" \r\n        [attr.r]=\"10\" \r\nsvg.append(\"text\")\r\n.attr(\"x\",0)\r\n.attr(\"y\",70)\r\n.attr(\"font-family\",\"FontAwesome\")\r\n.attr('font-size', function(d) { return '70px';} )\r\n.text(function(d) { return '\\uf083'; }); \r\n-->"

/***/ }),
/* 1053 */
/***/ (function(module, exports) {

module.exports = "<div class=\"svg-container\">\r\n  <svg id=\"svgId\" currentScale=\"1\" x=\"0\" y=\"0\" width=\"100%\" height=\"100%\" viewBox=\"0 0 704.2 375.9\" preserveAspectRatio=\"none\">\r\n    <!-- One Point per Seat-->\r\n       \r\n    <g *ngFor=\"let seat of seats\">\r\n      <path\r\n        class=\"seat\"  \r\n        (click)=\"navigateToProfile(seat.personId);\"\r\n        [attr.d]=\"seat.d\"\r\n      />\r\n      </g>  \r\n      </svg>\r\n</div>"

/***/ }),
/* 1054 */
/***/ (function(module, exports) {

module.exports = "<div class=\"svg-container\">\r\n  <svg id=\"svgId\" currentScale=\"1\" x=\"0\" y=\"0\" width=\"100%\" height=\"100%\" viewBox=\"0 0 929.4 646.2\" preserveAspectRatio=\"none\">\r\n    <!-- One Point per Seat-->\r\n       \r\n    <g *ngFor=\"let seat of seats\">\r\n      <path\r\n        class=\"seat\"  \r\n        (click)=\"navigateToProfile(seat.personId);\"\r\n        [attr.d]=\"seat.d\"\r\n      />\r\n      </g>  \r\n      </svg>\r\n</div>"

/***/ }),
/* 1055 */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-md-8\">\r\n    <tile></tile>\r\n    <ba-card cardTitle=\"Statistik\" class=\"col-xlg-6 col-xl-6\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6\"><app-sentiments></app-sentiments></div>\r\n        <div class=\"col-md-6\"><app-mentions></app-mentions></div>\r\n      </div>\r\n    </ba-card>\r\n    <ba-card class=\"col-xlg-6 col-lg-6\" cardTitle=\"Bundesversammlung\">\r\n      <app-federal-assembly></app-federal-assembly>\r\n    </ba-card>\r\n    <ba-card class=\"col-xlg-6 col-lg-6\" cardTitle=\"Nationalrat\">\r\n      <app-national-council></app-national-council>\r\n     </ba-card>\r\n    <ba-card class=\"col-xlg-6 col-lg-6\" cardTitle=\"Ständerat\">\r\n      <app-council-of-states></app-council-of-states>\r\n     </ba-card>\r\n     <ba-card class=\"col-xlg-6 col-lg-6\" cardTitle=\"Bundesrat\">\r\n      <app-federal-council></app-federal-council>\r\n     </ba-card>\r\n  </div>\r\n  <div class=\"col-md-4\">\r\n    <ba-card cardTitle=\"Feed\"\r\n             baCardClass=\"large-card with-scroll feed-panel\">\r\n      <a class=\"twitter-timeline\" href=\"https://twitter.com/swiss_polytics/lists/schweizer-parlament\">A Twitter List by\r\n        TwitterDev</a>\r\n\r\n    </ba-card>\r\n  </div>\r\n</div>\r\n"

/***/ })
]));
//# sourceMappingURL=0.chunk.js.map