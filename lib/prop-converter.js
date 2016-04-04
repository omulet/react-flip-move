'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _helpers = require('./helpers.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * React Flip Move | propConverter
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * (c) 2016-present Joshua Comeau
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Abstracted away a bunch of the messy business with props.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *   - propTypes and defaultProps
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *   - Type conversion (We accept 'string' and 'number' values for duration,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *     delay, and other fields, but we actually need them to be ints.)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *   - Children conversion (we need the children to be an array. May not always
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *     be, if a single child is passed in.)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

function propConverter(ComposedComponent) {
  var _class, _temp;

  return _temp = _class = function (_Component) {
    _inherits(Converter, _Component);

    function Converter() {
      _classCallCheck(this, Converter);

      return _possibleConstructorReturn(this, Object.getPrototypeOf(Converter).apply(this, arguments));
    }

    _createClass(Converter, [{
      key: 'convertProps',
      value: function convertProps(props) {
        // Create a non-immutable working copy
        var workingProps = _extends({}, props);

        // Do string-to-int conversion for all timing-related props
        var timingPropNames = ['duration', 'delay', 'staggerDurationBy', 'staggerDelayBy'];

        timingPropNames.forEach(function (prop) {
          return workingProps[prop] = (0, _helpers.convertToInt)(workingProps[prop], prop);
        });

        // Convert the children to a React.Children array.
        // This is to ensure we're always working with an array, and not
        // an only child. There's some weirdness with this.
        // See: https://github.com/facebook/react/pull/3650/files
        workingProps.children = _react2.default.Children.toArray(this.props.children);

        return workingProps;
      }
    }, {
      key: 'render',
      value: function render() {
        return _react2.default.createElement(ComposedComponent, this.convertProps(this.props));
      }
    }]);

    return Converter;
  }(_react.Component), _class.propTypes = {
    children: _react.PropTypes.oneOfType([_react.PropTypes.array, _react.PropTypes.object]).isRequired,
    easing: _react.PropTypes.string,
    duration: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),
    delay: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),
    staggerDurationBy: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),
    staggerDelayBy: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),
    onStart: _react.PropTypes.func,
    onFinish: _react.PropTypes.func,
    onFinishAll: _react.PropTypes.func,
    className: _react.PropTypes.string,
    typeName: _react.PropTypes.string
  }, _class.defaultProps = {
    easing: 'ease-in-out',
    duration: 350,
    delay: 0,
    staggerDurationBy: 0,
    staggerDelayBy: 0,
    typeName: 'div'
  }, _temp;
}

exports.default = propConverter;
module.exports = exports['default'];