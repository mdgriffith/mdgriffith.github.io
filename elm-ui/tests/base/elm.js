(function(scope){
'use strict';

function F(arity, fun, wrapper) {
  wrapper.a = arity;
  wrapper.f = fun;
  return wrapper;
}

function F2(fun) {
  return F(2, fun, function(a) { return function(b) { return fun(a,b); }; })
}
function F3(fun) {
  return F(3, fun, function(a) {
    return function(b) { return function(c) { return fun(a, b, c); }; };
  });
}
function F4(fun) {
  return F(4, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return fun(a, b, c, d); }; }; };
  });
}
function F5(fun) {
  return F(5, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return fun(a, b, c, d, e); }; }; }; };
  });
}
function F6(fun) {
  return F(6, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return fun(a, b, c, d, e, f); }; }; }; }; };
  });
}
function F7(fun) {
  return F(7, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return fun(a, b, c, d, e, f, g); }; }; }; }; }; };
  });
}
function F8(fun) {
  return F(8, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return function(h) {
    return fun(a, b, c, d, e, f, g, h); }; }; }; }; }; }; };
  });
}
function F9(fun) {
  return F(9, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return function(h) { return function(i) {
    return fun(a, b, c, d, e, f, g, h, i); }; }; }; }; }; }; }; };
  });
}

function A2(fun, a, b) {
  return fun.a === 2 ? fun.f(a, b) : fun(a)(b);
}
function A3(fun, a, b, c) {
  return fun.a === 3 ? fun.f(a, b, c) : fun(a)(b)(c);
}
function A4(fun, a, b, c, d) {
  return fun.a === 4 ? fun.f(a, b, c, d) : fun(a)(b)(c)(d);
}
function A5(fun, a, b, c, d, e) {
  return fun.a === 5 ? fun.f(a, b, c, d, e) : fun(a)(b)(c)(d)(e);
}
function A6(fun, a, b, c, d, e, f) {
  return fun.a === 6 ? fun.f(a, b, c, d, e, f) : fun(a)(b)(c)(d)(e)(f);
}
function A7(fun, a, b, c, d, e, f, g) {
  return fun.a === 7 ? fun.f(a, b, c, d, e, f, g) : fun(a)(b)(c)(d)(e)(f)(g);
}
function A8(fun, a, b, c, d, e, f, g, h) {
  return fun.a === 8 ? fun.f(a, b, c, d, e, f, g, h) : fun(a)(b)(c)(d)(e)(f)(g)(h);
}
function A9(fun, a, b, c, d, e, f, g, h, i) {
  return fun.a === 9 ? fun.f(a, b, c, d, e, f, g, h, i) : fun(a)(b)(c)(d)(e)(f)(g)(h)(i);
}

console.warn('Compiled in DEV mode. Follow the advice at https://elm-lang.org/0.19.0/optimize for better performance and smaller assets.');


var _List_Nil_UNUSED = { $: 0 };
var _List_Nil = { $: '[]' };

function _List_Cons_UNUSED(hd, tl) { return { $: 1, a: hd, b: tl }; }
function _List_Cons(hd, tl) { return { $: '::', a: hd, b: tl }; }


var _List_cons = F2(_List_Cons);

function _List_fromArray(arr)
{
	var out = _List_Nil;
	for (var i = arr.length; i--; )
	{
		out = _List_Cons(arr[i], out);
	}
	return out;
}

function _List_toArray(xs)
{
	for (var out = []; xs.b; xs = xs.b) // WHILE_CONS
	{
		out.push(xs.a);
	}
	return out;
}

var _List_map2 = F3(function(f, xs, ys)
{
	for (var arr = []; xs.b && ys.b; xs = xs.b, ys = ys.b) // WHILE_CONSES
	{
		arr.push(A2(f, xs.a, ys.a));
	}
	return _List_fromArray(arr);
});

var _List_map3 = F4(function(f, xs, ys, zs)
{
	for (var arr = []; xs.b && ys.b && zs.b; xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
	{
		arr.push(A3(f, xs.a, ys.a, zs.a));
	}
	return _List_fromArray(arr);
});

var _List_map4 = F5(function(f, ws, xs, ys, zs)
{
	for (var arr = []; ws.b && xs.b && ys.b && zs.b; ws = ws.b, xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
	{
		arr.push(A4(f, ws.a, xs.a, ys.a, zs.a));
	}
	return _List_fromArray(arr);
});

var _List_map5 = F6(function(f, vs, ws, xs, ys, zs)
{
	for (var arr = []; vs.b && ws.b && xs.b && ys.b && zs.b; vs = vs.b, ws = ws.b, xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
	{
		arr.push(A5(f, vs.a, ws.a, xs.a, ys.a, zs.a));
	}
	return _List_fromArray(arr);
});

var _List_sortBy = F2(function(f, xs)
{
	return _List_fromArray(_List_toArray(xs).sort(function(a, b) {
		return _Utils_cmp(f(a), f(b));
	}));
});

var _List_sortWith = F2(function(f, xs)
{
	return _List_fromArray(_List_toArray(xs).sort(function(a, b) {
		var ord = A2(f, a, b);
		return ord === elm$core$Basics$EQ ? 0 : ord === elm$core$Basics$LT ? -1 : 1;
	}));
});



// EQUALITY

function _Utils_eq(x, y)
{
	for (
		var pair, stack = [], isEqual = _Utils_eqHelp(x, y, 0, stack);
		isEqual && (pair = stack.pop());
		isEqual = _Utils_eqHelp(pair.a, pair.b, 0, stack)
		)
	{}

	return isEqual;
}

function _Utils_eqHelp(x, y, depth, stack)
{
	if (depth > 100)
	{
		stack.push(_Utils_Tuple2(x,y));
		return true;
	}

	if (x === y)
	{
		return true;
	}

	if (typeof x !== 'object' || x === null || y === null)
	{
		typeof x === 'function' && _Debug_crash(5);
		return false;
	}

	/**/
	if (x.$ === 'Set_elm_builtin')
	{
		x = elm$core$Set$toList(x);
		y = elm$core$Set$toList(y);
	}
	if (x.$ === 'RBNode_elm_builtin' || x.$ === 'RBEmpty_elm_builtin')
	{
		x = elm$core$Dict$toList(x);
		y = elm$core$Dict$toList(y);
	}
	//*/

	/**_UNUSED/
	if (x.$ < 0)
	{
		x = elm$core$Dict$toList(x);
		y = elm$core$Dict$toList(y);
	}
	//*/

	for (var key in x)
	{
		if (!_Utils_eqHelp(x[key], y[key], depth + 1, stack))
		{
			return false;
		}
	}
	return true;
}

var _Utils_equal = F2(_Utils_eq);
var _Utils_notEqual = F2(function(a, b) { return !_Utils_eq(a,b); });



// COMPARISONS

// Code in Generate/JavaScript.hs, Basics.js, and List.js depends on
// the particular integer values assigned to LT, EQ, and GT.

function _Utils_cmp(x, y, ord)
{
	if (typeof x !== 'object')
	{
		return x === y ? /*EQ*/ 0 : x < y ? /*LT*/ -1 : /*GT*/ 1;
	}

	/**/
	if (x instanceof String)
	{
		var a = x.valueOf();
		var b = y.valueOf();
		return a === b ? 0 : a < b ? -1 : 1;
	}
	//*/

	/**_UNUSED/
	if (!x.$)
	//*/
	/**/
	if (x.$[0] === '#')
	//*/
	{
		return (ord = _Utils_cmp(x.a, y.a))
			? ord
			: (ord = _Utils_cmp(x.b, y.b))
				? ord
				: _Utils_cmp(x.c, y.c);
	}

	// traverse conses until end of a list or a mismatch
	for (; x.b && y.b && !(ord = _Utils_cmp(x.a, y.a)); x = x.b, y = y.b) {} // WHILE_CONSES
	return ord || (x.b ? /*GT*/ 1 : y.b ? /*LT*/ -1 : /*EQ*/ 0);
}

var _Utils_lt = F2(function(a, b) { return _Utils_cmp(a, b) < 0; });
var _Utils_le = F2(function(a, b) { return _Utils_cmp(a, b) < 1; });
var _Utils_gt = F2(function(a, b) { return _Utils_cmp(a, b) > 0; });
var _Utils_ge = F2(function(a, b) { return _Utils_cmp(a, b) >= 0; });

var _Utils_compare = F2(function(x, y)
{
	var n = _Utils_cmp(x, y);
	return n < 0 ? elm$core$Basics$LT : n ? elm$core$Basics$GT : elm$core$Basics$EQ;
});


// COMMON VALUES

var _Utils_Tuple0_UNUSED = 0;
var _Utils_Tuple0 = { $: '#0' };

function _Utils_Tuple2_UNUSED(a, b) { return { a: a, b: b }; }
function _Utils_Tuple2(a, b) { return { $: '#2', a: a, b: b }; }

function _Utils_Tuple3_UNUSED(a, b, c) { return { a: a, b: b, c: c }; }
function _Utils_Tuple3(a, b, c) { return { $: '#3', a: a, b: b, c: c }; }

function _Utils_chr_UNUSED(c) { return c; }
function _Utils_chr(c) { return new String(c); }


// RECORDS

function _Utils_update(oldRecord, updatedFields)
{
	var newRecord = {};

	for (var key in oldRecord)
	{
		newRecord[key] = oldRecord[key];
	}

	for (var key in updatedFields)
	{
		newRecord[key] = updatedFields[key];
	}

	return newRecord;
}


// APPEND

var _Utils_append = F2(_Utils_ap);

function _Utils_ap(xs, ys)
{
	// append Strings
	if (typeof xs === 'string')
	{
		return xs + ys;
	}

	// append Lists
	if (!xs.b)
	{
		return ys;
	}
	var root = _List_Cons(xs.a, ys);
	xs = xs.b
	for (var curr = root; xs.b; xs = xs.b) // WHILE_CONS
	{
		curr = curr.b = _List_Cons(xs.a, ys);
	}
	return root;
}



var _JsArray_empty = [];

function _JsArray_singleton(value)
{
    return [value];
}

function _JsArray_length(array)
{
    return array.length;
}

var _JsArray_initialize = F3(function(size, offset, func)
{
    var result = new Array(size);

    for (var i = 0; i < size; i++)
    {
        result[i] = func(offset + i);
    }

    return result;
});

var _JsArray_initializeFromList = F2(function (max, ls)
{
    var result = new Array(max);

    for (var i = 0; i < max && ls.b; i++)
    {
        result[i] = ls.a;
        ls = ls.b;
    }

    result.length = i;
    return _Utils_Tuple2(result, ls);
});

var _JsArray_unsafeGet = F2(function(index, array)
{
    return array[index];
});

var _JsArray_unsafeSet = F3(function(index, value, array)
{
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++)
    {
        result[i] = array[i];
    }

    result[index] = value;
    return result;
});

var _JsArray_push = F2(function(value, array)
{
    var length = array.length;
    var result = new Array(length + 1);

    for (var i = 0; i < length; i++)
    {
        result[i] = array[i];
    }

    result[length] = value;
    return result;
});

var _JsArray_foldl = F3(function(func, acc, array)
{
    var length = array.length;

    for (var i = 0; i < length; i++)
    {
        acc = A2(func, array[i], acc);
    }

    return acc;
});

var _JsArray_foldr = F3(function(func, acc, array)
{
    for (var i = array.length - 1; i >= 0; i--)
    {
        acc = A2(func, array[i], acc);
    }

    return acc;
});

var _JsArray_map = F2(function(func, array)
{
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++)
    {
        result[i] = func(array[i]);
    }

    return result;
});

var _JsArray_indexedMap = F3(function(func, offset, array)
{
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++)
    {
        result[i] = A2(func, offset + i, array[i]);
    }

    return result;
});

var _JsArray_slice = F3(function(from, to, array)
{
    return array.slice(from, to);
});

var _JsArray_appendN = F3(function(n, dest, source)
{
    var destLen = dest.length;
    var itemsToCopy = n - destLen;

    if (itemsToCopy > source.length)
    {
        itemsToCopy = source.length;
    }

    var size = destLen + itemsToCopy;
    var result = new Array(size);

    for (var i = 0; i < destLen; i++)
    {
        result[i] = dest[i];
    }

    for (var i = 0; i < itemsToCopy; i++)
    {
        result[i + destLen] = source[i];
    }

    return result;
});



// LOG

var _Debug_log_UNUSED = F2(function(tag, value)
{
	return value;
});

var _Debug_log = F2(function(tag, value)
{
	console.log(tag + ': ' + _Debug_toString(value));
	return value;
});


// TODOS

function _Debug_todo(moduleName, region)
{
	return function(message) {
		_Debug_crash(8, moduleName, region, message);
	};
}

function _Debug_todoCase(moduleName, region, value)
{
	return function(message) {
		_Debug_crash(9, moduleName, region, value, message);
	};
}


// TO STRING

function _Debug_toString_UNUSED(value)
{
	return '<internals>';
}

function _Debug_toString(value)
{
	return _Debug_toAnsiString(false, value);
}

function _Debug_toAnsiString(ansi, value)
{
	if (typeof value === 'function')
	{
		return _Debug_internalColor(ansi, '<function>');
	}

	if (typeof value === 'boolean')
	{
		return _Debug_ctorColor(ansi, value ? 'True' : 'False');
	}

	if (typeof value === 'number')
	{
		return _Debug_numberColor(ansi, value + '');
	}

	if (value instanceof String)
	{
		return _Debug_charColor(ansi, "'" + _Debug_addSlashes(value, true) + "'");
	}

	if (typeof value === 'string')
	{
		return _Debug_stringColor(ansi, '"' + _Debug_addSlashes(value, false) + '"');
	}

	if (typeof value === 'object' && '$' in value)
	{
		var tag = value.$;

		if (typeof tag === 'number')
		{
			return _Debug_internalColor(ansi, '<internals>');
		}

		if (tag[0] === '#')
		{
			var output = [];
			for (var k in value)
			{
				if (k === '$') continue;
				output.push(_Debug_toAnsiString(ansi, value[k]));
			}
			return '(' + output.join(',') + ')';
		}

		if (tag === 'Set_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Set')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, elm$core$Set$toList(value));
		}

		if (tag === 'RBNode_elm_builtin' || tag === 'RBEmpty_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Dict')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, elm$core$Dict$toList(value));
		}

		if (tag === 'Array_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Array')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, elm$core$Array$toList(value));
		}

		if (tag === '::' || tag === '[]')
		{
			var output = '[';

			value.b && (output += _Debug_toAnsiString(ansi, value.a), value = value.b)

			for (; value.b; value = value.b) // WHILE_CONS
			{
				output += ',' + _Debug_toAnsiString(ansi, value.a);
			}
			return output + ']';
		}

		var output = '';
		for (var i in value)
		{
			if (i === '$') continue;
			var str = _Debug_toAnsiString(ansi, value[i]);
			var c0 = str[0];
			var parenless = c0 === '{' || c0 === '(' || c0 === '[' || c0 === '<' || c0 === '"' || str.indexOf(' ') < 0;
			output += ' ' + (parenless ? str : '(' + str + ')');
		}
		return _Debug_ctorColor(ansi, tag) + output;
	}

	if (typeof value === 'object')
	{
		var output = [];
		for (var key in value)
		{
			var field = key[0] === '_' ? key.slice(1) : key;
			output.push(_Debug_fadeColor(ansi, field) + ' = ' + _Debug_toAnsiString(ansi, value[key]));
		}
		if (output.length === 0)
		{
			return '{}';
		}
		return '{ ' + output.join(', ') + ' }';
	}

	return _Debug_internalColor(ansi, '<internals>');
}

function _Debug_addSlashes(str, isChar)
{
	var s = str
		.replace(/\\/g, '\\\\')
		.replace(/\n/g, '\\n')
		.replace(/\t/g, '\\t')
		.replace(/\r/g, '\\r')
		.replace(/\v/g, '\\v')
		.replace(/\0/g, '\\0');

	if (isChar)
	{
		return s.replace(/\'/g, '\\\'');
	}
	else
	{
		return s.replace(/\"/g, '\\"');
	}
}

function _Debug_ctorColor(ansi, string)
{
	return ansi ? '\x1b[96m' + string + '\x1b[0m' : string;
}

function _Debug_numberColor(ansi, string)
{
	return ansi ? '\x1b[95m' + string + '\x1b[0m' : string;
}

function _Debug_stringColor(ansi, string)
{
	return ansi ? '\x1b[93m' + string + '\x1b[0m' : string;
}

function _Debug_charColor(ansi, string)
{
	return ansi ? '\x1b[92m' + string + '\x1b[0m' : string;
}

function _Debug_fadeColor(ansi, string)
{
	return ansi ? '\x1b[37m' + string + '\x1b[0m' : string;
}

function _Debug_internalColor(ansi, string)
{
	return ansi ? '\x1b[94m' + string + '\x1b[0m' : string;
}



// CRASH


function _Debug_crash_UNUSED(identifier)
{
	throw new Error('https://github.com/elm/core/blob/1.0.0/hints/' + identifier + '.md');
}


function _Debug_crash(identifier, fact1, fact2, fact3, fact4)
{
	switch(identifier)
	{
		case 0:
			throw new Error('What node should I take over? In JavaScript I need something like:\n\n    Elm.Main.init({\n        node: document.getElementById("elm-node")\n    })\n\nYou need to do this with any Browser.sandbox or Browser.element program.');

		case 1:
			throw new Error('Browser.application programs cannot handle URLs like this:\n\n    ' + document.location.href + '\n\nWhat is the root? The root of your file system? Try looking at this program with `elm reactor` or some other server.');

		case 2:
			var jsonErrorString = fact1;
			throw new Error('Problem with the flags given to your Elm program on initialization.\n\n' + jsonErrorString);

		case 3:
			var portName = fact1;
			throw new Error('There can only be one port named `' + portName + '`, but your program has multiple.');

		case 4:
			var portName = fact1;
			var problem = fact2;
			throw new Error('Trying to send an unexpected type of value through port `' + portName + '`:\n' + problem);

		case 5:
			throw new Error('Trying to use `(==)` on functions.\nThere is no way to know if functions are "the same" in the Elm sense.\nRead more about this at https://package.elm-lang.org/packages/elm/core/latest/Basics#== which describes why it is this way and what the better version will look like.');

		case 6:
			var moduleName = fact1;
			throw new Error('Your page is loading multiple Elm scripts with a module named ' + moduleName + '. Maybe a duplicate script is getting loaded accidentally? If not, rename one of them so I know which is which!');

		case 8:
			var moduleName = fact1;
			var region = fact2;
			var message = fact3;
			throw new Error('TODO in module `' + moduleName + '` ' + _Debug_regionToString(region) + '\n\n' + message);

		case 9:
			var moduleName = fact1;
			var region = fact2;
			var value = fact3;
			var message = fact4;
			throw new Error(
				'TODO in module `' + moduleName + '` from the `case` expression '
				+ _Debug_regionToString(region) + '\n\nIt received the following value:\n\n    '
				+ _Debug_toString(value).replace('\n', '\n    ')
				+ '\n\nBut the branch that handles it says:\n\n    ' + message.replace('\n', '\n    ')
			);

		case 10:
			throw new Error('Bug in https://github.com/elm/virtual-dom/issues');

		case 11:
			throw new Error('Cannot perform mod 0. Division by zero error.');
	}
}

function _Debug_regionToString(region)
{
	if (region.start.line === region.end.line)
	{
		return 'on line ' + region.start.line;
	}
	return 'on lines ' + region.start.line + ' through ' + region.end.line;
}



// MATH

var _Basics_add = F2(function(a, b) { return a + b; });
var _Basics_sub = F2(function(a, b) { return a - b; });
var _Basics_mul = F2(function(a, b) { return a * b; });
var _Basics_fdiv = F2(function(a, b) { return a / b; });
var _Basics_idiv = F2(function(a, b) { return (a / b) | 0; });
var _Basics_pow = F2(Math.pow);

var _Basics_remainderBy = F2(function(b, a) { return a % b; });

// https://www.microsoft.com/en-us/research/wp-content/uploads/2016/02/divmodnote-letter.pdf
var _Basics_modBy = F2(function(modulus, x)
{
	var answer = x % modulus;
	return modulus === 0
		? _Debug_crash(11)
		:
	((answer > 0 && modulus < 0) || (answer < 0 && modulus > 0))
		? answer + modulus
		: answer;
});


// TRIGONOMETRY

var _Basics_pi = Math.PI;
var _Basics_e = Math.E;
var _Basics_cos = Math.cos;
var _Basics_sin = Math.sin;
var _Basics_tan = Math.tan;
var _Basics_acos = Math.acos;
var _Basics_asin = Math.asin;
var _Basics_atan = Math.atan;
var _Basics_atan2 = F2(Math.atan2);


// MORE MATH

function _Basics_toFloat(x) { return x; }
function _Basics_truncate(n) { return n | 0; }
function _Basics_isInfinite(n) { return n === Infinity || n === -Infinity; }

var _Basics_ceiling = Math.ceil;
var _Basics_floor = Math.floor;
var _Basics_round = Math.round;
var _Basics_sqrt = Math.sqrt;
var _Basics_log = Math.log;
var _Basics_isNaN = isNaN;


// BOOLEANS

function _Basics_not(bool) { return !bool; }
var _Basics_and = F2(function(a, b) { return a && b; });
var _Basics_or  = F2(function(a, b) { return a || b; });
var _Basics_xor = F2(function(a, b) { return a !== b; });



function _Char_toCode(char)
{
	var code = char.charCodeAt(0);
	if (0xD800 <= code && code <= 0xDBFF)
	{
		return (code - 0xD800) * 0x400 + char.charCodeAt(1) - 0xDC00 + 0x10000
	}
	return code;
}

function _Char_fromCode(code)
{
	return _Utils_chr(
		(code < 0 || 0x10FFFF < code)
			? '\uFFFD'
			:
		(code <= 0xFFFF)
			? String.fromCharCode(code)
			:
		(code -= 0x10000,
			String.fromCharCode(Math.floor(code / 0x400) + 0xD800)
			+
			String.fromCharCode(code % 0x400 + 0xDC00)
		)
	);
}

function _Char_toUpper(char)
{
	return _Utils_chr(char.toUpperCase());
}

function _Char_toLower(char)
{
	return _Utils_chr(char.toLowerCase());
}

function _Char_toLocaleUpper(char)
{
	return _Utils_chr(char.toLocaleUpperCase());
}

function _Char_toLocaleLower(char)
{
	return _Utils_chr(char.toLocaleLowerCase());
}



var _String_cons = F2(function(chr, str)
{
	return chr + str;
});

function _String_uncons(string)
{
	var word = string.charCodeAt(0);
	return word
		? elm$core$Maybe$Just(
			0xD800 <= word && word <= 0xDBFF
				? _Utils_Tuple2(_Utils_chr(string[0] + string[1]), string.slice(2))
				: _Utils_Tuple2(_Utils_chr(string[0]), string.slice(1))
		)
		: elm$core$Maybe$Nothing;
}

var _String_append = F2(function(a, b)
{
	return a + b;
});

function _String_length(str)
{
	return str.length;
}

var _String_map = F2(function(func, string)
{
	var len = string.length;
	var array = new Array(len);
	var i = 0;
	while (i < len)
	{
		var word = string.charCodeAt(i);
		if (0xD800 <= word && word <= 0xDBFF)
		{
			array[i] = func(_Utils_chr(string[i] + string[i+1]));
			i += 2;
			continue;
		}
		array[i] = func(_Utils_chr(string[i]));
		i++;
	}
	return array.join('');
});

var _String_filter = F2(function(isGood, str)
{
	var arr = [];
	var len = str.length;
	var i = 0;
	while (i < len)
	{
		var char = str[i];
		var word = str.charCodeAt(i);
		i++;
		if (0xD800 <= word && word <= 0xDBFF)
		{
			char += str[i];
			i++;
		}

		if (isGood(_Utils_chr(char)))
		{
			arr.push(char);
		}
	}
	return arr.join('');
});

function _String_reverse(str)
{
	var len = str.length;
	var arr = new Array(len);
	var i = 0;
	while (i < len)
	{
		var word = str.charCodeAt(i);
		if (0xD800 <= word && word <= 0xDBFF)
		{
			arr[len - i] = str[i + 1];
			i++;
			arr[len - i] = str[i - 1];
			i++;
		}
		else
		{
			arr[len - i] = str[i];
			i++;
		}
	}
	return arr.join('');
}

var _String_foldl = F3(function(func, state, string)
{
	var len = string.length;
	var i = 0;
	while (i < len)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		i++;
		if (0xD800 <= word && word <= 0xDBFF)
		{
			char += string[i];
			i++;
		}
		state = A2(func, _Utils_chr(char), state);
	}
	return state;
});

var _String_foldr = F3(function(func, state, string)
{
	var i = string.length;
	while (i--)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		if (0xDC00 <= word && word <= 0xDFFF)
		{
			i--;
			char = string[i] + char;
		}
		state = A2(func, _Utils_chr(char), state);
	}
	return state;
});

var _String_split = F2(function(sep, str)
{
	return str.split(sep);
});

var _String_join = F2(function(sep, strs)
{
	return strs.join(sep);
});

var _String_slice = F3(function(start, end, str) {
	return str.slice(start, end);
});

function _String_trim(str)
{
	return str.trim();
}

function _String_trimLeft(str)
{
	return str.replace(/^\s+/, '');
}

function _String_trimRight(str)
{
	return str.replace(/\s+$/, '');
}

function _String_words(str)
{
	return _List_fromArray(str.trim().split(/\s+/g));
}

function _String_lines(str)
{
	return _List_fromArray(str.split(/\r\n|\r|\n/g));
}

function _String_toUpper(str)
{
	return str.toUpperCase();
}

function _String_toLower(str)
{
	return str.toLowerCase();
}

var _String_any = F2(function(isGood, string)
{
	var i = string.length;
	while (i--)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		if (0xDC00 <= word && word <= 0xDFFF)
		{
			i--;
			char = string[i] + char;
		}
		if (isGood(_Utils_chr(char)))
		{
			return true;
		}
	}
	return false;
});

var _String_all = F2(function(isGood, string)
{
	var i = string.length;
	while (i--)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		if (0xDC00 <= word && word <= 0xDFFF)
		{
			i--;
			char = string[i] + char;
		}
		if (!isGood(_Utils_chr(char)))
		{
			return false;
		}
	}
	return true;
});

var _String_contains = F2(function(sub, str)
{
	return str.indexOf(sub) > -1;
});

var _String_startsWith = F2(function(sub, str)
{
	return str.indexOf(sub) === 0;
});

var _String_endsWith = F2(function(sub, str)
{
	return str.length >= sub.length &&
		str.lastIndexOf(sub) === str.length - sub.length;
});

var _String_indexes = F2(function(sub, str)
{
	var subLen = sub.length;

	if (subLen < 1)
	{
		return _List_Nil;
	}

	var i = 0;
	var is = [];

	while ((i = str.indexOf(sub, i)) > -1)
	{
		is.push(i);
		i = i + subLen;
	}

	return _List_fromArray(is);
});


// TO STRING

function _String_fromNumber(number)
{
	return number + '';
}


// INT CONVERSIONS

function _String_toInt(str)
{
	var total = 0;
	var code0 = str.charCodeAt(0);
	var start = code0 == 0x2B /* + */ || code0 == 0x2D /* - */ ? 1 : 0;

	for (var i = start; i < str.length; ++i)
	{
		var code = str.charCodeAt(i);
		if (code < 0x30 || 0x39 < code)
		{
			return elm$core$Maybe$Nothing;
		}
		total = 10 * total + code - 0x30;
	}

	return i == start
		? elm$core$Maybe$Nothing
		: elm$core$Maybe$Just(code0 == 0x2D ? -total : total);
}


// FLOAT CONVERSIONS

function _String_toFloat(s)
{
	// check if it is a hex, octal, or binary number
	if (s.length === 0 || /[\sxbo]/.test(s))
	{
		return elm$core$Maybe$Nothing;
	}
	var n = +s;
	// faster isNaN check
	return n === n ? elm$core$Maybe$Just(n) : elm$core$Maybe$Nothing;
}

function _String_fromList(chars)
{
	return _List_toArray(chars).join('');
}




/**/
function _Json_errorToString(error)
{
	return elm$json$Json$Decode$errorToString(error);
}
//*/


// CORE DECODERS

function _Json_succeed(msg)
{
	return {
		$: 0,
		a: msg
	};
}

function _Json_fail(msg)
{
	return {
		$: 1,
		a: msg
	};
}

var _Json_decodeInt = { $: 2 };
var _Json_decodeBool = { $: 3 };
var _Json_decodeFloat = { $: 4 };
var _Json_decodeValue = { $: 5 };
var _Json_decodeString = { $: 6 };

function _Json_decodeList(decoder) { return { $: 7, b: decoder }; }
function _Json_decodeArray(decoder) { return { $: 8, b: decoder }; }

function _Json_decodeNull(value) { return { $: 9, c: value }; }

var _Json_decodeField = F2(function(field, decoder)
{
	return {
		$: 10,
		d: field,
		b: decoder
	};
});

var _Json_decodeIndex = F2(function(index, decoder)
{
	return {
		$: 11,
		e: index,
		b: decoder
	};
});

function _Json_decodeKeyValuePairs(decoder)
{
	return {
		$: 12,
		b: decoder
	};
}

function _Json_mapMany(f, decoders)
{
	return {
		$: 13,
		f: f,
		g: decoders
	};
}

var _Json_andThen = F2(function(callback, decoder)
{
	return {
		$: 14,
		b: decoder,
		h: callback
	};
});

function _Json_oneOf(decoders)
{
	return {
		$: 15,
		g: decoders
	};
}


// DECODING OBJECTS

var _Json_map1 = F2(function(f, d1)
{
	return _Json_mapMany(f, [d1]);
});

var _Json_map2 = F3(function(f, d1, d2)
{
	return _Json_mapMany(f, [d1, d2]);
});

var _Json_map3 = F4(function(f, d1, d2, d3)
{
	return _Json_mapMany(f, [d1, d2, d3]);
});

var _Json_map4 = F5(function(f, d1, d2, d3, d4)
{
	return _Json_mapMany(f, [d1, d2, d3, d4]);
});

var _Json_map5 = F6(function(f, d1, d2, d3, d4, d5)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5]);
});

var _Json_map6 = F7(function(f, d1, d2, d3, d4, d5, d6)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6]);
});

var _Json_map7 = F8(function(f, d1, d2, d3, d4, d5, d6, d7)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6, d7]);
});

var _Json_map8 = F9(function(f, d1, d2, d3, d4, d5, d6, d7, d8)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6, d7, d8]);
});


// DECODE

var _Json_runOnString = F2(function(decoder, string)
{
	try
	{
		var value = JSON.parse(string);
		return _Json_runHelp(decoder, value);
	}
	catch (e)
	{
		return elm$core$Result$Err(A2(elm$json$Json$Decode$Failure, 'This is not valid JSON! ' + e.message, _Json_wrap(string)));
	}
});

var _Json_run = F2(function(decoder, value)
{
	return _Json_runHelp(decoder, _Json_unwrap(value));
});

function _Json_runHelp(decoder, value)
{
	switch (decoder.$)
	{
		case 3:
			return (typeof value === 'boolean')
				? elm$core$Result$Ok(value)
				: _Json_expecting('a BOOL', value);

		case 2:
			if (typeof value !== 'number') {
				return _Json_expecting('an INT', value);
			}

			if (-2147483647 < value && value < 2147483647 && (value | 0) === value) {
				return elm$core$Result$Ok(value);
			}

			if (isFinite(value) && !(value % 1)) {
				return elm$core$Result$Ok(value);
			}

			return _Json_expecting('an INT', value);

		case 4:
			return (typeof value === 'number')
				? elm$core$Result$Ok(value)
				: _Json_expecting('a FLOAT', value);

		case 6:
			return (typeof value === 'string')
				? elm$core$Result$Ok(value)
				: (value instanceof String)
					? elm$core$Result$Ok(value + '')
					: _Json_expecting('a STRING', value);

		case 9:
			return (value === null)
				? elm$core$Result$Ok(decoder.c)
				: _Json_expecting('null', value);

		case 5:
			return elm$core$Result$Ok(_Json_wrap(value));

		case 7:
			if (!Array.isArray(value))
			{
				return _Json_expecting('a LIST', value);
			}
			return _Json_runArrayDecoder(decoder.b, value, _List_fromArray);

		case 8:
			if (!Array.isArray(value))
			{
				return _Json_expecting('an ARRAY', value);
			}
			return _Json_runArrayDecoder(decoder.b, value, _Json_toElmArray);

		case 10:
			var field = decoder.d;
			if (typeof value !== 'object' || value === null || !(field in value))
			{
				return _Json_expecting('an OBJECT with a field named `' + field + '`', value);
			}
			var result = _Json_runHelp(decoder.b, value[field]);
			return (elm$core$Result$isOk(result)) ? result : elm$core$Result$Err(A2(elm$json$Json$Decode$Field, field, result.a));

		case 11:
			var index = decoder.e;
			if (!Array.isArray(value))
			{
				return _Json_expecting('an ARRAY', value);
			}
			if (index >= value.length)
			{
				return _Json_expecting('a LONGER array. Need index ' + index + ' but only see ' + value.length + ' entries', value);
			}
			var result = _Json_runHelp(decoder.b, value[index]);
			return (elm$core$Result$isOk(result)) ? result : elm$core$Result$Err(A2(elm$json$Json$Decode$Index, index, result.a));

		case 12:
			if (typeof value !== 'object' || value === null || Array.isArray(value))
			{
				return _Json_expecting('an OBJECT', value);
			}

			var keyValuePairs = _List_Nil;
			// TODO test perf of Object.keys and switch when support is good enough
			for (var key in value)
			{
				if (value.hasOwnProperty(key))
				{
					var result = _Json_runHelp(decoder.b, value[key]);
					if (!elm$core$Result$isOk(result))
					{
						return elm$core$Result$Err(A2(elm$json$Json$Decode$Field, key, result.a));
					}
					keyValuePairs = _List_Cons(_Utils_Tuple2(key, result.a), keyValuePairs);
				}
			}
			return elm$core$Result$Ok(elm$core$List$reverse(keyValuePairs));

		case 13:
			var answer = decoder.f;
			var decoders = decoder.g;
			for (var i = 0; i < decoders.length; i++)
			{
				var result = _Json_runHelp(decoders[i], value);
				if (!elm$core$Result$isOk(result))
				{
					return result;
				}
				answer = answer(result.a);
			}
			return elm$core$Result$Ok(answer);

		case 14:
			var result = _Json_runHelp(decoder.b, value);
			return (!elm$core$Result$isOk(result))
				? result
				: _Json_runHelp(decoder.h(result.a), value);

		case 15:
			var errors = _List_Nil;
			for (var temp = decoder.g; temp.b; temp = temp.b) // WHILE_CONS
			{
				var result = _Json_runHelp(temp.a, value);
				if (elm$core$Result$isOk(result))
				{
					return result;
				}
				errors = _List_Cons(result.a, errors);
			}
			return elm$core$Result$Err(elm$json$Json$Decode$OneOf(elm$core$List$reverse(errors)));

		case 1:
			return elm$core$Result$Err(A2(elm$json$Json$Decode$Failure, decoder.a, _Json_wrap(value)));

		case 0:
			return elm$core$Result$Ok(decoder.a);
	}
}

function _Json_runArrayDecoder(decoder, value, toElmValue)
{
	var len = value.length;
	var array = new Array(len);
	for (var i = 0; i < len; i++)
	{
		var result = _Json_runHelp(decoder, value[i]);
		if (!elm$core$Result$isOk(result))
		{
			return elm$core$Result$Err(A2(elm$json$Json$Decode$Index, i, result.a));
		}
		array[i] = result.a;
	}
	return elm$core$Result$Ok(toElmValue(array));
}

function _Json_toElmArray(array)
{
	return A2(elm$core$Array$initialize, array.length, function(i) { return array[i]; });
}

function _Json_expecting(type, value)
{
	return elm$core$Result$Err(A2(elm$json$Json$Decode$Failure, 'Expecting ' + type, _Json_wrap(value)));
}


// EQUALITY

function _Json_equality(x, y)
{
	if (x === y)
	{
		return true;
	}

	if (x.$ !== y.$)
	{
		return false;
	}

	switch (x.$)
	{
		case 0:
		case 1:
			return x.a === y.a;

		case 3:
		case 2:
		case 4:
		case 6:
		case 5:
			return true;

		case 9:
			return x.c === y.c;

		case 7:
		case 8:
		case 12:
			return _Json_equality(x.b, y.b);

		case 10:
			return x.d === y.d && _Json_equality(x.b, y.b);

		case 11:
			return x.e === y.e && _Json_equality(x.b, y.b);

		case 13:
			return x.f === y.f && _Json_listEquality(x.g, y.g);

		case 14:
			return x.h === y.h && _Json_equality(x.b, y.b);

		case 15:
			return _Json_listEquality(x.g, y.g);
	}
}

function _Json_listEquality(aDecoders, bDecoders)
{
	var len = aDecoders.length;
	if (len !== bDecoders.length)
	{
		return false;
	}
	for (var i = 0; i < len; i++)
	{
		if (!_Json_equality(aDecoders[i], bDecoders[i]))
		{
			return false;
		}
	}
	return true;
}


// ENCODE

var _Json_encode = F2(function(indentLevel, value)
{
	return JSON.stringify(_Json_unwrap(value), null, indentLevel) + '';
});

function _Json_wrap(value) { return { $: 0, a: value }; }
function _Json_unwrap(value) { return value.a; }

function _Json_wrap_UNUSED(value) { return value; }
function _Json_unwrap_UNUSED(value) { return value; }

function _Json_emptyArray() { return []; }
function _Json_emptyObject() { return {}; }

var _Json_addField = F3(function(key, value, object)
{
	object[key] = _Json_unwrap(value);
	return object;
});

function _Json_addEntry(func)
{
	return F2(function(entry, array)
	{
		array.push(_Json_unwrap(func(entry)));
		return array;
	});
}

var _Json_encodeNull = _Json_wrap(null);



// TASKS

function _Scheduler_succeed(value)
{
	return {
		$: 0,
		a: value
	};
}

function _Scheduler_fail(error)
{
	return {
		$: 1,
		a: error
	};
}

function _Scheduler_binding(callback)
{
	return {
		$: 2,
		b: callback,
		c: null
	};
}

var _Scheduler_andThen = F2(function(callback, task)
{
	return {
		$: 3,
		b: callback,
		d: task
	};
});

var _Scheduler_onError = F2(function(callback, task)
{
	return {
		$: 4,
		b: callback,
		d: task
	};
});

function _Scheduler_receive(callback)
{
	return {
		$: 5,
		b: callback
	};
}


// PROCESSES

var _Scheduler_guid = 0;

function _Scheduler_rawSpawn(task)
{
	var proc = {
		$: 0,
		e: _Scheduler_guid++,
		f: task,
		g: null,
		h: []
	};

	_Scheduler_enqueue(proc);

	return proc;
}

function _Scheduler_spawn(task)
{
	return _Scheduler_binding(function(callback) {
		callback(_Scheduler_succeed(_Scheduler_rawSpawn(task)));
	});
}

function _Scheduler_rawSend(proc, msg)
{
	proc.h.push(msg);
	_Scheduler_enqueue(proc);
}

var _Scheduler_send = F2(function(proc, msg)
{
	return _Scheduler_binding(function(callback) {
		_Scheduler_rawSend(proc, msg);
		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
});

function _Scheduler_kill(proc)
{
	return _Scheduler_binding(function(callback) {
		var task = proc.f;
		if (task.$ === 2 && task.c)
		{
			task.c();
		}

		proc.f = null;

		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
}


/* STEP PROCESSES

type alias Process =
  { $ : tag
  , id : unique_id
  , root : Task
  , stack : null | { $: SUCCEED | FAIL, a: callback, b: stack }
  , mailbox : [msg]
  }

*/


var _Scheduler_working = false;
var _Scheduler_queue = [];


function _Scheduler_enqueue(proc)
{
	_Scheduler_queue.push(proc);
	if (_Scheduler_working)
	{
		return;
	}
	_Scheduler_working = true;
	while (proc = _Scheduler_queue.shift())
	{
		_Scheduler_step(proc);
	}
	_Scheduler_working = false;
}


function _Scheduler_step(proc)
{
	while (proc.f)
	{
		var rootTag = proc.f.$;
		if (rootTag === 0 || rootTag === 1)
		{
			while (proc.g && proc.g.$ !== rootTag)
			{
				proc.g = proc.g.i;
			}
			if (!proc.g)
			{
				return;
			}
			proc.f = proc.g.b(proc.f.a);
			proc.g = proc.g.i;
		}
		else if (rootTag === 2)
		{
			proc.f.c = proc.f.b(function(newRoot) {
				proc.f = newRoot;
				_Scheduler_enqueue(proc);
			});
			return;
		}
		else if (rootTag === 5)
		{
			if (proc.h.length === 0)
			{
				return;
			}
			proc.f = proc.f.b(proc.h.shift());
		}
		else // if (rootTag === 3 || rootTag === 4)
		{
			proc.g = {
				$: rootTag === 3 ? 0 : 1,
				b: proc.f.b,
				i: proc.g
			};
			proc.f = proc.f.d;
		}
	}
}



function _Process_sleep(time)
{
	return _Scheduler_binding(function(callback) {
		var id = setTimeout(function() {
			callback(_Scheduler_succeed(_Utils_Tuple0));
		}, time);

		return function() { clearTimeout(id); };
	});
}




// PROGRAMS


var _Platform_worker = F4(function(impl, flagDecoder, debugMetadata, args)
{
	return _Platform_initialize(
		flagDecoder,
		args,
		impl.init,
		impl.update,
		impl.subscriptions,
		function() { return function() {} }
	);
});



// INITIALIZE A PROGRAM


function _Platform_initialize(flagDecoder, args, init, update, subscriptions, stepperBuilder)
{
	var result = A2(_Json_run, flagDecoder, _Json_wrap(args ? args['flags'] : undefined));
	elm$core$Result$isOk(result) || _Debug_crash(2 /**/, _Json_errorToString(result.a) /**/);
	var managers = {};
	result = init(result.a);
	var model = result.a;
	var stepper = stepperBuilder(sendToApp, model);
	var ports = _Platform_setupEffects(managers, sendToApp);

	function sendToApp(msg, viewMetadata)
	{
		result = A2(update, msg, model);
		stepper(model = result.a, viewMetadata);
		_Platform_dispatchEffects(managers, result.b, subscriptions(model));
	}

	_Platform_dispatchEffects(managers, result.b, subscriptions(model));

	return ports ? { ports: ports } : {};
}



// TRACK PRELOADS
//
// This is used by code in elm/browser and elm/http
// to register any HTTP requests that are triggered by init.
//


var _Platform_preload;


function _Platform_registerPreload(url)
{
	_Platform_preload.add(url);
}



// EFFECT MANAGERS


var _Platform_effectManagers = {};


function _Platform_setupEffects(managers, sendToApp)
{
	var ports;

	// setup all necessary effect managers
	for (var key in _Platform_effectManagers)
	{
		var manager = _Platform_effectManagers[key];

		if (manager.a)
		{
			ports = ports || {};
			ports[key] = manager.a(key, sendToApp);
		}

		managers[key] = _Platform_instantiateManager(manager, sendToApp);
	}

	return ports;
}


function _Platform_createManager(init, onEffects, onSelfMsg, cmdMap, subMap)
{
	return {
		b: init,
		c: onEffects,
		d: onSelfMsg,
		e: cmdMap,
		f: subMap
	};
}


function _Platform_instantiateManager(info, sendToApp)
{
	var router = {
		g: sendToApp,
		h: undefined
	};

	var onEffects = info.c;
	var onSelfMsg = info.d;
	var cmdMap = info.e;
	var subMap = info.f;

	function loop(state)
	{
		return A2(_Scheduler_andThen, loop, _Scheduler_receive(function(msg)
		{
			var value = msg.a;

			if (msg.$ === 0)
			{
				return A3(onSelfMsg, router, value, state);
			}

			return cmdMap && subMap
				? A4(onEffects, router, value.i, value.j, state)
				: A3(onEffects, router, cmdMap ? value.i : value.j, state);
		}));
	}

	return router.h = _Scheduler_rawSpawn(A2(_Scheduler_andThen, loop, info.b));
}



// ROUTING


var _Platform_sendToApp = F2(function(router, msg)
{
	return _Scheduler_binding(function(callback)
	{
		router.g(msg);
		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
});


var _Platform_sendToSelf = F2(function(router, msg)
{
	return A2(_Scheduler_send, router.h, {
		$: 0,
		a: msg
	});
});



// BAGS


function _Platform_leaf(home)
{
	return function(value)
	{
		return {
			$: 1,
			k: home,
			l: value
		};
	};
}


function _Platform_batch(list)
{
	return {
		$: 2,
		m: list
	};
}


var _Platform_map = F2(function(tagger, bag)
{
	return {
		$: 3,
		n: tagger,
		o: bag
	}
});



// PIPE BAGS INTO EFFECT MANAGERS


function _Platform_dispatchEffects(managers, cmdBag, subBag)
{
	var effectsDict = {};
	_Platform_gatherEffects(true, cmdBag, effectsDict, null);
	_Platform_gatherEffects(false, subBag, effectsDict, null);

	for (var home in managers)
	{
		_Scheduler_rawSend(managers[home], {
			$: 'fx',
			a: effectsDict[home] || { i: _List_Nil, j: _List_Nil }
		});
	}
}


function _Platform_gatherEffects(isCmd, bag, effectsDict, taggers)
{
	switch (bag.$)
	{
		case 1:
			var home = bag.k;
			var effect = _Platform_toEffect(isCmd, home, taggers, bag.l);
			effectsDict[home] = _Platform_insert(isCmd, effect, effectsDict[home]);
			return;

		case 2:
			for (var list = bag.m; list.b; list = list.b) // WHILE_CONS
			{
				_Platform_gatherEffects(isCmd, list.a, effectsDict, taggers);
			}
			return;

		case 3:
			_Platform_gatherEffects(isCmd, bag.o, effectsDict, {
				p: bag.n,
				q: taggers
			});
			return;
	}
}


function _Platform_toEffect(isCmd, home, taggers, value)
{
	function applyTaggers(x)
	{
		for (var temp = taggers; temp; temp = temp.q)
		{
			x = temp.p(x);
		}
		return x;
	}

	var map = isCmd
		? _Platform_effectManagers[home].e
		: _Platform_effectManagers[home].f;

	return A2(map, applyTaggers, value)
}


function _Platform_insert(isCmd, newEffect, effects)
{
	effects = effects || { i: _List_Nil, j: _List_Nil };

	isCmd
		? (effects.i = _List_Cons(newEffect, effects.i))
		: (effects.j = _List_Cons(newEffect, effects.j));

	return effects;
}



// PORTS


function _Platform_checkPortName(name)
{
	if (_Platform_effectManagers[name])
	{
		_Debug_crash(3, name)
	}
}



// OUTGOING PORTS


function _Platform_outgoingPort(name, converter)
{
	_Platform_checkPortName(name);
	_Platform_effectManagers[name] = {
		e: _Platform_outgoingPortMap,
		r: converter,
		a: _Platform_setupOutgoingPort
	};
	return _Platform_leaf(name);
}


var _Platform_outgoingPortMap = F2(function(tagger, value) { return value; });


function _Platform_setupOutgoingPort(name)
{
	var subs = [];
	var converter = _Platform_effectManagers[name].r;

	// CREATE MANAGER

	var init = _Process_sleep(0);

	_Platform_effectManagers[name].b = init;
	_Platform_effectManagers[name].c = F3(function(router, cmdList, state)
	{
		for ( ; cmdList.b; cmdList = cmdList.b) // WHILE_CONS
		{
			// grab a separate reference to subs in case unsubscribe is called
			var currentSubs = subs;
			var value = _Json_unwrap(converter(cmdList.a));
			for (var i = 0; i < currentSubs.length; i++)
			{
				currentSubs[i](value);
			}
		}
		return init;
	});

	// PUBLIC API

	function subscribe(callback)
	{
		subs.push(callback);
	}

	function unsubscribe(callback)
	{
		// copy subs into a new array in case unsubscribe is called within a
		// subscribed callback
		subs = subs.slice();
		var index = subs.indexOf(callback);
		if (index >= 0)
		{
			subs.splice(index, 1);
		}
	}

	return {
		subscribe: subscribe,
		unsubscribe: unsubscribe
	};
}



// INCOMING PORTS


function _Platform_incomingPort(name, converter)
{
	_Platform_checkPortName(name);
	_Platform_effectManagers[name] = {
		f: _Platform_incomingPortMap,
		r: converter,
		a: _Platform_setupIncomingPort
	};
	return _Platform_leaf(name);
}


var _Platform_incomingPortMap = F2(function(tagger, finalTagger)
{
	return function(value)
	{
		return tagger(finalTagger(value));
	};
});


function _Platform_setupIncomingPort(name, sendToApp)
{
	var subs = _List_Nil;
	var converter = _Platform_effectManagers[name].r;

	// CREATE MANAGER

	var init = _Scheduler_succeed(null);

	_Platform_effectManagers[name].b = init;
	_Platform_effectManagers[name].c = F3(function(router, subList, state)
	{
		subs = subList;
		return init;
	});

	// PUBLIC API

	function send(incomingValue)
	{
		var result = A2(_Json_run, converter, _Json_wrap(incomingValue));

		elm$core$Result$isOk(result) || _Debug_crash(4, name, result.a);

		var value = result.a;
		for (var temp = subs; temp.b; temp = temp.b) // WHILE_CONS
		{
			sendToApp(temp.a(value));
		}
	}

	return { send: send };
}



// EXPORT ELM MODULES
//
// Have DEBUG and PROD versions so that we can (1) give nicer errors in
// debug mode and (2) not pay for the bits needed for that in prod mode.
//


function _Platform_export_UNUSED(exports)
{
	scope['Elm']
		? _Platform_mergeExportsProd(scope['Elm'], exports)
		: scope['Elm'] = exports;
}


function _Platform_mergeExportsProd(obj, exports)
{
	for (var name in exports)
	{
		(name in obj)
			? (name == 'init')
				? _Debug_crash(6)
				: _Platform_mergeExportsProd(obj[name], exports[name])
			: (obj[name] = exports[name]);
	}
}


function _Platform_export(exports)
{
	scope['Elm']
		? _Platform_mergeExportsDebug('Elm', scope['Elm'], exports)
		: scope['Elm'] = exports;
}


function _Platform_mergeExportsDebug(moduleName, obj, exports)
{
	for (var name in exports)
	{
		(name in obj)
			? (name == 'init')
				? _Debug_crash(6, moduleName)
				: _Platform_mergeExportsDebug(moduleName + '.' + name, obj[name], exports[name])
			: (obj[name] = exports[name]);
	}
}



var _Bitwise_and = F2(function(a, b)
{
	return a & b;
});

var _Bitwise_or = F2(function(a, b)
{
	return a | b;
});

var _Bitwise_xor = F2(function(a, b)
{
	return a ^ b;
});

function _Bitwise_complement(a)
{
	return ~a;
};

var _Bitwise_shiftLeftBy = F2(function(offset, a)
{
	return a << offset;
});

var _Bitwise_shiftRightBy = F2(function(offset, a)
{
	return a >> offset;
});

var _Bitwise_shiftRightZfBy = F2(function(offset, a)
{
	return a >>> offset;
});



function _Test_runThunk(thunk)
{
  try {
    // Attempt to run the thunk as normal.
    return elm$core$Result$Ok(thunk(_Utils_Tuple0));
  } catch (err) {
    // If it throws, return an error instead of crashing.
    return elm$core$Result$Err(err.toString());
  }
}



function _Time_now(millisToPosix)
{
	return _Scheduler_binding(function(callback)
	{
		callback(_Scheduler_succeed(millisToPosix(Date.now())));
	});
}

var _Time_setInterval = F2(function(interval, task)
{
	return _Scheduler_binding(function(callback)
	{
		var id = setInterval(function() { _Scheduler_rawSpawn(task); }, interval);
		return function() { clearInterval(id); };
	});
});

function _Time_here()
{
	return _Scheduler_binding(function(callback)
	{
		callback(_Scheduler_succeed(
			A2(elm$time$Time$customZone, -(new Date().getTimezoneOffset()), _List_Nil)
		));
	});
}


function _Time_getZoneName()
{
	return _Scheduler_binding(function(callback)
	{
		try
		{
			var name = elm$time$Time$Name(Intl.DateTimeFormat().resolvedOptions().timeZone);
		}
		catch (e)
		{
			var name = elm$time$Time$Offset(new Date().getTimezoneOffset());
		}
		callback(_Scheduler_succeed(name));
	});
}




// HELPERS


var _VirtualDom_divertHrefToApp;

var _VirtualDom_doc = typeof document !== 'undefined' ? document : {};


function _VirtualDom_appendChild(parent, child)
{
	parent.appendChild(child);
}

var _VirtualDom_init = F4(function(virtualNode, flagDecoder, debugMetadata, args)
{
	// NOTE: this function needs _Platform_export available to work

	/**_UNUSED/
	var node = args['node'];
	//*/
	/**/
	var node = args && args['node'] ? args['node'] : _Debug_crash(0);
	//*/

	node.parentNode.replaceChild(
		_VirtualDom_render(virtualNode, function() {}),
		node
	);

	return {};
});



// TEXT


function _VirtualDom_text(string)
{
	return {
		$: 0,
		a: string
	};
}



// NODE


var _VirtualDom_nodeNS = F2(function(namespace, tag)
{
	return F2(function(factList, kidList)
	{
		for (var kids = [], descendantsCount = 0; kidList.b; kidList = kidList.b) // WHILE_CONS
		{
			var kid = kidList.a;
			descendantsCount += (kid.b || 0);
			kids.push(kid);
		}
		descendantsCount += kids.length;

		return {
			$: 1,
			c: tag,
			d: _VirtualDom_organizeFacts(factList),
			e: kids,
			f: namespace,
			b: descendantsCount
		};
	});
});


var _VirtualDom_node = _VirtualDom_nodeNS(undefined);



// KEYED NODE


var _VirtualDom_keyedNodeNS = F2(function(namespace, tag)
{
	return F2(function(factList, kidList)
	{
		for (var kids = [], descendantsCount = 0; kidList.b; kidList = kidList.b) // WHILE_CONS
		{
			var kid = kidList.a;
			descendantsCount += (kid.b.b || 0);
			kids.push(kid);
		}
		descendantsCount += kids.length;

		return {
			$: 2,
			c: tag,
			d: _VirtualDom_organizeFacts(factList),
			e: kids,
			f: namespace,
			b: descendantsCount
		};
	});
});


var _VirtualDom_keyedNode = _VirtualDom_keyedNodeNS(undefined);



// CUSTOM


function _VirtualDom_custom(factList, model, render, diff)
{
	return {
		$: 3,
		d: _VirtualDom_organizeFacts(factList),
		g: model,
		h: render,
		i: diff
	};
}



// MAP


var _VirtualDom_map = F2(function(tagger, node)
{
	return {
		$: 4,
		j: tagger,
		k: node,
		b: 1 + (node.b || 0)
	};
});



// LAZY


function _VirtualDom_thunk(refs, thunk)
{
	return {
		$: 5,
		l: refs,
		m: thunk,
		k: undefined
	};
}

var _VirtualDom_lazy = F2(function(func, a)
{
	return _VirtualDom_thunk([func, a], function() {
		return func(a);
	});
});

var _VirtualDom_lazy2 = F3(function(func, a, b)
{
	return _VirtualDom_thunk([func, a, b], function() {
		return A2(func, a, b);
	});
});

var _VirtualDom_lazy3 = F4(function(func, a, b, c)
{
	return _VirtualDom_thunk([func, a, b, c], function() {
		return A3(func, a, b, c);
	});
});

var _VirtualDom_lazy4 = F5(function(func, a, b, c, d)
{
	return _VirtualDom_thunk([func, a, b, c, d], function() {
		return A4(func, a, b, c, d);
	});
});

var _VirtualDom_lazy5 = F6(function(func, a, b, c, d, e)
{
	return _VirtualDom_thunk([func, a, b, c, d, e], function() {
		return A5(func, a, b, c, d, e);
	});
});

var _VirtualDom_lazy6 = F7(function(func, a, b, c, d, e, f)
{
	return _VirtualDom_thunk([func, a, b, c, d, e, f], function() {
		return A6(func, a, b, c, d, e, f);
	});
});

var _VirtualDom_lazy7 = F8(function(func, a, b, c, d, e, f, g)
{
	return _VirtualDom_thunk([func, a, b, c, d, e, f, g], function() {
		return A7(func, a, b, c, d, e, f, g);
	});
});

var _VirtualDom_lazy8 = F9(function(func, a, b, c, d, e, f, g, h)
{
	return _VirtualDom_thunk([func, a, b, c, d, e, f, g, h], function() {
		return A8(func, a, b, c, d, e, f, g, h);
	});
});



// FACTS


var _VirtualDom_on = F2(function(key, handler)
{
	return {
		$: 'a0',
		n: key,
		o: handler
	};
});
var _VirtualDom_style = F2(function(key, value)
{
	return {
		$: 'a1',
		n: key,
		o: value
	};
});
var _VirtualDom_property = F2(function(key, value)
{
	return {
		$: 'a2',
		n: key,
		o: value
	};
});
var _VirtualDom_attribute = F2(function(key, value)
{
	return {
		$: 'a3',
		n: key,
		o: value
	};
});
var _VirtualDom_attributeNS = F3(function(namespace, key, value)
{
	return {
		$: 'a4',
		n: key,
		o: { f: namespace, o: value }
	};
});



// XSS ATTACK VECTOR CHECKS


function _VirtualDom_noScript(tag)
{
	return tag == 'script' ? 'p' : tag;
}

function _VirtualDom_noOnOrFormAction(key)
{
	return /^(on|formAction$)/i.test(key) ? 'data-' + key : key;
}

function _VirtualDom_noInnerHtmlOrFormAction(key)
{
	return key == 'innerHTML' || key == 'formAction' ? 'data-' + key : key;
}

function _VirtualDom_noJavaScriptUri_UNUSED(value)
{
	return /^javascript:/i.test(value.replace(/\s/g,'')) ? '' : value;
}

function _VirtualDom_noJavaScriptUri(value)
{
	return /^javascript:/i.test(value.replace(/\s/g,''))
		? 'javascript:alert("This is an XSS vector. Please use ports or web components instead.")'
		: value;
}

function _VirtualDom_noJavaScriptOrHtmlUri_UNUSED(value)
{
	return /^\s*(javascript:|data:text\/html)/i.test(value) ? '' : value;
}

function _VirtualDom_noJavaScriptOrHtmlUri(value)
{
	return /^\s*(javascript:|data:text\/html)/i.test(value)
		? 'javascript:alert("This is an XSS vector. Please use ports or web components instead.")'
		: value;
}



// MAP FACTS


var _VirtualDom_mapAttribute = F2(function(func, attr)
{
	return (attr.$ === 'a0')
		? A2(_VirtualDom_on, attr.n, _VirtualDom_mapHandler(func, attr.o))
		: attr;
});

function _VirtualDom_mapHandler(func, handler)
{
	var tag = elm$virtual_dom$VirtualDom$toHandlerInt(handler);

	// 0 = Normal
	// 1 = MayStopPropagation
	// 2 = MayPreventDefault
	// 3 = Custom

	return {
		$: handler.$,
		a:
			!tag
				? A2(elm$json$Json$Decode$map, func, handler.a)
				:
			A3(elm$json$Json$Decode$map2,
				tag < 3
					? _VirtualDom_mapEventTuple
					: _VirtualDom_mapEventRecord,
				elm$json$Json$Decode$succeed(func),
				handler.a
			)
	};
}

var _VirtualDom_mapEventTuple = F2(function(func, tuple)
{
	return _Utils_Tuple2(func(tuple.a), tuple.b);
});

var _VirtualDom_mapEventRecord = F2(function(func, record)
{
	return {
		message: func(record.message),
		stopPropagation: record.stopPropagation,
		preventDefault: record.preventDefault
	}
});



// ORGANIZE FACTS


function _VirtualDom_organizeFacts(factList)
{
	for (var facts = {}; factList.b; factList = factList.b) // WHILE_CONS
	{
		var entry = factList.a;

		var tag = entry.$;
		var key = entry.n;
		var value = entry.o;

		if (tag === 'a2')
		{
			(key === 'className')
				? _VirtualDom_addClass(facts, key, _Json_unwrap(value))
				: facts[key] = _Json_unwrap(value);

			continue;
		}

		var subFacts = facts[tag] || (facts[tag] = {});
		(tag === 'a3' && key === 'class')
			? _VirtualDom_addClass(subFacts, key, value)
			: subFacts[key] = value;
	}

	return facts;
}

function _VirtualDom_addClass(object, key, newClass)
{
	var classes = object[key];
	object[key] = classes ? classes + ' ' + newClass : newClass;
}



// RENDER


function _VirtualDom_render(vNode, eventNode)
{
	var tag = vNode.$;

	if (tag === 5)
	{
		return _VirtualDom_render(vNode.k || (vNode.k = vNode.m()), eventNode);
	}

	if (tag === 0)
	{
		return _VirtualDom_doc.createTextNode(vNode.a);
	}

	if (tag === 4)
	{
		var subNode = vNode.k;
		var tagger = vNode.j;

		while (subNode.$ === 4)
		{
			typeof tagger !== 'object'
				? tagger = [tagger, subNode.j]
				: tagger.push(subNode.j);

			subNode = subNode.k;
		}

		var subEventRoot = { j: tagger, p: eventNode };
		var domNode = _VirtualDom_render(subNode, subEventRoot);
		domNode.elm_event_node_ref = subEventRoot;
		return domNode;
	}

	if (tag === 3)
	{
		var domNode = vNode.h(vNode.g);
		_VirtualDom_applyFacts(domNode, eventNode, vNode.d);
		return domNode;
	}

	// at this point `tag` must be 1 or 2

	var domNode = vNode.f
		? _VirtualDom_doc.createElementNS(vNode.f, vNode.c)
		: _VirtualDom_doc.createElement(vNode.c);

	if (_VirtualDom_divertHrefToApp && vNode.c == 'a')
	{
		domNode.addEventListener('click', _VirtualDom_divertHrefToApp(domNode));
	}

	_VirtualDom_applyFacts(domNode, eventNode, vNode.d);

	for (var kids = vNode.e, i = 0; i < kids.length; i++)
	{
		_VirtualDom_appendChild(domNode, _VirtualDom_render(tag === 1 ? kids[i] : kids[i].b, eventNode));
	}

	return domNode;
}



// APPLY FACTS


function _VirtualDom_applyFacts(domNode, eventNode, facts)
{
	for (var key in facts)
	{
		var value = facts[key];

		key === 'a1'
			? _VirtualDom_applyStyles(domNode, value)
			:
		key === 'a0'
			? _VirtualDom_applyEvents(domNode, eventNode, value)
			:
		key === 'a3'
			? _VirtualDom_applyAttrs(domNode, value)
			:
		key === 'a4'
			? _VirtualDom_applyAttrsNS(domNode, value)
			:
		(key !== 'value' || key !== 'checked' || domNode[key] !== value) && (domNode[key] = value);
	}
}



// APPLY STYLES


function _VirtualDom_applyStyles(domNode, styles)
{
	var domNodeStyle = domNode.style;

	for (var key in styles)
	{
		domNodeStyle[key] = styles[key];
	}
}



// APPLY ATTRS


function _VirtualDom_applyAttrs(domNode, attrs)
{
	for (var key in attrs)
	{
		var value = attrs[key];
		value
			? domNode.setAttribute(key, value)
			: domNode.removeAttribute(key);
	}
}



// APPLY NAMESPACED ATTRS


function _VirtualDom_applyAttrsNS(domNode, nsAttrs)
{
	for (var key in nsAttrs)
	{
		var pair = nsAttrs[key];
		var namespace = pair.f;
		var value = pair.o;

		value
			? domNode.setAttributeNS(namespace, key, value)
			: domNode.removeAttributeNS(namespace, key);
	}
}



// APPLY EVENTS


function _VirtualDom_applyEvents(domNode, eventNode, events)
{
	var allCallbacks = domNode.elmFs || (domNode.elmFs = {});

	for (var key in events)
	{
		var newHandler = events[key];
		var oldCallback = allCallbacks[key];

		if (!newHandler)
		{
			domNode.removeEventListener(key, oldCallback);
			allCallbacks[key] = undefined;
			continue;
		}

		if (oldCallback)
		{
			var oldHandler = oldCallback.q;
			if (oldHandler.$ === newHandler.$)
			{
				oldCallback.q = newHandler;
				continue;
			}
			domNode.removeEventListener(key, oldCallback);
		}

		oldCallback = _VirtualDom_makeCallback(eventNode, newHandler);
		domNode.addEventListener(key, oldCallback,
			_VirtualDom_passiveSupported
			&& { passive: elm$virtual_dom$VirtualDom$toHandlerInt(newHandler) < 2 }
		);
		allCallbacks[key] = oldCallback;
	}
}



// PASSIVE EVENTS


var _VirtualDom_passiveSupported;

try
{
	window.addEventListener('t', null, Object.defineProperty({}, 'passive', {
		get: function() { _VirtualDom_passiveSupported = true; }
	}));
}
catch(e) {}



// EVENT HANDLERS


function _VirtualDom_makeCallback(eventNode, initialHandler)
{
	function callback(event)
	{
		var handler = callback.q;
		var result = _Json_runHelp(handler.a, event);

		if (!elm$core$Result$isOk(result))
		{
			return;
		}

		var tag = elm$virtual_dom$VirtualDom$toHandlerInt(handler);

		// 0 = Normal
		// 1 = MayStopPropagation
		// 2 = MayPreventDefault
		// 3 = Custom

		var value = result.a;
		var message = !tag ? value : tag < 3 ? value.a : value.message;
		var stopPropagation = tag == 1 ? value.b : tag == 3 && value.stopPropagation;
		var currentEventNode = (
			stopPropagation && event.stopPropagation(),
			(tag == 2 ? value.b : tag == 3 && value.preventDefault) && event.preventDefault(),
			eventNode
		);
		var tagger;
		var i;
		while (tagger = currentEventNode.j)
		{
			if (typeof tagger == 'function')
			{
				message = tagger(message);
			}
			else
			{
				for (var i = tagger.length; i--; )
				{
					message = tagger[i](message);
				}
			}
			currentEventNode = currentEventNode.p;
		}
		currentEventNode(message, stopPropagation); // stopPropagation implies isSync
	}

	callback.q = initialHandler;

	return callback;
}

function _VirtualDom_equalEvents(x, y)
{
	return x.$ == y.$ && _Json_equality(x.a, y.a);
}



// DIFF


// TODO: Should we do patches like in iOS?
//
// type Patch
//   = At Int Patch
//   | Batch (List Patch)
//   | Change ...
//
// How could it not be better?
//
function _VirtualDom_diff(x, y)
{
	var patches = [];
	_VirtualDom_diffHelp(x, y, patches, 0);
	return patches;
}


function _VirtualDom_pushPatch(patches, type, index, data)
{
	var patch = {
		$: type,
		r: index,
		s: data,
		t: undefined,
		u: undefined
	};
	patches.push(patch);
	return patch;
}


function _VirtualDom_diffHelp(x, y, patches, index)
{
	if (x === y)
	{
		return;
	}

	var xType = x.$;
	var yType = y.$;

	// Bail if you run into different types of nodes. Implies that the
	// structure has changed significantly and it's not worth a diff.
	if (xType !== yType)
	{
		if (xType === 1 && yType === 2)
		{
			y = _VirtualDom_dekey(y);
			yType = 1;
		}
		else
		{
			_VirtualDom_pushPatch(patches, 0, index, y);
			return;
		}
	}

	// Now we know that both nodes are the same $.
	switch (yType)
	{
		case 5:
			var xRefs = x.l;
			var yRefs = y.l;
			var i = xRefs.length;
			var same = i === yRefs.length;
			while (same && i--)
			{
				same = xRefs[i] === yRefs[i];
			}
			if (same)
			{
				y.k = x.k;
				return;
			}
			y.k = y.m();
			var subPatches = [];
			_VirtualDom_diffHelp(x.k, y.k, subPatches, 0);
			subPatches.length > 0 && _VirtualDom_pushPatch(patches, 1, index, subPatches);
			return;

		case 4:
			// gather nested taggers
			var xTaggers = x.j;
			var yTaggers = y.j;
			var nesting = false;

			var xSubNode = x.k;
			while (xSubNode.$ === 4)
			{
				nesting = true;

				typeof xTaggers !== 'object'
					? xTaggers = [xTaggers, xSubNode.j]
					: xTaggers.push(xSubNode.j);

				xSubNode = xSubNode.k;
			}

			var ySubNode = y.k;
			while (ySubNode.$ === 4)
			{
				nesting = true;

				typeof yTaggers !== 'object'
					? yTaggers = [yTaggers, ySubNode.j]
					: yTaggers.push(ySubNode.j);

				ySubNode = ySubNode.k;
			}

			// Just bail if different numbers of taggers. This implies the
			// structure of the virtual DOM has changed.
			if (nesting && xTaggers.length !== yTaggers.length)
			{
				_VirtualDom_pushPatch(patches, 0, index, y);
				return;
			}

			// check if taggers are "the same"
			if (nesting ? !_VirtualDom_pairwiseRefEqual(xTaggers, yTaggers) : xTaggers !== yTaggers)
			{
				_VirtualDom_pushPatch(patches, 2, index, yTaggers);
			}

			// diff everything below the taggers
			_VirtualDom_diffHelp(xSubNode, ySubNode, patches, index + 1);
			return;

		case 0:
			if (x.a !== y.a)
			{
				_VirtualDom_pushPatch(patches, 3, index, y.a);
			}
			return;

		case 1:
			_VirtualDom_diffNodes(x, y, patches, index, _VirtualDom_diffKids);
			return;

		case 2:
			_VirtualDom_diffNodes(x, y, patches, index, _VirtualDom_diffKeyedKids);
			return;

		case 3:
			if (x.h !== y.h)
			{
				_VirtualDom_pushPatch(patches, 0, index, y);
				return;
			}

			var factsDiff = _VirtualDom_diffFacts(x.d, y.d);
			factsDiff && _VirtualDom_pushPatch(patches, 4, index, factsDiff);

			var patch = y.i(x.g, y.g);
			patch && _VirtualDom_pushPatch(patches, 5, index, patch);

			return;
	}
}

// assumes the incoming arrays are the same length
function _VirtualDom_pairwiseRefEqual(as, bs)
{
	for (var i = 0; i < as.length; i++)
	{
		if (as[i] !== bs[i])
		{
			return false;
		}
	}

	return true;
}

function _VirtualDom_diffNodes(x, y, patches, index, diffKids)
{
	// Bail if obvious indicators have changed. Implies more serious
	// structural changes such that it's not worth it to diff.
	if (x.c !== y.c || x.f !== y.f)
	{
		_VirtualDom_pushPatch(patches, 0, index, y);
		return;
	}

	var factsDiff = _VirtualDom_diffFacts(x.d, y.d);
	factsDiff && _VirtualDom_pushPatch(patches, 4, index, factsDiff);

	diffKids(x, y, patches, index);
}



// DIFF FACTS


// TODO Instead of creating a new diff object, it's possible to just test if
// there *is* a diff. During the actual patch, do the diff again and make the
// modifications directly. This way, there's no new allocations. Worth it?
function _VirtualDom_diffFacts(x, y, category)
{
	var diff;

	// look for changes and removals
	for (var xKey in x)
	{
		if (xKey === 'a1' || xKey === 'a0' || xKey === 'a3' || xKey === 'a4')
		{
			var subDiff = _VirtualDom_diffFacts(x[xKey], y[xKey] || {}, xKey);
			if (subDiff)
			{
				diff = diff || {};
				diff[xKey] = subDiff;
			}
			continue;
		}

		// remove if not in the new facts
		if (!(xKey in y))
		{
			diff = diff || {};
			diff[xKey] =
				!category
					? (typeof x[xKey] === 'string' ? '' : null)
					:
				(category === 'a1')
					? ''
					:
				(category === 'a0' || category === 'a3')
					? undefined
					:
				{ f: x[xKey].f, o: undefined };

			continue;
		}

		var xValue = x[xKey];
		var yValue = y[xKey];

		// reference equal, so don't worry about it
		if (xValue === yValue && xKey !== 'value' && xKey !== 'checked'
			|| category === 'a0' && _VirtualDom_equalEvents(xValue, yValue))
		{
			continue;
		}

		diff = diff || {};
		diff[xKey] = yValue;
	}

	// add new stuff
	for (var yKey in y)
	{
		if (!(yKey in x))
		{
			diff = diff || {};
			diff[yKey] = y[yKey];
		}
	}

	return diff;
}



// DIFF KIDS


function _VirtualDom_diffKids(xParent, yParent, patches, index)
{
	var xKids = xParent.e;
	var yKids = yParent.e;

	var xLen = xKids.length;
	var yLen = yKids.length;

	// FIGURE OUT IF THERE ARE INSERTS OR REMOVALS

	if (xLen > yLen)
	{
		_VirtualDom_pushPatch(patches, 6, index, {
			v: yLen,
			i: xLen - yLen
		});
	}
	else if (xLen < yLen)
	{
		_VirtualDom_pushPatch(patches, 7, index, {
			v: xLen,
			e: yKids
		});
	}

	// PAIRWISE DIFF EVERYTHING ELSE

	for (var minLen = xLen < yLen ? xLen : yLen, i = 0; i < minLen; i++)
	{
		var xKid = xKids[i];
		_VirtualDom_diffHelp(xKid, yKids[i], patches, ++index);
		index += xKid.b || 0;
	}
}



// KEYED DIFF


function _VirtualDom_diffKeyedKids(xParent, yParent, patches, rootIndex)
{
	var localPatches = [];

	var changes = {}; // Dict String Entry
	var inserts = []; // Array { index : Int, entry : Entry }
	// type Entry = { tag : String, vnode : VNode, index : Int, data : _ }

	var xKids = xParent.e;
	var yKids = yParent.e;
	var xLen = xKids.length;
	var yLen = yKids.length;
	var xIndex = 0;
	var yIndex = 0;

	var index = rootIndex;

	while (xIndex < xLen && yIndex < yLen)
	{
		var x = xKids[xIndex];
		var y = yKids[yIndex];

		var xKey = x.a;
		var yKey = y.a;
		var xNode = x.b;
		var yNode = y.b;

		// check if keys match

		if (xKey === yKey)
		{
			index++;
			_VirtualDom_diffHelp(xNode, yNode, localPatches, index);
			index += xNode.b || 0;

			xIndex++;
			yIndex++;
			continue;
		}

		// look ahead 1 to detect insertions and removals.

		var xNext = xKids[xIndex + 1];
		var yNext = yKids[yIndex + 1];

		if (xNext)
		{
			var xNextKey = xNext.a;
			var xNextNode = xNext.b;
			var oldMatch = yKey === xNextKey;
		}

		if (yNext)
		{
			var yNextKey = yNext.a;
			var yNextNode = yNext.b;
			var newMatch = xKey === yNextKey;
		}


		// swap x and y
		if (newMatch && oldMatch)
		{
			index++;
			_VirtualDom_diffHelp(xNode, yNextNode, localPatches, index);
			_VirtualDom_insertNode(changes, localPatches, xKey, yNode, yIndex, inserts);
			index += xNode.b || 0;

			index++;
			_VirtualDom_removeNode(changes, localPatches, xKey, xNextNode, index);
			index += xNextNode.b || 0;

			xIndex += 2;
			yIndex += 2;
			continue;
		}

		// insert y
		if (newMatch)
		{
			index++;
			_VirtualDom_insertNode(changes, localPatches, yKey, yNode, yIndex, inserts);
			_VirtualDom_diffHelp(xNode, yNextNode, localPatches, index);
			index += xNode.b || 0;

			xIndex += 1;
			yIndex += 2;
			continue;
		}

		// remove x
		if (oldMatch)
		{
			index++;
			_VirtualDom_removeNode(changes, localPatches, xKey, xNode, index);
			index += xNode.b || 0;

			index++;
			_VirtualDom_diffHelp(xNextNode, yNode, localPatches, index);
			index += xNextNode.b || 0;

			xIndex += 2;
			yIndex += 1;
			continue;
		}

		// remove x, insert y
		if (xNext && xNextKey === yNextKey)
		{
			index++;
			_VirtualDom_removeNode(changes, localPatches, xKey, xNode, index);
			_VirtualDom_insertNode(changes, localPatches, yKey, yNode, yIndex, inserts);
			index += xNode.b || 0;

			index++;
			_VirtualDom_diffHelp(xNextNode, yNextNode, localPatches, index);
			index += xNextNode.b || 0;

			xIndex += 2;
			yIndex += 2;
			continue;
		}

		break;
	}

	// eat up any remaining nodes with removeNode and insertNode

	while (xIndex < xLen)
	{
		index++;
		var x = xKids[xIndex];
		var xNode = x.b;
		_VirtualDom_removeNode(changes, localPatches, x.a, xNode, index);
		index += xNode.b || 0;
		xIndex++;
	}

	while (yIndex < yLen)
	{
		var endInserts = endInserts || [];
		var y = yKids[yIndex];
		_VirtualDom_insertNode(changes, localPatches, y.a, y.b, undefined, endInserts);
		yIndex++;
	}

	if (localPatches.length > 0 || inserts.length > 0 || endInserts)
	{
		_VirtualDom_pushPatch(patches, 8, rootIndex, {
			w: localPatches,
			x: inserts,
			y: endInserts
		});
	}
}



// CHANGES FROM KEYED DIFF


var _VirtualDom_POSTFIX = '_elmW6BL';


function _VirtualDom_insertNode(changes, localPatches, key, vnode, yIndex, inserts)
{
	var entry = changes[key];

	// never seen this key before
	if (!entry)
	{
		entry = {
			c: 0,
			z: vnode,
			r: yIndex,
			s: undefined
		};

		inserts.push({ r: yIndex, A: entry });
		changes[key] = entry;

		return;
	}

	// this key was removed earlier, a match!
	if (entry.c === 1)
	{
		inserts.push({ r: yIndex, A: entry });

		entry.c = 2;
		var subPatches = [];
		_VirtualDom_diffHelp(entry.z, vnode, subPatches, entry.r);
		entry.r = yIndex;
		entry.s.s = {
			w: subPatches,
			A: entry
		};

		return;
	}

	// this key has already been inserted or moved, a duplicate!
	_VirtualDom_insertNode(changes, localPatches, key + _VirtualDom_POSTFIX, vnode, yIndex, inserts);
}


function _VirtualDom_removeNode(changes, localPatches, key, vnode, index)
{
	var entry = changes[key];

	// never seen this key before
	if (!entry)
	{
		var patch = _VirtualDom_pushPatch(localPatches, 9, index, undefined);

		changes[key] = {
			c: 1,
			z: vnode,
			r: index,
			s: patch
		};

		return;
	}

	// this key was inserted earlier, a match!
	if (entry.c === 0)
	{
		entry.c = 2;
		var subPatches = [];
		_VirtualDom_diffHelp(vnode, entry.z, subPatches, index);

		_VirtualDom_pushPatch(localPatches, 9, index, {
			w: subPatches,
			A: entry
		});

		return;
	}

	// this key has already been removed or moved, a duplicate!
	_VirtualDom_removeNode(changes, localPatches, key + _VirtualDom_POSTFIX, vnode, index);
}



// ADD DOM NODES
//
// Each DOM node has an "index" assigned in order of traversal. It is important
// to minimize our crawl over the actual DOM, so these indexes (along with the
// descendantsCount of virtual nodes) let us skip touching entire subtrees of
// the DOM if we know there are no patches there.


function _VirtualDom_addDomNodes(domNode, vNode, patches, eventNode)
{
	_VirtualDom_addDomNodesHelp(domNode, vNode, patches, 0, 0, vNode.b, eventNode);
}


// assumes `patches` is non-empty and indexes increase monotonically.
function _VirtualDom_addDomNodesHelp(domNode, vNode, patches, i, low, high, eventNode)
{
	var patch = patches[i];
	var index = patch.r;

	while (index === low)
	{
		var patchType = patch.$;

		if (patchType === 1)
		{
			_VirtualDom_addDomNodes(domNode, vNode.k, patch.s, eventNode);
		}
		else if (patchType === 8)
		{
			patch.t = domNode;
			patch.u = eventNode;

			var subPatches = patch.s.w;
			if (subPatches.length > 0)
			{
				_VirtualDom_addDomNodesHelp(domNode, vNode, subPatches, 0, low, high, eventNode);
			}
		}
		else if (patchType === 9)
		{
			patch.t = domNode;
			patch.u = eventNode;

			var data = patch.s;
			if (data)
			{
				data.A.s = domNode;
				var subPatches = data.w;
				if (subPatches.length > 0)
				{
					_VirtualDom_addDomNodesHelp(domNode, vNode, subPatches, 0, low, high, eventNode);
				}
			}
		}
		else
		{
			patch.t = domNode;
			patch.u = eventNode;
		}

		i++;

		if (!(patch = patches[i]) || (index = patch.r) > high)
		{
			return i;
		}
	}

	var tag = vNode.$;

	if (tag === 4)
	{
		var subNode = vNode.k;

		while (subNode.$ === 4)
		{
			subNode = subNode.k;
		}

		return _VirtualDom_addDomNodesHelp(domNode, subNode, patches, i, low + 1, high, domNode.elm_event_node_ref);
	}

	// tag must be 1 or 2 at this point

	var vKids = vNode.e;
	var childNodes = domNode.childNodes;
	for (var j = 0; j < vKids.length; j++)
	{
		low++;
		var vKid = tag === 1 ? vKids[j] : vKids[j].b;
		var nextLow = low + (vKid.b || 0);
		if (low <= index && index <= nextLow)
		{
			i = _VirtualDom_addDomNodesHelp(childNodes[j], vKid, patches, i, low, nextLow, eventNode);
			if (!(patch = patches[i]) || (index = patch.r) > high)
			{
				return i;
			}
		}
		low = nextLow;
	}
	return i;
}



// APPLY PATCHES


function _VirtualDom_applyPatches(rootDomNode, oldVirtualNode, patches, eventNode)
{
	if (patches.length === 0)
	{
		return rootDomNode;
	}

	_VirtualDom_addDomNodes(rootDomNode, oldVirtualNode, patches, eventNode);
	return _VirtualDom_applyPatchesHelp(rootDomNode, patches);
}

function _VirtualDom_applyPatchesHelp(rootDomNode, patches)
{
	for (var i = 0; i < patches.length; i++)
	{
		var patch = patches[i];
		var localDomNode = patch.t
		var newNode = _VirtualDom_applyPatch(localDomNode, patch);
		if (localDomNode === rootDomNode)
		{
			rootDomNode = newNode;
		}
	}
	return rootDomNode;
}

function _VirtualDom_applyPatch(domNode, patch)
{
	switch (patch.$)
	{
		case 0:
			return _VirtualDom_applyPatchRedraw(domNode, patch.s, patch.u);

		case 4:
			_VirtualDom_applyFacts(domNode, patch.u, patch.s);
			return domNode;

		case 3:
			domNode.replaceData(0, domNode.length, patch.s);
			return domNode;

		case 1:
			return _VirtualDom_applyPatchesHelp(domNode, patch.s);

		case 2:
			if (domNode.elm_event_node_ref)
			{
				domNode.elm_event_node_ref.j = patch.s;
			}
			else
			{
				domNode.elm_event_node_ref = { j: patch.s, p: patch.u };
			}
			return domNode;

		case 6:
			var data = patch.s;
			for (var i = 0; i < data.i; i++)
			{
				domNode.removeChild(domNode.childNodes[data.v]);
			}
			return domNode;

		case 7:
			var data = patch.s;
			var kids = data.e;
			var i = data.v;
			var theEnd = domNode.childNodes[i];
			for (; i < kids.length; i++)
			{
				domNode.insertBefore(_VirtualDom_render(kids[i], patch.u), theEnd);
			}
			return domNode;

		case 9:
			var data = patch.s;
			if (!data)
			{
				domNode.parentNode.removeChild(domNode);
				return domNode;
			}
			var entry = data.A;
			if (typeof entry.r !== 'undefined')
			{
				domNode.parentNode.removeChild(domNode);
			}
			entry.s = _VirtualDom_applyPatchesHelp(domNode, data.w);
			return domNode;

		case 8:
			return _VirtualDom_applyPatchReorder(domNode, patch);

		case 5:
			return patch.s(domNode);

		default:
			_Debug_crash(10); // 'Ran into an unknown patch!'
	}
}


function _VirtualDom_applyPatchRedraw(domNode, vNode, eventNode)
{
	var parentNode = domNode.parentNode;
	var newNode = _VirtualDom_render(vNode, eventNode);

	if (!newNode.elm_event_node_ref)
	{
		newNode.elm_event_node_ref = domNode.elm_event_node_ref;
	}

	if (parentNode && newNode !== domNode)
	{
		parentNode.replaceChild(newNode, domNode);
	}
	return newNode;
}


function _VirtualDom_applyPatchReorder(domNode, patch)
{
	var data = patch.s;

	// remove end inserts
	var frag = _VirtualDom_applyPatchReorderEndInsertsHelp(data.y, patch);

	// removals
	domNode = _VirtualDom_applyPatchesHelp(domNode, data.w);

	// inserts
	var inserts = data.x;
	for (var i = 0; i < inserts.length; i++)
	{
		var insert = inserts[i];
		var entry = insert.A;
		var node = entry.c === 2
			? entry.s
			: _VirtualDom_render(entry.z, patch.u);
		domNode.insertBefore(node, domNode.childNodes[insert.r]);
	}

	// add end inserts
	if (frag)
	{
		_VirtualDom_appendChild(domNode, frag);
	}

	return domNode;
}


function _VirtualDom_applyPatchReorderEndInsertsHelp(endInserts, patch)
{
	if (!endInserts)
	{
		return;
	}

	var frag = _VirtualDom_doc.createDocumentFragment();
	for (var i = 0; i < endInserts.length; i++)
	{
		var insert = endInserts[i];
		var entry = insert.A;
		_VirtualDom_appendChild(frag, entry.c === 2
			? entry.s
			: _VirtualDom_render(entry.z, patch.u)
		);
	}
	return frag;
}


function _VirtualDom_virtualize(node)
{
	// TEXT NODES

	if (node.nodeType === 3)
	{
		return _VirtualDom_text(node.textContent);
	}


	// WEIRD NODES

	if (node.nodeType !== 1)
	{
		return _VirtualDom_text('');
	}


	// ELEMENT NODES

	var attrList = _List_Nil;
	var attrs = node.attributes;
	for (var i = attrs.length; i--; )
	{
		var attr = attrs[i];
		var name = attr.name;
		var value = attr.value;
		attrList = _List_Cons( A2(_VirtualDom_attribute, name, value), attrList );
	}

	var tag = node.tagName.toLowerCase();
	var kidList = _List_Nil;
	var kids = node.childNodes;

	for (var i = kids.length; i--; )
	{
		kidList = _List_Cons(_VirtualDom_virtualize(kids[i]), kidList);
	}
	return A3(_VirtualDom_node, tag, attrList, kidList);
}

function _VirtualDom_dekey(keyedNode)
{
	var keyedKids = keyedNode.e;
	var len = keyedKids.length;
	var kids = new Array(len);
	for (var i = 0; i < len; i++)
	{
		kids[i] = keyedKids[i].b;
	}

	return {
		$: 1,
		c: keyedNode.c,
		d: keyedNode.d,
		e: kids,
		f: keyedNode.f,
		b: keyedNode.b
	};
}



// STRINGS


var _Parser_isSubString = F5(function(smallString, offset, row, col, bigString)
{
	var smallLength = smallString.length;
	var isGood = offset + smallLength <= bigString.length;

	for (var i = 0; isGood && i < smallLength; )
	{
		var code = bigString.charCodeAt(offset);
		isGood =
			smallString[i++] === bigString[offset++]
			&& (
				code === 0x000A /* \n */
					? ( row++, col=1 )
					: ( col++, (code & 0xF800) === 0xD800 ? smallString[i++] === bigString[offset++] : 1 )
			)
	}

	return _Utils_Tuple3(isGood ? offset : -1, row, col);
});



// CHARS


var _Parser_isSubChar = F3(function(predicate, offset, string)
{
	return (
		string.length <= offset
			? -1
			:
		(string.charCodeAt(offset) & 0xF800) === 0xD800
			? (predicate(_Utils_chr(string.substr(offset, 2))) ? offset + 2 : -1)
			:
		(predicate(_Utils_chr(string[offset]))
			? ((string[offset] === '\n') ? -2 : (offset + 1))
			: -1
		)
	);
});


var _Parser_isAsciiCode = F3(function(code, offset, string)
{
	return string.charCodeAt(offset) === code;
});



// NUMBERS


var _Parser_chompBase10 = F2(function(offset, string)
{
	for (; offset < string.length; offset++)
	{
		var code = string.charCodeAt(offset);
		if (code < 0x30 || 0x39 < code)
		{
			return offset;
		}
	}
	return offset;
});


var _Parser_consumeBase = F3(function(base, offset, string)
{
	for (var total = 0; offset < string.length; offset++)
	{
		var digit = string.charCodeAt(offset) - 0x30;
		if (digit < 0 || base <= digit) break;
		total = base * total + digit;
	}
	return _Utils_Tuple2(offset, total);
});


var _Parser_consumeBase16 = F2(function(offset, string)
{
	for (var total = 0; offset < string.length; offset++)
	{
		var code = string.charCodeAt(offset);
		if (0x30 <= code && code <= 0x39)
		{
			total = 16 * total + code - 0x30;
		}
		else if (0x41 <= code && code <= 0x46)
		{
			total = 16 * total + code - 55;
		}
		else if (0x61 <= code && code <= 0x66)
		{
			total = 16 * total + code - 87;
		}
		else
		{
			break;
		}
	}
	return _Utils_Tuple2(offset, total);
});



// FIND STRING


var _Parser_findSubString = F5(function(smallString, offset, row, col, bigString)
{
	var newOffset = bigString.indexOf(smallString, offset);
	var target = newOffset < 0 ? bigString.length : newOffset + smallString.length;

	while (offset < target)
	{
		var code = bigString.charCodeAt(offset++);
		code === 0x000A /* \n */
			? ( col=1, row++ )
			: ( col++, (code & 0xF800) === 0xD800 && offset++ )
	}

	return _Utils_Tuple3(newOffset, row, col);
});




// ELEMENT


var _Debugger_element;

var _Browser_element = _Debugger_element || F4(function(impl, flagDecoder, debugMetadata, args)
{
	return _Platform_initialize(
		flagDecoder,
		args,
		impl.init,
		impl.update,
		impl.subscriptions,
		function(sendToApp, initialModel) {
			var view = impl.view;
			/**_UNUSED/
			var domNode = args['node'];
			//*/
			/**/
			var domNode = args && args['node'] ? args['node'] : _Debug_crash(0);
			//*/
			var currNode = _VirtualDom_virtualize(domNode);

			return _Browser_makeAnimator(initialModel, function(model)
			{
				var nextNode = view(model);
				var patches = _VirtualDom_diff(currNode, nextNode);
				domNode = _VirtualDom_applyPatches(domNode, currNode, patches, sendToApp);
				currNode = nextNode;
			});
		}
	);
});



// DOCUMENT


var _Debugger_document;

var _Browser_document = _Debugger_document || F4(function(impl, flagDecoder, debugMetadata, args)
{
	return _Platform_initialize(
		flagDecoder,
		args,
		impl.init,
		impl.update,
		impl.subscriptions,
		function(sendToApp, initialModel) {
			var divertHrefToApp = impl.setup && impl.setup(sendToApp)
			var view = impl.view;
			var title = _VirtualDom_doc.title;
			var bodyNode = _VirtualDom_doc.body;
			var currNode = _VirtualDom_virtualize(bodyNode);
			return _Browser_makeAnimator(initialModel, function(model)
			{
				_VirtualDom_divertHrefToApp = divertHrefToApp;
				var doc = view(model);
				var nextNode = _VirtualDom_node('body')(_List_Nil)(doc.body);
				var patches = _VirtualDom_diff(currNode, nextNode);
				bodyNode = _VirtualDom_applyPatches(bodyNode, currNode, patches, sendToApp);
				currNode = nextNode;
				_VirtualDom_divertHrefToApp = 0;
				(title !== doc.title) && (_VirtualDom_doc.title = title = doc.title);
			});
		}
	);
});



// ANIMATION


var _Browser_requestAnimationFrame =
	typeof requestAnimationFrame !== 'undefined'
		? requestAnimationFrame
		: function(callback) { setTimeout(callback, 1000 / 60); };


function _Browser_makeAnimator(model, draw)
{
	draw(model);

	var state = 0;

	function updateIfNeeded()
	{
		state = state === 1
			? 0
			: ( _Browser_requestAnimationFrame(updateIfNeeded), draw(model), 1 );
	}

	return function(nextModel, isSync)
	{
		model = nextModel;

		isSync
			? ( draw(model),
				state === 2 && (state = 1)
				)
			: ( state === 0 && _Browser_requestAnimationFrame(updateIfNeeded),
				state = 2
				);
	};
}



// APPLICATION


function _Browser_application(impl)
{
	var onUrlChange = impl.onUrlChange;
	var onUrlRequest = impl.onUrlRequest;
	var key = function() { key.a(onUrlChange(_Browser_getUrl())); };

	return _Browser_document({
		setup: function(sendToApp)
		{
			key.a = sendToApp;
			_Browser_window.addEventListener('popstate', key);
			_Browser_window.navigator.userAgent.indexOf('Trident') < 0 || _Browser_window.addEventListener('hashchange', key);

			return F2(function(domNode, event)
			{
				if (!event.ctrlKey && !event.metaKey && !event.shiftKey && event.button < 1 && !domNode.target && !domNode.download)
				{
					event.preventDefault();
					var href = domNode.href;
					var curr = _Browser_getUrl();
					var next = elm$url$Url$fromString(href).a;
					sendToApp(onUrlRequest(
						(next
							&& curr.protocol === next.protocol
							&& curr.host === next.host
							&& curr.port_.a === next.port_.a
						)
							? elm$browser$Browser$Internal(next)
							: elm$browser$Browser$External(href)
					));
				}
			});
		},
		init: function(flags)
		{
			return A3(impl.init, flags, _Browser_getUrl(), key);
		},
		view: impl.view,
		update: impl.update,
		subscriptions: impl.subscriptions
	});
}

function _Browser_getUrl()
{
	return elm$url$Url$fromString(_VirtualDom_doc.location.href).a || _Debug_crash(1);
}

var _Browser_go = F2(function(key, n)
{
	return A2(elm$core$Task$perform, elm$core$Basics$never, _Scheduler_binding(function() {
		n && history.go(n);
		key();
	}));
});

var _Browser_pushUrl = F2(function(key, url)
{
	return A2(elm$core$Task$perform, elm$core$Basics$never, _Scheduler_binding(function() {
		history.pushState({}, '', url);
		key();
	}));
});

var _Browser_replaceUrl = F2(function(key, url)
{
	return A2(elm$core$Task$perform, elm$core$Basics$never, _Scheduler_binding(function() {
		history.replaceState({}, '', url);
		key();
	}));
});



// GLOBAL EVENTS


var _Browser_fakeNode = { addEventListener: function() {}, removeEventListener: function() {} };
var _Browser_doc = typeof document !== 'undefined' ? document : _Browser_fakeNode;
var _Browser_window = typeof window !== 'undefined' ? window : _Browser_fakeNode;

var _Browser_on = F3(function(node, eventName, sendToSelf)
{
	return _Scheduler_spawn(_Scheduler_binding(function(callback)
	{
		function handler(event)	{ _Scheduler_rawSpawn(sendToSelf(event)); }
		node.addEventListener(eventName, handler, _VirtualDom_passiveSupported && { passive: true });
		return function() { node.removeEventListener(eventName, handler); };
	}));
});

var _Browser_decodeEvent = F2(function(decoder, event)
{
	var result = _Json_runHelp(decoder, event);
	return elm$core$Result$isOk(result) ? elm$core$Maybe$Just(result.a) : elm$core$Maybe$Nothing;
});



// PAGE VISIBILITY


function _Browser_visibilityInfo()
{
	return (typeof _VirtualDom_doc.hidden !== 'undefined')
		? { hidden: 'hidden', change: 'visibilitychange' }
		:
	(typeof _VirtualDom_doc.mozHidden !== 'undefined')
		? { hidden: 'mozHidden', change: 'mozvisibilitychange' }
		:
	(typeof _VirtualDom_doc.msHidden !== 'undefined')
		? { hidden: 'msHidden', change: 'msvisibilitychange' }
		:
	(typeof _VirtualDom_doc.webkitHidden !== 'undefined')
		? { hidden: 'webkitHidden', change: 'webkitvisibilitychange' }
		: { hidden: 'hidden', change: 'visibilitychange' };
}



// ANIMATION FRAMES


function _Browser_rAF()
{
	return _Scheduler_binding(function(callback)
	{
		var id = requestAnimationFrame(function() {
			callback(_Scheduler_succeed(Date.now()));
		});

		return function() {
			cancelAnimationFrame(id);
		};
	});
}


function _Browser_now()
{
	return _Scheduler_binding(function(callback)
	{
		callback(_Scheduler_succeed(Date.now()));
	});
}



// DOM STUFF


function _Browser_withNode(id, doStuff)
{
	return _Scheduler_binding(function(callback)
	{
		_Browser_requestAnimationFrame(function() {
			var node = document.getElementById(id);
			callback(node
				? _Scheduler_succeed(doStuff(node))
				: _Scheduler_fail(elm$browser$Browser$Dom$NotFound(id))
			);
		});
	});
}


function _Browser_withWindow(doStuff)
{
	return _Scheduler_binding(function(callback)
	{
		_Browser_requestAnimationFrame(function() {
			callback(_Scheduler_succeed(doStuff()));
		});
	});
}


// FOCUS and BLUR


var _Browser_call = F2(function(functionName, id)
{
	return _Browser_withNode(id, function(node) {
		node[functionName]();
		return _Utils_Tuple0;
	});
});



// WINDOW VIEWPORT


function _Browser_getViewport()
{
	return {
		scene: _Browser_getScene(),
		viewport: {
			x: _Browser_window.pageXOffset,
			y: _Browser_window.pageYOffset,
			width: _Browser_doc.documentElement.clientWidth,
			height: _Browser_doc.documentElement.clientHeight
		}
	};
}

function _Browser_getScene()
{
	var body = _Browser_doc.body;
	var elem = _Browser_doc.documentElement;
	return {
		width: Math.max(body.scrollWidth, body.offsetWidth, elem.scrollWidth, elem.offsetWidth, elem.clientWidth),
		height: Math.max(body.scrollHeight, body.offsetHeight, elem.scrollHeight, elem.offsetHeight, elem.clientHeight)
	};
}

var _Browser_setViewport = F2(function(x, y)
{
	return _Browser_withWindow(function()
	{
		_Browser_window.scroll(x, y);
		return _Utils_Tuple0;
	});
});



// ELEMENT VIEWPORT


function _Browser_getViewportOf(id)
{
	return _Browser_withNode(id, function(node)
	{
		return {
			scene: {
				width: node.scrollWidth,
				height: node.scrollHeight
			},
			viewport: {
				x: node.scrollLeft,
				y: node.scrollTop,
				width: node.clientWidth,
				height: node.clientHeight
			}
		};
	});
}


var _Browser_setViewportOf = F3(function(id, x, y)
{
	return _Browser_withNode(id, function(node)
	{
		node.scrollLeft = x;
		node.scrollTop = y;
		return _Utils_Tuple0;
	});
});



// ELEMENT


function _Browser_getElement(id)
{
	return _Browser_withNode(id, function(node)
	{
		var rect = node.getBoundingClientRect();
		var x = _Browser_window.pageXOffset;
		var y = _Browser_window.pageYOffset;
		return {
			scene: _Browser_getScene(),
			viewport: {
				x: x,
				y: y,
				width: _Browser_doc.documentElement.clientWidth,
				height: _Browser_doc.documentElement.clientHeight
			},
			element: {
				x: x + rect.left,
				y: y + rect.top,
				width: rect.width,
				height: rect.height
			}
		};
	});
}



// LOAD and RELOAD


function _Browser_reload(skipCache)
{
	return A2(elm$core$Task$perform, elm$core$Basics$never, _Scheduler_binding(function(callback)
	{
		_VirtualDom_doc.location.reload(skipCache);
	}));
}

function _Browser_load(url)
{
	return A2(elm$core$Task$perform, elm$core$Basics$never, _Scheduler_binding(function(callback)
	{
		try
		{
			_Browser_window.location = url;
		}
		catch(err)
		{
			// Only Firefox can throw a NS_ERROR_MALFORMED_URI exception here.
			// Other browsers reload the page, so let's be consistent about that.
			_VirtualDom_doc.location.reload(false);
		}
	}));
}
var author$project$Testable$Runner$Analyze = {$: 'Analyze'};
var author$project$Testable$Runner$RefreshBoundingBox = function (a) {
	return {$: 'RefreshBoundingBox', a: a};
};
var elm$core$Array$branchFactor = 32;
var elm$core$Array$Array_elm_builtin = F4(
	function (a, b, c, d) {
		return {$: 'Array_elm_builtin', a: a, b: b, c: c, d: d};
	});
var elm$core$Basics$EQ = {$: 'EQ'};
var elm$core$Basics$GT = {$: 'GT'};
var elm$core$Basics$LT = {$: 'LT'};
var elm$core$Dict$foldr = F3(
	function (func, acc, t) {
		foldr:
		while (true) {
			if (t.$ === 'RBEmpty_elm_builtin') {
				return acc;
			} else {
				var key = t.b;
				var value = t.c;
				var left = t.d;
				var right = t.e;
				var $temp$func = func,
					$temp$acc = A3(
					func,
					key,
					value,
					A3(elm$core$Dict$foldr, func, acc, right)),
					$temp$t = left;
				func = $temp$func;
				acc = $temp$acc;
				t = $temp$t;
				continue foldr;
			}
		}
	});
var elm$core$List$cons = _List_cons;
var elm$core$Dict$toList = function (dict) {
	return A3(
		elm$core$Dict$foldr,
		F3(
			function (key, value, list) {
				return A2(
					elm$core$List$cons,
					_Utils_Tuple2(key, value),
					list);
			}),
		_List_Nil,
		dict);
};
var elm$core$Dict$keys = function (dict) {
	return A3(
		elm$core$Dict$foldr,
		F3(
			function (key, value, keyList) {
				return A2(elm$core$List$cons, key, keyList);
			}),
		_List_Nil,
		dict);
};
var elm$core$Set$toList = function (_n0) {
	var dict = _n0.a;
	return elm$core$Dict$keys(dict);
};
var elm$core$Elm$JsArray$foldr = _JsArray_foldr;
var elm$core$Array$foldr = F3(
	function (func, baseCase, _n0) {
		var tree = _n0.c;
		var tail = _n0.d;
		var helper = F2(
			function (node, acc) {
				if (node.$ === 'SubTree') {
					var subTree = node.a;
					return A3(elm$core$Elm$JsArray$foldr, helper, acc, subTree);
				} else {
					var values = node.a;
					return A3(elm$core$Elm$JsArray$foldr, func, acc, values);
				}
			});
		return A3(
			elm$core$Elm$JsArray$foldr,
			helper,
			A3(elm$core$Elm$JsArray$foldr, func, baseCase, tail),
			tree);
	});
var elm$core$Array$toList = function (array) {
	return A3(elm$core$Array$foldr, elm$core$List$cons, _List_Nil, array);
};
var elm$core$Basics$ceiling = _Basics_ceiling;
var elm$core$Basics$fdiv = _Basics_fdiv;
var elm$core$Basics$logBase = F2(
	function (base, number) {
		return _Basics_log(number) / _Basics_log(base);
	});
var elm$core$Basics$toFloat = _Basics_toFloat;
var elm$core$Array$shiftStep = elm$core$Basics$ceiling(
	A2(elm$core$Basics$logBase, 2, elm$core$Array$branchFactor));
var elm$core$Elm$JsArray$empty = _JsArray_empty;
var elm$core$Array$empty = A4(elm$core$Array$Array_elm_builtin, 0, elm$core$Array$shiftStep, elm$core$Elm$JsArray$empty, elm$core$Elm$JsArray$empty);
var elm$core$Array$Leaf = function (a) {
	return {$: 'Leaf', a: a};
};
var elm$core$Array$SubTree = function (a) {
	return {$: 'SubTree', a: a};
};
var elm$core$Elm$JsArray$initializeFromList = _JsArray_initializeFromList;
var elm$core$List$foldl = F3(
	function (func, acc, list) {
		foldl:
		while (true) {
			if (!list.b) {
				return acc;
			} else {
				var x = list.a;
				var xs = list.b;
				var $temp$func = func,
					$temp$acc = A2(func, x, acc),
					$temp$list = xs;
				func = $temp$func;
				acc = $temp$acc;
				list = $temp$list;
				continue foldl;
			}
		}
	});
var elm$core$List$reverse = function (list) {
	return A3(elm$core$List$foldl, elm$core$List$cons, _List_Nil, list);
};
var elm$core$Array$compressNodes = F2(
	function (nodes, acc) {
		compressNodes:
		while (true) {
			var _n0 = A2(elm$core$Elm$JsArray$initializeFromList, elm$core$Array$branchFactor, nodes);
			var node = _n0.a;
			var remainingNodes = _n0.b;
			var newAcc = A2(
				elm$core$List$cons,
				elm$core$Array$SubTree(node),
				acc);
			if (!remainingNodes.b) {
				return elm$core$List$reverse(newAcc);
			} else {
				var $temp$nodes = remainingNodes,
					$temp$acc = newAcc;
				nodes = $temp$nodes;
				acc = $temp$acc;
				continue compressNodes;
			}
		}
	});
var elm$core$Basics$apR = F2(
	function (x, f) {
		return f(x);
	});
var elm$core$Basics$eq = _Utils_equal;
var elm$core$Tuple$first = function (_n0) {
	var x = _n0.a;
	return x;
};
var elm$core$Array$treeFromBuilder = F2(
	function (nodeList, nodeListSize) {
		treeFromBuilder:
		while (true) {
			var newNodeSize = elm$core$Basics$ceiling(nodeListSize / elm$core$Array$branchFactor);
			if (newNodeSize === 1) {
				return A2(elm$core$Elm$JsArray$initializeFromList, elm$core$Array$branchFactor, nodeList).a;
			} else {
				var $temp$nodeList = A2(elm$core$Array$compressNodes, nodeList, _List_Nil),
					$temp$nodeListSize = newNodeSize;
				nodeList = $temp$nodeList;
				nodeListSize = $temp$nodeListSize;
				continue treeFromBuilder;
			}
		}
	});
var elm$core$Basics$add = _Basics_add;
var elm$core$Basics$apL = F2(
	function (f, x) {
		return f(x);
	});
var elm$core$Basics$floor = _Basics_floor;
var elm$core$Basics$gt = _Utils_gt;
var elm$core$Basics$max = F2(
	function (x, y) {
		return (_Utils_cmp(x, y) > 0) ? x : y;
	});
var elm$core$Basics$mul = _Basics_mul;
var elm$core$Basics$sub = _Basics_sub;
var elm$core$Elm$JsArray$length = _JsArray_length;
var elm$core$Array$builderToArray = F2(
	function (reverseNodeList, builder) {
		if (!builder.nodeListSize) {
			return A4(
				elm$core$Array$Array_elm_builtin,
				elm$core$Elm$JsArray$length(builder.tail),
				elm$core$Array$shiftStep,
				elm$core$Elm$JsArray$empty,
				builder.tail);
		} else {
			var treeLen = builder.nodeListSize * elm$core$Array$branchFactor;
			var depth = elm$core$Basics$floor(
				A2(elm$core$Basics$logBase, elm$core$Array$branchFactor, treeLen - 1));
			var correctNodeList = reverseNodeList ? elm$core$List$reverse(builder.nodeList) : builder.nodeList;
			var tree = A2(elm$core$Array$treeFromBuilder, correctNodeList, builder.nodeListSize);
			return A4(
				elm$core$Array$Array_elm_builtin,
				elm$core$Elm$JsArray$length(builder.tail) + treeLen,
				A2(elm$core$Basics$max, 5, depth * elm$core$Array$shiftStep),
				tree,
				builder.tail);
		}
	});
var elm$core$Basics$False = {$: 'False'};
var elm$core$Basics$idiv = _Basics_idiv;
var elm$core$Basics$lt = _Utils_lt;
var elm$core$Elm$JsArray$initialize = _JsArray_initialize;
var elm$core$Array$initializeHelp = F5(
	function (fn, fromIndex, len, nodeList, tail) {
		initializeHelp:
		while (true) {
			if (fromIndex < 0) {
				return A2(
					elm$core$Array$builderToArray,
					false,
					{nodeList: nodeList, nodeListSize: (len / elm$core$Array$branchFactor) | 0, tail: tail});
			} else {
				var leaf = elm$core$Array$Leaf(
					A3(elm$core$Elm$JsArray$initialize, elm$core$Array$branchFactor, fromIndex, fn));
				var $temp$fn = fn,
					$temp$fromIndex = fromIndex - elm$core$Array$branchFactor,
					$temp$len = len,
					$temp$nodeList = A2(elm$core$List$cons, leaf, nodeList),
					$temp$tail = tail;
				fn = $temp$fn;
				fromIndex = $temp$fromIndex;
				len = $temp$len;
				nodeList = $temp$nodeList;
				tail = $temp$tail;
				continue initializeHelp;
			}
		}
	});
var elm$core$Basics$le = _Utils_le;
var elm$core$Basics$remainderBy = _Basics_remainderBy;
var elm$core$Array$initialize = F2(
	function (len, fn) {
		if (len <= 0) {
			return elm$core$Array$empty;
		} else {
			var tailLen = len % elm$core$Array$branchFactor;
			var tail = A3(elm$core$Elm$JsArray$initialize, tailLen, len - tailLen, fn);
			var initialFromIndex = (len - tailLen) - elm$core$Array$branchFactor;
			return A5(elm$core$Array$initializeHelp, fn, initialFromIndex, len, _List_Nil, tail);
		}
	});
var elm$core$Maybe$Just = function (a) {
	return {$: 'Just', a: a};
};
var elm$core$Maybe$Nothing = {$: 'Nothing'};
var elm$core$Result$Err = function (a) {
	return {$: 'Err', a: a};
};
var elm$core$Result$Ok = function (a) {
	return {$: 'Ok', a: a};
};
var elm$core$Basics$True = {$: 'True'};
var elm$core$Result$isOk = function (result) {
	if (result.$ === 'Ok') {
		return true;
	} else {
		return false;
	}
};
var elm$json$Json$Decode$Failure = F2(
	function (a, b) {
		return {$: 'Failure', a: a, b: b};
	});
var elm$json$Json$Decode$Field = F2(
	function (a, b) {
		return {$: 'Field', a: a, b: b};
	});
var elm$json$Json$Decode$Index = F2(
	function (a, b) {
		return {$: 'Index', a: a, b: b};
	});
var elm$json$Json$Decode$OneOf = function (a) {
	return {$: 'OneOf', a: a};
};
var elm$core$Basics$and = _Basics_and;
var elm$core$Basics$append = _Utils_append;
var elm$core$Basics$or = _Basics_or;
var elm$core$Char$toCode = _Char_toCode;
var elm$core$Char$isLower = function (_char) {
	var code = elm$core$Char$toCode(_char);
	return (97 <= code) && (code <= 122);
};
var elm$core$Char$isUpper = function (_char) {
	var code = elm$core$Char$toCode(_char);
	return (code <= 90) && (65 <= code);
};
var elm$core$Char$isAlpha = function (_char) {
	return elm$core$Char$isLower(_char) || elm$core$Char$isUpper(_char);
};
var elm$core$Char$isDigit = function (_char) {
	var code = elm$core$Char$toCode(_char);
	return (code <= 57) && (48 <= code);
};
var elm$core$Char$isAlphaNum = function (_char) {
	return elm$core$Char$isLower(_char) || (elm$core$Char$isUpper(_char) || elm$core$Char$isDigit(_char));
};
var elm$core$List$length = function (xs) {
	return A3(
		elm$core$List$foldl,
		F2(
			function (_n0, i) {
				return i + 1;
			}),
		0,
		xs);
};
var elm$core$List$map2 = _List_map2;
var elm$core$List$rangeHelp = F3(
	function (lo, hi, list) {
		rangeHelp:
		while (true) {
			if (_Utils_cmp(lo, hi) < 1) {
				var $temp$lo = lo,
					$temp$hi = hi - 1,
					$temp$list = A2(elm$core$List$cons, hi, list);
				lo = $temp$lo;
				hi = $temp$hi;
				list = $temp$list;
				continue rangeHelp;
			} else {
				return list;
			}
		}
	});
var elm$core$List$range = F2(
	function (lo, hi) {
		return A3(elm$core$List$rangeHelp, lo, hi, _List_Nil);
	});
var elm$core$List$indexedMap = F2(
	function (f, xs) {
		return A3(
			elm$core$List$map2,
			f,
			A2(
				elm$core$List$range,
				0,
				elm$core$List$length(xs) - 1),
			xs);
	});
var elm$core$String$all = _String_all;
var elm$core$String$fromInt = _String_fromNumber;
var elm$core$String$join = F2(
	function (sep, chunks) {
		return A2(
			_String_join,
			sep,
			_List_toArray(chunks));
	});
var elm$core$String$uncons = _String_uncons;
var elm$core$String$split = F2(
	function (sep, string) {
		return _List_fromArray(
			A2(_String_split, sep, string));
	});
var elm$json$Json$Decode$indent = function (str) {
	return A2(
		elm$core$String$join,
		'\n    ',
		A2(elm$core$String$split, '\n', str));
};
var elm$json$Json$Encode$encode = _Json_encode;
var elm$json$Json$Decode$errorOneOf = F2(
	function (i, error) {
		return '\n\n(' + (elm$core$String$fromInt(i + 1) + (') ' + elm$json$Json$Decode$indent(
			elm$json$Json$Decode$errorToString(error))));
	});
var elm$json$Json$Decode$errorToString = function (error) {
	return A2(elm$json$Json$Decode$errorToStringHelp, error, _List_Nil);
};
var elm$json$Json$Decode$errorToStringHelp = F2(
	function (error, context) {
		errorToStringHelp:
		while (true) {
			switch (error.$) {
				case 'Field':
					var f = error.a;
					var err = error.b;
					var isSimple = function () {
						var _n1 = elm$core$String$uncons(f);
						if (_n1.$ === 'Nothing') {
							return false;
						} else {
							var _n2 = _n1.a;
							var _char = _n2.a;
							var rest = _n2.b;
							return elm$core$Char$isAlpha(_char) && A2(elm$core$String$all, elm$core$Char$isAlphaNum, rest);
						}
					}();
					var fieldName = isSimple ? ('.' + f) : ('[\'' + (f + '\']'));
					var $temp$error = err,
						$temp$context = A2(elm$core$List$cons, fieldName, context);
					error = $temp$error;
					context = $temp$context;
					continue errorToStringHelp;
				case 'Index':
					var i = error.a;
					var err = error.b;
					var indexName = '[' + (elm$core$String$fromInt(i) + ']');
					var $temp$error = err,
						$temp$context = A2(elm$core$List$cons, indexName, context);
					error = $temp$error;
					context = $temp$context;
					continue errorToStringHelp;
				case 'OneOf':
					var errors = error.a;
					if (!errors.b) {
						return 'Ran into a Json.Decode.oneOf with no possibilities' + function () {
							if (!context.b) {
								return '!';
							} else {
								return ' at json' + A2(
									elm$core$String$join,
									'',
									elm$core$List$reverse(context));
							}
						}();
					} else {
						if (!errors.b.b) {
							var err = errors.a;
							var $temp$error = err,
								$temp$context = context;
							error = $temp$error;
							context = $temp$context;
							continue errorToStringHelp;
						} else {
							var starter = function () {
								if (!context.b) {
									return 'Json.Decode.oneOf';
								} else {
									return 'The Json.Decode.oneOf at json' + A2(
										elm$core$String$join,
										'',
										elm$core$List$reverse(context));
								}
							}();
							var introduction = starter + (' failed in the following ' + (elm$core$String$fromInt(
								elm$core$List$length(errors)) + ' ways:'));
							return A2(
								elm$core$String$join,
								'\n\n',
								A2(
									elm$core$List$cons,
									introduction,
									A2(elm$core$List$indexedMap, elm$json$Json$Decode$errorOneOf, errors)));
						}
					}
				default:
					var msg = error.a;
					var json = error.b;
					var introduction = function () {
						if (!context.b) {
							return 'Problem with the given value:\n\n';
						} else {
							return 'Problem with the value at json' + (A2(
								elm$core$String$join,
								'',
								elm$core$List$reverse(context)) + ':\n\n    ');
						}
					}();
					return introduction + (elm$json$Json$Decode$indent(
						A2(elm$json$Json$Encode$encode, 4, json)) + ('\n\n' + msg));
			}
		}
	});
var elm$json$Json$Decode$andThen = _Json_andThen;
var elm$json$Json$Decode$bool = _Json_decodeBool;
var elm$json$Json$Decode$field = _Json_decodeField;
var elm$json$Json$Decode$float = _Json_decodeFloat;
var elm$json$Json$Decode$index = _Json_decodeIndex;
var elm$json$Json$Decode$list = _Json_decodeList;
var elm$json$Json$Decode$string = _Json_decodeString;
var elm$json$Json$Decode$succeed = _Json_succeed;
var author$project$Testable$Runner$styles = _Platform_incomingPort(
	'styles',
	elm$json$Json$Decode$list(
		A2(
			elm$json$Json$Decode$andThen,
			function (style) {
				return A2(
					elm$json$Json$Decode$andThen,
					function (isVisible) {
						return A2(
							elm$json$Json$Decode$andThen,
							function (id) {
								return A2(
									elm$json$Json$Decode$andThen,
									function (bbox) {
										return elm$json$Json$Decode$succeed(
											{bbox: bbox, id: id, isVisible: isVisible, style: style});
									},
									A2(
										elm$json$Json$Decode$field,
										'bbox',
										A2(
											elm$json$Json$Decode$andThen,
											function (width) {
												return A2(
													elm$json$Json$Decode$andThen,
													function (top) {
														return A2(
															elm$json$Json$Decode$andThen,
															function (right) {
																return A2(
																	elm$json$Json$Decode$andThen,
																	function (padding) {
																		return A2(
																			elm$json$Json$Decode$andThen,
																			function (left) {
																				return A2(
																					elm$json$Json$Decode$andThen,
																					function (height) {
																						return A2(
																							elm$json$Json$Decode$andThen,
																							function (bottom) {
																								return elm$json$Json$Decode$succeed(
																									{bottom: bottom, height: height, left: left, padding: padding, right: right, top: top, width: width});
																							},
																							A2(elm$json$Json$Decode$field, 'bottom', elm$json$Json$Decode$float));
																					},
																					A2(elm$json$Json$Decode$field, 'height', elm$json$Json$Decode$float));
																			},
																			A2(elm$json$Json$Decode$field, 'left', elm$json$Json$Decode$float));
																	},
																	A2(
																		elm$json$Json$Decode$field,
																		'padding',
																		A2(
																			elm$json$Json$Decode$andThen,
																			function (top) {
																				return A2(
																					elm$json$Json$Decode$andThen,
																					function (right) {
																						return A2(
																							elm$json$Json$Decode$andThen,
																							function (left) {
																								return A2(
																									elm$json$Json$Decode$andThen,
																									function (bottom) {
																										return elm$json$Json$Decode$succeed(
																											{bottom: bottom, left: left, right: right, top: top});
																									},
																									A2(elm$json$Json$Decode$field, 'bottom', elm$json$Json$Decode$float));
																							},
																							A2(elm$json$Json$Decode$field, 'left', elm$json$Json$Decode$float));
																					},
																					A2(elm$json$Json$Decode$field, 'right', elm$json$Json$Decode$float));
																			},
																			A2(elm$json$Json$Decode$field, 'top', elm$json$Json$Decode$float))));
															},
															A2(elm$json$Json$Decode$field, 'right', elm$json$Json$Decode$float));
													},
													A2(elm$json$Json$Decode$field, 'top', elm$json$Json$Decode$float));
											},
											A2(elm$json$Json$Decode$field, 'width', elm$json$Json$Decode$float))));
							},
							A2(elm$json$Json$Decode$field, 'id', elm$json$Json$Decode$string));
					},
					A2(elm$json$Json$Decode$field, 'isVisible', elm$json$Json$Decode$bool));
			},
			A2(
				elm$json$Json$Decode$field,
				'style',
				elm$json$Json$Decode$list(
					A2(
						elm$json$Json$Decode$andThen,
						function (x0) {
							return A2(
								elm$json$Json$Decode$andThen,
								function (x1) {
									return elm$json$Json$Decode$succeed(
										_Utils_Tuple2(x0, x1));
								},
								A2(elm$json$Json$Decode$index, 1, elm$json$Json$Decode$string));
						},
						A2(elm$json$Json$Decode$index, 0, elm$json$Json$Decode$string)))))));
var elm$core$Platform$Sub$batch = _Platform_batch;
var author$project$Testable$Runner$subscriptions = function (model) {
	return elm$core$Platform$Sub$batch(
		_List_fromArray(
			[
				author$project$Testable$Runner$styles(author$project$Testable$Runner$RefreshBoundingBox)
			]));
};
var elm$core$List$foldrHelper = F4(
	function (fn, acc, ctr, ls) {
		if (!ls.b) {
			return acc;
		} else {
			var a = ls.a;
			var r1 = ls.b;
			if (!r1.b) {
				return A2(fn, a, acc);
			} else {
				var b = r1.a;
				var r2 = r1.b;
				if (!r2.b) {
					return A2(
						fn,
						a,
						A2(fn, b, acc));
				} else {
					var c = r2.a;
					var r3 = r2.b;
					if (!r3.b) {
						return A2(
							fn,
							a,
							A2(
								fn,
								b,
								A2(fn, c, acc)));
					} else {
						var d = r3.a;
						var r4 = r3.b;
						var res = (ctr > 500) ? A3(
							elm$core$List$foldl,
							fn,
							acc,
							elm$core$List$reverse(r4)) : A4(elm$core$List$foldrHelper, fn, acc, ctr + 1, r4);
						return A2(
							fn,
							a,
							A2(
								fn,
								b,
								A2(
									fn,
									c,
									A2(fn, d, res))));
					}
				}
			}
		}
	});
var elm$core$List$foldr = F3(
	function (fn, acc, ls) {
		return A4(elm$core$List$foldrHelper, fn, acc, 0, ls);
	});
var elm$core$List$map = F2(
	function (f, xs) {
		return A3(
			elm$core$List$foldr,
			F2(
				function (x, acc) {
					return A2(
						elm$core$List$cons,
						f(x),
						acc);
				}),
			_List_Nil,
			xs);
	});
var author$project$Testable$levelToString = function (level) {
	return function (x) {
		return 'se-' + x;
	}(
		A2(
			elm$core$String$join,
			'-',
			A2(elm$core$List$map, elm$core$String$fromInt, level)));
};
var elm$core$Basics$negate = function (n) {
	return -n;
};
var elm$core$List$append = F2(
	function (xs, ys) {
		if (!ys.b) {
			return xs;
		} else {
			return A3(elm$core$List$foldr, elm$core$List$cons, ys, xs);
		}
	});
var elm$core$List$concat = function (lists) {
	return A3(elm$core$List$foldr, elm$core$List$append, _List_Nil, lists);
};
var author$project$Testable$getElementId = F2(
	function (level, el) {
		var id = author$project$Testable$levelToString(level);
		var childrenIDs = function (children) {
			return elm$core$List$concat(
				A2(
					elm$core$List$indexedMap,
					function (i) {
						return author$project$Testable$getElementId(
							A2(elm$core$List$cons, i, level));
					},
					children));
		};
		var attrID = F2(
			function (attrIndex, attr) {
				if (attr.$ === 'Nearby') {
					var nearby = attr.a;
					return A2(
						author$project$Testable$getElementId,
						A2(
							elm$core$List$cons,
							attrIndex,
							A2(elm$core$List$cons, -1, level)),
						nearby.element);
				} else {
					return _List_Nil;
				}
			});
		var attributeIDs = function (attrs) {
			return elm$core$List$concat(
				A2(elm$core$List$indexedMap, attrID, attrs));
		};
		switch (el.$) {
			case 'El':
				var attrs = el.a;
				var child = el.b;
				return A2(
					elm$core$List$cons,
					id,
					_Utils_ap(
						A2(
							author$project$Testable$getElementId,
							A2(elm$core$List$cons, 0, level),
							child),
						attributeIDs(attrs)));
			case 'Row':
				var attrs = el.a;
				var children = el.b;
				return A2(
					elm$core$List$cons,
					id,
					_Utils_ap(
						childrenIDs(children),
						attributeIDs(attrs)));
			case 'Column':
				var attrs = el.a;
				var children = el.b;
				return A2(
					elm$core$List$cons,
					id,
					_Utils_ap(
						childrenIDs(children),
						attributeIDs(attrs)));
			case 'TextColumn':
				var attrs = el.a;
				var children = el.b;
				return A2(
					elm$core$List$cons,
					id,
					_Utils_ap(
						childrenIDs(children),
						attributeIDs(attrs)));
			case 'Paragraph':
				var attrs = el.a;
				var children = el.b;
				return A2(
					elm$core$List$cons,
					id,
					_Utils_ap(
						childrenIDs(children),
						attributeIDs(attrs)));
			case 'Empty':
				return _List_Nil;
			default:
				return _List_Nil;
		}
	});
var author$project$Testable$getIds = function (el) {
	return A2(
		elm$core$List$cons,
		'se-0',
		A2(
			author$project$Testable$getElementId,
			_List_fromArray(
				[0, 0]),
			el));
};
var elm$json$Json$Encode$list = F2(
	function (func, entries) {
		return _Json_wrap(
			A3(
				elm$core$List$foldl,
				_Json_addEntry(func),
				_Json_emptyArray(_Utils_Tuple0),
				entries));
	});
var elm$json$Json$Encode$string = _Json_wrap;
var author$project$Testable$Runner$analyze = _Platform_outgoingPort(
	'analyze',
	elm$json$Json$Encode$list(elm$json$Json$Encode$string));
var author$project$Testable$Runner$prepareResults = function (withResults) {
	var prepareNode = function (_n2) {
		var x = _n2.a;
		var maybeResult = _n2.b;
		return _Utils_Tuple2(
			x,
			function () {
				if (maybeResult.$ === 'Nothing') {
					return elm$core$Maybe$Nothing;
				} else {
					var res = maybeResult.a;
					return elm$core$Maybe$Just(
						{description: res.description, given: res.given});
				}
			}());
	};
	var prepare = function (_n0) {
		var label = _n0.label;
		var results = _n0.results;
		return {
			label: label,
			results: A2(elm$core$List$map, prepareNode, results)
		};
	};
	return A2(elm$core$List$map, prepare, withResults);
};
var elm$core$Basics$identity = function (x) {
	return x;
};
var elm$core$Maybe$destruct = F3(
	function (_default, func, maybe) {
		if (maybe.$ === 'Just') {
			var a = maybe.a;
			return func(a);
		} else {
			return _default;
		}
	});
var elm$json$Json$Encode$null = _Json_encodeNull;
var elm$json$Json$Encode$object = function (pairs) {
	return _Json_wrap(
		A3(
			elm$core$List$foldl,
			F2(
				function (_n0, obj) {
					var k = _n0.a;
					var v = _n0.b;
					return A3(_Json_addField, k, v, obj);
				}),
			_Json_emptyObject(_Utils_Tuple0),
			pairs));
};
var author$project$Testable$Runner$report = _Platform_outgoingPort(
	'report',
	elm$json$Json$Encode$list(
		function ($) {
			return elm$json$Json$Encode$object(
				_List_fromArray(
					[
						_Utils_Tuple2(
						'label',
						elm$json$Json$Encode$string($.label)),
						_Utils_Tuple2(
						'results',
						elm$json$Json$Encode$list(
							function ($) {
								var a = $.a;
								var b = $.b;
								return A2(
									elm$json$Json$Encode$list,
									elm$core$Basics$identity,
									_List_fromArray(
										[
											elm$json$Json$Encode$string(a),
											function ($) {
											return A3(
												elm$core$Maybe$destruct,
												elm$json$Json$Encode$null,
												function ($) {
													return elm$json$Json$Encode$object(
														_List_fromArray(
															[
																_Utils_Tuple2(
																'description',
																elm$json$Json$Encode$string($.description)),
																_Utils_Tuple2(
																'given',
																function ($) {
																	return A3(elm$core$Maybe$destruct, elm$json$Json$Encode$null, elm$json$Json$Encode$string, $);
																}($.given))
															]));
												},
												$);
										}(b)
										]));
							})($.results))
					]));
		}));
var elm$core$Debug$log = _Debug_log;
var elm$core$Tuple$pair = F2(
	function (a, b) {
		return _Utils_Tuple2(a, b);
	});
var elm$core$List$concatMap = F2(
	function (f, list) {
		return elm$core$List$concat(
			A2(elm$core$List$map, f, list));
	});
var elm$core$List$isEmpty = function (xs) {
	if (!xs.b) {
		return true;
	} else {
		return false;
	}
};
var elm_explorations$test$Test$Runner$Invalid = function (a) {
	return {$: 'Invalid', a: a};
};
var elm_explorations$test$Test$Runner$Only = function (a) {
	return {$: 'Only', a: a};
};
var elm_explorations$test$Test$Runner$Plain = function (a) {
	return {$: 'Plain', a: a};
};
var elm_explorations$test$Test$Runner$Skipping = function (a) {
	return {$: 'Skipping', a: a};
};
var elm$core$Basics$composeR = F3(
	function (f, g, x) {
		return g(
			f(x));
	});
var elm_explorations$test$Test$Runner$countRunnables = function (runnable) {
	countRunnables:
	while (true) {
		switch (runnable.$) {
			case 'Runnable':
				return 1;
			case 'Labeled':
				var runner = runnable.b;
				var $temp$runnable = runner;
				runnable = $temp$runnable;
				continue countRunnables;
			default:
				var runners = runnable.a;
				return elm_explorations$test$Test$Runner$cyclic$countAllRunnables()(runners);
		}
	}
};
function elm_explorations$test$Test$Runner$cyclic$countAllRunnables() {
	return A2(
		elm$core$List$foldl,
		A2(elm$core$Basics$composeR, elm_explorations$test$Test$Runner$countRunnables, elm$core$Basics$add),
		0);
}
try {
	var elm_explorations$test$Test$Runner$countAllRunnables = elm_explorations$test$Test$Runner$cyclic$countAllRunnables();
	elm_explorations$test$Test$Runner$cyclic$countAllRunnables = function () {
		return elm_explorations$test$Test$Runner$countAllRunnables;
	};
} catch ($) {
throw 'Some top-level definitions from `Test.Runner` are causing infinite recursion:\n\n  ┌─────┐\n  │    countAllRunnables\n  │     ↓\n  │    countRunnables\n  └─────┘\n\nThese errors are very tricky, so read https://elm-lang.org/0.19.0/halting-problem to learn how to fix it!';}
var elm$core$Bitwise$or = _Bitwise_or;
var elm$core$Bitwise$shiftRightZfBy = _Bitwise_shiftRightZfBy;
var elm$core$Bitwise$xor = _Bitwise_xor;
var elm$random$Random$Generator = function (a) {
	return {$: 'Generator', a: a};
};
var elm$random$Random$Seed = F2(
	function (a, b) {
		return {$: 'Seed', a: a, b: b};
	});
var elm$core$Bitwise$and = _Bitwise_and;
var elm$random$Random$next = function (_n0) {
	var state0 = _n0.a;
	var incr = _n0.b;
	return A2(elm$random$Random$Seed, ((state0 * 1664525) + incr) >>> 0, incr);
};
var elm$random$Random$peel = function (_n0) {
	var state = _n0.a;
	var word = (state ^ (state >>> ((state >>> 28) + 4))) * 277803737;
	return ((word >>> 22) ^ word) >>> 0;
};
var elm$random$Random$int = F2(
	function (a, b) {
		return elm$random$Random$Generator(
			function (seed0) {
				var _n0 = (_Utils_cmp(a, b) < 0) ? _Utils_Tuple2(a, b) : _Utils_Tuple2(b, a);
				var lo = _n0.a;
				var hi = _n0.b;
				var range = (hi - lo) + 1;
				if (!((range - 1) & range)) {
					return _Utils_Tuple2(
						(((range - 1) & elm$random$Random$peel(seed0)) >>> 0) + lo,
						elm$random$Random$next(seed0));
				} else {
					var threshhold = (((-range) >>> 0) % range) >>> 0;
					var accountForBias = function (seed) {
						accountForBias:
						while (true) {
							var x = elm$random$Random$peel(seed);
							var seedN = elm$random$Random$next(seed);
							if (_Utils_cmp(x, threshhold) < 0) {
								var $temp$seed = seedN;
								seed = $temp$seed;
								continue accountForBias;
							} else {
								return _Utils_Tuple2((x % range) + lo, seedN);
							}
						}
					};
					return accountForBias(seed0);
				}
			});
	});
var elm$random$Random$map3 = F4(
	function (func, _n0, _n1, _n2) {
		var genA = _n0.a;
		var genB = _n1.a;
		var genC = _n2.a;
		return elm$random$Random$Generator(
			function (seed0) {
				var _n3 = genA(seed0);
				var a = _n3.a;
				var seed1 = _n3.b;
				var _n4 = genB(seed1);
				var b = _n4.a;
				var seed2 = _n4.b;
				var _n5 = genC(seed2);
				var c = _n5.a;
				var seed3 = _n5.b;
				return _Utils_Tuple2(
					A3(func, a, b, c),
					seed3);
			});
	});
var elm$random$Random$step = F2(
	function (_n0, seed) {
		var generator = _n0.a;
		return generator(seed);
	});
var elm$random$Random$independentSeed = elm$random$Random$Generator(
	function (seed0) {
		var makeIndependentSeed = F3(
			function (state, b, c) {
				return elm$random$Random$next(
					A2(elm$random$Random$Seed, state, (1 | (b ^ c)) >>> 0));
			});
		var gen = A2(elm$random$Random$int, 0, 4294967295);
		return A2(
			elm$random$Random$step,
			A4(elm$random$Random$map3, makeIndependentSeed, gen, gen, gen),
			seed0);
	});
var elm$random$Random$initialSeed = function (x) {
	var _n0 = elm$random$Random$next(
		A2(elm$random$Random$Seed, 0, 1013904223));
	var state1 = _n0.a;
	var incr = _n0.b;
	var state2 = (state1 + x) >>> 0;
	return elm$random$Random$next(
		A2(elm$random$Random$Seed, state2, incr));
};
var elm$random$Random$maxInt = 2147483647;
var elm_explorations$test$Test$Runner$Labeled = F2(
	function (a, b) {
		return {$: 'Labeled', a: a, b: b};
	});
var elm_explorations$test$Test$Runner$Runnable = function (a) {
	return {$: 'Runnable', a: a};
};
var elm_explorations$test$Test$Runner$Thunk = function (a) {
	return {$: 'Thunk', a: a};
};
var elm_explorations$test$Test$Runner$emptyDistribution = function (seed) {
	return {all: _List_Nil, only: _List_Nil, seed: seed, skipped: _List_Nil};
};
var elm_explorations$test$Test$Runner$fnvHash = F2(
	function (a, b) {
		return ((a ^ b) * 16777619) >>> 0;
	});
var elm$core$String$foldr = _String_foldr;
var elm$core$String$toList = function (string) {
	return A3(elm$core$String$foldr, elm$core$List$cons, _List_Nil, string);
};
var elm_explorations$test$Test$Runner$fnvHashString = F2(
	function (hash, str) {
		return A3(
			elm$core$List$foldl,
			elm_explorations$test$Test$Runner$fnvHash,
			hash,
			A2(
				elm$core$List$map,
				elm$core$Char$toCode,
				elm$core$String$toList(str)));
	});
var elm_explorations$test$Test$Runner$fnvInit = 2166136261;
var elm_explorations$test$Test$Runner$batchDistribute = F4(
	function (hashed, runs, test, prev) {
		var next = A4(elm_explorations$test$Test$Runner$distributeSeedsHelp, hashed, runs, prev.seed, test);
		return {
			all: _Utils_ap(prev.all, next.all),
			only: _Utils_ap(prev.only, next.only),
			seed: next.seed,
			skipped: _Utils_ap(prev.skipped, next.skipped)
		};
	});
var elm_explorations$test$Test$Runner$distributeSeedsHelp = F4(
	function (hashed, runs, seed, test) {
		switch (test.$) {
			case 'UnitTest':
				var aRun = test.a;
				return {
					all: _List_fromArray(
						[
							elm_explorations$test$Test$Runner$Runnable(
							elm_explorations$test$Test$Runner$Thunk(
								function (_n1) {
									return aRun(_Utils_Tuple0);
								}))
						]),
					only: _List_Nil,
					seed: seed,
					skipped: _List_Nil
				};
			case 'FuzzTest':
				var aRun = test.a;
				var _n2 = A2(elm$random$Random$step, elm$random$Random$independentSeed, seed);
				var firstSeed = _n2.a;
				var nextSeed = _n2.b;
				return {
					all: _List_fromArray(
						[
							elm_explorations$test$Test$Runner$Runnable(
							elm_explorations$test$Test$Runner$Thunk(
								function (_n3) {
									return A2(aRun, firstSeed, runs);
								}))
						]),
					only: _List_Nil,
					seed: nextSeed,
					skipped: _List_Nil
				};
			case 'Labeled':
				var description = test.a;
				var subTest = test.b;
				if (hashed) {
					var next = A4(elm_explorations$test$Test$Runner$distributeSeedsHelp, true, runs, seed, subTest);
					return {
						all: A2(
							elm$core$List$map,
							elm_explorations$test$Test$Runner$Labeled(description),
							next.all),
						only: A2(
							elm$core$List$map,
							elm_explorations$test$Test$Runner$Labeled(description),
							next.only),
						seed: next.seed,
						skipped: A2(
							elm$core$List$map,
							elm_explorations$test$Test$Runner$Labeled(description),
							next.skipped)
					};
				} else {
					var intFromSeed = A2(
						elm$random$Random$step,
						A2(elm$random$Random$int, 0, elm$random$Random$maxInt),
						seed).a;
					var hashedSeed = elm$random$Random$initialSeed(
						A2(
							elm_explorations$test$Test$Runner$fnvHash,
							intFromSeed,
							A2(elm_explorations$test$Test$Runner$fnvHashString, elm_explorations$test$Test$Runner$fnvInit, description)));
					var next = A4(elm_explorations$test$Test$Runner$distributeSeedsHelp, true, runs, hashedSeed, subTest);
					return {
						all: A2(
							elm$core$List$map,
							elm_explorations$test$Test$Runner$Labeled(description),
							next.all),
						only: A2(
							elm$core$List$map,
							elm_explorations$test$Test$Runner$Labeled(description),
							next.only),
						seed: seed,
						skipped: A2(
							elm$core$List$map,
							elm_explorations$test$Test$Runner$Labeled(description),
							next.skipped)
					};
				}
			case 'Skipped':
				var subTest = test.a;
				var next = A4(elm_explorations$test$Test$Runner$distributeSeedsHelp, hashed, runs, seed, subTest);
				return {all: _List_Nil, only: _List_Nil, seed: next.seed, skipped: next.all};
			case 'Only':
				var subTest = test.a;
				var next = A4(elm_explorations$test$Test$Runner$distributeSeedsHelp, hashed, runs, seed, subTest);
				return _Utils_update(
					next,
					{only: next.all});
			default:
				var tests = test.a;
				return A3(
					elm$core$List$foldl,
					A2(elm_explorations$test$Test$Runner$batchDistribute, hashed, runs),
					elm_explorations$test$Test$Runner$emptyDistribution(seed),
					tests);
		}
	});
var elm_explorations$test$Test$Runner$distributeSeeds = elm_explorations$test$Test$Runner$distributeSeedsHelp(false);
var elm_explorations$test$Test$Expectation$Fail = function (a) {
	return {$: 'Fail', a: a};
};
var elm_explorations$test$Test$Expectation$fail = function (_n0) {
	var description = _n0.description;
	var reason = _n0.reason;
	return elm_explorations$test$Test$Expectation$Fail(
		{description: description, given: elm$core$Maybe$Nothing, reason: reason});
};
var elm_explorations$test$Test$Runner$Failure$Custom = {$: 'Custom'};
var elm_explorations$test$Expect$fail = function (str) {
	return elm_explorations$test$Test$Expectation$fail(
		{description: str, reason: elm_explorations$test$Test$Runner$Failure$Custom});
};
var elm_explorations$test$Test$Runner$runThunk = _Test_runThunk;
var elm_explorations$test$Test$Runner$run = function (_n0) {
	var fn = _n0.a;
	var _n1 = elm_explorations$test$Test$Runner$runThunk(fn);
	if (_n1.$ === 'Ok') {
		var tests = _n1.a;
		return tests;
	} else {
		var message = _n1.a;
		return _List_fromArray(
			[
				elm_explorations$test$Expect$fail('This test failed because it threw an exception: \"' + (message + '\"'))
			]);
	}
};
var elm_explorations$test$Test$Runner$fromRunnableTreeHelp = F2(
	function (labels, runner) {
		fromRunnableTreeHelp:
		while (true) {
			switch (runner.$) {
				case 'Runnable':
					var runnable = runner.a;
					return _List_fromArray(
						[
							{
							labels: labels,
							run: function (_n1) {
								return elm_explorations$test$Test$Runner$run(runnable);
							}
						}
						]);
				case 'Labeled':
					var label = runner.a;
					var subRunner = runner.b;
					var $temp$labels = A2(elm$core$List$cons, label, labels),
						$temp$runner = subRunner;
					labels = $temp$labels;
					runner = $temp$runner;
					continue fromRunnableTreeHelp;
				default:
					var runners = runner.a;
					return A2(
						elm$core$List$concatMap,
						elm_explorations$test$Test$Runner$fromRunnableTreeHelp(labels),
						runners);
			}
		}
	});
var elm_explorations$test$Test$Runner$fromRunnableTree = elm_explorations$test$Test$Runner$fromRunnableTreeHelp(_List_Nil);
var elm_explorations$test$Test$Runner$fromTest = F3(
	function (runs, seed, test) {
		if (runs < 1) {
			return elm_explorations$test$Test$Runner$Invalid(
				'Test runner run count must be at least 1, not ' + elm$core$String$fromInt(runs));
		} else {
			var distribution = A3(elm_explorations$test$Test$Runner$distributeSeeds, runs, seed, test);
			return elm$core$List$isEmpty(distribution.only) ? ((!elm_explorations$test$Test$Runner$countAllRunnables(distribution.skipped)) ? elm_explorations$test$Test$Runner$Plain(
				A2(elm$core$List$concatMap, elm_explorations$test$Test$Runner$fromRunnableTree, distribution.all)) : elm_explorations$test$Test$Runner$Skipping(
				A2(elm$core$List$concatMap, elm_explorations$test$Test$Runner$fromRunnableTree, distribution.all))) : elm_explorations$test$Test$Runner$Only(
				A2(elm$core$List$concatMap, elm_explorations$test$Test$Runner$fromRunnableTree, distribution.only));
		}
	});
var elm_explorations$test$Test$Runner$getFailureReason = function (expectation) {
	if (expectation.$ === 'Pass') {
		return elm$core$Maybe$Nothing;
	} else {
		var record = expectation.a;
		return elm$core$Maybe$Just(record);
	}
};
var author$project$Testable$runTests = F2(
	function (seed, tests) {
		var run = function (runner) {
			var ran = A2(
				elm$core$List$map,
				elm_explorations$test$Test$Runner$getFailureReason,
				runner.run(_Utils_Tuple0));
			return A3(elm$core$List$map2, elm$core$Tuple$pair, runner.labels, ran);
		};
		var results = function () {
			var _n0 = A3(elm_explorations$test$Test$Runner$fromTest, 100, seed, tests);
			switch (_n0.$) {
				case 'Plain':
					var rnrs = _n0.a;
					return A2(elm$core$List$map, run, rnrs);
				case 'Only':
					var rnrs = _n0.a;
					return A2(elm$core$List$map, run, rnrs);
				case 'Skipping':
					var rnrs = _n0.a;
					return A2(elm$core$List$map, run, rnrs);
				default:
					var invalid = _n0.a;
					var _n1 = A2(elm$core$Debug$log, 'Invalid tests', invalid);
					return _List_Nil;
			}
		}();
		return elm$core$List$concat(results);
	});
var author$project$Testable$InEl = {$: 'InEl'};
var author$project$Testable$AttrTest = function (a) {
	return {$: 'AttrTest', a: a};
};
var author$project$Testable$InColumn = {$: 'InColumn'};
var author$project$Testable$InRow = {$: 'InRow'};
var author$project$Testable$IsNearby = function (a) {
	return {$: 'IsNearby', a: a};
};
var author$project$Testable$Column = F2(
	function (a, b) {
		return {$: 'Column', a: a, b: b};
	});
var author$project$Testable$El = F2(
	function (a, b) {
		return {$: 'El', a: a, b: b};
	});
var author$project$Testable$Empty = {$: 'Empty'};
var author$project$Testable$Paragraph = F2(
	function (a, b) {
		return {$: 'Paragraph', a: a, b: b};
	});
var author$project$Testable$Row = F2(
	function (a, b) {
		return {$: 'Row', a: a, b: b};
	});
var author$project$Testable$Text = function (a) {
	return {$: 'Text', a: a};
};
var author$project$Testable$TextColumn = F2(
	function (a, b) {
		return {$: 'TextColumn', a: a, b: b};
	});
var author$project$Testable$addAttribute = F2(
	function (attr, el) {
		switch (el.$) {
			case 'El':
				var attrs = el.a;
				var child = el.b;
				return A2(
					author$project$Testable$El,
					A2(elm$core$List$cons, attr, attrs),
					child);
			case 'Row':
				var attrs = el.a;
				var children = el.b;
				return A2(
					author$project$Testable$Row,
					A2(elm$core$List$cons, attr, attrs),
					children);
			case 'Column':
				var attrs = el.a;
				var children = el.b;
				return A2(
					author$project$Testable$Column,
					A2(elm$core$List$cons, attr, attrs),
					children);
			case 'TextColumn':
				var attrs = el.a;
				var children = el.b;
				return A2(
					author$project$Testable$TextColumn,
					A2(elm$core$List$cons, attr, attrs),
					children);
			case 'Paragraph':
				var attrs = el.a;
				var children = el.b;
				return A2(
					author$project$Testable$Paragraph,
					A2(elm$core$List$cons, attr, attrs),
					children);
			case 'Empty':
				return author$project$Testable$Empty;
			default:
				var str = el.a;
				return author$project$Testable$Text(str);
		}
	});
var author$project$Testable$LabeledTest = function (a) {
	return {$: 'LabeledTest', a: a};
};
var elm$core$List$maybeCons = F3(
	function (f, mx, xs) {
		var _n0 = f(mx);
		if (_n0.$ === 'Just') {
			var x = _n0.a;
			return A2(elm$core$List$cons, x, xs);
		} else {
			return xs;
		}
	});
var elm$core$List$filterMap = F2(
	function (f, xs) {
		return A3(
			elm$core$List$foldr,
			elm$core$List$maybeCons(f),
			_List_Nil,
			xs);
	});
var author$project$Testable$applyLabels = function (attrs) {
	var toLabel = function (attr) {
		if (attr.$ === 'Label') {
			var label = attr.a;
			return elm$core$Maybe$Just(label);
		} else {
			return elm$core$Maybe$Nothing;
		}
	};
	var newLabels = A2(
		elm$core$String$join,
		', ',
		A2(elm$core$List$filterMap, toLabel, attrs));
	var applyLabel = F2(
		function (newLabel, attr) {
			if (attr.$ === 'LabeledTest') {
				var labeled = attr.a;
				return author$project$Testable$LabeledTest(
					_Utils_update(
						labeled,
						{
							label: (newLabel === '') ? labeled.label : (newLabel + (', ' + labeled.label))
						}));
			} else {
				var x = attr;
				return x;
			}
		});
	return A2(
		elm$core$List$map,
		applyLabel(newLabels),
		attrs);
};
var elm$core$Basics$neq = _Utils_notEqual;
var author$project$Testable$getSpacing = function (el) {
	var getSpacingAttr = F2(
		function (attr, found) {
			if (!_Utils_eq(found, elm$core$Maybe$Nothing)) {
				return found;
			} else {
				switch (attr.$) {
					case 'Spacing':
						var i = attr.a;
						return elm$core$Maybe$Just(i);
					case 'Batch':
						var attrs = attr.a;
						return A3(elm$core$List$foldr, getSpacingAttr, elm$core$Maybe$Nothing, attrs);
					default:
						return elm$core$Maybe$Nothing;
				}
			}
		});
	var filterAttrs = function (attrs) {
		return A3(elm$core$List$foldr, getSpacingAttr, elm$core$Maybe$Nothing, attrs);
	};
	switch (el.$) {
		case 'El':
			var attrs = el.a;
			return filterAttrs(attrs);
		case 'Row':
			var attrs = el.a;
			return filterAttrs(attrs);
		case 'Column':
			var attrs = el.a;
			return filterAttrs(attrs);
		case 'TextColumn':
			var attrs = el.a;
			return filterAttrs(attrs);
		case 'Paragraph':
			var attrs = el.a;
			return filterAttrs(attrs);
		case 'Empty':
			return elm$core$Maybe$Nothing;
		default:
			return elm$core$Maybe$Nothing;
	}
};
var elm$core$Basics$always = F2(
	function (a, _n0) {
		return a;
	});
var elm$core$Basics$compare = _Utils_compare;
var elm$core$Dict$get = F2(
	function (targetKey, dict) {
		get:
		while (true) {
			if (dict.$ === 'RBEmpty_elm_builtin') {
				return elm$core$Maybe$Nothing;
			} else {
				var key = dict.b;
				var value = dict.c;
				var left = dict.d;
				var right = dict.e;
				var _n1 = A2(elm$core$Basics$compare, targetKey, key);
				switch (_n1.$) {
					case 'LT':
						var $temp$targetKey = targetKey,
							$temp$dict = left;
						targetKey = $temp$targetKey;
						dict = $temp$dict;
						continue get;
					case 'EQ':
						return elm$core$Maybe$Just(value);
					default:
						var $temp$targetKey = targetKey,
							$temp$dict = right;
						targetKey = $temp$targetKey;
						dict = $temp$dict;
						continue get;
				}
			}
		}
	});
var elm$core$Maybe$withDefault = F2(
	function (_default, maybe) {
		if (maybe.$ === 'Just') {
			var value = maybe.a;
			return value;
		} else {
			return _default;
		}
	});
var elm$core$Tuple$second = function (_n0) {
	var y = _n0.b;
	return y;
};
var elm$core$String$isEmpty = function (string) {
	return string === '';
};
var elm$core$String$trim = _String_trim;
var elm_explorations$test$Test$Internal$Labeled = F2(
	function (a, b) {
		return {$: 'Labeled', a: a, b: b};
	});
var elm_explorations$test$Test$Internal$UnitTest = function (a) {
	return {$: 'UnitTest', a: a};
};
var elm_explorations$test$Test$Internal$failNow = function (record) {
	return elm_explorations$test$Test$Internal$UnitTest(
		function (_n0) {
			return _List_fromArray(
				[
					elm_explorations$test$Test$Expectation$fail(record)
				]);
		});
};
var elm_explorations$test$Test$Runner$Failure$BadDescription = {$: 'BadDescription'};
var elm_explorations$test$Test$Runner$Failure$Invalid = function (a) {
	return {$: 'Invalid', a: a};
};
var elm_explorations$test$Test$Internal$blankDescriptionFailure = elm_explorations$test$Test$Internal$failNow(
	{
		description: 'This test has a blank description. Let\'s give it a useful one!',
		reason: elm_explorations$test$Test$Runner$Failure$Invalid(elm_explorations$test$Test$Runner$Failure$BadDescription)
	});
var elm_explorations$test$Test$test = F2(
	function (untrimmedDesc, thunk) {
		var desc = elm$core$String$trim(untrimmedDesc);
		return elm$core$String$isEmpty(desc) ? elm_explorations$test$Test$Internal$blankDescriptionFailure : A2(
			elm_explorations$test$Test$Internal$Labeled,
			desc,
			elm_explorations$test$Test$Internal$UnitTest(
				function (_n0) {
					return _List_fromArray(
						[
							thunk(_Utils_Tuple0)
						]);
				}));
	});
var author$project$Testable$createAttributeTest = F6(
	function (parent, cache, level, attrIndex, surroundings, attr) {
		var indexLabel = author$project$Testable$levelToString(
			A2(elm$core$List$cons, attrIndex, level));
		switch (attr.$) {
			case 'Attr':
				return _List_Nil;
			case 'Label':
				return _List_Nil;
			case 'Spacing':
				return _List_Nil;
			case 'AttrTest':
				var test = attr.a;
				return _List_fromArray(
					[
						test(surroundings)
					]);
			case 'Nearby':
				var nearby = attr.a;
				return author$project$Testable$createTest(
					{
						cache: cache,
						element: A2(
							author$project$Testable$addAttribute,
							author$project$Testable$AttrTest(
								function (context) {
									return A2(
										elm_explorations$test$Test$test,
										nearby.label + ('  #' + indexLabel),
										nearby.test(context));
								}),
							nearby.element),
						level: A2(
							elm$core$List$cons,
							attrIndex,
							A2(elm$core$List$cons, -1, level)),
						location: author$project$Testable$IsNearby(nearby.location),
						parent: parent,
						parentSpacing: 0,
						siblings: _List_Nil
					});
			case 'Batch':
				var batch = attr.a;
				return elm$core$List$concat(
					A2(
						elm$core$List$indexedMap,
						F2(
							function (i, attribute) {
								return A6(
									author$project$Testable$createAttributeTest,
									parent,
									cache,
									A2(elm$core$List$cons, attrIndex, level),
									i,
									surroundings,
									attribute);
							}),
						batch));
			default:
				var label = attr.a.label;
				var test = attr.a.test;
				return _List_fromArray(
					[
						A2(
						elm_explorations$test$Test$test,
						label + ('  #' + indexLabel),
						test(surroundings))
					]);
		}
	});
var author$project$Testable$createTest = function (_n0) {
	var siblings = _n0.siblings;
	var parent = _n0.parent;
	var cache = _n0.cache;
	var level = _n0.level;
	var element = _n0.element;
	var location = _n0.location;
	var parentSpacing = _n0.parentSpacing;
	var spacing = A2(
		elm$core$Maybe$withDefault,
		0,
		author$project$Testable$getSpacing(element));
	var id = author$project$Testable$levelToString(level);
	var applyChildTest = F3(
		function (found, child, childTest) {
			var surroundingChildren = function () {
				var _n12 = childTest.upcoming;
				if (!_n12.b) {
					return childTest.previous;
				} else {
					var x = _n12.a;
					var remaining = _n12.b;
					return _Utils_ap(remaining, childTest.previous);
				}
			}();
			var childrenTests = author$project$Testable$createTest(
				{
					cache: cache,
					element: child,
					level: A2(elm$core$List$cons, childTest.index, level),
					location: function () {
						switch (element.$) {
							case 'El':
								return author$project$Testable$InEl;
							case 'Row':
								return author$project$Testable$InRow;
							case 'Column':
								return author$project$Testable$InColumn;
							case 'TextColumn':
								return author$project$Testable$InColumn;
							case 'Paragraph':
								return author$project$Testable$InRow;
							case 'Text':
								return author$project$Testable$InEl;
							default:
								return author$project$Testable$InEl;
						}
					}(),
					parent: found,
					parentSpacing: spacing,
					siblings: surroundingChildren
				});
			return {
				index: childTest.index + 1,
				previous: function () {
					var _n9 = childTest.upcoming;
					if (!_n9.b) {
						return childTest.previous;
					} else {
						var x = _n9.a;
						return A2(elm$core$List$cons, x, childTest.previous);
					}
				}(),
				tests: _Utils_ap(childTest.tests, childrenTests),
				upcoming: function () {
					var _n10 = childTest.upcoming;
					if (!_n10.b) {
						return _List_Nil;
					} else {
						var rest = _n10.b;
						return rest;
					}
				}()
			};
		});
	var testChildren = F2(
		function (found, children) {
			var childrenFound = A2(
				elm$core$List$filterMap,
				function (x) {
					return A2(
						elm$core$Dict$get,
						author$project$Testable$levelToString(
							A2(elm$core$List$cons, x, level)),
						cache);
				},
				A2(
					elm$core$List$range,
					0,
					elm$core$List$length(children)));
			return A3(
				elm$core$List$foldl,
				applyChildTest(found),
				{index: 0, previous: _List_Nil, tests: _List_Nil, upcoming: childrenFound},
				children).tests;
		});
	var tests = F3(
		function (self, attributes, children) {
			var findBBox = F2(
				function (elem, _n8) {
					var i = _n8.a;
					var gathered = _n8.b;
					switch (elem.$) {
						case 'Empty':
							return _Utils_Tuple2(i + 1, gathered);
						case 'Text':
							return _Utils_Tuple2(i + 1, gathered);
						default:
							var _n5 = A2(
								elm$core$Dict$get,
								author$project$Testable$levelToString(
									A2(elm$core$List$cons, i, level)),
								cache);
							if (_n5.$ === 'Nothing') {
								var _n6 = A2(elm$core$Debug$log, 'el failed to find', elem);
								var _n7 = A2(
									elm$core$Debug$log,
									'Failed to find child',
									author$project$Testable$levelToString(
										A2(elm$core$List$cons, i, level)));
								return _Utils_Tuple2(i + 1, gathered);
							} else {
								var found = _n5.a;
								return _Utils_Tuple2(
									i + 1,
									A2(elm$core$List$cons, found, gathered));
							}
					}
				});
			var childrenFoundData = A3(
				elm$core$List$foldl,
				findBBox,
				_Utils_Tuple2(0, _List_Nil),
				children).b;
			var attributeTests = elm$core$List$concat(
				A2(
					elm$core$List$indexedMap,
					F2(
						function (i, attr) {
							return A6(
								author$project$Testable$createAttributeTest,
								self,
								cache,
								level,
								i,
								{children: childrenFoundData, location: location, parent: parent, parentSpacing: parentSpacing, self: self, siblings: siblings},
								attr);
						}),
					author$project$Testable$applyLabels(attributes)));
			return _Utils_ap(
				attributeTests,
				A2(testChildren, self, children));
		});
	var _n1 = A2(elm$core$Dict$get, id, cache);
	if (_n1.$ === 'Nothing') {
		switch (element.$) {
			case 'Empty':
				return _List_Nil;
			case 'Text':
				return _List_Nil;
			default:
				return _List_fromArray(
					[
						A2(
						elm_explorations$test$Test$test,
						'Unable to find ' + id,
						elm$core$Basics$always(
							elm_explorations$test$Expect$fail('failed id lookup')))
					]);
		}
	} else {
		var self = _n1.a;
		switch (element.$) {
			case 'El':
				var attrs = element.a;
				var child = element.b;
				return A3(
					tests,
					self,
					attrs,
					_List_fromArray(
						[child]));
			case 'Row':
				var attrs = element.a;
				var children = element.b;
				return A3(tests, self, attrs, children);
			case 'Column':
				var attrs = element.a;
				var children = element.b;
				return A3(tests, self, attrs, children);
			case 'TextColumn':
				var attrs = element.a;
				var children = element.b;
				return A3(tests, self, attrs, children);
			case 'Paragraph':
				var attrs = element.a;
				var children = element.b;
				return A3(tests, self, attrs, children);
			case 'Empty':
				return _List_Nil;
			default:
				var str = element.a;
				return _List_Nil;
		}
	}
};
var elm$core$Dict$member = F2(
	function (key, dict) {
		var _n0 = A2(elm$core$Dict$get, key, dict);
		if (_n0.$ === 'Just') {
			return true;
		} else {
			return false;
		}
	});
var elm$core$Set$member = F2(
	function (key, _n0) {
		var dict = _n0.a;
		return A2(elm$core$Dict$member, key, dict);
	});
var elm_explorations$test$Test$Internal$Batch = function (a) {
	return {$: 'Batch', a: a};
};
var elm$core$Result$andThen = F2(
	function (callback, result) {
		if (result.$ === 'Ok') {
			var value = result.a;
			return callback(value);
		} else {
			var msg = result.a;
			return elm$core$Result$Err(msg);
		}
	});
var elm$core$Dict$RBEmpty_elm_builtin = {$: 'RBEmpty_elm_builtin'};
var elm$core$Dict$empty = elm$core$Dict$RBEmpty_elm_builtin;
var elm$core$Set$Set_elm_builtin = function (a) {
	return {$: 'Set_elm_builtin', a: a};
};
var elm$core$Set$empty = elm$core$Set$Set_elm_builtin(elm$core$Dict$empty);
var elm$core$Dict$Black = {$: 'Black'};
var elm$core$Dict$RBNode_elm_builtin = F5(
	function (a, b, c, d, e) {
		return {$: 'RBNode_elm_builtin', a: a, b: b, c: c, d: d, e: e};
	});
var elm$core$Dict$Red = {$: 'Red'};
var elm$core$Dict$balance = F5(
	function (color, key, value, left, right) {
		if ((right.$ === 'RBNode_elm_builtin') && (right.a.$ === 'Red')) {
			var _n1 = right.a;
			var rK = right.b;
			var rV = right.c;
			var rLeft = right.d;
			var rRight = right.e;
			if ((left.$ === 'RBNode_elm_builtin') && (left.a.$ === 'Red')) {
				var _n3 = left.a;
				var lK = left.b;
				var lV = left.c;
				var lLeft = left.d;
				var lRight = left.e;
				return A5(
					elm$core$Dict$RBNode_elm_builtin,
					elm$core$Dict$Red,
					key,
					value,
					A5(elm$core$Dict$RBNode_elm_builtin, elm$core$Dict$Black, lK, lV, lLeft, lRight),
					A5(elm$core$Dict$RBNode_elm_builtin, elm$core$Dict$Black, rK, rV, rLeft, rRight));
			} else {
				return A5(
					elm$core$Dict$RBNode_elm_builtin,
					color,
					rK,
					rV,
					A5(elm$core$Dict$RBNode_elm_builtin, elm$core$Dict$Red, key, value, left, rLeft),
					rRight);
			}
		} else {
			if ((((left.$ === 'RBNode_elm_builtin') && (left.a.$ === 'Red')) && (left.d.$ === 'RBNode_elm_builtin')) && (left.d.a.$ === 'Red')) {
				var _n5 = left.a;
				var lK = left.b;
				var lV = left.c;
				var _n6 = left.d;
				var _n7 = _n6.a;
				var llK = _n6.b;
				var llV = _n6.c;
				var llLeft = _n6.d;
				var llRight = _n6.e;
				var lRight = left.e;
				return A5(
					elm$core$Dict$RBNode_elm_builtin,
					elm$core$Dict$Red,
					lK,
					lV,
					A5(elm$core$Dict$RBNode_elm_builtin, elm$core$Dict$Black, llK, llV, llLeft, llRight),
					A5(elm$core$Dict$RBNode_elm_builtin, elm$core$Dict$Black, key, value, lRight, right));
			} else {
				return A5(elm$core$Dict$RBNode_elm_builtin, color, key, value, left, right);
			}
		}
	});
var elm$core$Dict$insertHelp = F3(
	function (key, value, dict) {
		if (dict.$ === 'RBEmpty_elm_builtin') {
			return A5(elm$core$Dict$RBNode_elm_builtin, elm$core$Dict$Red, key, value, elm$core$Dict$RBEmpty_elm_builtin, elm$core$Dict$RBEmpty_elm_builtin);
		} else {
			var nColor = dict.a;
			var nKey = dict.b;
			var nValue = dict.c;
			var nLeft = dict.d;
			var nRight = dict.e;
			var _n1 = A2(elm$core$Basics$compare, key, nKey);
			switch (_n1.$) {
				case 'LT':
					return A5(
						elm$core$Dict$balance,
						nColor,
						nKey,
						nValue,
						A3(elm$core$Dict$insertHelp, key, value, nLeft),
						nRight);
				case 'EQ':
					return A5(elm$core$Dict$RBNode_elm_builtin, nColor, nKey, value, nLeft, nRight);
				default:
					return A5(
						elm$core$Dict$balance,
						nColor,
						nKey,
						nValue,
						nLeft,
						A3(elm$core$Dict$insertHelp, key, value, nRight));
			}
		}
	});
var elm$core$Dict$insert = F3(
	function (key, value, dict) {
		var _n0 = A3(elm$core$Dict$insertHelp, key, value, dict);
		if ((_n0.$ === 'RBNode_elm_builtin') && (_n0.a.$ === 'Red')) {
			var _n1 = _n0.a;
			var k = _n0.b;
			var v = _n0.c;
			var l = _n0.d;
			var r = _n0.e;
			return A5(elm$core$Dict$RBNode_elm_builtin, elm$core$Dict$Black, k, v, l, r);
		} else {
			var x = _n0;
			return x;
		}
	});
var elm$core$Set$insert = F2(
	function (key, _n0) {
		var dict = _n0.a;
		return elm$core$Set$Set_elm_builtin(
			A3(elm$core$Dict$insert, key, _Utils_Tuple0, dict));
	});
var elm_explorations$test$Test$Internal$duplicatedName = function () {
	var names = function (test) {
		names:
		while (true) {
			switch (test.$) {
				case 'Labeled':
					var str = test.a;
					return _List_fromArray(
						[str]);
				case 'Batch':
					var subtests = test.a;
					return A2(elm$core$List$concatMap, names, subtests);
				case 'UnitTest':
					return _List_Nil;
				case 'FuzzTest':
					return _List_Nil;
				case 'Skipped':
					var subTest = test.a;
					var $temp$test = subTest;
					test = $temp$test;
					continue names;
				default:
					var subTest = test.a;
					var $temp$test = subTest;
					test = $temp$test;
					continue names;
			}
		}
	};
	var insertOrFail = function (newName) {
		return elm$core$Result$andThen(
			function (oldNames) {
				return A2(elm$core$Set$member, newName, oldNames) ? elm$core$Result$Err(newName) : elm$core$Result$Ok(
					A2(elm$core$Set$insert, newName, oldNames));
			});
	};
	return A2(
		elm$core$Basics$composeR,
		elm$core$List$concatMap(names),
		A2(
			elm$core$List$foldl,
			insertOrFail,
			elm$core$Result$Ok(elm$core$Set$empty)));
}();
var elm_explorations$test$Test$Runner$Failure$DuplicatedName = {$: 'DuplicatedName'};
var elm_explorations$test$Test$Runner$Failure$EmptyList = {$: 'EmptyList'};
var elm_explorations$test$Test$describe = F2(
	function (untrimmedDesc, tests) {
		var desc = elm$core$String$trim(untrimmedDesc);
		if (elm$core$String$isEmpty(desc)) {
			return elm_explorations$test$Test$Internal$failNow(
				{
					description: 'This `describe` has a blank description. Let\'s give it a useful one!',
					reason: elm_explorations$test$Test$Runner$Failure$Invalid(elm_explorations$test$Test$Runner$Failure$BadDescription)
				});
		} else {
			if (elm$core$List$isEmpty(tests)) {
				return elm_explorations$test$Test$Internal$failNow(
					{
						description: 'This `describe ' + (desc + '` has no tests in it. Let\'s give it some!'),
						reason: elm_explorations$test$Test$Runner$Failure$Invalid(elm_explorations$test$Test$Runner$Failure$EmptyList)
					});
			} else {
				var _n0 = elm_explorations$test$Test$Internal$duplicatedName(tests);
				if (_n0.$ === 'Err') {
					var duped = _n0.a;
					return elm_explorations$test$Test$Internal$failNow(
						{
							description: 'The tests \'' + (desc + ('\' contain multiple tests named \'' + (duped + '\'. Let\'s rename them so we know which is which.'))),
							reason: elm_explorations$test$Test$Runner$Failure$Invalid(elm_explorations$test$Test$Runner$Failure$DuplicatedName)
						});
				} else {
					var childrenNames = _n0.a;
					return A2(elm$core$Set$member, desc, childrenNames) ? elm_explorations$test$Test$Internal$failNow(
						{
							description: 'The test \'' + (desc + '\' contains a child test of the same name. Let\'s rename them so we know which is which.'),
							reason: elm_explorations$test$Test$Runner$Failure$Invalid(elm_explorations$test$Test$Runner$Failure$DuplicatedName)
						}) : A2(
						elm_explorations$test$Test$Internal$Labeled,
						desc,
						elm_explorations$test$Test$Internal$Batch(tests));
				}
			}
		}
	});
var author$project$Testable$toTest = F3(
	function (label, harvested, el) {
		var maybeFound = A2(elm$core$Dict$get, 'se-0', harvested);
		if (maybeFound.$ === 'Nothing') {
			return A2(
				elm_explorations$test$Test$describe,
				label,
				_List_fromArray(
					[
						A2(
						elm_explorations$test$Test$test,
						'Find Root',
						function (_n1) {
							return elm_explorations$test$Expect$fail('unable to find root');
						})
					]));
		} else {
			var root = maybeFound.a;
			return A2(
				elm_explorations$test$Test$describe,
				label,
				author$project$Testable$createTest(
					{
						cache: harvested,
						element: el,
						level: _List_fromArray(
							[0, 0]),
						location: author$project$Testable$InEl,
						parent: root,
						parentSpacing: 0,
						siblings: _List_Nil
					}));
		}
	});
var author$project$Testable$Runner$runTest = F3(
	function (boxes, label, element) {
		var tests = A3(author$project$Testable$toTest, label, boxes, element);
		var seed = elm$random$Random$initialSeed(227852860);
		var results = A2(author$project$Testable$runTests, seed, tests);
		return {element: element, label: label, results: results};
	});
var elm$core$Dict$fromList = function (assocs) {
	return A3(
		elm$core$List$foldl,
		F2(
			function (_n0, dict) {
				var key = _n0.a;
				var value = _n0.b;
				return A3(elm$core$Dict$insert, key, value, dict);
			}),
		elm$core$Dict$empty,
		assocs);
};
var elm$core$Platform$Cmd$batch = _Platform_batch;
var elm$core$Platform$Cmd$none = elm$core$Platform$Cmd$batch(_List_Nil);
var elm$core$Process$sleep = _Process_sleep;
var elm$core$Task$andThen = _Scheduler_andThen;
var elm$core$Task$Perform = function (a) {
	return {$: 'Perform', a: a};
};
var elm$core$Task$succeed = _Scheduler_succeed;
var elm$core$Task$init = elm$core$Task$succeed(_Utils_Tuple0);
var elm$core$Task$map = F2(
	function (func, taskA) {
		return A2(
			elm$core$Task$andThen,
			function (a) {
				return elm$core$Task$succeed(
					func(a));
			},
			taskA);
	});
var elm$core$Task$map2 = F3(
	function (func, taskA, taskB) {
		return A2(
			elm$core$Task$andThen,
			function (a) {
				return A2(
					elm$core$Task$andThen,
					function (b) {
						return elm$core$Task$succeed(
							A2(func, a, b));
					},
					taskB);
			},
			taskA);
	});
var elm$core$Task$sequence = function (tasks) {
	return A3(
		elm$core$List$foldr,
		elm$core$Task$map2(elm$core$List$cons),
		elm$core$Task$succeed(_List_Nil),
		tasks);
};
var elm$core$Platform$sendToApp = _Platform_sendToApp;
var elm$core$Task$spawnCmd = F2(
	function (router, _n0) {
		var task = _n0.a;
		return _Scheduler_spawn(
			A2(
				elm$core$Task$andThen,
				elm$core$Platform$sendToApp(router),
				task));
	});
var elm$core$Task$onEffects = F3(
	function (router, commands, state) {
		return A2(
			elm$core$Task$map,
			function (_n0) {
				return _Utils_Tuple0;
			},
			elm$core$Task$sequence(
				A2(
					elm$core$List$map,
					elm$core$Task$spawnCmd(router),
					commands)));
	});
var elm$core$Task$onSelfMsg = F3(
	function (_n0, _n1, _n2) {
		return elm$core$Task$succeed(_Utils_Tuple0);
	});
var elm$core$Task$cmdMap = F2(
	function (tagger, _n0) {
		var task = _n0.a;
		return elm$core$Task$Perform(
			A2(elm$core$Task$map, tagger, task));
	});
_Platform_effectManagers['Task'] = _Platform_createManager(elm$core$Task$init, elm$core$Task$onEffects, elm$core$Task$onSelfMsg, elm$core$Task$cmdMap);
var elm$core$Task$command = _Platform_leaf('Task');
var elm$core$Task$perform = F2(
	function (toMessage, task) {
		return elm$core$Task$command(
			elm$core$Task$Perform(
				A2(elm$core$Task$map, toMessage, task)));
	});
var elm$time$Time$Name = function (a) {
	return {$: 'Name', a: a};
};
var elm$time$Time$Offset = function (a) {
	return {$: 'Offset', a: a};
};
var elm$time$Time$Zone = F2(
	function (a, b) {
		return {$: 'Zone', a: a, b: b};
	});
var elm$time$Time$customZone = elm$time$Time$Zone;
var elm$time$Time$Posix = function (a) {
	return {$: 'Posix', a: a};
};
var elm$time$Time$millisToPosix = elm$time$Time$Posix;
var elm$time$Time$now = _Time_now(elm$time$Time$millisToPosix);
var author$project$Testable$Runner$update = F2(
	function (msg, model) {
		switch (msg.$) {
			case 'NoOp':
				return _Utils_Tuple2(model, elm$core$Platform$Cmd$none);
			case 'RefreshBoundingBox':
				var boxes = msg.a;
				var _n1 = model.current;
				if (_n1.$ === 'Nothing') {
					return _Utils_Tuple2(model, elm$core$Platform$Cmd$none);
				} else {
					var _n2 = _n1.a;
					var label = _n2.a;
					var current = _n2.b;
					var toTuple = function (box) {
						return _Utils_Tuple2(
							box.id,
							{
								bbox: box.bbox,
								isVisible: box.isVisible,
								style: elm$core$Dict$fromList(box.style)
							});
					};
					var foundData = elm$core$Dict$fromList(
						A2(elm$core$List$map, toTuple, boxes));
					var currentResults = A3(author$project$Testable$Runner$runTest, foundData, label, current);
					var _n3 = model.upcoming;
					if (!_n3.b) {
						return _Utils_Tuple2(
							_Utils_update(
								model,
								{
									current: elm$core$Maybe$Nothing,
									finished: _Utils_ap(
										model.finished,
										_List_fromArray(
											[currentResults]))
								}),
							author$project$Testable$Runner$report(
								author$project$Testable$Runner$prepareResults(
									A2(elm$core$List$cons, currentResults, model.finished))));
					} else {
						var newCurrent = _n3.a;
						var remaining = _n3.b;
						return _Utils_Tuple2(
							_Utils_update(
								model,
								{
									current: elm$core$Maybe$Just(newCurrent),
									finished: _Utils_ap(
										model.finished,
										_List_fromArray(
											[currentResults])),
									upcoming: remaining
								}),
							A2(
								elm$core$Task$perform,
								elm$core$Basics$always(author$project$Testable$Runner$Analyze),
								A2(
									elm$core$Task$andThen,
									elm$core$Basics$always(elm$time$Time$now),
									elm$core$Process$sleep(32))));
					}
				}
			default:
				var _n4 = model.current;
				if (_n4.$ === 'Nothing') {
					return _Utils_Tuple2(model, elm$core$Platform$Cmd$none);
				} else {
					var _n5 = _n4.a;
					var label = _n5.a;
					var current = _n5.b;
					return _Utils_Tuple2(
						model,
						author$project$Testable$Runner$analyze(
							author$project$Testable$getIds(current)));
				}
		}
	});
var author$project$Internal$Model$Height = function (a) {
	return {$: 'Height', a: a};
};
var author$project$Element$height = author$project$Internal$Model$Height;
var author$project$Internal$Model$Content = {$: 'Content'};
var author$project$Element$shrink = author$project$Internal$Model$Content;
var author$project$Internal$Model$Width = function (a) {
	return {$: 'Width', a: a};
};
var author$project$Element$width = author$project$Internal$Model$Width;
var author$project$Internal$Model$Unkeyed = function (a) {
	return {$: 'Unkeyed', a: a};
};
var author$project$Internal$Model$AsColumn = {$: 'AsColumn'};
var author$project$Internal$Model$asColumn = author$project$Internal$Model$AsColumn;
var author$project$Internal$Model$Generic = {$: 'Generic'};
var author$project$Internal$Model$div = author$project$Internal$Model$Generic;
var author$project$Internal$Flag$Field = F2(
	function (a, b) {
		return {$: 'Field', a: a, b: b};
	});
var author$project$Internal$Flag$none = A2(author$project$Internal$Flag$Field, 0, 0);
var author$project$Internal$Model$NoNearbyChildren = {$: 'NoNearbyChildren'};
var author$project$Internal$Style$classes = {above: 'a', active: 'atv', alignBottom: 'ab', alignCenterX: 'cx', alignCenterY: 'cy', alignContainerBottom: 'acb', alignContainerCenterX: 'accx', alignContainerCenterY: 'accy', alignContainerRight: 'acr', alignLeft: 'al', alignRight: 'ar', alignTop: 'at', alignedHorizontally: 'ah', alignedVertically: 'av', any: 's', behind: 'bh', below: 'b', bold: 'w7', borderDashed: 'bd', borderDotted: 'bdt', borderNone: 'bn', borderSolid: 'bs', capturePointerEvents: 'cpe', clip: 'cp', clipX: 'cpx', clipY: 'cpy', column: 'c', container: 'ctr', contentBottom: 'cb', contentCenterX: 'ccx', contentCenterY: 'ccy', contentLeft: 'cl', contentRight: 'cr', contentTop: 'ct', cursorPointer: 'cptr', cursorText: 'ctxt', focus: 'fcs', fullSize: 'fs', grid: 'g', hasBehind: 'hbh', heightContent: 'hc', heightFill: 'hf', heightFillPortion: 'hfp', hover: 'hv', imageContainer: 'ic', inFront: 'fr', inputMultiline: 'iml', inputText: 'it', italic: 'i', nearby: 'nb', noTextSelection: 'notxt', onLeft: 'ol', onRight: 'or', opaque: 'oq', overflowHidden: 'oh', page: 'pg', paragraph: 'p', passPointerEvents: 'ppe', root: 'ui', row: 'r', scrollbars: 'sb', scrollbarsX: 'sbx', scrollbarsY: 'sby', seButton: 'sbt', single: 'e', sizeByCapital: 'cap', spaceEvenly: 'sev', strike: 'sk', text: 't', textCenter: 'tc', textExtraBold: 'w8', textExtraLight: 'w2', textHeavy: 'w9', textJustify: 'tj', textJustifyAll: 'tja', textLeft: 'tl', textLight: 'w3', textMedium: 'w5', textNormalWeight: 'w4', textRight: 'tr', textSemiBold: 'w6', textThin: 'w1', textUnitalicized: 'tun', transition: 'ts', transparent: 'clr', underline: 'u', widthContent: 'wc', widthExact: 'we', widthFill: 'wf', widthFillPortion: 'wfp', wrapped: 'wrp'};
var author$project$Internal$Model$columnClass = author$project$Internal$Style$classes.any + (' ' + author$project$Internal$Style$classes.column);
var author$project$Internal$Model$gridClass = author$project$Internal$Style$classes.any + (' ' + author$project$Internal$Style$classes.grid);
var author$project$Internal$Model$pageClass = author$project$Internal$Style$classes.any + (' ' + author$project$Internal$Style$classes.page);
var author$project$Internal$Model$paragraphClass = author$project$Internal$Style$classes.any + (' ' + author$project$Internal$Style$classes.paragraph);
var author$project$Internal$Model$rowClass = author$project$Internal$Style$classes.any + (' ' + author$project$Internal$Style$classes.row);
var author$project$Internal$Model$singleClass = author$project$Internal$Style$classes.any + (' ' + author$project$Internal$Style$classes.single);
var author$project$Internal$Model$contextClasses = function (context) {
	switch (context.$) {
		case 'AsRow':
			return author$project$Internal$Model$rowClass;
		case 'AsColumn':
			return author$project$Internal$Model$columnClass;
		case 'AsEl':
			return author$project$Internal$Model$singleClass;
		case 'AsGrid':
			return author$project$Internal$Model$gridClass;
		case 'AsParagraph':
			return author$project$Internal$Model$paragraphClass;
		default:
			return author$project$Internal$Model$pageClass;
	}
};
var author$project$Internal$Model$Keyed = function (a) {
	return {$: 'Keyed', a: a};
};
var author$project$Internal$Model$NoStyleSheet = {$: 'NoStyleSheet'};
var author$project$Internal$Model$Styled = function (a) {
	return {$: 'Styled', a: a};
};
var author$project$Internal$Model$Unstyled = function (a) {
	return {$: 'Unstyled', a: a};
};
var author$project$Internal$Model$addChildren = F2(
	function (existing, nearbyChildren) {
		switch (nearbyChildren.$) {
			case 'NoNearbyChildren':
				return existing;
			case 'ChildrenBehind':
				var behind = nearbyChildren.a;
				return _Utils_ap(behind, existing);
			case 'ChildrenInFront':
				var inFront = nearbyChildren.a;
				return _Utils_ap(existing, inFront);
			default:
				var behind = nearbyChildren.a;
				var inFront = nearbyChildren.b;
				return _Utils_ap(
					behind,
					_Utils_ap(existing, inFront));
		}
	});
var author$project$Internal$Model$addKeyedChildren = F3(
	function (key, existing, nearbyChildren) {
		switch (nearbyChildren.$) {
			case 'NoNearbyChildren':
				return existing;
			case 'ChildrenBehind':
				var behind = nearbyChildren.a;
				return _Utils_ap(
					A2(
						elm$core$List$map,
						function (x) {
							return _Utils_Tuple2(key, x);
						},
						behind),
					existing);
			case 'ChildrenInFront':
				var inFront = nearbyChildren.a;
				return _Utils_ap(
					existing,
					A2(
						elm$core$List$map,
						function (x) {
							return _Utils_Tuple2(key, x);
						},
						inFront));
			default:
				var behind = nearbyChildren.a;
				var inFront = nearbyChildren.b;
				return _Utils_ap(
					A2(
						elm$core$List$map,
						function (x) {
							return _Utils_Tuple2(key, x);
						},
						behind),
					_Utils_ap(
						existing,
						A2(
							elm$core$List$map,
							function (x) {
								return _Utils_Tuple2(key, x);
							},
							inFront)));
		}
	});
var author$project$Internal$Model$AsEl = {$: 'AsEl'};
var author$project$Internal$Model$asEl = author$project$Internal$Model$AsEl;
var author$project$Internal$Model$AsParagraph = {$: 'AsParagraph'};
var author$project$Internal$Model$asParagraph = author$project$Internal$Model$AsParagraph;
var author$project$Internal$Flag$Flag = function (a) {
	return {$: 'Flag', a: a};
};
var author$project$Internal$Flag$Second = function (a) {
	return {$: 'Second', a: a};
};
var elm$core$Bitwise$shiftLeftBy = _Bitwise_shiftLeftBy;
var author$project$Internal$Flag$flag = function (i) {
	return (i > 31) ? author$project$Internal$Flag$Second(1 << (i - 32)) : author$project$Internal$Flag$Flag(1 << i);
};
var author$project$Internal$Flag$alignBottom = author$project$Internal$Flag$flag(41);
var author$project$Internal$Flag$alignRight = author$project$Internal$Flag$flag(40);
var author$project$Internal$Flag$centerX = author$project$Internal$Flag$flag(42);
var author$project$Internal$Flag$centerY = author$project$Internal$Flag$flag(43);
var author$project$Internal$Flag$heightBetween = author$project$Internal$Flag$flag(45);
var author$project$Internal$Flag$heightFill = author$project$Internal$Flag$flag(37);
var author$project$Internal$Flag$present = F2(
	function (myFlag, _n0) {
		var fieldOne = _n0.a;
		var fieldTwo = _n0.b;
		if (myFlag.$ === 'Flag') {
			var first = myFlag.a;
			return _Utils_eq(first & fieldOne, first);
		} else {
			var second = myFlag.a;
			return _Utils_eq(second & fieldTwo, second);
		}
	});
var author$project$Internal$Flag$widthBetween = author$project$Internal$Flag$flag(44);
var author$project$Internal$Flag$widthFill = author$project$Internal$Flag$flag(39);
var author$project$Internal$Model$lengthClassName = function (x) {
	switch (x.$) {
		case 'Px':
			var px = x.a;
			return elm$core$String$fromInt(px) + 'px';
		case 'Content':
			return 'auto';
		case 'Fill':
			var i = x.a;
			return elm$core$String$fromInt(i) + 'fr';
		case 'Min':
			var min = x.a;
			var len = x.b;
			return 'min' + (elm$core$String$fromInt(min) + author$project$Internal$Model$lengthClassName(len));
		default:
			var max = x.a;
			var len = x.b;
			return 'max' + (elm$core$String$fromInt(max) + author$project$Internal$Model$lengthClassName(len));
	}
};
var elm$core$Basics$round = _Basics_round;
var author$project$Internal$Model$floatClass = function (x) {
	return elm$core$String$fromInt(
		elm$core$Basics$round(x * 255));
};
var author$project$Internal$Model$transformClass = function (transform) {
	switch (transform.$) {
		case 'Untransformed':
			return elm$core$Maybe$Nothing;
		case 'Moved':
			var _n1 = transform.a;
			var x = _n1.a;
			var y = _n1.b;
			var z = _n1.c;
			return elm$core$Maybe$Just(
				'mv-' + (author$project$Internal$Model$floatClass(x) + ('-' + (author$project$Internal$Model$floatClass(y) + ('-' + author$project$Internal$Model$floatClass(z))))));
		default:
			var _n2 = transform.a;
			var tx = _n2.a;
			var ty = _n2.b;
			var tz = _n2.c;
			var _n3 = transform.b;
			var sx = _n3.a;
			var sy = _n3.b;
			var sz = _n3.c;
			var _n4 = transform.c;
			var ox = _n4.a;
			var oy = _n4.b;
			var oz = _n4.c;
			var angle = transform.d;
			return elm$core$Maybe$Just(
				'tfrm-' + (author$project$Internal$Model$floatClass(tx) + ('-' + (author$project$Internal$Model$floatClass(ty) + ('-' + (author$project$Internal$Model$floatClass(tz) + ('-' + (author$project$Internal$Model$floatClass(sx) + ('-' + (author$project$Internal$Model$floatClass(sy) + ('-' + (author$project$Internal$Model$floatClass(sz) + ('-' + (author$project$Internal$Model$floatClass(ox) + ('-' + (author$project$Internal$Model$floatClass(oy) + ('-' + (author$project$Internal$Model$floatClass(oz) + ('-' + author$project$Internal$Model$floatClass(angle))))))))))))))))))));
	}
};
var author$project$Internal$Model$getStyleName = function (style) {
	switch (style.$) {
		case 'Shadows':
			var name = style.a;
			return name;
		case 'Transparency':
			var name = style.a;
			var o = style.b;
			return name;
		case 'Style':
			var _class = style.a;
			return _class;
		case 'FontFamily':
			var name = style.a;
			return name;
		case 'FontSize':
			var i = style.a;
			return 'font-size-' + elm$core$String$fromInt(i);
		case 'Single':
			var _class = style.a;
			return _class;
		case 'Colored':
			var _class = style.a;
			return _class;
		case 'SpacingStyle':
			var cls = style.a;
			var x = style.b;
			var y = style.c;
			return cls;
		case 'PaddingStyle':
			var cls = style.a;
			var top = style.b;
			var right = style.c;
			var bottom = style.d;
			var left = style.e;
			return cls;
		case 'BorderWidth':
			var cls = style.a;
			var top = style.b;
			var right = style.c;
			var bottom = style.d;
			var left = style.e;
			return cls;
		case 'GridTemplateStyle':
			var template = style.a;
			return 'grid-rows-' + (A2(
				elm$core$String$join,
				'-',
				A2(elm$core$List$map, author$project$Internal$Model$lengthClassName, template.rows)) + ('-cols-' + (A2(
				elm$core$String$join,
				'-',
				A2(elm$core$List$map, author$project$Internal$Model$lengthClassName, template.columns)) + ('-space-x-' + (author$project$Internal$Model$lengthClassName(template.spacing.a) + ('-space-y-' + author$project$Internal$Model$lengthClassName(template.spacing.b)))))));
		case 'GridPosition':
			var pos = style.a;
			return 'gp grid-pos-' + (elm$core$String$fromInt(pos.row) + ('-' + (elm$core$String$fromInt(pos.col) + ('-' + (elm$core$String$fromInt(pos.width) + ('-' + elm$core$String$fromInt(pos.height)))))));
		case 'PseudoSelector':
			var selector = style.a;
			var subStyle = style.b;
			var name = function () {
				switch (selector.$) {
					case 'Focus':
						return 'fs';
					case 'Hover':
						return 'hv';
					default:
						return 'act';
				}
			}();
			return A2(
				elm$core$String$join,
				' ',
				A2(
					elm$core$List$map,
					function (sty) {
						var _n1 = author$project$Internal$Model$getStyleName(sty);
						if (_n1 === '') {
							return '';
						} else {
							var styleName = _n1;
							return styleName + ('-' + name);
						}
					},
					subStyle));
		default:
			var x = style.a;
			return A2(
				elm$core$Maybe$withDefault,
				'',
				author$project$Internal$Model$transformClass(x));
	}
};
var author$project$Internal$Model$reduceStyles = F2(
	function (style, nevermind) {
		var cache = nevermind.a;
		var existing = nevermind.b;
		var styleName = author$project$Internal$Model$getStyleName(style);
		return A2(elm$core$Set$member, styleName, cache) ? nevermind : _Utils_Tuple2(
			A2(elm$core$Set$insert, styleName, cache),
			A2(elm$core$List$cons, style, existing));
	});
var author$project$Internal$Model$Property = F2(
	function (a, b) {
		return {$: 'Property', a: a, b: b};
	});
var author$project$Internal$Model$Style = F2(
	function (a, b) {
		return {$: 'Style', a: a, b: b};
	});
var elm$core$String$fromFloat = _String_fromNumber;
var author$project$Internal$Model$formatColor = function (_n0) {
	var red = _n0.a;
	var green = _n0.b;
	var blue = _n0.c;
	var alpha = _n0.d;
	return 'rgba(' + (elm$core$String$fromInt(
		elm$core$Basics$round(red * 255)) + ((',' + elm$core$String$fromInt(
		elm$core$Basics$round(green * 255))) + ((',' + elm$core$String$fromInt(
		elm$core$Basics$round(blue * 255))) + (',' + (elm$core$String$fromFloat(alpha) + ')')))));
};
var author$project$Internal$Model$formatBoxShadow = function (shadow) {
	return A2(
		elm$core$String$join,
		' ',
		A2(
			elm$core$List$filterMap,
			elm$core$Basics$identity,
			_List_fromArray(
				[
					shadow.inset ? elm$core$Maybe$Just('inset') : elm$core$Maybe$Nothing,
					elm$core$Maybe$Just(
					elm$core$String$fromFloat(shadow.offset.a) + 'px'),
					elm$core$Maybe$Just(
					elm$core$String$fromFloat(shadow.offset.b) + 'px'),
					elm$core$Maybe$Just(
					elm$core$String$fromFloat(shadow.blur) + 'px'),
					elm$core$Maybe$Just(
					elm$core$String$fromFloat(shadow.size) + 'px'),
					elm$core$Maybe$Just(
					author$project$Internal$Model$formatColor(shadow.color))
				])));
};
var author$project$Internal$Style$dot = function (c) {
	return '.' + c;
};
var elm$core$Maybe$map = F2(
	function (f, maybe) {
		if (maybe.$ === 'Just') {
			var value = maybe.a;
			return elm$core$Maybe$Just(
				f(value));
		} else {
			return elm$core$Maybe$Nothing;
		}
	});
var elm$core$Tuple$mapFirst = F2(
	function (func, _n0) {
		var x = _n0.a;
		var y = _n0.b;
		return _Utils_Tuple2(
			func(x),
			y);
	});
var elm$core$Tuple$mapSecond = F2(
	function (func, _n0) {
		var x = _n0.a;
		var y = _n0.b;
		return _Utils_Tuple2(
			x,
			func(y));
	});
var author$project$Internal$Model$renderFocusStyle = function (focus) {
	return A2(
		author$project$Internal$Model$Style,
		author$project$Internal$Style$dot(author$project$Internal$Style$classes.any) + (':focus .focusable, ' + (author$project$Internal$Style$dot(author$project$Internal$Style$classes.any) + '.focusable:focus')),
		A2(
			elm$core$List$filterMap,
			elm$core$Basics$identity,
			_List_fromArray(
				[
					A2(
					elm$core$Maybe$map,
					function (color) {
						return A2(
							author$project$Internal$Model$Property,
							'border-color',
							author$project$Internal$Model$formatColor(color));
					},
					focus.borderColor),
					A2(
					elm$core$Maybe$map,
					function (color) {
						return A2(
							author$project$Internal$Model$Property,
							'background-color',
							author$project$Internal$Model$formatColor(color));
					},
					focus.backgroundColor),
					A2(
					elm$core$Maybe$map,
					function (shadow) {
						return A2(
							author$project$Internal$Model$Property,
							'box-shadow',
							author$project$Internal$Model$formatBoxShadow(
								{
									blur: shadow.blur,
									color: shadow.color,
									inset: false,
									offset: A2(
										elm$core$Tuple$mapSecond,
										elm$core$Basics$toFloat,
										A2(elm$core$Tuple$mapFirst, elm$core$Basics$toFloat, shadow.offset)),
									size: shadow.size
								}));
					},
					focus.shadow),
					elm$core$Maybe$Just(
					A2(author$project$Internal$Model$Property, 'outline', 'none'))
				])));
};
var author$project$Internal$Style$Batch = function (a) {
	return {$: 'Batch', a: a};
};
var author$project$Internal$Style$Child = F2(
	function (a, b) {
		return {$: 'Child', a: a, b: b};
	});
var author$project$Internal$Style$Class = F2(
	function (a, b) {
		return {$: 'Class', a: a, b: b};
	});
var author$project$Internal$Style$Descriptor = F2(
	function (a, b) {
		return {$: 'Descriptor', a: a, b: b};
	});
var author$project$Internal$Style$Left = {$: 'Left'};
var author$project$Internal$Style$Prop = F2(
	function (a, b) {
		return {$: 'Prop', a: a, b: b};
	});
var author$project$Internal$Style$Right = {$: 'Right'};
var author$project$Internal$Style$Self = function (a) {
	return {$: 'Self', a: a};
};
var author$project$Internal$Style$Supports = F2(
	function (a, b) {
		return {$: 'Supports', a: a, b: b};
	});
var author$project$Internal$Style$Content = function (a) {
	return {$: 'Content', a: a};
};
var author$project$Internal$Style$Bottom = {$: 'Bottom'};
var author$project$Internal$Style$CenterX = {$: 'CenterX'};
var author$project$Internal$Style$CenterY = {$: 'CenterY'};
var author$project$Internal$Style$Top = {$: 'Top'};
var author$project$Internal$Style$alignments = _List_fromArray(
	[author$project$Internal$Style$Top, author$project$Internal$Style$Bottom, author$project$Internal$Style$Right, author$project$Internal$Style$Left, author$project$Internal$Style$CenterX, author$project$Internal$Style$CenterY]);
var author$project$Internal$Style$contentName = function (desc) {
	switch (desc.a.$) {
		case 'Top':
			var _n1 = desc.a;
			return author$project$Internal$Style$dot(author$project$Internal$Style$classes.contentTop);
		case 'Bottom':
			var _n2 = desc.a;
			return author$project$Internal$Style$dot(author$project$Internal$Style$classes.contentBottom);
		case 'Right':
			var _n3 = desc.a;
			return author$project$Internal$Style$dot(author$project$Internal$Style$classes.contentRight);
		case 'Left':
			var _n4 = desc.a;
			return author$project$Internal$Style$dot(author$project$Internal$Style$classes.contentLeft);
		case 'CenterX':
			var _n5 = desc.a;
			return author$project$Internal$Style$dot(author$project$Internal$Style$classes.contentCenterX);
		default:
			var _n6 = desc.a;
			return author$project$Internal$Style$dot(author$project$Internal$Style$classes.contentCenterY);
	}
};
var author$project$Internal$Style$selfName = function (desc) {
	switch (desc.a.$) {
		case 'Top':
			var _n1 = desc.a;
			return author$project$Internal$Style$dot(author$project$Internal$Style$classes.alignTop);
		case 'Bottom':
			var _n2 = desc.a;
			return author$project$Internal$Style$dot(author$project$Internal$Style$classes.alignBottom);
		case 'Right':
			var _n3 = desc.a;
			return author$project$Internal$Style$dot(author$project$Internal$Style$classes.alignRight);
		case 'Left':
			var _n4 = desc.a;
			return author$project$Internal$Style$dot(author$project$Internal$Style$classes.alignLeft);
		case 'CenterX':
			var _n5 = desc.a;
			return author$project$Internal$Style$dot(author$project$Internal$Style$classes.alignCenterX);
		default:
			var _n6 = desc.a;
			return author$project$Internal$Style$dot(author$project$Internal$Style$classes.alignCenterY);
	}
};
var author$project$Internal$Style$describeAlignment = function (values) {
	var createDescription = function (alignment) {
		var _n0 = values(alignment);
		var content = _n0.a;
		var indiv = _n0.b;
		return _List_fromArray(
			[
				A2(
				author$project$Internal$Style$Descriptor,
				author$project$Internal$Style$contentName(
					author$project$Internal$Style$Content(alignment)),
				content),
				A2(
				author$project$Internal$Style$Child,
				author$project$Internal$Style$dot(author$project$Internal$Style$classes.any),
				_List_fromArray(
					[
						A2(
						author$project$Internal$Style$Descriptor,
						author$project$Internal$Style$selfName(
							author$project$Internal$Style$Self(alignment)),
						indiv)
					]))
			]);
	};
	return author$project$Internal$Style$Batch(
		A2(elm$core$List$concatMap, createDescription, author$project$Internal$Style$alignments));
};
var author$project$Internal$Style$elDescription = _List_fromArray(
	[
		A2(author$project$Internal$Style$Prop, 'display', 'flex'),
		A2(author$project$Internal$Style$Prop, 'flex-direction', 'column'),
		A2(author$project$Internal$Style$Prop, 'white-space', 'pre'),
		A2(
		author$project$Internal$Style$Descriptor,
		author$project$Internal$Style$dot(author$project$Internal$Style$classes.hasBehind),
		_List_fromArray(
			[
				A2(author$project$Internal$Style$Prop, 'z-index', '0'),
				A2(
				author$project$Internal$Style$Child,
				author$project$Internal$Style$dot(author$project$Internal$Style$classes.behind),
				_List_fromArray(
					[
						A2(author$project$Internal$Style$Prop, 'z-index', '-1')
					]))
			])),
		A2(
		author$project$Internal$Style$Descriptor,
		author$project$Internal$Style$dot(author$project$Internal$Style$classes.seButton),
		_List_fromArray(
			[
				A2(
				author$project$Internal$Style$Child,
				author$project$Internal$Style$dot(author$project$Internal$Style$classes.text),
				_List_fromArray(
					[
						A2(
						author$project$Internal$Style$Descriptor,
						author$project$Internal$Style$dot(author$project$Internal$Style$classes.heightFill),
						_List_fromArray(
							[
								A2(author$project$Internal$Style$Prop, 'flex-grow', '0')
							])),
						A2(
						author$project$Internal$Style$Descriptor,
						author$project$Internal$Style$dot(author$project$Internal$Style$classes.widthFill),
						_List_fromArray(
							[
								A2(author$project$Internal$Style$Prop, 'align-self', 'auto !important')
							]))
					]))
			])),
		A2(
		author$project$Internal$Style$Child,
		author$project$Internal$Style$dot(author$project$Internal$Style$classes.heightContent),
		_List_fromArray(
			[
				A2(author$project$Internal$Style$Prop, 'height', 'auto')
			])),
		A2(
		author$project$Internal$Style$Child,
		author$project$Internal$Style$dot(author$project$Internal$Style$classes.heightFill),
		_List_fromArray(
			[
				A2(author$project$Internal$Style$Prop, 'flex-grow', '100000')
			])),
		A2(
		author$project$Internal$Style$Child,
		author$project$Internal$Style$dot(author$project$Internal$Style$classes.widthFill),
		_List_fromArray(
			[
				A2(author$project$Internal$Style$Prop, 'width', '100%')
			])),
		A2(
		author$project$Internal$Style$Child,
		author$project$Internal$Style$dot(author$project$Internal$Style$classes.widthContent),
		_List_fromArray(
			[
				A2(author$project$Internal$Style$Prop, 'align-self', 'flex-start')
			])),
		author$project$Internal$Style$describeAlignment(
		function (alignment) {
			switch (alignment.$) {
				case 'Top':
					return _Utils_Tuple2(
						_List_fromArray(
							[
								A2(author$project$Internal$Style$Prop, 'justify-content', 'flex-start')
							]),
						_List_fromArray(
							[
								A2(author$project$Internal$Style$Prop, 'margin-bottom', 'auto !important'),
								A2(author$project$Internal$Style$Prop, 'margin-top', '0 !important')
							]));
				case 'Bottom':
					return _Utils_Tuple2(
						_List_fromArray(
							[
								A2(author$project$Internal$Style$Prop, 'justify-content', 'flex-end')
							]),
						_List_fromArray(
							[
								A2(author$project$Internal$Style$Prop, 'margin-top', 'auto !important'),
								A2(author$project$Internal$Style$Prop, 'margin-bottom', '0 !important')
							]));
				case 'Right':
					return _Utils_Tuple2(
						_List_fromArray(
							[
								A2(author$project$Internal$Style$Prop, 'align-items', 'flex-end')
							]),
						_List_fromArray(
							[
								A2(author$project$Internal$Style$Prop, 'align-self', 'flex-end')
							]));
				case 'Left':
					return _Utils_Tuple2(
						_List_fromArray(
							[
								A2(author$project$Internal$Style$Prop, 'align-items', 'flex-start')
							]),
						_List_fromArray(
							[
								A2(author$project$Internal$Style$Prop, 'align-self', 'flex-start')
							]));
				case 'CenterX':
					return _Utils_Tuple2(
						_List_fromArray(
							[
								A2(author$project$Internal$Style$Prop, 'align-items', 'center')
							]),
						_List_fromArray(
							[
								A2(author$project$Internal$Style$Prop, 'align-self', 'center')
							]));
				default:
					return _Utils_Tuple2(
						_List_fromArray(
							[
								A2(
								author$project$Internal$Style$Child,
								author$project$Internal$Style$dot(author$project$Internal$Style$classes.any),
								_List_fromArray(
									[
										A2(author$project$Internal$Style$Prop, 'margin-top', 'auto'),
										A2(author$project$Internal$Style$Prop, 'margin-bottom', 'auto')
									]))
							]),
						_List_fromArray(
							[
								A2(author$project$Internal$Style$Prop, 'margin-top', 'auto !important'),
								A2(author$project$Internal$Style$Prop, 'margin-bottom', 'auto !important')
							]));
			}
		})
	]);
var author$project$Internal$Style$gridAlignments = function (values) {
	var createDescription = function (alignment) {
		return _List_fromArray(
			[
				A2(
				author$project$Internal$Style$Child,
				author$project$Internal$Style$dot(author$project$Internal$Style$classes.any),
				_List_fromArray(
					[
						A2(
						author$project$Internal$Style$Descriptor,
						author$project$Internal$Style$selfName(
							author$project$Internal$Style$Self(alignment)),
						values(alignment))
					]))
			]);
	};
	return author$project$Internal$Style$Batch(
		A2(elm$core$List$concatMap, createDescription, author$project$Internal$Style$alignments));
};
var author$project$Internal$Style$Above = {$: 'Above'};
var author$project$Internal$Style$Behind = {$: 'Behind'};
var author$project$Internal$Style$Below = {$: 'Below'};
var author$project$Internal$Style$OnLeft = {$: 'OnLeft'};
var author$project$Internal$Style$OnRight = {$: 'OnRight'};
var author$project$Internal$Style$Within = {$: 'Within'};
var author$project$Internal$Style$locations = function () {
	var loc = author$project$Internal$Style$Above;
	var _n0 = function () {
		switch (loc.$) {
			case 'Above':
				return _Utils_Tuple0;
			case 'Below':
				return _Utils_Tuple0;
			case 'OnRight':
				return _Utils_Tuple0;
			case 'OnLeft':
				return _Utils_Tuple0;
			case 'Within':
				return _Utils_Tuple0;
			default:
				return _Utils_Tuple0;
		}
	}();
	return _List_fromArray(
		[author$project$Internal$Style$Above, author$project$Internal$Style$Below, author$project$Internal$Style$OnRight, author$project$Internal$Style$OnLeft, author$project$Internal$Style$Within, author$project$Internal$Style$Behind]);
}();
var author$project$Internal$Style$baseSheet = _List_fromArray(
	[
		A2(
		author$project$Internal$Style$Class,
		'html,body',
		_List_fromArray(
			[
				A2(author$project$Internal$Style$Prop, 'height', '100%'),
				A2(author$project$Internal$Style$Prop, 'padding', '0'),
				A2(author$project$Internal$Style$Prop, 'margin', '0')
			])),
		A2(
		author$project$Internal$Style$Class,
		_Utils_ap(
			author$project$Internal$Style$dot(author$project$Internal$Style$classes.any),
			_Utils_ap(
				author$project$Internal$Style$dot(author$project$Internal$Style$classes.single),
				author$project$Internal$Style$dot(author$project$Internal$Style$classes.imageContainer))),
		_List_fromArray(
			[
				A2(author$project$Internal$Style$Prop, 'display', 'block')
			])),
		A2(
		author$project$Internal$Style$Class,
		author$project$Internal$Style$dot(author$project$Internal$Style$classes.any) + ':focus',
		_List_fromArray(
			[
				A2(author$project$Internal$Style$Prop, 'outline', 'none')
			])),
		A2(
		author$project$Internal$Style$Class,
		author$project$Internal$Style$dot(author$project$Internal$Style$classes.root),
		_List_fromArray(
			[
				A2(author$project$Internal$Style$Prop, 'width', '100%'),
				A2(author$project$Internal$Style$Prop, 'height', 'auto'),
				A2(author$project$Internal$Style$Prop, 'min-height', '100%'),
				A2(author$project$Internal$Style$Prop, 'z-index', '0'),
				A2(
				author$project$Internal$Style$Descriptor,
				_Utils_ap(
					author$project$Internal$Style$dot(author$project$Internal$Style$classes.any),
					author$project$Internal$Style$dot(author$project$Internal$Style$classes.heightFill)),
				_List_fromArray(
					[
						A2(author$project$Internal$Style$Prop, 'height', '100%'),
						A2(
						author$project$Internal$Style$Child,
						author$project$Internal$Style$dot(author$project$Internal$Style$classes.heightFill),
						_List_fromArray(
							[
								A2(author$project$Internal$Style$Prop, 'height', '100%')
							]))
					])),
				A2(
				author$project$Internal$Style$Child,
				author$project$Internal$Style$dot(author$project$Internal$Style$classes.inFront),
				_List_fromArray(
					[
						A2(
						author$project$Internal$Style$Descriptor,
						author$project$Internal$Style$dot(author$project$Internal$Style$classes.nearby),
						_List_fromArray(
							[
								A2(author$project$Internal$Style$Prop, 'position', 'fixed')
							]))
					]))
			])),
		A2(
		author$project$Internal$Style$Class,
		author$project$Internal$Style$dot(author$project$Internal$Style$classes.nearby),
		_List_fromArray(
			[
				A2(author$project$Internal$Style$Prop, 'position', 'relative'),
				A2(author$project$Internal$Style$Prop, 'border', 'none'),
				A2(author$project$Internal$Style$Prop, 'display', 'flex'),
				A2(author$project$Internal$Style$Prop, 'flex-direction', 'row'),
				A2(author$project$Internal$Style$Prop, 'flex-basis', 'auto'),
				A2(
				author$project$Internal$Style$Descriptor,
				author$project$Internal$Style$dot(author$project$Internal$Style$classes.single),
				author$project$Internal$Style$elDescription),
				author$project$Internal$Style$Batch(
				function (fn) {
					return A2(elm$core$List$map, fn, author$project$Internal$Style$locations);
				}(
					function (loc) {
						switch (loc.$) {
							case 'Above':
								return A2(
									author$project$Internal$Style$Descriptor,
									author$project$Internal$Style$dot(author$project$Internal$Style$classes.above),
									_List_fromArray(
										[
											A2(author$project$Internal$Style$Prop, 'position', 'absolute'),
											A2(author$project$Internal$Style$Prop, 'bottom', '100%'),
											A2(author$project$Internal$Style$Prop, 'left', '0'),
											A2(author$project$Internal$Style$Prop, 'width', '100%'),
											A2(author$project$Internal$Style$Prop, 'z-index', '20'),
											A2(author$project$Internal$Style$Prop, 'margin', '0 !important'),
											A2(
											author$project$Internal$Style$Child,
											author$project$Internal$Style$dot(author$project$Internal$Style$classes.heightFill),
											_List_fromArray(
												[
													A2(author$project$Internal$Style$Prop, 'height', 'auto')
												])),
											A2(
											author$project$Internal$Style$Child,
											author$project$Internal$Style$dot(author$project$Internal$Style$classes.widthFill),
											_List_fromArray(
												[
													A2(author$project$Internal$Style$Prop, 'width', '100%')
												])),
											A2(author$project$Internal$Style$Prop, 'pointer-events', 'none'),
											A2(
											author$project$Internal$Style$Child,
											'*',
											_List_fromArray(
												[
													A2(author$project$Internal$Style$Prop, 'pointer-events', 'auto')
												]))
										]));
							case 'Below':
								return A2(
									author$project$Internal$Style$Descriptor,
									author$project$Internal$Style$dot(author$project$Internal$Style$classes.below),
									_List_fromArray(
										[
											A2(author$project$Internal$Style$Prop, 'position', 'absolute'),
											A2(author$project$Internal$Style$Prop, 'bottom', '0'),
											A2(author$project$Internal$Style$Prop, 'left', '0'),
											A2(author$project$Internal$Style$Prop, 'height', '0'),
											A2(author$project$Internal$Style$Prop, 'width', '100%'),
											A2(author$project$Internal$Style$Prop, 'z-index', '20'),
											A2(author$project$Internal$Style$Prop, 'margin', '0 !important'),
											A2(author$project$Internal$Style$Prop, 'pointer-events', 'none'),
											A2(
											author$project$Internal$Style$Child,
											'*',
											_List_fromArray(
												[
													A2(author$project$Internal$Style$Prop, 'pointer-events', 'auto')
												])),
											A2(
											author$project$Internal$Style$Child,
											author$project$Internal$Style$dot(author$project$Internal$Style$classes.heightFill),
											_List_fromArray(
												[
													A2(author$project$Internal$Style$Prop, 'height', 'auto')
												]))
										]));
							case 'OnRight':
								return A2(
									author$project$Internal$Style$Descriptor,
									author$project$Internal$Style$dot(author$project$Internal$Style$classes.onRight),
									_List_fromArray(
										[
											A2(author$project$Internal$Style$Prop, 'position', 'absolute'),
											A2(author$project$Internal$Style$Prop, 'left', '100%'),
											A2(author$project$Internal$Style$Prop, 'top', '0'),
											A2(author$project$Internal$Style$Prop, 'height', '100%'),
											A2(author$project$Internal$Style$Prop, 'margin', '0 !important'),
											A2(author$project$Internal$Style$Prop, 'z-index', '20'),
											A2(author$project$Internal$Style$Prop, 'pointer-events', 'none'),
											A2(
											author$project$Internal$Style$Child,
											'*',
											_List_fromArray(
												[
													A2(author$project$Internal$Style$Prop, 'pointer-events', 'auto')
												]))
										]));
							case 'OnLeft':
								return A2(
									author$project$Internal$Style$Descriptor,
									author$project$Internal$Style$dot(author$project$Internal$Style$classes.onLeft),
									_List_fromArray(
										[
											A2(author$project$Internal$Style$Prop, 'position', 'absolute'),
											A2(author$project$Internal$Style$Prop, 'right', '100%'),
											A2(author$project$Internal$Style$Prop, 'top', '0'),
											A2(author$project$Internal$Style$Prop, 'height', '100%'),
											A2(author$project$Internal$Style$Prop, 'margin', '0 !important'),
											A2(author$project$Internal$Style$Prop, 'z-index', '20'),
											A2(author$project$Internal$Style$Prop, 'pointer-events', 'none'),
											A2(
											author$project$Internal$Style$Child,
											'*',
											_List_fromArray(
												[
													A2(author$project$Internal$Style$Prop, 'pointer-events', 'auto')
												]))
										]));
							case 'Within':
								return A2(
									author$project$Internal$Style$Descriptor,
									author$project$Internal$Style$dot(author$project$Internal$Style$classes.inFront),
									_List_fromArray(
										[
											A2(author$project$Internal$Style$Prop, 'position', 'absolute'),
											A2(author$project$Internal$Style$Prop, 'width', '100%'),
											A2(author$project$Internal$Style$Prop, 'height', '100%'),
											A2(author$project$Internal$Style$Prop, 'left', '0'),
											A2(author$project$Internal$Style$Prop, 'top', '0'),
											A2(author$project$Internal$Style$Prop, 'margin', '0 !important'),
											A2(author$project$Internal$Style$Prop, 'pointer-events', 'none'),
											A2(
											author$project$Internal$Style$Child,
											'*',
											_List_fromArray(
												[
													A2(author$project$Internal$Style$Prop, 'pointer-events', 'auto')
												]))
										]));
							default:
								return A2(
									author$project$Internal$Style$Descriptor,
									author$project$Internal$Style$dot(author$project$Internal$Style$classes.behind),
									_List_fromArray(
										[
											A2(author$project$Internal$Style$Prop, 'position', 'absolute'),
											A2(author$project$Internal$Style$Prop, 'width', '100%'),
											A2(author$project$Internal$Style$Prop, 'height', '100%'),
											A2(author$project$Internal$Style$Prop, 'left', '0'),
											A2(author$project$Internal$Style$Prop, 'top', '0'),
											A2(author$project$Internal$Style$Prop, 'margin', '0 !important'),
											A2(author$project$Internal$Style$Prop, 'z-index', '0'),
											A2(author$project$Internal$Style$Prop, 'pointer-events', 'none'),
											A2(
											author$project$Internal$Style$Child,
											'*',
											_List_fromArray(
												[
													A2(author$project$Internal$Style$Prop, 'pointer-events', 'auto')
												]))
										]));
						}
					}))
			])),
		A2(
		author$project$Internal$Style$Class,
		author$project$Internal$Style$dot(author$project$Internal$Style$classes.any),
		_List_fromArray(
			[
				A2(author$project$Internal$Style$Prop, 'position', 'relative'),
				A2(author$project$Internal$Style$Prop, 'border', 'none'),
				A2(author$project$Internal$Style$Prop, 'flex-shrink', '0'),
				A2(author$project$Internal$Style$Prop, 'display', 'flex'),
				A2(author$project$Internal$Style$Prop, 'flex-direction', 'row'),
				A2(author$project$Internal$Style$Prop, 'flex-basis', 'auto'),
				A2(author$project$Internal$Style$Prop, 'resize', 'none'),
				A2(author$project$Internal$Style$Prop, 'font-feature-settings', 'inherit'),
				A2(author$project$Internal$Style$Prop, 'box-sizing', 'border-box'),
				A2(author$project$Internal$Style$Prop, 'margin', '0'),
				A2(author$project$Internal$Style$Prop, 'padding', '0'),
				A2(author$project$Internal$Style$Prop, 'border-width', '0'),
				A2(author$project$Internal$Style$Prop, 'border-style', 'solid'),
				A2(author$project$Internal$Style$Prop, 'font-size', 'inherit'),
				A2(author$project$Internal$Style$Prop, 'color', 'inherit'),
				A2(author$project$Internal$Style$Prop, 'font-family', 'inherit'),
				A2(author$project$Internal$Style$Prop, 'line-height', '1'),
				A2(author$project$Internal$Style$Prop, 'font-weight', 'inherit'),
				A2(author$project$Internal$Style$Prop, 'text-decoration', 'none'),
				A2(author$project$Internal$Style$Prop, 'font-style', 'inherit'),
				A2(
				author$project$Internal$Style$Descriptor,
				author$project$Internal$Style$dot(author$project$Internal$Style$classes.wrapped),
				_List_fromArray(
					[
						A2(author$project$Internal$Style$Prop, 'flex-wrap', 'wrap')
					])),
				A2(
				author$project$Internal$Style$Descriptor,
				author$project$Internal$Style$dot(author$project$Internal$Style$classes.noTextSelection),
				_List_fromArray(
					[
						A2(author$project$Internal$Style$Prop, '-moz-user-select', 'none'),
						A2(author$project$Internal$Style$Prop, '-webkit-user-select', 'none'),
						A2(author$project$Internal$Style$Prop, '-ms-user-select', 'none'),
						A2(author$project$Internal$Style$Prop, 'user-select', 'none')
					])),
				A2(
				author$project$Internal$Style$Descriptor,
				author$project$Internal$Style$dot(author$project$Internal$Style$classes.cursorPointer),
				_List_fromArray(
					[
						A2(author$project$Internal$Style$Prop, 'cursor', 'pointer')
					])),
				A2(
				author$project$Internal$Style$Descriptor,
				author$project$Internal$Style$dot(author$project$Internal$Style$classes.cursorText),
				_List_fromArray(
					[
						A2(author$project$Internal$Style$Prop, 'cursor', 'text')
					])),
				A2(
				author$project$Internal$Style$Descriptor,
				author$project$Internal$Style$dot(author$project$Internal$Style$classes.passPointerEvents),
				_List_fromArray(
					[
						A2(author$project$Internal$Style$Prop, 'pointer-events', 'none !important')
					])),
				A2(
				author$project$Internal$Style$Descriptor,
				author$project$Internal$Style$dot(author$project$Internal$Style$classes.capturePointerEvents),
				_List_fromArray(
					[
						A2(author$project$Internal$Style$Prop, 'pointer-events', 'auto !important')
					])),
				A2(
				author$project$Internal$Style$Descriptor,
				author$project$Internal$Style$dot(author$project$Internal$Style$classes.transparent),
				_List_fromArray(
					[
						A2(author$project$Internal$Style$Prop, 'opacity', '0')
					])),
				A2(
				author$project$Internal$Style$Descriptor,
				author$project$Internal$Style$dot(author$project$Internal$Style$classes.opaque),
				_List_fromArray(
					[
						A2(author$project$Internal$Style$Prop, 'opacity', '1')
					])),
				A2(
				author$project$Internal$Style$Descriptor,
				author$project$Internal$Style$dot(
					_Utils_ap(author$project$Internal$Style$classes.hover, author$project$Internal$Style$classes.transparent)) + ':hover',
				_List_fromArray(
					[
						A2(author$project$Internal$Style$Prop, 'opacity', '0')
					])),
				A2(
				author$project$Internal$Style$Descriptor,
				author$project$Internal$Style$dot(
					_Utils_ap(author$project$Internal$Style$classes.hover, author$project$Internal$Style$classes.opaque)) + ':hover',
				_List_fromArray(
					[
						A2(author$project$Internal$Style$Prop, 'opacity', '1')
					])),
				A2(
				author$project$Internal$Style$Descriptor,
				author$project$Internal$Style$dot(
					_Utils_ap(author$project$Internal$Style$classes.focus, author$project$Internal$Style$classes.transparent)) + ':focus',
				_List_fromArray(
					[
						A2(author$project$Internal$Style$Prop, 'opacity', '0')
					])),
				A2(
				author$project$Internal$Style$Descriptor,
				author$project$Internal$Style$dot(
					_Utils_ap(author$project$Internal$Style$classes.focus, author$project$Internal$Style$classes.opaque)) + ':focus',
				_List_fromArray(
					[
						A2(author$project$Internal$Style$Prop, 'opacity', '1')
					])),
				A2(
				author$project$Internal$Style$Descriptor,
				author$project$Internal$Style$dot(
					_Utils_ap(author$project$Internal$Style$classes.active, author$project$Internal$Style$classes.transparent)) + ':active',
				_List_fromArray(
					[
						A2(author$project$Internal$Style$Prop, 'opacity', '0')
					])),
				A2(
				author$project$Internal$Style$Descriptor,
				author$project$Internal$Style$dot(
					_Utils_ap(author$project$Internal$Style$classes.active, author$project$Internal$Style$classes.opaque)) + ':active',
				_List_fromArray(
					[
						A2(author$project$Internal$Style$Prop, 'opacity', '1')
					])),
				A2(
				author$project$Internal$Style$Descriptor,
				author$project$Internal$Style$dot(author$project$Internal$Style$classes.transition),
				_List_fromArray(
					[
						A2(
						author$project$Internal$Style$Prop,
						'transition',
						A2(
							elm$core$String$join,
							', ',
							A2(
								elm$core$List$map,
								function (x) {
									return x + ' 160ms';
								},
								_List_fromArray(
									['transform', 'opacity', 'filter', 'background-color', 'color', 'font-size']))))
					])),
				A2(
				author$project$Internal$Style$Descriptor,
				author$project$Internal$Style$dot(author$project$Internal$Style$classes.scrollbars),
				_List_fromArray(
					[
						A2(author$project$Internal$Style$Prop, 'overflow', 'auto'),
						A2(author$project$Internal$Style$Prop, 'flex-shrink', '1')
					])),
				A2(
				author$project$Internal$Style$Descriptor,
				author$project$Internal$Style$dot(author$project$Internal$Style$classes.scrollbarsX),
				_List_fromArray(
					[
						A2(author$project$Internal$Style$Prop, 'overflow-x', 'auto'),
						A2(
						author$project$Internal$Style$Descriptor,
						author$project$Internal$Style$dot(author$project$Internal$Style$classes.row),
						_List_fromArray(
							[
								A2(author$project$Internal$Style$Prop, 'flex-shrink', '1')
							]))
					])),
				A2(
				author$project$Internal$Style$Descriptor,
				author$project$Internal$Style$dot(author$project$Internal$Style$classes.scrollbarsY),
				_List_fromArray(
					[
						A2(author$project$Internal$Style$Prop, 'overflow-y', 'auto'),
						A2(
						author$project$Internal$Style$Descriptor,
						author$project$Internal$Style$dot(author$project$Internal$Style$classes.column),
						_List_fromArray(
							[
								A2(author$project$Internal$Style$Prop, 'flex-shrink', '1')
							])),
						A2(
						author$project$Internal$Style$Descriptor,
						author$project$Internal$Style$dot(author$project$Internal$Style$classes.single),
						_List_fromArray(
							[
								A2(author$project$Internal$Style$Prop, 'flex-shrink', '1')
							]))
					])),
				A2(
				author$project$Internal$Style$Descriptor,
				author$project$Internal$Style$dot(author$project$Internal$Style$classes.clip),
				_List_fromArray(
					[
						A2(author$project$Internal$Style$Prop, 'overflow', 'hidden')
					])),
				A2(
				author$project$Internal$Style$Descriptor,
				author$project$Internal$Style$dot(author$project$Internal$Style$classes.clipX),
				_List_fromArray(
					[
						A2(author$project$Internal$Style$Prop, 'overflow-x', 'hidden')
					])),
				A2(
				author$project$Internal$Style$Descriptor,
				author$project$Internal$Style$dot(author$project$Internal$Style$classes.clipY),
				_List_fromArray(
					[
						A2(author$project$Internal$Style$Prop, 'overflow-y', 'hidden')
					])),
				A2(
				author$project$Internal$Style$Descriptor,
				author$project$Internal$Style$dot(author$project$Internal$Style$classes.widthContent),
				_List_fromArray(
					[
						A2(author$project$Internal$Style$Prop, 'width', 'auto')
					])),
				A2(
				author$project$Internal$Style$Descriptor,
				author$project$Internal$Style$dot(author$project$Internal$Style$classes.borderNone),
				_List_fromArray(
					[
						A2(author$project$Internal$Style$Prop, 'border-width', '0')
					])),
				A2(
				author$project$Internal$Style$Descriptor,
				author$project$Internal$Style$dot(author$project$Internal$Style$classes.borderDashed),
				_List_fromArray(
					[
						A2(author$project$Internal$Style$Prop, 'border-style', 'dashed')
					])),
				A2(
				author$project$Internal$Style$Descriptor,
				author$project$Internal$Style$dot(author$project$Internal$Style$classes.borderDotted),
				_List_fromArray(
					[
						A2(author$project$Internal$Style$Prop, 'border-style', 'dotted')
					])),
				A2(
				author$project$Internal$Style$Descriptor,
				author$project$Internal$Style$dot(author$project$Internal$Style$classes.borderSolid),
				_List_fromArray(
					[
						A2(author$project$Internal$Style$Prop, 'border-style', 'solid')
					])),
				A2(
				author$project$Internal$Style$Descriptor,
				author$project$Internal$Style$dot(author$project$Internal$Style$classes.text),
				_List_fromArray(
					[
						A2(author$project$Internal$Style$Prop, 'white-space', 'pre'),
						A2(author$project$Internal$Style$Prop, 'display', 'inline-block')
					])),
				A2(
				author$project$Internal$Style$Descriptor,
				author$project$Internal$Style$dot(author$project$Internal$Style$classes.inputText),
				_List_fromArray(
					[
						A2(author$project$Internal$Style$Prop, 'line-height', '1.05')
					])),
				A2(
				author$project$Internal$Style$Descriptor,
				author$project$Internal$Style$dot(author$project$Internal$Style$classes.single),
				author$project$Internal$Style$elDescription),
				A2(
				author$project$Internal$Style$Descriptor,
				author$project$Internal$Style$dot(author$project$Internal$Style$classes.row),
				_List_fromArray(
					[
						A2(author$project$Internal$Style$Prop, 'display', 'flex'),
						A2(author$project$Internal$Style$Prop, 'flex-direction', 'row'),
						A2(
						author$project$Internal$Style$Child,
						author$project$Internal$Style$dot(author$project$Internal$Style$classes.any),
						_List_fromArray(
							[
								A2(author$project$Internal$Style$Prop, 'flex-basis', '0%'),
								A2(
								author$project$Internal$Style$Descriptor,
								author$project$Internal$Style$dot(author$project$Internal$Style$classes.widthExact),
								_List_fromArray(
									[
										A2(author$project$Internal$Style$Prop, 'flex-basis', 'auto')
									]))
							])),
						A2(
						author$project$Internal$Style$Child,
						author$project$Internal$Style$dot(author$project$Internal$Style$classes.heightFill),
						_List_fromArray(
							[
								A2(author$project$Internal$Style$Prop, 'align-self', 'stretch !important')
							])),
						A2(
						author$project$Internal$Style$Child,
						author$project$Internal$Style$dot(author$project$Internal$Style$classes.heightFillPortion),
						_List_fromArray(
							[
								A2(author$project$Internal$Style$Prop, 'align-self', 'stretch !important')
							])),
						A2(
						author$project$Internal$Style$Child,
						author$project$Internal$Style$dot(author$project$Internal$Style$classes.widthFill),
						_List_fromArray(
							[
								A2(author$project$Internal$Style$Prop, 'flex-grow', '100000')
							])),
						A2(
						author$project$Internal$Style$Child,
						author$project$Internal$Style$dot(author$project$Internal$Style$classes.container),
						_List_fromArray(
							[
								A2(author$project$Internal$Style$Prop, 'flex-grow', '0'),
								A2(author$project$Internal$Style$Prop, 'flex-basis', 'auto'),
								A2(author$project$Internal$Style$Prop, 'align-self', 'stretch')
							])),
						A2(
						author$project$Internal$Style$Child,
						'u:first-of-type.' + author$project$Internal$Style$classes.alignContainerRight,
						_List_fromArray(
							[
								A2(author$project$Internal$Style$Prop, 'flex-grow', '1')
							])),
						A2(
						author$project$Internal$Style$Child,
						's:first-of-type.' + author$project$Internal$Style$classes.alignContainerCenterX,
						_List_fromArray(
							[
								A2(author$project$Internal$Style$Prop, 'flex-grow', '1'),
								A2(
								author$project$Internal$Style$Child,
								author$project$Internal$Style$dot(author$project$Internal$Style$classes.alignCenterX),
								_List_fromArray(
									[
										A2(author$project$Internal$Style$Prop, 'margin-left', 'auto !important')
									]))
							])),
						A2(
						author$project$Internal$Style$Child,
						's:last-of-type.' + author$project$Internal$Style$classes.alignContainerCenterX,
						_List_fromArray(
							[
								A2(author$project$Internal$Style$Prop, 'flex-grow', '1'),
								A2(
								author$project$Internal$Style$Child,
								author$project$Internal$Style$dot(author$project$Internal$Style$classes.alignCenterX),
								_List_fromArray(
									[
										A2(author$project$Internal$Style$Prop, 'margin-right', 'auto !important')
									]))
							])),
						A2(
						author$project$Internal$Style$Child,
						's:only-of-type.' + author$project$Internal$Style$classes.alignContainerCenterX,
						_List_fromArray(
							[
								A2(author$project$Internal$Style$Prop, 'flex-grow', '1'),
								A2(
								author$project$Internal$Style$Child,
								author$project$Internal$Style$dot(author$project$Internal$Style$classes.alignCenterY),
								_List_fromArray(
									[
										A2(author$project$Internal$Style$Prop, 'margin-top', 'auto !important'),
										A2(author$project$Internal$Style$Prop, 'margin-bottom', 'auto !important')
									]))
							])),
						A2(
						author$project$Internal$Style$Child,
						's:last-of-type.' + (author$project$Internal$Style$classes.alignContainerCenterX + ' ~ u'),
						_List_fromArray(
							[
								A2(author$project$Internal$Style$Prop, 'flex-grow', '0')
							])),
						A2(
						author$project$Internal$Style$Child,
						'u:first-of-type.' + (author$project$Internal$Style$classes.alignContainerRight + (' ~ s.' + author$project$Internal$Style$classes.alignContainerCenterX)),
						_List_fromArray(
							[
								A2(author$project$Internal$Style$Prop, 'flex-grow', '0')
							])),
						author$project$Internal$Style$describeAlignment(
						function (alignment) {
							switch (alignment.$) {
								case 'Top':
									return _Utils_Tuple2(
										_List_fromArray(
											[
												A2(author$project$Internal$Style$Prop, 'align-items', 'flex-start')
											]),
										_List_fromArray(
											[
												A2(author$project$Internal$Style$Prop, 'align-self', 'flex-start')
											]));
								case 'Bottom':
									return _Utils_Tuple2(
										_List_fromArray(
											[
												A2(author$project$Internal$Style$Prop, 'align-items', 'flex-end')
											]),
										_List_fromArray(
											[
												A2(author$project$Internal$Style$Prop, 'align-self', 'flex-end')
											]));
								case 'Right':
									return _Utils_Tuple2(
										_List_fromArray(
											[
												A2(author$project$Internal$Style$Prop, 'justify-content', 'flex-end')
											]),
										_List_Nil);
								case 'Left':
									return _Utils_Tuple2(
										_List_fromArray(
											[
												A2(author$project$Internal$Style$Prop, 'justify-content', 'flex-start')
											]),
										_List_Nil);
								case 'CenterX':
									return _Utils_Tuple2(
										_List_fromArray(
											[
												A2(author$project$Internal$Style$Prop, 'justify-content', 'center')
											]),
										_List_Nil);
								default:
									return _Utils_Tuple2(
										_List_fromArray(
											[
												A2(author$project$Internal$Style$Prop, 'align-items', 'center')
											]),
										_List_fromArray(
											[
												A2(author$project$Internal$Style$Prop, 'align-self', 'center')
											]));
							}
						}),
						A2(
						author$project$Internal$Style$Descriptor,
						author$project$Internal$Style$dot(author$project$Internal$Style$classes.spaceEvenly),
						_List_fromArray(
							[
								A2(author$project$Internal$Style$Prop, 'justify-content', 'space-between')
							]))
					])),
				A2(
				author$project$Internal$Style$Descriptor,
				author$project$Internal$Style$dot(author$project$Internal$Style$classes.column),
				_List_fromArray(
					[
						A2(author$project$Internal$Style$Prop, 'display', 'flex'),
						A2(author$project$Internal$Style$Prop, 'flex-direction', 'column'),
						A2(
						author$project$Internal$Style$Child,
						author$project$Internal$Style$dot(author$project$Internal$Style$classes.heightFill),
						_List_fromArray(
							[
								A2(author$project$Internal$Style$Prop, 'flex-grow', '100000')
							])),
						A2(
						author$project$Internal$Style$Child,
						author$project$Internal$Style$dot(author$project$Internal$Style$classes.widthFill),
						_List_fromArray(
							[
								A2(author$project$Internal$Style$Prop, 'width', '100%')
							])),
						A2(
						author$project$Internal$Style$Child,
						author$project$Internal$Style$dot(author$project$Internal$Style$classes.widthFillPortion),
						_List_fromArray(
							[
								A2(author$project$Internal$Style$Prop, 'width', '100%')
							])),
						A2(
						author$project$Internal$Style$Child,
						author$project$Internal$Style$dot(author$project$Internal$Style$classes.widthContent),
						_List_fromArray(
							[
								A2(author$project$Internal$Style$Prop, 'align-self', 'flex-start')
							])),
						A2(
						author$project$Internal$Style$Child,
						'u:first-of-type.' + author$project$Internal$Style$classes.alignContainerBottom,
						_List_fromArray(
							[
								A2(author$project$Internal$Style$Prop, 'flex-grow', '1')
							])),
						A2(
						author$project$Internal$Style$Child,
						's:first-of-type.' + author$project$Internal$Style$classes.alignContainerCenterY,
						_List_fromArray(
							[
								A2(author$project$Internal$Style$Prop, 'flex-grow', '1'),
								A2(
								author$project$Internal$Style$Child,
								author$project$Internal$Style$dot(author$project$Internal$Style$classes.alignCenterY),
								_List_fromArray(
									[
										A2(author$project$Internal$Style$Prop, 'margin-top', 'auto !important'),
										A2(author$project$Internal$Style$Prop, 'margin-bottom', '0 !important')
									]))
							])),
						A2(
						author$project$Internal$Style$Child,
						's:last-of-type.' + author$project$Internal$Style$classes.alignContainerCenterY,
						_List_fromArray(
							[
								A2(author$project$Internal$Style$Prop, 'flex-grow', '1'),
								A2(
								author$project$Internal$Style$Child,
								author$project$Internal$Style$dot(author$project$Internal$Style$classes.alignCenterY),
								_List_fromArray(
									[
										A2(author$project$Internal$Style$Prop, 'margin-bottom', 'auto !important'),
										A2(author$project$Internal$Style$Prop, 'margin-top', '0 !important')
									]))
							])),
						A2(
						author$project$Internal$Style$Child,
						's:only-of-type.' + author$project$Internal$Style$classes.alignContainerCenterY,
						_List_fromArray(
							[
								A2(author$project$Internal$Style$Prop, 'flex-grow', '1'),
								A2(
								author$project$Internal$Style$Child,
								author$project$Internal$Style$dot(author$project$Internal$Style$classes.alignCenterY),
								_List_fromArray(
									[
										A2(author$project$Internal$Style$Prop, 'margin-top', 'auto !important'),
										A2(author$project$Internal$Style$Prop, 'margin-bottom', 'auto !important')
									]))
							])),
						A2(
						author$project$Internal$Style$Child,
						's:last-of-type.' + (author$project$Internal$Style$classes.alignContainerCenterY + ' ~ u'),
						_List_fromArray(
							[
								A2(author$project$Internal$Style$Prop, 'flex-grow', '0')
							])),
						A2(
						author$project$Internal$Style$Child,
						'u:first-of-type.' + (author$project$Internal$Style$classes.alignContainerBottom + (' ~ s.' + author$project$Internal$Style$classes.alignContainerCenterY)),
						_List_fromArray(
							[
								A2(author$project$Internal$Style$Prop, 'flex-grow', '0')
							])),
						author$project$Internal$Style$describeAlignment(
						function (alignment) {
							switch (alignment.$) {
								case 'Top':
									return _Utils_Tuple2(
										_List_fromArray(
											[
												A2(author$project$Internal$Style$Prop, 'justify-content', 'flex-start')
											]),
										_List_fromArray(
											[
												A2(author$project$Internal$Style$Prop, 'margin-bottom', 'auto')
											]));
								case 'Bottom':
									return _Utils_Tuple2(
										_List_fromArray(
											[
												A2(author$project$Internal$Style$Prop, 'justify-content', 'flex-end')
											]),
										_List_fromArray(
											[
												A2(author$project$Internal$Style$Prop, 'margin-top', 'auto')
											]));
								case 'Right':
									return _Utils_Tuple2(
										_List_fromArray(
											[
												A2(author$project$Internal$Style$Prop, 'align-items', 'flex-end')
											]),
										_List_fromArray(
											[
												A2(author$project$Internal$Style$Prop, 'align-self', 'flex-end')
											]));
								case 'Left':
									return _Utils_Tuple2(
										_List_fromArray(
											[
												A2(author$project$Internal$Style$Prop, 'align-items', 'flex-start')
											]),
										_List_fromArray(
											[
												A2(author$project$Internal$Style$Prop, 'align-self', 'flex-start')
											]));
								case 'CenterX':
									return _Utils_Tuple2(
										_List_fromArray(
											[
												A2(author$project$Internal$Style$Prop, 'align-items', 'center')
											]),
										_List_fromArray(
											[
												A2(author$project$Internal$Style$Prop, 'align-self', 'center')
											]));
								default:
									return _Utils_Tuple2(
										_List_fromArray(
											[
												A2(author$project$Internal$Style$Prop, 'justify-content', 'center')
											]),
										_List_Nil);
							}
						}),
						A2(
						author$project$Internal$Style$Child,
						author$project$Internal$Style$dot(author$project$Internal$Style$classes.container),
						_List_fromArray(
							[
								A2(author$project$Internal$Style$Prop, 'flex-grow', '0'),
								A2(author$project$Internal$Style$Prop, 'flex-basis', 'auto'),
								A2(author$project$Internal$Style$Prop, 'width', '100%'),
								A2(author$project$Internal$Style$Prop, 'align-self', 'stretch !important')
							])),
						A2(
						author$project$Internal$Style$Descriptor,
						author$project$Internal$Style$dot(author$project$Internal$Style$classes.spaceEvenly),
						_List_fromArray(
							[
								A2(author$project$Internal$Style$Prop, 'justify-content', 'space-between')
							]))
					])),
				A2(
				author$project$Internal$Style$Descriptor,
				author$project$Internal$Style$dot(author$project$Internal$Style$classes.grid),
				_List_fromArray(
					[
						A2(author$project$Internal$Style$Prop, 'display', '-ms-grid'),
						A2(
						author$project$Internal$Style$Child,
						'.gp',
						_List_fromArray(
							[
								A2(
								author$project$Internal$Style$Child,
								author$project$Internal$Style$dot(author$project$Internal$Style$classes.any),
								_List_fromArray(
									[
										A2(author$project$Internal$Style$Prop, 'width', '100%')
									]))
							])),
						A2(
						author$project$Internal$Style$Supports,
						_Utils_Tuple2('display', 'grid'),
						_List_fromArray(
							[
								_Utils_Tuple2('display', 'grid')
							])),
						author$project$Internal$Style$gridAlignments(
						function (alignment) {
							switch (alignment.$) {
								case 'Top':
									return _List_fromArray(
										[
											A2(author$project$Internal$Style$Prop, 'justify-content', 'flex-start')
										]);
								case 'Bottom':
									return _List_fromArray(
										[
											A2(author$project$Internal$Style$Prop, 'justify-content', 'flex-end')
										]);
								case 'Right':
									return _List_fromArray(
										[
											A2(author$project$Internal$Style$Prop, 'align-items', 'flex-end')
										]);
								case 'Left':
									return _List_fromArray(
										[
											A2(author$project$Internal$Style$Prop, 'align-items', 'flex-start')
										]);
								case 'CenterX':
									return _List_fromArray(
										[
											A2(author$project$Internal$Style$Prop, 'align-items', 'center')
										]);
								default:
									return _List_fromArray(
										[
											A2(author$project$Internal$Style$Prop, 'justify-content', 'center')
										]);
							}
						})
					])),
				A2(
				author$project$Internal$Style$Descriptor,
				author$project$Internal$Style$dot(author$project$Internal$Style$classes.page),
				_List_fromArray(
					[
						A2(author$project$Internal$Style$Prop, 'display', 'block'),
						A2(
						author$project$Internal$Style$Child,
						author$project$Internal$Style$dot(author$project$Internal$Style$classes.any + ':first-child'),
						_List_fromArray(
							[
								A2(author$project$Internal$Style$Prop, 'margin', '0 !important')
							])),
						A2(
						author$project$Internal$Style$Child,
						author$project$Internal$Style$dot(
							author$project$Internal$Style$classes.any + (author$project$Internal$Style$selfName(
								author$project$Internal$Style$Self(author$project$Internal$Style$Left)) + (':first-child + .' + author$project$Internal$Style$classes.any))),
						_List_fromArray(
							[
								A2(author$project$Internal$Style$Prop, 'margin', '0 !important')
							])),
						A2(
						author$project$Internal$Style$Child,
						author$project$Internal$Style$dot(
							author$project$Internal$Style$classes.any + (author$project$Internal$Style$selfName(
								author$project$Internal$Style$Self(author$project$Internal$Style$Right)) + (':first-child + .' + author$project$Internal$Style$classes.any))),
						_List_fromArray(
							[
								A2(author$project$Internal$Style$Prop, 'margin', '0 !important')
							])),
						author$project$Internal$Style$describeAlignment(
						function (alignment) {
							switch (alignment.$) {
								case 'Top':
									return _Utils_Tuple2(_List_Nil, _List_Nil);
								case 'Bottom':
									return _Utils_Tuple2(_List_Nil, _List_Nil);
								case 'Right':
									return _Utils_Tuple2(
										_List_Nil,
										_List_fromArray(
											[
												A2(author$project$Internal$Style$Prop, 'float', 'right'),
												A2(
												author$project$Internal$Style$Descriptor,
												'::after',
												_List_fromArray(
													[
														A2(author$project$Internal$Style$Prop, 'content', '\"\"'),
														A2(author$project$Internal$Style$Prop, 'display', 'table'),
														A2(author$project$Internal$Style$Prop, 'clear', 'both')
													]))
											]));
								case 'Left':
									return _Utils_Tuple2(
										_List_Nil,
										_List_fromArray(
											[
												A2(author$project$Internal$Style$Prop, 'float', 'left'),
												A2(
												author$project$Internal$Style$Descriptor,
												'::after',
												_List_fromArray(
													[
														A2(author$project$Internal$Style$Prop, 'content', '\"\"'),
														A2(author$project$Internal$Style$Prop, 'display', 'table'),
														A2(author$project$Internal$Style$Prop, 'clear', 'both')
													]))
											]));
								case 'CenterX':
									return _Utils_Tuple2(_List_Nil, _List_Nil);
								default:
									return _Utils_Tuple2(_List_Nil, _List_Nil);
							}
						})
					])),
				A2(
				author$project$Internal$Style$Descriptor,
				author$project$Internal$Style$dot(author$project$Internal$Style$classes.inputMultiline),
				_List_fromArray(
					[
						A2(author$project$Internal$Style$Prop, 'white-space', 'pre-wrap')
					])),
				A2(
				author$project$Internal$Style$Descriptor,
				author$project$Internal$Style$dot(author$project$Internal$Style$classes.paragraph),
				_List_fromArray(
					[
						A2(author$project$Internal$Style$Prop, 'display', 'block'),
						A2(author$project$Internal$Style$Prop, 'white-space', 'normal'),
						A2(
						author$project$Internal$Style$Descriptor,
						author$project$Internal$Style$dot(author$project$Internal$Style$classes.hasBehind),
						_List_fromArray(
							[
								A2(author$project$Internal$Style$Prop, 'z-index', '0'),
								A2(
								author$project$Internal$Style$Child,
								author$project$Internal$Style$dot(author$project$Internal$Style$classes.behind),
								_List_fromArray(
									[
										A2(author$project$Internal$Style$Prop, 'z-index', '-1')
									]))
							])),
						A2(
						author$project$Internal$Style$Child,
						author$project$Internal$Style$dot(author$project$Internal$Style$classes.text),
						_List_fromArray(
							[
								A2(author$project$Internal$Style$Prop, 'display', 'inline'),
								A2(author$project$Internal$Style$Prop, 'white-space', 'normal')
							])),
						A2(
						author$project$Internal$Style$Child,
						author$project$Internal$Style$dot(author$project$Internal$Style$classes.single),
						_List_fromArray(
							[
								A2(author$project$Internal$Style$Prop, 'display', 'inline'),
								A2(author$project$Internal$Style$Prop, 'white-space', 'normal'),
								A2(
								author$project$Internal$Style$Descriptor,
								author$project$Internal$Style$dot(author$project$Internal$Style$classes.inFront),
								_List_fromArray(
									[
										A2(author$project$Internal$Style$Prop, 'display', 'flex')
									])),
								A2(
								author$project$Internal$Style$Descriptor,
								author$project$Internal$Style$dot(author$project$Internal$Style$classes.behind),
								_List_fromArray(
									[
										A2(author$project$Internal$Style$Prop, 'display', 'flex')
									])),
								A2(
								author$project$Internal$Style$Descriptor,
								author$project$Internal$Style$dot(author$project$Internal$Style$classes.above),
								_List_fromArray(
									[
										A2(author$project$Internal$Style$Prop, 'display', 'flex')
									])),
								A2(
								author$project$Internal$Style$Descriptor,
								author$project$Internal$Style$dot(author$project$Internal$Style$classes.below),
								_List_fromArray(
									[
										A2(author$project$Internal$Style$Prop, 'display', 'flex')
									])),
								A2(
								author$project$Internal$Style$Descriptor,
								author$project$Internal$Style$dot(author$project$Internal$Style$classes.onRight),
								_List_fromArray(
									[
										A2(author$project$Internal$Style$Prop, 'display', 'flex')
									])),
								A2(
								author$project$Internal$Style$Descriptor,
								author$project$Internal$Style$dot(author$project$Internal$Style$classes.onLeft),
								_List_fromArray(
									[
										A2(author$project$Internal$Style$Prop, 'display', 'flex')
									])),
								A2(
								author$project$Internal$Style$Child,
								author$project$Internal$Style$dot(author$project$Internal$Style$classes.text),
								_List_fromArray(
									[
										A2(author$project$Internal$Style$Prop, 'display', 'inline'),
										A2(author$project$Internal$Style$Prop, 'white-space', 'normal')
									]))
							])),
						A2(
						author$project$Internal$Style$Child,
						author$project$Internal$Style$dot(author$project$Internal$Style$classes.row),
						_List_fromArray(
							[
								A2(author$project$Internal$Style$Prop, 'display', 'inline-flex')
							])),
						A2(
						author$project$Internal$Style$Child,
						author$project$Internal$Style$dot(author$project$Internal$Style$classes.column),
						_List_fromArray(
							[
								A2(author$project$Internal$Style$Prop, 'display', 'inline-flex')
							])),
						A2(
						author$project$Internal$Style$Child,
						author$project$Internal$Style$dot(author$project$Internal$Style$classes.grid),
						_List_fromArray(
							[
								A2(author$project$Internal$Style$Prop, 'display', 'inline-grid')
							])),
						author$project$Internal$Style$describeAlignment(
						function (alignment) {
							switch (alignment.$) {
								case 'Top':
									return _Utils_Tuple2(_List_Nil, _List_Nil);
								case 'Bottom':
									return _Utils_Tuple2(_List_Nil, _List_Nil);
								case 'Right':
									return _Utils_Tuple2(
										_List_Nil,
										_List_fromArray(
											[
												A2(author$project$Internal$Style$Prop, 'float', 'right')
											]));
								case 'Left':
									return _Utils_Tuple2(
										_List_Nil,
										_List_fromArray(
											[
												A2(author$project$Internal$Style$Prop, 'float', 'left')
											]));
								case 'CenterX':
									return _Utils_Tuple2(_List_Nil, _List_Nil);
								default:
									return _Utils_Tuple2(_List_Nil, _List_Nil);
							}
						})
					])),
				A2(
				author$project$Internal$Style$Descriptor,
				'.hidden',
				_List_fromArray(
					[
						A2(author$project$Internal$Style$Prop, 'display', 'none')
					])),
				A2(
				author$project$Internal$Style$Descriptor,
				author$project$Internal$Style$dot(author$project$Internal$Style$classes.textThin),
				_List_fromArray(
					[
						A2(author$project$Internal$Style$Prop, 'font-weight', '100')
					])),
				A2(
				author$project$Internal$Style$Descriptor,
				author$project$Internal$Style$dot(author$project$Internal$Style$classes.textExtraLight),
				_List_fromArray(
					[
						A2(author$project$Internal$Style$Prop, 'font-weight', '200')
					])),
				A2(
				author$project$Internal$Style$Descriptor,
				author$project$Internal$Style$dot(author$project$Internal$Style$classes.textLight),
				_List_fromArray(
					[
						A2(author$project$Internal$Style$Prop, 'font-weight', '300')
					])),
				A2(
				author$project$Internal$Style$Descriptor,
				author$project$Internal$Style$dot(author$project$Internal$Style$classes.textNormalWeight),
				_List_fromArray(
					[
						A2(author$project$Internal$Style$Prop, 'font-weight', '400')
					])),
				A2(
				author$project$Internal$Style$Descriptor,
				author$project$Internal$Style$dot(author$project$Internal$Style$classes.textMedium),
				_List_fromArray(
					[
						A2(author$project$Internal$Style$Prop, 'font-weight', '500')
					])),
				A2(
				author$project$Internal$Style$Descriptor,
				author$project$Internal$Style$dot(author$project$Internal$Style$classes.textSemiBold),
				_List_fromArray(
					[
						A2(author$project$Internal$Style$Prop, 'font-weight', '600')
					])),
				A2(
				author$project$Internal$Style$Descriptor,
				author$project$Internal$Style$dot(author$project$Internal$Style$classes.bold),
				_List_fromArray(
					[
						A2(author$project$Internal$Style$Prop, 'font-weight', '700')
					])),
				A2(
				author$project$Internal$Style$Descriptor,
				author$project$Internal$Style$dot(author$project$Internal$Style$classes.textExtraBold),
				_List_fromArray(
					[
						A2(author$project$Internal$Style$Prop, 'font-weight', '800')
					])),
				A2(
				author$project$Internal$Style$Descriptor,
				author$project$Internal$Style$dot(author$project$Internal$Style$classes.textHeavy),
				_List_fromArray(
					[
						A2(author$project$Internal$Style$Prop, 'font-weight', '900')
					])),
				A2(
				author$project$Internal$Style$Descriptor,
				author$project$Internal$Style$dot(author$project$Internal$Style$classes.italic),
				_List_fromArray(
					[
						A2(author$project$Internal$Style$Prop, 'font-style', 'italic')
					])),
				A2(
				author$project$Internal$Style$Descriptor,
				author$project$Internal$Style$dot(author$project$Internal$Style$classes.strike),
				_List_fromArray(
					[
						A2(author$project$Internal$Style$Prop, 'text-decoration', 'line-through')
					])),
				A2(
				author$project$Internal$Style$Descriptor,
				author$project$Internal$Style$dot(author$project$Internal$Style$classes.underline),
				_List_fromArray(
					[
						A2(author$project$Internal$Style$Prop, 'text-decoration', 'underline'),
						A2(author$project$Internal$Style$Prop, 'text-decoration-skip-ink', 'auto'),
						A2(author$project$Internal$Style$Prop, 'text-decoration-skip', 'ink')
					])),
				A2(
				author$project$Internal$Style$Descriptor,
				_Utils_ap(
					author$project$Internal$Style$dot(author$project$Internal$Style$classes.underline),
					author$project$Internal$Style$dot(author$project$Internal$Style$classes.strike)),
				_List_fromArray(
					[
						A2(author$project$Internal$Style$Prop, 'text-decoration', 'line-through underline'),
						A2(author$project$Internal$Style$Prop, 'text-decoration-skip-ink', 'auto'),
						A2(author$project$Internal$Style$Prop, 'text-decoration-skip', 'ink')
					])),
				A2(
				author$project$Internal$Style$Descriptor,
				author$project$Internal$Style$dot(author$project$Internal$Style$classes.textUnitalicized),
				_List_fromArray(
					[
						A2(author$project$Internal$Style$Prop, 'font-style', 'normal')
					])),
				A2(
				author$project$Internal$Style$Descriptor,
				author$project$Internal$Style$dot(author$project$Internal$Style$classes.textJustify),
				_List_fromArray(
					[
						A2(author$project$Internal$Style$Prop, 'text-align', 'justify')
					])),
				A2(
				author$project$Internal$Style$Descriptor,
				author$project$Internal$Style$dot(author$project$Internal$Style$classes.textJustifyAll),
				_List_fromArray(
					[
						A2(author$project$Internal$Style$Prop, 'text-align', 'justify-all')
					])),
				A2(
				author$project$Internal$Style$Descriptor,
				author$project$Internal$Style$dot(author$project$Internal$Style$classes.textCenter),
				_List_fromArray(
					[
						A2(author$project$Internal$Style$Prop, 'text-align', 'center')
					])),
				A2(
				author$project$Internal$Style$Descriptor,
				author$project$Internal$Style$dot(author$project$Internal$Style$classes.textRight),
				_List_fromArray(
					[
						A2(author$project$Internal$Style$Prop, 'text-align', 'right')
					])),
				A2(
				author$project$Internal$Style$Descriptor,
				author$project$Internal$Style$dot(author$project$Internal$Style$classes.textLeft),
				_List_fromArray(
					[
						A2(author$project$Internal$Style$Prop, 'text-align', 'left')
					])),
				A2(
				author$project$Internal$Style$Descriptor,
				'.modal',
				_List_fromArray(
					[
						A2(author$project$Internal$Style$Prop, 'position', 'fixed'),
						A2(author$project$Internal$Style$Prop, 'left', '0'),
						A2(author$project$Internal$Style$Prop, 'top', '0'),
						A2(author$project$Internal$Style$Prop, 'width', '100%'),
						A2(author$project$Internal$Style$Prop, 'height', '100%'),
						A2(author$project$Internal$Style$Prop, 'pointer-events', 'none')
					]))
			]))
	]);
var author$project$Internal$Style$fontVariant = function (_var) {
	return _List_fromArray(
		[
			A2(
			author$project$Internal$Style$Class,
			'.v-' + _var,
			_List_fromArray(
				[
					A2(author$project$Internal$Style$Prop, 'font-feature-settings', '\"' + (_var + '\"'))
				])),
			A2(
			author$project$Internal$Style$Class,
			'.v-' + (_var + '-off'),
			_List_fromArray(
				[
					A2(author$project$Internal$Style$Prop, 'font-feature-settings', '\"' + (_var + '\" 0'))
				]))
		]);
};
var author$project$Internal$Style$commonValues = elm$core$List$concat(
	_List_fromArray(
		[
			A2(
			elm$core$List$map,
			function (x) {
				return A2(
					author$project$Internal$Style$Class,
					'.border-' + elm$core$String$fromInt(x),
					_List_fromArray(
						[
							A2(
							author$project$Internal$Style$Prop,
							'border-width',
							elm$core$String$fromInt(x) + 'px')
						]));
			},
			A2(elm$core$List$range, 0, 6)),
			A2(
			elm$core$List$map,
			function (i) {
				return A2(
					author$project$Internal$Style$Class,
					'.font-size-' + elm$core$String$fromInt(i),
					_List_fromArray(
						[
							A2(
							author$project$Internal$Style$Prop,
							'font-size',
							elm$core$String$fromInt(i) + 'px')
						]));
			},
			A2(elm$core$List$range, 8, 32)),
			A2(
			elm$core$List$map,
			function (i) {
				return A2(
					author$project$Internal$Style$Class,
					'.p-' + elm$core$String$fromInt(i),
					_List_fromArray(
						[
							A2(
							author$project$Internal$Style$Prop,
							'padding',
							elm$core$String$fromInt(i) + 'px')
						]));
			},
			A2(elm$core$List$range, 0, 24)),
			_List_fromArray(
			[
				A2(
				author$project$Internal$Style$Class,
				'.v-smcp',
				_List_fromArray(
					[
						A2(author$project$Internal$Style$Prop, 'font-variant', 'small-caps')
					])),
				A2(
				author$project$Internal$Style$Class,
				'.v-smcp-off',
				_List_fromArray(
					[
						A2(author$project$Internal$Style$Prop, 'font-variant', 'normal')
					]))
			]),
			author$project$Internal$Style$fontVariant('zero'),
			author$project$Internal$Style$fontVariant('onum'),
			author$project$Internal$Style$fontVariant('liga'),
			author$project$Internal$Style$fontVariant('dlig'),
			author$project$Internal$Style$fontVariant('ordn'),
			author$project$Internal$Style$fontVariant('tnum'),
			author$project$Internal$Style$fontVariant('afrc'),
			author$project$Internal$Style$fontVariant('frac')
		]));
var author$project$Internal$Style$explainer = '\n.explain {\n    border: 6px solid rgb(174, 121, 15) !important;\n}\n.explain > .' + (author$project$Internal$Style$classes.any + (' {\n    border: 4px dashed rgb(0, 151, 167) !important;\n}\n\n.ctr {\n    border: none !important;\n}\n.explain > .ctr > .' + (author$project$Internal$Style$classes.any + ' {\n    border: 4px dashed rgb(0, 151, 167) !important;\n}\n\n')));
var author$project$Internal$Style$sliderOverrides = '\n\n/* General Input Reset */\ninput[type=range] {\n  -webkit-appearance: none; /* Hides the slider so that custom slider can be made */\n  /* width: 100%;  Specific width is required for Firefox. */\n  background: transparent; /* Otherwise white in Chrome */\n  position:absolute;\n  left:0;\n  top:0;\n  z-index:10;\n  width: 100%;\n  outline: dashed 1px;\n  height: 100%;\n  opacity: 0;\n}\n\n/* Hide all syling for track */\ninput[type=range]::-moz-range-track {\n    background: transparent;\n    cursor: pointer;\n}\ninput[type=range]::-ms-track {\n    background: transparent;\n    cursor: pointer;\n}\ninput[type=range]::-webkit-slider-runnable-track {\n    background: transparent;\n    cursor: pointer;\n}\n\n/* Thumbs */\ninput[type=range]::-webkit-slider-thumb {\n    -webkit-appearance: none;\n    opacity: 0.5;\n    width: 80px;\n    height: 80px;\n    background-color: black;\n    border:none;\n    border-radius: 5px;\n}\ninput[type=range]::-moz-range-thumb {\n    opacity: 0.5;\n    width: 80px;\n    height: 80px;\n    background-color: black;\n    border:none;\n    border-radius: 5px;\n}\ninput[type=range]::-ms-thumb {\n    opacity: 0.5;\n    width: 80px;\n    height: 80px;\n    background-color: black;\n    border:none;\n    border-radius: 5px;\n}\ninput[type=range][orient=vertical]{\n    writing-mode: bt-lr; /* IE */\n    -webkit-appearance: slider-vertical;  /* WebKit */\n}\n';
var author$project$Internal$Style$overrides = '@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {' + (author$project$Internal$Style$dot(author$project$Internal$Style$classes.any) + (author$project$Internal$Style$dot(author$project$Internal$Style$classes.row) + (' > ' + (author$project$Internal$Style$dot(author$project$Internal$Style$classes.any) + (' { flex-basis: auto !important; } ' + (author$project$Internal$Style$dot(author$project$Internal$Style$classes.any) + (author$project$Internal$Style$dot(author$project$Internal$Style$classes.row) + (' > ' + (author$project$Internal$Style$dot(author$project$Internal$Style$classes.any) + (author$project$Internal$Style$dot(author$project$Internal$Style$classes.container) + (' { flex-basis: auto !important; }}' + (author$project$Internal$Style$sliderOverrides + author$project$Internal$Style$explainer))))))))))));
var author$project$Internal$Style$Intermediate = function (a) {
	return {$: 'Intermediate', a: a};
};
var author$project$Internal$Style$emptyIntermediate = F2(
	function (selector, closing) {
		return author$project$Internal$Style$Intermediate(
			{closing: closing, others: _List_Nil, props: _List_Nil, selector: selector});
	});
var author$project$Internal$Style$renderRules = F2(
	function (_n0, rulesToRender) {
		var parent = _n0.a;
		var generateIntermediates = F2(
			function (rule, rendered) {
				switch (rule.$) {
					case 'Prop':
						var name = rule.a;
						var val = rule.b;
						return _Utils_update(
							rendered,
							{
								props: A2(
									elm$core$List$cons,
									_Utils_Tuple2(name, val),
									rendered.props)
							});
					case 'Supports':
						var _n2 = rule.a;
						var prop = _n2.a;
						var value = _n2.b;
						var props = rule.b;
						return _Utils_update(
							rendered,
							{
								others: A2(
									elm$core$List$cons,
									author$project$Internal$Style$Intermediate(
										{closing: '\n}', others: _List_Nil, props: props, selector: '@supports (' + (prop + (':' + (value + (') {' + parent.selector))))}),
									rendered.others)
							});
					case 'Adjacent':
						var selector = rule.a;
						var adjRules = rule.b;
						return _Utils_update(
							rendered,
							{
								others: A2(
									elm$core$List$cons,
									A2(
										author$project$Internal$Style$renderRules,
										A2(author$project$Internal$Style$emptyIntermediate, parent.selector + (' + ' + selector), ''),
										adjRules),
									rendered.others)
							});
					case 'Child':
						var child = rule.a;
						var childRules = rule.b;
						return _Utils_update(
							rendered,
							{
								others: A2(
									elm$core$List$cons,
									A2(
										author$project$Internal$Style$renderRules,
										A2(author$project$Internal$Style$emptyIntermediate, parent.selector + (' > ' + child), ''),
										childRules),
									rendered.others)
							});
					case 'Descriptor':
						var descriptor = rule.a;
						var descriptorRules = rule.b;
						return _Utils_update(
							rendered,
							{
								others: A2(
									elm$core$List$cons,
									A2(
										author$project$Internal$Style$renderRules,
										A2(
											author$project$Internal$Style$emptyIntermediate,
											_Utils_ap(parent.selector, descriptor),
											''),
										descriptorRules),
									rendered.others)
							});
					default:
						var batched = rule.a;
						return _Utils_update(
							rendered,
							{
								others: A2(
									elm$core$List$cons,
									A2(
										author$project$Internal$Style$renderRules,
										A2(author$project$Internal$Style$emptyIntermediate, parent.selector, ''),
										batched),
									rendered.others)
							});
				}
			});
		return author$project$Internal$Style$Intermediate(
			A3(elm$core$List$foldr, generateIntermediates, parent, rulesToRender));
	});
var elm$core$String$concat = function (strings) {
	return A2(elm$core$String$join, '', strings);
};
var author$project$Internal$Style$renderCompact = function (styleClasses) {
	var renderValues = function (values) {
		return elm$core$String$concat(
			A2(
				elm$core$List$map,
				function (_n3) {
					var x = _n3.a;
					var y = _n3.b;
					return x + (':' + (y + ';'));
				},
				values));
	};
	var renderClass = function (rule) {
		var _n2 = rule.props;
		if (!_n2.b) {
			return '';
		} else {
			return rule.selector + ('{' + (renderValues(rule.props) + (rule.closing + '}')));
		}
	};
	var renderIntermediate = function (_n0) {
		var rule = _n0.a;
		return _Utils_ap(
			renderClass(rule),
			elm$core$String$concat(
				A2(elm$core$List$map, renderIntermediate, rule.others)));
	};
	return elm$core$String$concat(
		A2(
			elm$core$List$map,
			renderIntermediate,
			A3(
				elm$core$List$foldr,
				F2(
					function (_n1, existing) {
						var name = _n1.a;
						var styleRules = _n1.b;
						return A2(
							elm$core$List$cons,
							A2(
								author$project$Internal$Style$renderRules,
								A2(author$project$Internal$Style$emptyIntermediate, name, ''),
								styleRules),
							existing);
					}),
				_List_Nil,
				styleClasses)));
};
var author$project$Internal$Style$rules = _Utils_ap(
	author$project$Internal$Style$overrides,
	author$project$Internal$Style$renderCompact(
		_Utils_ap(author$project$Internal$Style$baseSheet, author$project$Internal$Style$commonValues)));
var elm$json$Json$Decode$map = _Json_map1;
var elm$json$Json$Decode$map2 = _Json_map2;
var elm$virtual_dom$VirtualDom$toHandlerInt = function (handler) {
	switch (handler.$) {
		case 'Normal':
			return 0;
		case 'MayStopPropagation':
			return 1;
		case 'MayPreventDefault':
			return 2;
		default:
			return 3;
	}
};
var elm$virtual_dom$VirtualDom$node = function (tag) {
	return _VirtualDom_node(
		_VirtualDom_noScript(tag));
};
var elm$virtual_dom$VirtualDom$text = _VirtualDom_text;
var author$project$Internal$Model$staticRoot = A3(
	elm$virtual_dom$VirtualDom$node,
	'style',
	_List_Nil,
	_List_fromArray(
		[
			elm$virtual_dom$VirtualDom$text(author$project$Internal$Style$rules)
		]));
var author$project$Internal$Model$fontName = function (font) {
	switch (font.$) {
		case 'Serif':
			return 'serif';
		case 'SansSerif':
			return 'sans-serif';
		case 'Monospace':
			return 'monospace';
		case 'Typeface':
			var name = font.a;
			return '\"' + (name + '\"');
		case 'ImportFont':
			var name = font.a;
			var url = font.b;
			return '\"' + (name + '\"');
		default:
			var name = font.a.name;
			return '\"' + (name + '\"');
	}
};
var author$project$Internal$Model$isSmallCaps = function (_var) {
	switch (_var.$) {
		case 'VariantActive':
			var name = _var.a;
			return name === 'smcp';
		case 'VariantOff':
			var name = _var.a;
			return false;
		default:
			var name = _var.a;
			var index = _var.b;
			return (name === 'smcp') && (index === 1);
	}
};
var elm$core$List$any = F2(
	function (isOkay, list) {
		any:
		while (true) {
			if (!list.b) {
				return false;
			} else {
				var x = list.a;
				var xs = list.b;
				if (isOkay(x)) {
					return true;
				} else {
					var $temp$isOkay = isOkay,
						$temp$list = xs;
					isOkay = $temp$isOkay;
					list = $temp$list;
					continue any;
				}
			}
		}
	});
var author$project$Internal$Model$hasSmallCaps = function (typeface) {
	if (typeface.$ === 'FontWith') {
		var font = typeface.a;
		return A2(elm$core$List$any, author$project$Internal$Model$isSmallCaps, font.variants);
	} else {
		return false;
	}
};
var author$project$Internal$Model$renderProps = F3(
	function (force, _n0, existing) {
		var key = _n0.a;
		var val = _n0.b;
		return force ? (existing + ('\n  ' + (key + (': ' + (val + ' !important;'))))) : (existing + ('\n  ' + (key + (': ' + (val + ';')))));
	});
var author$project$Internal$Model$bracket = F2(
	function (selector, rules) {
		var renderPair = function (_n0) {
			var name = _n0.a;
			var val = _n0.b;
			return name + (': ' + (val + ';'));
		};
		return selector + (' {' + (A2(
			elm$core$String$join,
			'',
			A2(elm$core$List$map, renderPair, rules)) + '}'));
	});
var author$project$Internal$Model$fontRule = F3(
	function (name, modifier, _n0) {
		var parentAdj = _n0.a;
		var textAdjustment = _n0.b;
		return _List_fromArray(
			[
				A2(author$project$Internal$Model$bracket, '.' + (name + ('.' + (modifier + (', ' + ('.' + (name + (' .' + modifier))))))), parentAdj),
				A2(author$project$Internal$Model$bracket, '.' + (name + ('.' + (modifier + ('> .' + (author$project$Internal$Style$classes.text + (', .' + (name + (' .' + (modifier + (' > .' + author$project$Internal$Style$classes.text)))))))))), textAdjustment)
			]);
	});
var author$project$Internal$Model$renderFontAdjustmentRule = F3(
	function (fontToAdjust, _n0, otherFontName) {
		var full = _n0.a;
		var capital = _n0.b;
		var name = _Utils_eq(fontToAdjust, otherFontName) ? fontToAdjust : (otherFontName + (' .' + fontToAdjust));
		return A2(
			elm$core$String$join,
			' ',
			_Utils_ap(
				A3(author$project$Internal$Model$fontRule, name, author$project$Internal$Style$classes.sizeByCapital, capital),
				A3(author$project$Internal$Model$fontRule, name, author$project$Internal$Style$classes.fullSize, full)));
	});
var author$project$Internal$Model$renderNullAdjustmentRule = F2(
	function (fontToAdjust, otherFontName) {
		var name = _Utils_eq(fontToAdjust, otherFontName) ? fontToAdjust : (otherFontName + (' .' + fontToAdjust));
		return A2(
			elm$core$String$join,
			' ',
			_List_fromArray(
				[
					A2(
					author$project$Internal$Model$bracket,
					'.' + (name + ('.' + (author$project$Internal$Style$classes.sizeByCapital + (', ' + ('.' + (name + (' .' + author$project$Internal$Style$classes.sizeByCapital))))))),
					_List_fromArray(
						[
							_Utils_Tuple2('line-height', '1')
						])),
					A2(
					author$project$Internal$Model$bracket,
					'.' + (name + ('.' + (author$project$Internal$Style$classes.sizeByCapital + ('> .' + (author$project$Internal$Style$classes.text + (', .' + (name + (' .' + (author$project$Internal$Style$classes.sizeByCapital + (' > .' + author$project$Internal$Style$classes.text)))))))))),
					_List_fromArray(
						[
							_Utils_Tuple2('vertical-align', '0'),
							_Utils_Tuple2('line-height', '1')
						]))
				]));
	});
var author$project$Internal$Model$adjust = F3(
	function (size, height, vertical) {
		return {height: height / size, size: size, vertical: vertical};
	});
var elm$core$List$filter = F2(
	function (isGood, list) {
		return A3(
			elm$core$List$foldr,
			F2(
				function (x, xs) {
					return isGood(x) ? A2(elm$core$List$cons, x, xs) : xs;
				}),
			_List_Nil,
			list);
	});
var elm$core$List$maximum = function (list) {
	if (list.b) {
		var x = list.a;
		var xs = list.b;
		return elm$core$Maybe$Just(
			A3(elm$core$List$foldl, elm$core$Basics$max, x, xs));
	} else {
		return elm$core$Maybe$Nothing;
	}
};
var elm$core$Basics$min = F2(
	function (x, y) {
		return (_Utils_cmp(x, y) < 0) ? x : y;
	});
var elm$core$List$minimum = function (list) {
	if (list.b) {
		var x = list.a;
		var xs = list.b;
		return elm$core$Maybe$Just(
			A3(elm$core$List$foldl, elm$core$Basics$min, x, xs));
	} else {
		return elm$core$Maybe$Nothing;
	}
};
var author$project$Internal$Model$convertAdjustment = function (adjustment) {
	var lines = _List_fromArray(
		[adjustment.capital, adjustment.baseline, adjustment.descender, adjustment.lowercase]);
	var lineHeight = 1.5;
	var normalDescender = (lineHeight - 1) / 2;
	var oldMiddle = lineHeight / 2;
	var descender = A2(
		elm$core$Maybe$withDefault,
		adjustment.descender,
		elm$core$List$minimum(lines));
	var newBaseline = A2(
		elm$core$Maybe$withDefault,
		adjustment.baseline,
		elm$core$List$minimum(
			A2(
				elm$core$List$filter,
				function (x) {
					return !_Utils_eq(x, descender);
				},
				lines)));
	var base = lineHeight;
	var ascender = A2(
		elm$core$Maybe$withDefault,
		adjustment.capital,
		elm$core$List$maximum(lines));
	var capitalSize = 1 / (ascender - newBaseline);
	var capitalVertical = 1 - ascender;
	var fullSize = 1 / (ascender - descender);
	var fullVertical = 1 - ascender;
	var newCapitalMiddle = ((ascender - newBaseline) / 2) + newBaseline;
	var newFullMiddle = ((ascender - descender) / 2) + descender;
	return {
		capital: A3(author$project$Internal$Model$adjust, capitalSize, ascender - newBaseline, capitalVertical),
		full: A3(author$project$Internal$Model$adjust, fullSize, ascender - descender, fullVertical)
	};
};
var author$project$Internal$Model$fontAdjustmentRules = function (converted) {
	return _Utils_Tuple2(
		_List_fromArray(
			[
				_Utils_Tuple2('display', 'block')
			]),
		_List_fromArray(
			[
				_Utils_Tuple2('display', 'inline-block'),
				_Utils_Tuple2(
				'line-height',
				elm$core$String$fromFloat(converted.height)),
				_Utils_Tuple2(
				'vertical-align',
				elm$core$String$fromFloat(converted.vertical) + 'em'),
				_Utils_Tuple2(
				'font-size',
				elm$core$String$fromFloat(converted.size) + 'em')
			]));
};
var author$project$Internal$Model$typefaceAdjustment = function (typefaces) {
	return A3(
		elm$core$List$foldl,
		F2(
			function (face, found) {
				if (found.$ === 'Nothing') {
					if (face.$ === 'FontWith') {
						var _with = face.a;
						var _n2 = _with.adjustment;
						if (_n2.$ === 'Nothing') {
							return found;
						} else {
							var adjustment = _n2.a;
							return elm$core$Maybe$Just(
								_Utils_Tuple2(
									author$project$Internal$Model$fontAdjustmentRules(
										function ($) {
											return $.full;
										}(
											author$project$Internal$Model$convertAdjustment(adjustment))),
									author$project$Internal$Model$fontAdjustmentRules(
										function ($) {
											return $.capital;
										}(
											author$project$Internal$Model$convertAdjustment(adjustment)))));
						}
					} else {
						return found;
					}
				} else {
					return found;
				}
			}),
		elm$core$Maybe$Nothing,
		typefaces);
};
var author$project$Internal$Model$renderTopLevelValues = function (rules) {
	var withImport = function (font) {
		if (font.$ === 'ImportFont') {
			var url = font.b;
			return elm$core$Maybe$Just('@import url(\'' + (url + '\');'));
		} else {
			return elm$core$Maybe$Nothing;
		}
	};
	var fontImports = function (_n2) {
		var name = _n2.a;
		var typefaces = _n2.b;
		var imports = A2(
			elm$core$String$join,
			'\n',
			A2(elm$core$List$filterMap, withImport, typefaces));
		return imports;
	};
	var allNames = A2(elm$core$List$map, elm$core$Tuple$first, rules);
	var fontAdjustments = function (_n1) {
		var name = _n1.a;
		var typefaces = _n1.b;
		var _n0 = author$project$Internal$Model$typefaceAdjustment(typefaces);
		if (_n0.$ === 'Nothing') {
			return A2(
				elm$core$String$join,
				'',
				A2(
					elm$core$List$map,
					author$project$Internal$Model$renderNullAdjustmentRule(name),
					allNames));
		} else {
			var adjustment = _n0.a;
			return A2(
				elm$core$String$join,
				'',
				A2(
					elm$core$List$map,
					A2(author$project$Internal$Model$renderFontAdjustmentRule, name, adjustment),
					allNames));
		}
	};
	return _Utils_ap(
		A2(
			elm$core$String$join,
			'\n',
			A2(elm$core$List$map, fontImports, rules)),
		A2(
			elm$core$String$join,
			'\n',
			A2(elm$core$List$map, fontAdjustments, rules)));
};
var author$project$Internal$Model$renderVariant = function (_var) {
	switch (_var.$) {
		case 'VariantActive':
			var name = _var.a;
			return '\"' + (name + '\"');
		case 'VariantOff':
			var name = _var.a;
			return '\"' + (name + '\" 0');
		default:
			var name = _var.a;
			var index = _var.b;
			return '\"' + (name + ('\" ' + elm$core$String$fromInt(index)));
	}
};
var author$project$Internal$Model$renderVariants = function (typeface) {
	if (typeface.$ === 'FontWith') {
		var font = typeface.a;
		return elm$core$Maybe$Just(
			A2(
				elm$core$String$join,
				', ',
				A2(elm$core$List$map, author$project$Internal$Model$renderVariant, font.variants)));
	} else {
		return elm$core$Maybe$Nothing;
	}
};
var author$project$Internal$Model$topLevelValue = function (rule) {
	if (rule.$ === 'FontFamily') {
		var name = rule.a;
		var typefaces = rule.b;
		return elm$core$Maybe$Just(
			_Utils_Tuple2(name, typefaces));
	} else {
		return elm$core$Maybe$Nothing;
	}
};
var author$project$Internal$Model$transformValue = function (transform) {
	switch (transform.$) {
		case 'Untransformed':
			return elm$core$Maybe$Nothing;
		case 'Moved':
			var _n1 = transform.a;
			var x = _n1.a;
			var y = _n1.b;
			var z = _n1.c;
			return elm$core$Maybe$Just(
				'translate3d(' + (elm$core$String$fromFloat(x) + ('px, ' + (elm$core$String$fromFloat(y) + ('px, ' + (elm$core$String$fromFloat(z) + 'px)'))))));
		default:
			var _n2 = transform.a;
			var tx = _n2.a;
			var ty = _n2.b;
			var tz = _n2.c;
			var _n3 = transform.b;
			var sx = _n3.a;
			var sy = _n3.b;
			var sz = _n3.c;
			var _n4 = transform.c;
			var ox = _n4.a;
			var oy = _n4.b;
			var oz = _n4.c;
			var angle = transform.d;
			var translate = 'translate3d(' + (elm$core$String$fromFloat(tx) + ('px, ' + (elm$core$String$fromFloat(ty) + ('px, ' + (elm$core$String$fromFloat(tz) + 'px)')))));
			var scale = 'scale3d(' + (elm$core$String$fromFloat(sx) + (', ' + (elm$core$String$fromFloat(sy) + (', ' + (elm$core$String$fromFloat(sz) + ')')))));
			var rotate = 'rotate3d(' + (elm$core$String$fromFloat(ox) + (', ' + (elm$core$String$fromFloat(oy) + (', ' + (elm$core$String$fromFloat(oz) + (', ' + (elm$core$String$fromFloat(angle) + 'rad)')))))));
			return elm$core$Maybe$Just(translate + (' ' + (scale + (' ' + rotate))));
	}
};
var author$project$Internal$Model$toStyleSheetString = F2(
	function (options, stylesheet) {
		var renderStyle = F3(
			function (maybePseudo, selector, props) {
				if (maybePseudo.$ === 'Nothing') {
					return selector + ('{' + (A3(
						elm$core$List$foldl,
						author$project$Internal$Model$renderProps(false),
						'',
						props) + '\n}'));
				} else {
					var pseudo = maybePseudo.a;
					switch (pseudo.$) {
						case 'Hover':
							var _n17 = options.hover;
							switch (_n17.$) {
								case 'NoHover':
									return '';
								case 'ForceHover':
									return selector + ('-hv {' + (A3(
										elm$core$List$foldl,
										author$project$Internal$Model$renderProps(true),
										'',
										props) + '\n}'));
								default:
									return selector + ('-hv:hover {' + (A3(
										elm$core$List$foldl,
										author$project$Internal$Model$renderProps(false),
										'',
										props) + '\n}'));
							}
						case 'Focus':
							var renderedProps = A3(
								elm$core$List$foldl,
								author$project$Internal$Model$renderProps(false),
								'',
								props);
							return A2(
								elm$core$String$join,
								'\n',
								_List_fromArray(
									[selector + ('-fs:focus {' + (renderedProps + '\n}')), '.' + (author$project$Internal$Style$classes.any + (':focus ~ ' + (selector + ('-fs:not(.focus)  {' + (renderedProps + '\n}'))))), '.' + (author$project$Internal$Style$classes.any + (':focus ' + (selector + ('-fs  {' + (renderedProps + '\n}'))))), '.focusable-parent:focus ~ ' + ('.' + (author$project$Internal$Style$classes.any + (' ' + (selector + ('-fs {' + (renderedProps + '\n}'))))))]));
						default:
							return selector + ('-act:active {' + (A3(
								elm$core$List$foldl,
								author$project$Internal$Model$renderProps(false),
								'',
								props) + '\n}'));
					}
				}
			});
		var renderStyleRule = F2(
			function (rule, maybePseudo) {
				switch (rule.$) {
					case 'Style':
						var selector = rule.a;
						var props = rule.b;
						return A3(renderStyle, maybePseudo, selector, props);
					case 'Shadows':
						var name = rule.a;
						var prop = rule.b;
						return A3(
							renderStyle,
							maybePseudo,
							'.' + name,
							_List_fromArray(
								[
									A2(author$project$Internal$Model$Property, 'box-shadow', prop)
								]));
					case 'Transparency':
						var name = rule.a;
						var transparency = rule.b;
						var opacity = A2(
							elm$core$Basics$max,
							0,
							A2(elm$core$Basics$min, 1, 1 - transparency));
						return A3(
							renderStyle,
							maybePseudo,
							'.' + name,
							_List_fromArray(
								[
									A2(
									author$project$Internal$Model$Property,
									'opacity',
									elm$core$String$fromFloat(opacity))
								]));
					case 'FontSize':
						var i = rule.a;
						return A3(
							renderStyle,
							maybePseudo,
							'.font-size-' + elm$core$String$fromInt(i),
							_List_fromArray(
								[
									A2(
									author$project$Internal$Model$Property,
									'font-size',
									elm$core$String$fromInt(i) + 'px')
								]));
					case 'FontFamily':
						var name = rule.a;
						var typefaces = rule.b;
						var features = A2(
							elm$core$String$join,
							', ',
							A2(elm$core$List$filterMap, author$project$Internal$Model$renderVariants, typefaces));
						var families = _List_fromArray(
							[
								A2(
								author$project$Internal$Model$Property,
								'font-family',
								A2(
									elm$core$String$join,
									', ',
									A2(elm$core$List$map, author$project$Internal$Model$fontName, typefaces))),
								A2(author$project$Internal$Model$Property, 'font-feature-settings', features),
								A2(
								author$project$Internal$Model$Property,
								'font-variant',
								A2(elm$core$List$any, author$project$Internal$Model$hasSmallCaps, typefaces) ? 'small-caps' : 'normal')
							]);
						return A2(
							elm$core$String$join,
							' ',
							_List_fromArray(
								[
									A3(renderStyle, maybePseudo, '.' + name, families)
								]));
					case 'Single':
						var _class = rule.a;
						var prop = rule.b;
						var val = rule.c;
						return A3(
							renderStyle,
							maybePseudo,
							'.' + _class,
							_List_fromArray(
								[
									A2(author$project$Internal$Model$Property, prop, val)
								]));
					case 'Colored':
						var _class = rule.a;
						var prop = rule.b;
						var color = rule.c;
						return A3(
							renderStyle,
							maybePseudo,
							'.' + _class,
							_List_fromArray(
								[
									A2(
									author$project$Internal$Model$Property,
									prop,
									author$project$Internal$Model$formatColor(color))
								]));
					case 'SpacingStyle':
						var cls = rule.a;
						var x = rule.b;
						var y = rule.c;
						var yPx = elm$core$String$fromInt(y) + 'px';
						var xPx = elm$core$String$fromInt(x) + 'px';
						var single = '.' + author$project$Internal$Style$classes.single;
						var row = '.' + author$project$Internal$Style$classes.row;
						var wrappedRow = '.' + (author$project$Internal$Style$classes.wrapped + row);
						var right = '.' + author$project$Internal$Style$classes.alignRight;
						var paragraph = '.' + author$project$Internal$Style$classes.paragraph;
						var page = '.' + author$project$Internal$Style$classes.page;
						var left = '.' + author$project$Internal$Style$classes.alignLeft;
						var halfY = elm$core$String$fromFloat(y / 2) + 'px';
						var halfX = elm$core$String$fromFloat(x / 2) + 'px';
						var column = '.' + author$project$Internal$Style$classes.column;
						var _class = '.' + cls;
						var any = '.' + author$project$Internal$Style$classes.any;
						return elm$core$String$concat(
							_List_fromArray(
								[
									A3(
									renderStyle,
									maybePseudo,
									_class + (row + (' > ' + (any + (' + ' + any)))),
									_List_fromArray(
										[
											A2(author$project$Internal$Model$Property, 'margin-left', xPx)
										])),
									A3(
									renderStyle,
									maybePseudo,
									_class + (wrappedRow + (' > ' + any)),
									_List_fromArray(
										[
											A2(author$project$Internal$Model$Property, 'margin', halfY + (' ' + halfX))
										])),
									A3(
									renderStyle,
									maybePseudo,
									_class + (column + (' > ' + (any + (' + ' + any)))),
									_List_fromArray(
										[
											A2(author$project$Internal$Model$Property, 'margin-top', yPx)
										])),
									A3(
									renderStyle,
									maybePseudo,
									_class + (page + (' > ' + (any + (' + ' + any)))),
									_List_fromArray(
										[
											A2(author$project$Internal$Model$Property, 'margin-top', yPx)
										])),
									A3(
									renderStyle,
									maybePseudo,
									_class + (page + (' > ' + left)),
									_List_fromArray(
										[
											A2(author$project$Internal$Model$Property, 'margin-right', xPx)
										])),
									A3(
									renderStyle,
									maybePseudo,
									_class + (page + (' > ' + right)),
									_List_fromArray(
										[
											A2(author$project$Internal$Model$Property, 'margin-left', xPx)
										])),
									A3(
									renderStyle,
									maybePseudo,
									_Utils_ap(_class, paragraph),
									_List_fromArray(
										[
											A2(
											author$project$Internal$Model$Property,
											'line-height',
											'calc(1em + ' + (elm$core$String$fromInt(y) + 'px)'))
										])),
									A3(
									renderStyle,
									maybePseudo,
									'textarea' + _class,
									_List_fromArray(
										[
											A2(
											author$project$Internal$Model$Property,
											'line-height',
											'calc(1em + ' + (elm$core$String$fromInt(y) + 'px)'))
										])),
									A3(
									renderStyle,
									maybePseudo,
									_class + (paragraph + (' > ' + left)),
									_List_fromArray(
										[
											A2(author$project$Internal$Model$Property, 'margin-right', xPx)
										])),
									A3(
									renderStyle,
									maybePseudo,
									_class + (paragraph + (' > ' + right)),
									_List_fromArray(
										[
											A2(author$project$Internal$Model$Property, 'margin-left', xPx)
										])),
									A3(
									renderStyle,
									maybePseudo,
									_class + (paragraph + '::after'),
									_List_fromArray(
										[
											A2(author$project$Internal$Model$Property, 'content', '\'\''),
											A2(author$project$Internal$Model$Property, 'display', 'block'),
											A2(author$project$Internal$Model$Property, 'height', '0'),
											A2(author$project$Internal$Model$Property, 'width', '0'),
											A2(
											author$project$Internal$Model$Property,
											'margin-top',
											elm$core$String$fromInt((-1) * ((y / 2) | 0)) + 'px')
										])),
									A3(
									renderStyle,
									maybePseudo,
									_class + (paragraph + '::before'),
									_List_fromArray(
										[
											A2(author$project$Internal$Model$Property, 'content', '\'\''),
											A2(author$project$Internal$Model$Property, 'display', 'block'),
											A2(author$project$Internal$Model$Property, 'height', '0'),
											A2(author$project$Internal$Model$Property, 'width', '0'),
											A2(
											author$project$Internal$Model$Property,
											'margin-bottom',
											elm$core$String$fromInt((-1) * ((y / 2) | 0)) + 'px')
										]))
								]));
					case 'PaddingStyle':
						var cls = rule.a;
						var top = rule.b;
						var right = rule.c;
						var bottom = rule.d;
						var left = rule.e;
						var _class = '.' + cls;
						return A3(
							renderStyle,
							maybePseudo,
							_class,
							_List_fromArray(
								[
									A2(
									author$project$Internal$Model$Property,
									'padding',
									elm$core$String$fromInt(top) + ('px ' + (elm$core$String$fromInt(right) + ('px ' + (elm$core$String$fromInt(bottom) + ('px ' + (elm$core$String$fromInt(left) + 'px')))))))
								]));
					case 'BorderWidth':
						var cls = rule.a;
						var top = rule.b;
						var right = rule.c;
						var bottom = rule.d;
						var left = rule.e;
						var _class = '.' + cls;
						return A3(
							renderStyle,
							maybePseudo,
							_class,
							_List_fromArray(
								[
									A2(
									author$project$Internal$Model$Property,
									'border-width',
									elm$core$String$fromInt(top) + ('px ' + (elm$core$String$fromInt(right) + ('px ' + (elm$core$String$fromInt(bottom) + ('px ' + (elm$core$String$fromInt(left) + 'px')))))))
								]));
					case 'GridTemplateStyle':
						var template = rule.a;
						var toGridLengthHelper = F3(
							function (minimum, maximum, x) {
								toGridLengthHelper:
								while (true) {
									switch (x.$) {
										case 'Px':
											var px = x.a;
											return elm$core$String$fromInt(px) + 'px';
										case 'Content':
											var _n2 = _Utils_Tuple2(minimum, maximum);
											if (_n2.a.$ === 'Nothing') {
												if (_n2.b.$ === 'Nothing') {
													var _n3 = _n2.a;
													var _n4 = _n2.b;
													return 'max-content';
												} else {
													var _n6 = _n2.a;
													var maxSize = _n2.b.a;
													return 'minmax(max-content, ' + (elm$core$String$fromInt(maxSize) + 'px)');
												}
											} else {
												if (_n2.b.$ === 'Nothing') {
													var minSize = _n2.a.a;
													var _n5 = _n2.b;
													return 'minmax(' + (elm$core$String$fromInt(minSize) + ('px, ' + 'max-content)'));
												} else {
													var minSize = _n2.a.a;
													var maxSize = _n2.b.a;
													return 'minmax(' + (elm$core$String$fromInt(minSize) + ('px, ' + (elm$core$String$fromInt(maxSize) + 'px)')));
												}
											}
										case 'Fill':
											var i = x.a;
											var _n7 = _Utils_Tuple2(minimum, maximum);
											if (_n7.a.$ === 'Nothing') {
												if (_n7.b.$ === 'Nothing') {
													var _n8 = _n7.a;
													var _n9 = _n7.b;
													return elm$core$String$fromInt(i) + 'fr';
												} else {
													var _n11 = _n7.a;
													var maxSize = _n7.b.a;
													return 'minmax(max-content, ' + (elm$core$String$fromInt(maxSize) + 'px)');
												}
											} else {
												if (_n7.b.$ === 'Nothing') {
													var minSize = _n7.a.a;
													var _n10 = _n7.b;
													return 'minmax(' + (elm$core$String$fromInt(minSize) + ('px, ' + (elm$core$String$fromInt(i) + ('fr' + 'fr)'))));
												} else {
													var minSize = _n7.a.a;
													var maxSize = _n7.b.a;
													return 'minmax(' + (elm$core$String$fromInt(minSize) + ('px, ' + (elm$core$String$fromInt(maxSize) + 'px)')));
												}
											}
										case 'Min':
											var m = x.a;
											var len = x.b;
											var $temp$minimum = elm$core$Maybe$Just(m),
												$temp$maximum = maximum,
												$temp$x = len;
											minimum = $temp$minimum;
											maximum = $temp$maximum;
											x = $temp$x;
											continue toGridLengthHelper;
										default:
											var m = x.a;
											var len = x.b;
											var $temp$minimum = minimum,
												$temp$maximum = elm$core$Maybe$Just(m),
												$temp$x = len;
											minimum = $temp$minimum;
											maximum = $temp$maximum;
											x = $temp$x;
											continue toGridLengthHelper;
									}
								}
							});
						var toGridLength = function (x) {
							return A3(toGridLengthHelper, elm$core$Maybe$Nothing, elm$core$Maybe$Nothing, x);
						};
						var xSpacing = toGridLength(template.spacing.a);
						var ySpacing = toGridLength(template.spacing.b);
						var rows = function (x) {
							return 'grid-template-rows: ' + (x + ';');
						}(
							A2(
								elm$core$String$join,
								' ',
								A2(elm$core$List$map, toGridLength, template.rows)));
						var msRows = function (x) {
							return '-ms-grid-rows: ' + (x + ';');
						}(
							A2(
								elm$core$String$join,
								ySpacing,
								A2(elm$core$List$map, toGridLength, template.columns)));
						var msColumns = function (x) {
							return '-ms-grid-columns: ' + (x + ';');
						}(
							A2(
								elm$core$String$join,
								ySpacing,
								A2(elm$core$List$map, toGridLength, template.columns)));
						var gapY = 'grid-row-gap:' + (toGridLength(template.spacing.b) + ';');
						var gapX = 'grid-column-gap:' + (toGridLength(template.spacing.a) + ';');
						var columns = function (x) {
							return 'grid-template-columns: ' + (x + ';');
						}(
							A2(
								elm$core$String$join,
								' ',
								A2(elm$core$List$map, toGridLength, template.columns)));
						var _class = '.grid-rows-' + (A2(
							elm$core$String$join,
							'-',
							A2(elm$core$List$map, author$project$Internal$Model$lengthClassName, template.rows)) + ('-cols-' + (A2(
							elm$core$String$join,
							'-',
							A2(elm$core$List$map, author$project$Internal$Model$lengthClassName, template.columns)) + ('-space-x-' + (author$project$Internal$Model$lengthClassName(template.spacing.a) + ('-space-y-' + author$project$Internal$Model$lengthClassName(template.spacing.b)))))));
						var modernGrid = _class + ('{' + (columns + (rows + (gapX + (gapY + '}')))));
						var supports = '@supports (display:grid) {' + (modernGrid + '}');
						var base = _class + ('{' + (msColumns + (msRows + '}')));
						return _Utils_ap(base, supports);
					case 'GridPosition':
						var position = rule.a;
						var msPosition = A2(
							elm$core$String$join,
							' ',
							_List_fromArray(
								[
									'-ms-grid-row: ' + (elm$core$String$fromInt(position.row) + ';'),
									'-ms-grid-row-span: ' + (elm$core$String$fromInt(position.height) + ';'),
									'-ms-grid-column: ' + (elm$core$String$fromInt(position.col) + ';'),
									'-ms-grid-column-span: ' + (elm$core$String$fromInt(position.width) + ';')
								]));
						var modernPosition = A2(
							elm$core$String$join,
							' ',
							_List_fromArray(
								[
									'grid-row: ' + (elm$core$String$fromInt(position.row) + (' / ' + (elm$core$String$fromInt(position.row + position.height) + ';'))),
									'grid-column: ' + (elm$core$String$fromInt(position.col) + (' / ' + (elm$core$String$fromInt(position.col + position.width) + ';')))
								]));
						var _class = '.grid-pos-' + (elm$core$String$fromInt(position.row) + ('-' + (elm$core$String$fromInt(position.col) + ('-' + (elm$core$String$fromInt(position.width) + ('-' + elm$core$String$fromInt(position.height)))))));
						var modernGrid = _class + ('{' + (modernPosition + '}'));
						var supports = '@supports (display:grid) {' + (modernGrid + '}');
						var base = _class + ('{' + (msPosition + '}'));
						return _Utils_ap(base, supports);
					case 'PseudoSelector':
						var _class = rule.a;
						var styles = rule.b;
						var renderPseudoRule = function (style) {
							return A2(
								renderStyleRule,
								style,
								elm$core$Maybe$Just(_class));
						};
						return A2(
							elm$core$String$join,
							' ',
							A2(elm$core$List$map, renderPseudoRule, styles));
					default:
						var transform = rule.a;
						var val = author$project$Internal$Model$transformValue(transform);
						var _class = author$project$Internal$Model$transformClass(transform);
						var _n12 = _Utils_Tuple2(_class, val);
						if ((_n12.a.$ === 'Just') && (_n12.b.$ === 'Just')) {
							var cls = _n12.a.a;
							var v = _n12.b.a;
							return A3(
								renderStyle,
								maybePseudo,
								'.' + cls,
								_List_fromArray(
									[
										A2(author$project$Internal$Model$Property, 'transform', v)
									]));
						} else {
							return '';
						}
				}
			});
		var combine = F2(
			function (style, rendered) {
				return {
					rules: _Utils_ap(
						rendered.rules,
						A2(renderStyleRule, style, elm$core$Maybe$Nothing)),
					topLevel: function () {
						var _n14 = author$project$Internal$Model$topLevelValue(style);
						if (_n14.$ === 'Nothing') {
							return rendered.topLevel;
						} else {
							var topLevel = _n14.a;
							return A2(elm$core$List$cons, topLevel, rendered.topLevel);
						}
					}()
				};
			});
		var _n13 = A3(
			elm$core$List$foldl,
			combine,
			{rules: '', topLevel: _List_Nil},
			stylesheet);
		var topLevel = _n13.topLevel;
		var rules = _n13.rules;
		return _Utils_ap(
			author$project$Internal$Model$renderTopLevelValues(topLevel),
			rules);
	});
var author$project$Internal$Model$toStyleSheet = F2(
	function (options, styleSheet) {
		return A3(
			elm$virtual_dom$VirtualDom$node,
			'style',
			_List_Nil,
			_List_fromArray(
				[
					elm$virtual_dom$VirtualDom$text(
					A2(author$project$Internal$Model$toStyleSheetString, options, styleSheet))
				]));
	});
var author$project$Internal$Model$embedKeyed = F4(
	function (_static, opts, styles, children) {
		return _static ? A2(
			elm$core$List$cons,
			_Utils_Tuple2('static-stylesheet', author$project$Internal$Model$staticRoot),
			A2(
				elm$core$List$cons,
				_Utils_Tuple2(
					'dynamic-stylesheet',
					A2(
						author$project$Internal$Model$toStyleSheet,
						opts,
						A3(
							elm$core$List$foldl,
							author$project$Internal$Model$reduceStyles,
							_Utils_Tuple2(
								elm$core$Set$empty,
								_List_fromArray(
									[
										author$project$Internal$Model$renderFocusStyle(opts.focus)
									])),
							styles).b)),
				children)) : A2(
			elm$core$List$cons,
			_Utils_Tuple2(
				'dynamic-stylesheet',
				A2(
					author$project$Internal$Model$toStyleSheet,
					opts,
					A3(
						elm$core$List$foldl,
						author$project$Internal$Model$reduceStyles,
						_Utils_Tuple2(
							elm$core$Set$empty,
							_List_fromArray(
								[
									author$project$Internal$Model$renderFocusStyle(opts.focus)
								])),
						styles).b)),
			children);
	});
var author$project$Internal$Model$embedWith = F4(
	function (_static, opts, styles, children) {
		return _static ? A2(
			elm$core$List$cons,
			author$project$Internal$Model$staticRoot,
			A2(
				elm$core$List$cons,
				A2(
					author$project$Internal$Model$toStyleSheet,
					opts,
					A3(
						elm$core$List$foldl,
						author$project$Internal$Model$reduceStyles,
						_Utils_Tuple2(
							elm$core$Set$empty,
							_List_fromArray(
								[
									author$project$Internal$Model$renderFocusStyle(opts.focus)
								])),
						styles).b),
				children)) : A2(
			elm$core$List$cons,
			A2(
				author$project$Internal$Model$toStyleSheet,
				opts,
				A3(
					elm$core$List$foldl,
					author$project$Internal$Model$reduceStyles,
					_Utils_Tuple2(
						elm$core$Set$empty,
						_List_fromArray(
							[
								author$project$Internal$Model$renderFocusStyle(opts.focus)
							])),
					styles).b),
			children);
	});
var elm$core$Basics$not = _Basics_not;
var elm$html$Html$div = _VirtualDom_node('div');
var elm$html$Html$p = _VirtualDom_node('p');
var elm$html$Html$s = _VirtualDom_node('s');
var elm$html$Html$u = _VirtualDom_node('u');
var elm$html$Html$Attributes$stringProperty = F2(
	function (key, string) {
		return A2(
			_VirtualDom_property,
			key,
			elm$json$Json$Encode$string(string));
	});
var elm$html$Html$Attributes$class = elm$html$Html$Attributes$stringProperty('className');
var elm$virtual_dom$VirtualDom$keyedNode = function (tag) {
	return _VirtualDom_keyedNode(
		_VirtualDom_noScript(tag));
};
var author$project$Internal$Model$finalizeNode = F6(
	function (has, node, attributes, children, embedMode, parentContext) {
		var createNode = F2(
			function (nodeName, attrs) {
				if (children.$ === 'Keyed') {
					var keyed = children.a;
					return A3(
						elm$virtual_dom$VirtualDom$keyedNode,
						nodeName,
						attrs,
						function () {
							switch (embedMode.$) {
								case 'NoStyleSheet':
									return keyed;
								case 'OnlyDynamic':
									var opts = embedMode.a;
									var styles = embedMode.b;
									return A4(author$project$Internal$Model$embedKeyed, false, opts, styles, keyed);
								default:
									var opts = embedMode.a;
									var styles = embedMode.b;
									return A4(author$project$Internal$Model$embedKeyed, true, opts, styles, keyed);
							}
						}());
				} else {
					var unkeyed = children.a;
					return A2(
						function () {
							switch (nodeName) {
								case 'div':
									return elm$html$Html$div;
								case 'p':
									return elm$html$Html$p;
								default:
									return elm$virtual_dom$VirtualDom$node(nodeName);
							}
						}(),
						attrs,
						function () {
							switch (embedMode.$) {
								case 'NoStyleSheet':
									return unkeyed;
								case 'OnlyDynamic':
									var opts = embedMode.a;
									var styles = embedMode.b;
									return A4(author$project$Internal$Model$embedWith, false, opts, styles, unkeyed);
								default:
									var opts = embedMode.a;
									var styles = embedMode.b;
									return A4(author$project$Internal$Model$embedWith, true, opts, styles, unkeyed);
							}
						}());
				}
			});
		var html = function () {
			switch (node.$) {
				case 'Generic':
					return A2(createNode, 'div', attributes);
				case 'NodeName':
					var nodeName = node.a;
					return A2(createNode, nodeName, attributes);
				default:
					var nodeName = node.a;
					var internal = node.b;
					return A3(
						elm$virtual_dom$VirtualDom$node,
						nodeName,
						attributes,
						_List_fromArray(
							[
								A2(
								createNode,
								internal,
								_List_fromArray(
									[
										elm$html$Html$Attributes$class(author$project$Internal$Style$classes.any + (' ' + author$project$Internal$Style$classes.single))
									]))
							]));
			}
		}();
		switch (parentContext.$) {
			case 'AsRow':
				return (A2(author$project$Internal$Flag$present, author$project$Internal$Flag$widthFill, has) && (!A2(author$project$Internal$Flag$present, author$project$Internal$Flag$widthBetween, has))) ? html : (A2(author$project$Internal$Flag$present, author$project$Internal$Flag$alignRight, has) ? A2(
					elm$html$Html$u,
					_List_fromArray(
						[
							elm$html$Html$Attributes$class(
							A2(
								elm$core$String$join,
								' ',
								_List_fromArray(
									[author$project$Internal$Style$classes.any, author$project$Internal$Style$classes.single, author$project$Internal$Style$classes.container, author$project$Internal$Style$classes.contentCenterY, author$project$Internal$Style$classes.alignContainerRight])))
						]),
					_List_fromArray(
						[html])) : (A2(author$project$Internal$Flag$present, author$project$Internal$Flag$centerX, has) ? A2(
					elm$html$Html$s,
					_List_fromArray(
						[
							elm$html$Html$Attributes$class(
							A2(
								elm$core$String$join,
								' ',
								_List_fromArray(
									[author$project$Internal$Style$classes.any, author$project$Internal$Style$classes.single, author$project$Internal$Style$classes.container, author$project$Internal$Style$classes.contentCenterY, author$project$Internal$Style$classes.alignContainerCenterX])))
						]),
					_List_fromArray(
						[html])) : html));
			case 'AsColumn':
				return (A2(author$project$Internal$Flag$present, author$project$Internal$Flag$heightFill, has) && (!A2(author$project$Internal$Flag$present, author$project$Internal$Flag$heightBetween, has))) ? html : (A2(author$project$Internal$Flag$present, author$project$Internal$Flag$centerY, has) ? A2(
					elm$html$Html$s,
					_List_fromArray(
						[
							elm$html$Html$Attributes$class(
							A2(
								elm$core$String$join,
								' ',
								_List_fromArray(
									[author$project$Internal$Style$classes.any, author$project$Internal$Style$classes.single, author$project$Internal$Style$classes.container, author$project$Internal$Style$classes.alignContainerCenterY])))
						]),
					_List_fromArray(
						[html])) : (A2(author$project$Internal$Flag$present, author$project$Internal$Flag$alignBottom, has) ? A2(
					elm$html$Html$u,
					_List_fromArray(
						[
							elm$html$Html$Attributes$class(
							A2(
								elm$core$String$join,
								' ',
								_List_fromArray(
									[author$project$Internal$Style$classes.any, author$project$Internal$Style$classes.single, author$project$Internal$Style$classes.container, author$project$Internal$Style$classes.alignContainerBottom])))
						]),
					_List_fromArray(
						[html])) : html));
			default:
				return html;
		}
	});
var elm$html$Html$text = elm$virtual_dom$VirtualDom$text;
var author$project$Internal$Model$textElement = function (str) {
	return A2(
		elm$html$Html$div,
		_List_fromArray(
			[
				elm$html$Html$Attributes$class(
				A2(
					elm$core$String$join,
					' ',
					_List_fromArray(
						[author$project$Internal$Style$classes.any, author$project$Internal$Style$classes.text, author$project$Internal$Style$classes.widthContent, author$project$Internal$Style$classes.heightContent])))
			]),
		_List_fromArray(
			[
				elm$html$Html$text(str)
			]));
};
var author$project$Internal$Model$textElementFill = function (str) {
	return A3(
		elm$virtual_dom$VirtualDom$node,
		'div',
		_List_fromArray(
			[
				elm$html$Html$Attributes$class(
				A2(
					elm$core$String$join,
					' ',
					_List_fromArray(
						[author$project$Internal$Style$classes.any, author$project$Internal$Style$classes.text, author$project$Internal$Style$classes.widthFill, author$project$Internal$Style$classes.heightFill])))
			]),
		_List_fromArray(
			[
				elm$virtual_dom$VirtualDom$text(str)
			]));
};
var author$project$Internal$Model$createElement = F3(
	function (context, children, rendered) {
		var gatherKeyed = F2(
			function (_n8, _n9) {
				var key = _n8.a;
				var child = _n8.b;
				var htmls = _n9.a;
				var existingStyles = _n9.b;
				switch (child.$) {
					case 'Unstyled':
						var html = child.a;
						return _Utils_eq(context, author$project$Internal$Model$asParagraph) ? _Utils_Tuple2(
							A2(
								elm$core$List$cons,
								_Utils_Tuple2(
									key,
									html(context)),
								htmls),
							existingStyles) : _Utils_Tuple2(
							A2(
								elm$core$List$cons,
								_Utils_Tuple2(
									key,
									html(context)),
								htmls),
							existingStyles);
					case 'Styled':
						var styled = child.a;
						return _Utils_eq(context, author$project$Internal$Model$asParagraph) ? _Utils_Tuple2(
							A2(
								elm$core$List$cons,
								_Utils_Tuple2(
									key,
									A2(styled.html, author$project$Internal$Model$NoStyleSheet, context)),
								htmls),
							elm$core$List$isEmpty(existingStyles) ? styled.styles : _Utils_ap(styled.styles, existingStyles)) : _Utils_Tuple2(
							A2(
								elm$core$List$cons,
								_Utils_Tuple2(
									key,
									A2(styled.html, author$project$Internal$Model$NoStyleSheet, context)),
								htmls),
							elm$core$List$isEmpty(existingStyles) ? styled.styles : _Utils_ap(styled.styles, existingStyles));
					case 'Text':
						var str = child.a;
						return _Utils_Tuple2(
							A2(
								elm$core$List$cons,
								_Utils_Tuple2(
									key,
									_Utils_eq(context, author$project$Internal$Model$asEl) ? author$project$Internal$Model$textElementFill(str) : author$project$Internal$Model$textElement(str)),
								htmls),
							existingStyles);
					default:
						return _Utils_Tuple2(htmls, existingStyles);
				}
			});
		var gather = F2(
			function (child, _n6) {
				var htmls = _n6.a;
				var existingStyles = _n6.b;
				switch (child.$) {
					case 'Unstyled':
						var html = child.a;
						return _Utils_eq(context, author$project$Internal$Model$asParagraph) ? _Utils_Tuple2(
							A2(
								elm$core$List$cons,
								html(context),
								htmls),
							existingStyles) : _Utils_Tuple2(
							A2(
								elm$core$List$cons,
								html(context),
								htmls),
							existingStyles);
					case 'Styled':
						var styled = child.a;
						return _Utils_eq(context, author$project$Internal$Model$asParagraph) ? _Utils_Tuple2(
							A2(
								elm$core$List$cons,
								A2(styled.html, author$project$Internal$Model$NoStyleSheet, context),
								htmls),
							elm$core$List$isEmpty(existingStyles) ? styled.styles : _Utils_ap(styled.styles, existingStyles)) : _Utils_Tuple2(
							A2(
								elm$core$List$cons,
								A2(styled.html, author$project$Internal$Model$NoStyleSheet, context),
								htmls),
							elm$core$List$isEmpty(existingStyles) ? styled.styles : _Utils_ap(styled.styles, existingStyles));
					case 'Text':
						var str = child.a;
						return _Utils_Tuple2(
							A2(
								elm$core$List$cons,
								_Utils_eq(context, author$project$Internal$Model$asEl) ? author$project$Internal$Model$textElementFill(str) : author$project$Internal$Model$textElement(str),
								htmls),
							existingStyles);
					default:
						return _Utils_Tuple2(htmls, existingStyles);
				}
			});
		if (children.$ === 'Keyed') {
			var keyedChildren = children.a;
			var _n1 = A3(
				elm$core$List$foldr,
				gatherKeyed,
				_Utils_Tuple2(_List_Nil, _List_Nil),
				keyedChildren);
			var keyed = _n1.a;
			var styles = _n1.b;
			var newStyles = elm$core$List$isEmpty(styles) ? rendered.styles : _Utils_ap(rendered.styles, styles);
			if (!newStyles.b) {
				return author$project$Internal$Model$Unstyled(
					A5(
						author$project$Internal$Model$finalizeNode,
						rendered.has,
						rendered.node,
						rendered.attributes,
						author$project$Internal$Model$Keyed(
							A3(author$project$Internal$Model$addKeyedChildren, 'nearby-element-pls', keyed, rendered.children)),
						author$project$Internal$Model$NoStyleSheet));
			} else {
				var allStyles = newStyles;
				return author$project$Internal$Model$Styled(
					{
						html: A4(
							author$project$Internal$Model$finalizeNode,
							rendered.has,
							rendered.node,
							rendered.attributes,
							author$project$Internal$Model$Keyed(
								A3(author$project$Internal$Model$addKeyedChildren, 'nearby-element-pls', keyed, rendered.children))),
						styles: allStyles
					});
			}
		} else {
			var unkeyedChildren = children.a;
			var _n3 = A3(
				elm$core$List$foldr,
				gather,
				_Utils_Tuple2(_List_Nil, _List_Nil),
				unkeyedChildren);
			var unkeyed = _n3.a;
			var styles = _n3.b;
			var newStyles = elm$core$List$isEmpty(styles) ? rendered.styles : _Utils_ap(rendered.styles, styles);
			if (!newStyles.b) {
				return author$project$Internal$Model$Unstyled(
					A5(
						author$project$Internal$Model$finalizeNode,
						rendered.has,
						rendered.node,
						rendered.attributes,
						author$project$Internal$Model$Unkeyed(
							A2(author$project$Internal$Model$addChildren, unkeyed, rendered.children)),
						author$project$Internal$Model$NoStyleSheet));
			} else {
				var allStyles = newStyles;
				return author$project$Internal$Model$Styled(
					{
						html: A4(
							author$project$Internal$Model$finalizeNode,
							rendered.has,
							rendered.node,
							rendered.attributes,
							author$project$Internal$Model$Unkeyed(
								A2(author$project$Internal$Model$addChildren, unkeyed, rendered.children))),
						styles: allStyles
					});
			}
		}
	});
var author$project$Internal$Flag$add = F2(
	function (myFlag, _n0) {
		var one = _n0.a;
		var two = _n0.b;
		if (myFlag.$ === 'Flag') {
			var first = myFlag.a;
			return A2(author$project$Internal$Flag$Field, first | one, two);
		} else {
			var second = myFlag.a;
			return A2(author$project$Internal$Flag$Field, one, second | two);
		}
	});
var author$project$Internal$Flag$height = author$project$Internal$Flag$flag(7);
var author$project$Internal$Flag$heightContent = author$project$Internal$Flag$flag(36);
var author$project$Internal$Flag$merge = F2(
	function (_n0, _n1) {
		var one = _n0.a;
		var two = _n0.b;
		var three = _n1.a;
		var four = _n1.b;
		return A2(author$project$Internal$Flag$Field, one | three, two | four);
	});
var author$project$Internal$Flag$width = author$project$Internal$Flag$flag(6);
var author$project$Internal$Flag$widthContent = author$project$Internal$Flag$flag(38);
var author$project$Internal$Flag$xAlign = author$project$Internal$Flag$flag(30);
var author$project$Internal$Flag$yAlign = author$project$Internal$Flag$flag(29);
var author$project$Internal$Model$Embedded = F2(
	function (a, b) {
		return {$: 'Embedded', a: a, b: b};
	});
var author$project$Internal$Model$NodeName = function (a) {
	return {$: 'NodeName', a: a};
};
var author$project$Internal$Model$Single = F3(
	function (a, b, c) {
		return {$: 'Single', a: a, b: b, c: c};
	});
var author$project$Internal$Model$Transform = function (a) {
	return {$: 'Transform', a: a};
};
var author$project$Internal$Model$ChildrenBehind = function (a) {
	return {$: 'ChildrenBehind', a: a};
};
var author$project$Internal$Model$ChildrenBehindAndInFront = F2(
	function (a, b) {
		return {$: 'ChildrenBehindAndInFront', a: a, b: b};
	});
var author$project$Internal$Model$ChildrenInFront = function (a) {
	return {$: 'ChildrenInFront', a: a};
};
var author$project$Internal$Model$nearbyElement = F2(
	function (location, elem) {
		return A2(
			elm$html$Html$div,
			_List_fromArray(
				[
					elm$html$Html$Attributes$class(
					function () {
						switch (location.$) {
							case 'Above':
								return A2(
									elm$core$String$join,
									' ',
									_List_fromArray(
										[author$project$Internal$Style$classes.nearby, author$project$Internal$Style$classes.single, author$project$Internal$Style$classes.above]));
							case 'Below':
								return A2(
									elm$core$String$join,
									' ',
									_List_fromArray(
										[author$project$Internal$Style$classes.nearby, author$project$Internal$Style$classes.single, author$project$Internal$Style$classes.below]));
							case 'OnRight':
								return A2(
									elm$core$String$join,
									' ',
									_List_fromArray(
										[author$project$Internal$Style$classes.nearby, author$project$Internal$Style$classes.single, author$project$Internal$Style$classes.onRight]));
							case 'OnLeft':
								return A2(
									elm$core$String$join,
									' ',
									_List_fromArray(
										[author$project$Internal$Style$classes.nearby, author$project$Internal$Style$classes.single, author$project$Internal$Style$classes.onLeft]));
							case 'InFront':
								return A2(
									elm$core$String$join,
									' ',
									_List_fromArray(
										[author$project$Internal$Style$classes.nearby, author$project$Internal$Style$classes.single, author$project$Internal$Style$classes.inFront]));
							default:
								return A2(
									elm$core$String$join,
									' ',
									_List_fromArray(
										[author$project$Internal$Style$classes.nearby, author$project$Internal$Style$classes.single, author$project$Internal$Style$classes.behind]));
						}
					}())
				]),
			_List_fromArray(
				[
					function () {
					switch (elem.$) {
						case 'Empty':
							return elm$virtual_dom$VirtualDom$text('');
						case 'Text':
							var str = elem.a;
							return author$project$Internal$Model$textElement(str);
						case 'Unstyled':
							var html = elem.a;
							return html(author$project$Internal$Model$asEl);
						default:
							var styled = elem.a;
							return A2(styled.html, author$project$Internal$Model$NoStyleSheet, author$project$Internal$Model$asEl);
					}
				}()
				]));
	});
var author$project$Internal$Model$addNearbyElement = F3(
	function (location, elem, existing) {
		var nearby = A2(author$project$Internal$Model$nearbyElement, location, elem);
		switch (existing.$) {
			case 'NoNearbyChildren':
				if (location.$ === 'Behind') {
					return author$project$Internal$Model$ChildrenBehind(
						_List_fromArray(
							[nearby]));
				} else {
					return author$project$Internal$Model$ChildrenInFront(
						_List_fromArray(
							[nearby]));
				}
			case 'ChildrenBehind':
				var existingBehind = existing.a;
				if (location.$ === 'Behind') {
					return author$project$Internal$Model$ChildrenBehind(
						A2(elm$core$List$cons, nearby, existingBehind));
				} else {
					return A2(
						author$project$Internal$Model$ChildrenBehindAndInFront,
						existingBehind,
						_List_fromArray(
							[nearby]));
				}
			case 'ChildrenInFront':
				var existingInFront = existing.a;
				if (location.$ === 'Behind') {
					return A2(
						author$project$Internal$Model$ChildrenBehindAndInFront,
						_List_fromArray(
							[nearby]),
						existingInFront);
				} else {
					return author$project$Internal$Model$ChildrenInFront(
						A2(elm$core$List$cons, nearby, existingInFront));
				}
			default:
				var existingBehind = existing.a;
				var existingInFront = existing.b;
				if (location.$ === 'Behind') {
					return A2(
						author$project$Internal$Model$ChildrenBehindAndInFront,
						A2(elm$core$List$cons, nearby, existingBehind),
						existingInFront);
				} else {
					return A2(
						author$project$Internal$Model$ChildrenBehindAndInFront,
						existingBehind,
						A2(elm$core$List$cons, nearby, existingInFront));
				}
		}
	});
var author$project$Internal$Model$addNodeName = F2(
	function (newNode, old) {
		switch (old.$) {
			case 'Generic':
				return author$project$Internal$Model$NodeName(newNode);
			case 'NodeName':
				var name = old.a;
				return A2(author$project$Internal$Model$Embedded, name, newNode);
			default:
				var x = old.a;
				var y = old.b;
				return A2(author$project$Internal$Model$Embedded, x, y);
		}
	});
var author$project$Internal$Model$alignXName = function (align) {
	switch (align.$) {
		case 'Left':
			return author$project$Internal$Style$classes.alignedHorizontally + (' ' + author$project$Internal$Style$classes.alignLeft);
		case 'Right':
			return author$project$Internal$Style$classes.alignedHorizontally + (' ' + author$project$Internal$Style$classes.alignRight);
		default:
			return author$project$Internal$Style$classes.alignedHorizontally + (' ' + author$project$Internal$Style$classes.alignCenterX);
	}
};
var author$project$Internal$Model$alignYName = function (align) {
	switch (align.$) {
		case 'Top':
			return author$project$Internal$Style$classes.alignedVertically + (' ' + author$project$Internal$Style$classes.alignTop);
		case 'Bottom':
			return author$project$Internal$Style$classes.alignedVertically + (' ' + author$project$Internal$Style$classes.alignBottom);
		default:
			return author$project$Internal$Style$classes.alignedVertically + (' ' + author$project$Internal$Style$classes.alignCenterY);
	}
};
var author$project$Internal$Model$FullTransform = F4(
	function (a, b, c, d) {
		return {$: 'FullTransform', a: a, b: b, c: c, d: d};
	});
var author$project$Internal$Model$Moved = function (a) {
	return {$: 'Moved', a: a};
};
var author$project$Internal$Model$composeTransformation = F2(
	function (transform, component) {
		switch (transform.$) {
			case 'Untransformed':
				switch (component.$) {
					case 'MoveX':
						var x = component.a;
						return author$project$Internal$Model$Moved(
							_Utils_Tuple3(x, 0, 0));
					case 'MoveY':
						var y = component.a;
						return author$project$Internal$Model$Moved(
							_Utils_Tuple3(0, y, 0));
					case 'MoveZ':
						var z = component.a;
						return author$project$Internal$Model$Moved(
							_Utils_Tuple3(0, 0, z));
					case 'MoveXYZ':
						var xyz = component.a;
						return author$project$Internal$Model$Moved(xyz);
					case 'Rotate':
						var xyz = component.a;
						var angle = component.b;
						return A4(
							author$project$Internal$Model$FullTransform,
							_Utils_Tuple3(0, 0, 0),
							_Utils_Tuple3(1, 1, 1),
							xyz,
							angle);
					default:
						var xyz = component.a;
						return A4(
							author$project$Internal$Model$FullTransform,
							_Utils_Tuple3(0, 0, 0),
							xyz,
							_Utils_Tuple3(0, 0, 1),
							0);
				}
			case 'Moved':
				var moved = transform.a;
				var x = moved.a;
				var y = moved.b;
				var z = moved.c;
				switch (component.$) {
					case 'MoveX':
						var newX = component.a;
						return author$project$Internal$Model$Moved(
							_Utils_Tuple3(newX, y, z));
					case 'MoveY':
						var newY = component.a;
						return author$project$Internal$Model$Moved(
							_Utils_Tuple3(x, newY, z));
					case 'MoveZ':
						var newZ = component.a;
						return author$project$Internal$Model$Moved(
							_Utils_Tuple3(x, y, newZ));
					case 'MoveXYZ':
						var xyz = component.a;
						return author$project$Internal$Model$Moved(xyz);
					case 'Rotate':
						var xyz = component.a;
						var angle = component.b;
						return A4(
							author$project$Internal$Model$FullTransform,
							moved,
							_Utils_Tuple3(1, 1, 1),
							xyz,
							angle);
					default:
						var scale = component.a;
						return A4(
							author$project$Internal$Model$FullTransform,
							moved,
							scale,
							_Utils_Tuple3(0, 0, 1),
							0);
				}
			default:
				var moved = transform.a;
				var x = moved.a;
				var y = moved.b;
				var z = moved.c;
				var scaled = transform.b;
				var origin = transform.c;
				var angle = transform.d;
				switch (component.$) {
					case 'MoveX':
						var newX = component.a;
						return A4(
							author$project$Internal$Model$FullTransform,
							_Utils_Tuple3(newX, y, z),
							scaled,
							origin,
							angle);
					case 'MoveY':
						var newY = component.a;
						return A4(
							author$project$Internal$Model$FullTransform,
							_Utils_Tuple3(x, newY, z),
							scaled,
							origin,
							angle);
					case 'MoveZ':
						var newZ = component.a;
						return A4(
							author$project$Internal$Model$FullTransform,
							_Utils_Tuple3(x, y, newZ),
							scaled,
							origin,
							angle);
					case 'MoveXYZ':
						var newMove = component.a;
						return A4(author$project$Internal$Model$FullTransform, newMove, scaled, origin, angle);
					case 'Rotate':
						var newOrigin = component.a;
						var newAngle = component.b;
						return A4(author$project$Internal$Model$FullTransform, moved, scaled, newOrigin, newAngle);
					default:
						var newScale = component.a;
						return A4(author$project$Internal$Model$FullTransform, moved, newScale, origin, angle);
				}
		}
	});
var author$project$Internal$Model$renderHeight = function (h) {
	switch (h.$) {
		case 'Px':
			var px = h.a;
			var val = elm$core$String$fromInt(px);
			var name = 'height-px-' + val;
			return _Utils_Tuple3(
				author$project$Internal$Flag$none,
				name,
				_List_fromArray(
					[
						A3(author$project$Internal$Model$Single, name, 'height', val + 'px')
					]));
		case 'Content':
			return _Utils_Tuple3(
				A2(author$project$Internal$Flag$add, author$project$Internal$Flag$heightContent, author$project$Internal$Flag$none),
				author$project$Internal$Style$classes.heightContent,
				_List_Nil);
		case 'Fill':
			var portion = h.a;
			return (portion === 1) ? _Utils_Tuple3(
				A2(author$project$Internal$Flag$add, author$project$Internal$Flag$heightFill, author$project$Internal$Flag$none),
				author$project$Internal$Style$classes.heightFill,
				_List_Nil) : _Utils_Tuple3(
				A2(author$project$Internal$Flag$add, author$project$Internal$Flag$heightFill, author$project$Internal$Flag$none),
				author$project$Internal$Style$classes.heightFillPortion + (' height-fill-' + elm$core$String$fromInt(portion)),
				_List_fromArray(
					[
						A3(
						author$project$Internal$Model$Single,
						author$project$Internal$Style$classes.any + ('.' + (author$project$Internal$Style$classes.row + (' > ' + author$project$Internal$Style$dot(
							'height-fill-' + elm$core$String$fromInt(portion))))),
						'flex-grow',
						elm$core$String$fromInt(portion * 100000))
					]));
		case 'Min':
			var minSize = h.a;
			var len = h.b;
			var cls = 'min-height-' + elm$core$String$fromInt(minSize);
			var style = A3(
				author$project$Internal$Model$Single,
				cls,
				'min-height',
				elm$core$String$fromInt(minSize) + 'px');
			var _n1 = author$project$Internal$Model$renderHeight(len);
			var newFlag = _n1.a;
			var newAttrs = _n1.b;
			var newStyle = _n1.c;
			return _Utils_Tuple3(
				A2(author$project$Internal$Flag$add, author$project$Internal$Flag$heightBetween, newFlag),
				cls + (' ' + newAttrs),
				A2(elm$core$List$cons, style, newStyle));
		default:
			var maxSize = h.a;
			var len = h.b;
			var cls = 'max-height-' + elm$core$String$fromInt(maxSize);
			var style = A3(
				author$project$Internal$Model$Single,
				cls,
				'max-height',
				elm$core$String$fromInt(maxSize) + 'px');
			var _n2 = author$project$Internal$Model$renderHeight(len);
			var newFlag = _n2.a;
			var newAttrs = _n2.b;
			var newStyle = _n2.c;
			return _Utils_Tuple3(
				A2(author$project$Internal$Flag$add, author$project$Internal$Flag$heightBetween, newFlag),
				cls + (' ' + newAttrs),
				A2(elm$core$List$cons, style, newStyle));
	}
};
var author$project$Internal$Model$renderWidth = function (w) {
	switch (w.$) {
		case 'Px':
			var px = w.a;
			return _Utils_Tuple3(
				author$project$Internal$Flag$none,
				author$project$Internal$Style$classes.widthExact + (' width-px-' + elm$core$String$fromInt(px)),
				_List_fromArray(
					[
						A3(
						author$project$Internal$Model$Single,
						'width-px-' + elm$core$String$fromInt(px),
						'width',
						elm$core$String$fromInt(px) + 'px')
					]));
		case 'Content':
			return _Utils_Tuple3(
				A2(author$project$Internal$Flag$add, author$project$Internal$Flag$widthContent, author$project$Internal$Flag$none),
				author$project$Internal$Style$classes.widthContent,
				_List_Nil);
		case 'Fill':
			var portion = w.a;
			return (portion === 1) ? _Utils_Tuple3(
				A2(author$project$Internal$Flag$add, author$project$Internal$Flag$widthFill, author$project$Internal$Flag$none),
				author$project$Internal$Style$classes.widthFill,
				_List_Nil) : _Utils_Tuple3(
				A2(author$project$Internal$Flag$add, author$project$Internal$Flag$widthFill, author$project$Internal$Flag$none),
				author$project$Internal$Style$classes.widthFillPortion + (' width-fill-' + elm$core$String$fromInt(portion)),
				_List_fromArray(
					[
						A3(
						author$project$Internal$Model$Single,
						author$project$Internal$Style$classes.any + ('.' + (author$project$Internal$Style$classes.row + (' > ' + author$project$Internal$Style$dot(
							'width-fill-' + elm$core$String$fromInt(portion))))),
						'flex-grow',
						elm$core$String$fromInt(portion * 100000))
					]));
		case 'Min':
			var minSize = w.a;
			var len = w.b;
			var cls = 'min-width-' + elm$core$String$fromInt(minSize);
			var style = A3(
				author$project$Internal$Model$Single,
				cls,
				'min-width',
				elm$core$String$fromInt(minSize) + 'px');
			var _n1 = author$project$Internal$Model$renderWidth(len);
			var newFlag = _n1.a;
			var newAttrs = _n1.b;
			var newStyle = _n1.c;
			return _Utils_Tuple3(
				A2(author$project$Internal$Flag$add, author$project$Internal$Flag$widthBetween, newFlag),
				cls + (' ' + newAttrs),
				A2(elm$core$List$cons, style, newStyle));
		default:
			var maxSize = w.a;
			var len = w.b;
			var cls = 'max-width-' + elm$core$String$fromInt(maxSize);
			var style = A3(
				author$project$Internal$Model$Single,
				cls,
				'max-width',
				elm$core$String$fromInt(maxSize) + 'px');
			var _n2 = author$project$Internal$Model$renderWidth(len);
			var newFlag = _n2.a;
			var newAttrs = _n2.b;
			var newStyle = _n2.c;
			return _Utils_Tuple3(
				A2(author$project$Internal$Flag$add, author$project$Internal$Flag$widthBetween, newFlag),
				cls + (' ' + newAttrs),
				A2(elm$core$List$cons, style, newStyle));
	}
};
var author$project$Internal$Flag$borderWidth = author$project$Internal$Flag$flag(27);
var elm$core$Basics$ge = _Utils_ge;
var author$project$Internal$Model$skippable = F2(
	function (flag, style) {
		if (_Utils_eq(flag, author$project$Internal$Flag$borderWidth)) {
			if (style.$ === 'Single') {
				var val = style.c;
				switch (val) {
					case '0px':
						return true;
					case '1px':
						return true;
					case '2px':
						return true;
					case '3px':
						return true;
					case '4px':
						return true;
					case '5px':
						return true;
					case '6px':
						return true;
					default:
						return false;
				}
			} else {
				return false;
			}
		} else {
			switch (style.$) {
				case 'FontSize':
					var i = style.a;
					return (i >= 8) && (i <= 32);
				case 'PaddingStyle':
					var name = style.a;
					var t = style.b;
					var r = style.c;
					var b = style.d;
					var l = style.e;
					return _Utils_eq(t, b) && (_Utils_eq(t, r) && (_Utils_eq(t, l) && ((t >= 0) && (t <= 24))));
				default:
					return false;
			}
		}
	});
var elm$virtual_dom$VirtualDom$attribute = F2(
	function (key, value) {
		return A2(
			_VirtualDom_attribute,
			_VirtualDom_noOnOrFormAction(key),
			_VirtualDom_noJavaScriptOrHtmlUri(value));
	});
var author$project$Internal$Model$gatherAttrRecursive = F8(
	function (classes, node, has, transform, styles, attrs, children, elementAttrs) {
		gatherAttrRecursive:
		while (true) {
			if (!elementAttrs.b) {
				var _n1 = author$project$Internal$Model$transformClass(transform);
				if (_n1.$ === 'Nothing') {
					return {
						attributes: A2(
							elm$core$List$cons,
							elm$html$Html$Attributes$class(classes),
							attrs),
						children: children,
						has: has,
						node: node,
						styles: styles
					};
				} else {
					var _class = _n1.a;
					return {
						attributes: A2(
							elm$core$List$cons,
							elm$html$Html$Attributes$class(classes + (' ' + _class)),
							attrs),
						children: children,
						has: has,
						node: node,
						styles: A2(
							elm$core$List$cons,
							author$project$Internal$Model$Transform(transform),
							styles)
					};
				}
			} else {
				var attribute = elementAttrs.a;
				var remaining = elementAttrs.b;
				switch (attribute.$) {
					case 'NoAttribute':
						var $temp$classes = classes,
							$temp$node = node,
							$temp$has = has,
							$temp$transform = transform,
							$temp$styles = styles,
							$temp$attrs = attrs,
							$temp$children = children,
							$temp$elementAttrs = remaining;
						classes = $temp$classes;
						node = $temp$node;
						has = $temp$has;
						transform = $temp$transform;
						styles = $temp$styles;
						attrs = $temp$attrs;
						children = $temp$children;
						elementAttrs = $temp$elementAttrs;
						continue gatherAttrRecursive;
					case 'Class':
						var flag = attribute.a;
						var exactClassName = attribute.b;
						if (A2(author$project$Internal$Flag$present, flag, has)) {
							var $temp$classes = classes,
								$temp$node = node,
								$temp$has = has,
								$temp$transform = transform,
								$temp$styles = styles,
								$temp$attrs = attrs,
								$temp$children = children,
								$temp$elementAttrs = remaining;
							classes = $temp$classes;
							node = $temp$node;
							has = $temp$has;
							transform = $temp$transform;
							styles = $temp$styles;
							attrs = $temp$attrs;
							children = $temp$children;
							elementAttrs = $temp$elementAttrs;
							continue gatherAttrRecursive;
						} else {
							var $temp$classes = exactClassName + (' ' + classes),
								$temp$node = node,
								$temp$has = A2(author$project$Internal$Flag$add, flag, has),
								$temp$transform = transform,
								$temp$styles = styles,
								$temp$attrs = attrs,
								$temp$children = children,
								$temp$elementAttrs = remaining;
							classes = $temp$classes;
							node = $temp$node;
							has = $temp$has;
							transform = $temp$transform;
							styles = $temp$styles;
							attrs = $temp$attrs;
							children = $temp$children;
							elementAttrs = $temp$elementAttrs;
							continue gatherAttrRecursive;
						}
					case 'Attr':
						var actualAttribute = attribute.a;
						var $temp$classes = classes,
							$temp$node = node,
							$temp$has = has,
							$temp$transform = transform,
							$temp$styles = styles,
							$temp$attrs = A2(elm$core$List$cons, actualAttribute, attrs),
							$temp$children = children,
							$temp$elementAttrs = remaining;
						classes = $temp$classes;
						node = $temp$node;
						has = $temp$has;
						transform = $temp$transform;
						styles = $temp$styles;
						attrs = $temp$attrs;
						children = $temp$children;
						elementAttrs = $temp$elementAttrs;
						continue gatherAttrRecursive;
					case 'StyleClass':
						var flag = attribute.a;
						var style = attribute.b;
						if (A2(author$project$Internal$Flag$present, flag, has)) {
							var $temp$classes = classes,
								$temp$node = node,
								$temp$has = has,
								$temp$transform = transform,
								$temp$styles = styles,
								$temp$attrs = attrs,
								$temp$children = children,
								$temp$elementAttrs = remaining;
							classes = $temp$classes;
							node = $temp$node;
							has = $temp$has;
							transform = $temp$transform;
							styles = $temp$styles;
							attrs = $temp$attrs;
							children = $temp$children;
							elementAttrs = $temp$elementAttrs;
							continue gatherAttrRecursive;
						} else {
							if (A2(author$project$Internal$Model$skippable, flag, style)) {
								var $temp$classes = author$project$Internal$Model$getStyleName(style) + (' ' + classes),
									$temp$node = node,
									$temp$has = A2(author$project$Internal$Flag$add, flag, has),
									$temp$transform = transform,
									$temp$styles = styles,
									$temp$attrs = attrs,
									$temp$children = children,
									$temp$elementAttrs = remaining;
								classes = $temp$classes;
								node = $temp$node;
								has = $temp$has;
								transform = $temp$transform;
								styles = $temp$styles;
								attrs = $temp$attrs;
								children = $temp$children;
								elementAttrs = $temp$elementAttrs;
								continue gatherAttrRecursive;
							} else {
								var $temp$classes = author$project$Internal$Model$getStyleName(style) + (' ' + classes),
									$temp$node = node,
									$temp$has = A2(author$project$Internal$Flag$add, flag, has),
									$temp$transform = transform,
									$temp$styles = A2(elm$core$List$cons, style, styles),
									$temp$attrs = attrs,
									$temp$children = children,
									$temp$elementAttrs = remaining;
								classes = $temp$classes;
								node = $temp$node;
								has = $temp$has;
								transform = $temp$transform;
								styles = $temp$styles;
								attrs = $temp$attrs;
								children = $temp$children;
								elementAttrs = $temp$elementAttrs;
								continue gatherAttrRecursive;
							}
						}
					case 'TransformComponent':
						var flag = attribute.a;
						var component = attribute.b;
						var $temp$classes = classes,
							$temp$node = node,
							$temp$has = A2(author$project$Internal$Flag$add, flag, has),
							$temp$transform = A2(author$project$Internal$Model$composeTransformation, transform, component),
							$temp$styles = styles,
							$temp$attrs = attrs,
							$temp$children = children,
							$temp$elementAttrs = remaining;
						classes = $temp$classes;
						node = $temp$node;
						has = $temp$has;
						transform = $temp$transform;
						styles = $temp$styles;
						attrs = $temp$attrs;
						children = $temp$children;
						elementAttrs = $temp$elementAttrs;
						continue gatherAttrRecursive;
					case 'Width':
						var width = attribute.a;
						if (A2(author$project$Internal$Flag$present, author$project$Internal$Flag$width, has)) {
							var $temp$classes = classes,
								$temp$node = node,
								$temp$has = has,
								$temp$transform = transform,
								$temp$styles = styles,
								$temp$attrs = attrs,
								$temp$children = children,
								$temp$elementAttrs = remaining;
							classes = $temp$classes;
							node = $temp$node;
							has = $temp$has;
							transform = $temp$transform;
							styles = $temp$styles;
							attrs = $temp$attrs;
							children = $temp$children;
							elementAttrs = $temp$elementAttrs;
							continue gatherAttrRecursive;
						} else {
							switch (width.$) {
								case 'Px':
									var px = width.a;
									var $temp$classes = (author$project$Internal$Style$classes.widthExact + (' width-px-' + elm$core$String$fromInt(px))) + (' ' + classes),
										$temp$node = node,
										$temp$has = A2(author$project$Internal$Flag$add, author$project$Internal$Flag$width, has),
										$temp$transform = transform,
										$temp$styles = A2(
										elm$core$List$cons,
										A3(
											author$project$Internal$Model$Single,
											'width-px-' + elm$core$String$fromInt(px),
											'width',
											elm$core$String$fromInt(px) + 'px'),
										styles),
										$temp$attrs = attrs,
										$temp$children = children,
										$temp$elementAttrs = remaining;
									classes = $temp$classes;
									node = $temp$node;
									has = $temp$has;
									transform = $temp$transform;
									styles = $temp$styles;
									attrs = $temp$attrs;
									children = $temp$children;
									elementAttrs = $temp$elementAttrs;
									continue gatherAttrRecursive;
								case 'Content':
									var $temp$classes = classes + (' ' + author$project$Internal$Style$classes.widthContent),
										$temp$node = node,
										$temp$has = A2(
										author$project$Internal$Flag$add,
										author$project$Internal$Flag$widthContent,
										A2(author$project$Internal$Flag$add, author$project$Internal$Flag$width, has)),
										$temp$transform = transform,
										$temp$styles = styles,
										$temp$attrs = attrs,
										$temp$children = children,
										$temp$elementAttrs = remaining;
									classes = $temp$classes;
									node = $temp$node;
									has = $temp$has;
									transform = $temp$transform;
									styles = $temp$styles;
									attrs = $temp$attrs;
									children = $temp$children;
									elementAttrs = $temp$elementAttrs;
									continue gatherAttrRecursive;
								case 'Fill':
									var portion = width.a;
									if (portion === 1) {
										var $temp$classes = classes + (' ' + author$project$Internal$Style$classes.widthFill),
											$temp$node = node,
											$temp$has = A2(
											author$project$Internal$Flag$add,
											author$project$Internal$Flag$widthFill,
											A2(author$project$Internal$Flag$add, author$project$Internal$Flag$width, has)),
											$temp$transform = transform,
											$temp$styles = styles,
											$temp$attrs = attrs,
											$temp$children = children,
											$temp$elementAttrs = remaining;
										classes = $temp$classes;
										node = $temp$node;
										has = $temp$has;
										transform = $temp$transform;
										styles = $temp$styles;
										attrs = $temp$attrs;
										children = $temp$children;
										elementAttrs = $temp$elementAttrs;
										continue gatherAttrRecursive;
									} else {
										var $temp$classes = classes + (' ' + (author$project$Internal$Style$classes.widthFillPortion + (' width-fill-' + elm$core$String$fromInt(portion)))),
											$temp$node = node,
											$temp$has = A2(
											author$project$Internal$Flag$add,
											author$project$Internal$Flag$widthFill,
											A2(author$project$Internal$Flag$add, author$project$Internal$Flag$width, has)),
											$temp$transform = transform,
											$temp$styles = A2(
											elm$core$List$cons,
											A3(
												author$project$Internal$Model$Single,
												author$project$Internal$Style$classes.any + ('.' + (author$project$Internal$Style$classes.row + (' > ' + author$project$Internal$Style$dot(
													'width-fill-' + elm$core$String$fromInt(portion))))),
												'flex-grow',
												elm$core$String$fromInt(portion * 100000)),
											styles),
											$temp$attrs = attrs,
											$temp$children = children,
											$temp$elementAttrs = remaining;
										classes = $temp$classes;
										node = $temp$node;
										has = $temp$has;
										transform = $temp$transform;
										styles = $temp$styles;
										attrs = $temp$attrs;
										children = $temp$children;
										elementAttrs = $temp$elementAttrs;
										continue gatherAttrRecursive;
									}
								default:
									var _n4 = author$project$Internal$Model$renderWidth(width);
									var addToFlags = _n4.a;
									var newClass = _n4.b;
									var newStyles = _n4.c;
									var $temp$classes = classes + (' ' + newClass),
										$temp$node = node,
										$temp$has = A2(author$project$Internal$Flag$merge, addToFlags, has),
										$temp$transform = transform,
										$temp$styles = _Utils_ap(newStyles, styles),
										$temp$attrs = attrs,
										$temp$children = children,
										$temp$elementAttrs = remaining;
									classes = $temp$classes;
									node = $temp$node;
									has = $temp$has;
									transform = $temp$transform;
									styles = $temp$styles;
									attrs = $temp$attrs;
									children = $temp$children;
									elementAttrs = $temp$elementAttrs;
									continue gatherAttrRecursive;
							}
						}
					case 'Height':
						var height = attribute.a;
						if (A2(author$project$Internal$Flag$present, author$project$Internal$Flag$height, has)) {
							var $temp$classes = classes,
								$temp$node = node,
								$temp$has = has,
								$temp$transform = transform,
								$temp$styles = styles,
								$temp$attrs = attrs,
								$temp$children = children,
								$temp$elementAttrs = remaining;
							classes = $temp$classes;
							node = $temp$node;
							has = $temp$has;
							transform = $temp$transform;
							styles = $temp$styles;
							attrs = $temp$attrs;
							children = $temp$children;
							elementAttrs = $temp$elementAttrs;
							continue gatherAttrRecursive;
						} else {
							switch (height.$) {
								case 'Px':
									var px = height.a;
									var val = elm$core$String$fromInt(px) + 'px';
									var name = 'height-px-' + val;
									var $temp$classes = name + (' ' + classes),
										$temp$node = node,
										$temp$has = A2(author$project$Internal$Flag$add, author$project$Internal$Flag$height, has),
										$temp$transform = transform,
										$temp$styles = A2(
										elm$core$List$cons,
										A3(author$project$Internal$Model$Single, name, 'height ', val),
										styles),
										$temp$attrs = attrs,
										$temp$children = children,
										$temp$elementAttrs = remaining;
									classes = $temp$classes;
									node = $temp$node;
									has = $temp$has;
									transform = $temp$transform;
									styles = $temp$styles;
									attrs = $temp$attrs;
									children = $temp$children;
									elementAttrs = $temp$elementAttrs;
									continue gatherAttrRecursive;
								case 'Content':
									var $temp$classes = author$project$Internal$Style$classes.heightContent + (' ' + classes),
										$temp$node = node,
										$temp$has = A2(
										author$project$Internal$Flag$add,
										author$project$Internal$Flag$heightContent,
										A2(author$project$Internal$Flag$add, author$project$Internal$Flag$height, has)),
										$temp$transform = transform,
										$temp$styles = styles,
										$temp$attrs = attrs,
										$temp$children = children,
										$temp$elementAttrs = remaining;
									classes = $temp$classes;
									node = $temp$node;
									has = $temp$has;
									transform = $temp$transform;
									styles = $temp$styles;
									attrs = $temp$attrs;
									children = $temp$children;
									elementAttrs = $temp$elementAttrs;
									continue gatherAttrRecursive;
								case 'Fill':
									var portion = height.a;
									if (portion === 1) {
										var $temp$classes = author$project$Internal$Style$classes.heightFill + (' ' + classes),
											$temp$node = node,
											$temp$has = A2(
											author$project$Internal$Flag$add,
											author$project$Internal$Flag$heightFill,
											A2(author$project$Internal$Flag$add, author$project$Internal$Flag$height, has)),
											$temp$transform = transform,
											$temp$styles = styles,
											$temp$attrs = attrs,
											$temp$children = children,
											$temp$elementAttrs = remaining;
										classes = $temp$classes;
										node = $temp$node;
										has = $temp$has;
										transform = $temp$transform;
										styles = $temp$styles;
										attrs = $temp$attrs;
										children = $temp$children;
										elementAttrs = $temp$elementAttrs;
										continue gatherAttrRecursive;
									} else {
										var $temp$classes = classes + (' ' + (author$project$Internal$Style$classes.heightFillPortion + (' height-fill-' + elm$core$String$fromInt(portion)))),
											$temp$node = node,
											$temp$has = A2(
											author$project$Internal$Flag$add,
											author$project$Internal$Flag$heightFill,
											A2(author$project$Internal$Flag$add, author$project$Internal$Flag$height, has)),
											$temp$transform = transform,
											$temp$styles = A2(
											elm$core$List$cons,
											A3(
												author$project$Internal$Model$Single,
												author$project$Internal$Style$classes.any + ('.' + (author$project$Internal$Style$classes.column + (' > ' + author$project$Internal$Style$dot(
													'height-fill-' + elm$core$String$fromInt(portion))))),
												'flex-grow',
												elm$core$String$fromInt(portion * 100000)),
											styles),
											$temp$attrs = attrs,
											$temp$children = children,
											$temp$elementAttrs = remaining;
										classes = $temp$classes;
										node = $temp$node;
										has = $temp$has;
										transform = $temp$transform;
										styles = $temp$styles;
										attrs = $temp$attrs;
										children = $temp$children;
										elementAttrs = $temp$elementAttrs;
										continue gatherAttrRecursive;
									}
								default:
									var _n6 = author$project$Internal$Model$renderHeight(height);
									var addToFlags = _n6.a;
									var newClass = _n6.b;
									var newStyles = _n6.c;
									var $temp$classes = classes + (' ' + newClass),
										$temp$node = node,
										$temp$has = A2(author$project$Internal$Flag$merge, addToFlags, has),
										$temp$transform = transform,
										$temp$styles = _Utils_ap(newStyles, styles),
										$temp$attrs = attrs,
										$temp$children = children,
										$temp$elementAttrs = remaining;
									classes = $temp$classes;
									node = $temp$node;
									has = $temp$has;
									transform = $temp$transform;
									styles = $temp$styles;
									attrs = $temp$attrs;
									children = $temp$children;
									elementAttrs = $temp$elementAttrs;
									continue gatherAttrRecursive;
							}
						}
					case 'Describe':
						var description = attribute.a;
						switch (description.$) {
							case 'Main':
								var $temp$classes = classes,
									$temp$node = A2(author$project$Internal$Model$addNodeName, 'main', node),
									$temp$has = has,
									$temp$transform = transform,
									$temp$styles = styles,
									$temp$attrs = attrs,
									$temp$children = children,
									$temp$elementAttrs = remaining;
								classes = $temp$classes;
								node = $temp$node;
								has = $temp$has;
								transform = $temp$transform;
								styles = $temp$styles;
								attrs = $temp$attrs;
								children = $temp$children;
								elementAttrs = $temp$elementAttrs;
								continue gatherAttrRecursive;
							case 'Navigation':
								var $temp$classes = classes,
									$temp$node = A2(author$project$Internal$Model$addNodeName, 'nav', node),
									$temp$has = has,
									$temp$transform = transform,
									$temp$styles = styles,
									$temp$attrs = attrs,
									$temp$children = children,
									$temp$elementAttrs = remaining;
								classes = $temp$classes;
								node = $temp$node;
								has = $temp$has;
								transform = $temp$transform;
								styles = $temp$styles;
								attrs = $temp$attrs;
								children = $temp$children;
								elementAttrs = $temp$elementAttrs;
								continue gatherAttrRecursive;
							case 'ContentInfo':
								var $temp$classes = classes,
									$temp$node = A2(author$project$Internal$Model$addNodeName, 'footer', node),
									$temp$has = has,
									$temp$transform = transform,
									$temp$styles = styles,
									$temp$attrs = attrs,
									$temp$children = children,
									$temp$elementAttrs = remaining;
								classes = $temp$classes;
								node = $temp$node;
								has = $temp$has;
								transform = $temp$transform;
								styles = $temp$styles;
								attrs = $temp$attrs;
								children = $temp$children;
								elementAttrs = $temp$elementAttrs;
								continue gatherAttrRecursive;
							case 'Complementary':
								var $temp$classes = classes,
									$temp$node = A2(author$project$Internal$Model$addNodeName, 'aside', node),
									$temp$has = has,
									$temp$transform = transform,
									$temp$styles = styles,
									$temp$attrs = attrs,
									$temp$children = children,
									$temp$elementAttrs = remaining;
								classes = $temp$classes;
								node = $temp$node;
								has = $temp$has;
								transform = $temp$transform;
								styles = $temp$styles;
								attrs = $temp$attrs;
								children = $temp$children;
								elementAttrs = $temp$elementAttrs;
								continue gatherAttrRecursive;
							case 'Heading':
								var i = description.a;
								if (i <= 1) {
									var $temp$classes = classes,
										$temp$node = A2(author$project$Internal$Model$addNodeName, 'h1', node),
										$temp$has = has,
										$temp$transform = transform,
										$temp$styles = styles,
										$temp$attrs = attrs,
										$temp$children = children,
										$temp$elementAttrs = remaining;
									classes = $temp$classes;
									node = $temp$node;
									has = $temp$has;
									transform = $temp$transform;
									styles = $temp$styles;
									attrs = $temp$attrs;
									children = $temp$children;
									elementAttrs = $temp$elementAttrs;
									continue gatherAttrRecursive;
								} else {
									if (i < 7) {
										var $temp$classes = classes,
											$temp$node = A2(
											author$project$Internal$Model$addNodeName,
											'h' + elm$core$String$fromInt(i),
											node),
											$temp$has = has,
											$temp$transform = transform,
											$temp$styles = styles,
											$temp$attrs = attrs,
											$temp$children = children,
											$temp$elementAttrs = remaining;
										classes = $temp$classes;
										node = $temp$node;
										has = $temp$has;
										transform = $temp$transform;
										styles = $temp$styles;
										attrs = $temp$attrs;
										children = $temp$children;
										elementAttrs = $temp$elementAttrs;
										continue gatherAttrRecursive;
									} else {
										var $temp$classes = classes,
											$temp$node = A2(author$project$Internal$Model$addNodeName, 'h6', node),
											$temp$has = has,
											$temp$transform = transform,
											$temp$styles = styles,
											$temp$attrs = attrs,
											$temp$children = children,
											$temp$elementAttrs = remaining;
										classes = $temp$classes;
										node = $temp$node;
										has = $temp$has;
										transform = $temp$transform;
										styles = $temp$styles;
										attrs = $temp$attrs;
										children = $temp$children;
										elementAttrs = $temp$elementAttrs;
										continue gatherAttrRecursive;
									}
								}
							case 'Paragraph':
								var newNode = function () {
									switch (node.$) {
										case 'Generic':
											return author$project$Internal$Model$NodeName('p');
										case 'NodeName':
											var name = node.a;
											return author$project$Internal$Model$NodeName(name);
										default:
											var x = node.a;
											var y = node.b;
											return A2(author$project$Internal$Model$Embedded, x, y);
									}
								}();
								var $temp$classes = classes,
									$temp$node = newNode,
									$temp$has = has,
									$temp$transform = transform,
									$temp$styles = styles,
									$temp$attrs = attrs,
									$temp$children = children,
									$temp$elementAttrs = remaining;
								classes = $temp$classes;
								node = $temp$node;
								has = $temp$has;
								transform = $temp$transform;
								styles = $temp$styles;
								attrs = $temp$attrs;
								children = $temp$children;
								elementAttrs = $temp$elementAttrs;
								continue gatherAttrRecursive;
							case 'Button':
								var $temp$classes = classes,
									$temp$node = node,
									$temp$has = has,
									$temp$transform = transform,
									$temp$styles = styles,
									$temp$attrs = A2(
									elm$core$List$cons,
									A2(elm$virtual_dom$VirtualDom$attribute, 'role', 'button'),
									attrs),
									$temp$children = children,
									$temp$elementAttrs = remaining;
								classes = $temp$classes;
								node = $temp$node;
								has = $temp$has;
								transform = $temp$transform;
								styles = $temp$styles;
								attrs = $temp$attrs;
								children = $temp$children;
								elementAttrs = $temp$elementAttrs;
								continue gatherAttrRecursive;
							case 'Label':
								var label = description.a;
								var $temp$classes = classes,
									$temp$node = node,
									$temp$has = has,
									$temp$transform = transform,
									$temp$styles = styles,
									$temp$attrs = A2(
									elm$core$List$cons,
									A2(elm$virtual_dom$VirtualDom$attribute, 'aria-label', label),
									attrs),
									$temp$children = children,
									$temp$elementAttrs = remaining;
								classes = $temp$classes;
								node = $temp$node;
								has = $temp$has;
								transform = $temp$transform;
								styles = $temp$styles;
								attrs = $temp$attrs;
								children = $temp$children;
								elementAttrs = $temp$elementAttrs;
								continue gatherAttrRecursive;
							case 'LivePolite':
								var $temp$classes = classes,
									$temp$node = node,
									$temp$has = has,
									$temp$transform = transform,
									$temp$styles = styles,
									$temp$attrs = A2(
									elm$core$List$cons,
									A2(elm$virtual_dom$VirtualDom$attribute, 'aria-live', 'polite'),
									attrs),
									$temp$children = children,
									$temp$elementAttrs = remaining;
								classes = $temp$classes;
								node = $temp$node;
								has = $temp$has;
								transform = $temp$transform;
								styles = $temp$styles;
								attrs = $temp$attrs;
								children = $temp$children;
								elementAttrs = $temp$elementAttrs;
								continue gatherAttrRecursive;
							default:
								var $temp$classes = classes,
									$temp$node = node,
									$temp$has = has,
									$temp$transform = transform,
									$temp$styles = styles,
									$temp$attrs = A2(
									elm$core$List$cons,
									A2(elm$virtual_dom$VirtualDom$attribute, 'aria-live', 'assertive'),
									attrs),
									$temp$children = children,
									$temp$elementAttrs = remaining;
								classes = $temp$classes;
								node = $temp$node;
								has = $temp$has;
								transform = $temp$transform;
								styles = $temp$styles;
								attrs = $temp$attrs;
								children = $temp$children;
								elementAttrs = $temp$elementAttrs;
								continue gatherAttrRecursive;
						}
					case 'Nearby':
						var location = attribute.a;
						var elem = attribute.b;
						var newStyles = function () {
							switch (elem.$) {
								case 'Empty':
									return styles;
								case 'Text':
									var str = elem.a;
									return styles;
								case 'Unstyled':
									var html = elem.a;
									return styles;
								default:
									var styled = elem.a;
									return _Utils_ap(styles, styled.styles);
							}
						}();
						var $temp$classes = classes,
							$temp$node = node,
							$temp$has = has,
							$temp$transform = transform,
							$temp$styles = newStyles,
							$temp$attrs = attrs,
							$temp$children = A3(author$project$Internal$Model$addNearbyElement, location, elem, children),
							$temp$elementAttrs = remaining;
						classes = $temp$classes;
						node = $temp$node;
						has = $temp$has;
						transform = $temp$transform;
						styles = $temp$styles;
						attrs = $temp$attrs;
						children = $temp$children;
						elementAttrs = $temp$elementAttrs;
						continue gatherAttrRecursive;
					case 'AlignX':
						var x = attribute.a;
						if (A2(author$project$Internal$Flag$present, author$project$Internal$Flag$xAlign, has)) {
							var $temp$classes = classes,
								$temp$node = node,
								$temp$has = has,
								$temp$transform = transform,
								$temp$styles = styles,
								$temp$attrs = attrs,
								$temp$children = children,
								$temp$elementAttrs = remaining;
							classes = $temp$classes;
							node = $temp$node;
							has = $temp$has;
							transform = $temp$transform;
							styles = $temp$styles;
							attrs = $temp$attrs;
							children = $temp$children;
							elementAttrs = $temp$elementAttrs;
							continue gatherAttrRecursive;
						} else {
							var $temp$classes = author$project$Internal$Model$alignXName(x) + (' ' + classes),
								$temp$node = node,
								$temp$has = function (flags) {
								switch (x.$) {
									case 'CenterX':
										return A2(author$project$Internal$Flag$add, author$project$Internal$Flag$centerX, flags);
									case 'Right':
										return A2(author$project$Internal$Flag$add, author$project$Internal$Flag$alignRight, flags);
									default:
										return flags;
								}
							}(
								A2(author$project$Internal$Flag$add, author$project$Internal$Flag$xAlign, has)),
								$temp$transform = transform,
								$temp$styles = styles,
								$temp$attrs = attrs,
								$temp$children = children,
								$temp$elementAttrs = remaining;
							classes = $temp$classes;
							node = $temp$node;
							has = $temp$has;
							transform = $temp$transform;
							styles = $temp$styles;
							attrs = $temp$attrs;
							children = $temp$children;
							elementAttrs = $temp$elementAttrs;
							continue gatherAttrRecursive;
						}
					default:
						var y = attribute.a;
						if (A2(author$project$Internal$Flag$present, author$project$Internal$Flag$yAlign, has)) {
							var $temp$classes = classes,
								$temp$node = node,
								$temp$has = has,
								$temp$transform = transform,
								$temp$styles = styles,
								$temp$attrs = attrs,
								$temp$children = children,
								$temp$elementAttrs = remaining;
							classes = $temp$classes;
							node = $temp$node;
							has = $temp$has;
							transform = $temp$transform;
							styles = $temp$styles;
							attrs = $temp$attrs;
							children = $temp$children;
							elementAttrs = $temp$elementAttrs;
							continue gatherAttrRecursive;
						} else {
							var $temp$classes = author$project$Internal$Model$alignYName(y) + (' ' + classes),
								$temp$node = node,
								$temp$has = function (flags) {
								switch (y.$) {
									case 'CenterY':
										return A2(author$project$Internal$Flag$add, author$project$Internal$Flag$centerY, flags);
									case 'Bottom':
										return A2(author$project$Internal$Flag$add, author$project$Internal$Flag$alignBottom, flags);
									default:
										return flags;
								}
							}(
								A2(author$project$Internal$Flag$add, author$project$Internal$Flag$yAlign, has)),
								$temp$transform = transform,
								$temp$styles = styles,
								$temp$attrs = attrs,
								$temp$children = children,
								$temp$elementAttrs = remaining;
							classes = $temp$classes;
							node = $temp$node;
							has = $temp$has;
							transform = $temp$transform;
							styles = $temp$styles;
							attrs = $temp$attrs;
							children = $temp$children;
							elementAttrs = $temp$elementAttrs;
							continue gatherAttrRecursive;
						}
				}
			}
		}
	});
var author$project$Internal$Model$Untransformed = {$: 'Untransformed'};
var author$project$Internal$Model$untransformed = author$project$Internal$Model$Untransformed;
var author$project$Internal$Model$element = F4(
	function (context, node, attributes, children) {
		return A3(
			author$project$Internal$Model$createElement,
			context,
			children,
			A8(
				author$project$Internal$Model$gatherAttrRecursive,
				author$project$Internal$Model$contextClasses(context),
				node,
				author$project$Internal$Flag$none,
				author$project$Internal$Model$untransformed,
				_List_Nil,
				_List_Nil,
				author$project$Internal$Model$NoNearbyChildren,
				elm$core$List$reverse(attributes)));
	});
var author$project$Internal$Model$Attr = function (a) {
	return {$: 'Attr', a: a};
};
var author$project$Internal$Model$htmlClass = function (cls) {
	return author$project$Internal$Model$Attr(
		elm$html$Html$Attributes$class(cls));
};
var author$project$Element$column = F2(
	function (attrs, children) {
		return A4(
			author$project$Internal$Model$element,
			author$project$Internal$Model$asColumn,
			author$project$Internal$Model$div,
			A2(
				elm$core$List$cons,
				author$project$Internal$Model$htmlClass(author$project$Internal$Style$classes.contentTop + (' ' + author$project$Internal$Style$classes.contentLeft)),
				A2(
					elm$core$List$cons,
					author$project$Element$height(author$project$Element$shrink),
					A2(
						elm$core$List$cons,
						author$project$Element$width(author$project$Element$shrink),
						attrs))),
			author$project$Internal$Model$Unkeyed(children));
	});
var author$project$Internal$Model$OnlyDynamic = F2(
	function (a, b) {
		return {$: 'OnlyDynamic', a: a, b: b};
	});
var author$project$Internal$Model$StaticRootAndDynamic = F2(
	function (a, b) {
		return {$: 'StaticRootAndDynamic', a: a, b: b};
	});
var author$project$Internal$Model$AllowHover = {$: 'AllowHover'};
var author$project$Internal$Model$Layout = {$: 'Layout'};
var author$project$Internal$Model$Rgba = F4(
	function (a, b, c, d) {
		return {$: 'Rgba', a: a, b: b, c: c, d: d};
	});
var author$project$Internal$Model$focusDefaultStyle = {
	backgroundColor: elm$core$Maybe$Nothing,
	borderColor: elm$core$Maybe$Nothing,
	shadow: elm$core$Maybe$Just(
		{
			blur: 3,
			color: A4(author$project$Internal$Model$Rgba, 155 / 255, 203 / 255, 1, 1),
			offset: _Utils_Tuple2(0, 0),
			size: 3
		})
};
var author$project$Internal$Model$optionsToRecord = function (options) {
	var combine = F2(
		function (opt, record) {
			switch (opt.$) {
				case 'HoverOption':
					var hoverable = opt.a;
					var _n4 = record.hover;
					if (_n4.$ === 'Nothing') {
						return _Utils_update(
							record,
							{
								hover: elm$core$Maybe$Just(hoverable)
							});
					} else {
						return record;
					}
				case 'FocusStyleOption':
					var focusStyle = opt.a;
					var _n5 = record.focus;
					if (_n5.$ === 'Nothing') {
						return _Utils_update(
							record,
							{
								focus: elm$core$Maybe$Just(focusStyle)
							});
					} else {
						return record;
					}
				default:
					var renderMode = opt.a;
					var _n6 = record.mode;
					if (_n6.$ === 'Nothing') {
						return _Utils_update(
							record,
							{
								mode: elm$core$Maybe$Just(renderMode)
							});
					} else {
						return record;
					}
			}
		});
	var andFinally = function (record) {
		return {
			focus: function () {
				var _n0 = record.focus;
				if (_n0.$ === 'Nothing') {
					return author$project$Internal$Model$focusDefaultStyle;
				} else {
					var focusable = _n0.a;
					return focusable;
				}
			}(),
			hover: function () {
				var _n1 = record.hover;
				if (_n1.$ === 'Nothing') {
					return author$project$Internal$Model$AllowHover;
				} else {
					var hoverable = _n1.a;
					return hoverable;
				}
			}(),
			mode: function () {
				var _n2 = record.mode;
				if (_n2.$ === 'Nothing') {
					return author$project$Internal$Model$Layout;
				} else {
					var actualMode = _n2.a;
					return actualMode;
				}
			}()
		};
	};
	return andFinally(
		A3(
			elm$core$List$foldr,
			combine,
			{focus: elm$core$Maybe$Nothing, hover: elm$core$Maybe$Nothing, mode: elm$core$Maybe$Nothing},
			options));
};
var author$project$Internal$Model$toHtml = F2(
	function (mode, el) {
		switch (el.$) {
			case 'Unstyled':
				var html = el.a;
				return html(author$project$Internal$Model$asEl);
			case 'Styled':
				var styles = el.a.styles;
				var html = el.a.html;
				return A2(
					html,
					mode(styles),
					author$project$Internal$Model$asEl);
			case 'Text':
				var text = el.a;
				return author$project$Internal$Model$textElement(text);
			default:
				return author$project$Internal$Model$textElement('');
		}
	});
var author$project$Internal$Model$renderRoot = F3(
	function (optionList, attributes, child) {
		var options = author$project$Internal$Model$optionsToRecord(optionList);
		var embedStyle = function () {
			var _n0 = options.mode;
			if (_n0.$ === 'NoStaticStyleSheet') {
				return author$project$Internal$Model$OnlyDynamic(options);
			} else {
				return author$project$Internal$Model$StaticRootAndDynamic(options);
			}
		}();
		return A2(
			author$project$Internal$Model$toHtml,
			embedStyle,
			A4(
				author$project$Internal$Model$element,
				author$project$Internal$Model$asEl,
				author$project$Internal$Model$div,
				attributes,
				author$project$Internal$Model$Unkeyed(
					_List_fromArray(
						[child]))));
	});
var author$project$Internal$Flag$bgColor = author$project$Internal$Flag$flag(8);
var author$project$Internal$Flag$fontColor = author$project$Internal$Flag$flag(14);
var author$project$Internal$Flag$fontFamily = author$project$Internal$Flag$flag(5);
var author$project$Internal$Flag$fontSize = author$project$Internal$Flag$flag(4);
var author$project$Internal$Model$Colored = F3(
	function (a, b, c) {
		return {$: 'Colored', a: a, b: b, c: c};
	});
var author$project$Internal$Model$FontFamily = F2(
	function (a, b) {
		return {$: 'FontFamily', a: a, b: b};
	});
var author$project$Internal$Model$FontSize = function (a) {
	return {$: 'FontSize', a: a};
};
var author$project$Internal$Model$SansSerif = {$: 'SansSerif'};
var author$project$Internal$Model$StyleClass = F2(
	function (a, b) {
		return {$: 'StyleClass', a: a, b: b};
	});
var author$project$Internal$Model$Typeface = function (a) {
	return {$: 'Typeface', a: a};
};
var author$project$Internal$Model$formatColorClass = function (_n0) {
	var red = _n0.a;
	var green = _n0.b;
	var blue = _n0.c;
	var alpha = _n0.d;
	return author$project$Internal$Model$floatClass(red) + ('-' + (author$project$Internal$Model$floatClass(green) + ('-' + (author$project$Internal$Model$floatClass(blue) + ('-' + author$project$Internal$Model$floatClass(alpha))))));
};
var elm$core$String$toLower = _String_toLower;
var elm$core$String$words = _String_words;
var author$project$Internal$Model$renderFontClassName = F2(
	function (font, current) {
		return _Utils_ap(
			current,
			function () {
				switch (font.$) {
					case 'Serif':
						return 'serif';
					case 'SansSerif':
						return 'sans-serif';
					case 'Monospace':
						return 'monospace';
					case 'Typeface':
						var name = font.a;
						return A2(
							elm$core$String$join,
							'-',
							elm$core$String$words(
								elm$core$String$toLower(name)));
					case 'ImportFont':
						var name = font.a;
						var url = font.b;
						return A2(
							elm$core$String$join,
							'-',
							elm$core$String$words(
								elm$core$String$toLower(name)));
					default:
						var name = font.a.name;
						return A2(
							elm$core$String$join,
							'-',
							elm$core$String$words(
								elm$core$String$toLower(name)));
				}
			}());
	});
var author$project$Internal$Model$rootStyle = function () {
	var families = _List_fromArray(
		[
			author$project$Internal$Model$Typeface('Open Sans'),
			author$project$Internal$Model$Typeface('Helvetica'),
			author$project$Internal$Model$Typeface('Verdana'),
			author$project$Internal$Model$SansSerif
		]);
	return _List_fromArray(
		[
			A2(
			author$project$Internal$Model$StyleClass,
			author$project$Internal$Flag$bgColor,
			A3(
				author$project$Internal$Model$Colored,
				'bg-color-' + author$project$Internal$Model$formatColorClass(
					A4(author$project$Internal$Model$Rgba, 1, 1, 1, 0)),
				'background-color',
				A4(author$project$Internal$Model$Rgba, 1, 1, 1, 0))),
			A2(
			author$project$Internal$Model$StyleClass,
			author$project$Internal$Flag$fontColor,
			A3(
				author$project$Internal$Model$Colored,
				'font-color-' + author$project$Internal$Model$formatColorClass(
					A4(author$project$Internal$Model$Rgba, 0, 0, 0, 1)),
				'color',
				A4(author$project$Internal$Model$Rgba, 0, 0, 0, 1))),
			A2(
			author$project$Internal$Model$StyleClass,
			author$project$Internal$Flag$fontSize,
			author$project$Internal$Model$FontSize(20)),
			A2(
			author$project$Internal$Model$StyleClass,
			author$project$Internal$Flag$fontFamily,
			A2(
				author$project$Internal$Model$FontFamily,
				A3(elm$core$List$foldl, author$project$Internal$Model$renderFontClassName, 'font-', families),
				families))
		]);
}();
var author$project$Element$layoutWith = F3(
	function (_n0, attrs, child) {
		var options = _n0.options;
		return A3(
			author$project$Internal$Model$renderRoot,
			options,
			A2(
				elm$core$List$cons,
				author$project$Internal$Model$htmlClass(
					A2(
						elm$core$String$join,
						' ',
						_List_fromArray(
							[author$project$Internal$Style$classes.root, author$project$Internal$Style$classes.any, author$project$Internal$Style$classes.single]))),
				_Utils_ap(author$project$Internal$Model$rootStyle, attrs)),
			child);
	});
var author$project$Element$layout = author$project$Element$layoutWith(
	{options: _List_Nil});
var author$project$Internal$Model$Empty = {$: 'Empty'};
var author$project$Element$none = author$project$Internal$Model$Empty;
var author$project$Internal$Flag$padding = author$project$Internal$Flag$flag(2);
var author$project$Internal$Model$PaddingStyle = F5(
	function (a, b, c, d, e) {
		return {$: 'PaddingStyle', a: a, b: b, c: c, d: d, e: e};
	});
var author$project$Element$padding = function (x) {
	return A2(
		author$project$Internal$Model$StyleClass,
		author$project$Internal$Flag$padding,
		A5(
			author$project$Internal$Model$PaddingStyle,
			'p-' + elm$core$String$fromInt(x),
			x,
			x,
			x,
			x));
};
var author$project$Internal$Model$Px = function (a) {
	return {$: 'Px', a: a};
};
var author$project$Element$px = author$project$Internal$Model$Px;
var author$project$Internal$Flag$spacing = author$project$Internal$Flag$flag(3);
var author$project$Internal$Model$SpacingStyle = F3(
	function (a, b, c) {
		return {$: 'SpacingStyle', a: a, b: b, c: c};
	});
var author$project$Internal$Model$spacingName = F2(
	function (x, y) {
		return 'spacing-' + (elm$core$String$fromInt(x) + ('-' + elm$core$String$fromInt(y)));
	});
var author$project$Element$spacing = function (x) {
	return A2(
		author$project$Internal$Model$StyleClass,
		author$project$Internal$Flag$spacing,
		A3(
			author$project$Internal$Model$SpacingStyle,
			A2(author$project$Internal$Model$spacingName, x, x),
			x,
			x));
};
var author$project$Element$htmlAttribute = author$project$Internal$Model$Attr;
var elm$html$Html$Attributes$id = elm$html$Html$Attributes$stringProperty('id');
var author$project$Testable$idAttr = function (id) {
	return author$project$Element$htmlAttribute(
		elm$html$Html$Attributes$id('se-' + id));
};
var author$project$Internal$Model$Above = {$: 'Above'};
var author$project$Internal$Model$Nearby = F2(
	function (a, b) {
		return {$: 'Nearby', a: a, b: b};
	});
var author$project$Element$above = function (element) {
	return A2(author$project$Internal$Model$Nearby, author$project$Internal$Model$Above, element);
};
var author$project$Internal$Model$Behind = {$: 'Behind'};
var author$project$Element$behindContent = function (element) {
	return A2(author$project$Internal$Model$Nearby, author$project$Internal$Model$Behind, element);
};
var author$project$Internal$Model$Below = {$: 'Below'};
var author$project$Element$below = function (element) {
	return A2(author$project$Internal$Model$Nearby, author$project$Internal$Model$Below, element);
};
var author$project$Element$el = F2(
	function (attrs, child) {
		return A4(
			author$project$Internal$Model$element,
			author$project$Internal$Model$asEl,
			author$project$Internal$Model$div,
			A2(
				elm$core$List$cons,
				author$project$Element$width(author$project$Element$shrink),
				A2(
					elm$core$List$cons,
					author$project$Element$height(author$project$Element$shrink),
					attrs)),
			author$project$Internal$Model$Unkeyed(
				_List_fromArray(
					[child])));
	});
var author$project$Internal$Model$InFront = {$: 'InFront'};
var author$project$Element$inFront = function (element) {
	return A2(author$project$Internal$Model$Nearby, author$project$Internal$Model$InFront, element);
};
var author$project$Internal$Model$OnLeft = {$: 'OnLeft'};
var author$project$Element$onLeft = function (element) {
	return A2(author$project$Internal$Model$Nearby, author$project$Internal$Model$OnLeft, element);
};
var author$project$Internal$Model$OnRight = {$: 'OnRight'};
var author$project$Element$onRight = function (element) {
	return A2(author$project$Internal$Model$Nearby, author$project$Internal$Model$OnRight, element);
};
var author$project$Internal$Model$Fill = function (a) {
	return {$: 'Fill', a: a};
};
var author$project$Element$fill = author$project$Internal$Model$Fill(1);
var author$project$Internal$Model$Describe = function (a) {
	return {$: 'Describe', a: a};
};
var author$project$Internal$Model$Paragraph = {$: 'Paragraph'};
var author$project$Element$paragraph = F2(
	function (attrs, children) {
		return A4(
			author$project$Internal$Model$element,
			author$project$Internal$Model$asParagraph,
			author$project$Internal$Model$div,
			A2(
				elm$core$List$cons,
				author$project$Internal$Model$Describe(author$project$Internal$Model$Paragraph),
				A2(
					elm$core$List$cons,
					author$project$Element$width(author$project$Element$fill),
					A2(
						elm$core$List$cons,
						author$project$Element$spacing(5),
						attrs))),
			author$project$Internal$Model$Unkeyed(children));
	});
var author$project$Internal$Model$AsRow = {$: 'AsRow'};
var author$project$Internal$Model$asRow = author$project$Internal$Model$AsRow;
var author$project$Element$row = F2(
	function (attrs, children) {
		return A4(
			author$project$Internal$Model$element,
			author$project$Internal$Model$asRow,
			author$project$Internal$Model$div,
			A2(
				elm$core$List$cons,
				author$project$Internal$Model$htmlClass(author$project$Internal$Style$classes.contentLeft + (' ' + author$project$Internal$Style$classes.contentCenterY)),
				A2(
					elm$core$List$cons,
					author$project$Element$width(author$project$Element$shrink),
					A2(
						elm$core$List$cons,
						author$project$Element$height(author$project$Element$shrink),
						attrs))),
			author$project$Internal$Model$Unkeyed(children));
	});
var author$project$Internal$Model$Text = function (a) {
	return {$: 'Text', a: a};
};
var author$project$Element$text = function (content) {
	return author$project$Internal$Model$Text(content);
};
var author$project$Internal$Model$Max = F2(
	function (a, b) {
		return {$: 'Max', a: a, b: b};
	});
var author$project$Element$maximum = F2(
	function (i, l) {
		return A2(author$project$Internal$Model$Max, i, l);
	});
var author$project$Internal$Model$Min = F2(
	function (a, b) {
		return {$: 'Min', a: a, b: b};
	});
var author$project$Element$minimum = F2(
	function (i, l) {
		return A2(author$project$Internal$Model$Min, i, l);
	});
var author$project$Internal$Model$AsTextColumn = {$: 'AsTextColumn'};
var author$project$Internal$Model$asTextColumn = author$project$Internal$Model$AsTextColumn;
var author$project$Element$textColumn = F2(
	function (attrs, children) {
		return A4(
			author$project$Internal$Model$element,
			author$project$Internal$Model$asTextColumn,
			author$project$Internal$Model$div,
			A2(
				elm$core$List$cons,
				author$project$Element$width(
					A2(
						author$project$Element$maximum,
						750,
						A2(author$project$Element$minimum, 500, author$project$Element$fill))),
				attrs),
			author$project$Internal$Model$Unkeyed(children));
	});
var author$project$Testable$renderAttribute = F3(
	function (level, attrIndex, attr) {
		switch (attr.$) {
			case 'Attr':
				var attribute = attr.a;
				return _List_fromArray(
					[attribute]);
			case 'AttrTest':
				return _List_Nil;
			case 'Spacing':
				return _List_Nil;
			case 'Label':
				return _List_Nil;
			case 'Nearby':
				var location = attr.a.location;
				var element = attr.a.element;
				switch (location.$) {
					case 'Above':
						return _List_fromArray(
							[
								author$project$Element$above(
								A2(
									author$project$Testable$renderElement,
									A2(
										elm$core$List$cons,
										attrIndex,
										A2(elm$core$List$cons, -1, level)),
									element))
							]);
					case 'Below':
						return _List_fromArray(
							[
								author$project$Element$below(
								A2(
									author$project$Testable$renderElement,
									A2(
										elm$core$List$cons,
										attrIndex,
										A2(elm$core$List$cons, -1, level)),
									element))
							]);
					case 'OnRight':
						return _List_fromArray(
							[
								author$project$Element$onRight(
								A2(
									author$project$Testable$renderElement,
									A2(
										elm$core$List$cons,
										attrIndex,
										A2(elm$core$List$cons, -1, level)),
									element))
							]);
					case 'OnLeft':
						return _List_fromArray(
							[
								author$project$Element$onLeft(
								A2(
									author$project$Testable$renderElement,
									A2(
										elm$core$List$cons,
										attrIndex,
										A2(elm$core$List$cons, -1, level)),
									element))
							]);
					case 'InFront':
						return _List_fromArray(
							[
								author$project$Element$inFront(
								A2(
									author$project$Testable$renderElement,
									A2(
										elm$core$List$cons,
										attrIndex,
										A2(elm$core$List$cons, -1, level)),
									element))
							]);
					default:
						return _List_fromArray(
							[
								author$project$Element$behindContent(
								A2(
									author$project$Testable$renderElement,
									A2(
										elm$core$List$cons,
										attrIndex,
										A2(elm$core$List$cons, -1, level)),
									element))
							]);
				}
			case 'Batch':
				var batch = attr.a;
				return elm$core$List$concat(
					A2(
						elm$core$List$indexedMap,
						author$project$Testable$renderAttribute(
							A2(elm$core$List$cons, attrIndex, level)),
						batch));
			default:
				var tested = attr.a;
				return _List_fromArray(
					[tested.attr]);
		}
	});
var author$project$Testable$renderElement = F2(
	function (level, el) {
		var makeAttributes = function (attrs) {
			return elm$core$List$concat(
				A2(
					elm$core$List$indexedMap,
					author$project$Testable$renderAttribute(level),
					attrs));
		};
		var id = author$project$Testable$idAttr(
			A2(
				elm$core$String$join,
				'-',
				A2(elm$core$List$map, elm$core$String$fromInt, level)));
		switch (el.$) {
			case 'El':
				var attrs = el.a;
				var child = el.b;
				return A2(
					author$project$Element$el,
					A2(
						elm$core$List$cons,
						id,
						makeAttributes(attrs)),
					A2(
						author$project$Testable$renderElement,
						A2(elm$core$List$cons, 0, level),
						child));
			case 'Row':
				var attrs = el.a;
				var children = el.b;
				return A2(
					author$project$Element$row,
					A2(
						elm$core$List$cons,
						id,
						makeAttributes(attrs)),
					A2(
						elm$core$List$indexedMap,
						function (i) {
							return author$project$Testable$renderElement(
								A2(elm$core$List$cons, i, level));
						},
						children));
			case 'Column':
				var attrs = el.a;
				var children = el.b;
				return A2(
					author$project$Element$column,
					A2(
						elm$core$List$cons,
						id,
						makeAttributes(attrs)),
					A2(
						elm$core$List$indexedMap,
						function (i) {
							return author$project$Testable$renderElement(
								A2(elm$core$List$cons, i, level));
						},
						children));
			case 'TextColumn':
				var attrs = el.a;
				var children = el.b;
				return A2(
					author$project$Element$textColumn,
					A2(
						elm$core$List$cons,
						id,
						makeAttributes(attrs)),
					A2(
						elm$core$List$indexedMap,
						function (i) {
							return author$project$Testable$renderElement(
								A2(elm$core$List$cons, i, level));
						},
						children));
			case 'Paragraph':
				var attrs = el.a;
				var children = el.b;
				return A2(
					author$project$Element$paragraph,
					A2(
						elm$core$List$cons,
						id,
						makeAttributes(attrs)),
					A2(
						elm$core$List$indexedMap,
						function (i) {
							return author$project$Testable$renderElement(
								A2(elm$core$List$cons, i, level));
						},
						children));
			case 'Empty':
				return author$project$Element$none;
			default:
				var str = el.a;
				return author$project$Element$text(str);
		}
	});
var author$project$Testable$render = function (el) {
	return A2(
		author$project$Element$layout,
		_List_fromArray(
			[
				author$project$Testable$idAttr('0')
			]),
		A2(
			author$project$Testable$renderElement,
			_List_fromArray(
				[0, 0]),
			el));
};
var author$project$Internal$Model$AlignX = function (a) {
	return {$: 'AlignX', a: a};
};
var author$project$Internal$Model$Left = {$: 'Left'};
var author$project$Element$alignLeft = author$project$Internal$Model$AlignX(author$project$Internal$Model$Left);
var author$project$Element$paddingXY = F2(
	function (x, y) {
		return _Utils_eq(x, y) ? A2(
			author$project$Internal$Model$StyleClass,
			author$project$Internal$Flag$padding,
			A5(
				author$project$Internal$Model$PaddingStyle,
				'p-' + elm$core$String$fromInt(x),
				x,
				x,
				x,
				x)) : A2(
			author$project$Internal$Model$StyleClass,
			author$project$Internal$Flag$padding,
			A5(
				author$project$Internal$Model$PaddingStyle,
				'p-' + (elm$core$String$fromInt(x) + ('-' + elm$core$String$fromInt(y))),
				y,
				x,
				y,
				x));
	});
var author$project$Element$Background$color = function (clr) {
	return A2(
		author$project$Internal$Model$StyleClass,
		author$project$Internal$Flag$bgColor,
		A3(
			author$project$Internal$Model$Colored,
			'bg-' + author$project$Internal$Model$formatColorClass(clr),
			'background-color',
			clr));
};
var author$project$Internal$Flag$borderColor = author$project$Internal$Flag$flag(28);
var author$project$Element$Border$color = function (clr) {
	return A2(
		author$project$Internal$Model$StyleClass,
		author$project$Internal$Flag$borderColor,
		A3(
			author$project$Internal$Model$Colored,
			'bc-' + author$project$Internal$Model$formatColorClass(clr),
			'border-color',
			clr));
};
var author$project$Internal$Flag$borderRound = author$project$Internal$Flag$flag(17);
var author$project$Element$Border$rounded = function (radius) {
	return A2(
		author$project$Internal$Model$StyleClass,
		author$project$Internal$Flag$borderRound,
		A3(
			author$project$Internal$Model$Single,
			'br-' + elm$core$String$fromInt(radius),
			'border-radius',
			elm$core$String$fromInt(radius) + 'px'));
};
var author$project$Internal$Model$BorderWidth = F5(
	function (a, b, c, d, e) {
		return {$: 'BorderWidth', a: a, b: b, c: c, d: d, e: e};
	});
var author$project$Element$Border$width = function (v) {
	return A2(
		author$project$Internal$Model$StyleClass,
		author$project$Internal$Flag$borderWidth,
		A5(
			author$project$Internal$Model$BorderWidth,
			'b-' + elm$core$String$fromInt(v),
			v,
			v,
			v,
			v));
};
var author$project$Internal$Flag$fontWeight = author$project$Internal$Flag$flag(13);
var author$project$Internal$Model$Class = F2(
	function (a, b) {
		return {$: 'Class', a: a, b: b};
	});
var author$project$Element$Font$bold = A2(author$project$Internal$Model$Class, author$project$Internal$Flag$fontWeight, author$project$Internal$Style$classes.bold);
var author$project$Element$Font$color = function (fontColor) {
	return A2(
		author$project$Internal$Model$StyleClass,
		author$project$Internal$Flag$fontColor,
		A3(
			author$project$Internal$Model$Colored,
			'fc-' + author$project$Internal$Model$formatColorClass(fontColor),
			'color',
			fontColor));
};
var author$project$Element$Font$size = function (i) {
	return A2(
		author$project$Internal$Model$StyleClass,
		author$project$Internal$Flag$fontSize,
		author$project$Internal$Model$FontSize(i));
};
var author$project$Element$rgb = F3(
	function (r, g, b) {
		return A4(author$project$Internal$Model$Rgba, r, g, b, 1);
	});
var author$project$Testable$Runner$palette = {
	black: A3(author$project$Element$rgb, 0, 0, 0),
	green: A3(author$project$Element$rgb, 0, 1, 0),
	lightGrey: A3(author$project$Element$rgb, 0.7, 0.7, 0.7),
	red: A3(author$project$Element$rgb, 1, 0, 0),
	white: A3(author$project$Element$rgb, 1, 1, 1)
};
var author$project$Testable$Runner$formatKeyValue = F2(
	function (key, val) {
		return key + (': ' + val);
	});
var author$project$Testable$Runner$viewReason = function (_n0) {
	var description = _n0.description;
	var reason = _n0.reason;
	switch (reason.$) {
		case 'Custom':
			return description;
		case 'Equality':
			var one = reason.a;
			var two = reason.b;
			return description + (' ' + (one + (' ' + two)));
		case 'Comparison':
			var one = reason.a;
			var two = reason.b;
			return description + (' ' + (one + (' ' + two)));
		case 'ListDiff':
			var expected = reason.a;
			var actual = reason.b;
			return 'expected\n' + (A2(elm$core$String$join, '    \n', expected) + ('actual\n' + A2(elm$core$String$join, '    \n', actual)));
		case 'CollectionDiff':
			var expected = reason.a.expected;
			var actual = reason.a.actual;
			var extra = reason.a.extra;
			var missing = reason.a.missing;
			return A2(
				elm$core$String$join,
				'\n',
				_List_fromArray(
					[
						A2(author$project$Testable$Runner$formatKeyValue, 'expected', expected),
						A2(author$project$Testable$Runner$formatKeyValue, 'actual', actual),
						A2(
						author$project$Testable$Runner$formatKeyValue,
						'extra',
						A2(elm$core$String$join, ', ', extra)),
						A2(
						author$project$Testable$Runner$formatKeyValue,
						'missing',
						A2(elm$core$String$join, ', ', missing))
					]));
		case 'TODO':
			return description;
		default:
			return description;
	}
};
var elm$core$List$partition = F2(
	function (pred, list) {
		var step = F2(
			function (x, _n0) {
				var trues = _n0.a;
				var falses = _n0.b;
				return pred(x) ? _Utils_Tuple2(
					A2(elm$core$List$cons, x, trues),
					falses) : _Utils_Tuple2(
					trues,
					A2(elm$core$List$cons, x, falses));
			});
		return A3(
			elm$core$List$foldr,
			step,
			_Utils_Tuple2(_List_Nil, _List_Nil),
			list);
	});
var author$project$Testable$Runner$viewResult = function (testable) {
	var viewSingle = function (result) {
		if (result.b.$ === 'Nothing') {
			var label = result.a;
			var _n3 = result.b;
			return A2(
				author$project$Element$el,
				_List_fromArray(
					[
						author$project$Element$Background$color(author$project$Testable$Runner$palette.green),
						author$project$Element$Font$color(author$project$Testable$Runner$palette.black),
						A2(author$project$Element$paddingXY, 20, 10),
						author$project$Element$alignLeft,
						author$project$Element$Border$rounded(3)
					]),
				author$project$Element$text('Success! - ' + label));
		} else {
			var label = result.a;
			var reason = result.b.a;
			var given = reason.given;
			var description = reason.description;
			return A2(
				author$project$Element$column,
				_List_fromArray(
					[
						author$project$Element$Background$color(author$project$Testable$Runner$palette.red),
						author$project$Element$Font$color(author$project$Testable$Runner$palette.black),
						A2(author$project$Element$paddingXY, 20, 10),
						author$project$Element$alignLeft,
						author$project$Element$width(author$project$Element$shrink),
						author$project$Element$Border$rounded(3)
					]),
				_List_fromArray(
					[
						A2(
						author$project$Element$el,
						_List_fromArray(
							[
								author$project$Element$width(author$project$Element$fill)
							]),
						author$project$Element$text(label)),
						A2(
						author$project$Element$el,
						_List_fromArray(
							[
								author$project$Element$width(author$project$Element$fill)
							]),
						author$project$Element$text(
							author$project$Testable$Runner$viewReason(reason)))
					]));
		}
	};
	var isPassing = function (result) {
		var _n1 = result.b;
		if (_n1.$ === 'Nothing') {
			return true;
		} else {
			return false;
		}
	};
	var _n0 = A2(elm$core$List$partition, isPassing, testable.results);
	var passing = _n0.a;
	var failing = _n0.b;
	return A2(
		author$project$Element$column,
		_List_fromArray(
			[
				author$project$Element$Border$width(1),
				author$project$Element$Border$color(author$project$Testable$Runner$palette.lightGrey),
				author$project$Element$padding(20),
				author$project$Element$height(author$project$Element$shrink),
				author$project$Element$alignLeft,
				author$project$Element$spacing(16)
			]),
		_List_fromArray(
			[
				A2(
				author$project$Element$el,
				_List_fromArray(
					[
						author$project$Element$Font$bold,
						author$project$Element$Font$size(64)
					]),
				author$project$Element$text(testable.label)),
				A2(
				author$project$Element$column,
				_List_fromArray(
					[
						author$project$Element$alignLeft,
						author$project$Element$spacing(20)
					]),
				A2(elm$core$List$map, viewSingle, failing)),
				A2(
				author$project$Element$el,
				_List_fromArray(
					[
						author$project$Element$alignLeft,
						author$project$Element$spacing(20),
						author$project$Element$Background$color(author$project$Testable$Runner$palette.green),
						author$project$Element$Font$color(author$project$Testable$Runner$palette.black),
						A2(author$project$Element$paddingXY, 20, 10),
						author$project$Element$alignLeft,
						author$project$Element$Border$rounded(3)
					]),
				author$project$Element$text(
					elm$core$String$fromInt(
						elm$core$List$length(passing)) + ' tests passing!'))
			]));
};
var elm$core$Result$toMaybe = function (result) {
	if (result.$ === 'Ok') {
		var v = result.a;
		return elm$core$Maybe$Just(v);
	} else {
		return elm$core$Maybe$Nothing;
	}
};
var elm$parser$Parser$Advanced$Parser = function (a) {
	return {$: 'Parser', a: a};
};
var elm$parser$Parser$Advanced$Good = F3(
	function (a, b, c) {
		return {$: 'Good', a: a, b: b, c: c};
	});
var elm$parser$Parser$Advanced$isSubChar = _Parser_isSubChar;
var elm$parser$Parser$Advanced$chompWhileHelp = F5(
	function (isGood, offset, row, col, s0) {
		chompWhileHelp:
		while (true) {
			var newOffset = A3(elm$parser$Parser$Advanced$isSubChar, isGood, offset, s0.src);
			if (_Utils_eq(newOffset, -1)) {
				return A3(
					elm$parser$Parser$Advanced$Good,
					_Utils_cmp(s0.offset, offset) < 0,
					_Utils_Tuple0,
					{col: col, context: s0.context, indent: s0.indent, offset: offset, row: row, src: s0.src});
			} else {
				if (_Utils_eq(newOffset, -2)) {
					var $temp$isGood = isGood,
						$temp$offset = offset + 1,
						$temp$row = row + 1,
						$temp$col = 1,
						$temp$s0 = s0;
					isGood = $temp$isGood;
					offset = $temp$offset;
					row = $temp$row;
					col = $temp$col;
					s0 = $temp$s0;
					continue chompWhileHelp;
				} else {
					var $temp$isGood = isGood,
						$temp$offset = newOffset,
						$temp$row = row,
						$temp$col = col + 1,
						$temp$s0 = s0;
					isGood = $temp$isGood;
					offset = $temp$offset;
					row = $temp$row;
					col = $temp$col;
					s0 = $temp$s0;
					continue chompWhileHelp;
				}
			}
		}
	});
var elm$parser$Parser$Advanced$chompWhile = function (isGood) {
	return elm$parser$Parser$Advanced$Parser(
		function (s) {
			return A5(elm$parser$Parser$Advanced$chompWhileHelp, isGood, s.offset, s.row, s.col, s);
		});
};
var elm$parser$Parser$chompWhile = elm$parser$Parser$Advanced$chompWhile;
var elm$parser$Parser$Advanced$Bad = F2(
	function (a, b) {
		return {$: 'Bad', a: a, b: b};
	});
var elm$parser$Parser$Advanced$map2 = F3(
	function (func, _n0, _n1) {
		var parseA = _n0.a;
		var parseB = _n1.a;
		return elm$parser$Parser$Advanced$Parser(
			function (s0) {
				var _n2 = parseA(s0);
				if (_n2.$ === 'Bad') {
					var p = _n2.a;
					var x = _n2.b;
					return A2(elm$parser$Parser$Advanced$Bad, p, x);
				} else {
					var p1 = _n2.a;
					var a = _n2.b;
					var s1 = _n2.c;
					var _n3 = parseB(s1);
					if (_n3.$ === 'Bad') {
						var p2 = _n3.a;
						var x = _n3.b;
						return A2(elm$parser$Parser$Advanced$Bad, p1 || p2, x);
					} else {
						var p2 = _n3.a;
						var b = _n3.b;
						var s2 = _n3.c;
						return A3(
							elm$parser$Parser$Advanced$Good,
							p1 || p2,
							A2(func, a, b),
							s2);
					}
				}
			});
	});
var elm$parser$Parser$Advanced$ignorer = F2(
	function (keepParser, ignoreParser) {
		return A3(elm$parser$Parser$Advanced$map2, elm$core$Basics$always, keepParser, ignoreParser);
	});
var elm$parser$Parser$ignorer = elm$parser$Parser$Advanced$ignorer;
var elm$parser$Parser$Advanced$keeper = F2(
	function (parseFunc, parseArg) {
		return A3(elm$parser$Parser$Advanced$map2, elm$core$Basics$apL, parseFunc, parseArg);
	});
var elm$parser$Parser$keeper = elm$parser$Parser$Advanced$keeper;
var elm$parser$Parser$DeadEnd = F3(
	function (row, col, problem) {
		return {col: col, problem: problem, row: row};
	});
var elm$parser$Parser$problemToDeadEnd = function (p) {
	return A3(elm$parser$Parser$DeadEnd, p.row, p.col, p.problem);
};
var elm$parser$Parser$Advanced$bagToList = F2(
	function (bag, list) {
		bagToList:
		while (true) {
			switch (bag.$) {
				case 'Empty':
					return list;
				case 'AddRight':
					var bag1 = bag.a;
					var x = bag.b;
					var $temp$bag = bag1,
						$temp$list = A2(elm$core$List$cons, x, list);
					bag = $temp$bag;
					list = $temp$list;
					continue bagToList;
				default:
					var bag1 = bag.a;
					var bag2 = bag.b;
					var $temp$bag = bag1,
						$temp$list = A2(elm$parser$Parser$Advanced$bagToList, bag2, list);
					bag = $temp$bag;
					list = $temp$list;
					continue bagToList;
			}
		}
	});
var elm$parser$Parser$Advanced$run = F2(
	function (_n0, src) {
		var parse = _n0.a;
		var _n1 = parse(
			{col: 1, context: _List_Nil, indent: 1, offset: 0, row: 1, src: src});
		if (_n1.$ === 'Good') {
			var value = _n1.b;
			return elm$core$Result$Ok(value);
		} else {
			var bag = _n1.b;
			return elm$core$Result$Err(
				A2(elm$parser$Parser$Advanced$bagToList, bag, _List_Nil));
		}
	});
var elm$parser$Parser$run = F2(
	function (parser, source) {
		var _n0 = A2(elm$parser$Parser$Advanced$run, parser, source);
		if (_n0.$ === 'Ok') {
			var a = _n0.a;
			return elm$core$Result$Ok(a);
		} else {
			var problems = _n0.a;
			return elm$core$Result$Err(
				A2(elm$core$List$map, elm$parser$Parser$problemToDeadEnd, problems));
		}
	});
var elm$parser$Parser$Advanced$succeed = function (a) {
	return elm$parser$Parser$Advanced$Parser(
		function (s) {
			return A3(elm$parser$Parser$Advanced$Good, false, a, s);
		});
};
var elm$parser$Parser$succeed = elm$parser$Parser$Advanced$succeed;
var elm$parser$Parser$ExpectingVariable = {$: 'ExpectingVariable'};
var elm$core$String$slice = _String_slice;
var elm$parser$Parser$Advanced$AddRight = F2(
	function (a, b) {
		return {$: 'AddRight', a: a, b: b};
	});
var elm$parser$Parser$Advanced$DeadEnd = F4(
	function (row, col, problem, contextStack) {
		return {col: col, contextStack: contextStack, problem: problem, row: row};
	});
var elm$parser$Parser$Advanced$Empty = {$: 'Empty'};
var elm$parser$Parser$Advanced$fromState = F2(
	function (s, x) {
		return A2(
			elm$parser$Parser$Advanced$AddRight,
			elm$parser$Parser$Advanced$Empty,
			A4(elm$parser$Parser$Advanced$DeadEnd, s.row, s.col, x, s.context));
	});
var elm$parser$Parser$Advanced$varHelp = F7(
	function (isGood, offset, row, col, src, indent, context) {
		varHelp:
		while (true) {
			var newOffset = A3(elm$parser$Parser$Advanced$isSubChar, isGood, offset, src);
			if (_Utils_eq(newOffset, -1)) {
				return {col: col, context: context, indent: indent, offset: offset, row: row, src: src};
			} else {
				if (_Utils_eq(newOffset, -2)) {
					var $temp$isGood = isGood,
						$temp$offset = offset + 1,
						$temp$row = row + 1,
						$temp$col = 1,
						$temp$src = src,
						$temp$indent = indent,
						$temp$context = context;
					isGood = $temp$isGood;
					offset = $temp$offset;
					row = $temp$row;
					col = $temp$col;
					src = $temp$src;
					indent = $temp$indent;
					context = $temp$context;
					continue varHelp;
				} else {
					var $temp$isGood = isGood,
						$temp$offset = newOffset,
						$temp$row = row,
						$temp$col = col + 1,
						$temp$src = src,
						$temp$indent = indent,
						$temp$context = context;
					isGood = $temp$isGood;
					offset = $temp$offset;
					row = $temp$row;
					col = $temp$col;
					src = $temp$src;
					indent = $temp$indent;
					context = $temp$context;
					continue varHelp;
				}
			}
		}
	});
var elm$parser$Parser$Advanced$variable = function (i) {
	return elm$parser$Parser$Advanced$Parser(
		function (s) {
			var firstOffset = A3(elm$parser$Parser$Advanced$isSubChar, i.start, s.offset, s.src);
			if (_Utils_eq(firstOffset, -1)) {
				return A2(
					elm$parser$Parser$Advanced$Bad,
					false,
					A2(elm$parser$Parser$Advanced$fromState, s, i.expecting));
			} else {
				var s1 = _Utils_eq(firstOffset, -2) ? A7(elm$parser$Parser$Advanced$varHelp, i.inner, s.offset + 1, s.row + 1, 1, s.src, s.indent, s.context) : A7(elm$parser$Parser$Advanced$varHelp, i.inner, firstOffset, s.row, s.col + 1, s.src, s.indent, s.context);
				var name = A3(elm$core$String$slice, s.offset, s1.offset, s.src);
				return A2(elm$core$Set$member, name, i.reserved) ? A2(
					elm$parser$Parser$Advanced$Bad,
					false,
					A2(elm$parser$Parser$Advanced$fromState, s, i.expecting)) : A3(elm$parser$Parser$Advanced$Good, true, name, s1);
			}
		});
};
var elm$parser$Parser$variable = function (i) {
	return elm$parser$Parser$Advanced$variable(
		{expecting: elm$parser$Parser$ExpectingVariable, inner: i.inner, reserved: i.reserved, start: i.start});
};
var author$project$Testable$Runner$parseId = function (str) {
	return elm$core$Result$toMaybe(
		A2(
			elm$parser$Parser$run,
			A2(
				elm$parser$Parser$keeper,
				A2(
					elm$parser$Parser$ignorer,
					elm$parser$Parser$succeed(elm$core$Basics$identity),
					elm$parser$Parser$chompWhile(
						function (c) {
							return !_Utils_eq(
								c,
								_Utils_chr('#'));
						})),
				elm$parser$Parser$variable(
					{
						inner: function (c) {
							return elm$core$Char$isAlphaNum(c) || _Utils_eq(
								c,
								_Utils_chr('-'));
						},
						reserved: elm$core$Set$empty,
						start: function (c) {
							return _Utils_eq(
								c,
								_Utils_chr('#'));
						}
					})),
			str));
};
var elm$html$Html$node = elm$virtual_dom$VirtualDom$node;
var author$project$Testable$Runner$viewResultsAnnotationStylesheet = function (results) {
	var toStyleClass = function (_n2) {
		var label = _n2.a;
		var maybeFailure = _n2.b;
		if (maybeFailure.$ === 'Nothing') {
			return '';
		} else {
			var failure = maybeFailure.a;
			var _n1 = author$project$Testable$Runner$parseId(label);
			if (_n1.$ === 'Nothing') {
				return A2(elm$core$Debug$log, 'NO ID FOUND', label);
			} else {
				var id = _n1.a;
				return id + ' { background-color:red; outline: dashed; };';
			}
		}
	};
	var styleSheet = A2(
		elm$core$String$join,
		'',
		A2(elm$core$List$map, toStyleClass, results));
	return A3(
		elm$html$Html$node,
		'style',
		_List_Nil,
		_List_fromArray(
			[
				elm$html$Html$text(styleSheet)
			]));
};
var author$project$Testable$Runner$viewResultsInline = function (testable) {
	return A2(
		elm$html$Html$div,
		_List_Nil,
		_List_fromArray(
			[
				author$project$Testable$Runner$viewResultsAnnotationStylesheet(testable.results),
				author$project$Testable$render(testable.element)
			]));
};
var author$project$Testable$Runner$view = function (model) {
	var _n0 = model.current;
	if (_n0.$ === 'Nothing') {
		if (elm$core$List$isEmpty(model.upcoming)) {
			var _n1 = model.finished;
			if (!_n1.b) {
				return A2(
					author$project$Element$layout,
					_List_Nil,
					A2(
						author$project$Element$column,
						_List_fromArray(
							[
								author$project$Element$spacing(20),
								author$project$Element$padding(20),
								author$project$Element$width(
								author$project$Element$px(800))
							]),
						_List_fromArray(
							[author$project$Element$none])));
			} else {
				var finished = _n1.a;
				var remaining = _n1.b;
				return false ? author$project$Testable$Runner$viewResultsInline(finished) : A2(
					author$project$Element$layout,
					_List_Nil,
					A2(
						author$project$Element$column,
						_List_fromArray(
							[
								author$project$Element$spacing(20),
								author$project$Element$padding(20),
								author$project$Element$width(
								author$project$Element$px(800))
							]),
						A2(
							elm$core$List$map,
							author$project$Testable$Runner$viewResult,
							A2(elm$core$List$cons, finished, remaining))));
			}
		} else {
			return elm$html$Html$text('running?');
		}
	} else {
		var _n2 = _n0.a;
		var label = _n2.a;
		var current = _n2.b;
		return author$project$Testable$render(current);
	}
};
var elm$browser$Browser$External = function (a) {
	return {$: 'External', a: a};
};
var elm$browser$Browser$Internal = function (a) {
	return {$: 'Internal', a: a};
};
var elm$browser$Browser$Dom$NotFound = function (a) {
	return {$: 'NotFound', a: a};
};
var elm$core$Basics$never = function (_n0) {
	never:
	while (true) {
		var nvr = _n0.a;
		var $temp$_n0 = nvr;
		_n0 = $temp$_n0;
		continue never;
	}
};
var elm$core$String$length = _String_length;
var elm$core$String$dropLeft = F2(
	function (n, string) {
		return (n < 1) ? string : A3(
			elm$core$String$slice,
			n,
			elm$core$String$length(string),
			string);
	});
var elm$core$String$startsWith = _String_startsWith;
var elm$url$Url$Http = {$: 'Http'};
var elm$url$Url$Https = {$: 'Https'};
var elm$core$String$indexes = _String_indexes;
var elm$core$String$left = F2(
	function (n, string) {
		return (n < 1) ? '' : A3(elm$core$String$slice, 0, n, string);
	});
var elm$core$String$contains = _String_contains;
var elm$core$String$toInt = _String_toInt;
var elm$url$Url$Url = F6(
	function (protocol, host, port_, path, query, fragment) {
		return {fragment: fragment, host: host, path: path, port_: port_, protocol: protocol, query: query};
	});
var elm$url$Url$chompBeforePath = F5(
	function (protocol, path, params, frag, str) {
		if (elm$core$String$isEmpty(str) || A2(elm$core$String$contains, '@', str)) {
			return elm$core$Maybe$Nothing;
		} else {
			var _n0 = A2(elm$core$String$indexes, ':', str);
			if (!_n0.b) {
				return elm$core$Maybe$Just(
					A6(elm$url$Url$Url, protocol, str, elm$core$Maybe$Nothing, path, params, frag));
			} else {
				if (!_n0.b.b) {
					var i = _n0.a;
					var _n1 = elm$core$String$toInt(
						A2(elm$core$String$dropLeft, i + 1, str));
					if (_n1.$ === 'Nothing') {
						return elm$core$Maybe$Nothing;
					} else {
						var port_ = _n1;
						return elm$core$Maybe$Just(
							A6(
								elm$url$Url$Url,
								protocol,
								A2(elm$core$String$left, i, str),
								port_,
								path,
								params,
								frag));
					}
				} else {
					return elm$core$Maybe$Nothing;
				}
			}
		}
	});
var elm$url$Url$chompBeforeQuery = F4(
	function (protocol, params, frag, str) {
		if (elm$core$String$isEmpty(str)) {
			return elm$core$Maybe$Nothing;
		} else {
			var _n0 = A2(elm$core$String$indexes, '/', str);
			if (!_n0.b) {
				return A5(elm$url$Url$chompBeforePath, protocol, '/', params, frag, str);
			} else {
				var i = _n0.a;
				return A5(
					elm$url$Url$chompBeforePath,
					protocol,
					A2(elm$core$String$dropLeft, i, str),
					params,
					frag,
					A2(elm$core$String$left, i, str));
			}
		}
	});
var elm$url$Url$chompBeforeFragment = F3(
	function (protocol, frag, str) {
		if (elm$core$String$isEmpty(str)) {
			return elm$core$Maybe$Nothing;
		} else {
			var _n0 = A2(elm$core$String$indexes, '?', str);
			if (!_n0.b) {
				return A4(elm$url$Url$chompBeforeQuery, protocol, elm$core$Maybe$Nothing, frag, str);
			} else {
				var i = _n0.a;
				return A4(
					elm$url$Url$chompBeforeQuery,
					protocol,
					elm$core$Maybe$Just(
						A2(elm$core$String$dropLeft, i + 1, str)),
					frag,
					A2(elm$core$String$left, i, str));
			}
		}
	});
var elm$url$Url$chompAfterProtocol = F2(
	function (protocol, str) {
		if (elm$core$String$isEmpty(str)) {
			return elm$core$Maybe$Nothing;
		} else {
			var _n0 = A2(elm$core$String$indexes, '#', str);
			if (!_n0.b) {
				return A3(elm$url$Url$chompBeforeFragment, protocol, elm$core$Maybe$Nothing, str);
			} else {
				var i = _n0.a;
				return A3(
					elm$url$Url$chompBeforeFragment,
					protocol,
					elm$core$Maybe$Just(
						A2(elm$core$String$dropLeft, i + 1, str)),
					A2(elm$core$String$left, i, str));
			}
		}
	});
var elm$url$Url$fromString = function (str) {
	return A2(elm$core$String$startsWith, 'http://', str) ? A2(
		elm$url$Url$chompAfterProtocol,
		elm$url$Url$Http,
		A2(elm$core$String$dropLeft, 7, str)) : (A2(elm$core$String$startsWith, 'https://', str) ? A2(
		elm$url$Url$chompAfterProtocol,
		elm$url$Url$Https,
		A2(elm$core$String$dropLeft, 8, str)) : elm$core$Maybe$Nothing);
};
var elm$browser$Browser$element = _Browser_element;
var author$project$Testable$Runner$program = function (tests) {
	var _n0 = function () {
		if (!tests.b) {
			return _Utils_Tuple2(elm$core$Maybe$Nothing, _List_Nil);
		} else {
			var cur = tests.a;
			var remaining = tests.b;
			return _Utils_Tuple2(
				elm$core$Maybe$Just(cur),
				remaining);
		}
	}();
	var current = _n0.a;
	var upcoming = _n0.b;
	return elm$browser$Browser$element(
		{
			init: elm$core$Basics$always(
				_Utils_Tuple2(
					{current: current, finished: _List_Nil, upcoming: upcoming},
					A2(
						elm$core$Task$perform,
						elm$core$Basics$always(author$project$Testable$Runner$Analyze),
						A2(
							elm$core$Task$andThen,
							elm$core$Basics$always(elm$time$Time$now),
							elm$core$Process$sleep(32))))),
			subscriptions: author$project$Testable$Runner$subscriptions,
			update: author$project$Testable$Runner$update,
			view: author$project$Testable$Runner$view
		});
};
var author$project$Element$rgba = author$project$Internal$Model$Rgba;
var author$project$Internal$Model$AlignY = function (a) {
	return {$: 'AlignY', a: a};
};
var author$project$Internal$Model$Top = {$: 'Top'};
var author$project$Element$alignTop = author$project$Internal$Model$AlignY(author$project$Internal$Model$Top);
var author$project$Testable$Above = {$: 'Above'};
var author$project$Testable$Behind = {$: 'Behind'};
var author$project$Testable$Below = {$: 'Below'};
var author$project$Testable$InFront = {$: 'InFront'};
var author$project$Testable$OnLeft = {$: 'OnLeft'};
var author$project$Testable$OnRight = {$: 'OnRight'};
var elm$core$Basics$abs = function (n) {
	return (n < 0) ? (-n) : n;
};
var elm_explorations$test$Test$Expectation$Pass = {$: 'Pass'};
var elm_explorations$test$Expect$pass = elm_explorations$test$Test$Expectation$Pass;
var elm_explorations$test$Expect$true = F2(
	function (message, bool) {
		return bool ? elm_explorations$test$Expect$pass : elm_explorations$test$Expect$fail(message);
	});
var author$project$Testable$Element$expectRoundedEquality = F2(
	function (x, y) {
		return A2(
			elm_explorations$test$Expect$true,
			'within 1 of each other ' + (elm$core$String$fromFloat(x) + (':' + elm$core$String$fromFloat(y))),
			elm$core$Basics$abs(x - y) < 1);
	});
var elm$core$Basics$composeL = F3(
	function (g, f, x) {
		return g(
			f(x));
	});
var elm$core$List$member = F2(
	function (x, xs) {
		return A2(
			elm$core$List$any,
			function (a) {
				return _Utils_eq(a, x);
			},
			xs);
	});
var elm$core$List$sum = function (numbers) {
	return A3(elm$core$List$foldl, elm$core$Basics$add, 0, numbers);
};
var author$project$Testable$Element$alignTop = author$project$Testable$LabeledTest(
	{
		attr: author$project$Element$alignTop,
		label: 'alignTop',
		test: F2(
			function (found, _n0) {
				if (A2(
					elm$core$List$member,
					found.location,
					_List_fromArray(
						[
							author$project$Testable$IsNearby(author$project$Testable$Above),
							author$project$Testable$IsNearby(author$project$Testable$Below)
						]))) {
					return A2(elm_explorations$test$Expect$true, 'alignTop doesn\'t apply to elements that are above or below', true);
				} else {
					if (A2(
						elm$core$List$member,
						found.location,
						_List_fromArray(
							[
								author$project$Testable$IsNearby(author$project$Testable$InFront),
								author$project$Testable$IsNearby(author$project$Testable$Behind),
								author$project$Testable$IsNearby(author$project$Testable$OnRight),
								author$project$Testable$IsNearby(author$project$Testable$OnLeft)
							]))) {
						return A2(author$project$Testable$Element$expectRoundedEquality, found.self.bbox.top, found.parent.bbox.top);
					} else {
						if (!elm$core$List$length(found.siblings)) {
							return A2(author$project$Testable$Element$expectRoundedEquality, found.self.bbox.top, found.parent.bbox.top + found.parent.bbox.padding.top);
						} else {
							var _n1 = found.location;
							if (_n1.$ === 'InColumn') {
								var siblingsAbove = A2(
									elm$core$List$filter,
									function (x) {
										return _Utils_cmp(x.bbox.bottom, found.self.bbox.top) < 0;
									},
									found.siblings);
								var spacings = elm$core$List$length(siblingsAbove) * found.parentSpacing;
								var heightsAbove = elm$core$List$sum(
									A2(
										elm$core$List$map,
										A2(
											elm$core$Basics$composeL,
											function ($) {
												return $.height;
											},
											function ($) {
												return $.bbox;
											}),
										siblingsAbove));
								return A2(author$project$Testable$Element$expectRoundedEquality, found.self.bbox.top, found.parent.bbox.top + ((found.parent.bbox.padding.top + heightsAbove) + spacings));
							} else {
								return A2(author$project$Testable$Element$expectRoundedEquality, found.self.bbox.top, found.parent.bbox.top);
							}
						}
					}
				}
			})
	});
var author$project$Testable$Nearby = function (a) {
	return {$: 'Nearby', a: a};
};
var author$project$Testable$Element$below = function (element) {
	return author$project$Testable$Nearby(
		{
			element: element,
			label: 'below',
			location: author$project$Testable$Below,
			test: F2(
				function (found, _n0) {
					return A2(author$project$Testable$Element$expectRoundedEquality, found.self.bbox.top, found.parent.bbox.bottom);
				})
		});
};
var author$project$Testable$Element$el = author$project$Testable$El;
var author$project$Element$fillPortion = author$project$Internal$Model$Fill;
var author$project$Testable$Element$heightHelper = F3(
	function (maybeMin, maybeMax, len) {
		heightHelper:
		while (true) {
			var minMaxTest = function (actualheight) {
				var _n9 = _Utils_Tuple2(maybeMin, maybeMax);
				if (_n9.a.$ === 'Just') {
					if (_n9.b.$ === 'Nothing') {
						var lower = _n9.a.a;
						var _n12 = _n9.b;
						return _Utils_cmp(lower, actualheight) < 1;
					} else {
						var lower = _n9.a.a;
						var higher = _n9.b.a;
						return (_Utils_cmp(lower, actualheight) < 1) && (_Utils_cmp(actualheight, higher) < 1);
					}
				} else {
					if (_n9.b.$ === 'Nothing') {
						var _n10 = _n9.a;
						var _n11 = _n9.b;
						return true;
					} else {
						var _n13 = _n9.a;
						var higher = _n9.b.a;
						return _Utils_cmp(actualheight, higher) < 1;
					}
				}
			};
			var minLabel = function () {
				if (maybeMin.$ === 'Nothing') {
					return '';
				} else {
					var i = maybeMin.a;
					return ' min:' + elm$core$String$fromInt(i);
				}
			}();
			var maxLabel = function () {
				if (maybeMax.$ === 'Nothing') {
					return '';
				} else {
					var i = maybeMax.a;
					return ' max:' + elm$core$String$fromInt(i);
				}
			}();
			var addMin = function (l) {
				if (maybeMin.$ === 'Nothing') {
					return l;
				} else {
					var minPx = maybeMin.a;
					return A2(author$project$Element$minimum, minPx, l);
				}
			};
			var addMax = function (l) {
				if (maybeMax.$ === 'Nothing') {
					return l;
				} else {
					var maxPx = maybeMax.a;
					return A2(author$project$Element$maximum, maxPx, l);
				}
			};
			switch (len.$) {
				case 'Minimum':
					var m = len.a;
					var newLen = len.b;
					var $temp$maybeMin = elm$core$Maybe$Just(m),
						$temp$maybeMax = maybeMax,
						$temp$len = newLen;
					maybeMin = $temp$maybeMin;
					maybeMax = $temp$maybeMax;
					len = $temp$len;
					continue heightHelper;
				case 'Maximum':
					var m = len.a;
					var newLen = len.b;
					var $temp$maybeMin = maybeMin,
						$temp$maybeMax = elm$core$Maybe$Just(m),
						$temp$len = newLen;
					maybeMin = $temp$maybeMin;
					maybeMax = $temp$maybeMax;
					len = $temp$len;
					continue heightHelper;
				case 'Px':
					var val = len.a;
					return author$project$Testable$LabeledTest(
						{
							attr: author$project$Element$height(
								addMax(
									addMin(
										author$project$Element$px(val)))),
							label: 'height ' + (elm$core$String$fromInt(val) + ('px' + (minLabel + maxLabel))),
							test: F2(
								function (found, _n1) {
									return A2(
										elm_explorations$test$Expect$true,
										'exact height is exact',
										_Utils_eq(
											elm$core$Basics$floor(found.self.bbox.height),
											val) && minMaxTest(
											elm$core$Basics$floor(found.self.bbox.height)));
								})
						});
				case 'Fill':
					var portion = len.a;
					return author$project$Testable$LabeledTest(
						{
							attr: author$project$Element$height(
								addMax(
									addMin(
										author$project$Element$fillPortion(portion)))),
							label: 'height fill-' + (elm$core$String$fromInt(portion) + (minLabel + maxLabel)),
							test: F2(
								function (context, _n2) {
									if (A2(
										elm$core$List$member,
										context.location,
										_List_fromArray(
											[
												author$project$Testable$IsNearby(author$project$Testable$Above),
												author$project$Testable$IsNearby(author$project$Testable$Below)
											]))) {
										return A2(elm_explorations$test$Expect$true, 'height fill doesn\'t apply to above/below elements', true);
									} else {
										var parentAvailableHeight = context.parent.bbox.height - (context.self.bbox.padding.top + context.self.bbox.padding.bottom);
										var _n3 = context.location;
										switch (_n3.$) {
											case 'IsNearby':
												return A2(
													elm_explorations$test$Expect$true,
													'Nearby Element has fill height',
													_Utils_eq(
														elm$core$Basics$floor(context.parent.bbox.height),
														elm$core$Basics$floor(context.self.bbox.height)) || minMaxTest(
														elm$core$Basics$floor(context.self.bbox.height)));
											case 'InColumn':
												return A2(
													elm_explorations$test$Expect$true,
													'Element within column has fill height',
													_Utils_eq(
														elm$core$Basics$floor(parentAvailableHeight),
														elm$core$Basics$floor(context.self.bbox.height)) || minMaxTest(
														elm$core$Basics$floor(context.self.bbox.height)));
											case 'InEl':
												return A2(
													elm_explorations$test$Expect$true,
													'Element within el has fill height',
													_Utils_eq(
														elm$core$Basics$floor(parentAvailableHeight),
														elm$core$Basics$floor(context.self.bbox.height)) || minMaxTest(
														elm$core$Basics$floor(context.self.bbox.height)));
											default:
												var spacePerPortion = parentAvailableHeight / (elm$core$List$length(context.siblings) + 1);
												return A2(
													elm_explorations$test$Expect$true,
													'el has fill height',
													_Utils_eq(
														elm$core$Basics$floor(spacePerPortion),
														elm$core$Basics$floor(context.self.bbox.height)) || minMaxTest(
														elm$core$Basics$floor(context.self.bbox.height)));
										}
									}
								})
						});
				default:
					return author$project$Testable$LabeledTest(
						{
							attr: author$project$Element$height(
								addMax(
									addMin(author$project$Element$shrink))),
							label: 'height shrink' + (minLabel + maxLabel),
							test: F2(
								function (context, _n4) {
									var verticalPadding = context.self.bbox.padding.top + context.self.bbox.padding.bottom;
									var spacingValue = context.parentSpacing * (elm$core$List$length(context.children) - 1);
									var childWidth = function (child) {
										return child.bbox.height;
									};
									var totalChildren = elm$core$List$sum(
										A2(elm$core$List$map, childWidth, context.children));
									return (!totalChildren) ? A2(author$project$Testable$Element$expectRoundedEquality, context.self.bbox.height, context.self.bbox.height) : A2(author$project$Testable$Element$expectRoundedEquality, (totalChildren + verticalPadding) + spacingValue, context.self.bbox.height);
								})
						});
			}
		}
	});
var author$project$Testable$Element$height = function (len) {
	return A3(author$project$Testable$Element$heightHelper, elm$core$Maybe$Nothing, elm$core$Maybe$Nothing, len);
};
var author$project$Testable$Element$none = author$project$Testable$Empty;
var author$project$Testable$Element$Px = function (a) {
	return {$: 'Px', a: a};
};
var author$project$Testable$Element$px = author$project$Testable$Element$Px;
var author$project$Testable$Element$row = author$project$Testable$Row;
var author$project$Testable$Batch = function (a) {
	return {$: 'Batch', a: a};
};
var author$project$Testable$Spacing = function (a) {
	return {$: 'Spacing', a: a};
};
var elm$core$Debug$toString = _Debug_toString;
var author$project$Testable$Element$spacing = function (space) {
	return author$project$Testable$Batch(
		_List_fromArray(
			[
				author$project$Testable$Spacing(space),
				author$project$Testable$LabeledTest(
				{
					attr: author$project$Element$spacing(space),
					label: 'spacing: ' + elm$core$String$fromInt(space),
					test: F2(
						function (found, _n0) {
							var findDistance = F2(
								function (child, total) {
									return _Utils_ap(
										A2(
											elm$core$List$concatMap,
											function (otherChild) {
												var vertical = elm$core$Basics$round(child.bbox.top - otherChild.bbox.bottom);
												var horizontal = elm$core$Basics$round(child.bbox.left - otherChild.bbox.right);
												return _List_fromArray(
													[
														(horizontal > 0) ? horizontal : space,
														(vertical > 0) ? vertical : space
													]);
											},
											found.children),
										total);
								});
							var distances = A3(elm$core$List$foldl, findDistance, _List_Nil, found.children);
							var allAreSpaced = A3(
								elm$core$List$foldl,
								F2(
									function (x, wrong) {
										return (!(_Utils_cmp(x, space) > -1)) ? A2(elm$core$List$cons, x, wrong) : wrong;
									}),
								_List_Nil,
								distances);
							return A2(
								elm_explorations$test$Expect$true,
								'All children are at least ' + (elm$core$String$fromInt(space) + (' pixels apart.' + (elm$core$Debug$toString(allAreSpaced) + ' are not though'))),
								_Utils_eq(allAreSpaced, _List_Nil));
						})
				})
			]));
};
var author$project$Testable$Element$text = author$project$Testable$Text;
var author$project$Testable$Element$widthHelper = F3(
	function (maybeMin, maybeMax, len) {
		widthHelper:
		while (true) {
			var minMaxTest = function (actualWidth) {
				var _n9 = _Utils_Tuple2(maybeMin, maybeMax);
				if (_n9.a.$ === 'Just') {
					if (_n9.b.$ === 'Nothing') {
						var lower = _n9.a.a;
						var _n12 = _n9.b;
						return _Utils_cmp(lower, actualWidth) < 1;
					} else {
						var lower = _n9.a.a;
						var higher = _n9.b.a;
						return (_Utils_cmp(lower, actualWidth) < 1) && (_Utils_cmp(actualWidth, higher) < 1);
					}
				} else {
					if (_n9.b.$ === 'Nothing') {
						var _n10 = _n9.a;
						var _n11 = _n9.b;
						return true;
					} else {
						var _n13 = _n9.a;
						var higher = _n9.b.a;
						return _Utils_cmp(actualWidth, higher) < 1;
					}
				}
			};
			var minLabel = function () {
				if (maybeMin.$ === 'Nothing') {
					return '';
				} else {
					var i = maybeMin.a;
					return ' min:' + elm$core$String$fromInt(i);
				}
			}();
			var maxLabel = function () {
				if (maybeMax.$ === 'Nothing') {
					return '';
				} else {
					var i = maybeMax.a;
					return ' max:' + elm$core$String$fromInt(i);
				}
			}();
			var addMin = function (l) {
				if (maybeMin.$ === 'Nothing') {
					return l;
				} else {
					var minPx = maybeMin.a;
					return A2(author$project$Element$minimum, minPx, l);
				}
			};
			var addMax = function (l) {
				if (maybeMax.$ === 'Nothing') {
					return l;
				} else {
					var maxPx = maybeMax.a;
					return A2(author$project$Element$maximum, maxPx, l);
				}
			};
			switch (len.$) {
				case 'Minimum':
					var m = len.a;
					var newLen = len.b;
					var $temp$maybeMin = elm$core$Maybe$Just(m),
						$temp$maybeMax = maybeMax,
						$temp$len = newLen;
					maybeMin = $temp$maybeMin;
					maybeMax = $temp$maybeMax;
					len = $temp$len;
					continue widthHelper;
				case 'Maximum':
					var m = len.a;
					var newLen = len.b;
					var $temp$maybeMin = maybeMin,
						$temp$maybeMax = elm$core$Maybe$Just(m),
						$temp$len = newLen;
					maybeMin = $temp$maybeMin;
					maybeMax = $temp$maybeMax;
					len = $temp$len;
					continue widthHelper;
				case 'Px':
					var val = len.a;
					return author$project$Testable$LabeledTest(
						{
							attr: author$project$Element$width(
								addMax(
									addMin(
										author$project$Element$px(val)))),
							label: 'width ' + (elm$core$String$fromInt(val) + ('px' + (minLabel + maxLabel))),
							test: F2(
								function (found, _n1) {
									return A2(
										elm_explorations$test$Expect$true,
										'exact width is exact',
										_Utils_eq(
											elm$core$Basics$floor(found.self.bbox.width),
											val) && minMaxTest(
											elm$core$Basics$floor(found.self.bbox.width)));
								})
						});
				case 'Fill':
					var portion = len.a;
					return author$project$Testable$LabeledTest(
						{
							attr: author$project$Element$width(
								addMax(
									addMin(
										author$project$Element$fillPortion(portion)))),
							label: 'width fill-' + (elm$core$String$fromInt(portion) + (minLabel + maxLabel)),
							test: F2(
								function (context, _n2) {
									if (A2(
										elm$core$List$member,
										context.location,
										_List_fromArray(
											[
												author$project$Testable$IsNearby(author$project$Testable$OnRight),
												author$project$Testable$IsNearby(author$project$Testable$OnLeft)
											]))) {
										return A2(elm_explorations$test$Expect$true, 'width fill doesn\'t apply to onright/onleft elements', true);
									} else {
										var parentAvailableWidth = context.parent.bbox.width - (context.self.bbox.padding.left + context.self.bbox.padding.right);
										var _n3 = context.location;
										switch (_n3.$) {
											case 'IsNearby':
												return A2(
													elm_explorations$test$Expect$true,
													'Nearby Element has fill width',
													_Utils_eq(
														elm$core$Basics$floor(context.parent.bbox.width),
														elm$core$Basics$floor(context.self.bbox.width)) || minMaxTest(
														elm$core$Basics$floor(context.self.bbox.width)));
											case 'InColumn':
												return A2(
													elm_explorations$test$Expect$true,
													'Element within column has fill width',
													_Utils_eq(
														elm$core$Basics$floor(parentAvailableWidth),
														elm$core$Basics$floor(context.self.bbox.width)) || minMaxTest(
														elm$core$Basics$floor(context.self.bbox.width)));
											case 'InEl':
												return A2(
													elm_explorations$test$Expect$true,
													'Element within element has fill width',
													_Utils_eq(
														elm$core$Basics$floor(parentAvailableWidth),
														elm$core$Basics$floor(context.self.bbox.width)) || minMaxTest(
														elm$core$Basics$floor(context.self.bbox.width)));
											default:
												var spacePerPortion = parentAvailableWidth / (elm$core$List$length(context.siblings) + 1);
												return A2(
													elm_explorations$test$Expect$true,
													'element has fill width',
													_Utils_eq(
														elm$core$Basics$floor(spacePerPortion),
														elm$core$Basics$floor(context.self.bbox.width)) || minMaxTest(
														elm$core$Basics$floor(context.self.bbox.width)));
										}
									}
								})
						});
				default:
					return author$project$Testable$LabeledTest(
						{
							attr: author$project$Element$width(
								addMax(
									addMin(author$project$Element$shrink))),
							label: 'width shrink' + (minLabel + maxLabel),
							test: F2(
								function (context, _n4) {
									var spacingValue = context.parentSpacing * (elm$core$List$length(context.children) - 1);
									var horizontalPadding = context.self.bbox.padding.left + context.self.bbox.padding.right;
									var childWidth = function (child) {
										return child.bbox.width;
									};
									var totalChildren = elm$core$List$sum(
										A2(elm$core$List$map, childWidth, context.children));
									return (!totalChildren) ? A2(author$project$Testable$Element$expectRoundedEquality, context.self.bbox.width, context.self.bbox.width) : A2(author$project$Testable$Element$expectRoundedEquality, (totalChildren + horizontalPadding) + spacingValue, context.self.bbox.width);
								})
						});
			}
		}
	});
var author$project$Testable$Element$width = function (len) {
	return A3(author$project$Testable$Element$widthHelper, elm$core$Maybe$Nothing, elm$core$Maybe$Nothing, len);
};
var author$project$Testable$formatColor = function (_n0) {
	var red = _n0.a;
	var green = _n0.b;
	var blue = _n0.c;
	var alpha = _n0.d;
	return (alpha === 1) ? (('rgb(' + elm$core$String$fromInt(
		elm$core$Basics$round(red * 255))) + ((', ' + elm$core$String$fromInt(
		elm$core$Basics$round(green * 255))) + ((', ' + elm$core$String$fromInt(
		elm$core$Basics$round(blue * 255))) + ')'))) : (('rgb(' + elm$core$String$fromInt(
		elm$core$Basics$round(red * 255))) + ((', ' + elm$core$String$fromInt(
		elm$core$Basics$round(green * 255))) + ((', ' + elm$core$String$fromInt(
		elm$core$Basics$round(blue * 255))) + ')')));
};
var author$project$Testable$formatColorWithAlpha = function (_n0) {
	var red = _n0.a;
	var green = _n0.b;
	var blue = _n0.c;
	var alpha = _n0.d;
	return (alpha === 1) ? (('rgba(' + elm$core$String$fromInt(
		elm$core$Basics$round(red * 255))) + ((', ' + elm$core$String$fromInt(
		elm$core$Basics$round(green * 255))) + ((', ' + elm$core$String$fromInt(
		elm$core$Basics$round(blue * 255))) + (', 1' + ')')))) : (('rgba(' + elm$core$String$fromInt(
		elm$core$Basics$round(red * 255))) + ((', ' + elm$core$String$fromInt(
		elm$core$Basics$round(green * 255))) + ((', ' + elm$core$String$fromInt(
		elm$core$Basics$round(blue * 255))) + (', ' + (elm$core$String$fromFloat(alpha) + ')')))));
};
var author$project$Testable$compareFormattedColor = F2(
	function (color, expected) {
		return _Utils_eq(
			author$project$Testable$formatColor(color),
			expected) || _Utils_eq(
			author$project$Testable$formatColorWithAlpha(color),
			expected);
	});
var author$project$Testable$Element$Background$color = function (clr) {
	return author$project$Testable$LabeledTest(
		{
			attr: author$project$Element$Background$color(clr),
			label: 'background color-' + author$project$Testable$formatColor(clr),
			test: F2(
				function (context, _n0) {
					var selfBackgroundColor = A2(
						elm$core$Maybe$withDefault,
						'notfound',
						A2(elm$core$Dict$get, 'background-color', context.self.style));
					return A2(
						elm_explorations$test$Expect$true,
						'Expected color: ' + (author$project$Testable$formatColor(clr) + (' vs found:' + selfBackgroundColor)),
						A2(author$project$Testable$compareFormattedColor, clr, selfBackgroundColor));
				})
		});
};
var author$project$Testable$Element$Font$color = function (clr) {
	return author$project$Testable$LabeledTest(
		{
			attr: author$project$Element$Font$color(clr),
			label: 'font color-' + author$project$Testable$formatColor(clr),
			test: F2(
				function (context, _n0) {
					var selfFontColor = A2(
						elm$core$Maybe$withDefault,
						'notfound',
						A2(elm$core$Dict$get, 'color', context.self.style));
					return A2(
						elm_explorations$test$Expect$true,
						'Color Match - ' + (author$project$Testable$formatColor(clr) + (' vs ' + selfFontColor)),
						A2(author$project$Testable$compareFormattedColor, clr, selfFontColor));
				})
		});
};
var author$project$Tests$Palette$blue = A3(author$project$Element$rgb, 0, 0, 1);
var author$project$Tests$Palette$darkGrey = A3(author$project$Element$rgb, 0.8, 0.8, 0.8);
var author$project$Tests$Palette$grey = author$project$Tests$Palette$darkGrey;
var author$project$Tests$Palette$white = A3(author$project$Element$rgb, 1, 1, 1);
var author$project$Tests$Basic$view = A2(
	author$project$Testable$Element$row,
	_List_fromArray(
		[
			author$project$Testable$Element$spacing(50),
			author$project$Testable$Element$alignTop
		]),
	_List_fromArray(
		[
			A2(
			author$project$Testable$Element$el,
			_List_fromArray(
				[
					author$project$Testable$Element$width(
					author$project$Testable$Element$px(200)),
					author$project$Testable$Element$height(
					author$project$Testable$Element$px(200)),
					author$project$Testable$Element$Background$color(author$project$Tests$Palette$blue),
					author$project$Testable$Element$Font$color(author$project$Tests$Palette$white)
				]),
			author$project$Testable$Element$text('Hello!')),
			A2(
			author$project$Testable$Element$el,
			_List_fromArray(
				[
					author$project$Testable$Element$width(
					author$project$Testable$Element$px(200)),
					author$project$Testable$Element$height(
					author$project$Testable$Element$px(200)),
					author$project$Testable$Element$Background$color(author$project$Tests$Palette$blue),
					author$project$Testable$Element$Font$color(author$project$Tests$Palette$white)
				]),
			author$project$Testable$Element$text('Hello!')),
			A2(
			author$project$Testable$Element$el,
			_List_fromArray(
				[
					author$project$Testable$Element$width(
					author$project$Testable$Element$px(200)),
					author$project$Testable$Element$height(
					author$project$Testable$Element$px(200)),
					author$project$Testable$Element$Background$color(
					A4(author$project$Element$rgba, 0, 0, 1, 1)),
					author$project$Testable$Element$Font$color(author$project$Tests$Palette$white),
					author$project$Testable$Element$below(
					A2(
						author$project$Testable$Element$el,
						_List_fromArray(
							[
								author$project$Testable$Element$Background$color(author$project$Tests$Palette$grey),
								author$project$Testable$Element$width(
								author$project$Testable$Element$px(50)),
								author$project$Testable$Element$height(
								author$project$Testable$Element$px(50))
							]),
						author$project$Testable$Element$none))
				]),
			author$project$Testable$Element$text('Hello!'))
		]));
var author$project$Internal$Model$Bottom = {$: 'Bottom'};
var author$project$Element$alignBottom = author$project$Internal$Model$AlignY(author$project$Internal$Model$Bottom);
var author$project$Testable$Element$alignBottom = author$project$Testable$LabeledTest(
	{
		attr: author$project$Element$alignBottom,
		label: 'alignBottom',
		test: F2(
			function (found, _n0) {
				if (A2(
					elm$core$List$member,
					found.location,
					_List_fromArray(
						[
							author$project$Testable$IsNearby(author$project$Testable$Above),
							author$project$Testable$IsNearby(author$project$Testable$Below)
						]))) {
					return A2(elm_explorations$test$Expect$true, 'alignBottom doesn\'t apply to elements that are above or below', true);
				} else {
					if (A2(
						elm$core$List$member,
						found.location,
						_List_fromArray(
							[
								author$project$Testable$IsNearby(author$project$Testable$InFront),
								author$project$Testable$IsNearby(author$project$Testable$Behind),
								author$project$Testable$IsNearby(author$project$Testable$OnRight),
								author$project$Testable$IsNearby(author$project$Testable$OnLeft)
							]))) {
						return A2(author$project$Testable$Element$expectRoundedEquality, found.self.bbox.bottom, found.parent.bbox.bottom);
					} else {
						if (!elm$core$List$length(found.siblings)) {
							return A2(author$project$Testable$Element$expectRoundedEquality, found.self.bbox.bottom, found.parent.bbox.bottom + found.parent.bbox.padding.bottom);
						} else {
							var _n1 = found.location;
							if (_n1.$ === 'InColumn') {
								var siblingsBelow = A2(
									elm$core$List$filter,
									function (x) {
										return _Utils_cmp(x.bbox.top, found.self.bbox.bottom) > 0;
									},
									found.siblings);
								var spacings = elm$core$List$length(siblingsBelow) * found.parentSpacing;
								var heightsBelow = elm$core$List$sum(
									A2(
										elm$core$List$map,
										A2(
											elm$core$Basics$composeL,
											function ($) {
												return $.height;
											},
											function ($) {
												return $.bbox;
											}),
										siblingsBelow));
								return A2(author$project$Testable$Element$expectRoundedEquality, found.self.bbox.bottom, found.parent.bbox.bottom - ((found.parent.bbox.padding.bottom + heightsBelow) + spacings));
							} else {
								return A2(author$project$Testable$Element$expectRoundedEquality, found.self.bbox.bottom, found.parent.bbox.bottom + found.parent.bbox.padding.bottom);
							}
						}
					}
				}
			})
	});
var author$project$Testable$Element$alignLeft = author$project$Testable$LabeledTest(
	{
		attr: author$project$Element$alignLeft,
		label: 'alignLeft',
		test: F2(
			function (found, _n0) {
				if (A2(
					elm$core$List$member,
					found.location,
					_List_fromArray(
						[
							author$project$Testable$IsNearby(author$project$Testable$OnLeft),
							author$project$Testable$IsNearby(author$project$Testable$OnRight)
						]))) {
					return A2(elm_explorations$test$Expect$true, 'alignLeft doesn\'t apply to elements that are onLeft or onRight', true);
				} else {
					if (A2(
						elm$core$List$member,
						found.location,
						_List_fromArray(
							[
								author$project$Testable$IsNearby(author$project$Testable$InFront),
								author$project$Testable$IsNearby(author$project$Testable$Behind),
								author$project$Testable$IsNearby(author$project$Testable$Above),
								author$project$Testable$IsNearby(author$project$Testable$Below)
							]))) {
						return A2(author$project$Testable$Element$expectRoundedEquality, found.self.bbox.left, found.parent.bbox.left);
					} else {
						if (!elm$core$List$length(found.siblings)) {
							return A2(author$project$Testable$Element$expectRoundedEquality, found.self.bbox.left, found.parent.bbox.left + found.parent.bbox.padding.left);
						} else {
							var _n1 = found.location;
							if (_n1.$ === 'InRow') {
								var siblingsOnLeft = A2(
									elm$core$List$filter,
									function (x) {
										return _Utils_cmp(x.bbox.right, found.self.bbox.left) < 0;
									},
									found.siblings);
								var spacings = elm$core$List$length(siblingsOnLeft) * found.parentSpacing;
								var widthsOnLeft = elm$core$List$sum(
									A2(
										elm$core$List$map,
										A2(
											elm$core$Basics$composeL,
											function ($) {
												return $.width;
											},
											function ($) {
												return $.bbox;
											}),
										siblingsOnLeft));
								return A2(author$project$Testable$Element$expectRoundedEquality, found.self.bbox.left, found.parent.bbox.left + ((found.parent.bbox.padding.left + widthsOnLeft) + spacings));
							} else {
								return A2(author$project$Testable$Element$expectRoundedEquality, found.self.bbox.left, found.parent.bbox.left + found.parent.bbox.padding.left);
							}
						}
					}
				}
			})
	});
var author$project$Internal$Model$Right = {$: 'Right'};
var author$project$Element$alignRight = author$project$Internal$Model$AlignX(author$project$Internal$Model$Right);
var author$project$Testable$Element$alignRight = author$project$Testable$LabeledTest(
	{
		attr: author$project$Element$alignRight,
		label: 'alignRight',
		test: F2(
			function (found, _n0) {
				if (A2(
					elm$core$List$member,
					found.location,
					_List_fromArray(
						[
							author$project$Testable$IsNearby(author$project$Testable$OnLeft),
							author$project$Testable$IsNearby(author$project$Testable$OnRight)
						]))) {
					return A2(elm_explorations$test$Expect$true, 'alignRight doesn\'t apply to elements that are onLeft or onRight', true);
				} else {
					if (A2(
						elm$core$List$member,
						found.location,
						_List_fromArray(
							[
								author$project$Testable$IsNearby(author$project$Testable$InFront),
								author$project$Testable$IsNearby(author$project$Testable$Behind),
								author$project$Testable$IsNearby(author$project$Testable$Above),
								author$project$Testable$IsNearby(author$project$Testable$Below)
							]))) {
						return A2(author$project$Testable$Element$expectRoundedEquality, found.self.bbox.right, found.parent.bbox.right);
					} else {
						if (!elm$core$List$length(found.siblings)) {
							return A2(author$project$Testable$Element$expectRoundedEquality, found.self.bbox.right, found.parent.bbox.right + found.parent.bbox.padding.right);
						} else {
							var _n1 = found.location;
							if (_n1.$ === 'InRow') {
								var siblingsOnRight = A2(
									elm$core$List$filter,
									function (x) {
										return _Utils_cmp(x.bbox.left, found.self.bbox.right) > 0;
									},
									found.siblings);
								var spacings = elm$core$List$length(siblingsOnRight) * found.parentSpacing;
								var widthsOnRight = elm$core$List$sum(
									A2(
										elm$core$List$map,
										A2(
											elm$core$Basics$composeL,
											function ($) {
												return $.width;
											},
											function ($) {
												return $.bbox;
											}),
										siblingsOnRight));
								return A2(author$project$Testable$Element$expectRoundedEquality, found.self.bbox.right, found.parent.bbox.right - ((found.parent.bbox.padding.right + widthsOnRight) + spacings));
							} else {
								return A2(author$project$Testable$Element$expectRoundedEquality, found.self.bbox.right, found.parent.bbox.right + found.parent.bbox.padding.right);
							}
						}
					}
				}
			})
	});
var author$project$Internal$Model$CenterX = {$: 'CenterX'};
var author$project$Element$centerX = author$project$Internal$Model$AlignX(author$project$Internal$Model$CenterX);
var author$project$Testable$Element$centerX = author$project$Testable$LabeledTest(
	{
		attr: author$project$Element$centerX,
		label: 'centerX',
		test: F2(
			function (found, _n0) {
				var selfCenter = found.self.bbox.left + (found.self.bbox.width / 2);
				var parentCenter = found.parent.bbox.left + (found.parent.bbox.width / 2);
				if (A2(
					elm$core$List$member,
					found.location,
					_List_fromArray(
						[
							author$project$Testable$IsNearby(author$project$Testable$OnRight),
							author$project$Testable$IsNearby(author$project$Testable$OnLeft)
						]))) {
					return A2(elm_explorations$test$Expect$true, 'centerX doesn\'t apply to elements that are onLeft or onRight', true);
				} else {
					if (!elm$core$List$length(found.siblings)) {
						return A2(author$project$Testable$Element$expectRoundedEquality, selfCenter, parentCenter);
					} else {
						var _n1 = found.location;
						if (_n1.$ === 'InRow') {
							var siblingsOnRight = A2(
								elm$core$List$filter,
								function (x) {
									return _Utils_cmp(x.bbox.left, found.self.bbox.right) > 0;
								},
								found.siblings);
							var widthsOnRight = function (x) {
								return x + (elm$core$List$length(siblingsOnRight) * found.parentSpacing);
							}(
								elm$core$List$sum(
									A2(
										elm$core$List$map,
										A2(
											elm$core$Basics$composeL,
											function ($) {
												return $.width;
											},
											function ($) {
												return $.bbox;
											}),
										siblingsOnRight)));
							var siblingsOnLeft = A2(
								elm$core$List$filter,
								function (x) {
									return _Utils_cmp(x.bbox.right, found.self.bbox.left) < 0;
								},
								found.siblings);
							var widthsOnLeft = function (x) {
								return x + (elm$core$List$length(siblingsOnLeft) * found.parentSpacing);
							}(
								elm$core$List$sum(
									A2(
										elm$core$List$map,
										A2(
											elm$core$Basics$composeL,
											function ($) {
												return $.width;
											},
											function ($) {
												return $.bbox;
											}),
										siblingsOnLeft)));
							var expectedCenter = (found.parent.bbox.left + widthsOnLeft) + ((found.parent.bbox.width - (widthsOnRight + widthsOnLeft)) / 2);
							return A2(author$project$Testable$Element$expectRoundedEquality, selfCenter, expectedCenter);
						} else {
							return A2(author$project$Testable$Element$expectRoundedEquality, selfCenter, parentCenter);
						}
					}
				}
			})
	});
var author$project$Internal$Model$CenterY = {$: 'CenterY'};
var author$project$Element$centerY = author$project$Internal$Model$AlignY(author$project$Internal$Model$CenterY);
var author$project$Testable$Element$centerY = author$project$Testable$LabeledTest(
	{
		attr: author$project$Element$centerY,
		label: 'centerY',
		test: F2(
			function (found, _n0) {
				var selfCenter = found.self.bbox.top + (found.self.bbox.height / 2);
				var parentCenter = found.parent.bbox.top + (found.parent.bbox.height / 2);
				if (A2(
					elm$core$List$member,
					found.location,
					_List_fromArray(
						[
							author$project$Testable$IsNearby(author$project$Testable$Above),
							author$project$Testable$IsNearby(author$project$Testable$Below)
						]))) {
					return A2(elm_explorations$test$Expect$true, 'centerY doesn\'t apply to elements that are above or below', true);
				} else {
					if (!elm$core$List$length(found.siblings)) {
						return A2(author$project$Testable$Element$expectRoundedEquality, selfCenter, parentCenter);
					} else {
						var _n1 = found.location;
						if (_n1.$ === 'InColumn') {
							var siblingsOnTop = A2(
								elm$core$List$filter,
								function (x) {
									return _Utils_cmp(x.bbox.bottom, found.self.bbox.top) < 0;
								},
								found.siblings);
							var siblingsBelow = A2(
								elm$core$List$filter,
								function (x) {
									return _Utils_cmp(x.bbox.top, found.self.bbox.bottom) > 0;
								},
								found.siblings);
							var heightsBelow = function (x) {
								return x + (elm$core$List$length(siblingsBelow) * found.parentSpacing);
							}(
								elm$core$List$sum(
									A2(
										elm$core$List$map,
										A2(
											elm$core$Basics$composeL,
											function ($) {
												return $.height;
											},
											function ($) {
												return $.bbox;
											}),
										siblingsBelow)));
							var heightsAbove = function (x) {
								return x + (elm$core$List$length(siblingsOnTop) * found.parentSpacing);
							}(
								elm$core$List$sum(
									A2(
										elm$core$List$map,
										A2(
											elm$core$Basics$composeL,
											function ($) {
												return $.height;
											},
											function ($) {
												return $.bbox;
											}),
										siblingsOnTop)));
							var expectedCenter = (found.parent.bbox.top + heightsAbove) + ((found.parent.bbox.height - (heightsBelow + heightsAbove)) / 2);
							return A2(author$project$Testable$Element$expectRoundedEquality, selfCenter, expectedCenter);
						} else {
							return A2(author$project$Testable$Element$expectRoundedEquality, selfCenter, parentCenter);
						}
					}
				}
			})
	});
var author$project$Testable$Element$column = author$project$Testable$Column;
var author$project$Testable$Element$Fill = function (a) {
	return {$: 'Fill', a: a};
};
var author$project$Testable$Element$fill = author$project$Testable$Element$Fill(1);
var author$project$Testable$Label = function (a) {
	return {$: 'Label', a: a};
};
var author$project$Testable$Element$label = author$project$Testable$Label;
var author$project$Tests$ColumnAlignment$box = function (attrs) {
	return A2(
		author$project$Testable$Element$el,
		_Utils_ap(
			_List_fromArray(
				[
					author$project$Testable$Element$width(
					author$project$Testable$Element$px(50)),
					author$project$Testable$Element$height(
					author$project$Testable$Element$px(50)),
					author$project$Testable$Element$Background$color(author$project$Tests$Palette$blue)
				]),
			attrs),
		author$project$Testable$Element$none);
};
var author$project$Tests$Palette$lightGrey = A3(author$project$Element$rgb, 0.5, 0.5, 0.5);
var author$project$Tests$ColumnAlignment$view = function () {
	var tallContainer = F2(
		function (attrs, children) {
			return A2(
				author$project$Testable$Element$column,
				_Utils_ap(
					_List_fromArray(
						[
							author$project$Testable$Element$Background$color(author$project$Tests$Palette$lightGrey),
							author$project$Testable$Element$spacing(20),
							author$project$Testable$Element$width(
							author$project$Testable$Element$px(100)),
							author$project$Testable$Element$height(author$project$Testable$Element$fill)
						]),
					attrs),
				children);
		});
	var colContainer = F2(
		function (attrs, children) {
			return A2(
				author$project$Testable$Element$column,
				_Utils_ap(
					_List_fromArray(
						[
							author$project$Testable$Element$Background$color(author$project$Tests$Palette$lightGrey),
							author$project$Testable$Element$spacing(20),
							author$project$Testable$Element$width(
							author$project$Testable$Element$px(100)),
							author$project$Testable$Element$height(
							author$project$Testable$Element$px(500))
						]),
					attrs),
				children);
		});
	return A2(
		author$project$Testable$Element$column,
		_List_fromArray(
			[
				author$project$Testable$Element$width(author$project$Testable$Element$fill),
				author$project$Testable$Element$spacing(20)
			]),
		_List_fromArray(
			[
				A2(
				author$project$Testable$Element$el,
				_List_Nil,
				author$project$Testable$Element$text('Alignment Within a Column')),
				A2(
				author$project$Testable$Element$row,
				_List_fromArray(
					[
						author$project$Testable$Element$spacing(20)
					]),
				_List_fromArray(
					[
						A2(
						colContainer,
						_List_Nil,
						_List_fromArray(
							[
								author$project$Tests$ColumnAlignment$box(_List_Nil)
							])),
						A2(
						colContainer,
						_List_Nil,
						_List_fromArray(
							[
								author$project$Tests$ColumnAlignment$box(
								_List_fromArray(
									[author$project$Testable$Element$centerY]))
							])),
						A2(
						colContainer,
						_List_Nil,
						_List_fromArray(
							[
								author$project$Tests$ColumnAlignment$box(
								_List_fromArray(
									[
										author$project$Testable$Element$alignBottom,
										author$project$Testable$Element$label('first')
									]))
							]))
					])),
				A2(
				author$project$Testable$Element$row,
				_List_fromArray(
					[
						author$project$Testable$Element$spacing(20)
					]),
				_List_fromArray(
					[
						A2(
						colContainer,
						_List_Nil,
						_List_fromArray(
							[
								author$project$Tests$ColumnAlignment$box(_List_Nil)
							])),
						A2(
						colContainer,
						_List_Nil,
						_List_fromArray(
							[
								author$project$Tests$ColumnAlignment$box(_List_Nil),
								author$project$Tests$ColumnAlignment$box(_List_Nil),
								author$project$Tests$ColumnAlignment$box(_List_Nil)
							])),
						A2(
						colContainer,
						_List_Nil,
						_List_fromArray(
							[
								author$project$Tests$ColumnAlignment$box(
								_List_fromArray(
									[
										author$project$Testable$Element$alignLeft,
										author$project$Testable$Element$label('first')
									])),
								author$project$Tests$ColumnAlignment$box(
								_List_fromArray(
									[
										author$project$Testable$Element$centerX,
										author$project$Testable$Element$label('second')
									])),
								author$project$Tests$ColumnAlignment$box(
								_List_fromArray(
									[
										author$project$Testable$Element$alignRight,
										author$project$Testable$Element$label('third')
									]))
							]))
					])),
				A2(
				author$project$Testable$Element$row,
				_List_fromArray(
					[
						author$project$Testable$Element$spacing(20)
					]),
				_List_fromArray(
					[
						A2(
						colContainer,
						_List_Nil,
						_List_fromArray(
							[
								author$project$Tests$ColumnAlignment$box(_List_Nil),
								author$project$Tests$ColumnAlignment$box(_List_Nil),
								author$project$Tests$ColumnAlignment$box(_List_Nil)
							])),
						A2(
						colContainer,
						_List_Nil,
						_List_fromArray(
							[
								author$project$Tests$ColumnAlignment$box(_List_Nil),
								author$project$Tests$ColumnAlignment$box(_List_Nil),
								author$project$Tests$ColumnAlignment$box(
								_List_fromArray(
									[
										author$project$Testable$Element$alignBottom,
										author$project$Testable$Element$label('third')
									]))
							])),
						A2(
						colContainer,
						_List_Nil,
						_List_fromArray(
							[
								author$project$Tests$ColumnAlignment$box(_List_Nil),
								author$project$Tests$ColumnAlignment$box(
								_List_fromArray(
									[
										author$project$Testable$Element$alignBottom,
										author$project$Testable$Element$label('second')
									])),
								author$project$Tests$ColumnAlignment$box(_List_Nil)
							])),
						A2(
						colContainer,
						_List_Nil,
						_List_fromArray(
							[
								author$project$Tests$ColumnAlignment$box(
								_List_fromArray(
									[
										author$project$Testable$Element$alignBottom,
										author$project$Testable$Element$label('first')
									])),
								author$project$Tests$ColumnAlignment$box(_List_Nil),
								author$project$Tests$ColumnAlignment$box(_List_Nil)
							]))
					])),
				author$project$Testable$Element$text('centerY'),
				A2(
				author$project$Testable$Element$row,
				_List_fromArray(
					[
						author$project$Testable$Element$spacing(20)
					]),
				_List_fromArray(
					[
						A2(
						colContainer,
						_List_fromArray(
							[
								author$project$Testable$Element$height(author$project$Testable$Element$fill)
							]),
						_List_fromArray(
							[
								author$project$Tests$ColumnAlignment$box(
								_List_fromArray(
									[
										author$project$Testable$Element$centerY,
										author$project$Testable$Element$label('solo')
									]))
							])),
						A2(
						colContainer,
						_List_Nil,
						_List_fromArray(
							[
								author$project$Tests$ColumnAlignment$box(_List_Nil),
								author$project$Tests$ColumnAlignment$box(
								_List_fromArray(
									[
										author$project$Testable$Element$centerY,
										author$project$Testable$Element$label('middle')
									])),
								author$project$Tests$ColumnAlignment$box(_List_Nil)
							])),
						A2(
						colContainer,
						_List_Nil,
						_List_fromArray(
							[
								author$project$Tests$ColumnAlignment$box(_List_Nil),
								author$project$Tests$ColumnAlignment$box(_List_Nil),
								author$project$Tests$ColumnAlignment$box(
								_List_fromArray(
									[
										author$project$Testable$Element$centerY,
										author$project$Testable$Element$label('last')
									]))
							]))
					])),
				author$project$Testable$Element$text('multiple centerY'),
				A2(
				author$project$Testable$Element$row,
				_List_fromArray(
					[
						author$project$Testable$Element$height(
						author$project$Testable$Element$px(800)),
						author$project$Testable$Element$spacing(20)
					]),
				_List_fromArray(
					[
						A2(
						tallContainer,
						_List_Nil,
						_List_fromArray(
							[
								author$project$Tests$ColumnAlignment$box(_List_Nil),
								author$project$Tests$ColumnAlignment$box(
								_List_fromArray(
									[author$project$Testable$Element$centerY])),
								author$project$Tests$ColumnAlignment$box(
								_List_fromArray(
									[author$project$Testable$Element$centerY])),
								author$project$Tests$ColumnAlignment$box(
								_List_fromArray(
									[author$project$Testable$Element$centerY])),
								author$project$Tests$ColumnAlignment$box(
								_List_fromArray(
									[author$project$Testable$Element$centerY])),
								author$project$Tests$ColumnAlignment$box(
								_List_fromArray(
									[author$project$Testable$Element$alignBottom]))
							])),
						A2(
						tallContainer,
						_List_Nil,
						_List_fromArray(
							[
								author$project$Tests$ColumnAlignment$box(_List_Nil),
								author$project$Tests$ColumnAlignment$box(
								_List_fromArray(
									[author$project$Testable$Element$centerY])),
								author$project$Tests$ColumnAlignment$box(_List_Nil)
							])),
						A2(
						tallContainer,
						_List_Nil,
						_List_fromArray(
							[
								author$project$Tests$ColumnAlignment$box(_List_Nil),
								author$project$Tests$ColumnAlignment$box(_List_Nil),
								author$project$Tests$ColumnAlignment$box(
								_List_fromArray(
									[author$project$Testable$Element$centerY]))
							]))
					])),
				author$project$Testable$Element$text('top, center, bottom'),
				A2(
				author$project$Testable$Element$row,
				_List_fromArray(
					[
						author$project$Testable$Element$spacing(20)
					]),
				_List_fromArray(
					[
						A2(
						colContainer,
						_List_Nil,
						_List_fromArray(
							[
								author$project$Tests$ColumnAlignment$box(
								_List_fromArray(
									[
										author$project$Testable$Element$alignTop,
										author$project$Testable$Element$label('first')
									])),
								author$project$Tests$ColumnAlignment$box(_List_Nil),
								author$project$Tests$ColumnAlignment$box(
								_List_fromArray(
									[
										author$project$Testable$Element$alignBottom,
										author$project$Testable$Element$label('last')
									]))
							])),
						A2(
						colContainer,
						_List_Nil,
						_List_fromArray(
							[
								author$project$Tests$ColumnAlignment$box(
								_List_fromArray(
									[author$project$Testable$Element$alignTop])),
								author$project$Tests$ColumnAlignment$box(
								_List_fromArray(
									[author$project$Testable$Element$centerY])),
								author$project$Tests$ColumnAlignment$box(
								_List_fromArray(
									[author$project$Testable$Element$alignBottom]))
							])),
						A2(
						colContainer,
						_List_Nil,
						_List_fromArray(
							[
								author$project$Tests$ColumnAlignment$box(
								_List_fromArray(
									[author$project$Testable$Element$alignLeft, author$project$Testable$Element$alignTop])),
								author$project$Tests$ColumnAlignment$box(
								_List_fromArray(
									[author$project$Testable$Element$centerX, author$project$Testable$Element$centerY])),
								author$project$Tests$ColumnAlignment$box(
								_List_fromArray(
									[author$project$Testable$Element$alignRight, author$project$Testable$Element$alignBottom]))
							]))
					])),
				A2(
				author$project$Testable$Element$el,
				_List_fromArray(
					[
						author$project$Testable$Element$width(author$project$Testable$Element$fill)
					]),
				author$project$Testable$Element$text('Column in a Row')),
				A2(
				author$project$Testable$Element$row,
				_List_fromArray(
					[
						author$project$Testable$Element$width(author$project$Testable$Element$fill),
						author$project$Testable$Element$spacing(20),
						author$project$Testable$Element$label('row')
					]),
				_List_fromArray(
					[
						author$project$Tests$ColumnAlignment$box(
						_List_fromArray(
							[
								author$project$Testable$Element$alignLeft,
								author$project$Testable$Element$alignTop,
								author$project$Testable$Element$label('box')
							])),
						A2(
						author$project$Testable$Element$column,
						_List_fromArray(
							[
								author$project$Testable$Element$alignLeft,
								author$project$Testable$Element$alignTop,
								author$project$Testable$Element$spacing(20),
								author$project$Testable$Element$label('column'),
								author$project$Testable$Element$Background$color(author$project$Tests$Palette$lightGrey)
							]),
						_List_fromArray(
							[
								author$project$Tests$ColumnAlignment$box(_List_Nil),
								author$project$Tests$ColumnAlignment$box(_List_Nil),
								author$project$Tests$ColumnAlignment$box(_List_Nil)
							])),
						A2(
						author$project$Testable$Element$column,
						_List_fromArray(
							[
								author$project$Testable$Element$spacing(20),
								author$project$Testable$Element$width(
								author$project$Testable$Element$px(100)),
								author$project$Testable$Element$alignLeft,
								author$project$Testable$Element$alignTop,
								author$project$Testable$Element$Background$color(author$project$Tests$Palette$lightGrey)
							]),
						_List_fromArray(
							[
								author$project$Tests$ColumnAlignment$box(_List_Nil),
								author$project$Tests$ColumnAlignment$box(_List_Nil),
								author$project$Tests$ColumnAlignment$box(_List_Nil)
							])),
						A2(
						colContainer,
						_List_Nil,
						_List_fromArray(
							[
								author$project$Tests$ColumnAlignment$box(
								_List_fromArray(
									[author$project$Testable$Element$alignRight])),
								author$project$Tests$ColumnAlignment$box(
								_List_fromArray(
									[author$project$Testable$Element$centerX])),
								author$project$Tests$ColumnAlignment$box(
								_List_fromArray(
									[author$project$Testable$Element$alignLeft]))
							]))
					]))
			]));
}();
var author$project$Testable$Element$onRight = function (element) {
	return author$project$Testable$Nearby(
		{
			element: element,
			label: 'onRight',
			location: author$project$Testable$OnRight,
			test: F2(
				function (found, _n0) {
					return A2(author$project$Testable$Element$expectRoundedEquality, found.self.bbox.left, found.parent.bbox.right);
				})
		});
};
var author$project$Tests$ColumnSpacing$box = function (attrs) {
	return A2(
		author$project$Testable$Element$el,
		_Utils_ap(
			_List_fromArray(
				[
					author$project$Testable$Element$width(
					author$project$Testable$Element$px(50)),
					author$project$Testable$Element$height(
					author$project$Testable$Element$px(50)),
					author$project$Testable$Element$Background$color(author$project$Tests$Palette$blue)
				]),
			attrs),
		author$project$Testable$Element$none);
};
var author$project$Tests$Palette$darkCharcoal = A3(author$project$Element$rgb, 0.9, 0.9, 0.9);
var author$project$Tests$ColumnSpacing$tinyBox = function (attrs) {
	return A2(
		author$project$Testable$Element$el,
		_Utils_ap(
			_List_fromArray(
				[
					author$project$Testable$Element$width(
					author$project$Testable$Element$px(20)),
					author$project$Testable$Element$height(
					author$project$Testable$Element$px(20)),
					author$project$Testable$Element$Background$color(author$project$Tests$Palette$darkCharcoal)
				]),
			attrs),
		author$project$Testable$Element$none);
};
var author$project$Tests$ColumnSpacing$view = function () {
	var colContainer = F2(
		function (attrs, children) {
			return A2(
				author$project$Testable$Element$column,
				_Utils_ap(
					_List_fromArray(
						[
							author$project$Testable$Element$spacing(20),
							author$project$Testable$Element$width(
							author$project$Testable$Element$px(100)),
							author$project$Testable$Element$height(
							author$project$Testable$Element$px(500))
						]),
					attrs),
				children);
		});
	return A2(
		author$project$Testable$Element$column,
		_List_Nil,
		_List_fromArray(
			[
				A2(
				author$project$Testable$Element$el,
				_List_Nil,
				author$project$Testable$Element$text('Spacing within a column')),
				A2(
				author$project$Testable$Element$row,
				_List_Nil,
				_List_fromArray(
					[
						A2(
						colContainer,
						_List_Nil,
						_List_fromArray(
							[
								author$project$Tests$ColumnSpacing$box(_List_Nil)
							])),
						A2(
						colContainer,
						_List_Nil,
						_List_fromArray(
							[
								author$project$Tests$ColumnSpacing$box(_List_Nil),
								author$project$Tests$ColumnSpacing$box(_List_Nil),
								author$project$Tests$ColumnSpacing$box(_List_Nil)
							])),
						A2(
						colContainer,
						_List_fromArray(
							[
								author$project$Testable$Element$onRight(
								author$project$Tests$ColumnSpacing$tinyBox(_List_Nil))
							]),
						_List_fromArray(
							[
								author$project$Tests$ColumnSpacing$box(_List_Nil),
								author$project$Tests$ColumnSpacing$box(_List_Nil),
								author$project$Tests$ColumnSpacing$box(_List_Nil)
							]))
					]))
			]));
}();
var author$project$Testable$Element$Maximum = F2(
	function (a, b) {
		return {$: 'Maximum', a: a, b: b};
	});
var author$project$Testable$Element$maximum = author$project$Testable$Element$Maximum;
var author$project$Testable$Element$Minimum = F2(
	function (a, b) {
		return {$: 'Minimum', a: a, b: b};
	});
var author$project$Testable$Element$minimum = author$project$Testable$Element$Minimum;
var author$project$Testable$Element$Shrink = {$: 'Shrink'};
var author$project$Testable$Element$shrink = author$project$Testable$Element$Shrink;
var author$project$Generator$lengths = _List_fromArray(
	[
		author$project$Testable$Element$px(50),
		author$project$Testable$Element$fill,
		author$project$Testable$Element$shrink,
		A2(author$project$Testable$Element$maximum, 100, author$project$Testable$Element$fill),
		A2(
		author$project$Testable$Element$minimum,
		50,
		A2(author$project$Testable$Element$maximum, 100, author$project$Testable$Element$fill)),
		A2(author$project$Testable$Element$maximum, 100, author$project$Testable$Element$shrink),
		A2(
		author$project$Testable$Element$minimum,
		50,
		A2(author$project$Testable$Element$maximum, 100, author$project$Testable$Element$shrink))
	]);
var author$project$Generator$allLengthPairs = function () {
	var crossProduct = function (len) {
		return A2(
			elm$core$List$map,
			elm$core$Tuple$pair(len),
			author$project$Generator$lengths);
	};
	return A2(elm$core$List$concatMap, crossProduct, author$project$Generator$lengths);
}();
var author$project$Generator$sizes = function (render) {
	return A2(
		elm$core$List$concatMap,
		function (_n0) {
			var widthLen = _n0.a;
			var heightLen = _n0.b;
			return _List_fromArray(
				[
					author$project$Testable$Element$text(
					elm$core$Debug$toString(
						_Utils_Tuple2(widthLen, heightLen))),
					render(
					F2(
						function (attrs, children) {
							return A2(
								author$project$Testable$Element$el,
								A2(
									elm$core$List$cons,
									author$project$Testable$Element$width(widthLen),
									A2(
										elm$core$List$cons,
										author$project$Testable$Element$height(heightLen),
										attrs)),
								children);
						}))
				]);
		},
		author$project$Generator$allLengthPairs);
};
var author$project$Tests$ElementAlignment$box = function (attrs) {
	return A2(
		author$project$Testable$Element$el,
		_Utils_ap(
			_List_fromArray(
				[
					author$project$Testable$Element$width(
					author$project$Testable$Element$px(50)),
					author$project$Testable$Element$height(
					author$project$Testable$Element$px(50)),
					author$project$Testable$Element$Background$color(author$project$Tests$Palette$blue)
				]),
			attrs),
		author$project$Testable$Element$none);
};
var author$project$Tests$ElementAlignment$container = author$project$Testable$Element$el(
	_List_fromArray(
		[
			author$project$Testable$Element$width(
			author$project$Testable$Element$px(200)),
			author$project$Testable$Element$height(
			author$project$Testable$Element$px(200)),
			author$project$Testable$Element$Background$color(author$project$Tests$Palette$lightGrey)
		]));
var author$project$Tests$ElementAlignment$view = A2(
	author$project$Testable$Element$column,
	_List_Nil,
	_List_fromArray(
		[
			A2(
			author$project$Testable$Element$el,
			_List_Nil,
			author$project$Testable$Element$text('Alignment Within an El')),
			author$project$Tests$ElementAlignment$container(
			author$project$Tests$ElementAlignment$box(_List_Nil)),
			author$project$Testable$Element$text('alignLeft, centerX, alignRight'),
			A2(
			author$project$Testable$Element$column,
			_List_fromArray(
				[
					author$project$Testable$Element$spacing(20)
				]),
			author$project$Generator$sizes(
				function (resizeable) {
					return A2(
						author$project$Testable$Element$row,
						_List_fromArray(
							[
								author$project$Testable$Element$spacing(20)
							]),
						_List_fromArray(
							[
								author$project$Tests$ElementAlignment$container(
								A2(
									resizeable,
									_List_fromArray(
										[
											author$project$Testable$Element$Background$color(author$project$Tests$Palette$blue),
											author$project$Testable$Element$alignLeft
										]),
									author$project$Testable$Element$none)),
								author$project$Tests$ElementAlignment$container(
								A2(
									resizeable,
									_List_fromArray(
										[
											author$project$Testable$Element$Background$color(author$project$Tests$Palette$blue),
											author$project$Testable$Element$centerX
										]),
									author$project$Testable$Element$none)),
								author$project$Tests$ElementAlignment$container(
								A2(
									resizeable,
									_List_fromArray(
										[
											author$project$Testable$Element$Background$color(author$project$Tests$Palette$blue),
											author$project$Testable$Element$alignRight
										]),
									author$project$Testable$Element$none))
							]));
				})),
			author$project$Testable$Element$text('top, centerY, bottom'),
			A2(
			author$project$Testable$Element$column,
			_List_fromArray(
				[
					author$project$Testable$Element$spacing(20)
				]),
			author$project$Generator$sizes(
				function (resizeable) {
					return A2(
						author$project$Testable$Element$row,
						_List_fromArray(
							[
								author$project$Testable$Element$spacing(20)
							]),
						_List_fromArray(
							[
								author$project$Tests$ElementAlignment$container(
								A2(
									resizeable,
									_List_fromArray(
										[author$project$Testable$Element$alignTop]),
									author$project$Testable$Element$none)),
								author$project$Tests$ElementAlignment$container(
								A2(
									resizeable,
									_List_fromArray(
										[author$project$Testable$Element$centerY]),
									author$project$Testable$Element$none)),
								author$project$Tests$ElementAlignment$container(
								A2(
									resizeable,
									_List_fromArray(
										[author$project$Testable$Element$alignBottom]),
									author$project$Testable$Element$none))
							]));
				})),
			author$project$Testable$Element$text('align top ++ alignments'),
			A2(
			author$project$Testable$Element$column,
			_List_fromArray(
				[
					author$project$Testable$Element$spacing(20)
				]),
			author$project$Generator$sizes(
				function (resizeable) {
					return A2(
						author$project$Testable$Element$row,
						_List_fromArray(
							[
								author$project$Testable$Element$spacing(20)
							]),
						_List_fromArray(
							[
								author$project$Tests$ElementAlignment$container(
								A2(
									resizeable,
									_List_fromArray(
										[author$project$Testable$Element$alignTop, author$project$Testable$Element$alignLeft]),
									author$project$Testable$Element$none)),
								author$project$Tests$ElementAlignment$container(
								A2(
									resizeable,
									_List_fromArray(
										[author$project$Testable$Element$alignTop, author$project$Testable$Element$centerX]),
									author$project$Testable$Element$none)),
								author$project$Tests$ElementAlignment$container(
								A2(
									resizeable,
									_List_fromArray(
										[author$project$Testable$Element$alignTop, author$project$Testable$Element$alignRight]),
									author$project$Testable$Element$none))
							]));
				})),
			author$project$Testable$Element$text('centerY ++ alignments'),
			A2(
			author$project$Testable$Element$column,
			_List_fromArray(
				[
					author$project$Testable$Element$spacing(20)
				]),
			author$project$Generator$sizes(
				function (resizeable) {
					return A2(
						author$project$Testable$Element$row,
						_List_fromArray(
							[
								author$project$Testable$Element$spacing(20)
							]),
						_List_fromArray(
							[
								author$project$Tests$ElementAlignment$container(
								A2(
									resizeable,
									_List_fromArray(
										[author$project$Testable$Element$centerY, author$project$Testable$Element$alignLeft]),
									author$project$Testable$Element$none)),
								author$project$Tests$ElementAlignment$container(
								A2(
									resizeable,
									_List_fromArray(
										[author$project$Testable$Element$centerY, author$project$Testable$Element$centerX]),
									author$project$Testable$Element$none)),
								author$project$Tests$ElementAlignment$container(
								A2(
									resizeable,
									_List_fromArray(
										[author$project$Testable$Element$centerY, author$project$Testable$Element$alignRight]),
									author$project$Testable$Element$none))
							]));
				})),
			author$project$Testable$Element$text('alignBottom ++ alignments'),
			A2(
			author$project$Testable$Element$column,
			_List_fromArray(
				[
					author$project$Testable$Element$spacing(20)
				]),
			author$project$Generator$sizes(
				function (resizeable) {
					return A2(
						author$project$Testable$Element$row,
						_List_fromArray(
							[
								author$project$Testable$Element$spacing(20)
							]),
						_List_fromArray(
							[
								author$project$Tests$ElementAlignment$container(
								A2(
									resizeable,
									_List_fromArray(
										[author$project$Testable$Element$alignBottom, author$project$Testable$Element$alignLeft]),
									author$project$Testable$Element$none)),
								author$project$Tests$ElementAlignment$container(
								A2(
									resizeable,
									_List_fromArray(
										[author$project$Testable$Element$alignBottom, author$project$Testable$Element$centerX]),
									author$project$Testable$Element$none)),
								author$project$Tests$ElementAlignment$container(
								A2(
									resizeable,
									_List_fromArray(
										[author$project$Testable$Element$alignBottom, author$project$Testable$Element$alignRight]),
									author$project$Testable$Element$none))
							]));
				}))
		]));
var author$project$Testable$Element$above = function (element) {
	return author$project$Testable$Nearby(
		{
			element: element,
			label: 'above',
			location: author$project$Testable$Above,
			test: F2(
				function (found, _n0) {
					return A2(author$project$Testable$Element$expectRoundedEquality, found.self.bbox.bottom, found.parent.bbox.top);
				})
		});
};
var author$project$Testable$Element$compare = F3(
	function (x, vs, y) {
		return A2(
			vs,
			elm$core$Basics$round(x),
			elm$core$Basics$round(y)) || A2(
			vs,
			elm$core$Basics$floor(x),
			elm$core$Basics$floor(y));
	});
var elm$core$List$all = F2(
	function (isOkay, list) {
		return !A2(
			elm$core$List$any,
			A2(elm$core$Basics$composeL, elm$core$Basics$not, isOkay),
			list);
	});
var author$project$Testable$Element$withinHelper = F2(
	function (found, _n0) {
		var verticalCheck = (_Utils_cmp(found.self.bbox.width, found.parent.bbox.width) > 0) ? _List_fromArray(
			[
				A3(author$project$Testable$Element$compare, found.self.bbox.top, elm$core$Basics$ge, found.parent.bbox.top) || A3(author$project$Testable$Element$compare, found.self.bbox.bottom, elm$core$Basics$le, found.parent.bbox.bottom)
			]) : _List_fromArray(
			[
				A3(author$project$Testable$Element$compare, found.self.bbox.top, elm$core$Basics$ge, found.parent.bbox.top),
				A3(author$project$Testable$Element$compare, found.self.bbox.bottom, elm$core$Basics$le, found.parent.bbox.bottom)
			]);
		var horizontalCheck = (_Utils_cmp(found.self.bbox.width, found.parent.bbox.width) > 0) ? _List_fromArray(
			[
				A3(author$project$Testable$Element$compare, found.self.bbox.right, elm$core$Basics$le, found.parent.bbox.right) || A3(author$project$Testable$Element$compare, found.self.bbox.left, elm$core$Basics$ge, found.parent.bbox.left)
			]) : _List_fromArray(
			[
				A3(author$project$Testable$Element$compare, found.self.bbox.right, elm$core$Basics$le, found.parent.bbox.right),
				A3(author$project$Testable$Element$compare, found.self.bbox.left, elm$core$Basics$ge, found.parent.bbox.left)
			]);
		return A2(
			elm_explorations$test$Expect$true,
			'within the confines of the parent',
			A2(
				elm$core$List$all,
				elm$core$Basics$eq(true),
				elm$core$List$concat(
					_List_fromArray(
						[horizontalCheck, verticalCheck]))));
	});
var author$project$Testable$Element$behindContent = function (element) {
	return author$project$Testable$Nearby(
		{element: element, label: 'behindContent', location: author$project$Testable$Behind, test: author$project$Testable$Element$withinHelper});
};
var author$project$Testable$Element$inFront = function (element) {
	return author$project$Testable$Nearby(
		{element: element, label: 'inFront', location: author$project$Testable$InFront, test: author$project$Testable$Element$withinHelper});
};
var author$project$Testable$Element$onLeft = function (element) {
	return author$project$Testable$Nearby(
		{
			element: element,
			label: 'onLeft',
			location: author$project$Testable$OnLeft,
			test: F2(
				function (found, _n0) {
					return A2(author$project$Testable$Element$expectRoundedEquality, found.self.bbox.right, found.parent.bbox.left);
				})
		});
};
var author$project$Testable$Element$padding = function (pad) {
	return author$project$Testable$LabeledTest(
		{
			attr: author$project$Element$padding(pad),
			label: 'padding ' + elm$core$String$fromInt(pad),
			test: F2(
				function (found, _n0) {
					return A2(
						elm_explorations$test$Expect$true,
						'Padding ' + (elm$core$String$fromInt(pad) + ' is present'),
						A2(
							elm$core$List$all,
							elm$core$Basics$eq(pad),
							_List_fromArray(
								[
									elm$core$Basics$floor(found.self.bbox.padding.left),
									elm$core$Basics$floor(found.self.bbox.padding.right),
									elm$core$Basics$floor(found.self.bbox.padding.top),
									elm$core$Basics$floor(found.self.bbox.padding.bottom)
								])));
				})
		});
};
var author$project$Tests$Nearby$box = function (attrs) {
	return A2(
		author$project$Testable$Element$el,
		_Utils_ap(
			_List_fromArray(
				[
					author$project$Testable$Element$width(
					author$project$Testable$Element$px(50)),
					author$project$Testable$Element$height(
					author$project$Testable$Element$px(50)),
					author$project$Testable$Element$Background$color(author$project$Tests$Palette$blue)
				]),
			attrs),
		author$project$Testable$Element$none);
};
var elm$virtual_dom$VirtualDom$style = _VirtualDom_style;
var elm$html$Html$Attributes$style = elm$virtual_dom$VirtualDom$style;
var elm$core$String$toFloat = _String_toFloat;
var elm_explorations$test$Test$Internal$toString = _Debug_toString;
var elm_explorations$test$Expect$testWith = F5(
	function (makeReason, label, runTest, expected, actual) {
		return A2(runTest, actual, expected) ? elm_explorations$test$Expect$pass : elm_explorations$test$Test$Expectation$fail(
			{
				description: label,
				reason: A2(
					makeReason,
					elm_explorations$test$Test$Internal$toString(expected),
					elm_explorations$test$Test$Internal$toString(actual))
			});
	});
var elm_explorations$test$Test$Runner$Failure$Equality = F2(
	function (a, b) {
		return {$: 'Equality', a: a, b: b};
	});
var elm_explorations$test$Expect$equateWith = F4(
	function (reason, comparison, b, a) {
		var isJust = function (x) {
			if (x.$ === 'Just') {
				return true;
			} else {
				return false;
			}
		};
		var isFloat = function (x) {
			return isJust(
				elm$core$String$toFloat(x)) && (!isJust(
				elm$core$String$toInt(x)));
		};
		var usesFloats = isFloat(
			elm_explorations$test$Test$Internal$toString(a)) || isFloat(
			elm_explorations$test$Test$Internal$toString(b));
		var floatError = A2(elm$core$String$contains, reason, 'not') ? 'Do not use Expect.notEqual with floats. Use Float.notWithin instead.' : 'Do not use Expect.equal with floats. Use Float.within instead.';
		return usesFloats ? elm_explorations$test$Expect$fail(floatError) : A5(elm_explorations$test$Expect$testWith, elm_explorations$test$Test$Runner$Failure$Equality, reason, comparison, b, a);
	});
var elm_explorations$test$Expect$equal = A2(elm_explorations$test$Expect$equateWith, 'Expect.equal', elm$core$Basics$eq);
var author$project$Testable$Element$isVisible = author$project$Testable$LabeledTest(
	{
		attr: author$project$Element$htmlAttribute(
			A2(elm$html$Html$Attributes$style, 'not', 'applicable')),
		label: 'is-visible',
		test: F2(
			function (context, _n0) {
				return A2(elm_explorations$test$Expect$equal, context.self.isVisible, true);
			})
	});
var author$project$Tests$Nearby$justBox = F3(
	function (size, color, attrs) {
		return A2(
			author$project$Testable$Element$el,
			_Utils_ap(
				_List_fromArray(
					[
						author$project$Testable$Element$width(
						author$project$Testable$Element$px(size)),
						author$project$Testable$Element$height(
						author$project$Testable$Element$px(size)),
						author$project$Testable$Element$Background$color(color)
					]),
				attrs),
			author$project$Testable$Element$none);
	});
var author$project$Tests$Palette$green = A3(author$project$Element$rgb, 0, 1, 0);
var author$project$Tests$Palette$red = A3(author$project$Element$rgb, 1, 0, 0);
var author$project$Tests$Nearby$layeredVisibility = A2(
	author$project$Testable$Element$el,
	_List_fromArray(
		[
			author$project$Testable$Element$centerX,
			author$project$Testable$Element$inFront(
			A3(
				author$project$Tests$Nearby$justBox,
				40,
				author$project$Tests$Palette$red,
				_List_fromArray(
					[author$project$Testable$Element$isVisible])))
		]),
	A2(
		author$project$Testable$Element$el,
		_List_fromArray(
			[
				author$project$Testable$Element$inFront(
				A3(author$project$Tests$Nearby$justBox, 30, author$project$Tests$Palette$green, _List_Nil))
			]),
		A3(author$project$Tests$Nearby$justBox, 50, author$project$Tests$Palette$blue, _List_Nil)));
var author$project$Tests$Nearby$littleBox = F2(
	function (name, attrs) {
		return A2(
			author$project$Testable$Element$el,
			_Utils_ap(
				_List_fromArray(
					[
						author$project$Testable$Element$label(name),
						author$project$Testable$Element$width(
						author$project$Testable$Element$px(5)),
						author$project$Testable$Element$height(
						author$project$Testable$Element$px(5))
					]),
				attrs),
			author$project$Testable$Element$none);
	});
var author$project$Tests$Nearby$overlappingChildren = A2(
	author$project$Testable$Element$row,
	_List_fromArray(
		[author$project$Testable$Element$centerX]),
	_List_fromArray(
		[
			A2(
			author$project$Testable$Element$el,
			_List_fromArray(
				[
					author$project$Testable$Element$inFront(
					A3(author$project$Tests$Nearby$justBox, 40, author$project$Tests$Palette$green, _List_Nil))
				]),
			A3(author$project$Tests$Nearby$justBox, 40, author$project$Tests$Palette$darkGrey, _List_Nil)),
			A2(
			author$project$Testable$Element$el,
			_List_fromArray(
				[
					author$project$Testable$Element$onLeft(
					A2(
						author$project$Tests$Nearby$littleBox,
						'overlapping',
						_List_fromArray(
							[
								author$project$Testable$Element$isVisible,
								author$project$Testable$Element$Background$color(author$project$Tests$Palette$red)
							])))
				]),
			A3(author$project$Tests$Nearby$justBox, 40, author$project$Tests$Palette$darkGrey, _List_Nil))
		]));
var author$project$Testable$Element$paragraph = author$project$Testable$Paragraph;
var author$project$Tests$Nearby$p = function (attrs) {
	return A2(
		author$project$Testable$Element$paragraph,
		_Utils_ap(
			_List_fromArray(
				[
					author$project$Testable$Element$Background$color(author$project$Tests$Palette$blue),
					author$project$Testable$Element$Font$color(author$project$Tests$Palette$white),
					author$project$Testable$Element$padding(20)
				]),
			attrs),
		_List_fromArray(
			[
				author$project$Testable$Element$text('Lorem Ipsum or something or other.')
			]));
};
var author$project$Tests$Palette$rgba = F4(
	function (r, g, b, a) {
		return A4(author$project$Element$rgba, r / 255, g / 255, b / 255, a);
	});
var author$project$Tests$Nearby$view = function () {
	var transparentBox = function (attrs) {
		return A2(
			author$project$Testable$Element$el,
			_Utils_ap(
				_List_fromArray(
					[
						author$project$Testable$Element$Font$color(author$project$Tests$Palette$white),
						author$project$Testable$Element$width(
						author$project$Testable$Element$px(50)),
						author$project$Testable$Element$height(
						author$project$Testable$Element$px(50)),
						author$project$Testable$Element$Background$color(
						A4(author$project$Tests$Palette$rgba, 52, 101, 164, 0.8))
					]),
				attrs),
			author$project$Testable$Element$text('hi'));
	};
	var nearby = F3(
		function (location, name, render) {
			return A2(
				author$project$Testable$Element$column,
				_List_fromArray(
					[
						author$project$Testable$Element$spacing(32),
						author$project$Testable$Element$label('column')
					]),
				_List_fromArray(
					[
						A2(
						author$project$Testable$Element$el,
						_List_fromArray(
							[
								author$project$Testable$Element$padding(20),
								author$project$Testable$Element$Background$color(author$project$Tests$Palette$green),
								author$project$Testable$Element$Font$color(author$project$Tests$Palette$white)
							]),
						author$project$Testable$Element$text(name)),
						A2(
						author$project$Testable$Element$row,
						_List_fromArray(
							[
								author$project$Testable$Element$height(
								author$project$Testable$Element$px(100)),
								author$project$Testable$Element$width(author$project$Testable$Element$fill),
								author$project$Testable$Element$spacing(50)
							]),
						_List_fromArray(
							[
								render(
								_List_fromArray(
									[
										location(
										A2(
											author$project$Testable$Element$el,
											_List_fromArray(
												[
													author$project$Testable$Element$label(name),
													author$project$Testable$Element$width(
													author$project$Testable$Element$px(20)),
													author$project$Testable$Element$height(
													author$project$Testable$Element$px(20)),
													author$project$Testable$Element$Background$color(author$project$Tests$Palette$darkCharcoal)
												]),
											author$project$Testable$Element$none))
									])),
								render(
								_List_fromArray(
									[
										location(
										A2(
											author$project$Testable$Element$el,
											_List_fromArray(
												[
													author$project$Testable$Element$label(name),
													author$project$Testable$Element$width(
													author$project$Testable$Element$px(20)),
													author$project$Testable$Element$height(
													author$project$Testable$Element$px(20)),
													author$project$Testable$Element$alignLeft,
													author$project$Testable$Element$Background$color(author$project$Tests$Palette$darkCharcoal)
												]),
											author$project$Testable$Element$none))
									])),
								render(
								_List_fromArray(
									[
										location(
										A2(
											author$project$Testable$Element$el,
											_List_fromArray(
												[
													author$project$Testable$Element$label(name),
													author$project$Testable$Element$width(
													author$project$Testable$Element$px(20)),
													author$project$Testable$Element$height(
													author$project$Testable$Element$px(20)),
													author$project$Testable$Element$centerX,
													author$project$Testable$Element$Background$color(author$project$Tests$Palette$darkCharcoal)
												]),
											author$project$Testable$Element$none))
									])),
								render(
								_List_fromArray(
									[
										location(
										A2(
											author$project$Testable$Element$el,
											_List_fromArray(
												[
													author$project$Testable$Element$label(name),
													author$project$Testable$Element$width(
													author$project$Testable$Element$px(20)),
													author$project$Testable$Element$height(
													author$project$Testable$Element$px(20)),
													author$project$Testable$Element$alignRight,
													author$project$Testable$Element$Background$color(author$project$Tests$Palette$darkCharcoal)
												]),
											author$project$Testable$Element$none))
									])),
								render(
								_List_fromArray(
									[
										location(
										A2(
											author$project$Testable$Element$el,
											_List_fromArray(
												[
													author$project$Testable$Element$label(name),
													author$project$Testable$Element$width(
													author$project$Testable$Element$px(20)),
													author$project$Testable$Element$height(
													author$project$Testable$Element$px(20)),
													author$project$Testable$Element$alignTop,
													author$project$Testable$Element$Background$color(author$project$Tests$Palette$darkCharcoal)
												]),
											author$project$Testable$Element$none))
									])),
								render(
								_List_fromArray(
									[
										location(
										A2(
											author$project$Testable$Element$el,
											_List_fromArray(
												[
													author$project$Testable$Element$label(name),
													author$project$Testable$Element$width(
													author$project$Testable$Element$px(20)),
													author$project$Testable$Element$height(
													author$project$Testable$Element$px(20)),
													author$project$Testable$Element$centerY,
													author$project$Testable$Element$Background$color(author$project$Tests$Palette$darkCharcoal)
												]),
											author$project$Testable$Element$none))
									])),
								render(
								_List_fromArray(
									[
										location(
										A2(
											author$project$Testable$Element$el,
											_List_fromArray(
												[
													author$project$Testable$Element$label(name),
													author$project$Testable$Element$width(
													author$project$Testable$Element$px(20)),
													author$project$Testable$Element$height(
													author$project$Testable$Element$px(20)),
													author$project$Testable$Element$alignBottom,
													author$project$Testable$Element$Background$color(author$project$Tests$Palette$darkCharcoal)
												]),
											author$project$Testable$Element$none))
									]))
							])),
						author$project$Testable$Element$text('widths/heights'),
						A2(
						author$project$Testable$Element$row,
						_List_fromArray(
							[
								author$project$Testable$Element$height(
								author$project$Testable$Element$px(100)),
								author$project$Testable$Element$width(author$project$Testable$Element$fill),
								author$project$Testable$Element$spacing(50),
								author$project$Testable$Element$label('Row')
							]),
						_List_fromArray(
							[
								render(
								_List_fromArray(
									[
										location(
										A2(
											author$project$Testable$Element$el,
											_List_fromArray(
												[
													author$project$Testable$Element$label(name),
													author$project$Testable$Element$width(author$project$Testable$Element$fill),
													author$project$Testable$Element$height(author$project$Testable$Element$fill),
													author$project$Testable$Element$Background$color(author$project$Tests$Palette$darkCharcoal)
												]),
											author$project$Testable$Element$none))
									])),
								render(
								_List_fromArray(
									[
										location(
										A2(
											author$project$Testable$Element$el,
											_List_fromArray(
												[
													author$project$Testable$Element$label(name),
													author$project$Testable$Element$width(
													author$project$Testable$Element$px(20)),
													author$project$Testable$Element$height(author$project$Testable$Element$fill),
													author$project$Testable$Element$Background$color(author$project$Tests$Palette$darkCharcoal)
												]),
											author$project$Testable$Element$none))
									])),
								render(
								_List_fromArray(
									[
										author$project$Testable$Element$label('render'),
										location(
										A2(
											author$project$Testable$Element$el,
											_List_fromArray(
												[
													author$project$Testable$Element$label(name),
													author$project$Testable$Element$width(author$project$Testable$Element$fill),
													author$project$Testable$Element$height(
													author$project$Testable$Element$px(20)),
													author$project$Testable$Element$Background$color(author$project$Tests$Palette$darkCharcoal)
												]),
											author$project$Testable$Element$none))
									])),
								render(
								_List_fromArray(
									[
										location(
										A2(
											author$project$Testable$Element$el,
											_List_fromArray(
												[
													author$project$Testable$Element$label(name),
													author$project$Testable$Element$width(
													author$project$Testable$Element$px(20)),
													author$project$Testable$Element$height(author$project$Testable$Element$shrink),
													author$project$Testable$Element$Background$color(author$project$Tests$Palette$darkCharcoal),
													author$project$Testable$Element$Font$color(author$project$Tests$Palette$white)
												]),
											author$project$Testable$Element$text('h-shrink')))
									])),
								render(
								_List_fromArray(
									[
										location(
										A2(
											author$project$Testable$Element$el,
											_List_fromArray(
												[
													author$project$Testable$Element$label(name),
													author$project$Testable$Element$width(author$project$Testable$Element$shrink),
													author$project$Testable$Element$height(
													author$project$Testable$Element$px(20)),
													author$project$Testable$Element$Background$color(author$project$Tests$Palette$darkCharcoal),
													author$project$Testable$Element$Font$color(author$project$Tests$Palette$white)
												]),
											author$project$Testable$Element$text('w-shrink')))
									]))
							])),
						author$project$Testable$Element$text('on paragraph'),
						A2(
						author$project$Testable$Element$row,
						_List_fromArray(
							[
								author$project$Testable$Element$width(author$project$Testable$Element$fill),
								author$project$Testable$Element$spacing(50),
								author$project$Testable$Element$label('Row')
							]),
						_List_fromArray(
							[
								author$project$Tests$Nearby$p(
								_List_fromArray(
									[
										location(
										A2(
											author$project$Testable$Element$el,
											_List_fromArray(
												[
													author$project$Testable$Element$label(name),
													author$project$Testable$Element$width(
													author$project$Testable$Element$px(20)),
													author$project$Testable$Element$height(
													author$project$Testable$Element$px(20)),
													author$project$Testable$Element$Background$color(author$project$Tests$Palette$darkCharcoal)
												]),
											author$project$Testable$Element$none))
									])),
								author$project$Tests$Nearby$p(
								_List_fromArray(
									[
										location(
										A2(
											author$project$Testable$Element$el,
											_List_fromArray(
												[
													author$project$Testable$Element$label(name),
													author$project$Testable$Element$width(
													author$project$Testable$Element$px(20)),
													author$project$Testable$Element$height(
													author$project$Testable$Element$px(20)),
													author$project$Testable$Element$alignLeft,
													author$project$Testable$Element$Background$color(author$project$Tests$Palette$darkCharcoal)
												]),
											author$project$Testable$Element$none))
									])),
								author$project$Tests$Nearby$p(
								_List_fromArray(
									[
										location(
										A2(
											author$project$Testable$Element$el,
											_List_fromArray(
												[
													author$project$Testable$Element$label(name),
													author$project$Testable$Element$width(
													author$project$Testable$Element$px(20)),
													author$project$Testable$Element$height(
													author$project$Testable$Element$px(20)),
													author$project$Testable$Element$centerX,
													author$project$Testable$Element$Background$color(author$project$Tests$Palette$darkCharcoal)
												]),
											author$project$Testable$Element$none))
									])),
								author$project$Tests$Nearby$p(
								_List_fromArray(
									[
										location(
										A2(
											author$project$Testable$Element$el,
											_List_fromArray(
												[
													author$project$Testable$Element$label(name),
													author$project$Testable$Element$width(
													author$project$Testable$Element$px(20)),
													author$project$Testable$Element$height(
													author$project$Testable$Element$px(20)),
													author$project$Testable$Element$alignRight,
													author$project$Testable$Element$Background$color(author$project$Tests$Palette$darkCharcoal)
												]),
											author$project$Testable$Element$none))
									])),
								author$project$Tests$Nearby$p(
								_List_fromArray(
									[
										location(
										A2(
											author$project$Testable$Element$el,
											_List_fromArray(
												[
													author$project$Testable$Element$label(name),
													author$project$Testable$Element$width(
													author$project$Testable$Element$px(20)),
													author$project$Testable$Element$height(
													author$project$Testable$Element$px(20)),
													author$project$Testable$Element$alignTop,
													author$project$Testable$Element$Background$color(author$project$Tests$Palette$darkCharcoal)
												]),
											author$project$Testable$Element$none))
									])),
								author$project$Tests$Nearby$p(
								_List_fromArray(
									[
										location(
										A2(
											author$project$Testable$Element$el,
											_List_fromArray(
												[
													author$project$Testable$Element$label(name),
													author$project$Testable$Element$width(
													author$project$Testable$Element$px(20)),
													author$project$Testable$Element$height(
													author$project$Testable$Element$px(20)),
													author$project$Testable$Element$centerY,
													author$project$Testable$Element$Background$color(author$project$Tests$Palette$darkCharcoal)
												]),
											author$project$Testable$Element$none))
									])),
								author$project$Tests$Nearby$p(
								_List_fromArray(
									[
										location(
										A2(
											author$project$Testable$Element$el,
											_List_fromArray(
												[
													author$project$Testable$Element$label(name),
													author$project$Testable$Element$width(
													author$project$Testable$Element$px(20)),
													author$project$Testable$Element$height(
													author$project$Testable$Element$px(20)),
													author$project$Testable$Element$alignBottom,
													author$project$Testable$Element$Background$color(author$project$Tests$Palette$darkCharcoal)
												]),
											author$project$Testable$Element$none))
									]))
							]))
					]));
		});
	var little = F2(
		function (name, attrs) {
			return A2(
				author$project$Testable$Element$el,
				_Utils_ap(
					_List_fromArray(
						[
							author$project$Testable$Element$label(name),
							author$project$Testable$Element$width(
							author$project$Testable$Element$px(5)),
							author$project$Testable$Element$height(
							author$project$Testable$Element$px(5)),
							author$project$Testable$Element$Background$color(author$project$Tests$Palette$darkCharcoal)
						]),
					attrs),
				author$project$Testable$Element$none);
		});
	var master = A2(
		author$project$Testable$Element$el,
		_List_fromArray(
			[
				author$project$Testable$Element$padding(20)
			]),
		author$project$Tests$Nearby$box(
			_List_fromArray(
				[
					author$project$Testable$Element$above(
					A2(
						little,
						'above-left',
						_List_fromArray(
							[author$project$Testable$Element$alignLeft]))),
					author$project$Testable$Element$above(
					A2(
						little,
						'above-center',
						_List_fromArray(
							[author$project$Testable$Element$centerX]))),
					author$project$Testable$Element$above(
					A2(
						little,
						'above-right',
						_List_fromArray(
							[author$project$Testable$Element$alignRight]))),
					author$project$Testable$Element$below(
					A2(
						little,
						'below-left',
						_List_fromArray(
							[author$project$Testable$Element$alignLeft]))),
					author$project$Testable$Element$below(
					A2(
						little,
						'below-center',
						_List_fromArray(
							[author$project$Testable$Element$centerX]))),
					author$project$Testable$Element$below(
					A2(
						little,
						'below-right',
						_List_fromArray(
							[author$project$Testable$Element$alignRight]))),
					author$project$Testable$Element$onRight(
					A2(
						little,
						'onRight-left',
						_List_fromArray(
							[author$project$Testable$Element$alignTop]))),
					author$project$Testable$Element$onRight(
					A2(
						little,
						'onRight-center',
						_List_fromArray(
							[author$project$Testable$Element$centerY]))),
					author$project$Testable$Element$onRight(
					A2(
						little,
						'onRight-right',
						_List_fromArray(
							[author$project$Testable$Element$alignBottom]))),
					author$project$Testable$Element$onLeft(
					A2(
						little,
						'onLeft-left',
						_List_fromArray(
							[author$project$Testable$Element$alignTop]))),
					author$project$Testable$Element$onLeft(
					A2(
						little,
						'onLeft-center',
						_List_fromArray(
							[author$project$Testable$Element$centerY]))),
					author$project$Testable$Element$onLeft(
					A2(
						little,
						'onLeft-right',
						_List_fromArray(
							[author$project$Testable$Element$alignBottom]))),
					author$project$Testable$Element$inFront(
					A2(
						little,
						'infront-left-top',
						_List_fromArray(
							[author$project$Testable$Element$alignTop, author$project$Testable$Element$alignLeft]))),
					author$project$Testable$Element$inFront(
					A2(
						little,
						'infront-center-top',
						_List_fromArray(
							[author$project$Testable$Element$alignTop, author$project$Testable$Element$centerX]))),
					author$project$Testable$Element$inFront(
					A2(
						little,
						'infront-right-top',
						_List_fromArray(
							[author$project$Testable$Element$alignTop, author$project$Testable$Element$alignRight]))),
					author$project$Testable$Element$inFront(
					A2(
						little,
						'infront-left-center',
						_List_fromArray(
							[author$project$Testable$Element$centerY, author$project$Testable$Element$alignLeft]))),
					author$project$Testable$Element$inFront(
					A2(
						little,
						'infront-center-center',
						_List_fromArray(
							[author$project$Testable$Element$centerY, author$project$Testable$Element$centerX]))),
					author$project$Testable$Element$inFront(
					A2(
						little,
						'infront-right-center',
						_List_fromArray(
							[author$project$Testable$Element$centerY, author$project$Testable$Element$alignRight]))),
					author$project$Testable$Element$inFront(
					A2(
						little,
						'infront-left-bottom',
						_List_fromArray(
							[author$project$Testable$Element$alignBottom, author$project$Testable$Element$alignLeft]))),
					author$project$Testable$Element$inFront(
					A2(
						little,
						'infront-center-bottom',
						_List_fromArray(
							[author$project$Testable$Element$alignBottom, author$project$Testable$Element$centerX]))),
					author$project$Testable$Element$inFront(
					A2(
						little,
						'infront-right-bottom',
						_List_fromArray(
							[author$project$Testable$Element$alignBottom, author$project$Testable$Element$alignRight])))
				])));
	var masterParagraph = A2(
		author$project$Testable$Element$el,
		_List_fromArray(
			[
				author$project$Testable$Element$padding(20)
			]),
		author$project$Tests$Nearby$p(
			_List_fromArray(
				[
					author$project$Testable$Element$above(
					A2(
						little,
						'above-left',
						_List_fromArray(
							[author$project$Testable$Element$alignLeft]))),
					author$project$Testable$Element$above(
					A2(
						little,
						'above-center',
						_List_fromArray(
							[author$project$Testable$Element$centerX]))),
					author$project$Testable$Element$above(
					A2(
						little,
						'above-right',
						_List_fromArray(
							[author$project$Testable$Element$alignRight]))),
					author$project$Testable$Element$below(
					A2(
						little,
						'below-left',
						_List_fromArray(
							[author$project$Testable$Element$alignLeft]))),
					author$project$Testable$Element$below(
					A2(
						little,
						'below-center',
						_List_fromArray(
							[author$project$Testable$Element$centerX]))),
					author$project$Testable$Element$below(
					A2(
						little,
						'below-right',
						_List_fromArray(
							[author$project$Testable$Element$alignRight]))),
					author$project$Testable$Element$onRight(
					A2(
						little,
						'onRight-left',
						_List_fromArray(
							[author$project$Testable$Element$alignTop]))),
					author$project$Testable$Element$onRight(
					A2(
						little,
						'onRight-center',
						_List_fromArray(
							[author$project$Testable$Element$centerY]))),
					author$project$Testable$Element$onRight(
					A2(
						little,
						'onRight-right',
						_List_fromArray(
							[author$project$Testable$Element$alignBottom]))),
					author$project$Testable$Element$onLeft(
					A2(
						little,
						'onLeft-left',
						_List_fromArray(
							[author$project$Testable$Element$alignTop]))),
					author$project$Testable$Element$onLeft(
					A2(
						little,
						'onLeft-center',
						_List_fromArray(
							[author$project$Testable$Element$centerY]))),
					author$project$Testable$Element$onLeft(
					A2(
						little,
						'onLeft-right',
						_List_fromArray(
							[author$project$Testable$Element$alignBottom]))),
					author$project$Testable$Element$inFront(
					A2(
						little,
						'infront-left-top',
						_List_fromArray(
							[author$project$Testable$Element$alignTop, author$project$Testable$Element$alignLeft]))),
					author$project$Testable$Element$inFront(
					A2(
						little,
						'infront-center-top',
						_List_fromArray(
							[author$project$Testable$Element$alignTop, author$project$Testable$Element$centerX]))),
					author$project$Testable$Element$inFront(
					A2(
						little,
						'infront-right-top',
						_List_fromArray(
							[author$project$Testable$Element$alignTop, author$project$Testable$Element$alignRight]))),
					author$project$Testable$Element$inFront(
					A2(
						little,
						'infront-left-center',
						_List_fromArray(
							[author$project$Testable$Element$centerY, author$project$Testable$Element$alignLeft]))),
					author$project$Testable$Element$inFront(
					A2(
						little,
						'infront-center-center',
						_List_fromArray(
							[author$project$Testable$Element$centerY, author$project$Testable$Element$centerX]))),
					author$project$Testable$Element$inFront(
					A2(
						little,
						'infront-right-center',
						_List_fromArray(
							[author$project$Testable$Element$centerY, author$project$Testable$Element$alignRight]))),
					author$project$Testable$Element$inFront(
					A2(
						little,
						'infront-left-bottom',
						_List_fromArray(
							[author$project$Testable$Element$alignBottom, author$project$Testable$Element$alignLeft]))),
					author$project$Testable$Element$inFront(
					A2(
						little,
						'infront-center-bottom',
						_List_fromArray(
							[author$project$Testable$Element$alignBottom, author$project$Testable$Element$centerX]))),
					author$project$Testable$Element$inFront(
					A2(
						little,
						'infront-right-bottom',
						_List_fromArray(
							[author$project$Testable$Element$alignBottom, author$project$Testable$Element$alignRight])))
				])));
	return A2(
		author$project$Testable$Element$column,
		_List_fromArray(
			[
				author$project$Testable$Element$centerX,
				author$project$Testable$Element$label('Nearby Elements'),
				author$project$Testable$Element$spacing(100)
			]),
		_List_fromArray(
			[
				author$project$Tests$Nearby$layeredVisibility,
				author$project$Tests$Nearby$overlappingChildren,
				master,
				masterParagraph,
				A3(nearby, author$project$Testable$Element$above, 'above', author$project$Tests$Nearby$box),
				A3(nearby, author$project$Testable$Element$below, 'below', author$project$Tests$Nearby$box),
				A3(nearby, author$project$Testable$Element$inFront, 'inFront', author$project$Tests$Nearby$box),
				A3(nearby, author$project$Testable$Element$onRight, 'onRight', author$project$Tests$Nearby$box),
				A3(nearby, author$project$Testable$Element$onLeft, 'onLeft', author$project$Tests$Nearby$box),
				A3(nearby, author$project$Testable$Element$behindContent, 'behindContent', transparentBox)
			]));
}();
var author$project$Tests$RowAlignment$view = function () {
	var rowContainer = F2(
		function (attrs, children) {
			return A2(
				author$project$Testable$Element$row,
				_Utils_ap(
					_List_fromArray(
						[
							author$project$Testable$Element$spacing(20),
							author$project$Testable$Element$height(
							author$project$Testable$Element$px(100)),
							author$project$Testable$Element$Background$color(author$project$Tests$Palette$lightGrey)
						]),
					attrs),
				children);
		});
	return A2(
		author$project$Testable$Element$column,
		_List_fromArray(
			[
				author$project$Testable$Element$width(
				author$project$Testable$Element$px(500)),
				author$project$Testable$Element$spacing(20)
			]),
		_List_fromArray(
			[
				A2(
				author$project$Testable$Element$el,
				_List_Nil,
				author$project$Testable$Element$text('Alignment Within a Row')),
				A2(
				author$project$Testable$Element$column,
				_List_fromArray(
					[
						author$project$Testable$Element$spacing(20)
					]),
				author$project$Generator$sizes(
					function (resizeable) {
						return A2(
							rowContainer,
							_List_fromArray(
								[
									author$project$Testable$Element$label('single child')
								]),
							_List_fromArray(
								[
									A2(resizeable, _List_Nil, author$project$Testable$Element$none)
								]));
					})),
				A2(
				author$project$Testable$Element$column,
				_List_fromArray(
					[
						author$project$Testable$Element$spacing(20)
					]),
				author$project$Generator$sizes(
					function (resizeable) {
						return A2(
							rowContainer,
							_List_fromArray(
								[
									author$project$Testable$Element$label('single child')
								]),
							_List_fromArray(
								[
									A2(
									resizeable,
									_List_fromArray(
										[author$project$Testable$Element$centerX]),
									author$project$Testable$Element$none)
								]));
					})),
				A2(
				author$project$Testable$Element$column,
				_List_fromArray(
					[
						author$project$Testable$Element$spacing(20)
					]),
				author$project$Generator$sizes(
					function (resizeable) {
						return A2(
							rowContainer,
							_List_fromArray(
								[
									author$project$Testable$Element$label('single child')
								]),
							_List_fromArray(
								[
									A2(
									resizeable,
									_List_fromArray(
										[author$project$Testable$Element$alignRight]),
									author$project$Testable$Element$none)
								]));
					})),
				A2(
				author$project$Testable$Element$column,
				_List_fromArray(
					[
						author$project$Testable$Element$spacing(20)
					]),
				author$project$Generator$sizes(
					function (resizeable) {
						return A2(
							rowContainer,
							_List_Nil,
							_List_fromArray(
								[
									A2(resizeable, _List_Nil, author$project$Testable$Element$none),
									A2(resizeable, _List_Nil, author$project$Testable$Element$none),
									A2(resizeable, _List_Nil, author$project$Testable$Element$none)
								]));
					})),
				A2(
				author$project$Testable$Element$column,
				_List_fromArray(
					[
						author$project$Testable$Element$spacing(20)
					]),
				author$project$Generator$sizes(
					function (resizeable) {
						return A2(
							rowContainer,
							_List_Nil,
							_List_fromArray(
								[
									A2(resizeable, _List_Nil, author$project$Testable$Element$none),
									A2(resizeable, _List_Nil, author$project$Testable$Element$none),
									A2(
									resizeable,
									_List_fromArray(
										[
											author$project$Testable$Element$alignRight,
											author$project$Testable$Element$label('Right Child in Row')
										]),
									author$project$Testable$Element$none)
								]));
					})),
				A2(
				author$project$Testable$Element$column,
				_List_fromArray(
					[
						author$project$Testable$Element$spacing(20)
					]),
				author$project$Generator$sizes(
					function (resizeable) {
						return A2(
							rowContainer,
							_List_Nil,
							_List_fromArray(
								[
									A2(resizeable, _List_Nil, author$project$Testable$Element$none),
									A2(
									resizeable,
									_List_fromArray(
										[
											author$project$Testable$Element$alignRight,
											author$project$Testable$Element$label('Middle Child in Row')
										]),
									author$project$Testable$Element$none),
									A2(resizeable, _List_Nil, author$project$Testable$Element$none)
								]));
					})),
				A2(
				author$project$Testable$Element$column,
				_List_fromArray(
					[
						author$project$Testable$Element$spacing(20)
					]),
				author$project$Generator$sizes(
					function (resizeable) {
						return A2(
							rowContainer,
							_List_Nil,
							_List_fromArray(
								[
									A2(
									resizeable,
									_List_fromArray(
										[
											author$project$Testable$Element$alignRight,
											author$project$Testable$Element$label('Left Child in Row')
										]),
									author$project$Testable$Element$none),
									A2(resizeable, _List_Nil, author$project$Testable$Element$none),
									A2(resizeable, _List_Nil, author$project$Testable$Element$none)
								]));
					})),
				author$project$Testable$Element$text('center X'),
				A2(
				author$project$Testable$Element$column,
				_List_fromArray(
					[
						author$project$Testable$Element$spacing(20)
					]),
				author$project$Generator$sizes(
					function (resizeable) {
						return A2(
							rowContainer,
							_List_Nil,
							_List_fromArray(
								[
									A2(
									resizeable,
									_List_fromArray(
										[
											author$project$Testable$Element$centerX,
											author$project$Testable$Element$label('Left Child in Row')
										]),
									author$project$Testable$Element$none),
									A2(resizeable, _List_Nil, author$project$Testable$Element$none),
									A2(resizeable, _List_Nil, author$project$Testable$Element$none)
								]));
					})),
				A2(
				author$project$Testable$Element$column,
				_List_fromArray(
					[
						author$project$Testable$Element$spacing(20)
					]),
				author$project$Generator$sizes(
					function (resizeable) {
						return A2(
							rowContainer,
							_List_Nil,
							_List_fromArray(
								[
									A2(resizeable, _List_Nil, author$project$Testable$Element$none),
									A2(
									resizeable,
									_List_fromArray(
										[
											author$project$Testable$Element$centerX,
											author$project$Testable$Element$label('Middle Child in Row')
										]),
									author$project$Testable$Element$none),
									A2(resizeable, _List_Nil, author$project$Testable$Element$none)
								]));
					})),
				A2(
				author$project$Testable$Element$column,
				_List_fromArray(
					[
						author$project$Testable$Element$spacing(20)
					]),
				author$project$Generator$sizes(
					function (resizeable) {
						return A2(
							rowContainer,
							_List_Nil,
							_List_fromArray(
								[
									A2(resizeable, _List_Nil, author$project$Testable$Element$none),
									A2(resizeable, _List_Nil, author$project$Testable$Element$none),
									A2(
									resizeable,
									_List_fromArray(
										[
											author$project$Testable$Element$centerX,
											author$project$Testable$Element$label('Right Child in Row')
										]),
									author$project$Testable$Element$none)
								]));
					})),
				A2(
				author$project$Testable$Element$column,
				_List_fromArray(
					[
						author$project$Testable$Element$spacing(20)
					]),
				author$project$Generator$sizes(
					function (resizeable) {
						return A2(
							rowContainer,
							_List_Nil,
							_List_fromArray(
								[
									A2(resizeable, _List_Nil, author$project$Testable$Element$none),
									A2(resizeable, _List_Nil, author$project$Testable$Element$none),
									A2(
									resizeable,
									_List_fromArray(
										[
											author$project$Testable$Element$centerX,
											author$project$Testable$Element$label('Middle-Right Child in Row')
										]),
									author$project$Testable$Element$none),
									A2(resizeable, _List_Nil, author$project$Testable$Element$none)
								]));
					})),
				A2(
				author$project$Testable$Element$column,
				_List_fromArray(
					[
						author$project$Testable$Element$spacing(20)
					]),
				author$project$Generator$sizes(
					function (resizeable) {
						return A2(
							rowContainer,
							_List_Nil,
							_List_fromArray(
								[
									A2(resizeable, _List_Nil, author$project$Testable$Element$none),
									A2(resizeable, _List_Nil, author$project$Testable$Element$none),
									A2(
									resizeable,
									_List_fromArray(
										[
											author$project$Testable$Element$centerX,
											author$project$Testable$Element$label('Middle-Right Child in Row')
										]),
									author$project$Testable$Element$none),
									A2(
									resizeable,
									_List_fromArray(
										[
											author$project$Testable$Element$centerX,
											author$project$Testable$Element$label('Middle-Right Child in Row')
										]),
									author$project$Testable$Element$none),
									A2(resizeable, _List_Nil, author$project$Testable$Element$none)
								]));
					})),
				A2(
				author$project$Testable$Element$column,
				_List_fromArray(
					[
						author$project$Testable$Element$spacing(20)
					]),
				author$project$Generator$sizes(
					function (resizeable) {
						return A2(
							rowContainer,
							_List_Nil,
							_List_fromArray(
								[
									A2(resizeable, _List_Nil, author$project$Testable$Element$none),
									A2(resizeable, _List_Nil, author$project$Testable$Element$none),
									A2(
									resizeable,
									_List_fromArray(
										[
											author$project$Testable$Element$centerX,
											author$project$Testable$Element$label('Middle-Right Child in Row')
										]),
									author$project$Testable$Element$none),
									A2(
									resizeable,
									_List_fromArray(
										[
											author$project$Testable$Element$centerX,
											author$project$Testable$Element$label('Middle-Right Child in Row')
										]),
									author$project$Testable$Element$none),
									A2(
									resizeable,
									_List_fromArray(
										[
											author$project$Testable$Element$centerX,
											author$project$Testable$Element$label('Middle-Right Child in Row')
										]),
									author$project$Testable$Element$none),
									A2(resizeable, _List_Nil, author$project$Testable$Element$none)
								]));
					})),
				author$project$Testable$Element$text('left x right'),
				A2(
				author$project$Testable$Element$column,
				_List_fromArray(
					[
						author$project$Testable$Element$spacing(20)
					]),
				author$project$Generator$sizes(
					function (resizeable) {
						return A2(
							rowContainer,
							_List_Nil,
							_List_fromArray(
								[
									A2(
									resizeable,
									_List_fromArray(
										[
											author$project$Testable$Element$alignLeft,
											author$project$Testable$Element$label('Left Child in Row')
										]),
									author$project$Testable$Element$none),
									A2(resizeable, _List_Nil, author$project$Testable$Element$none),
									A2(
									resizeable,
									_List_fromArray(
										[
											author$project$Testable$Element$alignRight,
											author$project$Testable$Element$label('Right Child in Row')
										]),
									author$project$Testable$Element$none)
								]));
					})),
				author$project$Testable$Element$text('left center right'),
				A2(
				author$project$Testable$Element$column,
				_List_fromArray(
					[
						author$project$Testable$Element$spacing(20)
					]),
				author$project$Generator$sizes(
					function (resizeable) {
						return A2(
							rowContainer,
							_List_Nil,
							_List_fromArray(
								[
									A2(
									resizeable,
									_List_fromArray(
										[
											author$project$Testable$Element$alignLeft,
											author$project$Testable$Element$label('Left Child in Row')
										]),
									author$project$Testable$Element$none),
									A2(
									resizeable,
									_List_fromArray(
										[
											author$project$Testable$Element$centerX,
											author$project$Testable$Element$label('Middle Child in Row')
										]),
									author$project$Testable$Element$none),
									A2(
									resizeable,
									_List_fromArray(
										[
											author$project$Testable$Element$alignRight,
											author$project$Testable$Element$label('Right Child in Row')
										]),
									author$project$Testable$Element$none)
								]));
					})),
				author$project$Testable$Element$text('vertical alignment'),
				A2(
				author$project$Testable$Element$column,
				_List_fromArray(
					[
						author$project$Testable$Element$spacing(20)
					]),
				author$project$Generator$sizes(
					function (resizeable) {
						return A2(
							rowContainer,
							_List_Nil,
							_List_fromArray(
								[
									A2(
									resizeable,
									_List_fromArray(
										[
											author$project$Testable$Element$alignTop,
											author$project$Testable$Element$label('Left Child in Row')
										]),
									author$project$Testable$Element$none),
									A2(
									resizeable,
									_List_fromArray(
										[
											author$project$Testable$Element$centerY,
											author$project$Testable$Element$label('Middle Child in Row')
										]),
									author$project$Testable$Element$none),
									A2(
									resizeable,
									_List_fromArray(
										[
											author$project$Testable$Element$alignBottom,
											author$project$Testable$Element$label('Right Child in Row')
										]),
									author$project$Testable$Element$none)
								]));
					})),
				author$project$Testable$Element$text('x and y alignments'),
				A2(
				author$project$Testable$Element$column,
				_List_fromArray(
					[
						author$project$Testable$Element$spacing(20)
					]),
				author$project$Generator$sizes(
					function (resizeable) {
						return A2(
							rowContainer,
							_List_Nil,
							_List_fromArray(
								[
									A2(
									resizeable,
									_List_fromArray(
										[
											author$project$Testable$Element$alignLeft,
											author$project$Testable$Element$alignTop,
											author$project$Testable$Element$label('Left Child')
										]),
									author$project$Testable$Element$none),
									A2(
									resizeable,
									_List_fromArray(
										[
											author$project$Testable$Element$centerX,
											author$project$Testable$Element$centerY,
											author$project$Testable$Element$label('Middle Child')
										]),
									author$project$Testable$Element$none),
									A2(
									resizeable,
									_List_fromArray(
										[
											author$project$Testable$Element$alignRight,
											author$project$Testable$Element$alignBottom,
											author$project$Testable$Element$label('Right Child')
										]),
									author$project$Testable$Element$none)
								]));
					})),
				author$project$Testable$Element$text('align Top and X alignments '),
				A2(
				author$project$Testable$Element$column,
				_List_fromArray(
					[
						author$project$Testable$Element$spacing(20)
					]),
				author$project$Generator$sizes(
					function (resizeable) {
						return A2(
							rowContainer,
							_List_Nil,
							_List_fromArray(
								[
									A2(
									resizeable,
									_List_fromArray(
										[
											author$project$Testable$Element$alignLeft,
											author$project$Testable$Element$alignTop,
											author$project$Testable$Element$label('Left Child')
										]),
									author$project$Testable$Element$none),
									A2(
									resizeable,
									_List_fromArray(
										[
											author$project$Testable$Element$centerX,
											author$project$Testable$Element$alignTop,
											author$project$Testable$Element$label('Middle Child')
										]),
									author$project$Testable$Element$none),
									A2(
									resizeable,
									_List_fromArray(
										[
											author$project$Testable$Element$alignRight,
											author$project$Testable$Element$alignTop,
											author$project$Testable$Element$label('Right Child')
										]),
									author$project$Testable$Element$none)
								]));
					})),
				author$project$Testable$Element$text('align Bottom and X alignments '),
				A2(
				author$project$Testable$Element$column,
				_List_fromArray(
					[
						author$project$Testable$Element$spacing(20)
					]),
				author$project$Generator$sizes(
					function (resizeable) {
						return A2(
							rowContainer,
							_List_Nil,
							_List_fromArray(
								[
									A2(
									resizeable,
									_List_fromArray(
										[
											author$project$Testable$Element$alignLeft,
											author$project$Testable$Element$alignBottom,
											author$project$Testable$Element$label('Left Child')
										]),
									author$project$Testable$Element$none),
									A2(
									resizeable,
									_List_fromArray(
										[
											author$project$Testable$Element$centerX,
											author$project$Testable$Element$alignBottom,
											author$project$Testable$Element$label('Middle Child')
										]),
									author$project$Testable$Element$none),
									A2(
									resizeable,
									_List_fromArray(
										[
											author$project$Testable$Element$alignRight,
											author$project$Testable$Element$alignBottom,
											author$project$Testable$Element$label('Right Child')
										]),
									author$project$Testable$Element$none)
								]));
					})),
				author$project$Testable$Element$text('centerY and X alignments '),
				A2(
				author$project$Testable$Element$column,
				_List_fromArray(
					[
						author$project$Testable$Element$spacing(20)
					]),
				author$project$Generator$sizes(
					function (resizeable) {
						return A2(
							rowContainer,
							_List_Nil,
							_List_fromArray(
								[
									A2(
									resizeable,
									_List_fromArray(
										[
											author$project$Testable$Element$alignLeft,
											author$project$Testable$Element$centerY,
											author$project$Testable$Element$label('Left Child')
										]),
									author$project$Testable$Element$none),
									A2(
									resizeable,
									_List_fromArray(
										[
											author$project$Testable$Element$centerX,
											author$project$Testable$Element$centerY,
											author$project$Testable$Element$label('Middle Child')
										]),
									author$project$Testable$Element$none),
									A2(
									resizeable,
									_List_fromArray(
										[
											author$project$Testable$Element$alignRight,
											author$project$Testable$Element$centerY,
											author$project$Testable$Element$label('Right Child')
										]),
									author$project$Testable$Element$none)
								]));
					}))
			]));
}();
var author$project$Tests$RowSpacing$box = function (attrs) {
	return A2(
		author$project$Testable$Element$el,
		_Utils_ap(
			_List_fromArray(
				[
					author$project$Testable$Element$width(
					author$project$Testable$Element$px(50)),
					author$project$Testable$Element$height(
					author$project$Testable$Element$px(50)),
					author$project$Testable$Element$Background$color(author$project$Tests$Palette$blue)
				]),
			attrs),
		author$project$Testable$Element$none);
};
var author$project$Tests$RowSpacing$tinyBox = function (attrs) {
	return A2(
		author$project$Testable$Element$el,
		_Utils_ap(
			_List_fromArray(
				[
					author$project$Testable$Element$width(
					author$project$Testable$Element$px(20)),
					author$project$Testable$Element$height(
					author$project$Testable$Element$px(20)),
					author$project$Testable$Element$Background$color(author$project$Tests$Palette$darkCharcoal)
				]),
			attrs),
		author$project$Testable$Element$none);
};
var author$project$Tests$RowSpacing$view = function () {
	var colContainer = F2(
		function (attrs, children) {
			return A2(
				author$project$Testable$Element$row,
				_Utils_ap(
					_List_fromArray(
						[
							author$project$Testable$Element$spacing(20),
							author$project$Testable$Element$width(
							author$project$Testable$Element$px(500)),
							author$project$Testable$Element$height(
							author$project$Testable$Element$px(120))
						]),
					attrs),
				children);
		});
	return A2(
		author$project$Testable$Element$column,
		_List_Nil,
		_List_fromArray(
			[
				A2(
				author$project$Testable$Element$el,
				_List_Nil,
				author$project$Testable$Element$text('Spacing within a row')),
				A2(
				author$project$Testable$Element$column,
				_List_Nil,
				_List_fromArray(
					[
						author$project$Tests$RowSpacing$box(_List_Nil),
						A2(
						colContainer,
						_List_Nil,
						_List_fromArray(
							[
								author$project$Tests$RowSpacing$box(_List_Nil)
							])),
						A2(
						colContainer,
						_List_Nil,
						_List_fromArray(
							[
								author$project$Tests$RowSpacing$box(_List_Nil),
								author$project$Tests$RowSpacing$box(_List_Nil),
								author$project$Tests$RowSpacing$box(_List_Nil)
							])),
						A2(
						colContainer,
						_List_fromArray(
							[
								author$project$Testable$Element$below(
								author$project$Tests$RowSpacing$tinyBox(_List_Nil))
							]),
						_List_fromArray(
							[
								author$project$Tests$RowSpacing$box(_List_Nil),
								author$project$Tests$RowSpacing$box(_List_Nil),
								author$project$Tests$RowSpacing$box(_List_Nil)
							]))
					]))
			]));
}();
var author$project$Internal$Flag$transparency = author$project$Internal$Flag$flag(0);
var author$project$Internal$Model$Transparency = F2(
	function (a, b) {
		return {$: 'Transparency', a: a, b: b};
	});
var author$project$Element$alpha = function (o) {
	var transparency = function (x) {
		return 1 - x;
	}(
		A2(
			elm$core$Basics$min,
			1.0,
			A2(elm$core$Basics$max, 0.0, o)));
	return A2(
		author$project$Internal$Model$StyleClass,
		author$project$Internal$Flag$transparency,
		A2(
			author$project$Internal$Model$Transparency,
			'transparency-' + author$project$Internal$Model$floatClass(transparency),
			transparency));
};
var author$project$Testable$Element$alpha = function (a) {
	return author$project$Testable$LabeledTest(
		{
			attr: author$project$Element$alpha(a),
			label: 'alpha-' + elm$core$String$fromFloat(a),
			test: F2(
				function (context, _n0) {
					var selfTransparency = A2(
						elm$core$Maybe$withDefault,
						'notfound',
						A2(elm$core$Dict$get, 'opacity', context.self.style));
					return A2(
						elm_explorations$test$Expect$equal,
						elm$core$String$fromFloat(a),
						selfTransparency);
				})
		});
};
var author$project$Testable$Element$paddingXY = F2(
	function (x, y) {
		return author$project$Testable$LabeledTest(
			{
				attr: A2(author$project$Element$paddingXY, x, y),
				label: 'paddingXY ' + (elm$core$String$fromInt(x) + (', ' + elm$core$String$fromInt(y))),
				test: F2(
					function (found, _n0) {
						return A2(
							elm_explorations$test$Expect$true,
							'PaddingXY (' + (elm$core$String$fromInt(x) + (', ' + (elm$core$String$fromInt(y) + ') is present'))),
							A2(
								elm$core$List$all,
								elm$core$Basics$eq(x),
								_List_fromArray(
									[
										elm$core$Basics$floor(found.self.bbox.padding.left),
										elm$core$Basics$floor(found.self.bbox.padding.right)
									])) && A2(
								elm$core$List$all,
								elm$core$Basics$eq(y),
								_List_fromArray(
									[
										elm$core$Basics$floor(found.self.bbox.padding.top),
										elm$core$Basics$floor(found.self.bbox.padding.bottom)
									])));
					})
			});
	});
var author$project$Element$transparent = function (on) {
	return on ? A2(
		author$project$Internal$Model$StyleClass,
		author$project$Internal$Flag$transparency,
		A2(author$project$Internal$Model$Transparency, 'transparent', 1.0)) : A2(
		author$project$Internal$Model$StyleClass,
		author$project$Internal$Flag$transparency,
		A2(author$project$Internal$Model$Transparency, 'visible', 0.0));
};
var author$project$Testable$Element$transparent = function (on) {
	return author$project$Testable$LabeledTest(
		{
			attr: author$project$Element$transparent(on),
			label: on ? 'transparent' : 'opaque',
			test: F2(
				function (context, _n0) {
					var value = on ? '0' : '1';
					var selfTransparency = A2(
						elm$core$Maybe$withDefault,
						'notfound',
						A2(elm$core$Dict$get, 'opacity', context.self.style));
					return A2(elm_explorations$test$Expect$equal, value, selfTransparency);
				})
		});
};
var author$project$Tests$Transparency$box = function (attrs) {
	return A2(
		author$project$Testable$Element$el,
		_Utils_ap(
			_List_fromArray(
				[
					author$project$Testable$Element$width(
					author$project$Testable$Element$px(50)),
					author$project$Testable$Element$height(
					author$project$Testable$Element$px(50)),
					author$project$Testable$Element$Background$color(author$project$Tests$Palette$blue)
				]),
			attrs),
		author$project$Testable$Element$none);
};
var author$project$Tests$Transparency$view = A2(
	author$project$Testable$Element$column,
	_List_fromArray(
		[
			A2(author$project$Testable$Element$paddingXY, 0, 100),
			author$project$Testable$Element$spacing(16)
		]),
	_List_fromArray(
		[
			author$project$Testable$Element$text('transparency'),
			A2(
			author$project$Testable$Element$row,
			_List_fromArray(
				[
					author$project$Testable$Element$spacing(16)
				]),
			_List_fromArray(
				[
					author$project$Tests$Transparency$box(
					_List_fromArray(
						[
							author$project$Testable$Element$transparent(true)
						])),
					author$project$Tests$Transparency$box(
					_List_fromArray(
						[
							author$project$Testable$Element$transparent(false)
						]))
				])),
			author$project$Testable$Element$text('transparency with hover'),
			A2(
			author$project$Testable$Element$row,
			_List_fromArray(
				[
					author$project$Testable$Element$spacing(16)
				]),
			_List_fromArray(
				[
					author$project$Tests$Transparency$box(
					_List_fromArray(
						[
							author$project$Testable$Element$transparent(true)
						])),
					author$project$Tests$Transparency$box(
					_List_fromArray(
						[
							author$project$Testable$Element$transparent(false)
						]))
				])),
			author$project$Testable$Element$text('all opacities'),
			A2(
			author$project$Testable$Element$row,
			_List_fromArray(
				[
					author$project$Testable$Element$spacing(16)
				]),
			_List_fromArray(
				[
					author$project$Tests$Transparency$box(
					_List_fromArray(
						[
							author$project$Testable$Element$alpha(0)
						])),
					author$project$Tests$Transparency$box(
					_List_fromArray(
						[
							author$project$Testable$Element$alpha(0.25)
						])),
					author$project$Tests$Transparency$box(
					_List_fromArray(
						[
							author$project$Testable$Element$alpha(0.5)
						])),
					author$project$Tests$Transparency$box(
					_List_fromArray(
						[
							author$project$Testable$Element$alpha(0.75)
						])),
					author$project$Tests$Transparency$box(
					_List_fromArray(
						[
							author$project$Testable$Element$alpha(1.0)
						]))
				]))
		]));
var author$project$Tests$Run$main = author$project$Testable$Runner$program(
	_List_fromArray(
		[
			A2(elm$core$Tuple$pair, 'Basic Element', author$project$Tests$Basic$view),
			A2(elm$core$Tuple$pair, 'Nearby', author$project$Tests$Nearby$view),
			A2(elm$core$Tuple$pair, 'Element Alignment', author$project$Tests$ElementAlignment$view),
			A2(elm$core$Tuple$pair, 'Transparency', author$project$Tests$Transparency$view),
			A2(elm$core$Tuple$pair, 'Column Alignment', author$project$Tests$ColumnAlignment$view),
			A2(elm$core$Tuple$pair, 'Row Alignment', author$project$Tests$RowAlignment$view),
			A2(elm$core$Tuple$pair, 'Column Spacing', author$project$Tests$ColumnSpacing$view),
			A2(elm$core$Tuple$pair, 'Row Spacing', author$project$Tests$RowSpacing$view)
		]));
_Platform_export({'Tests':{'Run':{'init':author$project$Tests$Run$main(
	elm$json$Json$Decode$succeed(_Utils_Tuple0))(0)}}});}(this));