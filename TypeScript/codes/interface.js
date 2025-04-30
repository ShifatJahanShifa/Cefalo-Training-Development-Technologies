"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var shifa = { dbId: 2, email: 'as@gmail.com', userId: 1, startTrial: function () {
        return 'trial started';
    }, getCoupon: function () {
        // couponName= 'cnm', off: 7
        return 3;
    }, getToken: 'zx' };
console.log(shifa.startTrial(), shifa.getCoupon('s', 3), shifa);
