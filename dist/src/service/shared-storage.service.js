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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { WebStorageService } from './webstorage.service';
import { sharedStorageUtility } from '../utility/index';
import { Injectable } from '@angular/core';
var SharedStorageService = /** @class */ (function (_super) {
    __extends(SharedStorageService, _super);
    function SharedStorageService() {
        var _this = _super.call(this, sharedStorageUtility) || this;
        _this._changes = sharedStorageUtility.changes;
        return _this;
    }
    SharedStorageService.keys = [];
    SharedStorageService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [])
    ], SharedStorageService);
    return SharedStorageService;
}(WebStorageService));
export { SharedStorageService };
//# sourceMappingURL=shared-storage.service.js.map