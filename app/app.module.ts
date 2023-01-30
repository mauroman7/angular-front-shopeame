import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { GestionComponent } from './pages/gestion/gestion.component';
import { ProductComponent } from './pages/product/product.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import {RatingModule} from 'primeng/rating';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShopeameComponent } from './core/shopeame/shopeame.component';
import { FooterComponent } from './core/footer/footer.component';
import { NewproductComponent } from './pages/newproduct/newproduct.component';
import { FondoComponent } from './core/fondo/fondo.component';
import { ResetproductComponent } from './pages/resetproduct/resetproduct.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    GestionComponent,
    ProductComponent,
    NavbarComponent,
    ShopeameComponent,
    FooterComponent,
    NewproductComponent,
    FondoComponent,
    ResetproductComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RatingModule,
    FormsModule,
    ReactiveFormsModule,
    RatingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
