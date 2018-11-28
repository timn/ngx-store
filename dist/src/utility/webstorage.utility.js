import { Cache } from '../decorator/cache';
import { CONFIG_PREFIX, debug } from '../config/index';
import { Subject } from 'rxjs';
import { NgxStorageEvent } from './storage/storage-event';
var WebStorageUtility = /** @class */ (function () {
    function WebStorageUtility(storage, prefix, previousPrefix) {
        var _this = this;
        this._prefix = '';
        this._changes = new Subject();
        this._storage = storage;
        this._prefix = prefix;
        // handle previousPrefix for backward-compatibility and safe config changes below
        if (prefix === previousPrefix)
            return;
        if (previousPrefix === null)
            return;
        if (previousPrefix === undefined)
            return;
        debug.log(this.getStorageName() + ' > Detected prefix change from ' + previousPrefix + ' to ' + prefix);
        this.forEach(function (value, key) {
            // ignore config settings when previousPrefix = ''
            if (key.startsWith(previousPrefix) && !key.startsWith(CONFIG_PREFIX)) {
                var nameWithoutPrefix = _this.trimPrefix(key);
                _this.set(nameWithoutPrefix, _this._storage.getItem(key));
                if (previousPrefix !== '') {
                    _this._storage.removeItem(key);
                }
            }
        });
    }
    WebStorageUtility.getSettable = function (value) {
        return JSON.stringify(value);
    };
    WebStorageUtility.getGettable = function (value) {
        if (value === 'undefined')
            return null;
        try {
            return JSON.parse(value);
        }
        catch (e) {
            return value;
        }
    };
    Object.defineProperty(WebStorageUtility.prototype, "prefix", {
        get: function () {
            return this._prefix;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WebStorageUtility.prototype, "keys", {
        get: function () {
            var keys = [];
            this.forEach(function (value, key) { return keys.push(key); });
            return keys;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WebStorageUtility.prototype, "changes", {
        get: function () {
            return this._changes.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    WebStorageUtility.prototype.getStorage = function () {
        return this._storage;
    };
    WebStorageUtility.prototype.getStorageKey = function (key, prefix) {
        prefix = (typeof prefix === 'string') ? prefix : this.prefix;
        return "" + prefix + key;
    };
    WebStorageUtility.prototype.getStorageName = function () {
        return this._storage.type || ((this._storage === localStorage) ? 'localStorage' : 'sessionStorage');
    };
    WebStorageUtility.prototype.get = function (key, config) {
        if (config === void 0) { config = {}; }
        var storageKey = this.getStorageKey(key, config.prefix);
        var value = this._storage.getItem(storageKey);
        return this.getGettable(value);
    };
    WebStorageUtility.prototype.set = function (key, value, config) {
        if (config === void 0) { config = {}; }
        if (value === null || value === undefined) {
            this.remove(key);
            return null;
        }
        try {
            var storageKey = this.getStorageKey(key, config.prefix);
            var storable = this.getSettable(value);
            this.emitEvent(key, value);
            this._storage.setItem(storageKey, storable, config.expires);
            var cacheItem = Cache.get(key);
            if (cacheItem) {
                debug.log("updating following CacheItem from " + this.constructor.name + ":", cacheItem);
                cacheItem.resetProxy();
                cacheItem.propagateChange(value, this);
            }
        }
        catch (error) {
            console.warn("[ngx-store] " + this.getStorageName() + ": following error occurred while trying to save " + key + " =", value);
            console.error(error);
        }
        return value;
    };
    // TODO return true if item existed and false otherwise (?)
    WebStorageUtility.prototype.remove = function (key, config) {
        if (config === void 0) { config = {}; }
        var storageKey = this.getStorageKey(key, config.prefix);
        this._storage.removeItem(storageKey);
        var cacheItem = Cache.get(key);
        if (cacheItem) {
            cacheItem.resetProxy();
        }
    };
    WebStorageUtility.prototype.clear = function () {
        var _this = this;
        this.emitEvent(null, null, null);
        this.forEach(function (value, key) {
            if (key.startsWith(CONFIG_PREFIX))
                return;
            _this.remove(key, { prefix: '' });
        });
    };
    WebStorageUtility.prototype.forEach = function (callbackFn) {
        var _this = this;
        if (typeof this._storage.forEach === 'function') {
            return this._storage.forEach(function (value, key) {
                callbackFn(_this.getGettable(value), key);
            });
        }
        Object.keys(this._storage).forEach(function (key) {
            callbackFn(_this.getGettable(_this._storage[key]), key);
        });
    };
    WebStorageUtility.prototype.getSettable = function (value) {
        return WebStorageUtility.getSettable(value);
    };
    WebStorageUtility.prototype.getGettable = function (value) {
        return WebStorageUtility.getGettable(value);
    };
    WebStorageUtility.prototype.trimPrefix = function (key) {
        return key.replace(this.prefix, '');
    };
    WebStorageUtility.prototype.emitEvent = function (key, newValue, oldValue) {
        var event = new NgxStorageEvent(this.getStorageName(), key, this._storage);
        event.oldValue = (oldValue !== undefined) ? oldValue : this.get(key);
        event.newValue = newValue;
        this._changes.next(event);
    };
    return WebStorageUtility;
}());
export { WebStorageUtility };
//# sourceMappingURL=webstorage.utility.js.map