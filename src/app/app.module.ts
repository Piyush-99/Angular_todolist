import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';
import { DoneComponent } from './done/done.component';
import { ListService } from './list.service';
import { ListItemComponent } from './list/list-item/list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    ListComponent,
    DoneComponent,
    ListItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
