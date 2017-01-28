import { Component, OnInit } from '@angular/core';

@Component({
	moduleId: module.id,
	selector: 'my-game',
	templateUrl: 'game.component.html',
})

export class GameComponent implements OnInit{
	ngOnInit(){
		console.log('Game page');
	}

	fullImagePath: any;

	constructor(){
		this.fullImagePath = '../../images/square.png';
		this.count = 0;
	}

	count : number;

	onClick(){
		this.count+=1;
	}

}