import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductListComponent} from './product/product-list/product-list.component';
import {ProductAddComponent} from './product/product-add/product-add.component';
import {ProductEditComponent} from './product/product-edit/product-edit.component';


const routes: Routes = [
  { path: 'products', component: ProductListComponent},
  { path: 'products/create', component: ProductAddComponent},
  { path: 'products/:id/edit', component: ProductEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
