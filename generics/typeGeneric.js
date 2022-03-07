var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var newStringArray = ['vivek', 's'];
var newNumberArray = [1, 2, 3, 4, 5];
var last = function (arr) {
    return arr[arr.length - 1];
};
var l = last([1, 2, 3]);
var m = last(['1', '2', '3']);
var makeArr = function (x, y) {
    return [x, y];
};
var v = makeArr(5, 6); //type number[]
var v2 = makeArr('viv', 6); //type string|number []
var makeFullName = function (obj) {
    return __assign(__assign({}, obj), { fullName: obj.firstName + ' ' + obj.lastName });
};
var v1 = makeFullName({
    firstName: 'vivek',
    lastName: 'lokhande',
    alt: 'ned'
});
console.log(v1);
