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
var GameComponent = (function () {
    //@ViewChild('block1') block1: any;
    //@ViewChild('block2') block2: any;
    function GameComponent() {
        this.fullImagePath = '../../images/square.png';
        this.count = 0;
    }
    GameComponent.prototype.ngOnInit = function () {
        console.log('Game page');
        this.which = [];
        this.clickValue = 1;
        this.countPerSec = 0;
        this.counterIncBySec();
    };
    GameComponent.prototype.onClick = function (which) {
        var clickValue = 1;
        if (!isNaN(which)) {
            this.count += clickValue;
            if (isNaN(this.which[which])) {
                this.which[which] = 0;
                this.which[which] += 1;
            }
            else {
                this.which[which] += 1;
            }
            this.logic(which);
        }
    };
    GameComponent.prototype.counterIncBySec = function () {
        var _this = this;
        var that = this;
        if (that.refToInterval) {
            clearInterval(that.refToInterval);
        }
        that.refToInterval = setInterval(function () { that.count += _this.countPerSec; }, 1000);
    };
    GameComponent.prototype.logic = function (which) {
        if (!isNaN(which)) {
            switch (which) {
                case 0: {
                    console.log('0');
                    break;
                }
                case 1: {
                    console.log('1');
                    break;
                }
                case 2: {
                    console.log('2');
                    break;
                }
                case 3: {
                    this.countPerSec += 3;
                    console.log('3');
                    break;
                }
                default: {
                    console.log('wut?');
                }
            }
        }
    };
    GameComponent.prototype.createRange = function (number) {
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
        }), 
        __metadata('design:paramtypes', [])
    ], GameComponent);
    return GameComponent;
}());
exports.GameComponent = GameComponent;
//# sourceMappingURL=game.component.js.map