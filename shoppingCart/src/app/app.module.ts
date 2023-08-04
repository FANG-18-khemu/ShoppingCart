import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllItemsComponent } from './all-items/all-items.component';
import { CartitemComponent } from './cartitem/cartitem.component';
import {HttpClientModule} from '@angular/common/http';
import { DescriptionPipe } from './description.pipe';
import { FormsModule } from '@angular/forms';
import { DisplaytableComponent } from './displaytable/displaytable.component';
@NgModule({
  declarations: [
    AppComponent,
    AllItemsComponent,
    CartitemComponent,
    DescriptionPipe,
    DisplaytableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
