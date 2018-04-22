import { NgModule } from '@angular/core';
import {
  Routes,
  RouterModule
} from '@angular/router';


import { WelcomeComponent } from './welcome/welcome.component';
import { AppComponent } from './app.component'
import { GameComponent } from './game/game.component';

export const routes: Routes = [
  {
    path: '',
    component: WelcomeComponent,
    children: [
      {
        path: 'game',
        loadChildren: 'app/game/game.module#GameModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
