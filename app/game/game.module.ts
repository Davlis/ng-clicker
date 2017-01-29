import { NgModule } from '@angular/core';
import { GameComponent } from './game.component';

import { GameRoutingModule } from './game-routing.module'

import { CommonModule } from '@angular/common';

import { CookieService } from 'angular2-cookie/services/cookies.service';

@NgModule({
	imports: [ GameRoutingModule,CommonModule ],
	providers: [ CookieService ],
	declarations : [GameComponent]
})

export class GameModule{}