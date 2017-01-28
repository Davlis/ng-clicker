import { NgModule } from '@angular/core';
import { GameComponent } from './game.component';

import { GameRoutingModule } from './game-routing.module'

import { CommonModule } from '@angular/common';

@NgModule({
	imports: [ GameRoutingModule,CommonModule ],
	declarations : [GameComponent]
})

export class GameModule{}