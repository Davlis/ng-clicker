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
var core_2 = require('angular2-cookie/core');
exports.HOWMANYBLOCKS = 4;
(function (EVENTS) {
    EVENTS[EVENTS["FIRST"] = 0] = "FIRST";
    EVENTS[EVENTS["INCREMENTAL"] = 1] = "INCREMENTAL";
})(exports.EVENTS || (exports.EVENTS = {}));
var EVENTS = exports.EVENTS;
var GameComponent = (function () {
    function GameComponent(_cookieService) {
        this._cookieService = _cookieService;
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
        this.end = false; // end of game
        this.EVENTS = EVENTS; // group of events clicked
        this.initCost(); // initialize cost of blocks
        this.counterIncBySec(); // incrementing score START
        this.getValFromCookies(); // get saved values
    };
    GameComponent.prototype.getValFromCookies = function () {
        var total = this._cookieService.getObject('total');
        var count = this._cookieService.getObject('count');
        var countPerSec = this._cookieService.getObject('countPerSec');
        var cost = this._cookieService.getObject('cost');
        var timeOnPage = this._cookieService.getObject('timeOnPage');
        if (!isNaN(+total) && !isNaN(+count) && !isNaN(+countPerSec) && !isNaN(+timeOnPage) && cost) {
            this.total = +total;
            this.count = +count;
            this.countPerSec = +countPerSec;
            this.timeOnPage = +timeOnPage;
            for (var i = 0; i < exports.HOWMANYBLOCKS; i++) {
                if (cost[i]) {
                    this.cost[i] = cost[i];
                }
                else {
                    this.initCost();
                    break;
                }
            }
        }
    };
    // todo : check why cookie expries after closing browser :(
    GameComponent.prototype.saveToCookie = function () {
        var expires = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
        this._cookieService.putObject('total', this.total, { expires: expires });
        this._cookieService.putObject('count', this.count, { expires: expires });
        this._cookieService.putObject('countPerSec', this.countPerSec, { expires: expires });
        this._cookieService.putObject('cost', this.cost, { expires: expires });
        this._cookieService.putObject('timeOnPage', this.timeOnPage, { expires: expires });
    };
    GameComponent.prototype.reset = function () {
        this.total = 0;
        this.count = 0;
        this.countPerSec = 0;
        this.timeOnPage = 0;
        this.initCost();
        this.saveToCookie();
    };
    GameComponent.prototype.initCost = function () {
        for (var i = 0; i < exports.HOWMANYBLOCKS; ++i) {
            this.cost[i] = (i * 10);
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
    GameComponent.prototype.stop = function () {
        if (this.refToInterval) {
            clearInterval(this.refToInterval);
        }
    };
    GameComponent.prototype.logic = function (which) {
        if (!this.end) {
            if (!isNaN(which)) {
                var choice = 0;
                if (which >= 1) {
                    if (which <= 3) {
                        choice = 1;
                    }
                }
                switch (choice) {
                    case this.EVENTS.FIRST: {
                        this.total += 1;
                        this.count += 1;
                        this.which[which] += 1;
                        break;
                    }
                    case this.EVENTS.INCREMENTAL: {
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
                        console.log('wut? ERROR');
                    }
                }
            }
            if (this.count >= 10 * 10 * 10 * 10 * 10) {
                this.stop();
                this.end = true;
                alert('You won');
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
        __metadata('design:paramtypes', [core_2.CookieService])
    ], GameComponent);
    return GameComponent;
}());
exports.GameComponent = GameComponent;
//# sourceMappingURL=game.component.js.map