"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var welcome_component_1 = require('./welcome.component');
var common_1 = require('@angular/common');
var WelcomeModule = (function () {
    function WelcomeModule() {
    }
    WelcomeModule = __decorate([
        core_1.NgModule({
            import: [common_1.CommonModule],
            declarations: [welcome_component_1.WelcomeComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], WelcomeModule);
    return WelcomeModule;
}());
exports.WelcomeModule = WelcomeModule;
//# sourceMappingURL=welcome.module.js.map