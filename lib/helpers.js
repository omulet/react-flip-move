'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.convertToInt = convertToInt;
exports.convertAllToInt = convertAllToInt;
exports.whichTransitionEvent = whichTransitionEvent;
/**
 * React Flip Move
 * (c) 2016-present Joshua Comeau
 */

function convertToInt(val, propName) {
  var int = typeof val === 'string' ? parseInt(val) : val;

  if (isNaN(int)) {
    console.error('Invalid prop \'' + propName + '\' supplied to FlipMove. Expected a number, or a string that can easily be resolved to a number (eg. "100"). Instead, received \'' + val + '\'.');
  }

  return int;
}

function convertAllToInt() {
  for (var _len = arguments.length, values = Array(_len), _key = 0; _key < _len; _key++) {
    values[_key] = arguments[_key];
  }

  return values.map(convertToInt);
}

// Modified from Modernizr
function whichTransitionEvent() {
  var transitions = {
    'transition': 'transitionend',
    'OTransition': 'oTransitionEnd',
    'MozTransition': 'transitionend',
    'WebkitTransition': 'webkitTransitionEnd'
  };

  // If we're running in a browserless environment (eg. SSR), it doesn't apply.
  // Return a string so that it maintains the type that is expected.
  if (typeof document === 'undefined') return '';

  var el = document.createElement('fakeelement');

  for (var t in transitions) {
    if (el.style[t] !== undefined) return transitions[t];
  }
}