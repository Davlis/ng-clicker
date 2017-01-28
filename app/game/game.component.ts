import { Component, OnInit, ViewChild} from '@angular/core';

@Component({
	moduleId: module.id,
	selector: 'my-game',
	templateUrl: 'game.component.html',
})

export class GameComponent implements OnInit{
	ngOnInit(){
		console.log('Game page');
		this.which = [ ];

		setInterval((value=1) => { this.count+=value; }, 1000);
	}

	fullImagePath: any;
	which : number[];


	//@ViewChild('block1') block1: any;
	//@ViewChild('block2') block2: any;

	constructor(){
		this.fullImagePath = '../../images/square.png';
		this.count = 0;
	}

	count : number;

	onClick(which:number){

		let clickValue = 1;

		if(!isNaN(which)){
			this.count+=clickValue;
			if(isNaN(this.which[which])){
				this.which[which]=0;
				this.which[which]+=1;
			}else{
				this.which[which]+=1;
			}
			if(this.which[which] ==  3){
				console.log(`Blok ${which+1} osiagnal 3`);
			}

			this.logic(which);
		}
	}

	counterIncBySec(){

	}

	logic(which:number){
		if(!isNaN(which)){
			switch (which){
				case 0 : {
					console.log('0'); break;
				}
				case 1 : {
					console.log('1'); break;
				}
				case 2 : {
					console.log('2'); break;
				}
				case 3 : {
					console.log('3'); break;
				}
				default: {
					console.log('wut?');
				}
			}

		}
	}

	createRange(number: number){
	  var items: number[] = [];
	  for(var i = 1; i <= number; i++){
	     items.push(i);
	  }
	  return items;
	}

}