import { Component, OnInit } from '@angular/core'

@Component({
	moduleId: module.id,
	selector: 'my-welcome',
	templateUrl: 'welcome.component.html'
	stylesUrl: ['welcome.component.css']
})

export class WelcomeComponent implements OnInit{
	ngOnInit(){
		console.log('Welcome page')
	}
}