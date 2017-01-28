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
        var _this = this;
        console.log('Game page');
        this.which = [];
        setInterval(function (value) {
            if (value === void 0) { value = 1; }
            _this.count += value;
        }, 1000);
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
            if (this.which[which] == 3) {
                console.log("Blok " + (which + 1) + " osiagnal 3");
            }
            this.logic(which);
        }
    };
    GameComponent.prototype.counterIncBySec = function () {
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