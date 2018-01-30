import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { ListService } from '../list.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private lservice: ListService) { }

  ngOnInit() {
  }

  disabled: Boolean = true;
  @ViewChild('text') text: ElementRef;

  onAdd(text: string){
    this.lservice.addlistelement(text);
    setTimeout( () => this.text.nativeElement.value = "",300)
    this.text.nativeElement.focus();
    this.disabled = true;
  }
  
  check(event) {
    if(event.target.value.length > 0)
  		this.disabled = false;
  	else
  		this.disabled = true;
  }
}
