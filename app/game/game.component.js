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
exports.HOWMANYBLOCKS = 4;
var GameComponent = (function () {
    function GameComponent() {
        this.fullImagePath = '../../images/square.png';
        this.count = 0;
        this.total = 0;
    }
    GameComponent.prototype.ngOnInit = function () {
        console.log('Game page');
        this.which = []; // which block clicked
        this.cost = []; // cost of click
        this.countPerSec = 0; // inc score per second
        this.timeOnPage = 0; // how much time user lost on pag
        this.counterIncBySec(); // incrementing score START
        this.initCost(); // initialize cost of blocks
    };
    GameComponent.prototype.initCost = function () {
        for (var i = 0; i <= exports.HOWMANYBLOCKS; ++i) {
            this.cost.push(i * 10);
        }
    };
    GameComponent.prototype.onClick = function (which) {
        if (!isNaN(which)) {
            if (isNaN(this.which[which])) {
                this.which[which] = 0;
            }
            this.logic(which);
        }
    };
    GameComponent.prototype.counterIncBySec = function () {
        var _this = this;
        if (this.refToInterval) {
            clearInterval(this.refToInterval);
        }
        this.refToInterval = setInterval(function () {
            _this.count += _this.countPerSec;
            _this.total += _this.countPerSec;
            _this.timeOnPage += 1;
        }, 1000);
    };
    GameComponent.prototype.logic = function (which) {
        if (!isNaN(which)) {
            var choice = 0;
            if (which >= 1) {
                if (which <= 3) {
                    choice = 1;
                }
            }
            switch (choice) {
                case 0: {
                    this.total += 1;
                    this.count += 1;
                    this.which[which] += 1;
                    break;
                }
                case 1: {
                    var cost = this.cost[which];
                    if (this.count >= cost) {
                        this.count -= cost;
                        this.countPerSec += which;
                        this.which[which] += 1;
                        this.cost[which] += Math.ceil(this.cost[which] * 0.25);
                    }
                    break;
                }
                default: {
                    console.log('wut?');
                }
            }
        }
    };
    GameComponent.prototype.createRange = function (number) {
        if (number === void 0) { number = exports.HOWMANYBLOCKS; }
        var items = [];
        for (var i = 1; i <= number; i++) {
            items.push(i);
        }
        return items;
    };
    GameComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-game',
            templateUrl: 'game.component.html',
            styleUrls: ['game.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], GameComponent);
    return GameComponent;
}());
exports.GameComponent = GameComponent;
//# sourceMappingURL=game.component.js.map