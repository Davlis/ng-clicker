import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CookieService } from 'angular2-cookie/services/cookies.service';

import { GameComponent } from './game.component';
import { GameRoutingModule } from './game-routing.module'

@NgModule({
  imports: [GameRoutingModule, CommonModule],
  providers: [CookieService],
  declarations: [GameComponent]
})

export class GameModule { }
