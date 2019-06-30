import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HistoryComponent } from './history/history.component';
import { TransferComponent } from './transfer/transfer.component';
import { AppRoutingModule } from './app-routing.modules';

@NgModule({
  declarations: [
    AppComponent,
    HistoryComponent,
    TransferComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
