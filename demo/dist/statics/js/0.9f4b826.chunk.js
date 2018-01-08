webpackJsonp([0],{

/***/ 628:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(15);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(248);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Topics = function Topics(_ref) {
    var match = _ref.match;
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            'h2',
            null,
            'Topics'
        ),
        _react2.default.createElement(
            'ul',
            null,
            _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                    _reactRouterDom.Link,
                    { to: match.url + '/rendering' },
                    'Rendering with React'
                )
            ),
            _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                    _reactRouterDom.Link,
                    { to: match.url + '/components' },
                    'Components'
                )
            ),
            _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                    _reactRouterDom.Link,
                    { to: match.url + '/props-v-state' },
                    'Props v. State'
                )
            )
        ),
        _react2.default.createElement(_reactRouterDom.Route, { path: match.url + '/:topicId', component: Topic }),
        _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: match.url, render: function render() {
                return _react2.default.createElement(
                    'h3',
                    null,
                    'Please select a topic.'
                );
            } })
    );
};

var Topic = function Topic(_ref2) {
    var match = _ref2.match;
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            'h3',
            null,
            match.params.topicId
        )
    );
};

var _default = Topics;
exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(Topics, 'Topics', 'E:/createreactapp/demo/src/topics_Chunk.js');

    __REACT_HOT_LOADER__.register(Topic, 'Topic', 'E:/createreactapp/demo/src/topics_Chunk.js');

    __REACT_HOT_LOADER__.register(_default, 'default', 'E:/createreactapp/demo/src/topics_Chunk.js');
}();

;

/***/ })

});
//# sourceMappingURL=0.9f4b826.chunk.js.map