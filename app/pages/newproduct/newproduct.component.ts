import { ProductsService } from './../../services/products.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-newproduct',
  templateUrl: './newproduct.component.html',
  styleUrls: ['./newproduct.component.scss']
})
export class NewproductComponent implements OnInit {
  //nuevo
  resetProductForm!: FormGroup;
  newProductForm!: FormGroup;
  newProduct: any = {
    name: '',
    price: '',
    description: '',
    image: '',
    stars: 0
  }

  constructor(private formBuilder: FormBuilder, private productService: ProductsService) {}
    ngOnInit(): void {
      this.newProductForm = this.formBuilder.group({
        name: ['', [Validators.required]],
        price: ['', [Validators.required, Validators.minLength(3)]],
        description: ['', [Validators.required]],
        image: ['', [Validators.required]],
        stars: [0, [Validators.required, Validators.min(0), Validators.max(5)]],
  
      });

      this.newProductForm.valueChanges.subscribe(changes => {
        this.newProduct = changes;
      })
  
    }

    onSubmit(){
      console.log(this.newProduct);

      this.productService.postProduct(this.newProduct).subscribe((data) => {
        console.log(data);
        console.log('producto creado');
        
      })


  
      this.newProductForm.reset();

    }
}
