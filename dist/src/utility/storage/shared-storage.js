var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { NgxStorage } from './storage';
var SharedStorage = /** @class */ (function (_super) {
    __extends(SharedStorage, _super);
    function SharedStorage() {
        var _this = _super.call(this) || this;
        _this.sharedMap = new Map();
        _this.externalChanges = undefined;
        return _this;
    }
    Object.defineProperty(SharedStorage.prototype, "type", {
        get: function () {
            return 'sharedStorage';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SharedStorage.prototype, "length", {
        get: function () {
            return this.getAllKeys().length;
        },
        enumerable: true,
        configurable: true
    });
    SharedStorage.prototype.key = function (index) {
        return this.getAllKeys()[index];
    };
    SharedStorage.prototype.getItem = function (key) {
        var value = this.sharedMap.get(key);
        return (value !== undefined) ? value : null;
    };
    SharedStorage.prototype.removeItem = function (key) {
        this.sharedMap.delete(key);
    };
    SharedStorage.prototype.setItem = function (key, value) {
        this.sharedMap.set(key, value);
    };
    SharedStorage.prototype.clear = function () {
        this.sharedMap.clear();
    };
    SharedStorage.prototype.forEach = function (func) {
        return this.sharedMap.forEach(function (value, key) { return func(value, key); });
    };
    SharedStorage.prototype.getAllKeys = function () {
        return Array.from(this.sharedMap.keys());
    };
    return SharedStorage;
}(NgxStorage));
export { SharedStorage };
export var sharedStorage = new SharedStorage();
//# sourceMappingURL=shared-storage.js.map