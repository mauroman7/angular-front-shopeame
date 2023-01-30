import { ProductComponent } from './pages/product/product.component';
import { GestionComponent } from './pages/gestion/gestion.component';
import { ProductsComponent } from './pages/products/products.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '', component: HomeComponent
  },
  {
    path: 'product/:id', component: ProductComponent
  },
  {
    path: 'products', component: ProductsComponent
  },
  {
    path: 'gestion', component: GestionComponent
  },
  {
    path: ':id', component: ProductComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
