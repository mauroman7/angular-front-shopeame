import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from './../../services/products.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-resetproduct',
  templateUrl: './resetproduct.component.html',
  styleUrls: ['./resetproduct.component.scss']
})
export class ResetproductComponent {
  otherproductForm!: FormGroup;
  id: number = this.productService.id;
  newProductForm: any = this.productService.product;
  // newProductForm: any = {
  //   name: '',
  //   price: '',
  //   description: '',
  //   image: '',
  //   stars: 0
  // }

  constructor(private formBuilder: FormBuilder, private productService: ProductsService,  private router: Router, private activatedRoute :ActivatedRoute){

  }

  ngOnInit(): void {

    this.otherproductForm = this.formBuilder.group({
      name: [this.newProductForm.name, [Validators.required]],
      price: [this.newProductForm.price, [Validators.required, Validators.minLength(3)]],
      description: [this.newProductForm.description, [Validators.required]],
      image: [this.newProductForm.image, [Validators.required]],
      stars: [this.newProductForm.stars, [Validators.required]],
    });

    this.otherproductForm!.valueChanges.subscribe(changes => {
      this.newProductForm = changes;
    })

  }

  onSubmit(){
    console.log(this.newProductForm);
    this.productService.putProduct(this.newProductForm, this.id).subscribe((data) => {
      console.log(data);
    })

    this.otherproductForm.reset();
    this.router.navigate([`/product/${this.id}`]);

  }
}
