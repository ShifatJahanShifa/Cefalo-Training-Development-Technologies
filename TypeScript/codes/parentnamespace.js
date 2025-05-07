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
