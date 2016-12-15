"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Queue = exports.Queue = function () {
    var items = new WeakMap();

    var Queue = function () {
        function Queue() {
            _classCallCheck(this, Queue);

            items.set(this, []);
        }

        _createClass(Queue, [{
            key: "enqueue",
            value: function enqueue(element) {
                var q = items.get(this);
                q.push(element);
            }
        }, {
            key: "dequeue",
            value: function dequeue() {
                var q = items.get(this);
                var r = q.shift();
                return r;
            }
        }, {
            key: "front",
            value: function front() {
                return items.get(this)[0];
            }
        }, {
            key: "isEmpty",
            value: function isEmpty() {
                return items.get(this).length == 0;
            }
        }, {
            key: "size",
            value: function size() {
                return items.get(this).length;
            }
        }, {
            key: "print",
            value: function print() {
                console.log(items.toString());
            }
        }]);

        return Queue;
    }();

    return Queue;
}();
//# sourceMappingURL=Queue.js.map