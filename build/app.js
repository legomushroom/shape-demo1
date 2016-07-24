/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "build/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _classCallCheck2 = __webpack_require__(2);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _possibleConstructorReturn2 = __webpack_require__(3);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(68);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _classlistPolyfill = __webpack_require__(76);

	var _classlistPolyfill2 = _interopRequireDefault(_classlistPolyfill);

	var _module = __webpack_require__(77);

	var _module2 = _interopRequireDefault(_module);

	var _triangleLines = __webpack_require__(78);

	var _triangleLines2 = _interopRequireDefault(_triangleLines);

	var _triangles = __webpack_require__(80);

	var _triangles2 = _interopRequireDefault(_triangles);

	var _greenScene = __webpack_require__(87);

	var _greenScene2 = _interopRequireDefault(_greenScene);

	var _circle = __webpack_require__(88);

	var _circle2 = _interopRequireDefault(_circle);

	var _logo = __webpack_require__(89);

	var _logo2 = _interopRequireDefault(_logo);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// require('css/blocks/mojs-player.postcss.css');
	// let CLASSES = require('css/blocks/mojs-player.postcss.css.json');

	// import MojsPlayer     from 'mojs-player'

	var Demo = function (_Module) {
	  (0, _inherits3.default)(Demo, _Module);

	  function Demo() {
	    (0, _classCallCheck3.default)(this, Demo);
	    return (0, _possibleConstructorReturn3.default)(this, _Module.apply(this, arguments));
	  }

	  /*
	    Method for initial module's render.
	    @private
	  */

	  Demo.prototype._render = function _render() {
	    var mainTimeline = new mojs.Timeline({
	      speed: 1.72,
	      precision: 0.01
	    }).add(new _triangles2.default()).add(new _greenScene2.default({ delay: 2700 })).add(new _circle2.default({ delay: 4000 })).add(new _logo2.default({ delay: 5900 }));
	    // .play();

	    mojs.pool = mojs.pool || {};
	    mojs.pool.shapeDemo1 = mainTimeline;
	    new MojsPlayer({ add: mainTimeline }).el.style['z-index'] = 10;
	  };

	  return Demo;
	}(_module2.default);

	new Demo();

	// if ( (typeof define === "function") && define.amd ) {
	//   define(function () { return MojsPlayer; });
	// }
	// if ( (typeof module === "object") && (typeof module.exports === "object") ) {
	//   module.exports = MojsPlayer;
	// }

	// let _global = ( typeof global !== 'undefined' ) ? global : window;
	// _global.MojsPlayer = MojsPlayer;

	exports.default = Demo;

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;

	exports.default = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _typeof2 = __webpack_require__(4);

	var _typeof3 = _interopRequireDefault(_typeof2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }

	  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
	};

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _iterator = __webpack_require__(5);

	var _iterator2 = _interopRequireDefault(_iterator);

	var _symbol = __webpack_require__(55);

	var _symbol2 = _interopRequireDefault(_symbol);

	var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default ? "symbol" : typeof obj; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
	  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
	} : function (obj) {
	  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
	};

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(6), __esModule: true };

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(7);
	__webpack_require__(51);
	module.exports = __webpack_require__(48)('iterator');

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $at  = __webpack_require__(8)(true);

	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(11)(String, 'String', function(iterated){
	  this._t = String(iterated); // target
	  this._i = 0;                // next index
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , index = this._i
	    , point;
	  if(index >= O.length)return {value: undefined, done: true};
	  point = $at(O, index);
	  this._i += point.length;
	  return {value: point, done: false};
	});

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(9)
	  , defined   = __webpack_require__(10);
	// true  -> String#at
	// false -> String#codePointAt
	module.exports = function(TO_STRING){
	  return function(that, pos){
	    var s = String(defined(that))
	      , i = toInteger(pos)
	      , l = s.length
	      , a, b;
	    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	      ? TO_STRING ? s.charAt(i) : a
	      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

/***/ },
/* 9 */
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 10 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY        = __webpack_require__(12)
	  , $export        = __webpack_require__(13)
	  , redefine       = __webpack_require__(28)
	  , hide           = __webpack_require__(18)
	  , has            = __webpack_require__(29)
	  , Iterators      = __webpack_require__(30)
	  , $iterCreate    = __webpack_require__(31)
	  , setToStringTag = __webpack_require__(47)
	  , getPrototypeOf = __webpack_require__(49)
	  , ITERATOR       = __webpack_require__(48)('iterator')
	  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
	  , FF_ITERATOR    = '@@iterator'
	  , KEYS           = 'keys'
	  , VALUES         = 'values';

	var returnThis = function(){ return this; };

	module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
	  $iterCreate(Constructor, NAME, next);
	  var getMethod = function(kind){
	    if(!BUGGY && kind in proto)return proto[kind];
	    switch(kind){
	      case KEYS: return function keys(){ return new Constructor(this, kind); };
	      case VALUES: return function values(){ return new Constructor(this, kind); };
	    } return function entries(){ return new Constructor(this, kind); };
	  };
	  var TAG        = NAME + ' Iterator'
	    , DEF_VALUES = DEFAULT == VALUES
	    , VALUES_BUG = false
	    , proto      = Base.prototype
	    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
	    , $default   = $native || getMethod(DEFAULT)
	    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
	    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
	    , methods, key, IteratorPrototype;
	  // Fix native
	  if($anyNative){
	    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
	    if(IteratorPrototype !== Object.prototype){
	      // Set @@toStringTag to native iterators
	      setToStringTag(IteratorPrototype, TAG, true);
	      // fix for some old engines
	      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
	    }
	  }
	  // fix Array#{values, @@iterator}.name in V8 / FF
	  if(DEF_VALUES && $native && $native.name !== VALUES){
	    VALUES_BUG = true;
	    $default = function values(){ return $native.call(this); };
	  }
	  // Define iterator
	  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
	    hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  Iterators[NAME] = $default;
	  Iterators[TAG]  = returnThis;
	  if(DEFAULT){
	    methods = {
	      values:  DEF_VALUES ? $default : getMethod(VALUES),
	      keys:    IS_SET     ? $default : getMethod(KEYS),
	      entries: $entries
	    };
	    if(FORCED)for(key in methods){
	      if(!(key in proto))redefine(proto, key, methods[key]);
	    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};

/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports = true;

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(14)
	  , core      = __webpack_require__(15)
	  , ctx       = __webpack_require__(16)
	  , hide      = __webpack_require__(18)
	  , PROTOTYPE = 'prototype';

	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , IS_WRAP   = type & $export.W
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , expProto  = exports[PROTOTYPE]
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
	    , key, own, out;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function(C){
	      var F = function(a, b, c){
	        if(this instanceof C){
	          switch(arguments.length){
	            case 0: return new C;
	            case 1: return new C(a);
	            case 2: return new C(a, b);
	          } return new C(a, b, c);
	        } return C.apply(this, arguments);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
	    if(IS_PROTO){
	      (exports.virtual || (exports.virtual = {}))[key] = out;
	      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
	      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
	    }
	  }
	};
	// type bitmap
	$export.F = 1;   // forced
	$export.G = 2;   // global
	$export.S = 4;   // static
	$export.P = 8;   // proto
	$export.B = 16;  // bind
	$export.W = 32;  // wrap
	$export.U = 64;  // safe
	$export.R = 128; // real proto method for `library` 
	module.exports = $export;

/***/ },
/* 14 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 15 */
/***/ function(module, exports) {

	var core = module.exports = {version: '2.2.2'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(17);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 17 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	var dP         = __webpack_require__(19)
	  , createDesc = __webpack_require__(27);
	module.exports = __webpack_require__(23) ? function(object, key, value){
	  return dP.f(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	var anObject       = __webpack_require__(20)
	  , IE8_DOM_DEFINE = __webpack_require__(22)
	  , toPrimitive    = __webpack_require__(26)
	  , dP             = Object.defineProperty;

	exports.f = __webpack_require__(23) ? Object.defineProperty : function defineProperty(O, P, Attributes){
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if(IE8_DOM_DEFINE)try {
	    return dP(O, P, Attributes);
	  } catch(e){ /* empty */ }
	  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
	  if('value' in Attributes)O[P] = Attributes.value;
	  return O;
	};

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(21);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 21 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(23) && !__webpack_require__(24)(function(){
	  return Object.defineProperty(__webpack_require__(25)('div'), 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(24)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 24 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(21)
	  , document = __webpack_require__(14).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(21);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function(it, S){
	  if(!isObject(it))return it;
	  var fn, val;
	  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  throw TypeError("Can't convert object to primitive value");
	};

/***/ },
/* 27 */
/***/ function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(18);

/***/ },
/* 29 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 30 */
/***/ function(module, exports) {

	module.exports = {};

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var create         = __webpack_require__(32)
	  , descriptor     = __webpack_require__(27)
	  , setToStringTag = __webpack_require__(47)
	  , IteratorPrototype = {};

	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(18)(IteratorPrototype, __webpack_require__(48)('iterator'), function(){ return this; });

	module.exports = function(Constructor, NAME, next){
	  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	var anObject    = __webpack_require__(20)
	  , dPs         = __webpack_require__(33)
	  , enumBugKeys = __webpack_require__(45)
	  , IE_PROTO    = __webpack_require__(42)('IE_PROTO')
	  , Empty       = function(){ /* empty */ }
	  , PROTOTYPE   = 'prototype';

	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var createDict = function(){
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = __webpack_require__(25)('iframe')
	    , i      = enumBugKeys.length
	    , gt     = '>'
	    , iframeDocument;
	  iframe.style.display = 'none';
	  __webpack_require__(46).appendChild(iframe);
	  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
	  // createDict = iframe.contentWindow.Object;
	  // html.removeChild(iframe);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write('<script>document.F=Object</script' + gt);
	  iframeDocument.close();
	  createDict = iframeDocument.F;
	  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
	  return createDict();
	};

	module.exports = Object.create || function create(O, Properties){
	  var result;
	  if(O !== null){
	    Empty[PROTOTYPE] = anObject(O);
	    result = new Empty;
	    Empty[PROTOTYPE] = null;
	    // add "__proto__" for Object.getPrototypeOf polyfill
	    result[IE_PROTO] = O;
	  } else result = createDict();
	  return Properties === undefined ? result : dPs(result, Properties);
	};

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	var dP       = __webpack_require__(19)
	  , anObject = __webpack_require__(20)
	  , getKeys  = __webpack_require__(34);

	module.exports = __webpack_require__(23) ? Object.defineProperties : function defineProperties(O, Properties){
	  anObject(O);
	  var keys   = getKeys(Properties)
	    , length = keys.length
	    , i = 0
	    , P;
	  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
	  return O;
	};

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys       = __webpack_require__(35)
	  , enumBugKeys = __webpack_require__(45);

	module.exports = Object.keys || function keys(O){
	  return $keys(O, enumBugKeys);
	};

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	var has          = __webpack_require__(29)
	  , toIObject    = __webpack_require__(36)
	  , arrayIndexOf = __webpack_require__(39)(false)
	  , IE_PROTO     = __webpack_require__(42)('IE_PROTO');

	module.exports = function(object, names){
	  var O      = toIObject(object)
	    , i      = 0
	    , result = []
	    , key;
	  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
	  // Don't enum bug & hidden keys
	  while(names.length > i)if(has(O, key = names[i++])){
	    ~arrayIndexOf(result, key) || result.push(key);
	  }
	  return result;
	};

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(37)
	  , defined = __webpack_require__(10);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(38);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 38 */
/***/ function(module, exports) {

	var toString = {}.toString;

	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(36)
	  , toLength  = __webpack_require__(40)
	  , toIndex   = __webpack_require__(41);
	module.exports = function(IS_INCLUDES){
	  return function($this, el, fromIndex){
	    var O      = toIObject($this)
	      , length = toLength(O.length)
	      , index  = toIndex(fromIndex, length)
	      , value;
	    // Array#includes uses SameValueZero equality algorithm
	    if(IS_INCLUDES && el != el)while(length > index){
	      value = O[index++];
	      if(value != value)return true;
	    // Array#toIndex ignores holes, Array#includes - not
	    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
	      if(O[index] === el)return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(9)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(9)
	  , max       = Math.max
	  , min       = Math.min;
	module.exports = function(index, length){
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	var shared = __webpack_require__(43)('keys')
	  , uid    = __webpack_require__(44);
	module.exports = function(key){
	  return shared[key] || (shared[key] = uid(key));
	};

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(14)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 44 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 45 */
/***/ function(module, exports) {

	// IE 8- don't enum bug keys
	module.exports = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(14).document && document.documentElement;

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	var def = __webpack_require__(19).f
	  , has = __webpack_require__(29)
	  , TAG = __webpack_require__(48)('toStringTag');

	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	var store      = __webpack_require__(43)('wks')
	  , uid        = __webpack_require__(44)
	  , Symbol     = __webpack_require__(14).Symbol
	  , USE_SYMBOL = typeof Symbol == 'function';
	module.exports = function(name){
	  return store[name] || (store[name] =
	    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
	};

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
	var has         = __webpack_require__(29)
	  , toObject    = __webpack_require__(50)
	  , IE_PROTO    = __webpack_require__(42)('IE_PROTO')
	  , ObjectProto = Object.prototype;

	module.exports = Object.getPrototypeOf || function(O){
	  O = toObject(O);
	  if(has(O, IE_PROTO))return O[IE_PROTO];
	  if(typeof O.constructor == 'function' && O instanceof O.constructor){
	    return O.constructor.prototype;
	  } return O instanceof Object ? ObjectProto : null;
	};

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(10);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(52);
	var global        = __webpack_require__(14)
	  , hide          = __webpack_require__(18)
	  , Iterators     = __webpack_require__(30)
	  , TO_STRING_TAG = __webpack_require__(48)('toStringTag');

	for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
	  var NAME       = collections[i]
	    , Collection = global[NAME]
	    , proto      = Collection && Collection.prototype;
	  if(proto && !proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
	  Iterators[NAME] = Iterators.Array;
	}

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var addToUnscopables = __webpack_require__(53)
	  , step             = __webpack_require__(54)
	  , Iterators        = __webpack_require__(30)
	  , toIObject        = __webpack_require__(36);

	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(11)(Array, 'Array', function(iterated, kind){
	  this._t = toIObject(iterated); // target
	  this._i = 0;                   // next index
	  this._k = kind;                // kind
	// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , kind  = this._k
	    , index = this._i++;
	  if(!O || index >= O.length){
	    this._t = undefined;
	    return step(1);
	  }
	  if(kind == 'keys'  )return step(0, index);
	  if(kind == 'values')return step(0, O[index]);
	  return step(0, [index, O[index]]);
	}, 'values');

	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	Iterators.Arguments = Iterators.Array;

	addToUnscopables('keys');
	addToUnscopables('values');
	addToUnscopables('entries');

/***/ },
/* 53 */
/***/ function(module, exports) {

	module.exports = function(){ /* empty */ };

/***/ },
/* 54 */
/***/ function(module, exports) {

	module.exports = function(done, value){
	  return {value: value, done: !!done};
	};

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(56), __esModule: true };

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(57);
	__webpack_require__(67);
	module.exports = __webpack_require__(15).Symbol;

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// ECMAScript 6 symbols shim
	var global         = __webpack_require__(14)
	  , core           = __webpack_require__(15)
	  , has            = __webpack_require__(29)
	  , DESCRIPTORS    = __webpack_require__(23)
	  , $export        = __webpack_require__(13)
	  , redefine       = __webpack_require__(28)
	  , META           = __webpack_require__(58).KEY
	  , $fails         = __webpack_require__(24)
	  , shared         = __webpack_require__(43)
	  , setToStringTag = __webpack_require__(47)
	  , uid            = __webpack_require__(44)
	  , wks            = __webpack_require__(48)
	  , keyOf          = __webpack_require__(59)
	  , enumKeys       = __webpack_require__(60)
	  , isArray        = __webpack_require__(63)
	  , anObject       = __webpack_require__(20)
	  , toIObject      = __webpack_require__(36)
	  , toPrimitive    = __webpack_require__(26)
	  , createDesc     = __webpack_require__(27)
	  , _create        = __webpack_require__(32)
	  , gOPNExt        = __webpack_require__(64)
	  , $GOPD          = __webpack_require__(66)
	  , $DP            = __webpack_require__(19)
	  , gOPD           = $GOPD.f
	  , dP             = $DP.f
	  , gOPN           = gOPNExt.f
	  , $Symbol        = global.Symbol
	  , $JSON          = global.JSON
	  , _stringify     = $JSON && $JSON.stringify
	  , setter         = false
	  , PROTOTYPE      = 'prototype'
	  , HIDDEN         = wks('_hidden')
	  , TO_PRIMITIVE   = wks('toPrimitive')
	  , isEnum         = {}.propertyIsEnumerable
	  , SymbolRegistry = shared('symbol-registry')
	  , AllSymbols     = shared('symbols')
	  , ObjectProto    = Object[PROTOTYPE]
	  , USE_NATIVE     = typeof $Symbol == 'function'
	  , QObject        = global.QObject;

	// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
	var setSymbolDesc = DESCRIPTORS && $fails(function(){
	  return _create(dP({}, 'a', {
	    get: function(){ return dP(this, 'a', {value: 7}).a; }
	  })).a != 7;
	}) ? function(it, key, D){
	  var protoDesc = gOPD(ObjectProto, key);
	  if(protoDesc)delete ObjectProto[key];
	  dP(it, key, D);
	  if(protoDesc && it !== ObjectProto)dP(ObjectProto, key, protoDesc);
	} : dP;

	var wrap = function(tag){
	  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
	  sym._k = tag;
	  DESCRIPTORS && setter && setSymbolDesc(ObjectProto, tag, {
	    configurable: true,
	    set: function(value){
	      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
	      setSymbolDesc(this, tag, createDesc(1, value));
	    }
	  });
	  return sym;
	};

	var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function(it){
	  return typeof it == 'symbol';
	} : function(it){
	  return it instanceof $Symbol;
	};

	var $defineProperty = function defineProperty(it, key, D){
	  anObject(it);
	  key = toPrimitive(key, true);
	  anObject(D);
	  if(has(AllSymbols, key)){
	    if(!D.enumerable){
	      if(!has(it, HIDDEN))dP(it, HIDDEN, createDesc(1, {}));
	      it[HIDDEN][key] = true;
	    } else {
	      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
	      D = _create(D, {enumerable: createDesc(0, false)});
	    } return setSymbolDesc(it, key, D);
	  } return dP(it, key, D);
	};
	var $defineProperties = function defineProperties(it, P){
	  anObject(it);
	  var keys = enumKeys(P = toIObject(P))
	    , i    = 0
	    , l = keys.length
	    , key;
	  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
	  return it;
	};
	var $create = function create(it, P){
	  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
	};
	var $propertyIsEnumerable = function propertyIsEnumerable(key){
	  var E = isEnum.call(this, key = toPrimitive(key, true));
	  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
	};
	var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
	  var D = gOPD(it = toIObject(it), key = toPrimitive(key, true));
	  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
	  return D;
	};
	var $getOwnPropertyNames = function getOwnPropertyNames(it){
	  var names  = gOPN(toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i)if(!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META)result.push(key);
	  return result;
	};
	var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
	  var names  = gOPN(toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i)if(has(AllSymbols, key = names[i++]))result.push(AllSymbols[key]);
	  return result;
	};
	var $stringify = function stringify(it){
	  if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
	  var args = [it]
	    , i    = 1
	    , replacer, $replacer;
	  while(arguments.length > i)args.push(arguments[i++]);
	  replacer = args[1];
	  if(typeof replacer == 'function')$replacer = replacer;
	  if($replacer || !isArray(replacer))replacer = function(key, value){
	    if($replacer)value = $replacer.call(this, key, value);
	    if(!isSymbol(value))return value;
	  };
	  args[1] = replacer;
	  return _stringify.apply($JSON, args);
	};
	var BUGGY_JSON = $fails(function(){
	  var S = $Symbol();
	  // MS Edge converts symbol values to JSON as {}
	  // WebKit converts symbol values to JSON as null
	  // V8 throws on boxed symbols
	  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
	});

	// 19.4.1.1 Symbol([description])
	if(!USE_NATIVE){
	  $Symbol = function Symbol(){
	    if(this instanceof $Symbol)throw TypeError('Symbol is not a constructor!');
	    return wrap(uid(arguments.length > 0 ? arguments[0] : undefined));
	  };
	  redefine($Symbol[PROTOTYPE], 'toString', function toString(){
	    return this._k;
	  });

	  $GOPD.f = $getOwnPropertyDescriptor;
	  $DP.f   = $defineProperty;
	  __webpack_require__(65).f = gOPNExt.f = $getOwnPropertyNames;
	  __webpack_require__(62).f  = $propertyIsEnumerable
	  __webpack_require__(61).f = $getOwnPropertySymbols;

	  if(DESCRIPTORS && !__webpack_require__(12)){
	    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
	  }
	}

	$export($export.G + $export.W + $export.F * !USE_NATIVE, {Symbol: $Symbol});

	// 19.4.2.2 Symbol.hasInstance
	// 19.4.2.3 Symbol.isConcatSpreadable
	// 19.4.2.4 Symbol.iterator
	// 19.4.2.6 Symbol.match
	// 19.4.2.8 Symbol.replace
	// 19.4.2.9 Symbol.search
	// 19.4.2.10 Symbol.species
	// 19.4.2.11 Symbol.split
	// 19.4.2.12 Symbol.toPrimitive
	// 19.4.2.13 Symbol.toStringTag
	// 19.4.2.14 Symbol.unscopables
	for(var symbols = (
	  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
	).split(','), i = 0; symbols.length > i; ){
	  var key     = symbols[i++]
	    , Wrapper = core.Symbol
	    , sym     = wks(key);
	  if(!(key in Wrapper))dP(Wrapper, key, {value: USE_NATIVE ? sym : wrap(sym)});
	};

	// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
	if(!QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild)setter = true;

	$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
	  // 19.4.2.1 Symbol.for(key)
	  'for': function(key){
	    return has(SymbolRegistry, key += '')
	      ? SymbolRegistry[key]
	      : SymbolRegistry[key] = $Symbol(key);
	  },
	  // 19.4.2.5 Symbol.keyFor(sym)
	  keyFor: function keyFor(key){
	    if(isSymbol(key))return keyOf(SymbolRegistry, key);
	    throw TypeError(key + ' is not a symbol!');
	  },
	  useSetter: function(){ setter = true; },
	  useSimple: function(){ setter = false; }
	});

	$export($export.S + $export.F * !USE_NATIVE, 'Object', {
	  // 19.1.2.2 Object.create(O [, Properties])
	  create: $create,
	  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
	  defineProperty: $defineProperty,
	  // 19.1.2.3 Object.defineProperties(O, Properties)
	  defineProperties: $defineProperties,
	  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
	  // 19.1.2.7 Object.getOwnPropertyNames(O)
	  getOwnPropertyNames: $getOwnPropertyNames,
	  // 19.1.2.8 Object.getOwnPropertySymbols(O)
	  getOwnPropertySymbols: $getOwnPropertySymbols
	});

	// 24.3.2 JSON.stringify(value [, replacer [, space]])
	$JSON && $export($export.S + $export.F * (!USE_NATIVE || BUGGY_JSON), 'JSON', {stringify: $stringify});

	// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
	$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(18)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	setToStringTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	setToStringTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	setToStringTag(global.JSON, 'JSON', true);

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	var META     = __webpack_require__(44)('meta')
	  , isObject = __webpack_require__(21)
	  , has      = __webpack_require__(29)
	  , setDesc  = __webpack_require__(19).f
	  , id       = 0;
	var isExtensible = Object.isExtensible || function(){
	  return true;
	};
	var FREEZE = !__webpack_require__(24)(function(){
	  return isExtensible(Object.preventExtensions({}));
	});
	var setMeta = function(it){
	  setDesc(it, META, {value: {
	    i: 'O' + ++id, // object ID
	    w: {}          // weak collections IDs
	  }});
	};
	var fastKey = function(it, create){
	  // return primitive with prefix
	  if(!isObject(it))return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
	  if(!has(it, META)){
	    // can't set metadata to uncaught frozen object
	    if(!isExtensible(it))return 'F';
	    // not necessary to add metadata
	    if(!create)return 'E';
	    // add missing metadata
	    setMeta(it);
	  // return object ID
	  } return it[META].i;
	};
	var getWeak = function(it, create){
	  if(!has(it, META)){
	    // can't set metadata to uncaught frozen object
	    if(!isExtensible(it))return true;
	    // not necessary to add metadata
	    if(!create)return false;
	    // add missing metadata
	    setMeta(it);
	  // return hash weak collections IDs
	  } return it[META].w;
	};
	// add metadata on freeze-family methods calling
	var onFreeze = function(it){
	  if(FREEZE && meta.NEED && isExtensible(it) && !has(it, META))setMeta(it);
	  return it;
	};
	var meta = module.exports = {
	  KEY:      META,
	  NEED:     false,
	  fastKey:  fastKey,
	  getWeak:  getWeak,
	  onFreeze: onFreeze
	};

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	var getKeys   = __webpack_require__(34)
	  , toIObject = __webpack_require__(36);
	module.exports = function(object, el){
	  var O      = toIObject(object)
	    , keys   = getKeys(O)
	    , length = keys.length
	    , index  = 0
	    , key;
	  while(length > index)if(O[key = keys[index++]] === el)return key;
	};

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	// all enumerable object keys, includes symbols
	var getKeys = __webpack_require__(34)
	  , gOPS    = __webpack_require__(61)
	  , pIE     = __webpack_require__(62);
	module.exports = function(it){
	  var result     = getKeys(it)
	    , getSymbols = gOPS.f;
	  if(getSymbols){
	    var symbols = getSymbols(it)
	      , isEnum  = pIE.f
	      , i       = 0
	      , key;
	    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))result.push(key);
	  } return result;
	};

/***/ },
/* 61 */
/***/ function(module, exports) {

	exports.f = Object.getOwnPropertySymbols;

/***/ },
/* 62 */
/***/ function(module, exports) {

	exports.f = {}.propertyIsEnumerable;

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	// 7.2.2 IsArray(argument)
	var cof = __webpack_require__(38);
	module.exports = Array.isArray || function isArray(arg){
	  return cof(arg) == 'Array';
	};

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var toIObject = __webpack_require__(36)
	  , gOPN      = __webpack_require__(65).f
	  , toString  = {}.toString;

	var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];

	var getWindowNames = function(it){
	  try {
	    return gOPN(it);
	  } catch(e){
	    return windowNames.slice();
	  }
	};

	module.exports.f = function getOwnPropertyNames(it){
	  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
	};


/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
	var $keys      = __webpack_require__(35)
	  , hiddenKeys = __webpack_require__(45).concat('length', 'prototype');

	exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
	  return $keys(O, hiddenKeys);
	};

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	var pIE            = __webpack_require__(62)
	  , createDesc     = __webpack_require__(27)
	  , toIObject      = __webpack_require__(36)
	  , toPrimitive    = __webpack_require__(26)
	  , has            = __webpack_require__(29)
	  , IE8_DOM_DEFINE = __webpack_require__(22)
	  , gOPD           = Object.getOwnPropertyDescriptor;

	exports.f = __webpack_require__(23) ? gOPD : function getOwnPropertyDescriptor(O, P){
	  O = toIObject(O);
	  P = toPrimitive(P, true);
	  if(IE8_DOM_DEFINE)try {
	    return gOPD(O, P);
	  } catch(e){ /* empty */ }
	  if(has(O, P))return createDesc(!pIE.f.call(O, P), O[P]);
	};

/***/ },
/* 67 */
/***/ function(module, exports) {

	

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _setPrototypeOf = __webpack_require__(69);

	var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

	var _create = __webpack_require__(73);

	var _create2 = _interopRequireDefault(_create);

	var _typeof2 = __webpack_require__(4);

	var _typeof3 = _interopRequireDefault(_typeof2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
	  }

	  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
	    constructor: {
	      value: subClass,
	      enumerable: false,
	      writable: true,
	      configurable: true
	    }
	  });
	  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
	};

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(70), __esModule: true };

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(71);
	module.exports = __webpack_require__(15).Object.setPrototypeOf;

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.19 Object.setPrototypeOf(O, proto)
	var $export = __webpack_require__(13);
	$export($export.S, 'Object', {setPrototypeOf: __webpack_require__(72).set});

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	// Works with __proto__ only. Old v8 can't work with null proto objects.
	/* eslint-disable no-proto */
	var isObject = __webpack_require__(21)
	  , anObject = __webpack_require__(20);
	var check = function(O, proto){
	  anObject(O);
	  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
	};
	module.exports = {
	  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
	    function(test, buggy, set){
	      try {
	        set = __webpack_require__(16)(Function.call, __webpack_require__(66).f(Object.prototype, '__proto__').set, 2);
	        set(test, []);
	        buggy = !(test instanceof Array);
	      } catch(e){ buggy = true; }
	      return function setPrototypeOf(O, proto){
	        check(O, proto);
	        if(buggy)O.__proto__ = proto;
	        else set(O, proto);
	        return O;
	      };
	    }({}, false) : undefined),
	  check: check
	};

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(74), __esModule: true };

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(75);
	var $Object = __webpack_require__(15).Object;
	module.exports = function create(P, D){
	  return $Object.create(P, D);
	};

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(13)
	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	$export($export.S, 'Object', {create: __webpack_require__(32)});

