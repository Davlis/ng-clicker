import { Component, OnInit, ViewChild} from '@angular/core';

export const HOWMANYBLOCKS = 4;

@Component({
	moduleId: module.id,
	selector: 'my-game',
	templateUrl: 'game.component.html',
	styleUrls: ['game.component.css']
})

export class GameComponent implements OnInit{
	constructor(){
		this.fullImagePath = '../../images/square.png';
		this.count = 0;
	}

	ngOnInit(){
		console.log('Game page');
		this.which = [ ];
		this.cost = [ ];
		this.clickValue = 1;
		this.countPerSec = 0;
		this.counterIncBySec();

		this.initCost();
	}

	fullImagePath: any;
	which : number[];
	cost  : number[];
	refToInterval : any;
	clickValue : number;
	countPerSec : number;
	count : number;

	initCost(){
		for(let i=0; i<=HOWMANYBLOCKS; ++i){
			this.cost.push(i*10);
		}
	}

	onClick(which:number){
		if(!isNaN(which)){

			if(isNaN(this.which[which])){
				this.which[which]=0;	// how many clicked
			}

			this.logic(which);
		}
	}

	counterIncBySec(){
		if(this.refToInterval){
			clearInterval(this.refToInterval);
		}
		this.refToInterval = setInterval(() => { this.count+=this.countPerSec; }, 1000);
	}

	logic(which:number){
		if(!isNaN(which)){

		let choice=0;
			if(which >= 1){
				if(which <= 3){
					choice = 1;
				}
			}

			switch (choice){
				case 0 : {
					this.count+=1;
					this.which[which]+=1;
					break;
				}
				case 1 : {
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
					console.log('wut?');
				}
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