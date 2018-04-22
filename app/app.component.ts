import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
   <router-outlet></router-outlet>
  `,
})
export class AppComponent implements OnInit {
  ngOnInit() {
    console.log('App component');
  }
}
