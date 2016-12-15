"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Stack = exports.Stack = function () {
    var items = new WeakMap();

    var Stack = function () {
        function Stack() {
            _classCallCheck(this, Stack);

            items.set(this, []);
        }
        // other methods

        _createClass(Stack, [{
            key: "push",
            value: function push(element) {
                var s = items.get(this);
                s.push(element);
            }
        }, {
            key: "pop",
            value: function pop() {
                var s = items.get(this);
                var r = s.pop();
                return r;
            }
        }, {
            key: "peek",
            value: function peek() {
                var s = items.get(this);
            }
        }, {
            key: "isEmpty",
            value: function isEmpty() {
                return items.get(this).length == 0;
            }
        }, {
            key: "clear",
            value: function clear() {
                items.set(this, []);
            }
        }, {
            key: "size",
            value: function size() {
                var s = items.get(this);
                return s.length;
            }
        }]);

        return Stack;
    }();

    return Stack;
}();
//# sourceMappingURL=Stack.js.map