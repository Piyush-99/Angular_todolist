import { Component } from '@angular/core';
import { ListService } from './list.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	constructor(private lservice: ListService) {

	}
	ngOnInit() {
      this.list = this.lservice.done;
	}

	list: string[];

	removeAll() {
		this.lservice.removeall();
	}
}
