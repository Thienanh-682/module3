import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './core/menu/menu.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { StarComponent } from './star/star/star.component';
import { ProductAddComponent } from './product/product-add/product-add.component';
import { ProductEditComponent } from './product/product-edit/product-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ProductListComponent,
    StarComponent,
    ProductAddComponent,
    ProductEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
