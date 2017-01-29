import { Component, OnInit } from '@angular/core';
import { CookieService } from 'angular2-cookie/core';

import { CookieOptionsArgs } from 'angular2-cookie/services/cookie-options-args.model';

export const HOWMANYBLOCKS = 4;
export enum EVENTS {
	FIRST,
	INCREMENTAL
}

@Component({
	moduleId: module.id,
	selector: 'my-game',
	templateUrl: 'game.component.html',
	styleUrls: ['game.component.css']
})

export class GameComponent implements OnInit{
	constructor(private _cookieService:CookieService){
		this.fullImagePath = '../../images/square.png';
		this.count = 0;
		this.total = 0;
	}

	ngOnInit(){
		console.log('Game page');
		this.which = [ ];			// which block clicked
		this.cost = [ ];			// cost of click
		this.countPerSec = 0;		// inc score per second
		this.timeOnPage = 0;		// how much time user lost on pag
		this.end = false;			// end of game
		this.EVENTS = EVENTS;		// group of events clicked
		this.initCost();			// initialize cost of blocks
		this.counterIncBySec();		// incrementing score START
		this.getValFromCookies();

	}

	fullImagePath: any;
	which : number[];
	cost  : number[];
	refToInterval : any;
	countPerSec : number;
	count : number;
	timeOnPage : number;
	total : number;
	end : boolean;
	EVENTS: any;

	getValFromCookies(){
		let total = this._cookieService.getObject('total');
		let count = this._cookieService.getObject('count');
		let countPerSec = this._cookieService.getObject('countPerSec');
		let cost = this._cookieService.getObject('cost');
		let timeOnPage = this._cookieService.getObject('timeOnPage');

		if(!isNaN(+total) && !isNaN(+count) && !isNaN(+countPerSec) && !isNaN(+timeOnPage) && cost){

			this.total = +total;
			this.count = +count;
			this.countPerSec = +countPerSec;
			this.timeOnPage = +timeOnPage;

			for(let i=0; i<HOWMANYBLOCKS; i++){
				if(cost[i]){
					this.cost[i] = cost[i];
				} else {
					this.initCost();
					break;
				}
			}
		}

	}

	// todo : check why cookie expries after closing browser :(
	saveToCookie(){
		let expires = new Date(Date.now() + 7*24*60*60*1000);

		this._cookieService.putObject('total',this.total,{expires: expires});
		this._cookieService.putObject('count',this.count,{expires: expires});
		this._cookieService.putObject('countPerSec',this.countPerSec,{expires: expires})
		this._cookieService.putObject('cost',this.cost,{expires: expires});
		this._cookieService.putObject('timeOnPage',this.timeOnPage,{expires: expires});
	}

	reset(){
		this.total=0;
		this.count=0;
		this.countPerSec=0;
		this.initCost();
		this.saveToCookie();
	}

	initCost(){
		for(let i=0; i<HOWMANYBLOCKS; ++i){
			this.cost[i]=(i*10);
		}
	}

	onClick(which:number){
		if(!isNaN(which)){

			if(isNaN(this.which[which])){
				this.which[which]=0;
			}

			this.logic(which);
		}
	}

	counterIncBySec(){
		if(this.refToInterval){
			clearInterval(this.refToInterval);
		}
		this.refToInterval = setInterval(() => {
			this.count+=this.countPerSec;

			this.total+=this.countPerSec;
			this.timeOnPage+=1;

		}, 1000);
	}

	stop(){
		if(this.refToInterval){
			clearInterval(this.refToInterval);
		}
	}

	logic(which:number){
		if(!this.end){
			if(!isNaN(which)){

			let choice=0;
				if(which >= 1){
					if(which <= 3){
						choice = 1;
					}
				}
				switch (choice){
					case this.EVENTS.FIRST  : {
						this.total+=1;
						this.count+=1;
						this.which[which]+=1;
						break;
					}
					case this.EVENTS.INCREMENTAL : {
						let cost = this.cost[which];
						if(this.count >= cost){
							this.count-= cost;
							this.countPerSec+=which;
							this.which[which]+=1;
							this.cost[which]+=Math.ceil(this.cost[which]*0.25);
						}
					    break;
					 }
					default: {
						console.log('wut? ERROR');
					}
				}

			}

			if(this.count >= 10*10*10*10*10){	// 100k
				this.stop();
				this.end = true;
				alert('You won');
			}
		}
	}

	createRange(number=HOWMANYBLOCKS){
	  var items: number[] = [];
	  for(var i = 1; i <= number; i++){
	     items.push(i);
	  }
	  return items;
	}

}