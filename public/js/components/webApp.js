webpackJsonp([0],{

/***/ 101:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(20);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(33);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Header = __webpack_require__(98);

var _Header2 = _interopRequireDefault(_Header);

var _ContentArea = __webpack_require__(97);

var _ContentArea2 = _interopRequireDefault(_ContentArea);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Layout = function (_Component) {
  _inherits(Layout, _Component);

  function Layout() {
    _classCallCheck(this, Layout);

    var _this = _possibleConstructorReturn(this, (Layout.__proto__ || Object.getPrototypeOf(Layout)).call(this));

    _this.clickedBtn = function () {
      console.log('swag');
    };

    _this.state = {
      name: 'Joe'
    };
    return _this;
  }

  _createClass(Layout, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: 'container' },
          _react2.default.createElement(_Header2.default, null),
          _react2.default.createElement(_ContentArea2.default, null)
        )
      );
    }
  }]);

  return Layout;
}(_react.Component);

var app = document.getElementById('webAppRoot');

_reactDom2.default.render(_react2.default.createElement(Layout, null), app);

/***/ }),

/***/ 97:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(20);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ContentArea = function (_Component) {
    _inherits(ContentArea, _Component);

    function ContentArea() {
        _classCallCheck(this, ContentArea);

        var _this = _possibleConstructorReturn(this, (ContentArea.__proto__ || Object.getPrototypeOf(ContentArea)).call(this));

        _this.clickedBtn = function () {
            console.log('swag');
        };

        _this.state = {
            name: 'Joe'
        };
        return _this;
    }

    _createClass(ContentArea, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'section',
                { id: 'content-area' },
                _react2.default.createElement(
                    'div',
                    { className: 'col-md-6 model' },
                    _react2.default.createElement('img', { src: 'img/bape2.png' })
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'col-md-6 info' },
                    _react2.default.createElement(
                        'div',
                        { className: 'insider' },
                        _react2.default.createElement(
                            'h5',
                            null,
                            'Men\'s'
                        ),
                        _react2.default.createElement(
                            'h1',
                            null,
                            'JACKET DRIPPING SAUCE'
                        ),
                        _react2.default.createElement(
                            'p',
                            null,
                            'Lorem ipsum dolor amet banh mi artisan pork belly, ugh cray woke cold-pressed migas marfa fixie meditation. Normcore plaid air plant vice disrupt everyday carry af vape. Occupy williamsburg hella PBR&B, everyday carry vinyl hexagon. Whatever synth kinfolk fingerstache etsy, pabst kitsch chillwave selvage tbh raw denim chicharrones. You probably haven\'t heard of them semiotics helvetica lyft. Taxidermy woke hoodie fashion axe blue bottle unicorn.'
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'size' },
                            _react2.default.createElement(
                                'div',
                                { className: 'title' },
                                'size'
                            ),
                            _react2.default.createElement(
                                'ul',
                                { className: 'sizes' },
                                _react2.default.createElement(
                                    'li',
                                    { className: 'circle' },
                                    'S'
                                ),
                                _react2.default.createElement(
                                    'li',
                                    { className: 'circle' },
                                    'M'
                                ),
                                _react2.default.createElement(
                                    'li',
                                    { className: 'circle' },
                                    'L'
                                ),
                                _react2.default.createElement(
                                    'li',
                                    { className: 'semi-circle' },
                                    'XL'
                                ),
                                _react2.default.createElement(
                                    'li',
                                    { className: 'semi-circle' },
                                    'XXL'
                                ),
                                _react2.default.createElement(
                                    'li',
                                    { className: 'semi-circle' },
                                    'CUSTOM'
                                )
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'action-btns' },
                            _react2.default.createElement(
                                'a',
                                { className: 'col-md-6 red-hallow-btn' },
                                _react2.default.createElement(
                                    'span',
                                    { className: 'price' },
                                    '$495'
                                ),
                                'add to cart'
                            ),
                            _react2.default.createElement(
                                'a',
                                { className: 'col-md-6 lightgrey-btn' },
                                'find a store'
                            )
                        )
                    )
                )
            );
        }
    }]);

    return ContentArea;
}(_react.Component);

exports.default = ContentArea;

/***/ }),

/***/ 98:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(20);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_Component) {
    _inherits(Header, _Component);

    function Header() {
        _classCallCheck(this, Header);

        var _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this));

        _this.clickedBtn = function () {
            console.log('swag');
        };

        _this.state = {
            name: 'Joe'
        };
        return _this;
    }

    _createClass(Header, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'header',
                { id: 'header' },
                _react2.default.createElement(
                    'div',
                    { className: 'logo' },
                    'GammaStore'
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'menu' },
                    _react2.default.createElement(
                        'nav',
                        null,
                        _react2.default.createElement(
                            'a',
                            { href: 'index.html' },
                            'Home'
                        ),
                        _react2.default.createElement(
                            'a',
                            { href: 'lookbook.html' },
                            'LookBook'
                        ),
                        _react2.default.createElement(
                            'a',
                            { href: 'lookbook.html' },
                            'Men\'s'
                        ),
                        _react2.default.createElement(
                            'a',
                            { href: 'lookbook.html' },
                            'Women\'s'
                        ),
                        _react2.default.createElement(
                            'a',
                            { href: 'lookbook.html' },
                            'News'
                        )
                    )
                )
            );
        }
    }]);

    return Header;
}(_react.Component);

exports.default = Header;

/***/ })

},[101]);