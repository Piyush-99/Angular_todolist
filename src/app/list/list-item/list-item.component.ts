import { Component, OnInit, Input } from '@angular/core';
import { ListService } from '../../list.service';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {

  constructor(private lservice: ListService) { }

  ngOnInit() {
  }
  
  @Input('list') list;

  sendtodone(list: string) {
  	this.lservice.removeel(list);
    this.lservice.addtodonelist(list);
  }

}
