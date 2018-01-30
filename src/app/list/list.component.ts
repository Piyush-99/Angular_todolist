import { Component, OnInit } from '@angular/core';
import { ListService } from '../list.service'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private lservice: ListService) { }

  list: string[];

  ngOnInit() {
   this.list = this.lservice.getlist();
  }

}
