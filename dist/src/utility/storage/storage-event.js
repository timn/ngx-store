var NgxStorageEvent = /** @class */ (function () {
    function NgxStorageEvent(type, key, storageArea) {
        this.type = type;
        this.key = key;
        this.storageArea = storageArea;
        this.timeStamp = (Date.now() - NgxStorageEvent.initTimeStamp);
        this.bubbles = false;
        this.cancelBubble = false;
        this.cancelable = false;
        this.composed = false;
        this.currentTarget = window;
        this.defaultPrevented = false;
        this.eventPhase = 2;
        this.isTrusted = true;
        this.path = [window];
        this.returnValue = true;
        this.srcElement = window;
        this.target = window;
        this.url = window.location.href;
        this.isInternal = true;
    }
    Object.defineProperty(NgxStorageEvent.prototype, "initEvent", {
        /**
         * Methods below exist only to satisfy TypeScript compiler
         */
        get: function () {
            return StorageEvent.prototype.initEvent.bind(this);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxStorageEvent.prototype, "preventDefault", {
        get: function () {
            return StorageEvent.prototype.preventDefault.bind(this);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxStorageEvent.prototype, "stopImmediatePropagation", {
        get: function () {
            return StorageEvent.prototype.stopImmediatePropagation.bind(this);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxStorageEvent.prototype, "stopPropagation", {
        get: function () {
            return StorageEvent.prototype.stopPropagation.bind(this);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxStorageEvent.prototype, "composedPath", {
        get: function () {
            return StorageEvent.prototype.composedPath.bind(this);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxStorageEvent.prototype, "AT_TARGET", {
        get: function () {
            return StorageEvent.prototype.AT_TARGET;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxStorageEvent.prototype, "BUBBLING_PHASE", {
        get: function () {
            return StorageEvent.prototype.BUBBLING_PHASE;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxStorageEvent.prototype, "CAPTURING_PHASE", {
        get: function () {
            return StorageEvent.prototype.BUBBLING_PHASE;
        },
        enumerable: true,
        configurable: true
    });
    NgxStorageEvent.initTimeStamp = Date.now();
    return NgxStorageEvent;
}());
export { NgxStorageEvent };
//# sourceMappingURL=storage-event.js.map