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

		if(isNaN(this.which[which])){
			this.which[which]=0;
			this.which[which]+=1;
		}else{
			this.which[which]+=1;
		}

		this.count+=1;	// counter for global


		if(this.which[which] ==  3){
			console.log(`Blok ${which+1} osiagnal 3`);
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