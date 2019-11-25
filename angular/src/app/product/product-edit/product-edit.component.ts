import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ServiceService} from '../../services/service.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  updateProductForm: FormGroup;
  index = +this.activateRoute.snapshot.paramMap.get('id');
  constructor(private productService: ServiceService,
              private activateRoute: ActivatedRoute,
              private fb: FormBuilder,
              private route: Router) { }

  ngOnInit() {
    const product = this.productService.findById(this.index);
    this.updateProductForm = this.fb.group({
      id: [product.id, [Validators.required, Validators.minLength(4)]],
      name: [product.name, [Validators.required, Validators.minLength(4)]],
      price: [product.price, [Validators.required, Validators.minLength(4)]],
    });
  }
  get id() {
    return this.updateProductForm.get('id');
  }

  get name() {
    return this.updateProductForm.get('name');
  }

  get price() {
    return this.updateProductForm.get('price');
  }
  submit() {
    this.productService.update(this.updateProductForm.value, this.index);
    return this.route.navigate(['/products']);
  }
}
