import { Router } from '@angular/router';
import { ProductsService } from './../../services/products.service';
import { Component, Input, OnInit } from '@angular/core';
import { filter } from 'rxjs';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})

//añadir implements Oninit
export class ProductsComponent implements OnInit{
  // cuando usamos nuestro archivo con objetos db.json
  productsList: any [] = [];
  paintedProducts: any[] = [];
  starList: any = {
    stars : 0
  }
  constructor( private productsService: ProductsService, private router: Router ){}
  ngOnInit(): void {
    this.productsService.getAllProducts().subscribe((data: any) => {
      console.log(data)
      // cuando usamos nuestro archivo con objetos db.json
      this.productsList = [...data]
      this.paintedProducts = [...data]
      this.starList = [...data]
      
    })
  }

  filtrar(name: string){
    let filteredProducts = this.productsList.filter((product) => product.name.toLowerCase().includes(name))
    this.paintedProducts = [... filteredProducts];
  }

  editar(product: any){
    this.productsService.setProduct(product)
    this.router.navigate([`/product/${product.id}`])
  }

}
