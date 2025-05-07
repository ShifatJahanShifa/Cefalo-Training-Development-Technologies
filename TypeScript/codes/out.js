var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var parentNS;
(function (parentNS) {
    var User = /** @class */ (function () {
        function User() {
        }
        User.prototype.setName = function (name) {
            this.name = name;
        };
        return User;
    }());
    parentNS.User = User;
})(parentNS || (parentNS = {}));
/// <reference path='parentnamespace.ts'/>
var parentNS;
(function (parentNS) {
    var Child = /** @class */ (function (_super) {
        __extends(Child, _super);
        function Child() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Child.prototype.getName = function () {
            return this.name;
        };
        return Child;
    }(parentNS.User));
    parentNS.Child = Child;
})(parentNS || (parentNS = {}));
var child = new parentNS.Child();
child.setName("shifa");
console.log(child.getName());