/***/ },
/* 76 */
/***/ function(module, exports) {

	/*
	 * classList.js: Cross-browser full element.classList implementation.
	 * 2014-07-23
	 *
	 * By Eli Grey, http://eligrey.com
	 * Public Domain.
	 * NO WARRANTY EXPRESSED OR IMPLIED. USE AT YOUR OWN RISK.
	 */

	/*global self, document, DOMException */

	/*! @source http://purl.eligrey.com/github/classList.js/blob/master/classList.js*/

	/* Copied from MDN:
	 * https://developer.mozilla.org/en-US/docs/Web/API/Element/classList
	 */

	if ("document" in window.self) {

	  // Full polyfill for browsers with no classList support
	  if (!("classList" in document.createElement("_"))) {

	  (function (view) {

	    "use strict";

	    if (!('Element' in view)) return;

	    var
	        classListProp = "classList"
	      , protoProp = "prototype"
	      , elemCtrProto = view.Element[protoProp]
	      , objCtr = Object
	      , strTrim = String[protoProp].trim || function () {
	        return this.replace(/^\s+|\s+$/g, "");
	      }
	      , arrIndexOf = Array[protoProp].indexOf || function (item) {
	        var
	            i = 0
	          , len = this.length
	        ;
	        for (; i < len; i++) {
	          if (i in this && this[i] === item) {
	            return i;
	          }
	        }
	        return -1;
	      }
	      // Vendors: please allow content code to instantiate DOMExceptions
	      , DOMEx = function (type, message) {
	        this.name = type;
	        this.code = DOMException[type];
	        this.message = message;
	      }
	      , checkTokenAndGetIndex = function (classList, token) {
	        if (token === "") {
	          throw new DOMEx(
	              "SYNTAX_ERR"
	            , "An invalid or illegal string was specified"
	          );
	        }
	        if (/\s/.test(token)) {
	          throw new DOMEx(
	              "INVALID_CHARACTER_ERR"
	            , "String contains an invalid character"
	          );
	        }
	        return arrIndexOf.call(classList, token);
	      }
	      , ClassList = function (elem) {
	        var
	            trimmedClasses = strTrim.call(elem.getAttribute("class") || "")
	          , classes = trimmedClasses ? trimmedClasses.split(/\s+/) : []
	          , i = 0
	          , len = classes.length
	        ;
	        for (; i < len; i++) {
	          this.push(classes[i]);
	        }
	        this._updateClassName = function () {
	          elem.setAttribute("class", this.toString());
	        };
	      }
	      , classListProto = ClassList[protoProp] = []
	      , classListGetter = function () {
	        return new ClassList(this);
	      }
	    ;
	    // Most DOMException implementations don't allow calling DOMException's toString()
	    // on non-DOMExceptions. Error's toString() is sufficient here.
	    DOMEx[protoProp] = Error[protoProp];
	    classListProto.item = function (i) {
	      return this[i] || null;
	    };
	    classListProto.contains = function (token) {
	      token += "";
	      return checkTokenAndGetIndex(this, token) !== -1;
	    };
	    classListProto.add = function () {
	      var
	          tokens = arguments
	        , i = 0
	        , l = tokens.length
	        , token
	        , updated = false
	      ;
	      do {
	        token = tokens[i] + "";
	        if (checkTokenAndGetIndex(this, token) === -1) {
	          this.push(token);
	          updated = true;
	        }
	      }
	      while (++i < l);

	      if (updated) {
	        this._updateClassName();
	      }
	    };
	    classListProto.remove = function () {
	      var
	          tokens = arguments
	        , i = 0
	        , l = tokens.length
	        , token
	        , updated = false
	        , index
	      ;
	      do {
	        token = tokens[i] + "";
	        index = checkTokenAndGetIndex(this, token);
	        while (index !== -1) {
	          this.splice(index, 1);
	          updated = true;
	          index = checkTokenAndGetIndex(this, token);
	        }
	      }
	      while (++i < l);

	      if (updated) {
	        this._updateClassName();
	      }
	    };
	    classListProto.toggle = function (token, force) {
	      token += "";

	      var
	          result = this.contains(token)
	        , method = result ?
	          force !== true && "remove"
	        :
	          force !== false && "add"
	      ;

	      if (method) {
	        this[method](token);
	      }

	      if (force === true || force === false) {
	        return force;
	      } else {
	        return !result;
	      }
	    };
	    classListProto.toString = function () {
	      return this.join(" ");
	    };

	    if (objCtr.defineProperty) {
	      var classListPropDesc = {
	          get: classListGetter
	        , enumerable: true
	        , configurable: true
	      };
	      try {
	        objCtr.defineProperty(elemCtrProto, classListProp, classListPropDesc);
	      } catch (ex) { // IE 8 doesn't support enumerable:true
	        if (ex.number === -0x7FF5EC54) {
	          classListPropDesc.enumerable = false;
	          objCtr.defineProperty(elemCtrProto, classListProp, classListPropDesc);
	        }
	      }
	    } else if (objCtr[protoProp].__defineGetter__) {
	      elemCtrProto.__defineGetter__(classListProp, classListGetter);
	    }

	    }(window.self));

	    } else {
	    // There is full or partial native classList support, so just check if we need
	    // to normalize the add/remove and toggle APIs.

	    (function () {
	      "use strict";

	      var testElement = document.createElement("_");

	      testElement.classList.add("c1", "c2");

	      // Polyfill for IE 10/11 and Firefox <26, where classList.add and
	      // classList.remove exist but support only one argument at a time.
	      if (!testElement.classList.contains("c2")) {
	        var createMethod = function(method) {
	          var original = DOMTokenList.prototype[method];

	          DOMTokenList.prototype[method] = function(token) {
	            var i, len = arguments.length;

	            for (i = 0; i < len; i++) {
	              token = arguments[i];
	              original.call(this, token);
	            }
	          };
	        };
	        createMethod('add');
	        createMethod('remove');
	      }

	      testElement.classList.toggle("c3", false);

	      // Polyfill for IE 10 and Firefox <24, where classList.toggle does not
	      // support the second argument.
	      if (testElement.classList.contains("c3")) {
	        var _toggle = DOMTokenList.prototype.toggle;

	        DOMTokenList.prototype.toggle = function(token, force) {
	          if (1 in arguments && !this.contains(token) === !force) {
	            return force;
	          } else {
	            return _toggle.call(this, token);
	          }
	        };

	      }

	      testElement = null;
	    }());
	  }
	}


/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _typeof2 = __webpack_require__(4);

	var _typeof3 = _interopRequireDefault(_typeof2);

	var _classCallCheck2 = __webpack_require__(2);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/*
	  Base class for all modules.
	  Extends _defaults to _props
	*/

	var Module = function () {
	  /*
	    constructor method calls scaffolding methods.
	  */

	  function Module() {
	    var o = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	    (0, _classCallCheck3.default)(this, Module);

	    this._o = o;
	    this._index = this._o.index || 0;
	    this._declareDefaults();
	    this._extendDefaults();
	    this._vars();
	    return this._render();
	  }
	  /*
	    Method to declare defaults.
	    @private
	  */


	  Module.prototype._declareDefaults = function _declareDefaults() {
	    this._defaults = {
	      className: '',
	      parent: document.body,
	      delay: 0
	    };
	  };
	  /*
	    Method to add pointer down even listener to el.
	    @param {Object}   HTMLElement to add event listener on.
	    @param {Function} Event listener callback.
	  */


	  Module.prototype._addPointerDownEvent = function _addPointerDownEvent(el, fn) {
	    if (window.navigator.msPointerEnabled) {
	      el.addEventListener('MSPointerDown', fn);
	    } else if (window.ontouchstart !== undefined) {
	      el.addEventListener('touchstart', fn);
	      el.addEventListener('mousedown', fn);
	    } else {
	      el.addEventListener('mousedown', fn);
	    }
	  };
	  /*
	    Method to add pointer up even listener to el.
	    @param {Object}   HTMLElement to add event listener on.
	    @param {Function} Event listener callback.
	  */


	  Module.prototype._addPointerUpEvent = function _addPointerUpEvent(el, fn) {
	    if (window.navigator.msPointerEnabled) {
	      el.addEventListener('MSPointerUp', fn);
	    } else if (window.ontouchstart !== undefined) {
	      el.addEventListener('touchend', fn);
	      el.addEventListener('mouseup', fn);
	    } else {
	      el.addEventListener('mouseup', fn);
	    }
	  };
	  /*
	    Method to check if variable holds link to a function.
	    @param {Function?} A variable to check.
	    @returns {Boolean} If passed variable is a function.
	  */


	  Module.prototype._isFunction = function _isFunction(fn) {
	    return typeof fn === 'function';
	  };
	  /*
	    Method to a function or silently fail.
	    @param {Function?} A variable to check.
	    @param {Array like} Arguments.
	  */


	  Module.prototype._callIfFunction = function _callIfFunction(fn) {
	    Array.prototype.shift.call(arguments);
	    this._isFunction(fn) && fn.apply(this, arguments);
	  };
	  /*
	    Method to declare module's variables.
	    @private
	  */


	  Module.prototype._vars = function _vars() {};
	  /*
	    Method to render on initialization.
	    @private
	  */


	  Module.prototype._render = function _render() {
	    this._addMainElement();
	  };
	  /*
	    Method to add `this.el` on the module.
	    @private
	    @param {String} Tag name of the element.
	  */


	  Module.prototype._addMainElement = function _addMainElement() {
	    var tagName = arguments.length <= 0 || arguments[0] === undefined ? 'div' : arguments[0];

	    var p = this._props;

	    this.el = this._createElement(tagName);
	    this._addMainClasses();

	    var method = p.isPrepend ? 'prepend' : 'append';
	    this['_' + method + 'Child'](p.parent, this.el);
	  };
	  /*
	    Method to classes on `this.el`.
	    @private
	  */


	  Module.prototype._addMainClasses = function _addMainClasses() {
	    var p = this._props;
	    if (p.className instanceof Array) {
	      for (var i = 0; i < p.className.length; i++) {
	        this._addClass(this.el, p.className[i]);
	      }
	    } else {
	      this._addClass(this.el, p.className);
	    }
	  };
	  /*
	    Method to add a class on el.
	    @private
	    @param {Object} HTML element to add the class on.
	    @param {String} Class name to add.
	  */


	  Module.prototype._addClass = function _addClass(el, className) {
	    className && el.classList.add(className);
	  };
	  /*
	    Method to set property on the module.
	    @private
	    @param {String, Object} Name of the property to set
	                            or object with properties to set.
	    @param {Any} Value for the property to set. Could be
	                  undefined if the first param is object.
	  */


	  Module.prototype._setProp = function _setProp(attr, value) {
	    if ((typeof attr === 'undefined' ? 'undefined' : (0, _typeof3.default)(attr)) === 'object') {
	      for (var key in attr) {
	        this._assignProp(key, attr[key]);
	      }
	    } else {
	      this._assignProp(attr, value);
	    }
	  };
	  /*
	    Method to assign single property's value.
	    @private
	    @param {String} Property name.
	    @param {Any}    Property value.
	  */


	  Module.prototype._assignProp = function _assignProp(key, value) {
	    this._props[key] = value;
	  };
	  /*
	    Method to copy `_o` options to `_props` object
	    with fallback to `_defaults`.
	    @private
	  */


	  Module.prototype._extendDefaults = function _extendDefaults() {
	    this._props = {};
	    // this._deltas = {};
	    for (var key in this._defaults) {
	      var value = this._o[key];
	      // copy the properties to the _o object
	      this._assignProp(key, value != null ? value : this._defaults[key]);
	    }
	  };
	  /*
	    Method to create HTMLElement from tag name.
	    @private
	    @param {String} Name of the tag to create `HTML` element.
	    @returns {Object} HtmlElement.
	  */


	  Module.prototype._createElement = function _createElement(tagName) {
	    return document.createElement(tagName);
	  };
	  /*
	    Method to create HTMLElement and append it to the `el` with a className.
	    @private
	    @param {String} The tagname for the HTMLElement.
	    @param {String} Optional class name to add to the new child.
	    @returns {Object} The newely created HTMLElement.
	  */


	  Module.prototype._createChild = function _createChild(tagName, className) {
	    var child = this._createElement('div');
	    className && child.classList.add(className);
	    this.el.appendChild(child);
	    return child;
	  };
	  /*
	    Method to prepend child to the el.
	    @private
	    @param {Object} Parent HTMLElement.
	    @param {Object} Child HTMLElement.
	  */


	  Module.prototype._appendChild = function _appendChild(el, childEl) {
	    el.appendChild(childEl);
	  };
	  /*
	    Method to prepend child to the el.
	    @private
	    @param {Object} Parent HTMLElement.
	    @param {Object} Child HTMLElement.
	  */


	  Module.prototype._prependChild = function _prependChild(el, childEl) {
	    el.insertBefore(childEl, el.firstChild);
	  };
	  /*
	    Method to toggle opacity based on passed boolean.
	    @private
	    @param {Object} HTML element.
	    @param {Boolean} Show/hide element.
	  */


	  Module.prototype._toggleOpacity = function _toggleOpacity(el, isShow) {
	    el.style.opacity = isShow ? 1 : 0;
	  };
	  /*
	    Method to find an element on the page by selector.
	    @private
	    @param {String} Selector.
	    @returns {Object, Null} `Html` element or `null`.
	  */


	  Module.prototype._findEl = function _findEl(selector) {
	    return document.querySelector(selector);
	  };
	  /*
	    Method to get window width.
	    @private
	    @returns Window width.
	  */


	  Module.prototype._getWindowWidth = function _getWindowWidth() {
	    var w = window,
	        width = w.innerWidth || e.clientWidth || g.clientWidth;

	    return width;
	  };
	  /*
	    Method to get window width.
	    @private
	    @returns Window width.
	  */


	  Module.prototype._getWindowHeight = function _getWindowHeight() {
	    var w = window,
	        height = w.innerHeight || e.clientHeight || g.clientHeight;

	    return height;
	  };
	  /*
	   Method to get max window size.
	   @private
	   @returns Max window size.
	  */


	  Module.prototype._getWindowSize = function _getWindowSize() {
	    return Math.max(this._getWindowWidth(), this._getWindowHeight());
	  };

	  return Module;
	}();

	exports.default = Module;

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _classCallCheck2 = __webpack_require__(2);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _possibleConstructorReturn2 = __webpack_require__(3);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(68);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _module = __webpack_require__(77);

	var _module2 = _interopRequireDefault(_module);

	var _colors = __webpack_require__(79);

	var _colors2 = _interopRequireDefault(_colors);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _mojs = mojs;
	var Timeline = _mojs.Timeline;

	var TriangleLines = function (_Module) {
	  (0, _inherits3.default)(TriangleLines, _Module);

	  function TriangleLines() {
	    (0, _classCallCheck3.default)(this, TriangleLines);
	    return (0, _possibleConstructorReturn3.default)(this, _Module.apply(this, arguments));
	  }

	  /*
	    Method for initial module's render.
	    @private
	  */

	  TriangleLines.prototype._render = function _render() {
	    return new Timeline({ delay: this._props.delay }).add(this._lines());
	  };

	  TriangleLines.prototype._lines = function _lines() {
	    var blendMode = 'screen',
	        o = {
	      left: '50%', top: '50%',
	      shape: 'polygon',
	      duration: 1200,
	      radius: { 150: 100 },
	      angle: { '-70': '-60' },
	      fill: 'none',
	      stroke: _colors2.default.CYAN,
	      strokeWidth: 3,
	      strokeDasharray: { '50% 100%': '0% 100%' },
	      strokeDashoffset: { '50%': '-66%' }
	    };

	    var shape1 = new mojs.Shape(o);
	    shape1.el.style['mix-blend-mode'] = blendMode;

	    o.stroke = _colors2.default.HOTPINK;
	    o.strokeDasharray = { '30% 120%': '0% 120%' };
	    o.strokeDashoffset = { '42%': '-76%' };
	    o.angle = { '-80': '-60' };
	    o.delay = 75;
	    var shape2 = new mojs.Shape(o);
	    shape2.el.style['mix-blend-mode'] = blendMode;

	    o.stroke = _colors2.default.YELLOW;
	    o.strokeDashoffset = { '42%': '-86%' };
	    o.angle = { '-90': '-60' };
	    o.delay = 150;
	    var shape3 = new mojs.Shape(o);
	    shape3.el.style['mix-blend-mode'] = blendMode;

	    return [shape1, shape2, shape3];
	  };

	  return TriangleLines;
	}(_module2.default);

	exports.default = TriangleLines;

/***/ },
/* 79 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;

	var COLORS = {
	  WHITE: '#ffffff',
	  BLACK: '#000000',
	  GREEN: '#49F2CC',
	  PINK: '#777',
	  GREY: '#29363B',
	  CYAN: 'cyan',
	  YELLOW: '#FFE202',
	  // HOTPINK: '#8E0CE8',
	  HOTPINK: 'deeppink'
	};

	exports.default = COLORS;

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _classCallCheck2 = __webpack_require__(2);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _possibleConstructorReturn2 = __webpack_require__(3);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(68);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _module = __webpack_require__(77);

	var _module2 = _interopRequireDefault(_module);

	var _triangleLines = __webpack_require__(78);

	var _triangleLines2 = _interopRequireDefault(_triangleLines);

	var _whiteTriangles = __webpack_require__(81);

	var _whiteTriangles2 = _interopRequireDefault(_whiteTriangles);

	var _colors = __webpack_require__(79);

	var _colors2 = _interopRequireDefault(_colors);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Triangles = function (_Module) {
	  (0, _inherits3.default)(Triangles, _Module);

	  function Triangles() {
	    (0, _classCallCheck3.default)(this, Triangles);
	    return (0, _possibleConstructorReturn3.default)(this, _Module.apply(this, arguments));
	  }

	  /*
	    Method for initial module's render.
	    @private
	  */

	  Triangles.prototype._render = function _render() {
	    _Module.prototype._render.call(this);

	    document.body.style['background'] = _colors2.default.GREY;

	    return new mojs.Timeline().add(this._triangles(this.el), new _triangleLines2.default({ delay: 100 }));
	  };
	  /*
	    Method to add bright triangles and append white triangles scene.
	    @private
	    @param {Object} `HTML` element to add the circles to.
	    @returns {Array(Object)} Array of timelines.
	  */


	  Triangles.prototype._triangles = function _triangles(parent) {
	    var blendMode = 'screen',
	        o = {
	      left: '50%', top: '50%',
	      shape: 'polygon',
	      fill: _colors2.default.CYAN,
	      isShowEnd: false,
	      duration: 800,
	      radius: 65,
	      angle: { '-120': '-40' },
	      x: { '-200': 20 },
	      y: { '50': -20 },
	      scaleX: { 0: 1.3 },
	      parent: parent
	    },
	        thenO = { x: 0, y: 0, duration: 300, angle: -60, scaleX: 1 };

	    var tr1 = new mojs.Shape(o).then(thenO);
	    tr1.el.style['mix-blend-mode'] = blendMode;

	    o.fill = _colors2.default.HOTPINK;
	    o.angle = { '-180': '-20' };
	    o.y = { '30': '-30' };
	    o.delay = 75;
	    o.scaleX = { 0: 1.46 };
	    var tr2 = new mojs.Shape(o).then(thenO);
	    tr2.el.style['mix-blend-mode'] = blendMode;

	    o.fill = _colors2.default.YELLOW;
	    o.angle = { '-220': '-10' };
	    o.y = { '60': '-50' };
	    o.delay = 150;
	    o.scaleX = { 0: 1.3 };
	    var tr3 = new mojs.Shape(o).then(thenO);
	    tr3.el.style['mix-blend-mode'] = blendMode;

	    return new mojs.Timeline().add(tr1, tr2, tr3).append(new _whiteTriangles2.default());
	  };

	  return Triangles;
	}(_module2.default);

	exports.default = Triangles;

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends2 = __webpack_require__(82);

	var _extends3 = _interopRequireDefault(_extends2);

	var _classCallCheck2 = __webpack_require__(2);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _possibleConstructorReturn2 = __webpack_require__(3);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(68);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _module = __webpack_require__(77);

	var _module2 = _interopRequireDefault(_module);

	var _colors = __webpack_require__(79);

	var _colors2 = _interopRequireDefault(_colors);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var WhiteTriangles = function (_Module) {
	  (0, _inherits3.default)(WhiteTriangles, _Module);

	  function WhiteTriangles() {
	    (0, _classCallCheck3.default)(this, WhiteTriangles);
	    return (0, _possibleConstructorReturn3.default)(this, _Module.apply(this, arguments));
	  }

	  /*
	    Method for initial module's render.
	    @private
	  */

	  WhiteTriangles.prototype._render = function _render() {
	    var _this2 = this;

	    _Module.prototype._render.call(this);

	    var blackBg = document.querySelector('#js-black-bg'),
	        timeline = new mojs.Timeline({
	      delay: this._props.delay,
	      onStart: function onStart(isFwd) {
	        _this2._toggleOpacity(blackBg, isFwd);
	      },
	      onComplete: function onComplete(isFwd) {
	        _this2._toggleOpacity(blackBg, !isFwd);
	      }
	    });

	    blackBg.style['background'] = _colors2.default.BLACK;

	    return timeline.add(this._static(blackBg), this._triangles(blackBg));
	  };
	  /*
	    Method to add white triangles.
	    @private
	    @param {Object} `HTML` element to add the circles to.
	    @returns {Object} Static triangle object.
	  */


	  WhiteTriangles.prototype._static = function _static(parent) {
	    // the static one
	    return new mojs.Shape({
	      parent: parent,
	      left: '50%', top: '50%',
	      shape: 'polygon',
	      duration: 2000,
	      radius: { 60: 65 },
	      angle: -60,
	      fill: 'none',
	      stroke: _colors2.default.WHITE,
	      strokeWidth: { 30: 5 },
	      easing: 'cubic.out',
	      isShowEnd: false
	    });
	  };
	  /*
	    Method to add white triangles.
	    @private
	    @param {Object} `HTML` element to add the circles to.
	    @returns {Array(Object)} Array of timelines.
	  */


	  WhiteTriangles.prototype._triangles = function _triangles(parent) {
	    var opts = {
	      parent: parent,
	      left: '50%', top: '50%',
	      shape: 'polygon',
	      duration: 2000,
	      radius: { 85: 125 },
	      angle: -60,
	      fill: 'none',
	      stroke: _colors2.default.WHITE,
	      strokeWidth: { 7: 0 },
	      easing: 'cubic.out',
	      delay: 100,
	      isShowEnd: false
	    };
	    var shape3 = new mojs.Shape(opts);

	    var shape3_1 = new mojs.Shape((0, _extends3.default)({}, opts, {
	      strokeWidth: { 4: 0 },
	      radius: { 85: 95 },
	      duration: 1400

	    }));

	    return [this._smallTriangles(parent), shape3, shape3_1];
	  };
	  /*
	    Method to add small white triangles.
	    @private
	    @param {Object} `HTML` element to add the circles to.
	    @returns {Array(Object)} Array of timelines.
	  */


	  WhiteTriangles.prototype._smallTriangles = function _smallTriangles(parent) {
	    var shift1 = 87,
	        shift2 = 50,
	        opts = {
	      parent: parent,
	      left: '50%', top: '50%',
	      shape: 'polygon',
	      duration: 2000,
	      radius: 14,
	      angle: -60,
	      fill: 'none',
	      stroke: _colors2.default.WHITE,
	      strokeWidth: { 14: 4 },
	      easing: 'expo.out',
	      isShowEnd: false
	    };

	    var shape2_1 = new mojs.Shape((0, _extends3.default)({}, opts, {
	      x: { 0: -shift1 },
	      y: { 0: -shift2 }
	    }));

	    var shape2_2 = new mojs.Shape((0, _extends3.default)({}, opts, {
	      x: { 0: shift1 },
	      y: { 0: -shift2 }
	    }));

	    var shape2_3 = new mojs.Shape((0, _extends3.default)({}, opts, {
	      x: 0,
	      y: { 0: 1.15 * shift1 }
	    }));

	    return [shape2_1, shape2_2, shape2_3];
	  };

	  return WhiteTriangles;
	}(_module2.default);

	exports.default = WhiteTriangles;

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _assign = __webpack_require__(83);

	var _assign2 = _interopRequireDefault(_assign);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _assign2.default || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];

	    for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }

	  return target;
	};

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(84), __esModule: true };

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(85);
	module.exports = __webpack_require__(15).Object.assign;

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.1 Object.assign(target, source)
	var $export = __webpack_require__(13);

	$export($export.S + $export.F, 'Object', {assign: __webpack_require__(86)});

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.2.1 Object.assign(target, source, ...)
	var getKeys  = __webpack_require__(34)
	  , gOPS     = __webpack_require__(61)
	  , pIE      = __webpack_require__(62)
	  , toObject = __webpack_require__(50)
	  , IObject  = __webpack_require__(37)
	  , $assign  = Object.assign;

	// should work with symbols and should have deterministic property order (V8 bug)
	module.exports = !$assign || __webpack_require__(24)(function(){
	  var A = {}
	    , B = {}
	    , S = Symbol()
	    , K = 'abcdefghijklmnopqrst';
	  A[S] = 7;
	  K.split('').forEach(function(k){ B[k] = k; });
	  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
	}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
	  var T     = toObject(target)
	    , aLen  = arguments.length
	    , index = 1
	    , getSymbols = gOPS.f
	    , isEnum     = pIE.f;
	  while(aLen > index){
	    var S      = IObject(arguments[index++])
	      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
	      , length = keys.length
	      , j      = 0
	      , key;
	    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
	  } return T;
	} : $assign;

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends2 = __webpack_require__(82);

	var _extends3 = _interopRequireDefault(_extends2);

	var _classCallCheck2 = __webpack_require__(2);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _possibleConstructorReturn2 = __webpack_require__(3);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(68);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _module = __webpack_require__(77);

	var _module2 = _interopRequireDefault(_module);

	var _colors = __webpack_require__(79);

	var _colors2 = _interopRequireDefault(_colors);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var GreenScene = function (_Module) {
	  (0, _inherits3.default)(GreenScene, _Module);

	  function GreenScene() {
	    (0, _classCallCheck3.default)(this, GreenScene);
	    return (0, _possibleConstructorReturn3.default)(this, _Module.apply(this, arguments));
	  }

	  /*
	    Method for initial module's render.
	    @private
	  */

	  GreenScene.prototype._render = function _render() {
	    var _this2 = this;

	    _Module.prototype._render.call(this);
	    var greenBg = document.querySelector('#js-green-bg'),
	        timeline = new mojs.Timeline({
	      delay: this._props.delay,
	      onStart: function onStart(isFwd) {
	        _this2._toggleOpacity(greenBg, isFwd);
	      },
	      onComplete: function onComplete(isFwd) {
	        _this2._toggleOpacity(greenBg, !isFwd);
	      }
	    });

	    greenBg.style['background'] = _colors2.default.GREEN;

	    var pinkSquare = new mojs.Shape({
	      left: '50%', top: '50%',
	      shape: 'rect',
	      stroke: _colors2.default.HOTPINK,
	      strokeWidth: 40,
	      angle: { '-240': 0 },
	      radius: 20,
	      scale: { 0: 2 },
	      duration: 1500,
	      fill: 'none',
	      easing: 'expo.out',
	      parent: greenBg
	    });

	    var Sparks = function (_mojs$CustomShape) {
	      (0, _inherits3.default)(Sparks, _mojs$CustomShape);

	      function Sparks() {
	        (0, _classCallCheck3.default)(this, Sparks);
	        return (0, _possibleConstructorReturn3.default)(this, _mojs$CustomShape.apply(this, arguments));
	      }

	      Sparks.prototype.getShape = function getShape() {
	        return '<path d="M11.8274713,76.9078071 C11.8274713,76.9078071 2.16693973,42.95046 30.0687526,21.2517012"></path><path d="M25.7538383,77.4836394 C25.7538383,77.4836394 20.7413252,19.6928312 92.8457655,18.1298659"></path><path d="M29.8949928,85.1781099 C29.8949928,85.1781099 41.4904038,48.3985179 81.1308462,59.416066"></path>';
	      };

	      return Sparks;
	    }(mojs.CustomShape);

	    mojs.addShape('sparks', Sparks);

	    var SPARKS_OPTS = {
	      shape: 'sparks',
	      parent: pinkSquare.el,
	      radius: 15,
	      left: '130%',
	      top: '25%',
	      fill: 'none',
	      strokeWidth: { 10: 0 },
	      stroke: 'white',
	      strokeDasharray: '75',
	      strokeDashoffset: { '75': '-75' },
	      duration: 1200,
	      // easing: 'cubic.out',
	      strokeLinecap: 'round'
	    };

	    var sparks1 = new mojs.Shape((0, _extends3.default)({}, SPARKS_OPTS, {
	      left: '125%',
	      top: '25%',
	      angle: 80
	    }));

	    var sparks2 = new mojs.Shape((0, _extends3.default)({}, SPARKS_OPTS, {
	      top: '125%',
	      left: '80%',
	      angle: 165
	    }));

	    var sparks3 = new mojs.Shape((0, _extends3.default)({}, SPARKS_OPTS, {
	      top: '75%',
	      left: '-25%',
	      angle: 250
	    }));

	    var sparks4 = new mojs.Shape((0, _extends3.default)({}, SPARKS_OPTS, {
	      top: '-25%',
	      left: '20%',
	      angle: 330
	    }));

	    return timeline.add(pinkSquare, sparks1, sparks2, sparks3, sparks4);
	  };

	  return GreenScene;
	}(_module2.default);

	// heart
	exports.default = GreenScene;

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends2 = __webpack_require__(82);

	var _extends3 = _interopRequireDefault(_extends2);

	var _classCallCheck2 = __webpack_require__(2);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _possibleConstructorReturn2 = __webpack_require__(3);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(68);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _module = __webpack_require__(77);

	var _module2 = _interopRequireDefault(_module);

	var _colors = __webpack_require__(79);

	var _colors2 = _interopRequireDefault(_colors);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Circle = function (_Module) {
	  (0, _inherits3.default)(Circle, _Module);

	  function Circle() {
	    (0, _classCallCheck3.default)(this, Circle);
	    return (0, _possibleConstructorReturn3.default)(this, _Module.apply(this, arguments));
	  }

	  /*
	    Method for initial module's render.
	    @private
	  */

	  Circle.prototype._render = function _render() {
	    var _this2 = this;

	    _Module.prototype._render.call(this);

	    var pinkBg = this._findEl('#js-pink-bg'),
	        timeline = new mojs.Timeline({
	      delay: this._props.delay,
	      onStart: function onStart(isFwd) {
	        _this2._toggleOpacity(pinkBg, isFwd);
	        if (isFwd) {
	          _this2.circle3._hide();
	        }
	      }
	    });

	    pinkBg.style['background'] = _colors2.default.PINK;

	    return timeline.add(this._scaleCircles(pinkBg)).add(this._triangles(pinkBg)).add(this._lines(pinkBg));
	  };
	  /*
	    Method to add the main scale circles to the scene.
	    @private
	    @param {Object} `HTML` element to add the circles to.
	    @returns {Array(Object)} Array of timelines.
	  */


	  Circle.prototype._scaleCircles = function _scaleCircles(parent) {
	    var circleSize = 500,
	        scale = this._calcScale(circleSize),
	        opts = {
	      parent: parent,
	      left: '50%', top: '50%',
	      radius: circleSize,
	      fill: _colors2.default.GREY,
	      scale: { 0.05: 0.2 },
	      duration: 800,
	      easing: 'cubic.out',
	      isShowEnd: false,
	      isForce3d: true
	    };

	    var circle1 = new mojs.Shape(opts).then({
	      easing: 'cubic.inout',
	      scale: .125,
	      duration: 600
	    }).then({
	      easing: 'cubic.inout',
	      scale: scale,
	      duration: 800
	    });

	    var circle2 = new mojs.Shape((0, _extends3.default)({}, opts, {
	      fill: _colors2.default.PINK,
	      scale: { 0: .1125 },
	      duration: 700,
	      delay: 1000

	    })).then({
	      easing: 'cubic.inout',
	      scale: scale,
	      duration: 700
	    });

	    var circle3 = new mojs.Shape((0, _extends3.default)({}, opts, {
	      fill: _colors2.default.GREY,
	      scale: { 0: scale },
	      duration: 1000,
	      delay: 2000,
	      isShowStart: true,
	      isShowEnd: true
	    }));
	    this.circle3 = circle3;

	    var smallCircle = new mojs.Shape({
	      parent: parent,
	      left: '50%', top: '50%',
	      radius: { 5: 25 },
	      fill: 'none',
	      stroke: _colors2.default.GREY,
	      strokeWidth: { 20: 0 },
	      isShowEnd: false,
	      delay: 1200,
	      duration: 500
	    });

	    // opacity:      { 1: 0 }
	    return [circle1, circle2, circle3, smallCircle];
	  };
	  /*
	    Method to add the lines that are near circle.
	    @private
	    @param {Object} `HTML` element to add the circles to.
	    @returns {Array(Object)} Array of timelines.
	  */


	  Circle.prototype._lines = function _lines(parent) {
	    var lineOpts = {
	      parent: parent,
	      shape: 'line',
	      x: -180,
	      radius: 50,
	      radiusY: 0,
	      stroke: _colors2.default.GREY,
	      strokeWidth: { 15: 0 },
	      duration: 1000,
	      isShowEnd: false,
	      strokeDasharray: '100% 100%',
	      strokeDashoffset: { '-100%': '100%' },
	      easing: 'cubic.out'
	    };
	    var line1 = new mojs.Shape(lineOpts);

	    var line2 = new mojs.Shape((0, _extends3.default)({}, lineOpts, {
	      angle: 180,
	      x: -lineOpts.x
	    }));

	    return [line1, line2];
	  };
	  /*
	    Method to add the triangles that are inside circle,
	    moving toward it's center.
	    @private
	    @param {Object} `HTML` element to add the circles to.
	    @returns {Array(Object)} Array of timelines.
	  */


	  Circle.prototype._triangles = function _triangles(parent) {
	    var _y;

	    var triangleOpts = {
	      parent: parent,
	      left: '50%', top: '50%',
	      shape: 'polygon',
	      radius: 15,
	      duration: 700,
	      fill: _colors2.default.PINK,
	      y: { 80: -15 },
	      scale: { 1: 0 },
	      delay: 850,
	      easing: 'cubic.out'
	    };
	    var triangle1 = new mojs.Shape(triangleOpts);

	    var triangle2 = new mojs.Shape((0, _extends3.default)({}, triangleOpts, {
	      y: (_y = {}, _y[-80] = 15, _y),
	      angle: 180
	    }));
	    return [triangle1, triangle2];
	  };
	  /*
	    Method to scale amount for radius to fill the screen.
	    @private
	    @returns Scale size.
	  */


	  Circle.prototype._calcScale = function _calcScale(radius) {
	    // since it is `radius` not `diameter` - / 2
	    // since it is a circle - * 1.25 to fill the square screen
	    return 1.4 * (this._getWindowSize() / radius / 2);
	  };

	  return Circle;
	}(_module2.default);

	exports.default = Circle;

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends2 = __webpack_require__(82);

	var _extends3 = _interopRequireDefault(_extends2);

	var _classCallCheck2 = __webpack_require__(2);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _possibleConstructorReturn2 = __webpack_require__(3);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(68);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _module = __webpack_require__(77);

	var _module2 = _interopRequireDefault(_module);

	var _colors = __webpack_require__(79);

	var _colors2 = _interopRequireDefault(_colors);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Logo = function (_Module) {
	  (0, _inherits3.default)(Logo, _Module);

	  function Logo() {
	    (0, _classCallCheck3.default)(this, Logo);
	    return (0, _possibleConstructorReturn3.default)(this, _Module.apply(this, arguments));
	  }

	  /*
	    Method for initial module's render.
	    @private
	  */

	  Logo.prototype._render = function _render() {
	    var _this2 = this,
	        _y,
	        _y2,
	        _y3;

	    _Module.prototype._render.call(this);
	    this._createChars();

	    var approximate = mojs.easing.approximate;


	    var logo = this._findEl('#js-logo');
	    var pinkBg = this._findEl('#js-pink-bg'),
	        shiftCurve = approximate(mojs.easing.path('M0,100 C50,100 50,100 50,50 C50,0 50,0 100,0')),
	        scaleCurve = approximate(mojs.easing.path('M0,100 C21.3776817,95.8051376 50,77.3262711 50,-700 C50,80.1708527 76.6222458,93.9449005 100,100')),
	        timeline = new mojs.Timeline({
	      delay: this._props.delay,
	      // speed: .75,
	      onStart: function onStart(isFwd) {
	        mojs.h.setPrefixedStyle(logo, 'transform', 'none');
	      },
	      onComplete: function onComplete(isFwd) {
	        _this2._toggleOpacity(pinkBg, !isFwd);

	        var modules = _this2.underlineShape.childModules;
	        for (var i = 0; i < modules.length; i++) {
	          modules[i]._hide();
	        }
	      }
	    });

	    var scale = function scale(curve, n) {
	      return function (p) {
	        return n * curve(p);
	      };
	    };

	    var increase = function increase(curve, n) {
	      return function (p) {
	        return n + curve(p);
	      };
	    };

	    var scaleC = approximate(increase(scaleCurve, 1));

	    var scaledCurve = function scaledCurve(amount) {
	      return increase(scale(scaleCurve, amount), 1);
	    };

	    var scaleCShort = approximate(scaledCurve(.75));

	    var charSize = 25;
	    var leftStep = 22;

	    var CHAR_OPTS = {
	      parent: logo,
	      fill: 'white',
	      radius: charSize / 2,
	      stroke: 'white',
	      isForce3d: true
	    };

	    var CHAR_HIDE_THEN = {
	      delay: 1600,
	      isShowEnd: false
	    };

	    var mNewChar = new mojs.Shape((0, _extends3.default)({}, CHAR_OPTS, {
	      shape: 'm',
	      left: 1 * leftStep + '%',
	      x: -7,
	      y: (_y = {}, _y[350] = 150, _y.easing = shiftCurve, _y),
	      scaleY: { 1: 1, curve: scaleCShort },
	      origin: { '50% 100%': '50% 0%', easing: shiftCurve },
	      delay: 400,
	      duration: 1000
	    })).then({
	      y: { to: 0, easing: shiftCurve },
	      scaleY: { 1: 1, curve: approximate(scaledCurve(.5)) },
	      origin: { '50% 100%': '50% 0%', easing: shiftCurve },
	      delay: 200
	    }).then(CHAR_HIDE_THEN);

	    var oNewChar = new mojs.Shape((0, _extends3.default)({}, CHAR_OPTS, {
	      shape: 'circle',
	      fill: 'none',
	      left: 2 * leftStep + '%',
	      strokeWidth: 3,
	      x: 200,
	      y: (_y2 = {}, _y2[-100] = 250, _y2.easing = shiftCurve, _y2),
	      scaleY: { 1: 1, curve: scaleC },
	      origin: { '50% 0%': '50% 100%', easing: shiftCurve },
	      delay: 600,
	      duration: 800
	    })).then({
	      duration: 700,
	      x: { to: 0, easing: shiftCurve },
	      scaleX: { 1: 1, curve: scaleCShort },
	      origin: { '100% 50%': '0% 50%', easing: shiftCurve }
	    }).then({
	      duration: 1200,
	      y: { to: 0, easing: shiftCurve },
	      scaleY: { 1: 1, curve: scaleCShort },
	      origin: { '50% 100%': '50% 0%', easing: shiftCurve }
	    }).then(CHAR_HIDE_THEN);

	    var oNewCharInner = new mojs.Shape({
	      parent: oNewChar.el,
	      fill: 'white',
	      radius: 3,
	      y: { 0: 35 },
	      delay: 2300,
	      easing: 'expo.out',
	      isForce3d: true,
	      isShowStart: true
	    }).then({
	      y: 0,
	      easing: 'elastic.out',
	      duration: 2000
	    });

	    var jNewChar = new mojs.Shape((0, _extends3.default)({}, CHAR_OPTS, {
	      shape: 'j',
	      left: 3 * leftStep + '%',
	      x: -200,
	      y: (_y3 = {}, _y3[250] = -100, _y3.easing = shiftCurve, _y3),
	      scaleY: { 1: 1, curve: scaleC },
	      origin: { '50% 100%': '50% 0%', easing: shiftCurve },
	      delay: 40,
	      duration: 1000
	    })).then({
	      duration: 900,
	      x: { to: 0, easing: shiftCurve },
	      scaleX: { 1: 1, curve: scaleCShort },
	      origin: { '0% 50%': '100% 50%', easing: shiftCurve }
	    }).then({
	      y: { to: 0, easing: shiftCurve },
	      scaleY: { 1: 1, curve: approximate(scaledCurve(.5)) },
	      origin: { '50% 0%': '50% 100%', easing: shiftCurve }
	    }).then(CHAR_HIDE_THEN);

	    var sNewChar = new mojs.Shape((0, _extends3.default)({}, CHAR_OPTS, {
	      shape: 's',
	      left: 4 * leftStep + '%',
	      x: { 500: 0, easing: shiftCurve },
	      y: 200,
	      scaleX: { 1: 1, curve: scaleC },
	      origin: { '100% 50%': '0% 100%', easing: shiftCurve },
	      delay: 200,
	      duration: 900
	    })).then({
	      delay: 200,
	      y: { to: 0, easing: shiftCurve },
	      scaleY: { 1: 1, curve: scaleCShort },
	      origin: { '50% 100%': '50% 0%', easing: shiftCurve }
	    }).then((0, _extends3.default)({}, CHAR_HIDE_THEN, { delay: 2200 }));

	    return timeline.add(mNewChar, oNewChar, oNewCharInner, jNewChar, sNewChar, this._addLines(logo), this._addShapes(logo), this._logoShift());
	  };
	  /*
	    Method to add bright line shapes.
	    @private
	    @param {Object} HTML element to use as parent of shapes.
	    @returns {Array(Object)} Array of Shapes.
	  */


	  Logo.prototype._addShapes = function _addShapes(parent) {
	    var StaggerShape = mojs.stagger(mojs.Shape);

	    var stagger = new StaggerShape({
	      parent: parent,
	      left: '100%',
	      x: [-20, 10, 0],
	      y: [-25, -5, -35],
	      quantifier: 'shape',
	      shape: ['circle', 'polygon', 'rect'],
	      radius: 7,
	      fill: 'none',
	      stroke: ['deeppink', _colors2.default.CYAN, _colors2.default.YELLOW],
	      strokeWidth: { 5: 0 },
	      scale: { .75: 1 },
	      delay: 'stagger(3200, 100)',
	      isTimelineLess: true
	    });
	    return stagger;
	  };
	  /*
	    Method to add bright line shapes.
	    @private
	    @param {Object} HTML element to use as parent of shapes.
	    @returns {Array(Object)} Array of Shapes.
	  */


	  Logo.prototype._addLines = function _addLines(logo) {
	    var _y4;

	    var opts = {
	      shape: 'line',
	      strokeWidth: { 10: 0 },
	      stroke: _colors2.default.CYAN,
	      radius: 44,
	      parent: logo,
	      angle: 90,
	      duration: 800,
	      delay: 850,
	      radiusY: 0,
	      strokeDasharray: '100% 100%',
	      strokeDashoffset: { '100%': '-100%' }
	    };

	    var line1 = new mojs.Shape((0, _extends3.default)({}, opts, {
	      x: 189,
	      y: (_y4 = {}, _y4[-20] = 160, _y4)
	    }));

	    var line2 = new mojs.Shape((0, _extends3.default)({}, opts, {
	      x: -175,
	      y: { 200: -20 },
	      stroke: _colors2.default.HOTPINK,
	      strokeDashoffset: { '-100%': '100%' },
	      delay: 500
	    }));

	    var line3 = new mojs.Shape((0, _extends3.default)({}, opts, {
	      radius: 53,
	      // x: 43,
	      y: 30,
	      stroke: _colors2.default.YELLOW,
	      strokeDashoffset: { '-100%': '100%' },
	      delay: 1400,
	      angle: 0
	    }));

	    var StaggerShape = new mojs.stagger(mojs.Shape);

	    var underlines = new StaggerShape((0, _extends3.default)({}, opts, {
	      radius: 53,
	      angle: 0,
	      radiusY: 0,
	      y: 30,
	      strokeWidth: 2,
	      stroke: [_colors2.default.HOTPINK, _colors2.default.YELLOW, _colors2.default.CYAN, _colors2.default.WHITE],
	      duration: 1000,
	      delay: 'stagger(2900, 250)',
	      strokeDasharray: null,
	      strokeDashoffset: null,
	      scaleX: { 0: 1 },
	      origin: '0 50%',
	      quantifier: 'stroke',
	      easing: 'expo.out',
	      x: 1,
	      isForce3d: true
	    }));
	    this.underlineShape = underlines;

	    return [line1, line2, line3, underlines];
	  };
	  /*
	    Method to describe last shift logo sequence.
	    @private
	    @param {Function} Shift easing.
	    @param {Function} Scale easing.
	  */


	  Logo.prototype._logoShift = function _logoShift(shiftEase, scaleCurve) {
	    var timeline = new mojs.Timeline({ delay: 4800 });

	    var logo = this._findEl('#js-logo');

	    this._getLastShift();
	    var yShift = this._lastShift;

	    mojs.h.setPrefixedStyle(logo, 'transform-origin', '50% 0');
	    var tween = new mojs.Tween({
	      duration: 600,
	      onUpdate: function onUpdate(p) {
	        var shiftP = mojs.easing.cubic.in(p);
	        var scaleP = mojs.easing.quad.in(p);

	        mojs.h.setPrefixedStyle(logo, 'transform', 'translate(0px, ' + yShift * shiftP + 'px)\n          scaleY(' + (1 + 25 * scaleP) + ')');
	      }
	    });

	    return timeline.add(tween);
	  };
	  /*
	    Method to get the last Y shift.
	  */


	  Logo.prototype._getLastShift = function _getLastShift() {
	    var height = this._getWindowHeight();
	    this._lastShift = height / 1.5;
	  };

	  Logo.prototype._createChars = function _createChars() {
	    var M = function (_mojs$CustomShape) {
	      (0, _inherits3.default)(M, _mojs$CustomShape);

	      function M() {
	        (0, _classCallCheck3.default)(this, M);
	        return (0, _possibleConstructorReturn3.default)(this, _mojs$CustomShape.apply(this, arguments));
	      }

	      M.prototype.getShape = function getShape() {
	        return '<path d="M91.5714286,44.4285714 L91.5714286,100 L96.7142857,100 L96.7142857,33.4285714 L49.8571429,72 L3,33.4285714 L3,100 L8.14285714,100 L8.14285714,44.4285714 L49.8571429,78.7142857 L91.5714286,44.4285714 Z M49.8571429,38.7142857 L92,3.85714286 L88.7142857,-6.50146603e-13 L49.8571429,31.8571429 L11,-6.50146603e-13 L7.71428571,3.85714286 L49.8571429,38.7142857 Z"></path>';
	      };

	      return M;
	    }(mojs.CustomShape);

	    mojs.addShape('m', M);

	    var J = function (_mojs$CustomShape2) {
	      (0, _inherits3.default)(J, _mojs$CustomShape2);

	      function J() {
	        (0, _classCallCheck3.default)(this, J);
	        return (0, _possibleConstructorReturn3.default)(this, _mojs$CustomShape2.apply(this, arguments));
	      }

	      J.prototype.getShape = function getShape() {
	        return '<path d="M22,87.535014 C27.7422969,95.0980392 36.8459384,100 47.070028,100 C64.2969188,100 78.442577,88.6554622 78.442577,68.627451 L78.442577,0 L73.4005602,0 L73.4005602,68.627451 C73.4005602,85.8543417 61.4957983,94.9579832 47.070028,94.9579832 C38.3865546,94.9579832 30.5434174,90.6162465 25.7815126,84.0336134 L22,87.535014 Z"></path>';
	      };

	      return J;
	    }(mojs.CustomShape);

	    mojs.addShape('j', J);

	    var S = function (_mojs$CustomShape3) {
	      (0, _inherits3.default)(S, _mojs$CustomShape3);

	      function S() {
	        (0, _classCallCheck3.default)(this, S);
	        return (0, _possibleConstructorReturn3.default)(this, _mojs$CustomShape3.apply(this, arguments));
	      }

	      S.prototype.getShape = function getShape() {
	        return '<path d="M15,71.0164835 C15,92.3076923 34.7802198,100 49.478022,100 C68.5714286,100 84.0934066,91.2087912 84.0934066,72.3901099 C84.0934066,61.5384615 79.2857143,51.7857143 61.978022,45.1923077 C45.2197802,38.8736264 27.2252747,35.5769231 27.2252747,21.8406593 C27.2252747,10.3021978 38.0769231,4.53296703 48.9285714,4.53296703 C59.9175824,4.53296703 70.7692308,10.3021978 70.7692308,21.8406593 L75.7142857,21.8406593 C75.7142857,7.14285714 62.6648352,0 49.478022,0 C36.0164835,0 22.2802198,7.41758242 22.2802198,21.8406593 C22.2802198,39.5604396 43.4340659,42.9945055 60.6043956,49.5879121 C74.8901099,55.0824176 79.1483516,63.7362637 79.1483516,72.5274725 C79.1483516,89.010989 64.1758242,95.0549451 49.478022,95.0549451 C35.3296703,95.0549451 19.9450549,87.6373626 19.9450549,71.0164835 L15,71.0164835 Z"></path>';
	      };

	      return S;
	    }(mojs.CustomShape);

	    mojs.addShape('s', S);
	  };

	  return Logo;
	}(_module2.default);

	exports.default = Logo;

/***/ }
/******/ ]);