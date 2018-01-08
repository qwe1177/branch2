webpackJsonp([0],{

/***/ 628:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom__ = __webpack_require__(248);



var Topics = function Topics(_ref) {
    var match = _ref.match;
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'h2',
            null,
            'Topics'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'ul',
            null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'li',
                null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1_react_router_dom__["b" /* Link */],
                    { to: match.url + '/rendering' },
                    'Rendering with React'
                )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'li',
                null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1_react_router_dom__["b" /* Link */],
                    { to: match.url + '/components' },
                    'Components'
                )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'li',
                null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1_react_router_dom__["b" /* Link */],
                    { to: match.url + '/props-v-state' },
                    'Props v. State'
                )
            )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["c" /* Route */], { path: match.url + '/:topicId', component: Topic }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["c" /* Route */], { exact: true, path: match.url, render: function render() {
                return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'h3',
                    null,
                    'Please select a topic.'
                );
            } })
    );
};

var Topic = function Topic(_ref2) {
    var match = _ref2.match;
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'h3',
            null,
            match.params.topicId
        )
    );
};

var _default = Topics;
/* harmony default export */ __webpack_exports__["default"] = (_default);
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
//# sourceMappingURL=0.d63c4e1.chunk.js.map